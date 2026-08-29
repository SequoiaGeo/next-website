import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Sequoia GEO Engagements Work | First 90 Days",
  description:
    "What happens during the first 90 days with Sequoia GEO, from baseline and approved corrections through measurement and the month-to-month decision.",
  alternates: { canonical: "https://www.sequoiageo.com/how-it-works" },
};

const steps = [
  {
    week: "Week 1",
    title: "Access and baseline",
    what: "We get access to your Google Ads, LSA, Analytics, GBP, and CRM. We run the 12-point audit. We call your phone numbers. We review call recordings. We check every tracking definition.",
    get: "A findings document with everything we discover, the source of each finding, and an estimated revenue impact.",
  },
  {
    week: "Week 2",
    title: "The real numbers",
    what: "We calculate your actual cost per booked job across every channel. We compare your booking rate to industry benchmarks. We identify the gap between what your marketing spend is producing and what it should be producing.",
    get: "A clear picture of what each channel is actually costing you in booked jobs, not just leads.",
  },
  {
    week: "Week 3",
    title: "Approved fixes",
    what: "We present our recommendations in order of ROI. For anything you approve, we implement it. That might be fixing LSA settings, updating tracking definitions, revising ad copy, or adjusting bid strategy.",
    get: "Changes live in your accounts. Not recommendations sitting in a slide deck.",
  },
  {
    week: "Week 4",
    title: "Systems and reporting",
    what: "We set up the reporting framework you\u2019ll use going forward: a dashboard that shows cost per booked job, booking rate, revenue by channel, and the other metrics that actually matter.",
    get: "A real-time reporting setup that gives you the full picture, not just what each vendor wants you to see.",
  },
  {
    week: "Day 30",
    title: "The first operating review",
    what: "We walk through what we found, what changed, what remains unresolved, and which priorities should govern months two and three.",
    get: "A documented baseline, an approved change log, and the measurement plan for the rest of the initial term.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-overline mb-6">How It Works</div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Baseline first. Corrections next. Measurement through day 90.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              Here&rsquo;s what happens during the three-month initial term, beginning with a
              focused first-month audit and implementation sprint.
            </p>
          </div>
        </div>
      </section>

      {/* Why the first 30 days matter */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Why begin with 30 days?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              The first 30 days are for establishing the baseline, reviewing the available evidence,
              correcting the first approved constraint, and documenting what changed. They are not a
              separate trial or a deadline for promising results. Every starting engagement has a
              three-month initial term, then continues month to month.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Months two and three are where we verify implementation, observe the available signals,
              and decide whether the first corrections are producing the intended result. Findings,
              changes, and outcomes are reported as separate stages.
            </p>
          </div>
        </div>
      </section>

      {/* The 5-step process */}
      <section className="bg-[#fafaf8] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What happens, week by week
            </h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-0">
            {steps.map((step, index) => (
              <div key={step.week} className="relative flex gap-8">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D2318] text-xs font-extrabold text-white">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="mt-2 w-px grow bg-[#3A9E6A]/30" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-12 ${index === steps.length - 1 ? "pb-0" : ""}`}>
                  <div className="section-overline mb-1">{step.week}</div>
                  <h3 className="text-xl font-extrabold text-[#1a1a1a]">{step.title}</h3>
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-[#1A5C3A]">
                        What we do
                      </p>
                      <p className="mt-1 text-base leading-relaxed text-gray-600">{step.what}</p>
                    </div>
                    <div className="rounded-lg border border-[#3A9E6A]/20 bg-[#C8EDD2]/40 px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wide text-[#0D2318]">
                        What you get
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#0D2318]/80">{step.get}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Months two and three */}
      <section className="bg-[#fafaf8] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What happens during months two and three.
            </h2>
            <div className="mt-8 space-y-4">
              {[
                "Approved priorities move from diagnosis into implementation and verification.",
                "Reporting separates technical corrections, visibility signals, inquiries, qualified leads, and jobs booked.",
                "Before the initial term ends, we review what is complete, what remains open, and whether continued month-to-month work is justified.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-[#3A9E6A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <p className="text-lg leading-relaxed text-gray-600">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-[#3A9E6A]/20 bg-white px-6 py-5 shadow-sm">
              <p className="text-sm font-bold text-[#1a1a1a]">Pricing</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                Engagements start at $2,500 per month with a three-month initial term, then month to
                month. Scope is defined before work begins, and ad spend and separately approved tools
                are not included in the monthly fee.
              </p>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Want to see what this process produces?{" "}
              <Link
                href="/case-studies/firemans-chimney-sweep"
                className="font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
              >
                Read how a chimney company rebuilt an unmeasured site and documented what happened next
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Start with a free strategy call.
          </h2>
          <p className="mt-4 text-lg text-[#C8EDD2]/80">
            In 15 minutes, we can determine whether a three-month engagement fits the problem you
            are trying to solve. If it does not, we will say so.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#C8EDD2]"
            >
              Book a Free Strategy Call
            </Link>
            <a
              href="tel:5595213122"
              className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors"
            >
              (559) 521-3122
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
