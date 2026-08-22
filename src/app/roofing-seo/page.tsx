import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import CalculatorBanner from "@/components/CalculatorBanner";
import InlineLeadForm from "@/components/InlineLeadForm";
import ServiceJsonLd from "@/components/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Roofing SEO Services Managed by a Home Services Operator",
  description:
    "Roofing SEO built around local visibility, attributable calls, and jobs booked. Work directly with Aaron Husak, a 13-year home services operator.",
  alternates: {
    canonical: "https://www.sequoiageo.com/roofing-seo",
  },
  openGraph: {
    title: "Roofing SEO Services Managed by a Home Services Operator",
    description:
      "Roofing SEO built around local visibility, attributable calls, and jobs booked. Work directly with Aaron Husak, a 13-year home services operator.",
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
    a: "Engagements start at $2,500 per month with an initial term of three months, then continue month to month. The scope depends on the market, the starting point, and the verified constraints. Ad spend is separate, and the business retains ownership of its domain, analytics, ad accounts, and published pages.",
  },
  {
    q: "Do I need roofing SEO if I am already running Google Ads?",
    a: "They can work together, but the right mix depends on demand, cost per qualified lead, booking rate, seasonality, and current organic visibility. Keep paid and organic attribution separate, then shift budget only when lead and booked-job data supports the decision.",
  },
  {
    q: "What makes roofing SEO different from general SEO?",
    a: "Roofing search demand is local, seasonal, and divided across repairs, replacements, storm work, and insurance-related questions. A useful program maps those distinct needs to the services and locations the company can fulfill, then measures which organic inquiries qualify and become booked jobs.",
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
      <section className="relative overflow-hidden bg-[#fafaf8] py-14 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-white px-5 py-2 text-sm font-medium text-[#1A5C3A] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
              Roofing SEO Services
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Roofing SEO Services Built to Generate{" "}
              <span className="text-[#1A5C3A]">Calls and Jobs Booked</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              Roofing SEO helps a roofing company appear when homeowners search for roof repair,
              replacement, storm damage, and local contractors. The work combines Google Business
              Profile optimization, service and location pages, technical SEO, reviews, authority
              building, and attribution. Sequoia GEO measures whether organic visibility produces
              qualified calls and jobs booked, not whether a ranking report looks busy.
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
              Documented Public Evidence
            </p>
            <p className="text-lg font-bold text-[#1a1a1a]">
              Top 3 map-pack coverage across 88% to 96% of the measured service area
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Luma Exteriors is not a roofing company. It is a premium Austin siding, windows, and
              doors contractor. A May 28, 2026 geo-grid scan placed it in the top three across 88%
              to 96% of its measured service area for two siding queries. Reviews grew from 9 to
              28 while holding a 5.0 rating. This is local-search operating evidence from an
              adjacent exterior trade, not a claim about roofing leads or jobs booked.
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
                    The Google Business Profile and website should present the same services,
                    service area, contact information, and proof. The work includes categories,
                    services, reviews, photos, and consistent third-party listings, with profile
                    activity measured separately from completed calls and jobs booked.
                  </>
                ),
              },
              {
                title: "Service Pages That Match How Homeowners Search",
                body: (
                  <>
                    Roof replacement, roof repair, storm damage, and emergency tarping are different
                    searches from different buyers. Coverage should match the roofing services and
                    locations the company can actually fulfill, answer the customer&rsquo;s real
                    question, and provide a clear call or booking path without repeating a thin
                    city-name template.
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
                    stage before the season, with first-hand service details and useful answers
                    instead of generic production copy. I published the full
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
                title: "Tracking to Leads and Jobs Booked",
                body: (
                  <>
                    Search Console, call attribution, accepted forms, completed bookings, and the
                    CRM are reconciled so the report separates visibility from qualified inquiries
                    and jobs booked. Rankings remain diagnostic evidence, not the final outcome.
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

      {/* Operating process */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              How Sequoia GEO Runs Roofing SEO
            </h2>
          </div>
          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                number: "01",
                title: "Verify the Baseline",
                body: "Measure rankings, Google Business Profile activity, calls, forms, and jobs booked before changing the program.",
              },
              {
                number: "02",
                title: "Fix the Foundations",
                body: "Correct crawlability, entity consistency, service coverage, tracking, and conversion obstacles in priority order.",
              },
              {
                number: "03",
                title: "Build Service Coverage",
                body: "Improve pages around the roofing services and locations the company can fulfill, including seasonal and storm demand.",
              },
              {
                number: "04",
                title: "Strengthen Authority",
                body: "Build recent reviews, accurate listings, internal links, and credible local or trade references. Google does not publish a review-velocity formula, so the work is reported as an operating process rather than a claimed ranking weight.",
              },
              {
                number: "05",
                title: "Report and Prioritize",
                body: "Report qualified calls and jobs booked by source, then focus the next month on the largest verified constraint.",
              },
            ].map((item) => (
              <div key={item.number} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-bold text-[#3A9E6A]">{item.number}</p>
                <h3 className="text-base font-bold text-[#3A9E6A]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C8EDD2]/70">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-4xl mt-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-xl font-extrabold text-white">About Aaron Husak</h3>
              <p className="mt-3 text-base leading-relaxed text-[#C8EDD2]/80 max-w-2xl mx-auto">
                I spent 13 years operating a home services company and formerly held California
                contractor classifications including B General, C-2, C-20 HVAC, and C-36
                Plumbing. You work directly with me, not an account manager. The reporting centers
                qualified inquiries and jobs booked, with impressions and rankings used as
                supporting evidence.
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
                title: "Reporting that reaches qualified leads",
                body: (
                  <>
                    Any company can show a ranking chart. Ask whether their reporting connects
                    search visibility to booked inspections and closed jobs. If the answer involves
                    only impressions, keep asking. Visibility metrics explain what changed. They do
                    not replace qualification and jobs-booked reporting.
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
              I published a comparison of roofing marketing agencies and included the criteria,
              evidence limits, and fit considerations in the page. If you are shopping, use it to
              compare operating model, category experience, proof, and ownership before choosing a
              provider.
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
            {roofingFaqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.a}</p>
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
              { label: "Marketing Baseline Review", href: "/audit" },
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
          <Link
            href="/contact#book"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-[#1A5C3A] px-6 py-3 text-sm font-semibold text-[#1A5C3A] hover:bg-[#1A5C3A] hover:text-white transition-colors"
          >
            Choose a Time With Aaron
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
            See What Your Roofing SEO Is Producing
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

      {/* Free tool: see what the numbers mean for YOUR business */}
      <CalculatorBanner />

      {/* On-page capture: request the audit without leaving the page */}
      <InlineLeadForm
        source="roofing_seo_page"
        heading="Request a roofing SEO baseline review"
        subtext="Tell us where to send it. We review your search visibility, Google Business Profile, and booking path before the call. No pitch deck."
      />
    </>
  );
}
