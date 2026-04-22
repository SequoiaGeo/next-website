import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCityData } from "../city-data";

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const data = getCityData(slug);
  if (!data) return {};
  return {
    title: `HVAC Marketing Agency ${data.city}, ${data.stateAbbr} | Sequoia GEO`,
    description: `Sequoia GEO helps HVAC and home service contractors grow in ${data.city}, ${data.state}. Google Ads, LSA management, and local SEO built for the ${data.city} market. Free audit before the first call.`,
    alternates: {
      canonical: `https://www.sequoiageo.com/hvac-marketing/${slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const data = getCityData(slug);
  if (!data) notFound();

  const services = [
    {
      title: "Google Ads for HVAC",
      desc: `Search, Performance Max, and demand campaigns targeted to ${data.city} homeowners actively looking for HVAC service. Every campaign is built around local intent signals and seasonal demand in the ${data.city} market.`,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7l-.153.103a2.25 2.25 0 01-2.984 0l-1.532-1.532-.03-.085a6 6 0 01-1.497-5.07" />
        </svg>
      ),
    },
    {
      title: "Local Service Ads (LSA)",
      desc: `Google Guaranteed badge management, lead response monitoring, dispute filing, and profile optimization. LSA is one of the highest-converting channels for HVAC contractors in ${data.city} and most agencies run it wrong.`,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
    {
      title: "Local SEO",
      desc: `Building organic search visibility specifically for the ${data.city} market. Service pages, FAQ content, Google Business Profile optimization, and citation building to rank where ${data.city} homeowners are searching.`,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
    },
    {
      title: "Google Business Profile",
      desc: `GBP optimization, photo strategy, review management, and post cadence. Your GBP is the first thing most ${data.city} homeowners see before they ever visit your website. Most HVAC companies leave it incomplete.`,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sequoia GEO",
            "description": `HVAC and home services marketing agency serving contractors in ${data.city}, ${data.state}`,
            "url": `https://www.sequoiageo.com/hvac-marketing/${slug}`,
            "telephone": "+15595213122",
            "email": "aaron@sequoiageo.com",
            "areaServed": { "@type": "City", "name": data.city, "containedInPlace": { "@type": "State", "name": data.state } },
            "founder": { "@type": "Person", "name": "Aaron Husak" },
          })
        }}
      />

      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-overline mb-4">
              {data.city}, {data.stateAbbr}
            </p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              HVAC Marketing Agency in{" "}
              <span className="text-[#3A9E6A]">{data.city}, {data.stateAbbr}</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              Google Ads, Local Service Ads, and local SEO built for HVAC and plumbing contractors in the {data.city} market. Operator-founded. No long-term contracts. Free audit before the first call.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1A5C3A]"
              >
                Get a Free Audit
              </Link>
              <Link
                href="/lsa-guide"
                className="inline-flex items-center justify-center rounded-lg border border-[#3A9E6A]/40 px-7 py-3.5 text-sm font-semibold text-[#C8EDD2] transition hover:border-[#3A9E6A]"
              >
                Free LSA Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key stats strip */}
      <section className="bg-[#1A5C3A] py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {data.keyStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-base font-bold text-white">{stat.value}</p>
                <p className="text-xs text-[#C8EDD2]/60 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market context */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-5">
                The {data.city} HVAC Market
              </h2>
              <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
                <p>{data.climateDetail}</p>
                <p>{data.housingNote}</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="rounded-xl bg-[#F5FAF7] border border-[#C8EDD2] p-6">
                <h3 className="font-bold text-[#0D2318] mb-2">The market opportunity</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{data.marketOpportunity}</p>
              </div>
              <div className="rounded-xl bg-[#fafaf8] border border-gray-200 p-6">
                <h3 className="font-bold text-[#0D2318] mb-2">The agency landscape</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{data.agencyLandscape}</p>
              </div>
              {data.existingClient && (
                <div className="rounded-xl bg-[#0D2318] border border-[#1A5C3A] p-6">
                  <h3 className="font-bold text-[#3A9E6A] mb-2">Our {data.city} experience</h3>
                  <p className="text-sm text-[#C8EDD2]/80 leading-relaxed">{data.existingClient}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">
              What We Do for {data.city} Contractors
            </h2>
            <p className="text-gray-500 text-sm">
              Every service is built for the {data.city} market, not adapted from a national template.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl bg-white border border-gray-200 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#C8EDD2] text-[#1A5C3A] mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sequoia GEO */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-5">
                Why {data.city} HVAC Contractors Choose Sequoia GEO
              </h2>
              <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
                <p>
                  Sequoia GEO was founded by Aaron Husak, who built Balanced Comfort HVAC from a solo operation to $17.2M in annual revenue and four consecutive Inc. 5000 rankings (2020 through 2023). The marketing systems built during that growth period are what Sequoia GEO brings to contractor clients today.
                </p>
                <p>
                  What that means for {data.city} contractors: you are working with someone who has managed real HVAC marketing budgets with real P&L accountability, not a generalist agency that took on HVAC clients because the category is large.
                </p>
                <p>
                  We cap at 10 active clients at a time. That number is deliberate. It is the only way to give every client genuine senior-level attention rather than handing accounts off to junior team members after the onboarding call.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: "No long-term contracts", desc: "30-day trial. Month-to-month after that." },
                { label: "Free audit before the first call", desc: "We review your current setup before we pitch anything." },
                { label: "Operator perspective", desc: "Built on real HVAC business growth, not just ad management." },
                { label: "10-client cap", desc: "Senior-level attention on every account, every week." },
                { label: "Attribution you can verify", desc: "We track from ad click to booked job, not just lead count." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-4 rounded-lg bg-[#F5FAF7] border border-[#C8EDD2]">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] text-sm">{item.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related markets */}
      <section className="bg-[#fafaf8] py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-lg font-extrabold text-[#1a1a1a] mb-5">Other Markets We Serve</h2>
          <div className="flex flex-wrap gap-2">
            {cities
              .filter((c) => c.slug !== slug)
              .slice(0, 8)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/hvac-marketing/${c.slug}`}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-[#3A9E6A]/40 hover:text-[#1A5C3A] transition"
                >
                  {c.city}, {c.stateAbbr}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-2xl font-extrabold text-white sm:text-3xl">
            Ready to talk about your {data.city} marketing?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
            We run a free audit of your current setup before the first call: Google Ads, LSA, organic rankings, booking rates, and what the data is telling you that your current agency is not.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]"
            >
              Book a Free Strategy Call
            </Link>
            <Link
              href="/lsa-guide"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:border-white"
            >
              Read the Free LSA Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
