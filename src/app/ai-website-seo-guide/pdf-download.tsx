"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { trackLead } from "@/lib/analytics";

export default function PdfDownload() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

  // Honest capture: the success screen and the lead event only fire once the
  // server confirmed the capture. A failed POST shows the direct-contact
  // fallback instead of pretending the lead landed.
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/guide-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "AI Website SEO Guide",
          renderedAt: renderedAtRef.current,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      trackLead({ source: "ai_seo_guide" });
      setSubmitted(true);
    } catch {
      setError("failed");
    } finally {
      setLoading(false);
    }
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
          href="/ai-website-seo-guide.pdf"
          download="Sequoia-GEO-AI-Website-SEO-Guide.pdf"
          className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#0D2318]"
        >
          <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download the AI SEO Guide (PDF)
        </a>
        <p className="mt-4 text-sm text-gray-500">
          You will hear from me within one business day, usually much faster.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Want your AI visibility checked instead of just the guide?{" "}
          <a href="/contact#book" className="font-semibold text-[#1A5C3A] underline underline-offset-2 hover:text-[#0D2318]">
            Pick a time now
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        <label htmlFor="ai-dl-website">Website</label>
        <input
          id="ai-dl-website"
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
          <label htmlFor="ai-dl-name" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">First name</label>
          <input
            id="ai-dl-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="First name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
          />
        </div>
        <div>
          <label htmlFor="ai-dl-email" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Email</label>
          <input
            id="ai-dl-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
          />
        </div>
      </div>
      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          Something broke on my end. Call or text{" "}
          <a href="tel:5595213122" className="font-semibold underline">(559) 521-3122</a>, or email{" "}
          <a href="mailto:aaron@sequoiageo.com" className="font-semibold underline">aaron@sequoiageo.com</a>.
        </p>
      )}
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
