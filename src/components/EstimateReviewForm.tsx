"use client";

import { FormEvent, useRef, useState } from "react";
import { trackCapturedLead, trackEvent } from "@/lib/analytics";
import { readCampaignAttribution } from "@/lib/campaign-attribution";
import { readAiAttribution } from "@/lib/ai-attribution";

export default function EstimateReviewForm() {
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const started = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const data = new FormData(event.currentTarget);
    setBusy(true); setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"), email: data.get("email"), phone: data.get("phone"),
          company: data.get("company"), website: data.get("website"),
          source: "estimate_review", estimateAiConsent: data.get("consent") === "on",
          campaignAttribution: readCampaignAttribution(), aiAttribution: readAiAttribution(),
        }),
      });
      const result = await response.json();
      if (!response.ok || result.captured !== true) throw new Error("Not captured");
      trackCapturedLead(result, { source: "estimate_review", cta_contract: "intake" });
      setSent(true);
    } catch {
      setError("Your request could not be confirmed. Please try again or email Aaron@sequoiageo.com.");
      trackEvent("form_error", { source: "estimate_review" });
    } finally { setBusy(false); }
  }
  if (sent) return <div role="status" className="mt-6 rounded-xl bg-[#eef3ed] p-6">
    <h3 className="text-2xl font-bold">Your request is received. Next, send your redacted estimate.</h3>
    <p className="mt-3">No document has been uploaded. Remove customer identifiers and attach your redacted sample to an email from the address you used here. Aaron will review it and respond with recommended improvements. This is not an instant AI report.</p>
    <a className="btn btn-dark mt-5" href="mailto:Aaron@sequoiageo.com?subject=Free%20AI%20Estimate%20Review%20-%20redacted%20sample">Email My Redacted Estimate</a>
    <p className="mt-3">If the email button does not open, send it to Aaron@sequoiageo.com with the subject “Free AI Estimate Review”.</p>
  </div>;
  return <form onSubmit={submit} onFocusCapture={() => {
    if (!started.current) { started.current = true; trackEvent("form_start", { source: "estimate_review" }); }
  }} className="mt-6 grid gap-5 sm:grid-cols-2" data-clarity-mask="true">
    {([
      ["name", "Your name", "text", "name", 100],
      ["email", "Work email", "email", "email", 254],
      ["phone", "Phone", "tel", "tel", 30],
      ["company", "Company", "text", "organization", 150],
    ] as const).map(([name, label, type, autoComplete, maxLength]) => <label key={name} className="font-semibold">{label}<input className="mt-2 block w-full rounded-lg border border-gray-400 bg-white p-3 font-normal" name={name} type={type} autoComplete={autoComplete} maxLength={maxLength} required minLength={name === "phone" ? 7 : 1}/></label>)}
    <div aria-hidden="true" className="absolute -left-[9999px]"><label>Leave blank<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <label className="flex items-start gap-3 sm:col-span-2"><input name="consent" type="checkbox" required className="mt-1 h-5 w-5 shrink-0"/><span>I authorize Sequoia GEO to review a sample I am permitted to share using ChatGPT, Claude, and Gemini, plus human review. I will remove customer information before emailing it. This permission is for this review, not marketing messages.</span></label>
    <p className="sm:col-span-2 text-sm">Do not enter customer or payment information here. Your request goes to Sequoia GEO through our contact system. No estimate is sent to an AI automatically.</p>
    {error && <p role="alert" className="sm:col-span-2 text-red-800">{error}</p>}
    <button className="btn btn-dark sm:col-span-2 disabled:opacity-60" disabled={busy} type="submit">{busy ? "Sending request..." : "Get My Free AI Estimate Review"}</button>
  </form>;
}
