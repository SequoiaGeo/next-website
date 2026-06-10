import { Resend } from "resend";
import { NextResponse } from "next/server";
import { checkEmailLead, verifyRecaptcha, escapeHtml } from "@/lib/spam-protection";

export async function POST(req: Request) {
  // Instantiate inside the handler so missing env vars don't crash the build
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();

    // Honeypot + timing + name/email validation (same layers as /api/contact).
    const check = checkEmailLead(body, Date.now());
    if (!check.ok) {
      if (check.silentDrop) {
        console.warn("[guide-capture] dropped:", check.reason);
        // Respond success so bots get no feedback.
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ error: check.reason }, { status: 400 });
    }

    const captchaOk = await verifyRecaptcha(String(body.recaptchaToken ?? ""), {
      expectedAction: "guide_capture",
    });
    if (!captchaOk) {
      console.warn("[guide-capture] dropped: recaptcha failed");
      return NextResponse.json({ success: true });
    }

    const { name, email } = check.clean;
    // Escape before interpolating into email HTML so lead values can't inject markup.
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);

    // 1. Send delivery email to subscriber via Resend
    await resend.emails.send({
      from: "Aaron Husak <aaron@sequoiageo.com>",
      to: email,
      subject: "Your Google LSA Guide",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
          <div style="margin-bottom: 24px;">
            <img src="https://sequoiageo.com/logo.png" alt="Sequoia GEO" style="height: 36px;" onerror="this.style.display='none'" />
          </div>
          <h1 style="font-size: 22px; font-weight: 700; margin: 0 0 12px;">Hey ${safeName}, here's your LSA guide.</h1>
          <p style="color: #555; line-height: 1.6; margin: 0 0 20px;">
            11 pages covering everything you need to manage your Google Local Service Ads account
            and stop paying for leads that go nowhere.
          </p>
          <a href="https://sequoiageo.com/lsa-guide.pdf"
             style="display: inline-block; background: #1A5C3A; color: white; font-weight: 600; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-size: 15px; margin-bottom: 28px;">
            Download the Guide (PDF)
          </a>
          <p style="color: #555; line-height: 1.6; margin: 0 0 12px;">
            If you want someone to audit your LSA setup and tell you whether you're leaving money
            on the table, that's what the first conversation is for.
          </p>
          <p style="margin: 0 0 24px;">
            <a href="https://sequoiageo.com/contact" style="color: #1A5C3A; font-weight: 600;">
              Book a free strategy call →
            </a>
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #999; font-size: 13px; line-height: 1.5; margin: 0;">
            Aaron Husak · Sequoia GEO · Fresno, CA<br />
            <a href="https://sequoiageo.com" style="color: #999;">sequoiageo.com</a>
          </p>
        </div>
      `,
    });

    // 2. Send lead notification to Aaron
    await resend.emails.send({
      from: "Sequoia GEO Site <aaron@sequoiageo.com>",
      to: "Aaron@sequoiageo.com",
      subject: `New LSA guide download: ${name}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; padding: 24px; color: #1a1a1a;">
          <h2 style="margin: 0 0 16px;">New LSA guide download</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Source:</strong> sequoiageo.com/lsa-guide</p>
        </div>
      `,
    });

    // 3. Push contact to GHL via webhook
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    if (ghlWebhookUrl) {
      await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: name.split(" ")[0],
          lastName: name.split(" ").slice(1).join(" ") || "",
          email,
          source: "LSA Guide Download",
          tags: ["lsa-guide", "website-lead"],
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Guide capture error:", err);
    return NextResponse.json({ error: "Failed to process" }, { status: 500 });
  }
}
