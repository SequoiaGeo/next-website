import { Resend } from "resend";
import { NextResponse } from "next/server";
import { checkEmailLead, escapeHtml } from "@/lib/spam-protection";

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

/** Coerce an untrusted value to a finite number, else undefined. */
function num(value: unknown): number | undefined {
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();

    // Honeypot plus name/email validation (same checks as /api/contact).
    const check = checkEmailLead(body);
    if (!check.ok) {
      if (check.silentDrop) {
        console.warn("[calculator-lead] dropped:", check.reason);
        // Respond success so bots get no feedback.
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ error: check.reason }, { status: 400 });
    }

    const { name, email } = check.clean;
    // Optional phone (the CSR calculator collects it; the marketing leak
    // calculator does not). Untrusted input: coerce, trim, cap.
    const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 30) : "";
    // Which calculator sent the lead. Sanitized to a safe slug.
    const sourceSlug =
      String(body.source || "marketing_leak_calculator")
        .replace(/[^a-zA-Z0-9 _-]/g, "")
        .slice(0, 60) || "marketing_leak_calculator";
    const isCsr = sourceSlug === "csr_calculator";
    const labels = isCsr
      ? {
          subjectPrefix: "CSR calculator lead",
          emailHeading: "New CSR Booking Rate Calculator lead",
          sourceLine: "sequoiageo.com/csr-calculator",
          ghlSource: "CSR Calculator",
          ghlTag: "csr-calculator",
        }
      : {
          subjectPrefix: "Calculator lead",
          emailHeading: "New Marketing Leak Calculator lead",
          sourceLine: "sequoiageo.com/marketing-leak-calculator",
          ghlSource: "Marketing Leak Calculator",
          ghlTag: "marketing-leak-calculator",
        };
    // Escape before interpolating into email HTML so lead values can't inject markup.
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);

    // Calculator numbers are untrusted input too: coerce or drop.
    const monthlySpend = num(body.monthlySpend);
    const monthlyCalls = num(body.monthlyCalls);
    const bookingRate = num(body.bookingRate);
    const avgTicket = num(body.avgTicket);
    const currentRevenue = num(body.currentRevenue);
    const annualGap = num(body.annualGap);

    const gapText = annualGap !== undefined ? fmt(annualGap) : "your revenue gap";

    // Capture the lead FIRST (notify Aaron + push to GHL), each isolated in its own
    // try/catch so one channel failing can never swallow the lead. The prospect
    // breakdown email is secondary: if the sender domain hiccups in Resend, we still
    // keep the lead. This is the fix for the silent-drop that hid broken capture.

    // 1. Notify Aaron (highest priority, never lose the lead to an email/CRM hiccup)
    try {
      await resend.emails.send({
        from: "Sequoia GEO Site <aaron@sequoiageo.com>",
        to: "Aaron@sequoiageo.com",
        subject: `${labels.subjectPrefix}: ${name} (gap ${gapText})`,
        html: `
          <div style="font-family: -apple-system, sans-serif; padding: 24px; color: #1a1a1a;">
            <h2 style="margin: 0 0 16px;">${labels.emailHeading}</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            ${safePhone ? `<p><strong>Phone:</strong> <a href="tel:${phone.replace(/\D/g, "")}">${safePhone}</a></p>` : ""}
            <p><strong>Monthly spend:</strong> ${monthlySpend !== undefined ? fmt(monthlySpend) : "-"}</p>
            <p><strong>Monthly calls:</strong> ${monthlyCalls ?? "-"}</p>
            <p><strong>Booking rate:</strong> ${bookingRate ?? "-"}%</p>
            <p><strong>Average ticket:</strong> ${avgTicket !== undefined ? fmt(avgTicket) : "-"}</p>
            <p><strong>Current monthly revenue:</strong> ${currentRevenue !== undefined ? fmt(currentRevenue) : "-"}</p>
            <p><strong>Annual gap:</strong> ${gapText}</p>
            <p><strong>Source:</strong> ${labels.sourceLine}</p>
          </div>
        `,
      });
    } catch (err) {
      console.error("[calculator-lead] Aaron notify email failed:", err);
    }

    // 2. Push to GHL (isolated, a CRM outage must not lose the lead either)
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    if (ghlWebhookUrl) {
      try {
        const r = await fetch(ghlWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: name.split(" ")[0],
            lastName: name.split(" ").slice(1).join(" ") || "",
            email,
            phone: phone || undefined,
            source: labels.ghlSource,
            tags: [labels.ghlTag, "website-lead"],
            customField: {
              monthly_spend: monthlySpend,
              monthly_calls: monthlyCalls,
              booking_rate: bookingRate,
              avg_ticket: avgTicket,
              annual_gap: annualGap,
            },
          }),
        });
        if (!r.ok) console.error(`[calculator-lead] GHL webhook returned ${r.status} for ${email}`);
      } catch (err) {
        console.error("[calculator-lead] GHL webhook error:", err);
      }
    }

    // 3. Send the breakdown to the prospect (secondary, failure here must not
    //    abort capture). Marketing leak calculator only: that form promises an
    //    emailed breakdown. The CSR calculator promises a call instead, so its
    //    leads get no automated email.
    if (!isCsr) {
      try {
        await resend.emails.send({
      from: "Aaron Husak <aaron@sequoiageo.com>",
      to: email,
      subject: "Your marketing leak breakdown",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
          <div style="margin-bottom: 24px;">
            <img src="https://sequoiageo.com/logo.png" alt="Sequoia GEO" style="height: 36px;" onerror="this.style.display='none'" />
          </div>
          <h1 style="font-size: 22px; font-weight: 700; margin: 0 0 12px;">Hey ${safeName}, here is your marketing leak breakdown.</h1>
          <p style="color: #555; line-height: 1.6; margin: 0 0 16px;">
            Based on the numbers you entered, here is where your marketing pipeline stands today:
          </p>
          <table style="width: 100%; border-collapse: collapse; margin: 0 0 20px;">
            <tr><td style="padding: 6px 0; color: #555;">Monthly marketing spend</td><td style="padding: 6px 0; text-align: right; font-weight: 600;">${monthlySpend !== undefined ? fmt(monthlySpend) : "-"}</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Monthly inbound calls</td><td style="padding: 6px 0; text-align: right; font-weight: 600;">${monthlyCalls ?? "-"}</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Booking rate</td><td style="padding: 6px 0; text-align: right; font-weight: 600;">${bookingRate ?? "-"}%</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Average ticket</td><td style="padding: 6px 0; text-align: right; font-weight: 600;">${avgTicket !== undefined ? fmt(avgTicket) : "-"}</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Current monthly revenue from marketing</td><td style="padding: 6px 0; text-align: right; font-weight: 600;">${currentRevenue !== undefined ? fmt(currentRevenue) : "-"}</td></tr>
          </table>
          <div style="background: #0D2318; border-radius: 10px; padding: 20px 24px; margin: 0 0 24px;">
            <p style="color: #6FCF97; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 6px;">Annual revenue gap</p>
            <p style="color: #6FCF97; font-size: 32px; font-weight: 800; margin: 0;">${gapText}</p>
            <p style="color: rgba(200,237,210,0.7); font-size: 14px; line-height: 1.5; margin: 8px 0 0;">
              That is the difference between your current booking rate and what a top-performing operation produces from the same spend. It does not require more marketing budget. It requires fixing what is leaking.
            </p>
          </div>
          <p style="color: #555; line-height: 1.6; margin: 0 0 12px;">
            Want me to look at where yours is actually leaking? The first conversation is a free audit. I will pull your numbers apart and tell you exactly where the gap is and how to close it.
          </p>
          <p style="margin: 0 0 24px;">
            <a href="https://www.sequoiageo.com/contact" style="display: inline-block; background: #1A5C3A; color: white; font-weight: 600; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-size: 15px;">
              Book your free audit
            </a>
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #999; font-size: 13px; line-height: 1.5; margin: 0;">
            Aaron Husak, Sequoia GEO, Fresno, CA<br />
            <a href="https://sequoiageo.com" style="color: #999;">sequoiageo.com</a>
          </p>
        </div>
      `,
        });
      } catch (emailErr) {
        console.error("[calculator-lead] prospect breakdown email failed:", emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Calculator lead error:", err);
    return NextResponse.json({ error: "Failed to process" }, { status: 500 });
  }
}
