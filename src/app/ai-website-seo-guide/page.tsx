"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

const chapters = [
  { title: "Why AI search works differently than Google", desc: "AI tools don't rank pages. They recommend businesses. Understanding the difference changes everything about how you build your web presence." },
  { title: "The 5 signals AI uses to evaluate your website", desc: "Content depth, topical authority, entity clarity, structured data, and trust signals. Most contractor websites are strong on zero of these." },
  { title: "The thin website problem", desc: "If your website has fewer than 15 pages of real content, AI search has almost nothing to work with. Here's what you need and how to prioritize it." },
  { title: "Schema markup for contractors", desc: "Structured data tells AI exactly what your business is, who it serves, and what services it provides. Most contractor websites have none. This chapter covers the basics." },
  { title: "Content that AI actually cites", desc: "The difference between content AI ignores and content AI references comes down to specificity and depth. Here's the framework." },
  { title: "The 30-day AI visibility checklist", desc: "What to do in the first month to improve your AI search presence, in order of impact." },
];

export default function AIWebsiteSEOGuidePage() {
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
        body: JSON.stringify({ ...form, source: "AI Website SEO Guide" }),
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
          <Link href="/" className="text-sm font-semibold text-[#2D6A4F] hover:text-[#1B4332] transition-colors">
            ← Back to Sequoia GEO
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#1B4332]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: copy */}
            <div>
              <p className="section-overline text-[#52B788] mb-4">Free Guide</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.08]">
                Is Your Website Invisible to AI Search?{" "}
                <span className="text-[#52B788]">The Fix Starts Here.</span>
              </h1>
              <p className="mt-5 text-lg text-[#D8F3DC]/70 leading-relaxed">
                A roofing contractor in Phoenix had a website with 47 pages. His agency was proud of it.
                When we asked ChatGPT who to call for roofing in Phoenix, he wasn&rsquo;t mentioned.
                Not ranking lower &mdash; completely absent. Three of his competitors were named by name.
                His website had the traffic. It didn&rsquo;t have the authority signals AI search uses
                to make recommendations. This guide covers what those signals are and how to build them.
              </p>
              <p className="mt-4 text-base text-[#D8F3DC]/50">
                This is the guide for contractors who already have a website and want to know why
                AI search isn&rsquo;t recommending them &mdash; and what to fix.
              </p>

              {/* Social proof */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-1">
                  {["AC", "PL", "RO", "HV"].map((i) => (
                    <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#1B4332] bg-[#2D6A4F] text-xs font-bold text-white">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#D8F3DC]/50">
                  Downloaded by contractors in HVAC, plumbing, roofing, and restoration
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="rounded-2xl bg-white p-8 shadow-2xl shadow-black/20">
              {submitted ? (
                <div className="text-center py-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D8F3DC] mb-5">
                    <svg className="h-8 w-8 text-[#2D6A4F]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">Your guide is ready.</h2>
                  <p className="text-sm text-gray-500 mb-6">
                    12 pages. No fluff. Start with the checklist in chapter six.
                  </p>
                  <a
                    href="/ai-website-seo-guide.pdf"
                    download="Sequoia-GEO-AI-Website-SEO-Guide.pdf"
                    className="inline-flex items-center justify-center w-full rounded-lg bg-[#2D6A4F] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#1B4332]"
                  >
                    <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download the AI SEO Guide (PDF)
                  </a>
                  <p className="mt-5 text-xs text-gray-400">
                    Want us to check your AI visibility?{" "}
                    <Link href="/#contact" className="text-[#2D6A4F] font-medium hover:underline">
                      Book a free strategy call.
                    </Link>
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-[#1a1a1a] mb-1">Get the free guide</h2>
                  <p className="text-sm text-gray-500 mb-6">
                    12 pages. Instant download. No spam.
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
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#52B788] focus:outline-none focus:ring-2 focus:ring-[#52B788]/20"
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
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#52B788] focus:outline-none focus:ring-2 focus:ring-[#52B788]/20"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-lg bg-[#2D6A4F] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#2D6A4F]/25 transition hover:bg-[#1B4332] disabled:opacity-60"
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
            12 pages. No fluff.{" "}
            <span className="text-[#2D6A4F]">Just what actually moves the needle.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
          {chapters.map((chapter, i) => (
            <div key={i} className="bg-white p-7">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-black text-[#2D6A4F]/15 leading-none shrink-0 mt-0.5">
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
            <p className="text-base font-semibold text-[#1a1a1a]">Want us to check your AI visibility?</p>
            <p className="text-sm text-gray-500">We audit where your business appears across ChatGPT, Gemini, Perplexity, and Google AI Overviews. 3 business days. No pitch.</p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 inline-flex items-center justify-center rounded-lg bg-[#2D6A4F] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1B4332]"
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
