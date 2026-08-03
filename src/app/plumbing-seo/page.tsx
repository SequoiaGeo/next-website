import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import InlineLeadForm from "@/components/InlineLeadForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing SEO by an Operator, Not an Account Manager",
  description:
    "13 years running a home services company. I found one plumber spending $7,783 a month on leads that returned $475. SEO managed to booked jobs.",
  alternates: {
    canonical: "https://www.sequoiageo.com/plumbing-seo",
  },
};

const faqs = [
  {
    question: "How long does plumbing SEO take to produce results?",
    answer:
      "It depends on your market and your starting point, and anyone who promises a specific date is guessing. Technical fixes and Google Business Profile work tend to move first. Content and authority building take longer, and a competitive metro takes longer than a small market. What I commit to instead is measurement from the start: every month you see phone calls and booked jobs from organic search, so you know whether the program is working well before the rankings chart looks impressive.",
  },
  {
    question: "Should I invest in SEO or paid advertising for my plumbing company?",
    answer:
      "Both, in the right proportion. Paid advertising produces phone calls now and stops the day you stop spending. SEO compounds and keeps lowering your cost per lead as rankings build. The structure that works runs paid to capture emergency demand while organic authority builds, then shifts budget off the keywords you rank for and into new service areas or higher margin work. Before you commit budget anywhere, know what a lead should cost in your trade and market.",
  },
  {
    question: "How do I evaluate whether my current plumbing SEO is working?",
    answer:
      "Count phone calls and booked jobs from organic search. Not rankings, not impressions, not traffic. The plumbing company I audited was spending $7,783 a month on Angi leads that returned $475 in booked revenue, and the owner received a marketing report every month. The reports looked fine. Nobody had connected spend to jobs. If your provider cannot draw a straight line from their invoice to your dispatch board, that is the finding.",
  },
  {
    question: "What is the difference between plumbing SEO and general SEO?",
    answer:
      "Plumbing SEO is local by definition. You cannot dispatch a truck across the state, so every ranking that matters is local: the Map Pack, your Google Business Profile, and the service pages that show up when someone in your area is searching with water on the floor. A firm that manages national brands is optimizing a different game. The proposal may look the same. The work is not.",
  },
  {
    question: "What keywords should a plumbing company target?",
    answer:
      "Four categories: emergency queries like burst pipe repair near me, job type queries like water heater installation or sewer line replacement, location queries like plumber plus your city or neighborhood, and problem queries like low water pressure in house. Each category carries different intent and different ticket values, so each deserves its own pages. A single page that chases all of them ranks for none of them.",
  },
  {
    question: "What does plumbing SEO cost with Sequoia GEO?",
    answer:
      "Engagements start at $2,500 a month with a 3 month initial term, then month to month. Ad spend is separate and stays yours: Google bills you directly, and nothing is marked up or routed through me. You own your domain, your analytics, your ad accounts, and every page we build.",
  },
  {
    question: "Do you replace my current SEO company or work with them?",
    answer:
      "Either. Sometimes the audit shows your current provider is doing real work and the problem is measurement, so we build the tracking and hold the numbers up monthly. Sometimes the work is not there, and we handle a clean transition where you keep everything you paid for. Either way, you get an honest read before anything changes.",
  },
  {
    question: "Are Local Services Ads worth it for plumbers?",
    answer:
      "Usually, as one measured channel among several. LSA charges per lead rather than per click, Google bills you directly, and real charged prices vary widely by trade and market. One Florida plumbing account I manage took 5 charged phone leads across June and July 2026. Treat it like any lead seller: track what each charged lead books, dispute what deserves disputing, and compare it against what your organic calls cost you.",
  },
  {
    question: "Does plumbing SEO still matter now that AI tools answer questions?",
    answer:
      "Yes, because AI assistants recommend plumbers based on the same signals Google reads: reviews, service pages, and consistent listings. The work overlaps heavily, and ranking well organically is the entry fee to being recommended. That is why AI search visibility is built into every engagement instead of sold as a separate product.",
  },
];

export default function PlumbingSeoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "Plumbing SEO", url: "https://www.sequoiageo.com/plumbing-seo" },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-white px-5 py-2 text-sm font-medium text-[#1A5C3A] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
              Plumbing Marketing
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Plumbing Marketing That Looks at{" "}
              <span className="text-[#1A5C3A]">the Full Revenue Picture</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Your agency sees leads. I see why $7,783 a month in Angi leads returned $475 in
              booked revenue. I held California&rsquo;s C-36 Plumbing license while running my own company.
              I know your business from the inside. Want to be the plumber{" "}
              <Link href="/geo-for-plumbers" className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]">
                AI tools recommend
              </Link>{" "}
              too? That is GEO.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Get Your Free Audit
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a href="tel:5595213122" className="text-base font-medium text-[#1A5C3A] hover:text-[#0D2318] transition-colors">
                (559) 521-3122
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The real problem */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-12">
              What I Actually Found at a Plumbing Company Last Year
            </h2>
            <div className="space-y-5">
              {[
                {
                  finding: "$7,783 a month on Angi leads",
                  result:
                    "It returned $475 in booked revenue. The vendor managing it never connected lead spend to jobs booked, and the monthly reports never surfaced it.",
                },
                {
                  finding: "131 of 4,009 tracked calls were new customers",
                  result:
                    "Nobody was separating new callers from repeat callers, so every channel looked busier than it was. Marketing was being graded on call volume instead of new business.",
                },
                {
                  finding: "The sitemap redirected to a staging server",
                  result:
                    "Google was being sent to a test environment every time it tried to crawl the site. The SEO company billing monthly never caught it. It surfaced in the first pass of our audit.",
                },
              ].map((item) => (
                <div key={item.finding} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="font-bold text-[#3A9E6A]">{item.finding}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#C8EDD2]/70">{item.result}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-[#C8EDD2]/50">
              None of this required special tools. It required someone who knows what to look for
              because they&rsquo;ve lived it from the other side of the dispatch board.
            </p>
          </div>
        </div>
      </section>

      {/* Budget resources */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-3xl">
              Know the Numbers Before You Buy Anything
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Angi was not the problem at that company. Running it for months with nobody checking
              what came back was the problem. Lead sellers, ads, and SEO are all channels, and
              channels get measured. These two breakdowns are built from accounts I manage, not
              from industry averages.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
              <h3 className="text-base font-bold text-[#1a1a1a]">
                How Much Should Plumbers Spend on Marketing?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                What I actually spent as an operator, and how to set a budget from your revenue
                instead of a vendor&rsquo;s pitch deck.
              </p>
              <Link
                href="/how-much-should-plumbers-spend-on-marketing"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
              >
                Read the breakdown
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
              <h3 className="text-base font-bold text-[#1a1a1a]">
                How Much Do HVAC and Plumbing Leads Cost?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Real charged lead prices from Local Services Ads and Google Ads accounts I manage,
                broken out by trade and market. One Florida plumber&rsquo;s account logged 5 charged
                phone leads across June and July 2026.
              </p>
              <Link
                href="/how-much-do-hvac-plumbing-leads-cost"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
              >
                See real lead costs
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case study proof strip */}
      <section className="bg-white pb-4">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#fafaf8] p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1A5C3A] mb-3">
              Proof, Not Promises
            </p>
            <p className="text-lg font-bold text-[#1a1a1a]">
              An independent plumber holding a 5.0 across 154 Google reviews
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Owner-operated, up against the consolidated brands. A managed profile, a rebuilt
              website carrying his real service area, and 116 documented profile calls in six
              months. Real numbers, published with his permission.
            </p>
            <Link
              href="/case-studies/kabam-plumbing"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
            >
              Read the case study
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
                  I Ran a Licensed Plumbing Company
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I held California&rsquo;s C-36 Plumbing license as an operator. I understand your jobs,
                  your pricing, your technicians, and your customers. When I look at your marketing,
                  I&rsquo;m not guessing at what matters.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I ran a company that did plumbing alongside HVAC for over a decade and managed
                  annual ad spend in the low seven figures against $17M in revenue, which works out
                  to the 6 to 10 percent of revenue band. I know what a drain clear pays and what a
                  repipe pays, and which keywords carry margin instead of price shoppers.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "$17M", label: "Annual revenue at exit" },
                  { stat: "13 yrs", label: "Home services operator" },
                  { stat: "4x", label: "Inc 5000 (2020-2023)" },
                  { stat: "130+", label: "Employees at peak" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-[#C8EDD2] p-5 text-center">
                    <div className="text-2xl font-extrabold text-[#0D2318]">{item.stat}</div>
                    <div className="mt-1 text-xs text-[#1A5C3A]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Plumbing SEO Services, End to End
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              One program. Every channel connected to booked jobs, not lead counts.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Google Business Profile and the Map Pack",
                body: "For most plumbing companies the profile drives more calls than the website. I manage categories, service areas, photos from completed jobs, and a review request flow wired into dispatch, because review recency moves rankings and a stale profile stalls them. This is where emergency searches are won or lost.",
              },
              {
                title: "Service Pages Built Around Your Job Mix",
                body: "A dedicated page for each job type and each city you serve: water heaters, drain cleaning, sewer lines, repipes, leak detection. Written around how homeowners search when something is broken, with the phone number where a panicked caller can find it. A generic page that chases every keyword ranks for nothing, and most plumbing sites are one generic page.",
              },
              {
                title: "Technical Health and Indexation",
                body: "Sitemap errors, pages excluded from the index, slow mobile loads, broken internal links. This is the least visible work and often the fastest payoff, because Google cannot rank pages it cannot crawl. The staging server redirect above is exactly the class of failure this catches, and it had been sitting there while an SEO invoice went out every month.",
              },
              {
                title: "Authority, Reviews, and Accountability",
                body: "Links from real local sources and trade directories. Review velocity managed as an operational process, not a request someone remembers on Fridays. And call tracking that separates organic from paid and new customers from repeat callers, so your monthly report shows booked jobs instead of a rankings screenshot. If a channel cannot prove its keep, we cut it.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-[#1A5C3A] mb-4">
              Also Under Management
            </p>
            <div className="mx-auto max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Google Ads for emergency and scheduled plumbing",
                "Local Services Ads management",
                "Review generation tied to job completion",
                "Website conversion optimization",
                "Lead source ROI tracking across Angi, HomeAdvisor, and the rest",
                "AI search visibility (ChatGPT, Perplexity)",
                "Call tracking and booking rate analysis",
                "CSR phone handling audits",
                "Vendor accountability for existing agencies",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it starts */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              How an Engagement Starts
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                number: "01",
                title: "The Full Picture Audit",
                body: "Rankings, ads, lead sellers, call handling, and the booking path, each connected to booked jobs. You get findings like the ones at the top of this page, for your own company, before you commit to anything.",
              },
              {
                number: "02",
                title: "Fix Order by Payoff",
                body: "Tracking and technical problems get fixed first, because everything else is guesswork until Google can crawl the site and calls are being measured. Then the profile, the service pages, and authority building, in that order.",
              },
              {
                number: "03",
                title: "A Report Built on Booked Jobs",
                body: "Every month: calls by channel, new customers versus repeat callers, and what got booked. If you can read a dispatch board, you can read my report.",
              },
            ].map((item) => (
              <div key={item.number} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <div className="mb-3 text-3xl font-extrabold text-[#3A9E6A]/60">{item.number}</div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C8EDD2]/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patterns */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Separates Plumbing Companies That Rank from Ones That Don&rsquo;t
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The same patterns show up in every plumbing audit I run.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                number: "01",
                title: "Location Pages, Not One Service Area Page",
                body: "A company serving multiple cities needs a dedicated page for each one, built around that market and its searches. Almost everyone has a single thin service area page instead. Thin pages do not rank, and no amount of link building fixes a page with nothing on it.",
              },
              {
                number: "02",
                title: "Review Velocity, Not Review Count",
                body: "Google weights recency heavily. A steady flow of fresh reviews beats a larger but stale total, which is why the request has to fire as part of closing out the job. Companies that treat reviews as a monthly campaign lose to companies that treat them as part of the work order.",
              },
              {
                number: "03",
                title: "Identical Listings Everywhere",
                body: "Your name, address, and phone number have to match across every directory and data aggregator. Mismatches make Google less certain about your business, and less certainty means a lower Map Pack position. Most companies carry years of old addresses and tracking numbers they never cleaned up. One thorough pass fixes it.",
              },
              {
                number: "04",
                title: "Attribution Before Optimization",
                body: "Tracking gets built first: analytics, Search Console, and call tracking that isolates organic calls from paid ones and new customers from repeat callers. The 131 out of 4,009 finding above existed because nobody had built this. You cannot manage what nobody is measuring.",
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-6 rounded-2xl border border-gray-200 bg-white p-7">
                <div className="shrink-0 text-3xl font-extrabold text-[#3A9E6A]/40">{item.number}</div>
                <div>
                  <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LSA migration note */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#fafaf8] p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1A5C3A] mb-3">
              If You Run Local Services Ads
            </p>
            <p className="text-sm leading-relaxed text-gray-600">
              Google begins folding LSA into Google Ads as a Performance Max pay-per-lead campaign
              type in August 2026, phased in for select US home services advertisers. Lead history
              migrates. Cost history does not, and the old LSA dashboard closes once an account
              moves. We completed full charged-lead exports for three client accounts in July 2026,
              before any migration notices landed. If nobody is archiving your numbers, they are
              gone.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Plumbing SEO FAQ
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-gray-200 bg-white p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
              More Home Services Marketing
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Plumbing SEO is one piece of a full digital marketing strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Local Services Ads", href: "/lsa-management" },
              { label: "HVAC SEO", href: "/hvac-seo" },
              { label: "Roofing SEO", href: "/roofing-seo" },
              { label: "Fractional CMO", href: "/fractional-cmo" },
              { label: "Best Plumbing SEO Keywords", href: "/blog/best-plumbing-seo-keywords" },
              { label: "Leaving Your Agency?", href: "/leaving-my-marketing-agency" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-[#1A5C3A] shadow-sm hover:border-[#3A9E6A]/40 hover:shadow-md transition"
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

      {/* Switching agencies callout */}
      <section className="bg-[#fafaf8] border-y border-gray-200 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#1A5C3A] mb-1">Already with an agency?</p>
            <p className="text-base text-gray-700">
              If your current plumbing SEO company isn&rsquo;t producing, we can audit what you own and what a clean
              transition looks like before you commit to anything new.
            </p>
          </div>
          <Link href="/leaving-my-marketing-agency" className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-[#1A5C3A] px-6 py-3 text-sm font-semibold text-[#1A5C3A] hover:bg-[#1A5C3A] hover:text-white transition-colors">
            Thinking about switching?
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Find out what your plumbing marketing is actually producing
          </h2>
          <p className="mt-4 text-lg text-[#C8EDD2]/80">
            The Full Picture Audit looks at your rankings, your ads, your lead sellers, and your
            booking path, and connects each one to booked jobs. You&rsquo;ll know exactly where your
            revenue is leaking before we spend a dollar on anything new.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]">
              Get Your Free Audit
            </Link>
            <a href="tel:5595213122" className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors">(559) 521-3122</a>
          </div>
        </div>
      </section>

      {/* On-page capture: request the audit without leaving the page */}
      <InlineLeadForm
        source="plumbing_seo_page"
        heading="Get your free plumbing marketing audit"
        subtext="Tell us where to send it. We review your rankings, your ads, and your booking path before the call. No pitch deck."
      />
    </>
  );
}
