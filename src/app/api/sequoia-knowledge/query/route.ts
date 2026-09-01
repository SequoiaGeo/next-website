import { createHash, randomUUID } from "node:crypto";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import catalog from "@/data/sequoia-knowledge.catalog.json";
import { answerSequoiaQuestion } from "@/lib/sequoia-knowledge-engine.mjs";
import { readKnowledgeQueryRecord } from "@/lib/sequoia-knowledge-query-record.mjs";
import { escapeHtml } from "@/lib/spam-protection";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type RateBucket = Map<string, number[]>;

const globalRateState = globalThis as typeof globalThis & {
  sequoiaKnowledgeQueryRate?: RateBucket;
};

const rateState: RateBucket =
  globalRateState.sequoiaKnowledgeQueryRate ||
  (globalRateState.sequoiaKnowledgeQueryRate = new Map<string, number[]>());

function response(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}

function isSameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");
  return origin === request.nextUrl.origin && (!fetchSite || fetchSite === "same-origin");
}

function consumeServerBudget(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const key = createHash("sha256").update(forwarded).digest("hex");
  const now = Date.now();
  const windowMs = 5 * 60_000;
  const recent = (rateState.get(key) || []).filter((timestamp) => now - timestamp <= windowMs);

  if (recent.length >= 12) return false;
  rateState.set(key, [...recent, now]);

  if (rateState.size > 2_000) {
    for (const [entryKey, timestamps] of rateState.entries()) {
      if (!timestamps.some((timestamp) => now - timestamp <= windowMs)) rateState.delete(entryKey);
    }
  }
  return true;
}

export async function POST(request: NextRequest) {
  const featureEnabled = process.env.SEQUOIA_KNOWLEDGE_ENABLED === "true";
  const killSwitch = process.env.SEQUOIA_KNOWLEDGE_KILL_SWITCH === "true";
  if (!featureEnabled || killSwitch) return response({ error: "not_found" }, 404);

  if (!isSameOrigin(request)) return response({ error: "forbidden" }, 403);
  if (!consumeServerBudget(request)) return response({ error: "rate_limited" }, 429);

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > 2_048) return response({ error: "payload_too_large" }, 413);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return response({ error: "invalid_json" }, 400);
  }

  const record = readKnowledgeQueryRecord(body);
  if (!record.ok) return response({ error: record.error }, 400);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return response({ error: "recording_unavailable" }, 503);

  const answer = answerSequoiaQuestion(catalog, record.value.question);
  const recordId = randomUUID();
  const safeQuestion = escapeHtml(record.value.question);
  const safeIntent = escapeHtml(String(answer.intent || "unsupported"));
  const safeReason = escapeHtml(String(answer.reason || "catalog_answer"));
  const safeSurface = escapeHtml(record.value.surface);
  const safeInputMethod = escapeHtml(record.value.inputMethod);
  const safeCitations = Array.isArray(answer.citations)
    ? answer.citations
        .map((citation) => escapeHtml(String(citation.path || "")))
        .filter(Boolean)
        .join("<br>")
    : "";

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: "Sequoia GEO Site <aaron@sequoiageo.com>",
      to: "Aaron@sequoiageo.com",
      subject: `[Ask Sequoia] Submitted search (${safeInputMethod})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 640px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
          <div style="background: #0D2318; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;">
            <p style="color: #3A9E6A; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 4px;">Ask Sequoia</p>
            <h2 style="color: white; font-size: 20px; font-weight: 700; margin: 0;">Submitted knowledge search</h2>
          </div>
          <p style="font-size: 18px; line-height: 1.6; font-weight: 600; margin: 0 0 24px;">${safeQuestion}</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 9px 0; border-bottom: 1px solid #eee; color: #777; width: 150px;">Input</td><td style="padding: 9px 0; border-bottom: 1px solid #eee;">${safeInputMethod}</td></tr>
            <tr><td style="padding: 9px 0; border-bottom: 1px solid #eee; color: #777;">Surface</td><td style="padding: 9px 0; border-bottom: 1px solid #eee;">${safeSurface}</td></tr>
            <tr><td style="padding: 9px 0; border-bottom: 1px solid #eee; color: #777;">Intent</td><td style="padding: 9px 0; border-bottom: 1px solid #eee;">${safeIntent}</td></tr>
            <tr><td style="padding: 9px 0; border-bottom: 1px solid #eee; color: #777;">Outcome</td><td style="padding: 9px 0; border-bottom: 1px solid #eee;">${answer.refused ? "Refused" : "Answered"}</td></tr>
            <tr><td style="padding: 9px 0; border-bottom: 1px solid #eee; color: #777;">Reason</td><td style="padding: 9px 0; border-bottom: 1px solid #eee;">${safeReason}</td></tr>
            <tr><td style="padding: 9px 0; border-bottom: 1px solid #eee; color: #777;">Catalog</td><td style="padding: 9px 0; border-bottom: 1px solid #eee;">${escapeHtml(catalog.catalogVersion)}</td></tr>
            ${safeCitations ? `<tr><td style="padding: 9px 0; border-bottom: 1px solid #eee; color: #777; vertical-align: top;">Citations</td><td style="padding: 9px 0; border-bottom: 1px solid #eee;">${safeCitations}</td></tr>` : ""}
          </table>
          <p style="margin-top: 20px; color: #777; font-size: 13px; line-height: 1.5;">Record ${recordId}. Submitted ${new Date().toISOString()}. This search was recorded for website and knowledge-experience improvement. It is not a lead.</p>
        </div>
      `,
    });

    if (result.error) {
      console.error("[sequoia-knowledge-query] recording provider error");
      return response({ error: "recording_failed" }, 502);
    }
  } catch {
    console.error("[sequoia-knowledge-query] recording failed");
    return response({ error: "recording_failed" }, 502);
  }

  return response({ recorded: true }, 202);
}
