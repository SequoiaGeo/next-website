import { Resend } from "resend";
import { NextResponse } from "next/server";

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, email, monthlySpend, monthlyCalls, bookingRate, avgTicket, currentRevenue, annualGap } = body;

    if (!email || !name) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const gapText = typeof annualGap === "number" ? fmt(annualGap) : "your revenue gap";

    // 1. Send the breakdown to the prospect
    await resend.emails.send({
      from: "Aaron Husak <aaron@sequoiageo.com>",
      to: email,
      subject: "Your marketing leak breakdown",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
          <div style="margin-bottom: 24px;">
            <img src="https://sequoiageo.com/logo.png" alt="Sequoia GEO" style="height: 36px;" onerror="this.style.display='none'" />
          </div>
          <h1 style="font-size: 22px; font-weight: 700; margin: 0 0 12px;">Hey ${name}, here is your marketing leak breakdown.</h1>
          <p style="color: #555; line-height: 1.6; margin: 0 0 16px;">
            Based on the numbers you entered, here is where your marketing pipeline stands today:
          </p>
          <table style="width: 100%; border-collapse: collapse; margin: 0 0 20px;">
            <tr><td style="padding: 6px 0; color: #555;">Monthly marketing spend</td><td style="padding: 6px 0; text-align: right; font-weight: 600;">${typeof monthlySpend === "number" ? fmt(monthlySpend) : "-"}</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Monthly inbound calls</td><td style="padding: 6px 0; text-align: right; font-weight: 600;">${monthlyCalls ?? "-"}</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Booking rate</td><td style="padding: 6px 0; text-align: right; font-weight: 600;">${bookingRate ?? "-"}%</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Average ticket</td><td style="padding: 6px 0; text-align: right; font-weight: 600;">${typeof avgTicket === "number" ? fmt(avgTicket) : "-"}</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Current monthly revenue from marketing</td><td style="padding: 6px 0; text-align: right; font-weight: 600;">${typeof currentRevenue === "number" ? fmt(currentRevenue) : "-"}</td></tr>
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
            <a href="https://calendar.app.google/Ks81vE1H3J9mAmvY7" style="display: inline-block; background: #1A5C3A; color: white; font-weight: 600; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-size: 15px;">
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

    // 2. Notify Aaron with the full lead detail
    await resend.emails.send({
      from: "Sequoia GEO Site <aaron@sequoiageo.com>",
      to: "Aaron@sequoiageo.com",
      subject: `Calculator lead: ${name} (gap ${gapText})`,
      html: `
        <div style="font-family: -apple-system, sans-serif; padding: 24px; color: #1a1a1a;">
          <h2 style="margin: 0 0 16px;">New Marketing Leak Calculator lead</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Monthly spend:</strong> ${typeof monthlySpend === "number" ? fmt(monthlySpend) : "-"}</p>
          <p><strong>Monthly calls:</strong> ${monthlyCalls ?? "-"}</p>
          <p><strong>Booking rate:</strong> ${bookingRate ?? "-"}%</p>
          <p><strong>Average ticket:</strong> ${typeof avgTicket === "number" ? fmt(avgTicket) : "-"}</p>
          <p><strong>Current monthly revenue:</strong> ${typeof currentRevenue === "number" ? fmt(currentRevenue) : "-"}</p>
          <p><strong>Annual gap:</strong> ${gapText}</p>
          <p><strong>Source:</strong> sequoiageo.com/marketing-leak-calculator</p>
        </div>
      `,
    });

    // 3. Push to GHL
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    if (ghlWebhookUrl) {
      await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: String(name).split(" ")[0],
          lastName: String(name).split(" ").slice(1).join(" ") || "",
          email,
          source: "Marketing Leak Calculator",
          tags: ["marketing-leak-calculator", "website-lead"],
          customField: {
            monthly_spend: monthlySpend,
            monthly_calls: monthlyCalls,
            booking_rate: bookingRate,
            avg_ticket: avgTicket,
            annual_gap: annualGap,
          },
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Calculator lead error:", err);
    return NextResponse.json({ error: "Failed to process" }, { status: 500 });
  }
}
