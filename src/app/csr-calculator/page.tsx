"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

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
        <span className="text-base font-extrabold text-[#2D6A4F]">{format(value)}</span>
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
          background: `linear-gradient(to right, #2D6A4F ${((value - min) / (max - min)) * 100}%, #e5e7eb ${((value - min) / (max - min)) * 100}%)`,
        }}
      />
      <div className="flex justify-between text-xs text-gray-400">
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

  return (
    <main className="min-h-screen bg-[#fafaf8]">

      {/* Nav strip */}
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="text-sm font-semibold text-[#2D6A4F] hover:text-[#1B4332] transition-colors">
            ← Back to Sequoia GEO
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#1B4332]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 sm:py-16">
          <p className="section-overline text-[#52B788] mb-4">Free Tool</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.08] max-w-2xl">
            What is a 5% booking rate improvement{" "}
            <span className="text-[#52B788]">actually worth?</span>
          </h1>
          <p className="mt-4 text-base text-[#D8F3DC]/60 max-w-xl leading-relaxed">
            CSRs are the most underleveraged person in most contracting operations. This calculator shows you the dollar value of closing the gap.
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
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Industry benchmarks</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { label: "Average", value: "38–42%" },
                  { label: "Good", value: "55–60%" },
                  { label: "Top ops", value: "65%+" },
                ].map((b) => (
                  <div key={b.label}>
                    <p className="text-base font-extrabold text-[#1a1a1a]">{b.value}</p>
                    <p className="text-xs text-gray-400">{b.label}</p>
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
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">What each 5-point improvement produces</p>
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
                    className={`rounded-lg px-4 py-3 ${row.highlight ? "bg-[#D8F3DC]" : "bg-gray-50"}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-semibold ${row.highlight ? "text-[#1B4332]" : "text-gray-700"}`}>
                        {row.label}
                        {row.capped && (
                          <span className="ml-2 text-xs font-normal text-gray-400">At max (90%)</span>
                        )}
                        {!row.capped && (
                          <span className={`ml-2 text-xs font-normal ${row.highlight ? "text-[#2D6A4F]" : "text-gray-400"}`}>
                            → {row.rate} booking rate
                          </span>
                        )}
                      </span>
                      <span className={`text-sm font-extrabold ${row.highlight ? "text-[#1B4332]" : "text-[#1a1a1a]"}`}>
                        +{formatDollar(row.monthly)}/mo
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <span className={`text-xs ${row.highlight ? "text-[#2D6A4F] font-semibold" : "text-gray-400"}`}>
                        +{formatCurrency(row.annual)}/yr
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Annual value callout */}
            <div className="rounded-2xl bg-[#1B4332] p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[#52B788]/60 mb-2">The annual value of a 5% improvement</p>
              <p className="text-5xl font-extrabold text-[#52B788]">{formatCurrency(results.plus5AnnualGain)}</p>
              <p className="mt-3 text-sm text-[#D8F3DC]/60 leading-relaxed">
                That doesn&rsquo;t require more leads. It requires better call handling. Most contractors never measure this.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Context section */}
      <div className="bg-[#D8F3DC]/30 border-t border-[#D8F3DC]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="section-overline text-[#2D6A4F] mb-4">The levers</p>
            <h2 className="text-2xl font-extrabold text-[#1B4332] mb-6">What moves the booking rate</h2>
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
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#2D6A4F] flex items-center justify-center">
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
            <p className="mt-8 text-sm text-gray-500 border-l-2 border-[#52B788] pl-4">
              Industry average is 38&ndash;42%. Good CSR operations run 55&ndash;65%.
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
            href="/#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#2D6A4F] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1B4332]"
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
