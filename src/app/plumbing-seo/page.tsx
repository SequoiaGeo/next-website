import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import InlineLeadForm from "@/components/InlineLeadForm";
import type { Metadata } from "next";
import ServiceJsonLd from "@/components/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Plumbing SEO Services Managed by a Former Plumbing Operator",
  description:
    "Plumbing SEO for local visibility, attributable calls, and jobs booked. Work directly with Aaron Husak, a former C-36 plumbing contractor.",
  alternates: {
    canonical: "https://www.sequoiageo.com/plumbing-seo",
  },
  openGraph: {
    title: "Plumbing SEO Services Managed by a Former Plumbing Operator",
    description:
      "Plumbing SEO for local visibility, attributable calls, and jobs booked. Work directly with Aaron Husak, a former C-36 plumbing contractor.",
    url: "https://www.sequoiageo.com/plumbing-seo",
    type: "website",
  },
};

const faqs = [
  {
    question: "How long does plumbing SEO take to produce results?",
    answer:
      "It depends on your market, competition, and starting point. Technical and Google Business Profile corrections may show movement before new service pages and authority work do. Sequoia GEO establishes measurement first, then reports qualified calls and jobs booked from organic search while the longer-term search trend develops.",
  },
  {
    question: "Should I invest in SEO or paid advertising for my plumbing company?",
    answer:
      "Often both, but the right mix depends on capacity, service area, and current visibility. Paid advertising can capture demand while organic coverage develops. SEO can reduce dependence on paid placement over time. The decision should be based on qualified calls and jobs booked by source, not a blanket percentage or a rankings report.",
  },
  {
    question: "How do I evaluate whether my current plumbing SEO is working?",
    answer:
      "Track qualified calls, accepted form leads, completed bookings, and jobs booked from organic search. Rankings, impressions, and traffic help diagnose the channel, but they are not the business outcome. Your reporting should distinguish new customers from repeat callers and nonlead activity, then connect each qualified inquiry to its source.",
  },
  {
    question: "What is the difference between plumbing SEO and general SEO?",
    answer:
      "Plumbing SEO is local by definition. You cannot dispatch a truck across the state, so every ranking that matters is local: the Map Pack, your Google Business Profile, and the service pages that show up when someone in your area is searching with water on the floor. A firm that manages national brands is optimizing a different game. The proposal may look the same. The work is not.",
  },
  {
    question: "What keywords should a plumbing company target?",
    answer:
      "Start with four categories: emergency searches, job-type searches such as water heater installation or sewer line replacement, location searches, and problem searches such as low water pressure. Prioritize the services you can fulfill profitably in the locations you can dispatch to, then build genuinely useful coverage instead of repeating one template across dozens of pages.",
  },
  {
    question: "What does plumbing SEO cost with Sequoia GEO?",
    answer:
      "Engagements start at $2,500 a month with an initial term of three months, then continue month to month. Ad spend is separate and stays yours. Google bills you directly, and nothing is marked up or routed through Sequoia GEO. You own your domain, analytics, ad accounts, and the pages built for your business.",
  },
  {
    question: "Can you verify one problem if I already have an agency?",
    answer:
      "Yes. A scoped baseline review can verify a tracking, search visibility, or conversion problem before you decide whether a larger change is necessary. If the evidence supports your current provider, the finding will say that. If the problem requires implementation, you can decide whether Sequoia GEO should take the agency seat.",
  },
  {
    question: "Are Local Services Ads worth it for plumbers?",
    answer:
      "They can be, as one measured channel among several. Google bills per charged lead, and prices vary by trade and market. Treat Local Services Ads like any lead source: preserve the lead history, dispute invalid charges, track which calls qualify, and compare jobs booked with the results from organic search and paid search.",
  },
  {
    question: "Does plumbing SEO still matter now that AI tools answer questions?",
    answer:
      "The work overlaps, but no single public formula determines recommendations across AI assistants. Google says its normal SEO fundamentals remain relevant for AI features in Search. Crawlable service pages, accurate listings, consistent business facts, and useful local content create a stronger discovery foundation, while recommendation testing and citation review remain separate measurements. That is why AI search visibility is built into every engagement instead of sold as a separate product.",
  },
];

export default function PlumbingSeoPage() {
  return (
    <>
      <ServiceJsonLd
        serviceType={"Plumbing SEO"}
        description={"SEO for plumbing companies, run by a home services operator rather than an account manager, measured against booked jobs."}
        url={"https://www.sequoiageo.com/plumbing-seo"}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "Plumbing SEO", url: "https://www.sequoiageo.com/plumbing-seo" },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafaf8] py-14 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-white px-5 py-2 text-sm font-medium text-[#1A5C3A] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
              Plumbing SEO Services
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Plumbing SEO Services Built to Generate{" "}
              <span className="text-[#1A5C3A]">Calls and Jobs Booked</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              Plumbing SEO helps a plumbing company appear when local customers search for a
              plumber, emergency service, drain cleaning, water heaters, sewer work, and other
              bookable jobs. The work connects Google Business Profile, service and location
              pages, technical SEO, reviews, authority, and call attribution so you can measure
              qualified calls and jobs booked from organic search.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-center">
              <Link
                href="/contact#book"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Choose a Time With Aaron
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a href="tel:5595213122" className="text-base font-medium text-[#1A5C3A] hover:text-[#0D2318] transition-colors">
                (559) 521-3122
              </a>
            </div>
            <p className="mt-6 text-base leading-relaxed text-gray-500 sm:text-lg">
              You work directly with Aaron, a 13-year home services operator and former C-36
              plumbing contractor, not an account manager. Looking to become a plumber{" "}
              <Link href="/geo-for-plumbers" className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]">
                AI tools recommend
              </Link>{" "}
              too? That requires a related AI visibility discipline beyond traditional search.
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
              Lead sellers, ads, and SEO are channels, and every channel needs the same test:
              which inquiries qualified, which jobs booked, and what should change next. These
              resources explain how to judge the numbers before adding more spend.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
              <h3 className="text-base font-bold text-[#1a1a1a]">
                How Much Should Plumbers Spend on Marketing?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                What I actually spent as an operator, and how to set a budget from capacity,
                service mix, and measurable acquisition targets.
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
                A breakdown of how charged leads differ from clicks, calls, qualified leads, and
                jobs booked, with trade and market context.
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
              Documented Public Evidence
            </p>
            <p className="text-lg font-bold text-[#1a1a1a]">
              116 Google Business Profile call-button clicks over six months
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              KABAM Plumbing is owner-operated and held a 5.0 across 154 Google reviews when
              verified July 8, 2026. Google Business Profile performance reported 116 clicks on
              the profile&rsquo;s call button over the six months through May 2026. That metric does
              not establish completed calls, unique callers, qualified leads, or jobs booked.
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
                  Plumbing SEO Managed by a Former Plumbing Operator
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I spent 13 years operating a home services company that included plumbing and
                  HVAC, and formerly held California&rsquo;s C-36 plumbing classification. You work
                  directly with me, not an account manager.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  That means the strategy accounts for dispatchable service areas, service mix,
                  call handling, technician capacity, and whether qualified calls become booked
                  jobs. Those constraints shape the keyword plan and the reporting.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "Former", label: "C-36 plumbing contractor" },
                  { stat: "13 yrs", label: "Home services operator" },
                  { stat: "4x", label: "Inc 5000 (2020-2023)" },
                  { stat: "1:1", label: "Work directly with Aaron" },
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
                body: "For many local plumbing searches, the profile is a major path to the call. I manage categories, service areas, services, photos from completed jobs, and a review request flow tied to job completion. The website and profile should reinforce the same business facts.",
              },
              {
                title: "Service Pages Built Around Your Job Mix",
                body: "Coverage for the jobs and locations you can fulfill: water heaters, drain cleaning, sewer lines, repipes, leak detection, and the markets your team serves. Each page should answer the customer's real question and provide a clear call or booking path, not repeat a city-name template.",
              },
              {
                title: "Technical Health and Indexation",
                body: "Sitemap errors, pages excluded from the index, slow mobile loads, duplicate URLs, and broken internal links can prevent useful pages from competing. The staging-server redirect above is the class of crawl failure this review is designed to find.",
              },
              {
                title: "Authority, Reviews, and Accountability",
                body: "Credible local and trade references, a repeatable review process, and call attribution that separates organic from paid and new customers from repeat callers. The monthly report centers qualified calls and jobs booked, with rankings used as supporting evidence.",
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

      {/* Operating process */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              How Sequoia GEO Runs Plumbing SEO
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
                {
                  number: "01",
                  title: "Verify the Baseline",
                  body: "Measure organic rankings, Google Business Profile activity, calls, forms, and jobs booked before changing the program.",
                },
                {
                  number: "02",
                  title: "Separate Real Demand",
                  body: "Distinguish new-customer inquiries from repeat callers, vendors, job seekers, and other nonlead activity.",
                },
                {
                  number: "03",
                  title: "Fix the Foundations",
                  body: "Correct crawlability, entity consistency, core service pages, tracking, and conversion obstacles in priority order.",
                },
                {
                  number: "04",
                  title: "Build Service Coverage",
                  body: "Create useful coverage around profitable plumbing services and the locations your team can actually dispatch to.",
                },
                {
                  number: "05",
                  title: "Report and Prioritize",
                  body: "Report qualified calls and jobs booked by source, then focus the next month on the largest verified constraint.",
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
                title: "Useful Location Coverage, Not Templates",
                body: "A location page should help a customer understand service availability, local conditions, proof, and the next step. Repeating the same page with a city name swapped in does not create useful local coverage.",
              },
              {
                number: "02",
                title: "Recent, Genuine Reviews",
                body: "A steady flow of recent customer feedback gives prospects current proof and keeps the reputation record from going stale. The request works best when it is built into the completed-job process.",
              },
              {
                number: "03",
                title: "Identical Listings Everywhere",
                body: "Your business name, address, phone, services, and service area should agree across the website, Google Business Profile, and major third-party listings. Contradictions weaken customer trust and make the entity harder for search and AI systems to interpret.",
              },
              {
                number: "04",
                title: "Attribution Before Optimization",
                body: "Tracking comes first: analytics, Search Console, and call attribution that isolate organic inquiries from paid traffic and new customers from repeat callers. Optimization begins after the business can distinguish a visit from a qualified lead.",
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
              If Google has sent your account a migration notice, preserve the historical cost and
              lead records before the old dashboard closes. Read the full breakdown of the{" "}
              <Link href="/google-lsa-changes-2026" className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]">
                2026 Local Services Ads changes
              </Link>{" "}
              and verify the date shown inside your own account before acting.
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
              { label: "AI Search Visibility", href: "/geo-for-plumbers" },
              { label: "Best Plumbing SEO Keywords", href: "/blog/best-plumbing-seo-keywords" },
              { label: "Marketing Baseline Review", href: "/audit" },
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

      {/* Scoped verification callout */}
      <section className="bg-[#fafaf8] border-y border-gray-200 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#1A5C3A] mb-1">Already have an agency, but need one problem verified?</p>
            <p className="text-base text-gray-700">
              Use the baseline review to verify a tracking, search visibility, or conversion issue
              before deciding what changes and who should own the work.
            </p>
          </div>
          <Link href="/contact#book" className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-[#1A5C3A] px-6 py-3 text-sm font-semibold text-[#1A5C3A] hover:bg-[#1A5C3A] hover:text-white transition-colors">
            Choose a Time With Aaron
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            See What Your Plumbing SEO Is Producing
          </h2>
          <p className="mt-4 text-lg text-[#C8EDD2]/80">
            The Marketing Baseline Review connects search visibility, Google Business Profile,
            calls, and the booking path to qualified leads and jobs booked. You work directly with
            Aaron to verify the largest constraint before anything changes.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact#book" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]">
              Choose a Time With Aaron
            </Link>
            <a href="tel:5595213122" className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors">(559) 521-3122</a>
          </div>
        </div>
      </section>

      {/* On-page capture: request the audit without leaving the page */}
      <InlineLeadForm
        source="plumbing_seo_page"
        heading="Request a plumbing SEO baseline review"
        subtext="Tell us where to send it. We review your search visibility, Google Business Profile, and booking path before the call. No pitch deck."
      />
    </>
  );
}
