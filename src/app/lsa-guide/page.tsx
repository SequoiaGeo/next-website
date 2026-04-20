"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

const chapters = [
  { title: "What LSAs actually are", desc: "How they differ from Google Ads, how billing works, and why they convert differently than any other channel." },
  { title: "Your most important job: managing leads", desc: "The response time and rating habits that determine how many leads Google sends you versus your competitors." },
  { title: "How to get your money back for bad leads", desc: "The exact steps to dispute invalid leads. Most contractors leave credits on the table because they don't know this process." },
  { title: "Call handling that keeps you off the hook", desc: "Google's AI is listening to your calls. Two questions to ask at the start of every call that protect you from being charged for leads you can't serve." },
  { title: "Reviews: your #1 ranking factor", desc: "Why a business with 150 reviews at 4.8 stars beats a perfect 5.0 with 30 reviews, and what to do about it every week." },
  { title: "What Google is actually tracking", desc: "The six factors that determine your ad ranking. One you can't control. Five you can, starting today." },
  { title: "Daily, weekly, and monthly checklist", desc: "10 minutes a day. 30 minutes a week. The non-negotiable routine that separates contractors getting 30 leads a month from those getting 8." },
];

export default function LSAGuidePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/guide-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // still show download even if API fails
    } finally {
      setLoading(false);
      setSubmitted(true);
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: copy */}
            <div>
              <p className="section-overline text-[#3A9E6A] mb-4">Free Guide</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.08]">
                The Business Owner&rsquo;s Guide to{" "}
                <span className="text-[#3A9E6A]">Google Local Service Ads</span>
              </h1>
              <p className="mt-5 text-lg text-[#C8EDD2]/70 leading-relaxed">
                A plumbing company in Southern California had their LSA running for months
                with an active campaign, a live budget, and Google sending them Google Guaranteed leads.
                Every single one of those leads hit a dead phone line.
                The agency managing it never called to check.
              </p>
              <p className="mt-4 text-base text-[#C8EDD2]/50">
                This guide covers what your agency probably isn&rsquo;t checking, and what you
                should be doing yourself every day, week, and month.
              </p>

              {/* Social proof */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-1">
                  {["AC", "PL", "RO", "HV"].map((i) => (
                    <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0D2318] bg-[#1A5C3A] text-xs font-bold text-white">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#C8EDD2]/50">
                  Downloaded by contractors in HVAC, plumbing, roofing, and restoration
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="rounded-2xl bg-white p-8 shadow-2xl shadow-black/20">
              {submitted ? (
                <div className="text-center py-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C8EDD2] mb-5">
                    <svg className="h-8 w-8 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">Your guide is ready.</h2>
                  <p className="text-sm text-gray-500 mb-6">
                    11 pages. No fluff. Print it out and keep it next to your desk.
                  </p>
                  <a
                    href="/lsa-guide.pdf"
                    download="Sequoia-GEO-LSA-Guide.pdf"
                    className="inline-flex items-center justify-center w-full rounded-lg bg-[#1A5C3A] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#0D2318]"
                  >
                    <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download the LSA Guide (PDF)
                  </a>
                  <p className="mt-5 text-xs text-gray-400">
                    Want someone to audit your LSA setup?{" "}
                    <Link href="/#contact" className="text-[#1A5C3A] font-medium hover:underline">
                      Book a free strategy call.
                    </Link>
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-[#1a1a1a] mb-1">Get the free guide</h2>
                  <p className="text-sm text-gray-500 mb-6">
                    11 pages. Instant download. No spam.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="guide-name" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Your name</label>
                      <input
                        id="guide-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="First name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="guide-email" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Email address</label>
                      <input
                        id="guide-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-lg bg-[#1A5C3A] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318] disabled:opacity-60"
                    >
                      {loading ? "Sending..." : "Send Me the Guide"}
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      No spam. Occasional operator insights from Aaron. Unsubscribe anytime.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* What's inside */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl mb-10">
          <p className="section-overline mb-3">What&rsquo;s Inside</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl leading-[1.08]">
            11 pages. No fluff.{" "}
            <span className="text-[#1A5C3A]">Just what actually moves the needle.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
          {chapters.map((chapter, i) => (
            <div key={i} className="bg-white p-7">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-black text-[#1A5C3A]/15 leading-none shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#1a1a1a]">{chapter.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{chapter.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-base font-semibold text-[#1a1a1a]">Want someone to audit your LSA setup?</p>
            <p className="text-sm text-gray-500">We check the basics most agencies skip: phone number, profile accuracy, conversion tracking, call handling.</p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0D2318]"
          >
            Book a Free Strategy Call
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

    </main>
  );
}
