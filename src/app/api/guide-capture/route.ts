import { Resend } from "resend";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { checkEmailLead, escapeHtml } from "@/lib/spam-protection";
import { isSyntheticAttributionTest } from "@/lib/lead-capture-policy.mjs";
import { captureWebsiteLead } from "@/lib/highlevel-lead-capture.mjs";

export async function POST(req: Request) {
  // Instantiate inside the handler so missing env vars don't crash the build
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();

    // Honeypot plus name/email validation (same checks as /api/contact).
    const check = checkEmailLead(body);
    if (!check.ok) {
      if (check.silentDrop) {
        console.warn("[guide-capture] dropped:", check.reason);
        // Respond success so bots get no feedback.
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ error: check.reason }, { status: 400 });
    }

    const { name, email } = check.clean;
    const leadId = randomUUID();
    const isSyntheticTest = isSyntheticAttributionTest({ name, email });
    // Escape before interpolating into email HTML so lead values can't inject markup.
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);

    // Both guide forms post here. Branch content on the client-sent source so
    // AI-guide subscribers stop receiving the LSA guide email by mistake.
    const isAiGuide = /ai/i.test(String(body.source || ""));
    const guide = isAiGuide
      ? {
          subject: "Your AI Website SEO Guide",
          heading: `Hey ${safeName}, here's your AI SEO guide.`,
          blurb:
            "A practical guide to getting your website found in AI search (ChatGPT, Gemini, AI Overviews) as well as classic Google results.",
          pdfUrl: "https://sequoiageo.com/ai-website-seo-guide.pdf",
          notifSubject: `New AI SEO guide download: ${name}`,
          notifSource: "sequoiageo.com/ai-website-seo-guide",
          ghlSource: "AI SEO Guide Download",
          ghlTag: "ai-seo-guide",
        }
      : {
          subject: "Your Google LSA Guide",
          heading: `Hey ${safeName}, here's your LSA guide.`,
          blurb:
            "11 pages covering everything you need to manage your Google Local Service Ads account and stop paying for leads that go nowhere.",
          pdfUrl: "https://sequoiageo.com/lsa-guide.pdf",
          notifSubject: `New LSA guide download: ${name}`,
          notifSource: "sequoiageo.com/lsa-guide",
          ghlSource: "LSA Guide Download",
          ghlTag: "lsa-guide",
        };

    // 1 + 2. Send the subscriber delivery email AND Aaron's lead notification
    // with Promise.allSettled so one failing can never prevent the other from
    // being attempted. The old sequential version sent the subscriber email
    // first; if it threw, Aaron's notification never went out and the lead was
    // lost entirely. Both sends are attempted, and any failure is logged.
    const subscriberEmail = isSyntheticTest ? Promise.resolve(null) : resend.emails.send({
      from: "Aaron Husak <aaron@sequoiageo.com>",
      to: email,
      subject: guide.subject,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
          <div style="margin-bottom: 24px;">
            <img src="https://sequoiageo.com/logo.png" alt="Sequoia GEO" style="height: 36px;" onerror="this.style.display='none'" />
          </div>
          <h1 style="font-size: 22px; font-weight: 700; margin: 0 0 12px;">${guide.heading}</h1>
          <p style="color: #555; line-height: 1.6; margin: 0 0 20px;">
            ${guide.blurb}
          </p>
          <a href="${guide.pdfUrl}"
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

    const notificationEmail = resend.emails.send({
      from: "Sequoia GEO Site <aaron@sequoiageo.com>",
      to: "Aaron@sequoiageo.com",
      subject: `${isSyntheticTest ? "[TEST] " : ""}${guide.notifSubject}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; padding: 24px; color: #1a1a1a;">
          <h2 style="margin: 0 0 16px;">New guide download</h2>
          <p><strong>Lead ID:</strong> ${leadId}</p>
          <p><strong>Record type:</strong> ${isSyntheticTest ? "Internal attribution test" : "Guide capture"}</p>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Source:</strong> ${guide.notifSource}</p>
        </div>
      `,
    });

    const emailResults = await Promise.allSettled([subscriberEmail, notificationEmail]);
    const labels = ["subscriber delivery", "Aaron notification"] as const;
    const landed = emailResults.map((result, i) => {
      if (result.status === "rejected") {
        console.error(`[guide-capture] ${labels[i]} email failed:`, result.reason);
        return false;
      }
      // The Resend SDK resolves with { data, error } instead of throwing on
      // API-level errors, so a fulfilled promise still needs its error checked.
      if (result.value === null) return false;
      const apiError = (result.value as { error?: unknown })?.error;
      if (apiError) {
        console.error(`[guide-capture] ${labels[i]} email error:`, apiError);
        return false;
      }
      return true;
    });

    // 3. Record the contact and append-only lead evidence in HighLevel. The
    // legacy webhook is used only when direct credentials are entirely absent.
    // A subscriber delivery is not an internal lead record, so the API reports
    // capture only when Aaron's notification or the CRM ledger succeeds.
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    const firstName = name.split(" ")[0];
    const lastName = name.split(" ").slice(1).join(" ") || "";
    const source = isAiGuide ? "ai_seo_guide" : "lsa_guide";
    const legacyWebhookPayload = {
      firstName,
      lastName,
      email,
      source: isSyntheticTest ? undefined : guide.ghlSource,
      leadId,
      websiteLeadId: leadId,
      isSyntheticTest,
      tags: isSyntheticTest
        ? ["internal-attribution-test"]
        : [guide.ghlTag, "website-lead"],
    };
    const crmCapture = await captureWebsiteLead(
      {
        leadId,
        captureKind: "guide",
        firstName,
        lastName,
        email,
        source,
        landingPath: isAiGuide ? "/ai-website-seo-guide" : "/lsa-guide",
        isSyntheticTest,
      },
      {
        legacyWebhookUrl: ghlWebhookUrl,
        legacyWebhookPayload,
      },
    );

    if (!landed[1] && !crmCapture.durable) {
      return NextResponse.json({ error: "Failed to process" }, { status: 500 });
    }
    return NextResponse.json({ success: true, captured: true, leadId, isSyntheticTest });
  } catch (err) {
    console.error("Guide capture error:", err);
    return NextResponse.json({ error: "Failed to process" }, { status: 500 });
  }
}
