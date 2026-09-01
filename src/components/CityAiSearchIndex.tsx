import Link from "next/link";
import { aiSearchCities } from "@/lib/ai-search-cities";

export default function CityAiSearchIndex() {
  return (
    <section id="markets" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1A5C3A]">
            AI SEO by market
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            Five city hubs built around verifiable local questions
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Sequoia is based in Fresno and works with companies nationally. These pages do not
            manufacture local offices. They show how the same evidence standard changes when the
            business identity, service area, credentials, and official sources change by market.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {aiSearchCities.map((city) => (
            <Link
              key={city.slug}
              href={`/geo-agency/${city.slug}`}
              className="group rounded-2xl border border-[#1A5C3A]/15 bg-[#fafaf8] p-6 transition hover:-translate-y-1 hover:border-[#1A5C3A]/40 hover:shadow-lg"
            >
              <p className="text-sm font-bold text-[#1A5C3A]">{city.stateAbbr}</p>
              <h3 className="mt-2 text-xl font-extrabold text-[#0D2318] group-hover:text-[#1A5C3A]">
                {city.city}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{city.indexDescription}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-[#1A5C3A] underline underline-offset-4">
                View the market method
              </span>
            </Link>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-gray-500">
          These market hubs are the first city layer. A city-and-trade page is created only when
          verified query demand and observed answer behavior justify a separate page.
        </p>
      </div>
    </section>
  );
}
