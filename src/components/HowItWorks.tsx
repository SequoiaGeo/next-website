import Link from "next/link";

const steps = [
  {
    month: "Month 1",
    number: "01",
    title: "The Full Picture Audit",
    description:
      "I audit everything: your marketing spend and ROI by channel, your phone handling, your booking rate, your review velocity, your website conversion paths, your competitive position, and where revenue is leaking. You get a complete playbook, not a pitch deck.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    month: "Months 2–3",
    number: "02",
    title: "Fix and Build",
    description:
      "We fix what's broken first (wasted spend, misconfigured tracking, phone gaps), then build what's missing (proper attribution, conversion-optimized pages, review systems, local SEO). If you have existing agencies, I hold them accountable to revenue metrics, not vanity metrics.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    month: "Month 4+",
    number: "03",
    title: "Scale What Works",
    description:
      "With clean data and a functioning pipeline, we scale. More budget to channels that produce profitable jobs. Less to channels that produce reports. Expansion into new service areas or markets when the numbers support it.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

          {/* Left: header */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-overline mb-4">How it works</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl leading-[1.08]">
              Not an agency.{" "}
              <span className="text-[#2D6A4F]">Your growth operator.</span>
            </h2>
            <p className="mt-5 text-base text-gray-500 leading-relaxed">
              The engagement is built around depth, not deliverables.
            </p>
            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#2D6A4F] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1B4332]"
              >
                Start With the Full Picture Audit
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: steps */}
          <div className="space-y-0 divide-y divide-gray-100">
            {steps.map((step, index) => (
              <div key={step.month} className="flex gap-8 py-10 first:pt-0">
                {/* Number */}
                <div className="shrink-0 pt-1">
                  <span className="text-5xl font-black text-[#2D6A4F]/10">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D8F3DC] text-[#2D6A4F]">
                      {step.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
                      {step.month}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a]">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
