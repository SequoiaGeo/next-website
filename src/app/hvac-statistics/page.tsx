import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Industry Statistics 2026 | Market Size, Employment & Consumer Data",
  description:
    "30+ sourced HVAC industry statistics for 2026: market size, employment, average ticket, seasonal demand, heat pump adoption, and how homeowners find HVAC contractors. Data from IBISWorld, BLS, and more.",
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
            "description": "30+ sourced HVAC industry statistics covering market size, employment, average ticket, seasonal demand, and consumer behavior.",
            "author": {
              "@type": "Organization",
              "name": "Sequoia GEO"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Sequoia GEO",
              "url": "https://www.sequoiageo.com"
            },
            "dateModified": "2026-04-22",
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
            30+ sourced statistics on the U.S. HVAC market: industry size, employment, average ticket,
            seasonal demand patterns, heat pump adoption, and how homeowners actually find contractors.
          </p>
          <p className="mt-4 text-sm text-[#C8EDD2]/50">
            Sources: IBISWorld, U.S. Bureau of Labor Statistics, NAHB, RMI, BrightLocal, ServiceTitan. Last updated April 2026.
          </p>
        </div>
      </section>

      {/* Quick Stats Strip */}
      <section className="bg-[#1A5C3A] py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-medium text-[#C8EDD2]/80">
            {[
              "$156.2B annual revenue",
              "117,449 businesses",
              "604,400 employees",
              "8% job growth projected",
              "110,000 tech shortage",
            ].map((s) => (
              <span key={s} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3A9E6A]" />
                {s}
              </span>
            ))}
          </div>
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
                stat: "The U.S. residential HVAC market was $15.4 billion in 2024 and is projected to reach $31.4 billion by 2034 — a 7.5% CAGR.",
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
                stat: "An estimated 8 million HVAC units are replaced annually in the U.S., versus 1 to 1.5 million units in new construction — a roughly 6:1 ratio.",
                source: "The Chill Brothers, citing industry estimates",
              },
              {
                n: 7,
                stat: "98% of new single-family homes started in 2024 had central air conditioning installed, up from 85.5% in 2000.",
                source: "U.S. Census Bureau Survey of Construction, reported by NAHB Eye on Housing, September 2025",
              },
            ].map((item) => (
              <li key={item.n} className="flex gap-5">
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#C8EDD2] text-sm font-black text-[#0D2318]">{item.n}</span>
                <div>
                  <p className="text-base font-semibold text-[#1a1a1a] leading-snug">{item.stat}</p>
                  <p className="mt-1 text-xs text-gray-400">Source: {item.source}</p>
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
          <ol className="space-y-6" start={8}>
            {[
              {
                n: 8,
                stat: "The HVAC industry employs approximately 604,402 people in the U.S., including 441,000+ working technicians.",
                source: "IBISWorld (2025); U.S. Bureau of Labor Statistics",
              },
              {
                n: 9,
                stat: "The BLS projects 8% job growth for HVAC mechanics and installers from 2024 to 2034, generating approximately 40,100 openings per year — classified as \"much faster than average.\"",
                source: "U.S. Bureau of Labor Statistics, Occupational Outlook Handbook, 2024",
              },
              {
                n: 10,
                stat: "The HVAC industry faces a current shortage of 110,000 technicians — the gap between open positions and qualified workers.",
                source: "ACHR News / ServiceTitan, 2024",
              },
              {
                n: 11,
                stat: "The median hourly wage for HVAC mechanics was $27.55/hour in 2023, with top earners exceeding $45/hour.",
                source: "U.S. Bureau of Labor Statistics, 2023",
              },
            ].map((item) => (
              <li key={item.n} className="flex gap-5">
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#C8EDD2] text-sm font-black text-[#0D2318]">{item.n}</span>
                <div>
                  <p className="text-base font-semibold text-[#1a1a1a] leading-snug">{item.stat}</p>
                  <p className="mt-1 text-xs text-gray-400">Source: {item.source}</p>
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
          <ol className="space-y-6" start={12}>
            {[
              {
                n: 12,
                stat: "The average HVAC repair costs a homeowner approximately $351, with a range of $243 to $1,567 depending on complexity.",
                source: "CNN, 2024 (cited in ServiceTitan HVAC Statistics)",
              },
              {
                n: 13,
                stat: "HVAC equipment prices increased approximately 40% since 2020, with manufacturers raising prices 2–13% in 2024 alone — driving up average ticket sizes significantly.",
                source: "ACHR News / ServiceTitan, 2024",
              },
              {
                n: 14,
                stat: "Customer lifetime value for an HVAC customer averages $15,340, against a customer acquisition cost of $296–$350 — a 44x+ return on acquisition spend.",
                source: "Leads4Build, citing industry benchmarks, 2024",
              },
              {
                n: 15,
                stat: "Top 10% of HVAC companies generate $280,000 in revenue per technician annually; bottom 25% generate only $80,000 to $120,000 per tech.",
                source: "Built on Tenth / SBE Odyssey, 2024",
              },
            ].map((item) => (
              <li key={item.n} className="flex gap-5">
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#C8EDD2] text-sm font-black text-[#0D2318]">{item.n}</span>
                <div>
                  <p className="text-base font-semibold text-[#1a1a1a] leading-snug">{item.stat}</p>
                  <p className="mt-1 text-xs text-gray-400">Source: {item.source}</p>
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
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">No industry swings harder by season than HVAC. Here is what the data shows.</p>
          <ol className="space-y-6" start={16}>
            {[
              {
                n: 16,
                stat: "HVAC services show 250% to 600% variance between peak and off-peak months. AC repair search volume surges 266% in July; furnace repair peaks 137% above baseline in January.",
                source: "WebFX, Seasonal Search Shifts in Home Services, 2024",
              },
              {
                n: 17,
                stat: "The real double-peak season for HVAC hits in July (cooling) and October (heating reactivation). October is particularly strong because dormant furnaces that sat all summer are turned on and fail.",
                source: "Samsara, The Real Peak Season for HVAC, 2024",
              },
              {
                n: 18,
                stat: "Only 30% of homeowners schedule preventative HVAC maintenance annually — the other 70% are reactive, emergency-driven customers.",
                source: "DuraPlas, cited in ServiceTitan HVAC Statistics, 2024",
              },
            ].map((item) => (
              <li key={item.n} className="flex gap-5">
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#C8EDD2] text-sm font-black text-[#0D2318]">{item.n}</span>
                <div>
                  <p className="text-base font-semibold text-[#1a1a1a] leading-snug">{item.stat}</p>
                  <p className="mt-1 text-xs text-gray-400">Source: {item.source}</p>
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
          <ol className="space-y-6" start={19}>
            {[
              {
                n: 19,
                stat: "In 2024, manufacturers shipped 4.1 million heat pump units versus 3.1 million gas furnaces — heat pumps outsold gas furnaces by 32%.",
                source: "Rocky Mountain Institute (RMI), 2024",
              },
              {
                n: 20,
                stat: "In the first half of 2025, electric heat pumps outsold gas furnaces by 25% — the trend is accelerating.",
                source: "Rocky Mountain Institute (RMI), 2025",
              },
              {
                n: 21,
                stat: "Heat pump adoption has increased 50% from 2020 levels, yet fewer than 20% of U.S. households currently use a heat pump — significant growth runway remains.",
                source: "U.S. Department of Energy / Canary Media, 2024",
              },
              {
                n: 22,
                stat: "In new residential construction, heat pumps accounted for 47% of primary heating systems in 2024, up from just 23% in 2000. Gas forced air dropped from 71% to 50% in the same period.",
                source: "U.S. Census Bureau Survey of Construction, NAHB Eye on Housing, 2025",
              },
            ].map((item) => (
              <li key={item.n} className="flex gap-5">
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#C8EDD2] text-sm font-black text-[#0D2318]">{item.n}</span>
                <div>
                  <p className="text-base font-semibold text-[#1a1a1a] leading-snug">{item.stat}</p>
                  <p className="mt-1 text-xs text-gray-400">Source: {item.source}</p>
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
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">The search and decision-making behavior that determines which HVAC company gets the call.</p>
          <ol className="space-y-6" start={23}>
            {[
              {
                n: 23,
                stat: "84% of consumers contact an HVAC company after first searching online.",
                source: "AMRA & ELMA, Top 20 HVAC Marketing Statistics, 2026",
              },
              {
                n: 24,
                stat: "91% of HVAC consumers rely on online reviews before making a purchase decision; 73.9% say reviews directly influenced their contractor choice.",
                source: "ACHR News / PickHVAC, cited in ServiceTitan, 2024",
              },
              {
                n: 25,
                stat: "83% of consumers rank something other than price as their top priority when selecting an HVAC company.",
                source: "PickHVAC consumer survey, cited in ServiceTitan, 2024",
              },
              {
                n: 26,
                stat: "38% of consumers rank reliability as their single top priority when choosing an HVAC contractor — not price.",
                source: "PickHVAC, cited in ServiceTitan HVAC Statistics, 2024",
              },
              {
                n: 27,
                stat: "34% of consumers are currently delaying HVAC services due to economic strain — representing a significant pool of deferred demand that HVAC marketing can reach.",
                source: "ACHR News, 2024, cited in ServiceTitan HVAC Statistics",
              },
            ].map((item) => (
              <li key={item.n} className="flex gap-5">
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#C8EDD2] text-sm font-black text-[#0D2318]">{item.n}</span>
                <div>
                  <p className="text-base font-semibold text-[#1a1a1a] leading-snug">{item.stat}</p>
                  <p className="mt-1 text-xs text-gray-400">Source: {item.source}</p>
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
