"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { normalizeAssessmentWebsite } from "@/lib/assessment-website.mjs";
import { MARKETING_EMAIL_CONSENT_TEXT } from "@/lib/assessment-consent.mjs";
import { trackCapturedLead, trackEvent } from "@/lib/analytics";
import { readCampaignAttribution } from "@/lib/campaign-attribution";
import { readAiAttribution } from "@/lib/ai-attribution";

const source = "homepage_website_assessment";
const fieldClass = "mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1A5C3A]";
const buttonClass = "min-h-12 rounded-lg bg-[#1A5C3A] px-6 py-3 font-bold text-white hover:bg-[#0D2318] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A5C3A] disabled:opacity-60";

export default function WebsiteAssessmentForm() {
  const [step, setStep] = useState<"website" | "details" | "success">("website");
  const [businessWebsite, setBusinessWebsite] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [marketingEmailConsent, setMarketingEmailConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const busy = useRef(false);
  const started = useRef(false);
  const nameInput = useRef<HTMLInputElement>(null);
  const websiteInput = useRef<HTMLInputElement>(null);
  const successHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (step === "details") nameInput.current?.focus();
    if (step === "success") successHeading.current?.focus();
  }, [step]);

  function start() {
    if (started.current) return;
    started.current = true;
    trackEvent("form_start", { source, cta_contract: "intake", form_step: "website" });
  }

  function continueToDetails(event: FormEvent) {
    event.preventDefault();
    const normalized = normalizeAssessmentWebsite(businessWebsite);
    if (!normalized) {
      setError("Enter a website such as yourcompany.com.");
      websiteInput.current?.focus();
      return;
    }
    setBusinessWebsite(normalized);
    setError("");
    setStep("details");
    // Diagnostic only. No URL, contact information, or lead conversion is sent.
    trackEvent("assessment_website_continue", { source, form_step: "details" });
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (busy.current) return;
    const normalizedWebsite = normalizeAssessmentWebsite(businessWebsite);
    if (!normalizedWebsite) {
      setError("Enter a website such as yourcompany.com.");
      return;
    }
    busy.current = true;
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source, name, email, businessWebsite: normalizedWebsite, website: honeypot,
          marketingEmailConsent,
          campaignAttribution: readCampaignAttribution(),
          aiAttribution: readAiAttribution(),
        }),
      });
      const result = await response.json();
      if (!response.ok || (!honeypot && result.captured !== true)) throw new Error("Not captured");
      if (!honeypot) trackCapturedLead(result, { source, cta_contract: "intake" });
      setStep("success");
      setName(""); setEmail(""); setBusinessWebsite("");
    } catch {
      setError("Your request could not be confirmed. Please try again or email Aaron@sequoiageo.com.");
      trackEvent("form_error", { source, cta_contract: "intake" });
    } finally {
      busy.current = false;
      setLoading(false);
    }
  }

  if (step === "success") return (
    <div className="rounded-xl border border-[#1A5C3A]/20 bg-[#f5faf7] p-6" role="status">
      <h2 ref={successHeading} tabIndex={-1} className="text-2xl font-bold">Your assessment request is in.</h2>
      <p className="mt-3 text-gray-600">We will review your website and email your findings and recommended next steps. This is a hand-reviewed assessment, not an instant automated score.</p>
    </div>
  );

  return (
    <div className="max-w-2xl text-left">
      {step === "website" ? (
        <form onSubmit={continueToDetails}>
          <label htmlFor="assessment-business-website" className="block font-semibold">Enter your website for a free assessment</label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start">
            <input ref={websiteInput} id="assessment-business-website" name="businessWebsite" type="text" inputMode="url" autoComplete="url" autoCapitalize="none" spellCheck={false} required maxLength={500} placeholder="yourcompany.com" value={businessWebsite} onChange={(e) => { start(); setBusinessWebsite(e.target.value); }} aria-describedby="assessment-help assessment-error" aria-invalid={Boolean(error)} className={`${fieldClass} !mt-0 sm:flex-1 sm:min-w-0`} data-clarity-mask="true" />
            <button type="submit" className={buttonClass}>Get my free assessment</button>
          </div>
          <p id="assessment-help" className="mt-3 text-sm text-gray-600">Website issues, search-visibility findings, and recommended next steps. Next, tell us where to email it.</p>
        </form>
      ) : (
        <form onSubmit={submit} className="rounded-xl border border-gray-200 bg-[#fafaf8] p-5 sm:p-6">
          <h2 className="text-xl font-bold">Who should we send your assessment to?</h2>
          <p className="mt-2 text-sm text-gray-600">Step 2 of 2. Your assessment is free and hand reviewed.</p>
          <div className="mt-4" data-clarity-mask="true">
            <label htmlFor="assessment-website-edit" className="text-sm font-semibold">Website</label>
            <input id="assessment-website-edit" name="businessWebsite" type="text" inputMode="url" required maxLength={500} value={businessWebsite} onChange={(e) => setBusinessWebsite(e.target.value)} className={fieldClass} />
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="assessment-name" className="text-sm font-semibold">First name</label><input ref={nameInput} id="assessment-name" name="name" autoComplete="given-name" required maxLength={100} value={name} onChange={(e) => setName(e.target.value)} className={fieldClass} /></div>
              <div><label htmlFor="assessment-email" className="text-sm font-semibold">Email address</label><input id="assessment-email" name="email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={(e) => setEmail(e.target.value)} className={fieldClass} /></div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden"><label htmlFor="assessment-hp">Leave this blank</label><input id="assessment-hp" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} /></div>
          <p className="mt-4 text-sm text-gray-600">We use these details to review your website and respond to your request. <a href="/privacy-policy" className="underline">Privacy policy</a>.</p>
          <label className="mt-4 flex items-start gap-3 text-sm text-gray-700" htmlFor="assessment-marketing-consent">
            <input id="assessment-marketing-consent" name="marketingEmailConsent" type="checkbox" checked={marketingEmailConsent} onChange={(e) => setMarketingEmailConsent(e.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-[#1A5C3A]" />
            <span>{MARKETING_EMAIL_CONSENT_TEXT} <span className="block mt-1">Optional. Your assessment does not depend on this choice.</span></span>
          </label>
          <button type="submit" disabled={loading} className={`${buttonClass} mt-5 w-full`}>{loading ? "Sending request..." : "Send my assessment request"}</button>
        </form>
      )}
      <p id="assessment-error" role="alert" className="mt-2 text-sm text-red-700">{error}</p>
    </div>
  );
}
