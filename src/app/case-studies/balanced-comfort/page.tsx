import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: Balanced Comfort Heating & Air | Sequoia GEO",
  description:
    "How Aaron Husak built Balanced Comfort from one truck to $10M+ annual revenue, 4,000+ Google reviews, and a successful acquisition. Using the same strategies Sequoia GEO deploys for clients.",
  alternates: {
    canonical: "https://www.sequoiageo.com/case-studies/balanced-comfort",
  },
};

const stats = [
  { value: "13 Years", label: "Building Balanced Comfort" },
  { value: "$10M+", label: "Annual Revenue at Exit" },
  { value: "4,000+", label: "Google Reviews Earned" },
  { value: "Acquired", label: "December 2024" },
];

const strategies = [
  {
    title: "Local SEO",
    description:
      "Balanced Comfort dominated organic search for every high-intent HVAC keyword in the Fresno market. When customers searched for \"HVAC repair near me\" or \"best AC company in Fresno,\" Balanced Comfort was there: in the map pack, in organic results, and eventually in AI-powered search results.",
  },
  {
    title: "Google Business Profile",
    description:
      "Aaron built a systematic review generation process. Over 13 years, Balanced Comfort accumulated more than 4,000 verified Google reviews, making it one of the most-reviewed HVAC companies in the state. That review volume became a competitive moat no competitor could easily replicate.",
  },
  {
    title: "Conversion-Focused Website",
    description:
      "The website wasn't a digital brochure. Every element was tested and optimized to convert visitors into booked service calls: page speed, mobile experience, CTA placement, trust signals. All refined through years of real data.",
  },
  {
    title: "Paid Advertising with Tracked ROI",
    description:
      "Google Ads, LSAs, and Facebook campaigns running with full attribution tracking. Every dollar traced from click to booked job. No wasted spend. No guessing.",
  },
  {
    title: "Reputation Management at Scale",
    description:
      "Beyond collecting reviews, Aaron built systems to respond to every review, address concerns proactively, and turn the company's reputation into its greatest marketing asset.",
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
            <p className="section-overline mb-4">Case Study</p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              From One Truck to $10M+ and a Successful Exit
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              This is the company Aaron Husak built before starting Sequoia GEO. Every strategy we
              deploy for clients was tested here first, over 13 years, with real money on the line.
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
              One Truck. Zero Leads. No Online Presence.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                In 2012, Aaron Husak launched Balanced Comfort Heating &amp; Air in Fresno,
                California. No employees. No brand recognition. No website. No Google listing.
                Just an HVAC technician competing against companies with decades of market
                presence and million-dollar ad budgets.
              </p>
              <p>
                The Fresno-Clovis metro is one of the most competitive HVAC markets in California.
                Breaking through wasn&rsquo;t going to happen with door hangers and Yellow Pages
                ads. It required a completely different approach.
              </p>
              <p>
                Aaron made a decision that would define the next 13 years: he would build the
                entire growth engine on digital marketing, and he would learn to do it himself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Building the Machine */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl mb-14">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Building the Marketing Machine
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Instead of hiring an agency, Aaron became one. Over 13 years of trial, error, and
              relentless optimization, he developed a full-stack digital marketing system built
              specifically for home service contractors.
            </p>
          </div>
          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strategies.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
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

      {/* Section 3 - The Numbers */}
      <section className="bg-[#1a1a1a] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="section-overline mb-4">The Numbers</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Results That Speak for Themselves
            </h2>
          </div>
          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl font-extrabold text-[#3A9E6A]">$10M+</div>
              <div className="mt-3 text-base font-semibold text-white">Annual Revenue</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                What started as a solo operation grew into one of the Central Valley&rsquo;s
                largest residential HVAC companies.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl font-extrabold text-[#3A9E6A]">4,000+</div>
              <div className="mt-3 text-base font-semibold text-white">Google Reviews</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Not purchased. Not incentivized. Earned through consistent service and a
                systematic approach to reputation management.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl font-extrabold text-[#3A9E6A]">Acquired</div>
              <div className="mt-3 text-base font-semibold text-white">December 2024</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                The ultimate proof: Balanced Comfort was acquired by a buyer who recognized the
                value of the brand, the customer base, and the marketing infrastructure Aaron had
                built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Why This Matters */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Your marketing agency should know what it&rsquo;s like to answer the phone at 2 AM.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Most marketing agencies have never run a service business. They&rsquo;ve never
                dispatched a truck, handled a warranty call, or sweated a slow January. They&rsquo;re
                guessing at what works for contractors based on theory and templates.
              </p>
              <p>Aaron has lived it. For 13 years.</p>
              <p>
                Every strategy we recommend, every campaign we build, every optimization we make
                has been tested in the real world, with real money on the line, in a real
                contracting business.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-10 border-l-4 border-[#3A9E6A] pl-6">
              <p className="text-xl font-medium italic leading-relaxed text-[#1a1a1a]">
                &ldquo;Most marketing agencies will tell you what should work. I can tell you what
                actually works. I used it to build a $10M+ company from my garage. Every
                strategy we deploy at Sequoia GEO has been battle-tested over 13 years.&rdquo;
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
            Ready to put 13 years of proven strategy to work for your business?
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
