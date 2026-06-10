"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Script from "next/script";
import { trackLead } from "@/lib/analytics";
import { RECAPTCHA_SITE_KEY, getRecaptchaToken } from "@/lib/recaptcha";

export default function PdfDownload() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    // Honeypot. Real users never see or fill this; bots that auto-fill inputs do.
    website: "",
  });

  // Timestamp of when the form mounted, used server-side for the timing check.
  const renderedAtRef = useRef<number>(0);
  useEffect(() => {
    renderedAtRef.current = Date.now();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const recaptchaToken = await getRecaptchaToken("guide_capture");
      await fetch("/api/guide-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          renderedAt: renderedAtRef.current,
          recaptchaToken,
        }),
      });
    } catch {
      // show download even if API fails
    }
    trackLead({ source: "lsa_guide" });
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C8EDD2] mb-4">
          <svg className="h-7 w-7 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <p className="text-sm text-gray-500 mb-5">Your PDF is ready to download.</p>
        <a
          href="/lsa-guide.pdf"
          download="Sequoia-GEO-LSA-Guide.pdf"
          className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#0D2318]"
        >
          <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download the LSA Guide (PDF)
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* reCAPTCHA v3 — loads only when a site key is configured. */}
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}
      {/* Honeypot: hidden from real users (off-screen, no tab stop, autocomplete
          off). Bots that fill every field trip it and get silently dropped. */}
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
        <label htmlFor="lsa-dl-website">Website</label>
        <input
          id="lsa-dl-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lsa-dl-name" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">First name</label>
          <input
            id="lsa-dl-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="First name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
          />
        </div>
        <div>
          <label htmlFor="lsa-dl-email" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Email</label>
          <input
            id="lsa-dl-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-[#1A5C3A] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318] disabled:opacity-60"
      >
        {loading ? "Sending..." : "Get the PDF Version"}
      </button>
      <p className="text-xs text-gray-500 text-center">No spam. Occasional insights from Aaron. Unsubscribe anytime.</p>
    </form>
  );
}
