import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Marketing Audit for Home Service Contractors | Sequoia GEO",
  description:
    "12-point marketing audit for HVAC, plumbing, and roofing contractors. We check LSA setup, conversion tracking accuracy, booking rate, website ownership, and 8 more areas. No pitch. No obligation.",
  alternates: { canonical: "https://www.sequoiageo.com/audit" },
};

const auditItems = [
  {
    title: "LSA Setup & Phone Verification",
    desc: "We call the phone number attached to your LSA campaign. You'd be surprised how often it doesn't work.",
  },
  {
    title: "Conversion Tracking Accuracy",
    desc: "Most dashboards show thousands of 'conversions' that aren't phone calls or form fills. We find the real number.",
  },
  {
    title: "Website Ownership",
    desc: "Who actually owns your website and domain? If you left today, would you take it with you?",
  },
  {
    title: "Ad Spend Attribution",
    desc: "Where is your budget actually going? We break down every channel and what it's producing in booked jobs.",
  },
  {
    title: "Booking Rate Analysis",
    desc: "We look at calls versus booked jobs. Most agencies don't have this number. We make it unavoidable.",
  },
  {
    title: "Average Ticket & Revenue per Lead",
    desc: "Not just cost-per-lead — revenue per dollar spent. The number that actually matters.",
  },
  {
    title: "Google Business Profile Health",
    desc: "NAP consistency, category accuracy, photo recency, review velocity, and whether your profile is suppressing itself.",
  },
  {
    title: "CSR Call Handling",
    desc: "We listen to calls. One call review often finds more revenue opportunity than a full month of optimization.",
  },
  {
    title: "Website Speed & Technical Health",
    desc: "Slow pages lose calls before anyone reads a word. We measure it against your actual competitors.",
  },
  {
    title: "Review Strategy",
    desc: "Volume, recency, response rate, and sentiment. All four matter. Most contractors are strong on one and weak on the rest.",
  },
  {
    title: "Competitive Gap Analysis",
    desc: "What are your top 3 local competitors doing that you aren't? Where are you winning?",
  },
  {
    title: "AI Search Visibility",
    desc: "Does your business appear when a homeowner asks ChatGPT for a recommendation in your market? Most don't.",
  },
];

const deliverables = [
  {
    title: "Written findings report",
    desc: "Every finding documented with the source, why it matters, and what it's costing you in estimated revenue.",
  },
  {
    title: "Prioritized action list",
    desc: "Not a 47-point wishlist. The 5 things with the highest ROI, in order.",
  },
  {
    title: "A straight conversation",
    desc: "We go through it together. You ask questions. We give direct answers. No upsell pressure.",
  },
];

const goodFit = [
  "Spending $3K+ per month on marketing",
  "Have at least one active lead channel",
  "Want to understand your actual numbers",
  "Currently working with at least one vendor or agency",
];

const notGoodFit = [
  "Just starting out with no marketing budget",
  "Looking for a surface-level SEO report",
  "Not willing to share access to accounts",
];

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">

      {/* Nav strip */}
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
          >
            ← Back to Sequoia GEO
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#0D2318]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="section-overline text-[#3A9E6A] mb-4">Free Audit</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.06]">
              Find out exactly what&rsquo;s leaking before you spend another dollar.
            </h1>
            <p className="mt-6 text-lg text-[#C8EDD2]/70 leading-relaxed max-w-2xl">
              Most contractors we talk to have the same experience: multiple agencies, regular
              reports, and no clear picture of what&rsquo;s actually working. The audit exists to
              fix that.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-[#3A9E6A]/10 px-4 py-2 text-sm font-medium text-[#3A9E6A]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                No pitch. No obligation.
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-[#3A9E6A]/10 px-4 py-2 text-sm font-medium text-[#3A9E6A]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                We check 12 specific areas.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* What we examine */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-overline mb-3">What We Examine</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl leading-[1.08]">
              The 12-point audit
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              The 12-point audit covers every layer of the marketing pipeline — from the first
              impression to the booked job.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
            {auditItems.map((item, i) => (
              <div key={i} className="bg-white p-7">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-black text-[#1A5C3A]/15 leading-none shrink-0 mt-0.5 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What you get */}
      <div className="bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-overline mb-3">Deliverables</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-[1.08]">
              What the audit delivers
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1A5C3A]">
                  <span className="text-sm font-black text-white">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-white/30 border-t border-white/10 pt-8">
            The audit typically takes 3&ndash;5 business days. The strategy call is 45&ndash;60 minutes.
          </p>
        </div>
      </div>

      {/* Who this is for */}
      <div className="bg-[#fafaf8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-overline mb-3">Fit Check</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl leading-[1.08]">
              Who this is for
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Good fit */}
            <div className="rounded-2xl border border-[#3A9E6A]/30 bg-[#C8EDD2]/30 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A5C3A]">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#0D2318]">Good fit</h3>
              </div>
              <ul className="space-y-3">
                {goodFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm leading-relaxed text-[#1a1a1a]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a good fit */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                  <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#1a1a1a]">Not a good fit</h3>
              </div>
              <ul className="space-y-3">
                {notGoodFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm leading-relaxed text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0D2318]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="section-overline text-[#3A9E6A] mb-4">Limited Availability</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-[1.08]">
              10 audits per month. First come, first served.
            </h2>
            <p className="mt-5 text-lg text-[#C8EDD2]/70 leading-relaxed">
              We limit the number of audits we run each month so we can actually be thorough.
              If there&rsquo;s a spot available, it costs nothing and takes about 15 minutes of
              your time to get started.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#245a42]"
              >
                Apply for a Free Audit
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:5595213122"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#C8EDD2]/60 hover:text-[#C8EDD2] transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (559) 521-3122
              </a>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
