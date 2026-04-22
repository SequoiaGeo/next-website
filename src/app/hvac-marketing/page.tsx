import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "./city-data";

export const metadata: Metadata = {
  title: "HVAC Marketing by City | Sequoia GEO",
  description:
    "Sequoia GEO provides HVAC and home services marketing for contractors across the US. Browse city-specific resources for Google Ads, LSA, and local SEO in your market.",
  alternates: {
    canonical: "https://www.sequoiageo.com/hvac-marketing",
  },
};

export default function HvacMarketingIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="section-overline mb-4">Markets We Serve</p>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            HVAC Marketing for{" "}
            <span className="text-[#3A9E6A]">Mid-Size U.S. Markets</span>
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80 max-w-2xl mx-auto">
            We focus on cities between 150,000 and 850,000 people: large enough to support real contractor revenue growth, small enough that national agencies have not saturated the market. These are the markets where local SEO authority and targeted paid media still win.
          </p>
        </div>
      </section>

      {/* City grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-[#1a1a1a] mb-8">Cities with Market-Specific Resources</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/hvac-marketing/${city.slug}`}
                className="group flex flex-col rounded-xl border border-gray-200 bg-[#fafaf8] p-5 hover:border-[#3A9E6A]/40 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-bold text-[#1a1a1a] group-hover:text-[#1A5C3A] transition">{city.city}</p>
                    <p className="text-xs text-gray-400">{city.state}</p>
                  </div>
                  <svg className="h-4 w-4 text-gray-300 group-hover:text-[#3A9E6A] transition" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{city.climate}</p>
                {city.existingClient && (
                  <span className="mt-3 self-start rounded-full bg-[#C8EDD2] px-2 py-0.5 text-xs font-semibold text-[#0D2318]">
                    Active market
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why mid-size markets */}
      <section className="bg-[#fafaf8] py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-[#1a1a1a] mb-6">Why We Focus on These Markets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: "Less agency saturation", desc: "National agencies pour budget into Dallas, Phoenix, and Chicago. Fresno, Spokane, and Wichita are underserved. Local SEO authority is still buildable." },
              { title: "High HVAC demand", desc: "We prioritize markets with extreme climates. Hot summers or cold winters (or both) mean HVAC is not optional. These markets generate the service call volume that supports contractor growth." },
              { title: "Real homeowner base", desc: "Mid-size cities have stable homeownership rates and housing stock old enough to generate consistent replacement demand rather than only new install work." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white border border-gray-200 p-5">
                <h3 className="font-bold text-[#1a1a1a] mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A5C3A] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-2xl font-extrabold text-white">
            Your city not listed?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
            We work with contractors across the US. Book a free audit call and we will tell you honestly what the marketing opportunity looks like in your market.
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
    </>
  );
}
