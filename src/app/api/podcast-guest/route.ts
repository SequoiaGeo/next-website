import { createHash } from "node:crypto";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const limits = { name: 120, email: 254, companyRole: 200, profileUrl: 500, topic: 500, audienceFit: 1500, experience: 2000, actionableTip: 1500 } as const;
type Field = keyof typeof limits;
const failure = (error: string, status: number) => NextResponse.json({ error }, { status });

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin");
    if (origin && origin !== new URL(req.url).origin) return failure("Please use the form on this website.", 403);
    if (!req.headers.get("content-type")?.includes("application/json")) return failure("Invalid request format.", 415);
    if (Number(req.headers.get("content-length")) > 24000) return failure("Application is too large.", 413);
    const reader = req.body?.getReader();
    if (!reader) return failure("Invalid request.", 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 24000) { await reader.cancel(); return failure("Application is too large.", 413); }
      chunks.push(value);
    }
    const raw = Buffer.concat(chunks).toString("utf8");
    let body;
    try { body = JSON.parse(raw); } catch { return failure("Invalid request.", 400); }
    if (!body || typeof body !== "object" || Array.isArray(body)) return failure("Invalid request.", 400);
    if (typeof body.website === "string" && body.website.trim()) return NextResponse.json({ success: true });
    const clean = {} as Record<Field, string>;
    for (const field of Object.keys(limits) as Field[]) {
      if (field === "profileUrl" && (body[field] === undefined || body[field] === "")) { clean[field] = ""; continue; }
      if (typeof body[field] !== "string" || !body[field].trim() || body[field].length > limits[field]) return failure("Please complete all required fields and shorten any responses that are too long.", 400);
      clean[field] = body[field].trim().replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
      if (!clean[field].trim()) return failure("Please complete all required fields.", 400);
    }
    if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(clean.email) || /[\r\n]/.test(clean.email)) return failure("Please enter a valid email address.", 400);
    if (clean.profileUrl) {
      try { if (!["https:", "http:"].includes(new URL(clean.profileUrl).protocol)) return failure("Please enter an http or https profile URL.", 400); }
      catch { return failure("Please enter a complete website or LinkedIn URL.", 400); }
    }
    if (body.acknowledged !== true) return failure("Please acknowledge the show format and application contact permission.", 400);
    if (!process.env.RESEND_API_KEY) return failure("Email is temporarily unavailable. Please try again later.", 503);
    const text = [
      "New A Chat with Chat guest application", "",
      `Name: ${clean.name}`, `Email: ${clean.email}`, `Company and role: ${clean.companyRole}`, `Website or LinkedIn: ${clean.profileUrl || "Not supplied"}`, "",
      `Proposed topic:\n${clean.topic}`, "", `Relevance to home service owners:\n${clean.audienceFit}`, "",
      `Firsthand experience or example:\n${clean.experience}`, "", `One actionable tip:\n${clean.actionableTip}`, "",
      "Acknowledged: weekly 30 to 45 minute video podcast with Aaron and ChatGPT AI co-host; contact about application only.",
      "Source: /podcast/apply. Guest application only, not a marketing lead or newsletter subscription.",
    ].join("\n");
    const key = createHash("sha256").update(`${new Date().toISOString().slice(0, 10)}:${JSON.stringify(clean)}`).digest("hex");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: "Sequoia GEO Site <aaron@sequoiageo.com>",
      to: "Aaron@sequoiageo.com",
      replyTo: clean.email,
      subject: "Podcast guest application | A Chat with Chat",
      text,
    }, { idempotencyKey: `podcast-guest-${key}` });
    if (result.error || !result.data?.id) return failure("We could not send your application. Please try again.", 502);
    return NextResponse.json({ success: true });
  } catch {
    return failure("We could not send your application. Please try again.", 500);
  }
}
