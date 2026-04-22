import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Industry Statistics 2026 | Market Size, Employment & Consumer Data",
  description:
    "25+ sourced plumbing industry statistics for 2026: market size, employment, labor shortage, average ticket, and how homeowners search for plumbers. Data from IBISWorld, BLS, and more.",
  alternates: {
    canonical: "https://www.sequoiageo.com/plumbing-statistics",
  },
};

export default function PlumbingStatisticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Plumbing Industry Statistics 2026",
            "description": "25+ sourced plumbing industry statistics covering market size, employment, labor shortage, average ticket, and consumer search behavior.",
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
            "mainEntityOfPage": "https://www.sequoiageo.com/plumbing-statistics"
          })
        }}
      />

      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="section-overline mb-4">Research & Data</p>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Plumbing Industry Statistics 2026
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80 max-w-2xl mx-auto">
            25+ sourced statistics on the U.S. plumbing industry: market size, employment, the
            growing labor shortage, average ticket benchmarks, and how homeowners search for
            and select plumbing contractors.
          </p>
          <p className="mt-4 text-sm text-[#C8EDD2]/50">
            Sources: IBISWorld, U.S. Bureau of Labor Statistics, BrightLocal, ServiceTitan, Morning Brew. Last updated April 2026.
          </p>
        </div>
      </section>

      {/* Quick Stats Strip */}
      <section className="bg-[#1A5C3A] py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-medium text-[#C8EDD2]/80">
            {[
              "$121.5B market size",
              "132,000+ businesses",
              "504,500 jobs",
              "550,000 shortage by 2027",
              "6% job growth projected",
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
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">Plumbing Market Size and Growth</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">The scale of the U.S. plumbing industry and where it is headed.</p>
          <ol className="space-y-6">
            {[
              {
                n: 1,
                stat: "The U.S. plumbing contractor market is valued at $121.5 billion (IBISWorld), with industry-wide revenue projected to reach $191.4 billion in 2026.",
                source: "IBISWorld, Plumbers in the US; RevenueMemo, Plumbing Industry Statistics for 2026",
              },
              {
                n: 2,
                stat: "The plumbing industry has grown at a 3.1% CAGR over the past five years, outpacing general economic growth.",
                source: "RevenueMemo, Plumbing Industry Statistics for 2026",
              },
              {
                n: 3,
                stat: "Nonresidential (commercial) work accounts for just over two-thirds of plumbing industry revenue — though residential is where the majority of small plumbing contractors compete.",
                source: "IBISWorld, cited in ServiceTitan Plumbing Industry Statistics",
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

      {/* Employment & Shortage */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">Plumbing Workforce and Labor Shortage</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">The labor shortage is the defining business challenge in plumbing right now. Here is the data behind it.</p>
          <ol className="space-y-6" start={4}>
            {[
              {
                n: 4,
                stat: "More than 132,000 plumbing businesses employ approximately 736,000 people across the United States.",
                source: "Industry aggregate cited in Getjobber and RevenueMemo plumbing statistics, 2025",
              },
              {
                n: 5,
                stat: "Plumbers, pipefitters, and steamfitters held 504,500 jobs in 2024.",
                source: "U.S. Bureau of Labor Statistics, Occupational Outlook Handbook, 2024",
              },
              {
                n: 6,
                stat: "The plumbing job market is expected to grow 6% through 2033, adding approximately 26,300 new jobs — faster than the average for all occupations.",
                source: "U.S. Bureau of Labor Statistics, cited in RevenueMemo and Getjobber, 2024",
              },
              {
                n: 7,
                stat: "The U.S. is projected to face a shortage of 550,000 plumbers by 2027 — creating significant pricing power for established plumbing businesses.",
                source: "Morning Brew / NewsNation, cited in ServiceTitan and Comrade Digital Marketing, 2024",
              },
              {
                n: 8,
                stat: "More than 20% of the current plumbing workforce is aged 55 or older — a retirement wave is imminent, which will intensify the shortage.",
                source: "2023 Current Population Survey, cited in Getjobber Plumbing Industry Statistics",
              },
              {
                n: 9,
                stat: "The skilled worker shortage across trades costs the U.S. economy $33 billion annually in lost productivity.",
                source: "Morning Brew, cited in ServiceTitan Plumbing Statistics, 2024",
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

      {/* Average Ticket */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">Plumbing Average Ticket and Revenue Benchmarks</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">What top-performing plumbing companies charge and how they structure pricing.</p>
          <ol className="space-y-6" start={10}>
            {[
              {
                n: 10,
                stat: "The average residential plumbing service call generates approximately $275 in revenue, with emergency calls averaging $450.",
                source: "Industry benchmarks cited in SkipCalls and Contractor In Charge, 2024",
              },
              {
                n: 11,
                stat: "The most financially successful residential plumbing companies maintain average tickets between $300 and $500; commercial operations average $800 to $1,500 per call.",
                source: "Financial Models Lab and Brentwood Growth, KPI benchmarks, 2024",
              },
              {
                n: 12,
                stat: "After-hours burst pipe emergencies typically start at $450 to $600 minimum and can reach $2,000+ for complex repairs.",
                source: "SkipCalls, Contractor In Charge, industry benchmark data, 2024",
              },
              {
                n: 13,
                stat: "Offering financing on plumbing jobs can increase revenue by more than 17%.",
                source: "ServiceTitan, Plumbing Industry Statistics, 2024",
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

      {/* Consumer Search Behavior */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">How Homeowners Search for Plumbers</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">Search and decision-making behavior that determines who gets the call when a pipe bursts.</p>
          <ol className="space-y-6" start={14}>
            {[
              {
                n: 14,
                stat: "84% of consumers searching for a plumber use Google as their first source.",
                source: "SEO Sandwitch, Plumber Marketing Statistics, 2025",
              },
              {
                n: 15,
                stat: '"Plumber near me" receives approximately 180,000 monthly searches in the U.S. alone.',
                source: "Google Keyword data, cited in SEO Sandwitch, 2025",
              },
              {
                n: 16,
                stat: "83% of plumbing service searches are local intent — consumers are seeking an immediate, location-based solution, not a national brand.",
                source: "SEO Sandwitch / Comrade Digital, 2025",
              },
              {
                n: 17,
                stat: "68% of consumers say positive reviews swayed their decision to hire a plumber; 40% say negative reviews actively deterred them from calling.",
                source: "Andy Beal, cited in ServiceTitan Plumbing Statistics, 2024",
              },
              {
                n: 18,
                stat: "27% of calls to home services businesses go unanswered — and 95% of callers who reach voicemail immediately call a competitor instead of leaving a message.",
                source: "Invoca (unanswered call data); Suzee AI (voicemail behavior), 2024",
              },
              {
                n: 19,
                stat: "75% of consumers will not leave a voicemail, and 90% rate an immediate response as critically important when contacting a plumber.",
                source: "Industry consumer behavior research, NextPhone and Contractor In Charge, 2024",
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
          <h2 className="text-xl font-extrabold text-[#1a1a1a] mb-6">Related: Plumbing Marketing Resources</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Plumbing SEO Services", href: "/plumbing-seo" },
              { label: "Local Services Ads", href: "/lsa-management" },
              { label: "LSA Statistics 2026", href: "/local-services-ads-statistics" },
              { label: "HVAC Statistics", href: "/hvac-statistics" },
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
            Want to know what these numbers mean for your plumbing business?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
            We run a free audit of your current marketing before the first call. No proposals until we both understand what the real problem is.
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
