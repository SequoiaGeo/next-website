"use client";

// Compact on-page lead form for SEO landing pages (/audit, /hvac-seo, etc.).
// Same capture path and anti-bot layers as the main ContactForm (honeypot,
// render-timestamp, reCAPTCHA v3, server validation), posting to /api/contact
// with a per-page `source` tag so GA4 and the lead email show which page
// converted. Exists so money pages capture on-page instead of hopping to /contact.

import { useState, useEffect, useRef, FormEvent } from "react";
import Script from "next/script";
import { trackLead } from "@/lib/analytics";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

type Props = {
  source: string; // e.g. "hvac_seo_page", lands in GA4 lead_source + the lead email
  heading?: string;
  subtext?: string;
  buttonText?: string;
};

export default function InlineLeadForm({
  source,
  heading = "Get your free audit",
  subtext = "Tell us where to send it. We review your marketing before the call, no pitch deck, no pressure.",
  buttonText = "Get Your Free Audit",
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    smsConsent: false,
    website: "", // honeypot
  });

  const renderedAtRef = useRef<number>(0);
  useEffect(() => {
    renderedAtRef.current = Date.now();
  }, []);

  const getRecaptchaToken = async (): Promise<string> => {
    if (!RECAPTCHA_SITE_KEY || !window.grecaptcha) return "";
    try {
      return await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "contact" });
    } catch {
      return "";
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const recaptchaToken = await getRecaptchaToken();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source,
          renderedAt: renderedAtRef.current,
          recaptchaToken,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      trackLead({ source });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call (559) 521-3122 or email Aaron@sequoiageo.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0D2318] py-16 sm:py-20">
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}
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
                Got it. We&rsquo;ll be in touch as soon as possible.
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Want to talk sooner? Call{" "}
                <a href="tel:5595213122" className="font-semibold text-[#1A5C3A]">(559) 521-3122</a>.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-3xl">
                {heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{subtext}</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id={`smsConsent-${source}`}
                    type="checkbox"
                    checked={form.smsConsent}
                    onChange={(e) => setForm({ ...form, smsConsent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#1A5C3A] focus:ring-[#3A9E6A]"
                  />
                  <label htmlFor={`smsConsent-${source}`} className="text-xs leading-relaxed text-gray-500">
                    I agree to receive SMS messages from Sequoia GEO. Message and data rates may apply. You can opt out at any time.
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
                  Prefer to talk now? <a href="tel:5595213122" className="font-medium text-[#1A5C3A]">(559) 521-3122</a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
