import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "26 HVAC Industry Statistics for 2026 (Verified Sources)",
  description:
    "26 HVAC industry statistics for 2026, with sources: market size, employment, average ticket, seasonal demand, heat pump adoption, and how homeowners find contractors.",
  alternates: {
    canonical: "https://www.sequoiageo.com/hvac-statistics",
  },
};

export default function HvacStatisticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "HVAC Industry Statistics 2026",
            "description": "26 sourced HVAC industry statistics covering market size, employment, average ticket, seasonal demand, and consumer behavior.",
            "author": {
              "@type": "Organization",
              "name": "Sequoia GEO"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Sequoia GEO",
              "url": "https://www.sequoiageo.com"
            },
            "dateModified": "2026-07-18",
            "mainEntityOfPage": "https://www.sequoiageo.com/hvac-statistics"
          })
        }}
      />

      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="section-overline mb-4">Research & Data</p>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            HVAC Industry Statistics 2026
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80 max-w-2xl mx-auto">
            26 sourced statistics on the U.S. HVAC market: industry size, employment, average ticket,
            seasonal demand patterns, heat pump adoption, and how homeowners actually find contractors.
          </p>
          <p className="mt-4 text-sm text-[#C8EDD2]/50">
            Sources: IBISWorld, U.S. Bureau of Labor Statistics, U.S. Census Bureau, NAHB, RMI, ServiceTitan. Last updated July 2026.
          </p>
        </div>
      </section>

      {/* Key stats summary */}
      <section className="bg-[#1A5C3A] py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-white mb-6">Key HVAC Industry Statistics</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-sm leading-relaxed text-[#C8EDD2]/90 list-disc pl-5">
            <li>The U.S. HVAC contractor industry generates $156.2 billion in annual revenue (IBISWorld, 2025).</li>
            <li>117,449 HVAC contractor businesses operate in the U.S. (IBISWorld, 2025).</li>
            <li>The industry employs approximately 604,000 people, including 441,000 working technicians.</li>
            <li>The BLS projects 8% job growth for HVAC technicians from 2024 to 2034.</li>
            <li>The industry is short an estimated 110,000 technicians (ACHR News, ServiceTitan).</li>
            <li>Heat pumps outsold gas furnaces by 32% in 2024 (RMI).</li>
            <li>84% of consumers search online before contacting an HVAC company.</li>
            <li>Only 30% of homeowners schedule preventative HVAC maintenance annually.</li>
          </ul>
        </div>
      </section>

      {/* Market Size */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">HVAC Market Size and Growth</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">How large is the HVAC industry and where is it heading?</p>
          <ol className="space-y-6">
            {[
              {
                n: 1,
                stat: "The U.S. HVAC contractor industry generates $156.2 billion in annual revenue (2025).",
                source: "IBISWorld, Heating & Air-Conditioning Contractors in the US, 2025",
              },
              {
                n: 2,
                stat: "The HVAC service and repair segment alone is valued at $28.2 billion, growing at a 5.9% CAGR through 2031.",
                source: "Mordor Intelligence, United States HVAC Services Market, 2025",
              },
              {
                n: 3,
                stat: "The U.S. residential HVAC market was $15.4 billion in 2024 and is projected to reach $31.4 billion by 2034, a 7.5% CAGR.",
                source: "GM Insights, U.S. Residential HVAC Market, 2024",
              },
              {
                n: 4,
                stat: "There are 117,449 HVAC contractor businesses operating in the U.S. as of 2025.",
                source: "IBISWorld, 2025",
              },
              {
                n: 5,
                stat: "Replacement and retrofit projects represent 62.5% of the U.S. HVAC equipment market, growing faster than new construction at a 7.1% CAGR.",
                source: "Mordor Intelligence, 2024",
              },
              {
                n: 6,
                stat: "98% of new single-family homes started in 2024 had central air conditioning installed, up from 85.5% in 2000.",
                source: "U.S. Census Bureau Survey of Construction, reported by NAHB Eye on Housing, September 2025",
              },
            ].map((item) => (
              <li key={item.n} className="flex gap-5">
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#C8EDD2] text-sm font-black text-[#0D2318]">{item.n}</span>
                <div>
                  <p className="text-base font-semibold text-[#1a1a1a] leading-snug">{item.stat}</p>
                  <p className="mt-1 text-xs text-gray-500">Source: {item.source}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Employment */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">HVAC Industry Employment</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">Workforce size, growth, and the growing technician shortage.</p>
          <ol className="space-y-6" start={7}>
            {[
              {
                n: 7,
                stat: "The HVAC industry employs approximately 604,402 people in the U.S., including 441,000+ working technicians.",
                source: "IBISWorld (2025); U.S. Bureau of Labor Statistics",
              },
              {
                n: 8,
                stat: "The BLS projects 8% job growth for HVAC mechanics and installers from 2024 to 2034, generating approximately 40,100 openings per year, classified as \"much faster than average.\"",
                source: "U.S. Bureau of Labor Statistics, Occupational Outlook Handbook, 2024",
              },
              {
                n: 9,
                stat: "The HVAC industry faces a current shortage of 110,000 technicians, the gap between open positions and qualified workers.",
                source: "ACHR News / ServiceTitan, 2024",
              },
              {
                n: 10,
                stat: "The median wage for HVAC technicians is $28.75 per hour, or $59,810 per year (May 2024).",
                source: "U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2024",
              },
            ].map((item) => (
              <li key={item.n} className="flex gap-5">
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#C8EDD2] text-sm font-black text-[#0D2318]">{item.n}</span>
                <div>
                  <p className="text-base font-semibold text-[#1a1a1a] leading-snug">{item.stat}</p>
                  <p className="mt-1 text-xs text-gray-500">Source: {item.source}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Revenue & Ticket */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">HVAC Average Ticket and Revenue Benchmarks</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">What HVAC companies charge, and what customers are worth over time.</p>
          <ol className="space-y-6" start={11}>
            {[
              {
                n: 11,
                stat: "The average HVAC repair costs a homeowner approximately $351, with a range of $243 to $1,567 depending on complexity.",
                source: "CNN, 2024 (cited in ServiceTitan HVAC Statistics)",
              },
              {
                n: 12,
                stat: "HVAC equipment prices increased approximately 40% since 2020, with manufacturers raising prices 2 to 13% in 2024 alone, driving up average ticket sizes significantly.",
                source: "ACHR News / ServiceTitan, 2024",
              },
              {
                n: 13,
                stat: "Customer lifetime value for an HVAC customer averages $15,340, against a customer acquisition cost of $296 to $350, a 44x+ return on acquisition spend.",
                source: "Leads4Build, citing industry benchmarks, 2024",
              },
              {
                n: 14,
                stat: "Top 10% of HVAC companies generate $280,000 in revenue per technician annually; bottom 25% generate only $80,000 to $120,000 per tech.",
                source: "Built on Tenth / SBE Odyssey, 2024",
              },
            ].map((item) => (
              <li key={item.n} className="flex gap-5">
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#C8EDD2] text-sm font-black text-[#0D2318]">{item.n}</span>
                <div>
                  <p className="text-base font-semibold text-[#1a1a1a] leading-snug">{item.stat}</p>
                  <p className="mt-1 text-xs text-gray-500">Source: {item.source}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Seasonal Demand */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">HVAC Seasonal Demand Patterns</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">
            No industry swings harder by season than HVAC. Here is what the data shows. It is also why our{" "}
            <Link href="/hvac-seo" className="font-medium text-[#1A5C3A] hover:underline">HVAC SEO programs</Link>{" "}
            are built around seasonal demand.
          </p>
          <ol className="space-y-6" start={15}>
            {[
              {
                n: 15,
                stat: "HVAC services show 250% to 600% variance between peak and off-peak months. AC repair search volume surges 266% in July; furnace repair peaks 137% above baseline in January.",
                source: "WebFX, Seasonal Search Shifts in Home Services, 2024",
              },
              {
                n: 16,
                stat: "The real double-peak season for HVAC hits in July (cooling) and October (heating reactivation). October is particularly strong because dormant furnaces that sat all summer are turned on and fail.",
                source: "Samsara, The Real Peak Season for HVAC, 2024",
              },
              {
                n: 17,
                stat: "Only 30% of homeowners schedule preventative HVAC maintenance annually, the other 70% are reactive, emergency-driven customers.",
                source: "DuraPlas, cited in ServiceTitan HVAC Statistics, 2024",
              },
            ].map((item) => (
              <li key={item.n} className="flex gap-5">
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#C8EDD2] text-sm font-black text-[#0D2318]">{item.n}</span>
                <div>
                  <p className="text-base font-semibold text-[#1a1a1a] leading-snug">{item.stat}</p>
                  <p className="mt-1 text-xs text-gray-500">Source: {item.source}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Heat Pump */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">Heat Pump Adoption Statistics</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">The most significant structural shift in the HVAC industry in decades.</p>
          <ol className="space-y-6" start={18}>
            {[
              {
                n: 18,
                stat: "In 2024, manufacturers shipped 4.1 million heat pump units versus 3.1 million gas furnaces, heat pumps outsold gas furnaces by 32%.",
                source: "Rocky Mountain Institute (RMI), 2024",
              },
              {
                n: 19,
                stat: "In the first half of 2025, electric heat pumps outsold gas furnaces by 25%, the trend is accelerating.",
                source: "Rocky Mountain Institute (RMI), 2025",
              },
              {
                n: 20,
                stat: "Heat pump adoption has increased 50% from 2020 levels, yet fewer than 20% of U.S. households currently use a heat pump, significant growth runway remains.",
                source: "U.S. Department of Energy / Canary Media, 2024",
              },
              {
                n: 21,
                stat: "In new residential construction, heat pumps accounted for 47% of primary heating systems in 2024, up from just 23% in 2000. Gas forced air dropped from 71% to 50% in the same period.",
                source: "U.S. Census Bureau Survey of Construction, NAHB Eye on Housing, 2025",
              },
            ].map((item) => (
              <li key={item.n} className="flex gap-5">
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#C8EDD2] text-sm font-black text-[#0D2318]">{item.n}</span>
                <div>
                  <p className="text-base font-semibold text-[#1a1a1a] leading-snug">{item.stat}</p>
                  <p className="mt-1 text-xs text-gray-500">Source: {item.source}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Consumer Behavior */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">How Homeowners Find HVAC Contractors</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">
            The search and decision-making behavior that determines which HVAC company gets the call. This is the data our{" "}
            <Link href="/hvac-marketing" className="font-medium text-[#1A5C3A] hover:underline">HVAC marketing</Link>{" "}
            programs are built on.
          </p>
          <ol className="space-y-6" start={22}>
            {[
              {
                n: 22,
                stat: "84% of consumers contact an HVAC company after first searching online.",
                source: "AMRA & ELMA, Top 20 HVAC Marketing Statistics, 2026",
              },
              {
                n: 23,
                stat: "91% of HVAC consumers rely on online reviews before making a purchase decision; 73.9% say reviews directly influenced their contractor choice.",
                source: "ACHR News / PickHVAC, cited in ServiceTitan, 2024",
              },
              {
                n: 24,
                stat: "83% of consumers rank something other than price as their top priority when selecting an HVAC company.",
                source: "PickHVAC consumer survey, cited in ServiceTitan, 2024",
              },
              {
                n: 25,
                stat: "38% of consumers rank reliability as their single top priority when choosing an HVAC contractor, not price.",
                source: "PickHVAC, cited in ServiceTitan HVAC Statistics, 2024",
              },
              {
                n: 26,
                stat: "34% of consumers are currently delaying HVAC services due to economic strain, representing a significant pool of deferred demand that HVAC marketing can reach.",
                source: "ACHR News, 2024, cited in ServiceTitan HVAC Statistics",
              },
            ].map((item) => (
              <li key={item.n} className="flex gap-5">
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#C8EDD2] text-sm font-black text-[#0D2318]">{item.n}</span>
                <div>
                  <p className="text-base font-semibold text-[#1a1a1a] leading-snug">{item.stat}</p>
                  <p className="mt-1 text-xs text-gray-500">Source: {item.source}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related pages */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-[#1a1a1a] mb-6">Related: HVAC Marketing Resources</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "HVAC SEO Services", href: "/hvac-seo" },
              { label: "HVAC Marketing", href: "/hvac-marketing" },
              { label: "Local Services Ads", href: "/lsa-management" },
              { label: "LSA Statistics 2026", href: "/local-services-ads-statistics" },
              { label: "Plumbing Statistics", href: "/plumbing-statistics" },
              { label: "Fractional CMO", href: "/fractional-cmo" },
              { label: "Free LSA Guide", href: "/lsa-guide" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-[#fafaf8] px-5 py-4 text-sm font-semibold text-[#1A5C3A] shadow-sm hover:border-[#3A9E6A]/40 hover:shadow-md transition"
              >
                {link.label}
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A5C3A] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-2xl font-extrabold text-white sm:text-3xl">
            Want to know what these numbers mean for your HVAC business?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
            We run a free audit of your current marketing before the first call. No proposals until we both understand what the actual problem is.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
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
