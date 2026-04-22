import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, phone, email, message, smsConsent } = await req.json();

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required" },
        { status: 400 }
      );
    }

    // Send notification email to Aaron
    await resend.emails.send({
      from: "Sequoia GEO Site <aaron@sequoiageo.com>",
      to: "Aaron@sequoiageo.com",
      subject: `New contact form submission: ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
          <div style="background: #0D2318; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;">
            <p style="color: #3A9E6A; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 4px;">New Lead</p>
            <h2 style="color: white; font-size: 20px; font-weight: 700; margin: 0;">sequoiageo.com Contact Form</h2>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888; width: 100px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; font-weight: 600; color: #1a1a1a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; font-weight: 600; color: #1a1a1a;">
                <a href="tel:${phone.replace(/\D/g, "")}" style="color: #1A5C3A;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; font-weight: 600; color: #1a1a1a;">
                <a href="mailto:${email}" style="color: #1A5C3A;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">SMS Consent</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a1a;">${smsConsent ? "Yes" : "No"}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px 0; font-size: 13px; color: #888; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; font-size: 14px; color: #1a1a1a; line-height: 1.6;">${message}</td>
            </tr>
            ` : ""}
          </table>

          <div style="margin-top: 28px; padding: 16px 20px; background: #f5faf7; border-radius: 8px; border-left: 3px solid #3A9E6A;">
            <p style="margin: 0; font-size: 13px; color: #555;">
              Submitted from <strong>sequoiageo.com</strong> — reply directly to this email or call the number above.
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    // Also push to GHL webhook if configured
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    if (ghlWebhookUrl) {
      await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: name.split(" ")[0],
          lastName: name.split(" ").slice(1).join(" ") || "",
          email,
          phone,
          message,
          source: "Contact Form",
          tags: ["contact-form", "website-lead"],
        }),
      }).catch(() => {
        // Don't fail the response if GHL webhook errors
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
