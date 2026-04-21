import Link from "next/link";
import GHLWidget from "@/components/GHLWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Sequoia GEO",
  description:
    "Real results from Sequoia GEO. See how contractors have grown revenue, improved booking rates, and fixed what their previous agencies missed.",
  alternates: {
    canonical: "https://www.sequoiageo.com/case-studies",
  },
};

const balancedComfortStats = [
  { value: "13 Years", label: "Building Balanced Comfort" },
  { value: "$10M+", label: "Revenue" },
  { value: "4,000+", label: "Reviews" },
  { value: "Acquired", label: "Dec 2024" },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-overline mb-4">Case Studies</p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Real results. Real numbers.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              Not simulated projections or agency-inflated metrics. Here&rsquo;s what the work
              actually produces.
            </p>
          </div>
        </div>
      </section>

      {/* Featured case study */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              {/* Card header */}
              <div className="bg-[#0D2318] px-8 py-10 sm:px-12">
                <span className="inline-block rounded-full bg-[#3A9E6A]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#3A9E6A]">
                  Founder&rsquo;s Story
                </span>
                <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
                  Balanced Comfort Heating &amp; Air
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#C8EDD2]/80">
                  From one truck to $10M+ annual revenue, 4,000+ Google reviews, and a
                  successful acquisition. This is the company Aaron Husak built before starting
                  Sequoia GEO. Every strategy he deploys for clients was tested here first.
                </p>
              </div>

              {/* Stats row */}
              <div className="border-b border-gray-100 bg-[#fafaf8] px-8 py-6 sm:px-12">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {balancedComfortStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl bg-[#C8EDD2] px-4 py-4 text-center"
                    >
                      <div className="text-xl font-extrabold text-[#0D2318]">{item.value}</div>
                      <div className="mt-1 text-xs text-[#1A5C3A] leading-snug">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="px-8 py-6 sm:px-12">
                <Link
                  href="/case-studies/balanced-comfort"
                  className="inline-flex items-center gap-2 text-base font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
                >
                  Read the full story
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
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Client results note */}
            <p className="mt-8 text-sm text-gray-400 text-center">
              Client case studies added as they&rsquo;re completed. Results are anonymized by
              default.
            </p>
          </div>
        </div>
      </section>

      {/* Live audit video */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="section-overline mb-3">See the Work</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Live audit: Daddario Roofing
            </h2>
            <p className="mt-3 text-base text-gray-500 max-w-xl mx-auto">
              A full marketing audit walkthrough â€” GBP, Google Ads, LSA, website, and tracking â€”
              the same process run for every new client.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/XwTojj72fNA?rel=0&modestbranding=1"
              title="Live Marketing Audit: Daddario Roofing"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#1A5C3A] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-2xl font-extrabold text-white sm:text-3xl">
            Want results like these for your company?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
            Every engagement starts with understanding your numbers. Let&rsquo;s find where
            your marketing is leaking revenue.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
      <GHLWidget />
    </>
  );
}
