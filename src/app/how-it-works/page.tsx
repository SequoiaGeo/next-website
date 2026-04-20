import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Sequoia GEO 30-Day Engagement",
  description:
    "What the first 30 days with Sequoia GEO actually looks like. What we get access to, what we audit, what we fix, and what you have at the end regardless of what you decide.",
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
    what: "We set up the reporting framework you\u2019ll use going forward \u2014 a dashboard that shows cost per booked job, booking rate, revenue by channel, and the other metrics that actually matter.",
    get: "A real-time reporting setup that gives you the full picture, not just what each vendor wants you to see.",
  },
  {
    week: "Day 30",
    title: "The decision",
    what: "We walk through everything together. What we found, what we fixed, what\u2019s still on the list, and what continued engagement looks like if you want to move forward.",
    get: "Everything from the 30 days is yours to keep \u2014 the findings document, the fixed accounts, the reporting setup. Regardless of what you decide.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B4332] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-overline mb-6">How It Works</div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              30 days. Full access. No obligation after that.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#D8F3DC]/80">
              Here&rsquo;s exactly what happens when we work together -- from the first call to
              day 30.
            </p>
          </div>
        </div>
      </section>

      {/* Why 30 days */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Why 30 days?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Most marketing relationships start with a 12-month contract and a 90-day onboarding period
              before anything meaningful happens. We do it differently. The first 30 days is a sprint
              -- we get access to everything, run the full audit, make approved changes, and hand
              you a complete picture of what&rsquo;s working and what isn&rsquo;t. You decide at day 30
              whether to continue. No pressure. No penalty.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We work this way because we&rsquo;re confident in what we find. Every contractor we&rsquo;ve
              audited has had meaningful findings within the first two weeks. We&rsquo;d rather show you
              the value than ask you to take it on faith.
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1B4332] text-xs font-extrabold text-white">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="mt-2 w-px grow bg-[#52B788]/30" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-12 ${index === steps.length - 1 ? "pb-0" : ""}`}>
                  <div className="section-overline mb-1">{step.week}</div>
                  <h3 className="text-xl font-extrabold text-[#1a1a1a]">{step.title}</h3>
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-[#2D6A4F]">
                        What we do
                      </p>
                      <p className="mt-1 text-base leading-relaxed text-gray-600">{step.what}</p>
                    </div>
                    <div className="rounded-lg border border-[#52B788]/20 bg-[#D8F3DC]/40 px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wide text-[#1B4332]">
                        What you get
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#1B4332]/80">{step.get}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After day 30 */}
      <section className="bg-[#fafaf8] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              After day 30, if you continue.
            </h2>
            <div className="mt-8 space-y-4">
              {[
                "Monthly strategy calls plus weekly check-ins.",
                "Ongoing account management across all channels.",
                "First call when something changes \u2014 an agency makes a move, a new platform shows up, a competitor does something worth paying attention to.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-[#52B788]"
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
            <div className="mt-8 rounded-xl border border-[#52B788]/20 bg-white px-6 py-5 shadow-sm">
              <p className="text-sm font-bold text-[#1a1a1a]">Pricing</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                Monthly retainers start at $2,500/month. Scope depends on number of channels, ad spend
                under management, and services needed. We&rsquo;ll scope it based on what we actually
                find in the audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B4332] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Start with a free strategy call.
          </h2>
          <p className="mt-4 text-lg text-[#D8F3DC]/80">
            15 minutes. We&rsquo;ll tell you whether the 30-day engagement makes sense for your
            situation, and if it doesn&rsquo;t, we&rsquo;ll tell you that too.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1B4332] transition hover:bg-[#D8F3DC]"
            >
              Book a Free Strategy Call
            </Link>
            <a
              href="tel:5595213122"
              className="text-base font-medium text-[#D8F3DC] hover:text-white transition-colors"
            >
              (559) 521-3122
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
