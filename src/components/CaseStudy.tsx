import Link from "next/link";

export default function CaseStudy() {
  return (
    <section className="bg-[#fafaf8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            Proven Results
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            See how we&rsquo;ve helped contractors grow
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Left: Visual */}
            <div className="flex flex-col items-center justify-center bg-[#0D2318] p-12 text-white">
              <p className="text-sm font-medium uppercase tracking-widest text-[#3A9E6A]">
                Case Study
              </p>
              <h3 className="mt-4 text-center text-2xl font-bold leading-snug">
                From Solo Technician to $10M+ Operation
              </h3>
              <p className="mt-3 text-center text-sm text-white/70">
                Balanced Comfort &bull; Fresno, CA &bull; Since 2012
              </p>
            </div>

            {/* Right: Details */}
            <div className="p-10">
              <p className="text-base leading-relaxed text-gray-600">
                Starting in 2012 as a solo HVAC technician in Fresno, CA,
                Balanced Comfort partnered with us to build a marketing engine
                that fueled exceptional growth, from one truck to a
                multi-million dollar operation with a dominant local presence.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { stat: "$10M+", label: "Annual Revenue" },
                  { stat: "4,000+", label: "Google Reviews" },
                  { stat: "Inc. 5000", label: "4x Honoree" },
                  { stat: "Dec 2024", label: "Acquired" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-2xl font-extrabold text-[#1A5C3A]">
                      {item.stat}
                    </p>
                    <p className="text-sm text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1A5C3A] transition hover:text-[#0D2318]"
              >
                Read Full Case Study
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Placeholder for more case studies */}
        {/* Add additional <CaseStudyCard /> components here as they become available */}
      </div>
    </section>
  );
}
