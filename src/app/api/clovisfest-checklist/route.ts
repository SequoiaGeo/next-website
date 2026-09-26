import { Resend } from "resend";
import { NextResponse } from "next/server";
import { createHash } from "crypto";
import { checkEmailLead } from "@/lib/spam-protection";
import { checklistText } from "@/lib/clovisfest-checklist";

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin");
    if (origin && origin !== new URL(req.url).origin) return NextResponse.json({ error: "Please use the form on this website." }, { status: 403 });
    const raw = await req.text();
    if (raw.length > 2048) return NextResponse.json({ error: "Request too large." }, { status: 413 });
    let body;
    try { body = JSON.parse(raw); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
    if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    const check = checkEmailLead({ name: "Checklist request", email: body.email, website: body.website });
    if (!check.ok) return NextResponse.json(check.silentDrop ? { success: true } : { error: "Please enter a valid email address." }, { status: check.silentDrop ? 200 : 400 });
    if (body.consent !== true) return NextResponse.json({ error: "Please request the checklist using the form." }, { status: 400 });
    if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "Email is temporarily unavailable. Please contact Aaron directly." }, { status: 503 });
    const email = check.clean.email.toLowerCase();
    // Provider idempotency prevents repeat sends to the same recipient within a day.
    const key = createHash("sha256").update(`clovisfest-v1:${new Date().toISOString().slice(0, 10)}:${email}`).digest("hex");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const [delivery, notification] = await Promise.allSettled([
      resend.emails.send({ from: "Aaron Husak <aaron@sequoiageo.com>", replyTo: "Aaron@sequoiageo.com", to: email, subject: "Your AI Search Website Checklist | Sequoia GEO", text: checklistText }, { idempotencyKey: `checklist-${key}` }),
      resend.emails.send({ from: "Sequoia GEO Site <aaron@sequoiageo.com>", to: "Aaron@sequoiageo.com", subject: "ClovisFest checklist request (event, not qualified lead)", text: `Email: ${email}\nSource: clovisfest_event\nPage: /clovis\nConsent: checklist and contact details only, version clovisfest-v1.\nNo newsletter subscription. Do not count as an independently initiated qualified website lead. No qualification or business need collected.` }, { idempotencyKey: `event-notice-${key}` }),
    ]);
    if (notification.status === "rejected" || notification.value.error) console.error("ClovisFest internal notification failed");
    if (delivery.status === "rejected" || delivery.value.error) return NextResponse.json({ error: "We could not send the checklist. Please try again or email Aaron directly." }, { status: 502 });
    // No CRM tags, newsletter enrollment, or qualified-lead conversion events.
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "We could not send the checklist. Please try again." }, { status: 500 });
  }
}
