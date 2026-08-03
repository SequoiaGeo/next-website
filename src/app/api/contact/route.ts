import { Resend } from "resend";
import { NextResponse } from "next/server";
import { checkLead, escapeHtml } from "@/lib/spam-protection";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();

    // --- Spam / bot protection (honeypot, timing, validation) ---
    const spam = checkLead(body, Date.now());
    if (!spam.ok) {
      if (spam.silentDrop) {
        // Looks like a bot. Return a 200 so it gets no signal, but send nothing.
        console.warn(`[contact] dropped bot submission: ${spam.reason}`);
        return NextResponse.json({ success: true });
      }
      // Real validation failure, tell the user what to fix.
      return NextResponse.json(
        { error: "Please enter a valid name, phone, and email." },
        { status: 400 }
      );
    }

    const { name, phone, email, company, message, smsConsent } = spam.clean;
    // Optional per-page source tag from inline lead forms (e.g. "hvac_seo_page").
    // Sanitized to a safe slug; falls back to the generic contact-form label.
    const source =
      String(body.source || "contact_form")
        .replace(/[^a-zA-Z0-9 _-]/g, "")
        .slice(0, 60) || "contact_form";
    // Escaped copies for safe interpolation into the notification email HTML.
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeMessage = escapeHtml(message);
    const safeSource = escapeHtml(source);

    // Send notification email to Aaron
    await resend.emails.send({
      from: "Sequoia GEO Site <aaron@sequoiageo.com>",
      to: "Aaron@sequoiageo.com",
      subject: `New contact form submission: ${safeName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
          <div style="background: #0D2318; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;">
            <p style="color: #3A9E6A; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 4px;">New Lead</p>
            <h2 style="color: white; font-size: 20px; font-weight: 700; margin: 0;">sequoiageo.com Contact Form</h2>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888; width: 100px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; font-weight: 600; color: #1a1a1a;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; font-weight: 600; color: #1a1a1a;">
                <a href="tel:${phone.replace(/\D/g, "")}" style="color: #1A5C3A;">${safePhone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; font-weight: 600; color: #1a1a1a;">
                <a href="mailto:${safeEmail}" style="color: #1A5C3A;">${safeEmail}</a>
              </td>
            </tr>
            ${safeCompany ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; font-weight: 600; color: #1a1a1a;">${safeCompany}</td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">SMS Consent</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a1a;">${smsConsent ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">Source</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a1a;">${safeSource}</td>
            </tr>
            ${safeMessage ? `
            <tr>
              <td style="padding: 10px 0; font-size: 13px; color: #888; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; font-size: 14px; color: #1a1a1a; line-height: 1.6;">${safeMessage}</td>
            </tr>
            ` : ""}
          </table>

          <div style="margin-top: 28px; padding: 16px 20px; background: #f5faf7; border-radius: 8px; border-left: 3px solid #3A9E6A;">
            <p style="margin: 0; font-size: 13px; color: #555;">
              Submitted from <strong>sequoiageo.com</strong>. Reply directly to this email or call the number above.
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
          companyName: company || undefined,
          message,
          source,
          tags: ["contact-form", "website-lead", source],
        }),
      })
        .then((r) => {
          if (!r.ok) console.error(`[contact] GHL webhook returned ${r.status} for ${email}`);
        })
        .catch((err) => {
          // Don't fail the response, but leave a trace so silent CRM drops are visible in logs.
          console.error("[contact] GHL webhook error:", err);
        });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
