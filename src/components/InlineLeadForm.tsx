"use client";

// Compact on-page lead form for SEO landing pages (/audit, /hvac-seo, etc.).
// Same capture path and anti-bot layers as the main ContactForm (honeypot and
// server validation), posting to /api/contact with a
// per-page `source` tag so GA4 and the lead email show which page converted.
// Exists so money pages capture on-page instead of hopping to /contact.

import { useState, useEffect, useRef, FormEvent } from "react";
import { trackCallIntent, trackCapturedLead, trackCtaIntent, trackEvent } from "@/lib/analytics";
import { readCampaignAttribution } from "@/lib/campaign-attribution";
import { readAiAttribution } from "@/lib/ai-attribution";
import DiscoverySourceFields, {
  type DiscoveryEvidence,
} from "@/components/DiscoverySourceFields";

type Props = {
  source: string; // e.g. "hvac_seo_page", lands in GA4 lead_source + the lead email
  heading?: string;
  subtext?: string;
  buttonText?: string;
  collectCompany?: boolean;
  companyLabel?: string;
  companyPlaceholder?: string;
};

export default function InlineLeadForm({
  source,
  heading = "Request a marketing baseline review",
  subtext = "Share the context. Aaron reviews the marketing and booking path himself before he calls.",
  buttonText = "Request the Baseline Review",
  collectCompany = false,
  companyLabel = "Business name",
  companyPlaceholder = "Your business",
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    discoverySource: "",
    reportedAiAssistant: "",
    reportedAiQuestion: "",
    smsConsent: false,
    website: "", // honeypot
  });

  const sectionRef = useRef<HTMLElement>(null);
  const formStartedRef = useRef(false);
  const formViewedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || formViewedRef.current) return;
        formViewedRef.current = true;
        trackEvent("form_view", { source, cta_contract: "intake" });
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [source]);

  function trackFormStart() {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackEvent("form_start", { source, cta_contract: "intake" });
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source,
          campaignAttribution: readCampaignAttribution(),
          aiAttribution: readAiAttribution(),
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      const result = (await res.json().catch(() => ({}))) as Record<string, unknown>;
      if (!form.website) {
        trackCapturedLead(result, {
          source,
          cta_contract: "intake",
          ...(form.discoverySource
            ? { reported_discovery_source: form.discoverySource }
            : {}),
          ...(form.reportedAiAssistant
            ? { reported_ai_assistant: form.reportedAiAssistant }
            : {}),
        });
      }
      setSubmitted(true);
    } catch {
      trackEvent("form_error", { source, cta_contract: "intake" });
      setError("Something went wrong. Please call (559) 521-3122 or email Aaron@sequoiageo.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={sectionRef} className="bg-[#0D2318] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="rounded-2xl border border-[#1A5C3A] bg-white p-8 shadow-xl sm:p-10">
          {submitted ? (
            <div className="py-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C8EDD2]">
                <svg aria-hidden="true" className="h-7 w-7 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#1a1a1a]">
                Got it. I have your context.
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                You will hear from me within one business day, usually much faster.
              </p>
              <a
                href="/contact#book"
                onClick={() => trackCtaIntent(`${source}_success`, "schedule")}
                className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0D2318]"
              >
                Choose a Time
                <svg aria-hidden="true" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <p className="mt-3 text-sm text-gray-500">
                Prefer to talk? Call{" "}
                <a href="tel:5595213122" onClick={() => trackCallIntent(`${source}_success`)} className="font-semibold text-[#1A5C3A]">(559) 521-3122</a>.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-3xl">
                {heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{subtext}</p>

              <form onSubmit={handleSubmit} onFocusCapture={trackFormStart} className="mt-6 space-y-4">
                {/* Honeypot: hidden from real users; bots that fill it get dropped server-side. */}
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", top: "-9999px", height: 0, width: 0, overflow: "hidden" }}
                >
                  <label htmlFor={`website-${source}`}>Website</label>
                  <input
                    id={`website-${source}`}
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor={`name-${source}`} className="block text-sm font-medium text-[#1a1a1a]">Name</label>
                    <input
                      id={`name-${source}`}
                      name="name"
                      autoComplete="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor={`phone-${source}`} className="block text-sm font-medium text-[#1a1a1a]">Phone</label>
                    <input
                      id={`phone-${source}`}
                      name="phone"
                      autoComplete="tel"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={`email-${source}`} className="block text-sm font-medium text-[#1a1a1a]">Email</label>
                  <input
                    id={`email-${source}`}
                    name="email"
                    autoComplete="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                    placeholder="you@company.com"
                  />
                </div>

                {collectCompany && (
                  <div>
                    <label htmlFor={`company-${source}`} className="block text-sm font-medium text-[#1a1a1a]">
                      {companyLabel}
                    </label>
                    <input
                      id={`company-${source}`}
                      name="company"
                      autoComplete="organization"
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                      placeholder={companyPlaceholder}
                    />
                  </div>
                )}

                <DiscoverySourceFields
                  idPrefix={source}
                  value={form as DiscoveryEvidence}
                  onChange={(evidence) => setForm({ ...form, ...evidence })}
                />

                <div className="flex items-start gap-3">
                  <input
                    id={`smsConsent-${source}`}
                    type="checkbox"
                    checked={form.smsConsent}
                    onChange={(e) => setForm({ ...form, smsConsent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#1A5C3A] focus:ring-[#3A9E6A]"
                  />
                  <label htmlFor={`smsConsent-${source}`} className="text-xs leading-relaxed text-gray-500">
                    I agree to receive SMS messages from Sequoia GEO. Message and data rates may apply. You can opt out at any time. See our{" "}
                    <a href="/privacy-policy" className="underline hover:text-[#1A5C3A]">privacy policy</a>.
                  </label>
                </div>

                {error && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-[#1A5C3A] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A5C3A] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending…" : buttonText}
                </button>

                <p className="text-center text-xs text-gray-400">
                  Prefer to talk? <a href="tel:5595213122" onClick={() => trackCallIntent(`${source}_inline_form`)} className="font-medium text-[#1A5C3A]">(559) 521-3122</a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
