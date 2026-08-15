"use client";

import { useState, useMemo, useEffect, useRef, FormEvent } from "react";
import Link from "next/link";
import { trackCapturedLead } from "@/lib/analytics";

function formatDollar(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function formatCurrency(n: number) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

function Slider({
  label, value, min, max, step, onChange, format,
}: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; format: (v: number) => string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-[#1a1a1a]">{label}</label>
        <span className="text-base font-extrabold text-[#1A5C3A]">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #1A5C3A ${((value - min) / (max - min)) * 100}%, #e5e7eb ${((value - min) / (max - min)) * 100}%)`,
        }}
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

export default function CSRCalculator() {
  const [monthlyCalls, setMonthlyCalls] = useState(100);
  const [bookingRate, setBookingRate] = useState(38);
  const [avgTicket, setAvgTicket] = useState(650);

  // Inline capture under the results (does not gate them).
  // "website" is a honeypot: real users never see or fill it.
  const [capture, setCapture] = useState({ name: "", phone: "", email: "", website: "" });
  const [captureLoading, setCaptureLoading] = useState(false);
  const [captureDone, setCaptureDone] = useState(false);
  const [captureError, setCaptureError] = useState<string | null>(null);

  // Timestamp of when the page mounted, used server-side for the timing check.
  const renderedAtRef = useRef<number>(0);
  useEffect(() => {
    renderedAtRef.current = Date.now();
  }, []);

  const results = useMemo(() => {
    const currentJobs = monthlyCalls * (bookingRate / 100);
    const currentRevenue = currentJobs * avgTicket;

    const cap = 90;

    const plus5Rate = Math.min(bookingRate + 5, cap);
    const plus5Jobs = monthlyCalls * (plus5Rate / 100);
    const plus5Revenue = plus5Jobs * avgTicket;
    const plus5MonthlyGain = plus5Revenue - currentRevenue;
    const plus5AnnualGain = plus5MonthlyGain * 12;
    const plus5Capped = bookingRate + 5 > cap;

    const plus10Rate = Math.min(bookingRate + 10, cap);
    const plus10Jobs = monthlyCalls * (plus10Rate / 100);
    const plus10Revenue = plus10Jobs * avgTicket;
    const plus10MonthlyGain = plus10Revenue - currentRevenue;
    const plus10AnnualGain = plus10MonthlyGain * 12;
    const plus10Capped = bookingRate + 10 > cap;

    const plus15Rate = Math.min(bookingRate + 15, cap);
    const plus15Jobs = monthlyCalls * (plus15Rate / 100);
    const plus15Revenue = plus15Jobs * avgTicket;
    const plus15MonthlyGain = plus15Revenue - currentRevenue;
    const plus15AnnualGain = plus15MonthlyGain * 12;
    const plus15Capped = bookingRate + 15 > cap;

    return {
      currentJobs: Math.round(currentJobs),
      currentRevenue,
      plus5MonthlyGain,
      plus5AnnualGain,
      plus5Capped,
      plus10MonthlyGain,
      plus10AnnualGain,
      plus10Capped,
      plus15MonthlyGain,
      plus15AnnualGain,
      plus15Capped,
    };
  }, [monthlyCalls, bookingRate, avgTicket]);

  // Honest capture: success UI and the lead event fire only when the server
  // confirmed the capture (res.ok). A failed POST shows the direct-contact
  // fallback instead of pretending the lead landed.
  const handleCapture = async (e: FormEvent) => {
    e.preventDefault();
    setCaptureLoading(true);
    setCaptureError(null);
    try {
      const res = await fetch("/api/calculator-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: capture.name,
          phone: capture.phone,
          email: capture.email,
          website: capture.website,
          renderedAt: renderedAtRef.current,
          source: "csr_calculator",
          monthlyCalls,
          bookingRate,
          avgTicket,
          currentRevenue: Math.round(results.currentRevenue),
          annualGap: Math.round(results.plus5AnnualGain),
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      const result = (await res.json().catch(() => ({}))) as Record<string, unknown>;
      trackCapturedLead(result, { source: "csr_calculator", cta_contract: "calculator" });
      setCaptureDone(true);
    } catch {
      setCaptureError("failed");
    } finally {
      setCaptureLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafaf8]">

      {/* Nav strip */}
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors">
            ← Back to Sequoia GEO
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#0D2318]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 sm:py-16">
          <p className="section-overline text-[#3A9E6A] mb-4">Free Tool</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.08] max-w-2xl">
            What is a 5% booking rate improvement{" "}
            <span className="text-[#3A9E6A]">actually worth?</span>
          </h1>
          <p className="mt-4 text-base text-[#C8EDD2]/60 max-w-xl leading-relaxed">
            The CSR is the most underused seat in most contracting operations. This calculator shows you the dollar value of closing the gap.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">

          {/* Left: Inputs */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-8">
            <div>
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-1">Your numbers</h2>
              <p className="text-sm text-gray-500">Adjust the sliders to match your operation.</p>
            </div>

            <Slider
              label="Monthly inbound calls"
              value={monthlyCalls}
              min={10}
              max={500}
              step={5}
              onChange={setMonthlyCalls}
              format={(v) => `${v} calls`}
            />
            <Slider
              label="Current booking rate"
              value={bookingRate}
              min={10}
              max={85}
              step={1}
              onChange={setBookingRate}
              format={(v) => `${v}%`}
            />
            <Slider
              label="Average job ticket"
              value={avgTicket}
              min={100}
              max={10000}
              step={50}
              onChange={setAvgTicket}
              format={(v) => formatDollar(v)}
            />

            {/* Industry context */}
            <div className="rounded-xl bg-[#fafaf8] border border-gray-100 p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Industry benchmarks</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { label: "Average", value: "38 to 42%" },
                  { label: "Good", value: "55 to 60%" },
                  { label: "Top ops", value: "65%+" },
                ].map((b) => (
                  <div key={b.label}>
                    <p className="text-base font-extrabold text-[#1a1a1a]">{b.value}</p>
                    <p className="text-xs text-gray-500">{b.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div className="space-y-4">

            {/* Current state */}
            <div className="rounded-2xl bg-[#1a1a1a] p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Where you are now</p>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-3xl font-extrabold text-white">{formatDollar(results.currentRevenue)}</p>
                  <p className="text-xs text-gray-500 mt-1">Monthly revenue</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white">{results.currentJobs}</p>
                  <p className="text-xs text-gray-500 mt-1">Booked jobs per month</p>
                </div>
              </div>
            </div>

            {/* Improvement scenarios */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">What each 5-point improvement produces</p>
              <div className="space-y-3">
                {[
                  {
                    label: "+5 points",
                    rate: `${Math.min(bookingRate + 5, 90)}%`,
                    monthly: results.plus5MonthlyGain,
                    annual: results.plus5AnnualGain,
                    capped: results.plus5Capped,
                    highlight: true,
                  },
                  {
                    label: "+10 points",
                    rate: `${Math.min(bookingRate + 10, 90)}%`,
                    monthly: results.plus10MonthlyGain,
                    annual: results.plus10AnnualGain,
                    capped: results.plus10Capped,
                    highlight: false,
                  },
                  {
                    label: "+15 points",
                    rate: `${Math.min(bookingRate + 15, 90)}%`,
                    monthly: results.plus15MonthlyGain,
                    annual: results.plus15AnnualGain,
                    capped: results.plus15Capped,
                    highlight: false,
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className={`rounded-lg px-4 py-3 ${row.highlight ? "bg-[#C8EDD2]" : "bg-gray-50"}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-semibold ${row.highlight ? "text-[#0D2318]" : "text-gray-700"}`}>
                        {row.label}
                        {row.capped && (
                          <span className="ml-2 text-xs font-normal text-gray-500">At max (90%)</span>
                        )}
                        {!row.capped && (
                          <span className={`ml-2 text-xs font-normal ${row.highlight ? "text-[#1A5C3A]" : "text-gray-500"}`}>
                            → {row.rate} booking rate
                          </span>
                        )}
                      </span>
                      <span className={`text-sm font-extrabold ${row.highlight ? "text-[#0D2318]" : "text-[#1a1a1a]"}`}>
                        +{formatDollar(row.monthly)}/mo
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <span className={`text-xs ${row.highlight ? "text-[#1A5C3A] font-semibold" : "text-gray-500"}`}>
                        +{formatCurrency(row.annual)}/yr
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Annual value callout */}
            <div className="rounded-2xl bg-[#0D2318] p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[#3A9E6A]/60 mb-2">The annual value of a 5% improvement</p>
              <p className="text-5xl font-extrabold text-[#3A9E6A]">{formatCurrency(results.plus5AnnualGain)}</p>
              <p className="mt-3 text-sm text-[#C8EDD2]/60 leading-relaxed">
                That doesn&rsquo;t require more leads. It requires better call handling. Most contractors never measure this.
              </p>
            </div>

            {/* Inline capture: appears with the annual number, does NOT gate results */}
            {captureDone ? (
              <div className="rounded-2xl border border-[#3A9E6A]/30 bg-[#C8EDD2]/40 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C8EDD2] mb-3">
                  <svg className="h-6 w-6 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-base font-semibold text-[#0D2318]">Got it. Your number is in front of me.</p>
                <p className="mt-1 text-sm text-gray-600">You will hear from me within one business day, usually much faster.</p>
                <a
                  href="/contact#book"
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0D2318]"
                >
                  Pick a time now
                  <svg aria-hidden="true" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            ) : (
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-base font-semibold text-[#1a1a1a] mb-1">Want this number fixed? Leave your info and I will call you.</p>
                <p className="text-sm text-gray-500 mb-4">
                  I listen to real calls, score the booking performance, and tell you where the points are. No pitch deck.
                </p>
                <form onSubmit={handleCapture} className="space-y-3">
                  {/* Honeypot: hidden from real users (off-screen, no tab stop,
                      autocomplete off). Bots that fill every field trip it. */}
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
                    <label htmlFor="csr-calc-website">Website</label>
                    <input
                      id="csr-calc-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={capture.website}
                      onChange={(e) => setCapture({ ...capture, website: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      aria-label="Your name"
                      autoComplete="name"
                      value={capture.name}
                      onChange={(e) => setCapture({ ...capture, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                    />
                    <input
                      type="tel"
                      required
                      aria-label="Your phone number"
                      autoComplete="tel"
                      value={capture.phone}
                      onChange={(e) => setCapture({ ...capture, phone: e.target.value })}
                      placeholder="Phone"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                    />
                  </div>
                  <input
                    type="email"
                    required
                    aria-label="Your email address"
                    autoComplete="email"
                    value={capture.email}
                    onChange={(e) => setCapture({ ...capture, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                  />
                  {captureError && (
                    <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                      Something broke on my end. Call or text{" "}
                      <a href="tel:5595213122" className="font-semibold underline">(559) 521-3122</a>, or email{" "}
                      <a href="mailto:aaron@sequoiageo.com" className="font-semibold underline">aaron@sequoiageo.com</a>.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={captureLoading}
                    className="w-full rounded-lg bg-[#1A5C3A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0D2318] disabled:opacity-60"
                  >
                    {captureLoading ? "Sending..." : "Call Me About This Number"}
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Context section */}
      <div className="bg-[#C8EDD2]/30 border-t border-[#C8EDD2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="section-overline text-[#1A5C3A] mb-4">The levers</p>
            <h2 className="text-2xl font-extrabold text-[#0D2318] mb-6">What moves the booking rate</h2>
            <ul className="space-y-4">
              {[
                {
                  title: "Response time",
                  body: "Calls answered live versus going to voicemail. Every missed call is a booked job that went to a competitor.",
                },
                {
                  title: "Call handling script",
                  body: "The first 30 seconds of the call determine the booking. Most CSRs improvise. Top operations train.",
                },
                {
                  title: "Follow-up on missed calls and voicemails",
                  body: "Voicemails that don\u2019t get called back within the hour convert at a fraction of live-answer rates.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#1A5C3A] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#1a1a1a]">{item.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-gray-500 border-l-2 border-[#3A9E6A] pl-4">
              Industry average is 38 to 42%. Good CSR operations run 55 to 65%.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 max-w-2xl">
          <h2 className="text-xl font-extrabold text-[#1a1a1a] mb-2">Want to know where yours is leaking?</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            We review actual call recordings as part of the audit. One call review often finds more opportunity than a full month of optimization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0D2318]"
          >
            Book a Free Audit
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

    </main>
  );
}
