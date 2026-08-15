import { Resend } from "resend";
import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { checkLead, escapeHtml } from "@/lib/spam-protection";

type CampaignAttribution = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  landing_path: string;
};

type AiAttribution = {
  ai_engine_source: string;
  referrer_host: string;
  landing_path: string;
};

const AI_ENGINES = new Set([
  "chatgpt",
  "google_aio",
  "gemini",
  "perplexity",
  "claude",
  "copilot",
  "you",
]);

const FORM_SOURCES = new Set([
  "contact_form",
  "homepage_top",
  "audit_page",
  "hvac_seo_page",
  "plumbing_seo_page",
  "roofing_seo_page",
  "hvac_marketing_page",
  "best_plumbing_agencies_midlist",
  "how_much_does_seo_cost_for_contractors",
  "how_much_should_plumbers_spend_on_marketing",
  "how_much_should_hvac_companies_spend_on_marketing",
  "how_much_do_hvac_plumbing_leads_cost",
  "lsa_statistics_page",
  "hvac_statistics_page",
  "plumbing_statistics_page",
  "google_lsa_changes_2026",
  "chatgpt_lp_form",
  "immanuel_lp_form",
]);

function sanitizeCampaignValue(value: unknown, maxLength = 100): string {
  return String(value || "")
    .trim()
    .replace(/[^a-zA-Z0-9 ._-]/g, "")
    .slice(0, maxLength);
}

function sanitizeLandingPath(value: unknown): string {
  const cleaned = String(value || "")
    .trim()
    .replace(/[^a-zA-Z0-9/_-]/g, "")
    .slice(0, 200);
  if (!cleaned) return "";
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
}

function readCampaignAttribution(value: unknown): CampaignAttribution | null {
  if (!value || typeof value !== "object") return null;
  const fields = value as Record<string, unknown>;
  const attribution = {
    utm_source: sanitizeCampaignValue(fields.utm_source),
    utm_medium: sanitizeCampaignValue(fields.utm_medium),
    utm_campaign: sanitizeCampaignValue(fields.utm_campaign),
    utm_content: sanitizeCampaignValue(fields.utm_content, 120),
    landing_path: sanitizeLandingPath(fields.landing_path),
  };
  if (!attribution.utm_source && !attribution.utm_campaign) return null;
  return attribution;
}

function readAiAttribution(value: unknown): AiAttribution | null {
  if (!value || typeof value !== "object") return null;
  const fields = value as Record<string, unknown>;
  const engine = String(fields.ai_engine_source || "").toLowerCase();
  if (!AI_ENGINES.has(engine)) return null;

  return {
    ai_engine_source: engine,
    referrer_host: String(fields.referrer_host || "")
      .toLowerCase()
      .replace(/[^a-z0-9.-]/g, "")
      .slice(0, 120),
    landing_path: sanitizeLandingPath(fields.landing_path),
  };
}

function isSyntheticAttributionTest(name: string, email: string, phone: string): boolean {
  const normalizedName = name.trim().toLowerCase();
  const normalizedEmail = email.trim().toLowerCase();
  const phoneDigits = phone.replace(/\D/g, "");

  return (
    normalizedName.startsWith("internal attribution qa ") &&
    normalizedEmail.endsWith("@example.com") &&
    phoneDigits.startsWith("555010")
  );
}

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();

    // --- Spam / bot protection (honeypot and validation) ---
    const spam = checkLead(body);
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
    const leadId = randomUUID();
    // Optional per-page source tag from inline lead forms (e.g. "hvac_seo_page").
    // Sanitized to a safe slug; falls back to the generic contact-form label.
    const requestedSource =
      String(body.source || "contact_form")
        .replace(/[^a-zA-Z0-9 _-]/g, "")
        .slice(0, 60) || "contact_form";
    const source = FORM_SOURCES.has(requestedSource) ? requestedSource : "contact_form";
    const campaignAttribution = readCampaignAttribution(body.campaignAttribution);
    const aiAttribution = readAiAttribution(body.aiAttribution);
    const isSyntheticTest = isSyntheticAttributionTest(name, email, phone);
    // Escaped copies for safe interpolation into the notification email HTML.
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeMessage = escapeHtml(message);
    const safeSource = escapeHtml(source);
    const safeCampaign = campaignAttribution
      ? {
          utm_source: escapeHtml(campaignAttribution.utm_source),
          utm_medium: escapeHtml(campaignAttribution.utm_medium),
          utm_campaign: escapeHtml(campaignAttribution.utm_campaign),
          utm_content: escapeHtml(campaignAttribution.utm_content),
          landing_path: escapeHtml(campaignAttribution.landing_path),
        }
      : null;
    const safeAiAttribution = aiAttribution
      ? {
          ai_engine_source: escapeHtml(aiAttribution.ai_engine_source),
          referrer_host: escapeHtml(aiAttribution.referrer_host),
          landing_path: escapeHtml(aiAttribution.landing_path),
        }
      : null;

    // Send notification email to Aaron
    const notification = await resend.emails.send({
      from: "Sequoia GEO Site <aaron@sequoiageo.com>",
      to: "Aaron@sequoiageo.com",
      subject: `${isSyntheticTest ? "[TEST] " : ""}New website lead ${leadId.slice(0, 8)}: ${safeName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
          <div style="background: #0D2318; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;">
            <p style="color: #3A9E6A; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 4px;">New Lead</p>
            <h2 style="color: white; font-size: 20px; font-weight: 700; margin: 0;">sequoiageo.com Contact Form</h2>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888; width: 100px;">Lead ID</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; font-weight: 600; color: #1a1a1a;">${leadId}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">Record type</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a1a;">${isSyntheticTest ? "Internal attribution test" : "Website inquiry"}</td>
            </tr>
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
            ${safeCampaign ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">Campaign</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a1a;">
                ${safeCampaign.utm_source || "direct"} / ${safeCampaign.utm_medium || "not_set"} / ${safeCampaign.utm_campaign || "not_set"}
                ${safeCampaign.utm_content ? `<br><span style="color: #777;">Content: ${safeCampaign.utm_content}</span>` : ""}
                ${safeCampaign.landing_path ? `<br><span style="color: #777;">Landing page: ${safeCampaign.landing_path}</span>` : ""}
              </td>
            </tr>
            ` : ""}
            ${safeAiAttribution ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">AI referral</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a1a;">
                ${safeAiAttribution.ai_engine_source}
                ${safeAiAttribution.referrer_host ? `<br><span style="color: #777;">Referrer: ${safeAiAttribution.referrer_host}</span>` : ""}
                ${safeAiAttribution.landing_path ? `<br><span style="color: #777;">Landing page: ${safeAiAttribution.landing_path}</span>` : ""}
              </td>
            </tr>
            ` : ""}
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

    if (notification?.error) {
      console.error("[contact] notification email error:", notification.error);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    // Also push to GHL webhook if configured
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    if (ghlWebhookUrl) {
      await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(5000),
        body: JSON.stringify({
          firstName: name.split(" ")[0],
          lastName: name.split(" ").slice(1).join(" ") || "",
          email,
          phone,
          companyName: company || undefined,
          message,
          leadId,
          source,
          // Flat fields are the sole HighLevel workflow mapping contract.
          websiteLeadId: leadId,
          websiteSource: source,
          utmSource: campaignAttribution?.utm_source || "",
          utmMedium: campaignAttribution?.utm_medium || "",
          utmCampaign: campaignAttribution?.utm_campaign || "",
          utmContent: campaignAttribution?.utm_content || "",
          campaignLandingPath: campaignAttribution?.landing_path || "",
          aiEngineSource: aiAttribution?.ai_engine_source || "",
          aiReferrerHost: aiAttribution?.referrer_host || "",
          aiLandingPath: aiAttribution?.landing_path || "",
          isSyntheticTest,
          tags: isSyntheticTest
            ? ["internal-attribution-test"]
            : ["contact-form", "website-lead", source],
        }),
      })
        .then((r) => {
          if (!r.ok) console.error(`[contact] GHL webhook returned ${r.status} for lead ${leadId}`);
        })
        .catch((err) => {
          // Don't fail the response, but leave a trace so silent CRM drops are visible in logs.
          console.error(`[contact] GHL webhook error for lead ${leadId}:`, err);
        });
    }

    return NextResponse.json({ success: true, leadId });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
