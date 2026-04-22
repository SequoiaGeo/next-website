import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Local Services Ads Statistics 2026 | LSA Cost, Conversion & Benchmarks",
  description:
    "22+ sourced Google Local Services Ads statistics for 2026: cost per lead by trade, booking rates, dispute rates, response time impact, and contractor adoption. Data from Blue Grid Media, The Media Captain, and more.",
  alternates: {
    canonical: "https://www.sequoiageo.com/local-services-ads-statistics",
  },
};

export default function LsaStatisticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Google Local Services Ads Statistics 2026",
            "description": "22+ sourced LSA statistics covering cost per lead by trade, booking rates, dispute rates, response time impact, and contractor adoption rates.",
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
            "mainEntityOfPage": "https://www.sequoiageo.com/local-services-ads-statistics"
          })
        }}
      />

      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="section-overline mb-4">Research & Data</p>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Google Local Services Ads Statistics 2026
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80 max-w-2xl mx-auto">
            22+ sourced statistics on Google LSA performance: cost per lead by trade, booking
            rates vs. other platforms, dispute recovery rates, the impact of response time,
            and contractor adoption trends.
          </p>
          <p className="mt-4 text-sm text-[#C8EDD2]/50">
            Sources: Blue Grid Media, The Media Captain, Coalmarch, MarketingCode.com. Last updated April 2026.
          </p>
        </div>
      </section>

      {/* Quick Stats Strip */}
      <section className="bg-[#1A5C3A] py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-medium text-[#C8EDD2]/80">
            {[
              "31% average booking rate",
              "$168 avg cost per booked job",
              "45% of leads unbookable",
              "4x average ROAS",
              "70%+ contractor adoption",
            ].map((s) => (
              <span key={s} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3A9E6A]" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion vs Other Platforms */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">LSA Conversion Rates vs. Other Lead Platforms</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">How Google Local Services Ads compare to Angi, Thumbtack, and standard Google Ads on booking rate and cost per job.</p>
          <ol className="space-y-6">
            {[
              {
                n: 1,
                stat: "LSA leads convert to booked jobs at an average rate of 31% on answered calls. Top-performing contractors hit 40%+.",
                source: "Blue Grid Media, 50 Google LSA Statistics 2026",
              },
              {
                n: 2,
                stat: "LSA's 31% booking rate compares to 18% on Thumbtack and 12% on Angi — making Google LSA the highest-converting paid lead platform for home services.",
                source: "Blue Grid Media, LSA vs. HomeAdvisor comparison, 2025/2026",
              },
              {
                n: 3,
                stat: "The average cost per booked job via LSA is $168, compared to $250 on Thumbtack and $542 on Angi.",
                source: "Blue Grid Media, 50 LSA Statistics 2026",
              },
              {
                n: 4,
                stat: "29% of consumers prefer clicking LSA ads over other search results. Only 11% prefer traditional Google Search Ads.",
                source: "The Media Captain, Google Local Service Ad Statistics, 2024/2025",
              },
              {
                n: 5,
                stat: "Consumer preference by result type: Google Maps (41%), Local Services Ads (28%), organic results, then traditional PPC ads last.",
                source: "The Media Captain, Google Local Service Ad Statistics",
              },
              {
                n: 6,
                stat: "The average ROAS (Return on Ad Spend) for optimized LSA accounts is approximately 4x.",
                source: "Blue Grid Media, 50 LSA Statistics 2026",
              },
              {
                n: 7,
                stat: "70% to 80% of all LSA phone calls go to the top 3 LSA positions — making top-3 ranking the single most important factor in LSA performance.",
                source: "Blue Grid Media, 2025/2026",
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

      {/* Cost Per Lead by Industry */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">LSA Cost Per Lead by Trade (2026)</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">Lead cost varies significantly by industry, market, and account quality. These are current 2026 benchmarks.</p>

          {/* Cost table */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 mb-12">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#0D2318]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Trade</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C8EDD2]">Cost Per Lead Range</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C8EDD2]">Average</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  { trade: "Water Damage / Restoration", range: "$80–$180", avg: "~$130" },
                  { trade: "HVAC", range: "$45–$110", avg: "~$80" },
                  { trade: "Roofing", range: "$60–$130", avg: "~$95" },
                  { trade: "Plumbing", range: "$35–$85", avg: "~$69" },
                  { trade: "Electrical", range: "$30–$70", avg: "~$50" },
                  { trade: "Landscaping", range: "$20–$55", avg: "~$37" },
                  { trade: "House Cleaning", range: "$12–$30", avg: "~$21" },
                ].map((row) => (
                  <tr key={row.trade} className="hover:bg-[#fafaf8]">
                    <td className="px-6 py-4 text-sm font-semibold text-[#1a1a1a]">{row.trade}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.range}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#1A5C3A]">{row.avg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 -mt-8 mb-10">Source: Blue Grid Media, 50 LSA Statistics 2026; The Media Captain LSA Cost Per Lead Data, based on 100+ client accounts.</p>

          <ol className="space-y-6" start={8}>
            {[
              {
                n: 8,
                stat: "Response time dramatically affects LSA booking rate: contractors responding within 1 hour book 31% of leads; 1–4 hour response books 27%; 24+ hour response books only 15%.",
                source: "Blue Grid Media, 50 LSA Statistics 2026",
              },
              {
                n: 9,
                stat: "During heat waves and cold snaps, HVAC contractors on LSA receive 3x to 4x more leads than baseline — the platform amplifies seasonal demand surges.",
                source: "Blue Grid Media, HVAC LSA Cost Per Lead benchmarks, 2026",
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

      {/* Dispute & Credit Rates */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">LSA Lead Quality, Dispute Rates, and Credit Recovery</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">The data on what percentage of LSA leads are actually worth paying for — and how much you can recover through disputes.</p>
          <ol className="space-y-6" start={10}>
            {[
              {
                n: 10,
                stat: "Approximately 45% of all LSA leads are unbookable — spam calls, wrong numbers, out-of-area calls, or duplicates that still trigger a charge without active dispute management.",
                source: "Blue Grid Media, 50 LSA Statistics 2026",
              },
              {
                n: 11,
                stat: "Contractors who dispute leads promptly (within 30 days), provide accurate call notes, and select the correct dispute reason recover credits on 45% to 60% of properly documented disputes.",
                source: "Blue Grid Media, 2025/2026",
              },
              {
                n: 12,
                stat: "Businesses typically recover 6–7% of their total LSA spend back in credits for unqualified leads — without active dispute management, that money is permanently lost.",
                source: "The Media Captain, Google LSA Statistics, based on 100+ client account analysis",
              },
              {
                n: 13,
                stat: "Businesses that maintain a dispute rate below 10% and a credit rate below 5% have leads being counted fairly — meaning their stated cost per lead reflects real cost per lead.",
                source: "Blue Grid Media, How Much Does Google LSA Cost, 2026",
              },
              {
                n: 14,
                stat: "A fully optimized LSA profile generates 28% more leads at 15% lower cost per lead versus an incomplete or unoptimized profile.",
                source: "Blue Grid Media, 50 LSA Statistics 2026",
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

      {/* Contractor Adoption & Platform Facts */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">LSA Adoption and Platform Facts</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">How widespread LSA has become and what that means for contractors still on the sidelines.</p>
          <ol className="space-y-6" start={15}>
            {[
              {
                n: 15,
                stat: "LSA contractor adoption surged from approximately 28% of contractors in 2022 to an estimated 70% by late 2025. Rapid adoption has driven up lead costs and increased competition on the platform.",
                source: "MarketingCode.com, 2025/2026",
              },
              {
                n: 16,
                stat: "LSA is available across all 50 U.S. states and covers more than 70 home service categories.",
                source: "Blue Grid Media, 50 LSA Statistics 2026",
              },
              {
                n: 17,
                stat: "LSA ads appear above both Google Search Ads and all organic results — giving verified contractors the highest-visibility position on the search results page.",
                source: "Blue Grid Media, industry consensus, 2025/2026",
              },
              {
                n: 18,
                stat: "More than 90% of LSA leads arrive via phone call rather than form submission.",
                source: "The Media Captain, based on 100+ client account analysis",
              },
              {
                n: 19,
                stat: "Clients running both LSA and traditional PPC allocate their budgets approximately 60% to LSA and 40% to PPC — reflecting LSA's stronger ROI per dollar spent.",
                source: "The Media Captain, Google LSA Statistics",
              },
              {
                n: 20,
                stat: "Google replaced the Google Guaranteed and Google Screened badges with a unified \"Google Verified\" badge in October 2025. The money-back guarantee was discontinued effective November 7, 2025.",
                source: "Google / Coalmarch Marketing, LSA Updates 2025",
              },
              {
                n: 21,
                stat: "All LSA providers must still pass a background check to display the Google Verified badge — this verification requirement remains the core trust signal for consumers even without the guarantee.",
                source: "Blue Grid Media, Google Guaranteed for Contractors Guide, 2026",
              },
              {
                n: 22,
                stat: "Clients running both LSA and traditional Google Ads generate 23% more total lead volume than clients running either channel alone.",
                source: "Blue Grid Media, 50 LSA Statistics 2026",
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
          <h2 className="text-xl font-extrabold text-[#1a1a1a] mb-6">Related: LSA and Local Marketing Resources</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "LSA Management Services", href: "/lsa-management" },
              { label: "Free 11-Page LSA Guide", href: "/lsa-guide" },
              { label: "HVAC SEO Services", href: "/hvac-seo" },
              { label: "Plumbing SEO Services", href: "/plumbing-seo" },
              { label: "HVAC Statistics", href: "/hvac-statistics" },
              { label: "Plumbing Statistics", href: "/plumbing-statistics" },
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
            Running LSA without active dispute management?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
            Most contractors pay for 45% of leads they never should have been charged for. We audit your LSA account before the first call — no pitch, just numbers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]"
            >
              Book a Free LSA Audit
            </Link>
            <Link
              href="/lsa-guide"
              className="inline-flex items-center justify-center rounded-lg border border-[#C8EDD2]/40 px-8 py-4 text-base font-semibold text-white transition hover:border-white"
            >
              Download the LSA Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
