import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import TradeAiSearchNav from "@/components/TradeAiSearchNav";
import CityAiSearchIndex from "@/components/CityAiSearchIndex";
import AiSearchTrustPanel from "@/components/AiSearchTrustPanel";

export const metadata: Metadata = {
  title: "AI SEO Agency for Home Services | Sequoia GEO",
  description:
    "Evidence-first AI SEO for local and home service businesses. See what we change, how we measure AI search visibility, and what we never promise.",
  alternates: {
    canonical: "https://www.sequoiageo.com/geo-agency",
  },
};

const faqs = [
  {
    question: "What is AI SEO?",
    answer:
      "AI SEO is the work of making a business and its evidence understandable, retrievable, and useful across traditional search and AI-assisted answers. The foundation remains normal SEO: crawlable pages, helpful content, accurate public information, internal links, and measurement.",
  },
  {
    question: "Is GEO different from SEO?",
    answer:
      "GEO, or generative engine optimization, is a label for the part of SEO concerned with generative answers. It adds recommendation and citation observation to the measurement plan, but it is not a separate ranking system and it does not replace technical SEO, local search, or useful content.",
  },
  {
    question: "Does a website need special schema for AI search?",
    answer:
      "Google says no special schema or additional technical requirement is needed for its AI Overviews or AI Mode. Structured data can still reduce ambiguity when it accurately matches the visible page, but markup does not guarantee a citation, recommendation, or ranking.",
  },
  {
    question: "How does Sequoia measure AI search visibility?",
    answer:
      "Sequoia built its own AI Search Evidence System for the work. The current release uses dated manual question panels, public-source reconciliation, lead attribution, and separate stages for citations, mentions, recommendations, referral visits, inquiries, qualified leads, and jobs booked. An automated OpenAI query and source collector remains pilot-only until its first live observation is validated. The system is included in AI SEO engagements, not added as a separate software fee.",
  },
  {
    question: "Can an AI SEO agency guarantee a recommendation?",
    answer:
      "No. AI answers vary by platform, prompt, location, account state, model, and date. Sequoia can document the baseline, correct verifiable problems, and measure repeated observations, but no agency controls whether an assistant recommends a business.",
  },
  {
    question: "How long should AI SEO be measured?",
    answer:
      "Technical corrections can be verified after deployment. Recommendation visibility is more variable, so Sequoia compares repeated observations over 60 to 90 days after material indexing changes instead of treating one favorable answer as proof.",
  },
];

const workAreas = [
  {
    title: "Crawl and retrieval access",
    body: "Confirm that important pages can be crawled, indexed, internally discovered, and read in textual form. For ChatGPT Search, this includes checking that OAI-SearchBot is not unintentionally blocked.",
  },
  {
    title: "Business and entity consistency",
    body: "Reconcile names, services, locations, profiles, licensing records, contact information, and structured data so owned and independent sources are not describing different businesses.",
  },
  {
    title: "First-hand evidence",
    body: "Publish useful comparisons, original statistics, methods, field observations, and named case studies only when the source and permission support the claim.",
  },
  {
    title: "Independent corroboration",
    body: "Improve legitimate profiles and pursue relevant association, partner, podcast, directory, and editorial coverage. Third-party mentions are earned, not planted.",
  },
  {
    title: "Page clarity and conversion",
    body: "Answer the buyer's question clearly, show who did the work, define what happens next, and preserve a usable path from an AI referral or search visit to an inquiry.",
  },
  {
    title: "Measurement discipline",
    body: "Track prompt observations, cited pages, referrals, inquiries, qualified leads, and jobs booked without converting one stage into another for a better-looking report.",
  },
];

const exclusions = [
  "A special schema type that guarantees inclusion in an AI answer",
  "An llms.txt file presented as a ranking factor",
  "Generic articles published only to imitate prompt variations",
  "One favorable answer treated as a stable ranking",
  "A citation or referral visit reported as a qualified lead",
  "Manufactured reviews, forum mentions, profiles, or endorsements",
];

export default function GeoAgencyPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "Services", url: "https://www.sequoiageo.com/services" },
          { name: "AI SEO", url: "https://www.sequoiageo.com/geo-agency" },
        ]}
      />
      <ServiceJsonLd
        serviceType="AI Search Optimization and SEO"
        description="Evidence-first AI SEO for local and home service businesses, including technical SEO, public information consistency, first-hand evidence, independent corroboration, and staged measurement."
        url="https://www.sequoiageo.com/geo-agency"
      />

      <section className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-white px-5 py-2 text-sm font-medium text-[#1A5C3A] shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
              AI SEO and AI search visibility
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Evidence-first AI SEO for businesses that need to be understood before they can be recommended
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
              Sequoia GEO helps local and home service businesses correct public contradictions,
              strengthen useful evidence, and measure how they appear across search and AI-assisted
              answers. GEO is the industry label. AI SEO is the work buyers recognize. The foundation
              is still credible SEO, not a separate set of secret ranking tricks.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/ai-search-assessment"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Request a Public-Surface Review
              </Link>
              <Link
                href="/ai-search-methodology"
                className="inline-flex items-center justify-center rounded-lg border border-[#1A5C3A]/30 bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:border-[#1A5C3A]"
              >
                Read the Measurement Method
              </Link>
            </div>
            <Link
              href="/ai-seo-pricing"
              className="mt-5 inline-block text-sm font-semibold text-[#1A5C3A] underline decoration-[#3A9E6A]/50 underline-offset-4 hover:text-[#0D2318]"
            >
              See AI SEO pricing and scope
            </Link>
          </div>
        </div>
      </section>

      <TradeAiSearchNav currentHref="/geo-agency" />

      <CityAiSearchIndex />

      <AiSearchTrustPanel />

      <section className="bg-[#0D2318] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="section-overline mb-4">Observed in Sequoia&rsquo;s own accounts</p>
            <h2 className="max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">
              What the visibility reports show, and what they do not prove
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#C8EDD2]/75">
              These are dated visibility measures for sequoiageo.com. They are not vendor
              recommendations, inquiries, qualified leads, or jobs booked.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <p className="text-4xl font-extrabold text-[#3A9E6A]">2,950</p>
                <h3 className="mt-3 text-lg font-bold text-white">Google generative AI impressions</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#C8EDD2]/65">
                  Across 39 pages in the Search Console Generative AI report for
                  sc-domain:sequoiageo.com, July 22 through August 18, 2026. Read in account on
                  August 20, 2026.
                </p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <p className="text-4xl font-extrabold text-[#3A9E6A]">64</p>
                <h3 className="mt-3 text-lg font-bold text-white">Bing AI citations</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#C8EDD2]/65">
                  Across six cited pages in Bing Webmaster Tools AI Performance for
                  https://www.sequoiageo.com/, July 20 through August 18, 2026. Read in account on
                  August 20, 2026.
                </p>
              </article>
            </div>
            <p className="mt-7 max-w-4xl text-sm leading-relaxed text-[#C8EDD2]/60">
              The leading pages were primarily agency comparisons, original statistics, and focused
              service pages. That makes those formats worth studying. It does not establish that the
              format caused a recommendation or a lead.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-overline mb-4">The work</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                What an evidence-first AI SEO engagement can change
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                The scope follows the verified constraint. It does not begin with a generic content quota.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {workAreas.map((item) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-6">
                  <h3 className="text-lg font-bold text-[#0D2318]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#3A9E6A]">
                  Built by Sequoia, included in the work
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Our AI Search Evidence System turns observations into decisions
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-[#C8EDD2]/75">
                  Sequoia uses a controlled evidence process to connect dated observations to public
                  contradictions, content gaps, conversion problems, and measurement work we can
                  actually change.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-[#C8EDD2]/60">
                  The current release uses manual observation and lead attribution. Automated OpenAI
                  query and source collection remains pilot-only until its first live observation is
                  validated. The system is included in AI SEO engagements, with no separate collector
                  subscription or AI surcharge.
                </p>
                <Link
                  href="/ai-search-methodology"
                  className="mt-7 inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                >
                  See the evidence methodology
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Frozen questions", "We preserve the question set and date later additions so a favorable answer cannot quietly replace the baseline."],
                  ["Source evidence", "Manual observations preserve visible citations today. Provider-returned queries and source telemetry will remain pilot evidence until the automated collector passes live validation."],
                  ["Human recommendation coding", "A name match or citation is not automatically called a recommendation. Each stage has its own evidence rule."],
                  ["Business outcome connection", "Visibility remains a leading indicator until tracking supports an inquiry, a qualified lead, or a job booked."],
                ].map(([title, body]) => (
                  <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#C8EDD2]/65">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="section-overline mb-4">GEO and SEO</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                AI SEO adds observations, not a separate law of search
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                <p>
                  Google says the same foundational SEO practices apply to AI Overviews and AI Mode.
                  Pages need to be crawlable, indexed, useful, internally discoverable, and eligible to
                  appear with a snippet. Google also says no special schema is required for those features.
                </p>
                <p>
                  That guidance is specific to Google. OpenAI separately documents OAI-SearchBot access
                  for ChatGPT Search and the use of utm_source=chatgpt.com on referral links. Neither
                  company publishes a formula that lets an agency guarantee a recommendation.
                </p>
                <p>
                  Structured data still has a supporting role when it matches visible content. It can
                  reduce ambiguity and help search features interpret a page, but it should not be sold as
                  an AI recommendation switch.
                </p>
              </div>
              <div className="mt-7 flex flex-col gap-3 text-sm">
                <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1A5C3A] underline decoration-[#3A9E6A]/50 underline-offset-4 hover:text-[#0D2318]">
                  Google Search Central: AI features and your website
                </a>
                <a href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1A5C3A] underline decoration-[#3A9E6A]/50 underline-offset-4 hover:text-[#0D2318]">
                  OpenAI: Publishers and Developers FAQ
                </a>
                <a href="https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1A5C3A] underline decoration-[#3A9E6A]/50 underline-offset-4 hover:text-[#0D2318]">
                  Bing Webmaster Tools: AI Performance definitions
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-[#0D2318]">What we do not sell as AI SEO</h3>
              <ul className="mt-6 space-y-4">
                {exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="section-overline mb-4">The measurement ladder</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                A citation is not a recommendation. A visit is not a lead.
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
                Sequoia publishes the definitions before reporting the outcome. That prevents a proxy
                metric from quietly becoming a customer result.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Mentioned", "The business appears anywhere in the answer."],
                ["Recommended", "The answer presents the business as a plausible provider to hire."],
                ["Primary", "The business is first or the clearest provider recommendation."],
                ["Cited", "A URL is used as a source, whether or not the business is recommended."],
                ["Referral visit", "A captured session arrives from an identified AI source."],
                ["Inquiry", "A real person contacts the business about a possible need."],
                ["Qualified lead", "A real business, addressable need, and decision-maker response or meeting are established."],
                ["Job booked", "The business confirms a booked job under its normal operating definition."],
              ].map(([title, body]) => (
                <article key={title} className="rounded-xl border border-[#3A9E6A]/20 bg-[#C8EDD2]/15 p-5">
                  <h3 className="text-base font-bold text-[#0D2318]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{body}</p>
                </article>
              ))}
            </div>
            <div className="mt-9 text-center">
              <Link href="/ai-search-methodology" className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0D2318]">
                Read the Full AI Search Measurement Method
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="section-overline mb-4">Operator led</p>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  You work with Aaron, not an account manager
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-[#C8EDD2]/75">
                  Aaron Husak spent 13 years building and running a home service company, in an industry career that began in 2006, before
                  founding Sequoia GEO. He leads the strategy, joins the working meetings, reviews the
                  evidence, and remains accountable for the decisions. Specialized implementation
                  support may be added, but the strategic relationship is not handed off.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["13 yrs", "owner and operator"],
                  ["4x", "Inc 5000"],
                  ["90 days", "initial term"],
                  ["Direct", "access to Aaron"],
                ].map(([stat, label]) => (
                  <div key={label} className="rounded-xl bg-[#C8EDD2] p-5 text-center">
                    <p className="text-2xl font-extrabold text-[#0D2318]">{stat}</p>
                    <p className="mt-1 text-xs text-[#1A5C3A]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="section-overline mb-4">Common questions</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              AI SEO and GEO questions
            </h2>
          </div>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-gray-200 bg-white p-7">
                <h3 className="text-lg font-bold text-[#0D2318]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Find the public evidence helping or confusing the answer
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#C8EDD2]/80">
            Start with a hand-reviewed public-surface assessment. It documents what can be verified,
            what remains uncertain, and which correction should come first.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/ai-search-assessment" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]">
              Request a Public-Surface Review
            </Link>
            <Link href="/ai-seo-pricing" className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:border-white">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
