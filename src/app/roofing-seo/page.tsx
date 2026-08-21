import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import CalculatorBanner from "@/components/CalculatorBanner";
import InlineLeadForm from "@/components/InlineLeadForm";
import ServiceJsonLd from "@/components/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Roofing SEO From a 13-Year Home Services Operator",
  description:
    "I ran a 4x Inc 5000 home services company for 13 years. Roofing SEO managed to booked jobs, with real client numbers published. From $2,500 a month.",
  alternates: {
    canonical: "https://www.sequoiageo.com/roofing-seo",
  },
  openGraph: {
    title: "Roofing SEO From a 13-Year Home Services Operator",
    description:
      "I ran a 4x Inc 5000 home services company for 13 years. Roofing SEO managed to booked jobs, with real client numbers published. From $2,500 a month.",
    url: "https://www.sequoiageo.com/roofing-seo",
    type: "website",
  },
};

const roofingFaqs = [
  {
    q: "How long does roofing SEO take to produce results?",
    a: "There is no universal timeline. Technical corrections can be verified after release, while crawling, indexing, local visibility, calls, qualified leads, and jobs booked move on different schedules. We establish the baseline first, document releases, and agree on an observation window that fits the market and scope. No agency can promise page one by a fixed date.",
  },
  {
    q: "How much does roofing SEO cost?",
    a: "My engagements start at $2,500 per month. What that covers depends on your market, website, locations, implementation access, and the size of the verified gap. The program should define what will be changed and report calls, qualified leads, and jobs booked rather than asking you to accept ranking screenshots as the result.",
  },
  {
    q: "Do I need roofing SEO if I am already running Google Ads?",
    a: "They can work together, but the right mix depends on demand, cost per qualified lead, booking rate, seasonality, and current organic visibility. Keep paid and organic attribution separate, then shift budget only when lead and booked-job data supports the decision.",
  },
  {
    q: "What makes roofing SEO different from general SEO?",
    a: "Roofing has extreme seasonality, storm-driven demand spikes, an insurance-versus-retail split that changes the entire keyword universe, and job tickets that run from a small repair to a full replacement. A generalist agency applies the same template it uses for law firms and restaurants and misses all of it. Ask for proof from the trades before you sign anything.",
  },
  {
    q: "How does storm damage affect roofing SEO strategy?",
    a: "Hail and high winds can create abrupt local demand. Before storm season, verify crawl access, location and service information, tracking, phone coverage, and the landing paths used by both organic and paid traffic. Existing visibility may help during a spike, but it does not guarantee that one company captures the demand.",
  },
  {
    q: "What is AI SEO for roofing companies?",
    a: "AI SEO, also called generative engine optimization or GEO, improves the crawlability, accuracy, usefulness, and corroboration of a roofing company's public information, then measures whether relevant AI products mention, cite, recommend, or refer a prospect to it. The foundation remains SEO, and no provider controls the answer an AI product gives.",
  },
  {
    q: "How do I know if my roofing SEO company is performing?",
    a: "Ask for reporting that connects organic visits to valid calls, qualified leads, and booked roofing jobs. Clicks and impressions describe visibility, but they do not prove demand. The report should also show what was released, what remains uncertain, and how duplicate or unqualified inquiries are handled.",
  },
];

export default function RoofingSeoPage() {
  return (
    <>
      <ServiceJsonLd
        serviceType={"Roofing SEO"}
        description={"SEO for roofing companies from a 13-year home services operator, connecting search visibility to qualified calls and signed contracts."}
        url={"https://www.sequoiageo.com/roofing-seo"}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "Roofing SEO", url: "https://www.sequoiageo.com/roofing-seo" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: roofingFaqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-white px-5 py-2 text-sm font-medium text-[#1A5C3A] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
              Roofing SEO
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Roofing SEO Services That Book Jobs,{" "}
              <span className="text-[#1A5C3A]">Not Just Rankings</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Most roofing SEO reports on rankings and traffic. I report on cost per booked job,
              booking rate by lead source, and average ticket by channel. I ran a home services
              company for 13 years before I ever sold marketing. That changes what gets measured.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
          </div>
        </div>
      </section>

      {/* Case study proof strip */}
      <section className="bg-white pt-16 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#fafaf8] p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1A5C3A] mb-3">
              Proof, Not Promises
            </p>
            <p className="text-lg font-bold text-[#1a1a1a]">
              An exteriors company in the map pack top 3 across 88 to 96 percent of its territory
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Luma Exteriors is not a roofing company. It is a premium Austin siding, windows, and
              doors contractor, and the same map pack discipline decides who gets the call in both
              trades. Reviews grew from 9 to 28 at a straight 5.0, listings stayed synced across
              roughly 49 directories, and every Local Services Ads lead got watched, with wrong-fit
              leads disputed for credit.
            </p>
            <Link
              href="/case-studies/luma-exteriors"
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

      {/* What a Roofing SEO Engagement Covers */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What a Roofing SEO Engagement Covers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Six areas of work. Each one exists because it moves a number a roofing owner actually
              cares about.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Local SEO and Google Business Profile",
                body: (
                  <>
                    The map pack gets the calls. Everyone below the fold splits the leftovers. This
                    work is Business Profile management, review velocity, consistent listings across
                    every directory Google checks, and a profile that stays active week after week.
                    It is the same system that put Luma Exteriors in the top 3 across 88 to 96
                    percent of its service area.
                  </>
                ),
              },
              {
                title: "Service Pages That Match How Homeowners Search",
                body: (
                  <>
                    Roof replacement, roof repair, storm damage, and emergency tarping are different
                    searches from different buyers, and each needs its own page. Same for every city
                    you serve. One generic {"“"}services{"”"} page ranks for nothing and
                    forces your best prospects to guess whether you do their job in their town.
                  </>
                ),
              },
              {
                title: "Technical Health",
                body: (
                  <>
                    Slow mobile pages, crawl errors, duplicate content, and broken schema quietly
                    cap every other effort. I audit and fix the technical layer first, because
                    content on a broken site is money spent twice.
                  </>
                ),
              },
              {
                title: "Content Built Around the Roofing Buyer",
                body: (
                  <>
                    Roofing demand comes in four flavors: aging-roof research, replacement shopping,
                    storm emergencies, and insurance claims. The content plan maps pages to each
                    stage before the season, because the companies that win after a storm are the
                    ones who ranked before it. Generic content mills cannot write this; I spent 13
                    years inside home services and it shows in the work. I published the full
                    framework in the{" "}
                    <Link
                      href="/blog/roofing-seo-complete-guide-to-ranking"
                      className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
                    >
                      complete roofing SEO guide
                    </Link>
                    .
                  </>
                ),
              },
              {
                title: "Authority and Reputation",
                body: (
                  <>
                    Legitimate local links, manufacturer certification pages, accurate listings, and
                    independent coverage help buyers and search systems verify the business. A compliant
                    review-request process keeps feedback current without scripting what customers should say.
                  </>
                ),
              },
              {
                title: "Tracking to Booked Jobs, Not Rankings",
                body: (
                  <>
                    Search Console, call tracking, and your CRM wired together so we both know which
                    queries produce qualified leads and booked jobs.
                    If a report cannot answer {"“"}what did this cost per booked job,{"”"}{" "}
                    it is not a report. It is a receipt.
                  </>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7">
                <h3 className="text-base font-bold text-[#1A5C3A] mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Run by an Operator */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Run by an Operator, Not an Account Manager
            </h2>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: "Lead-to-booked-job conversion",
                body: "How many of your roofing leads become scheduled inspections? Most owners cannot answer that number. If your booking rate is broken, more traffic makes the problem bigger, not smaller. I check this before recommending you spend anything.",
              },
              {
                title: "Lead quality by channel",
                body: "Storm, insurance, retail, repair, and maintenance inquiries do not represent the same need. I separate channels by qualified leads and booked jobs, not just call volume.",
              },
              {
                title: "Review process vs. competitors",
                body: "I benchmark review count, rating, recency, responses, and request completion against visible competitors. Google does not publish a review-velocity formula, so the goal is a compliant operating process and better customer evidence.",
              },
              {
                title: "Off-season pipeline",
                body: "Seasonality changes both demand and media costs. The slow months are useful for correcting technical issues, improving buyer-question coverage, and validating tracking before demand rises.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-base font-bold text-[#3A9E6A]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C8EDD2]/70">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-4xl mt-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-xl font-extrabold text-white">About Aaron Husak</h3>
              <p className="mt-3 text-base leading-relaxed text-[#C8EDD2]/80 max-w-2xl mx-auto">
                I held California contractor licenses (B General, C-2, C-20 HVAC, C-36 Plumbing)
                while building Balanced Comfort from one truck to 130+ employees over 13 years in
                home services.
                4x Inc 5000. I started Sequoia GEO to run marketing on operator metrics: closed
                jobs, cost per booked job, and revenue by channel. Not impressions. Not rankings
                alone.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {["B General", "C-2", "C-20 HVAC", "C-36 Plumbing", "4x Inc 5000"].map((c) => (
                  <span key={c} className="rounded-full bg-[#C8EDD2] px-4 py-1.5 text-sm font-medium text-[#0D2318]">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI SEO for Roofing Companies */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              AI SEO for Roofing Companies
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Some homeowners use ChatGPT, Perplexity, and Google{"’"}s AI features while researching
              roofers. The first question is whether those products return local providers for the
              questions and locations that matter to your business.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-600">
              Sequoia has recorded roofing-related demand for AI SEO information in its own Search
              Console. That is evidence of interest in the topic, not evidence that every roofing buyer
              uses AI to choose a contractor. The work begins by measuring the relevant market instead
              of assuming the answer.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              The foundation is still SEO: crawlability, indexation, accurate public information,
              useful first-party evidence, legitimate corroboration, and supported structured data
              that matches the page. AI SEO adds controlled observations across generated answers
              and separates mentions, citations, recommendations, visits, inquiries, and qualified leads.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/geo-agency"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
            >
              How our GEO practice works
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contractors-guide-ai-search"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
            >
              The Contractor&rsquo;s Guide to AI Search
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How to Choose a Roofing SEO Company */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              How to Choose a Roofing SEO Company
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Most roofing contractors have been burned at least once by an SEO company that
              promised rankings and delivered reports. Here is what to check before you sign
              anything, with any company, including this one.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Proof from the trades",
                body: (
                  <>
                    An agency that also serves law firms and e-commerce brands is not wrong to
                    exist, but roofing seasonality, storm spikes, and insurance workflows are blind
                    spots you will pay to have them learn. Ask for home services proof with real
                    numbers, not ranking screenshots. Mine is published: the{" "}
                    <Link
                      href="/case-studies/luma-exteriors"
                      className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
                    >
                      Luma Exteriors case study
                    </Link>
                    , with the methodology and the caveats in writing.
                  </>
                ),
              },
              {
                title: "Reporting that reaches revenue",
                body: (
                  <>
                    Any company can show a ranking chart. Ask whether their reporting connects
                    search visibility to booked inspections and closed jobs. If the answer involves
                    impressions, keep asking. If it cannot get past clicks, that is the blind spot
                    that will hide a failing program for a year.
                  </>
                ),
              },
              {
                title: "You own everything",
                body: (
                  <>
                    Your Business Profile, your Search Console property, your website, your ad
                    accounts. All of it should live in accounts you control, with the agency added
                    as a manager. Ask any company what happens to your content and rankings if you
                    leave. My answer: everything stays with you, because it was yours the whole
                    time.
                  </>
                ),
              },
              {
                title: "A baseline review before a contract",
                body: (
                  <>
                    A company confident in its work will look at your market, your site, and your
                    current numbers before asking you to commit. If the sales process starts with a
                    contract instead of an audit, the program will start with invoices instead of a
                    plan.
                  </>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-[#3A9E6A]/30 bg-white p-7 sm:p-8">
            <p className="text-base leading-relaxed text-gray-700">
              I published a ranked comparison of nine roofing marketing agencies, and I put Sequoia
              GEO ninth on my own list, because a list built to sell you is not research. If you
              are shopping, start there and read it with your revenue size in mind.
            </p>
            <Link
              href="/best-roofing-marketing-agencies"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
            >
              Best Roofing Marketing Agencies, Ranked
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Roofing SEO FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Roofing SEO Questions, Answered Straight
            </h2>
          </div>
          <div className="space-y-6">
            {roofingFaqs.map((item, i) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {i === 1 ? (
                    <>
                      My engagements{" "}
                      <Link
                        href="/how-it-works"
                        className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
                      >
                        start at $2,500 per month
                      </Link>
                      . What that covers depends on your market and how much ground there is to
                      make up, which is why every engagement starts with a marketing baseline review. The better
                      question is what the program produces. A roofing SEO program that cannot show
                      you booked jobs by month 12 was not worth any price.
                    </>
                  ) : i === 5 ? (
                    <>
                      AI SEO, also called{" "}
                      <Link
                        href="/geo-agency"
                        className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
                      >
                        generative engine optimization
                      </Link>{" "}
                      or GEO, improves the crawlability, accuracy, usefulness, and corroboration of
                      your roofing company&rsquo;s public information, then measures whether relevant AI
                      products mention, cite, recommend, or refer a prospect to it. No provider
                      controls the answer an AI product gives.
                    </>
                  ) : (
                    item.a
                  )}
                </p>
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
              Roofing SEO works best as part of a coordinated digital marketing strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "GEO Agency", href: "/geo-agency" },
              { label: "HVAC SEO", href: "/hvac-seo" },
              { label: "Restoration SEO", href: "/restoration-seo" },
              { label: "Plumbing SEO", href: "/plumbing-seo" },
              { label: "Local Services Ads", href: "/lsa-management" },
              { label: "Leaving Your Agency?", href: "/leaving-my-marketing-agency" },
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

      {/* Switching agencies callout */}
      <section className="bg-[#fafaf8] border-y border-gray-200 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#1A5C3A] mb-1">Already with an agency?</p>
            <p className="text-base text-gray-700">
              If your current roofing SEO company isn&rsquo;t producing, we can audit what you own and what a clean
              transition looks like before you commit to anything new.
            </p>
          </div>
          <Link
            href="/leaving-my-marketing-agency"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-[#1A5C3A] px-6 py-3 text-sm font-semibold text-[#1A5C3A] hover:bg-[#1A5C3A] hover:text-white transition-colors"
          >
            Thinking about switching?
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Find out what your roofing marketing is actually producing
          </h2>
          <p className="mt-4 text-lg text-[#C8EDD2]/80">
            Start with the Marketing Baseline Review. I&rsquo;ll look at your spend, your booking rate, your
            phone handling, and your revenue. You&rsquo;ll know exactly where the leaks are before we spend anything new.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact#book" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]">
              Choose a Time With Aaron
            </Link>
            <a href="tel:5595213122" className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors">(559) 521-3122</a>
          </div>
        </div>
      </section>

      {/* Free tool: see what the numbers mean for YOUR business */}
      <CalculatorBanner />

      {/* On-page capture: request the audit without leaving the page */}
      <InlineLeadForm
        source="roofing_seo_page"
        heading="Request a roofing marketing baseline review"
        subtext="Tell us where to send it. We review your rankings, your ads, and your booking path before the call. No pitch deck."
      />
    </>
  );
}
