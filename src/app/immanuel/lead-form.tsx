"use client";

// Capture for the Immanuel High School banner landing page (/immanuel).
//
// Deliberately a sibling of the ChatGPT LP form rather than a shared component.
// That page has live ad spend pointed at it, so it does not get refactored to
// serve this one. The duplication costs little; breaking a running test does not.
//
// Two conversion moments, tagged separately:
//   immanuel_lp_form = a server-confirmed lead passed to the guarded conversion entry point
//   immanuel_lp_call = a tap on the call bar, which is intent to call, not a
//                      completed call and not a captured lead. Fires
//                      trackCallIntent (phone_click only). Never conflate the two.

import { useState, useEffect, useRef, FormEvent } from "react";
import { trackCapturedLead, trackCallIntent } from "@/lib/analytics";
import BookingCalendar from "@/components/BookingCalendar";

const PHONE_DISPLAY = "(559) 521-3122";
const PHONE_HREF = "tel:5595213122";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#1A5C3A] bg-[#0D2318]/95 px-4 py-2.5 backdrop-blur">
      <a
        href={PHONE_HREF}
        onClick={() => trackCallIntent("immanuel_lp_call")}
        className="mx-auto flex max-w-2xl items-center justify-center gap-2 rounded-xl bg-[#3A9E6A] px-6 py-3 text-[16px] font-bold text-[#04150d] shadow-lg transition hover:bg-[#C8EDD2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
        Call or text {PHONE_DISPLAY}
      </a>
    </div>
  );
}

export default function LeadForm() {
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
          source: "immanuel_lp_form",
          renderedAt: renderedAtRef.current,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      const result = (await res.json().catch(() => ({}))) as Record<string, unknown>;
      trackCapturedLead(result, { source: "immanuel_lp_form", cta_contract: "intake" });
      setSubmitted(true);
    } catch {
      setError(`Something went wrong. Call or text ${PHONE_DISPLAY} and I will pick it up from there.`);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#C8EDD2] bg-white p-7 shadow-lg">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C8EDD2]">
            <svg aria-hidden="true" className="h-6 w-6 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="mt-4 text-xl font-bold text-[#1a1a1a]">Got it. I will run the check myself.</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            You will hear from me within one business day, usually much faster. If you would rather
            talk now, call or text{" "}
            <a href={PHONE_HREF} className="font-semibold text-[#1A5C3A]">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
          <p className="mt-4 text-sm font-semibold text-[#1a1a1a]">
            Or pick a time now and we will walk through it together.
          </p>
        </div>
        <BookingCalendar className="mt-4" />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg sm:p-7">
      <h2 className="text-[19px] font-extrabold leading-tight tracking-tight text-[#1a1a1a]">
        Find out in about a day
      </h2>
      <p className="mt-1 text-[12.5px] leading-snug text-gray-600">
        Send me your business. I will check what ChatGPT, Google, and Perplexity say when someone
        asks for what you do around here, then tell you straight.
      </p>

      <form onSubmit={handleSubmit} className="mt-3 space-y-2">
        {/* Honeypot: hidden from real users; bots that fill it get dropped server-side. */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", top: "-9999px", height: 0, width: 0, overflow: "hidden" }}
        >
          <label htmlFor="website-immanuel">Website</label>
          <input
            id="website-immanuel"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />
        </div>

        <input
          type="text"
          required
          aria-label="Your name"
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
          placeholder="Your name"
        />
        <input
          type="tel"
          required
          aria-label="Your phone number"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
          placeholder="Phone"
        />
        <input
          type="email"
          required
          aria-label="Your email address"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
          placeholder="Email"
        />

        <div className="flex items-start gap-2.5">
          <input
            id="smsConsent-immanuel"
            type="checkbox"
            checked={form.smsConsent}
            onChange={(e) => setForm({ ...form, smsConsent: e.target.checked })}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#1A5C3A] focus:ring-[#3A9E6A]"
          />
          <label htmlFor="smsConsent-immanuel" className="text-xs leading-snug text-gray-500">
            Text me back at this number. Rates may apply, opt out any time.
          </label>
        </div>

        {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#1A5C3A] px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A5C3A] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Check my business"}
        </button>
      </form>
    </div>
  );
}
