import type { Metadata } from "next";
import InlineLeadForm from "@/components/InlineLeadForm";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Free Marketing Audit for Home Service Contractors | Sequoia GEO",
  description:
    "12-point marketing audit for HVAC, plumbing, and roofing contractors. We check LSA setup, conversion tracking accuracy, booking rate, website ownership, and 8 more areas. No pitch. No obligation.",
  alternates: { canonical: "https://www.sequoiageo.com/audit" },
};

const heroDeliverables = [
  {
    label: "What I check",
    desc: "LSA setup, conversion tracking, ad spend against booked jobs, GBP health, call handling, and 7 more areas. 12 total, by hand.",
  },
  {
    label: "What you get back",
    desc: "A written findings report with the source and confidence behind each issue, plus the 5 fixes that should come first.",
  },
  {
    label: "How fast",
    desc: "3 to 5 business days, then a 45 to 60 minute call to walk through it. You keep the report either way.",
  },
];

const proofChips = [
  "4x Inc 5000",
  "13 years as an operator",
  "$17M+ annual revenue at exit",
];

const auditItems = [
  {
    title: "LSA Setup & Phone Verification",
    desc: "I call the phone number attached to your LSA campaign. You'd be surprised how often it doesn't work.",
  },
  {
    title: "Conversion Tracking Accuracy",
    desc: "Most dashboards show thousands of 'conversions' that aren't phone calls or form fills. I find the real number.",
  },
  {
    title: "Website Ownership",
    desc: "Who actually owns your website and domain? If you left today, would you take it with you?",
  },
  {
    title: "Ad Spend Attribution",
    desc: "Where is your budget actually going? I break down every channel and what it's producing in booked jobs.",
  },
  {
    title: "Booking Rate Analysis",
    desc: "I look at calls versus booked jobs. Most agencies don't have this number. I make it unavoidable.",
  },
  {
    title: "Lead Quality & Jobs Booked",
    desc: "Not just cost per lead. I reconcile which sources produce qualified calls and jobs booked.",
  },
  {
    title: "Google Business Profile Health",
    desc: "NAP consistency, category accuracy, photo recency, review velocity, and whether your profile is suppressing itself.",
  },
  {
    title: "CSR Call Handling",
    desc: "I listen to calls. One call review often finds more revenue opportunity than a full month of optimization.",
  },
  {
    title: "Website Speed & Technical Health",
    desc: "Slow pages lose calls before anyone reads a word. I measure it against your actual competitors.",
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
    desc: "Every finding documented with the source, confidence level, why it matters, and the next action it supports.",
  },
  {
    title: "Prioritized action list",
    desc: "Not a 47-point wishlist. The 5 actions with the strongest evidence and clearest next step, in order.",
  },
  {
    title: "A straight conversation",
    desc: "We go through it together. You ask questions. I give direct answers. No upsell pressure.",
  },
];

const goodFit = [
  "Spending $5K to $30K per month on marketing",
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

      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "Free Audit", url: "https://www.sequoiageo.com/audit" },
        ]}
      />

      {/* Hero + capture: everything a cold click needs in the first viewport */}
      <div id="audit-form" className="scroll-mt-20 bg-[#0D2318]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">

            {/* Left: the offer */}
            <div>
              <p className="section-overline text-[#3A9E6A] mb-4">Free Marketing Audit</p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.08]">
                I&rsquo;ll audit your marketing for free and show you what your spend actually produces.
              </h1>
              <p className="mt-4 text-base text-[#C8EDD2]/70 leading-relaxed">
                No pitch. No obligation. Real numbers pulled from your own accounts.
              </p>

              <ul className="mt-7 space-y-4">
                {heroDeliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p className="text-sm leading-relaxed text-[#C8EDD2]/80">
                      <span className="font-bold text-white">{item.label}: </span>
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                {proofChips.map((chip, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-[#3A9E6A]/10 px-4 py-2 text-sm font-medium text-[#3A9E6A]"
                  >
                    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {chip}
                  </span>
                ))}
              </div>

              <p className="mt-7 text-sm text-[#C8EDD2]/60">
                Rather talk than type?{" "}
                <a href="tel:5595213122" className="font-semibold text-white hover:text-[#C8EDD2] transition-colors">
                  Call me at (559) 521-3122
                </a>
                .
              </p>
            </div>

            {/* Right: the capture. Section chrome stripped so the card sits in the hero. */}
            <div className="[&>section]:bg-transparent [&>section]:py-0 [&>section>div]:max-w-none [&>section>div]:px-0">
              <InlineLeadForm
                source="audit_page"
                heading="Get your free audit"
                subtext="Tell me where to send it. I take 10 audits a month, first come, first served."
                buttonText="Get My Free Audit"
              />
            </div>

          </div>
        </div>
      </div>

      {/* What an audit found: real figures, already published, names removed */}
      <div className="bg-[#fafaf8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mb-10">
            <p className="section-overline mb-3">From One Audit</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl leading-[1.08]">
              What an audit found
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              One home service company. Numbers pulled from its own accounts, published with the name removed.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <p className="text-4xl font-extrabold tracking-tight text-[#1A5C3A] tabular-nums">
                16,962
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Conversion events reported by the ad account. The account review found only{" "}
                <span className="font-semibold text-[#1a1a1a]">21 measured search conversions</span>{" "}
                in the reviewed period. They were not confirmed booked jobs.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <p className="text-4xl font-extrabold tracking-tight text-[#1A5C3A] tabular-nums">
                131 <span className="text-xl font-bold text-gray-400">of 4,009</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Same audit. I went through 4,009 tracked calls.{" "}
                <span className="font-semibold text-[#1a1a1a]">131 were new customers</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What we examine */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-overline mb-3">What I Examine</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl leading-[1.08]">
              The 12-point audit
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              The 12-point audit covers every layer of the marketing pipeline, from the first
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
            The audit typically takes 3 to 5 business days. The strategy call is 45 to 60 minutes.
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
                  <svg aria-hidden="true" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#0D2318]">Good fit</h3>
              </div>
              <ul className="space-y-3">
                {goodFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
                  <svg aria-hidden="true" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#1a1a1a]">Not a good fit</h3>
              </div>
              <ul className="space-y-3">
                {notGoodFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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

      {/* Bottom CTA: scrolls back to the form, never off the page */}
      <div className="bg-[#0D2318]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="section-overline text-[#3A9E6A] mb-4">Limited Availability</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-[1.08]">
              10 audits per month. First come, first served.
            </h2>
            <p className="mt-5 text-lg text-[#C8EDD2]/70 leading-relaxed">
              I limit the number of audits I run each month so I can actually be thorough.
              If a spot is open, it costs nothing. The form takes a minute, and you&rsquo;ll
              hear from me within one business day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#audit-form"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#245a42]"
              >
                Get My Free Audit
                <svg aria-hidden="true" className="ml-2 h-4 w-4 rotate-[-90deg]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="tel:5595213122"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#C8EDD2]/60 hover:text-[#C8EDD2] transition-colors"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
