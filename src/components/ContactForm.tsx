"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { trackCallIntent, trackCapturedLead, trackEvent } from "@/lib/analytics";
import { readCampaignAttribution } from "@/lib/campaign-attribution";
import { readAiAttribution } from "@/lib/ai-attribution";
import BookingCalendar from "@/components/BookingCalendar";
import DiscoverySourceFields, {
  type DiscoveryEvidence,
} from "@/components/DiscoverySourceFields";
import {
  CONSULTATION_DRAFT_EVENT,
  clearConsultationDraft,
  consultationDraftMessage,
  readConsultationDraft,
  type ConsultationDraft,
} from "@/lib/sequoia-consultation-draft";
import { trackKnowledgeStage } from "@/lib/sequoia-knowledge-analytics";

export default function ContactForm({ showEngagementTerms = true }: { showEngagementTerms?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasPreparedDraft, setHasPreparedDraft] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
    discoverySource: "",
    reportedAiAssistant: "",
    reportedAiQuestion: "",
    smsConsent: false,
    // Honeypot. Real users never see or fill this; bots that auto-fill inputs do.
    website: "",
  });

  const sectionRef = useRef<HTMLElement>(null);
  const formStartedRef = useRef(false);
  const formViewedRef = useRef(false);
  const knowledgeOriginRef = useRef(false);
  const preparedMessageRef = useRef<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || formViewedRef.current) return;
        formViewedRef.current = true;
        trackEvent("form_view", { source: "contact_form", cta_contract: "intake" });
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function applyPreparedDraft(draft: ConsultationDraft | null) {
      if (!draft) {
        setForm((current) => ({
          ...current,
          message: current.message === preparedMessageRef.current ? "" : current.message,
        }));
        preparedMessageRef.current = null;
        knowledgeOriginRef.current = false;
        setHasPreparedDraft(false);
        return;
      }
      const preparedMessage = consultationDraftMessage(draft);
      preparedMessageRef.current = preparedMessage;
      setForm((current) => ({ ...current, message: preparedMessage }));
      knowledgeOriginRef.current = true;
      setHasPreparedDraft(true);
    }

    applyPreparedDraft(readConsultationDraft());
    const onPreparedDraft = (event: Event) => {
      applyPreparedDraft((event as CustomEvent<ConsultationDraft>).detail || null);
    };
    window.addEventListener(CONSULTATION_DRAFT_EVENT, onPreparedDraft);
    return () => window.removeEventListener(CONSULTATION_DRAFT_EVENT, onPreparedDraft);
  }, []);

  function trackFormStart() {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackEvent("form_start", { source: "contact_form", cta_contract: "intake" });
    if (knowledgeOriginRef.current) {
      trackKnowledgeStage("form_start", { surface: "contact_form" });
    }
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
          source: knowledgeOriginRef.current
            ? "sequoia_knowledge_interface"
            : "contact_form",
          campaignAttribution: readCampaignAttribution(),
          aiAttribution: readAiAttribution(),
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      const result = (await res.json().catch(() => ({}))) as Record<string, unknown>;
      if (!form.website) {
        const captured = trackCapturedLead(result, {
          source: knowledgeOriginRef.current
            ? "sequoia_knowledge_interface"
            : "contact_form",
          cta_contract: "intake",
          ...(form.discoverySource
            ? { reported_discovery_source: form.discoverySource }
            : {}),
          ...(form.reportedAiAssistant
            ? { reported_ai_assistant: form.reportedAiAssistant }
            : {}),
        });
        if (captured && knowledgeOriginRef.current) {
          trackKnowledgeStage("accepted_submission", { surface: "contact_form" });
          clearConsultationDraft();
          setHasPreparedDraft(false);
        }
      }
      setSubmitted(true);
    } catch {
      trackEvent("form_error", { source: "contact_form", cta_contract: "intake" });
      setError("Something went wrong. Please call (559) 521-3122 or email Aaron@sequoiageo.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="bg-white py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2 lg:items-start">

          {/* Left: Copy */}
          <div>
            <p className="section-overline mb-4">Get Started</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl leading-[1.08]">
              Find out where your{" "}
              <span className="text-[#1A5C3A]">revenue is leaking.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              Tell me what you are seeing before we talk. I review the marketing
              and booking path myself, separate the evidence from the assumptions,
              and tell you whether I can help.
            </p>

            <div className="mt-8 divide-y divide-gray-100">
              {[
                { label: "Evidence before recommendations", desc: "I review the marketing and booking path before the call" },
                { label: "No pitch deck", desc: "A real conversation about the constraint you are seeing" },
                ...(showEngagementTerms
                  ? [{ label: "Clear engagement terms", desc: "Three months initially, then month to month" }]
                  : []),
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 py-4 first:pt-0">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C8EDD2]">
                    <svg aria-hidden="true" className="h-3 w-3 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a1a1a]">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="mt-8 pt-8 border-t border-gray-100 space-y-3">
              <a
                href="tel:5595213122"
                onClick={() => trackCallIntent("contact_section")}
                className="flex items-center gap-3 text-sm font-medium text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
              >
                <svg aria-hidden="true" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (559) 521-3122
              </a>
              <a
                href="mailto:Aaron@sequoiageo.com"
                className="flex items-center gap-3 text-sm font-medium text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
              >
                <svg aria-hidden="true" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Aaron@sequoiageo.com
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-8 shadow-sm">
            {submitted ? (
              <div className="py-8">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C8EDD2]">
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
                  <p className="mt-4 text-sm font-semibold text-[#1a1a1a]">
                    Want to skip the wait? Pick a time now.
                  </p>
                </div>

                <BookingCalendar />
              </div>
            ) : (
              <form onSubmit={handleSubmit} onFocusCapture={trackFormStart} className="space-y-5">
                {hasPreparedDraft && (
                  <div data-clarity-mask="true" className="rounded-xl border border-[#3A9E6A]/30 bg-[#C8EDD2]/20 p-4">
                    <p className="text-sm font-bold text-[#0D2318]">Consultation context prepared</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      Review and edit the context below before submitting. Nothing has been sent.
                    </p>
                    <button
                      type="button"
                      onClick={clearConsultationDraft}
                      className="mt-3 text-sm font-semibold text-[#1A5C3A] underline underline-offset-4"
                    >
                      Clear prepared context
                    </button>
                  </div>
                )}
                {/* Honeypot: hidden from real users (off-screen, no tab stop,
                    autocomplete off). Bots that fill every field trip it and
                    get silently dropped server-side. */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    top: "-9999px",
                    height: 0,
                    width: 0,
                    overflow: "hidden",
                  }}
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a]">Name</label>
                  <input
                    id="name"
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
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a1a]">Phone</label>
                  <input
                    id="phone"
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

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a]">Email</label>
                  <input
                    id="email"
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

                {hasPreparedDraft && (
                  <>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#1a1a1a]">Company <span className="text-gray-400">(optional)</span></label>
                      <input
                        id="company"
                        name="company"
                        autoComplete="organization"
                        type="text"
                        maxLength={120}
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                        placeholder="Company name"
                      />
                    </div>

                    <div data-clarity-mask="true">
                      <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a]">What should Sequoia review? <span className="text-gray-400">(optional)</span></label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        maxLength={2000}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm leading-relaxed text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                        placeholder="Share the constraint, what has been tried, and what you want to understand."
                      />
                    </div>
                  </>
                )}

                <DiscoverySourceFields
                  idPrefix="contact"
                  value={form as DiscoveryEvidence}
                  onChange={(evidence) => setForm({ ...form, ...evidence })}
                />

                <div className="flex items-start gap-3">
                  <input
                    id="smsConsent"
                    type="checkbox"
                    checked={form.smsConsent}
                    onChange={(e) => setForm({ ...form, smsConsent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#1A5C3A] focus:ring-[#3A9E6A]"
                  />
                  <label htmlFor="smsConsent" className="text-xs leading-relaxed text-gray-500">
                    I agree to receive SMS messages from Sequoia GEO. Message and data rates may apply. You can opt out at any time. See our{" "}
                    <a href="/privacy-policy" className="underline hover:text-[#1A5C3A]">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-[#1A5C3A] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A5C3A] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Request the Baseline Review"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
