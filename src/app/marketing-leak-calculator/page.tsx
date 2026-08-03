"use client";

import { useState, useMemo, useEffect, useRef, FormEvent } from "react";
import Link from "next/link";
import { trackLead, trackEvent } from "@/lib/analytics";

function formatCurrency(n: number) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

function formatDollar(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
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

export default function MarketingLeakCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(8000);
  const [monthlyCalls, setMonthlyCalls] = useState(120);
  const [bookingRate, setBookingRate] = useState(38);
  const [avgTicket, setAvgTicket] = useState(650);

  // Inline capture (does not gate results, fires on submit).
  // "website" is a honeypot: real users never see or fill it.
  const [capture, setCapture] = useState({ name: "", email: "", website: "" });
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
    const costPerBookedJob = currentJobs > 0 ? monthlySpend / currentJobs : 0;
    const costPerCall = monthlyCalls > 0 ? monthlySpend / monthlyCalls : 0;

    const industryAvgJobs = monthlyCalls * 0.42;
    const industryAvgRevenue = industryAvgJobs * avgTicket;

    const goodJobs = monthlyCalls * 0.55;
    const goodRevenue = goodJobs * avgTicket;

    const topJobs = monthlyCalls * 0.65;
    const topRevenue = topJobs * avgTicket;

    const monthlyGap = topRevenue - currentRevenue;
    const annualGap = monthlyGap * 12;

    const revenuePerDollarSpent = monthlySpend > 0 ? currentRevenue / monthlySpend : 0;

    return {
      currentJobs: Math.round(currentJobs),
      currentRevenue,
      costPerBookedJob,
      costPerCall,
      industryAvgRevenue,
      goodRevenue,
      topRevenue,
      monthlyGap,
      annualGap,
      revenuePerDollarSpent,
    };
  }, [monthlySpend, monthlyCalls, bookingRate, avgTicket]);

  const leakSeverity = bookingRate < 35 ? "critical" : bookingRate < 50 ? "moderate" : "good";
  const leakColor = leakSeverity === "critical" ? "#ef4444" : leakSeverity === "moderate" ? "#f59e0b" : "#22c55e";
  const leakLabel = leakSeverity === "critical" ? "Significant leak" : leakSeverity === "moderate" ? "Room to improve" : "Above average";

  // Honest capture: success UI and the lead event fire only when the server
  // confirmed the capture. A failed POST used to show "check your email" and
  // count a generate_lead anyway, which hid broken capture behind good numbers.
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
          email: capture.email,
          website: capture.website,
          renderedAt: renderedAtRef.current,
          monthlySpend,
          monthlyCalls,
          bookingRate,
          avgTicket,
          currentRevenue: Math.round(results.currentRevenue),
          annualGap: Math.round(results.annualGap),
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      trackLead({ source: "marketing_leak_calculator", value: Math.round(results.annualGap) });
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

      {/* Header */}
      <div className="bg-[#0D2318]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 sm:py-16">
          <p className="section-overline text-[#3A9E6A] mb-4">Free Tool</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.08] max-w-2xl">
            How much revenue is leaking from{" "}
            <span className="text-[#3A9E6A]">your marketing pipeline?</span>
          </h1>
          <p className="mt-4 text-base text-[#C8EDD2]/60 max-w-xl leading-relaxed">
            Enter your numbers. The calculator shows you what your marketing is actually producing
            versus what it could be producing, in dollars.
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
              <p className="text-sm text-gray-500">Adjust the sliders to match your business.</p>
            </div>

            <Slider
              label="Monthly marketing spend"
              value={monthlySpend}
              min={1000}
              max={50000}
              step={500}
              onChange={setMonthlySpend}
              format={(v) => formatDollar(v)}
            />
            <Slider
              label="Monthly inbound calls from marketing"
              value={monthlyCalls}
              min={10}
              max={500}
              step={5}
              onChange={setMonthlyCalls}
              format={(v) => `${v} calls`}
            />
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-[#1a1a1a]">Your booking rate</label>
                <div className="flex items-center gap-2">
                  <span className="text-base font-extrabold" style={{ color: leakColor }}>{bookingRate}%</span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: `${leakColor}20`, color: leakColor }}>
                    {leakLabel}
                  </span>
                </div>
              </div>
              <input
                type="range"
                min={10}
                max={90}
                step={1}
                value={bookingRate}
                onChange={(e) => setBookingRate(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${leakColor} ${((bookingRate - 10) / 80) * 100}%, #e5e7eb ${((bookingRate - 10) / 80) * 100}%)`,
                }}
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>10%</span>
                <span className="text-gray-500">Industry avg: 42%</span>
                <span>90%</span>
              </div>
            </div>
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
                  { label: "Average", value: "42%" },
                  { label: "Good", value: "55%" },
                  { label: "Top 10%", value: "65%+" },
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
                  <p className="text-xs text-gray-500 mt-1">Monthly revenue from marketing</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white">{results.currentJobs}</p>
                  <p className="text-xs text-gray-500 mt-1">Booked jobs per month</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white">{formatDollar(results.costPerBookedJob)}</p>
                  <p className="text-xs text-gray-500 mt-1">Cost per booked job</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white">{results.revenuePerDollarSpent.toFixed(1)}x</p>
                  <p className="text-xs text-gray-500 mt-1">Revenue per $1 spent</p>
                </div>
              </div>
            </div>

            {/* What it could be */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">What the same spend could produce</p>
              <div className="space-y-3">
                {[
                  { label: "At industry average (42%)", value: results.industryAvgRevenue, highlight: false },
                  { label: "At good performer (55%)", value: results.goodRevenue, highlight: false },
                  { label: "At top 10% (65%)", value: results.topRevenue, highlight: true },
                ].map((row) => (
                  <div key={row.label} className={`flex items-center justify-between rounded-lg px-4 py-3 ${row.highlight ? "bg-[#C8EDD2]" : "bg-gray-50"}`}>
                    <span className={`text-sm ${row.highlight ? "font-semibold text-[#0D2318]" : "text-gray-600"}`}>{row.label}</span>
                    <span className={`text-base font-extrabold ${row.highlight ? "text-[#0D2318]" : "text-[#1a1a1a]"}`}>{formatDollar(row.value)}/mo</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The gap */}
            {results.annualGap > 0 && (
              <div className="rounded-2xl bg-[#0D2318] p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-[#3A9E6A]/60 mb-2">Annual revenue gap</p>
                <p className="text-5xl font-extrabold text-[#3A9E6A]">{formatCurrency(results.annualGap)}</p>
                <p className="mt-2 text-sm text-[#C8EDD2]/60 leading-relaxed">
                  That&rsquo;s the difference between your current booking rate and what a top-performing
                  operation produces from the same marketing spend.
                </p>
                <p className="mt-3 text-sm text-[#C8EDD2]/40">
                  This doesn&rsquo;t require more marketing spend. It requires fixing what&rsquo;s leaking.
                </p>
              </div>
            )}

            {/* Inline capture: appears at the gap reveal, does NOT gate results */}
            {results.annualGap > 0 && (
              captureDone ? (
                <div className="rounded-2xl border border-[#3A9E6A]/30 bg-[#C8EDD2]/40 p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C8EDD2] mb-3">
                    <svg className="h-6 w-6 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-base font-semibold text-[#0D2318]">Check your email. Your breakdown is on its way.</p>
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
                  <p className="text-base font-semibold text-[#1a1a1a] mb-1">Want this breakdown emailed to you?</p>
                  <p className="text-sm text-gray-500 mb-4">
                    I&rsquo;ll send your full breakdown plus a short note on the fastest way to close that gap. No spam, no obligation.
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
                      <label htmlFor="calc-website">Website</label>
                      <input
                        id="calc-website"
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
                        value={capture.name}
                        onChange={(e) => setCapture({ ...capture, name: e.target.value })}
                        placeholder="First name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                      />
                      <input
                        type="email"
                        required
                        value={capture.email}
                        onChange={(e) => setCapture({ ...capture, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                      />
                    </div>
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
                      {captureLoading ? "Sending..." : "Email Me This Breakdown"}
                    </button>
                  </form>
                </div>
              )
            )}

            {/* CTA */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-base font-semibold text-[#1a1a1a] mb-1">Want to know specifically where yours is leaking?</p>
              <p className="text-sm text-gray-500 mb-4">
                The first conversation is a free audit. Bring your numbers and we&rsquo;ll tell you exactly what the gap is and how to close it.
              </p>
              <Link
                href="/contact"
                onClick={() => trackEvent("calculator_cta_click", { lead_source: "marketing_leak_calculator", annual_gap: Math.round(results.annualGap) })}
                className="inline-flex items-center justify-center w-full rounded-lg bg-[#1A5C3A] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0D2318]"
              >
                Submit Your Info for a Free Audit
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center w-full mt-3 rounded-lg border border-gray-200 px-6 py-3.5 text-sm font-medium text-gray-600 transition hover:border-[#3A9E6A] hover:text-[#1A5C3A]"
              >
                Learn how I fix these leaks
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}
