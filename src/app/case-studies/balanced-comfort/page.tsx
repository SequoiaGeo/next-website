import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balanced Comfort Case Study | Sequoia GEO",
  description:
    "How Balanced Comfort grew from energy audits to $17M+ in annual revenue, four Inc 5000 appearances, three Best Place to Work certifications, and a successful exit. The company Aaron Husak built before starting Sequoia GEO.",
  alternates: {
    canonical: "https://www.sequoiageo.com/case-studies/balanced-comfort",
  },
};

const stats = [
  { value: "$17M+", label: "Annual revenue at exit" },
  { value: "4,000+", label: "5-star Google reviews" },
  { value: "4x", label: "Inc 5000 (2020–2023)" },
  { value: "3x", label: "Best Place to Work certified" },
];

const strategies = [
  {
    title: "Local SEO",
    description:
      "Balanced Comfort built organic dominance for high-intent HVAC, plumbing, and restoration searches across Fresno and the Central Valley. Multi-location optimization, technical SEO, and content that matched how customers actually searched.",
  },
  {
    title: "Reputation at scale",
    description:
      "4,000+ five-star Google reviews built through consistent follow-up systems and a team that delivered on the promise. Review velocity became a competitive moat no competitor could easily replicate.",
  },
  {
    title: "Conversion-focused web presence",
    description:
      "The website was built to convert visitors into booked calls. Page speed, mobile experience, CTA placement, and trust signals were tested and refined over years of real performance data.",
  },
  {
    title: "Paid advertising with tracked ROI",
    description:
      "Google Ads, Local Service Ads, and Facebook campaigns run with full attribution tracking. Every dollar traced from click to booked job, with budget calibrated to revenue per channel.",
  },
  {
    title: "Google Business Profile",
    description:
      "A fully optimized GBP with consistent posting, Q&A management, and photo strategy. One of the most-reviewed HVAC companies in California — built through process, not luck.",
  },
];

export default function BalancedComfortCaseStudy() {
  return (
    <>
      {/* Nav strip */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-overline mb-4">Founder&rsquo;s Story</p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Balanced Comfort Heating &amp; Air
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              From energy audits to $17M+ in annual revenue, four Inc 5000 appearances, and a
              successful exit. This is the company Aaron Husak built before starting Sequoia GEO.
              Every strategy deployed for clients was tested here first.
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <div className="text-2xl font-extrabold text-[#3A9E6A]">{item.value}</div>
                <div className="mt-1 text-xs text-[#C8EDD2]/70 leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 - The Origin */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Founded on energy efficiency
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Aaron Husak founded Balanced Comfort in 2012 to partner with PG&E and the City of
                Fresno on a residential energy efficiency program. At peak, the company was
                completing 200 to 300 energy audits per month, helping homeowners across the Fresno
                area reduce consumption and improve the efficiency of their homes.
              </p>
              <p>
                When that program funding ended, Balanced Comfort pivoted into energy code
                calculations, mechanical engineering design, and fire protection design for an
                entirely different customer base. Two businesses in the same decade, before HVAC
                ever entered the picture.
              </p>
              <p>
                In 2019, the company was selected to participate in the Energy Savings Assistance
                Program through PG&E. This weatherization program delivered energy efficiency
                upgrades to qualifying households at no cost, and Balanced Comfort scaled its team
                to meet the demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - The Pivot */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              March 2020: the pivot that changed everything
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                When the coronavirus outbreak forced Balanced Comfort to halt ESA program work,
                the company had 25 employees on payroll and its main revenue stream had stopped.
                Most businesses in that position cut staff and waited.
              </p>
              <p>
                Balanced Comfort pivoted to HVAC instead.
              </p>
              <p>
                By hiring skilled technicians and retraining the existing workforce, the company
                launched heating and air conditioning services across the Central Valley in the
                middle of a pandemic. The team adapted. Demand was immediate. Protective equipment
                protocols were put in place and customers responded with trust.
              </p>
              <p>
                That decision launched a different kind of company. Over the following years,
                Balanced Comfort expanded into plumbing and restoration while continuing to grow
                the HVAC and weatherization divisions. The marketing engine that drove that
                growth was built from scratch and refined over years of real performance data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - The Marketing Engine */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl mb-14">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              The marketing system behind the growth
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Revenue growth at Balanced Comfort was not accidental. It came from a compounding
              marketing system built for home service contractors and tested with real money on
              the line.
            </p>
          </div>
          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strategies.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7 shadow-sm"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8EDD2]">
                  <span className="h-4 w-4 rounded-full bg-[#3A9E6A]" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-[#0D2318]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - The Numbers */}
      <section className="bg-[#1a1a1a] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="section-overline mb-4">The Numbers</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Results that compound over time
            </h2>
          </div>
          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl font-extrabold text-[#3A9E6A]">$17M+</div>
              <div className="mt-3 text-base font-semibold text-white">Annual Revenue</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                From energy audits to a multi-service home services company with $17M+ in annual
                revenue at exit.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl font-extrabold text-[#3A9E6A]">4,000+</div>
              <div className="mt-3 text-base font-semibold text-white">5-Star Reviews</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Earned through consistent service and a systematic approach to reputation
                management. Not purchased. Not incentivized.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl font-extrabold text-[#3A9E6A]">4x</div>
              <div className="mt-3 text-base font-semibold text-white">Inc 5000</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Named to the Inc 5000 list of fastest-growing private companies four consecutive
                years: 2020, 2021, 2022, and 2023.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl font-extrabold text-[#3A9E6A]">3x</div>
              <div className="mt-3 text-base font-semibold text-white">Best Place to Work</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Certified three years in a row. Culture, retention, and team quality were
                competitive advantages, not afterthoughts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Why It Matters */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Your marketing agency should know what it&rsquo;s like to run a service business.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Most marketing agencies have never dispatched a truck, handled a warranty call,
                or rebuilt a business model under pressure. They apply templates built for
                e-commerce or retail and wonder why they don&rsquo;t move the needle for
                contractors.
              </p>
              <p>
                Sequoia GEO was built by someone who ran a service company for over a decade.
                Every campaign structure, every SEO strategy, every reputation management
                process has been tested against real business outcomes, not agency benchmarks.
              </p>
              <p>
                The strategies that produced four Inc 5000 appearances and $17M+ in annual
                revenue at Balanced Comfort are the same ones deployed for clients today.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-10 border-l-4 border-[#3A9E6A] pl-6">
              <p className="text-xl font-medium italic leading-relaxed text-[#1a1a1a]">
                &ldquo;Most marketing agencies will tell you what should work. We can tell you what
                actually works, because we used it to build a company that made the Inc 5000 four
                years in a row.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-[#1A5C3A]">
                Aaron Husak, Founder, Sequoia GEO
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-extrabold text-white">
            Ready to put proven strategy to work for your business?
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
