import Link from "next/link";

const goodFit = [
  "You run a home-service or local-service business and want customers to find accurate information about you",
  "You want to understand whether ChatGPT and other AI search products mention, cite, or recommend your business",
  "You need help correcting website or public-profile problems, with evidence of what changed",
  "You can invest in an agreed scope of work if the assessment identifies a worthwhile next step",
  "You want a partner who distinguishes visibility from inquiries and qualified leads",
];

const badFit = [
  "You need guaranteed rankings, AI recommendations, or a promised number of leads",
  "You want fabricated reviews, unsupported claims, or misleading reporting",
  "You are not ready to approve or implement any corrections after the assessment",
];

export default function WhoIsItFor() {
  return (
    <section id="who-is-it-for" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">

          {/* Left: sticky header */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-overline mb-4">Is This a Fit?</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl leading-[1.08]">
              For service businesses ready to{" "}
              <span className="text-[#1A5C3A]">improve how customers find and evaluate them.</span>
            </h2>
            <p className="mt-5 text-base text-gray-500 leading-relaxed">
              Fit starts with your business needs, the evidence, and the work you are ready to undertake.
              Company size alone does not decide it. The public snapshot requires no account access.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/ai-search-assessment"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0D2318]"
              >
                Request My Free AI Search Snapshot
                <svg aria-hidden="true" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:5595213122"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-600 transition-colors"
              >
                <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Or call (559) 521-3122
              </a>
            </div>
          </div>

          {/* Right: two lists */}
          <div className="space-y-8">

            {/* Good fit */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C8EDD2]">
                  <svg aria-hidden="true" className="h-3.5 w-3.5 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A5C3A]">This is for you if</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {goodFit.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-4 first:pt-0">
                    <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-base leading-relaxed text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a fit */}
            <div className="rounded-xl bg-gray-50 px-7 py-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200">
                  <svg aria-hidden="true" className="h-3.5 w-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">Not a fit</h3>
              </div>
              <ul className="space-y-3">
                {badFit.map((item) => (
                  <li key={item} className="flex items-start gap-3">
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
    </section>
  );
}
