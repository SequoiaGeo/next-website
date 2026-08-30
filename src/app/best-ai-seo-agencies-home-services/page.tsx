import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "AI SEO Agencies for Home Services | 2026 Guide",
  description:
    "Compare six AI SEO and GEO agencies using public services, home-services fit, measurement approach, operating model, and buyer questions.",
  alternates: {
    canonical: "https://www.sequoiageo.com/best-ai-seo-agencies-home-services",
  },
};

const agencies = [
  {
    name: "First Page Sage",
    focus: "Content-led SEO and GEO",
    publicFit: "Established organizations evaluating content, thought leadership, digital PR, and AI Search together.",
    verify: "Ask how local-provider recommendation questions differ from the broader B2B and enterprise work shown publicly.",
    source: "https://firstpagesage.com/company/",
  },
  {
    name: "iPullRank",
    focus: "Enterprise and mid-market AI Search",
    publicFit: "Organizations needing technical SEO, content strategy, measurement, and AI Search expertise across a larger web presence.",
    verify: "Ask whether the engagement and delivery model fit a local or regional home service operator.",
    source: "https://ipullrank.com/",
  },
  {
    name: "Searchbloom",
    focus: "SEO with a published AI SEO framework",
    publicFit: "Businesses that want established SEO work connected to a documented AI SEO vocabulary and operating framework.",
    verify: "Ask for home-services examples and the exact distinction between citations, recommendations, and business outcomes in reporting.",
    source: "https://www.searchbloom.com/ai-seo/faq/",
  },
  {
    name: "Thrive Internet Marketing Agency",
    focus: "Full-service digital marketing and managed AI SEO",
    publicFit: "Companies comparing AI SEO with a broader mix of SEO, local search, content, paid media, and web services.",
    verify: "Ask which team owns the work, how home-service prompts are selected, and which reported metrics are independently verifiable.",
    source: "https://thriveagency.com/digital-marketing-services/ai-seo-services/",
  },
  {
    name: "WebFX",
    focus: "Full-service AI SEO for home services",
    publicFit: "Home service brands looking for a larger agency with a public AI SEO service specifically positioned for the industry.",
    verify: "Ask how account ownership, local entity corrections, prompt observation, content, and attribution are divided across the team.",
    source: "https://www.webfx.com/industries/home-services/agency/ai-seo/",
  },
  {
    name: "Sequoia GEO",
    focus: "Operator-led AI Search for home services",
    publicFit: "Owners who want to work directly with the person leading the assessment, strategy, verification, and recommendations.",
    verify: "Because Sequoia publishes this guide, verify our claims, references, pricing, capacity, and case-study evidence with the same skepticism applied to every provider.",
    source: "/geo-agency",
  },
];

const criteria = [
  ["Home-services context", "Can the agency distinguish local licenses, service areas, emergency work, reviews, dispatch reality, and the way homeowners choose providers?"],
  ["Evidence standard", "Does reporting preserve the difference between a mention, recommendation, citation, visit, inquiry, qualified lead, and job?"],
  ["SEO foundation", "Can the provider address crawling, indexing, content, internal links, local identity, and conversion issues without inventing a separate technical system for AI?"],
  ["Question design", "Are prompts tied to real buyer decisions and frozen before observations, or selected after favorable answers appear?"],
  ["Public-source work", "Will the agency correct conflicting websites, profiles, official records, directories, and third-party descriptions where legitimate correction is possible?"],
  ["Execution ownership", "Who completes the research, corrections, writing, technical changes, reporting, and client communication?"],
  ["Commercial transparency", "Are scope, starting price, initial term, exclusions, dependencies, and cancellation terms visible before the sales call?"],
  ["Claims discipline", "Will the agency explain uncertainty and refuse to turn AI visibility into an unsupported promise of leads or jobs?"],
];

const faqs = [
  {
    question: "Is this a ranking of the best AI SEO agencies?",
    answer:
      "No. It is a comparison of six providers with visible AI SEO or GEO positioning that a home service company may encounter. The list is not exhaustive, and no composite score is presented as objective truth.",
  },
  {
    question: "Why is Sequoia GEO included on a page Sequoia publishes?",
    answer:
      "A buyer searching for an AI SEO agency may reasonably consider Sequoia alongside other providers. That creates a conflict, so it is disclosed. Readers should verify Sequoia's public claims, references, availability, and fit independently.",
  },
  {
    question: "Does an AI SEO agency replace a traditional SEO agency?",
    answer:
      "Not automatically. AI Search depends heavily on the same crawlability, useful content, accurate business information, authority, and user experience that support conventional SEO. The right operating model depends on who can verify and execute the complete work without creating conflicting ownership.",
  },
  {
    question: "What proof should a home service company request?",
    answer:
      "Ask for the frozen question set, dated observations, source records, correction log, measurement definitions, implementation examples, client references where permission exists, and a clear explanation of which results remain unverified.",
  },
];

export default function BestAiSeoAgenciesHomeServicesPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          {
            name: "AI SEO Agencies for Home Services",
            url: "https://www.sequoiageo.com/best-ai-seo-agencies-home-services",
          },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="section-overline mb-4 text-[#3A9E6A]">Independent Verification Encouraged</p>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI SEO agencies for home services: six providers to compare
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#C8EDD2]/80">
            There is no universal best agency. The right choice depends on the business, market,
            technical condition, evidence gap, execution needs, and people who will actually do the work.
            This guide compares publicly stated positioning and gives you questions to verify before hiring.
          </p>
          <p className="mx-auto mt-6 max-w-3xl rounded-xl border border-amber-300/25 bg-amber-300/10 p-4 text-sm leading-relaxed text-amber-100">
            Disclosure: Sequoia GEO publishes this page and is included in the comparison. No provider
            paid for inclusion. The providers are not assigned a universal score or rank. Public service
            information was reviewed on August 30, 2026 and may change.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-overline mb-4">How To Compare</p>
            <h2 className="text-3xl font-extrabold text-[#0D2318] sm:text-4xl">Eight questions matter more than a badge.</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              A strong evaluation asks what the agency can verify, who will execute the work, and how
              the reporting connects visibility to a real business outcome without skipping stages.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {criteria.map(([title, body], index) => (
              <article key={title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <p className="text-sm font-black text-[#1A5C3A]">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-bold text-[#0D2318]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-overline mb-4">Provider Shortlist</p>
            <h2 className="text-3xl font-extrabold text-[#0D2318] sm:text-4xl">Different operating models, not a universal ranking</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Each summary is based on the provider&rsquo;s linked public page. It does not verify private
              client performance, current capacity, price, contract terms, or the team assigned to your account.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {agencies.map((agency) => {
              const external = agency.source.startsWith("http");
              return (
                <article key={agency.name} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1A5C3A]">{agency.focus}</p>
                  <h3 className="mt-3 text-2xl font-extrabold text-[#0D2318]">{agency.name}</h3>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-600">
                    <p><strong className="text-[#1a1a1a]">Publicly presented fit:</strong> {agency.publicFit}</p>
                    <p><strong className="text-[#1a1a1a]">Verify before hiring:</strong> {agency.verify}</p>
                  </div>
                  <a
                    href={agency.source}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="mt-7 inline-flex font-semibold text-[#1A5C3A] underline underline-offset-4"
                  >
                    Review the provider&rsquo;s public page
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="section-overline mb-4 text-[#3A9E6A]">Red Flags</p>
              <h2 className="text-3xl font-extrabold text-white">Claims that deserve another question</h2>
              <ul className="mt-8 space-y-4 text-sm leading-relaxed text-[#C8EDD2]/75">
                <li>Guaranteed recommendations, permanent AI rankings, or guaranteed citation volume</li>
                <li>A proprietary score with no visible question set, source record, or coding rule</li>
                <li>Special schema presented as a direct command to an AI system</li>
                <li>Platform impressions or citations reported as customers</li>
                <li>Generic content production with no public-source correction or independent corroboration</li>
                <li>No explanation of who owns implementation after the diagnostic is delivered</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <p className="section-overline mb-4 text-[#3A9E6A]">Sequoia&rsquo;s Standard</p>
              <h2 className="text-2xl font-extrabold text-white">Verify the problem before selling the correction.</h2>
              <p className="mt-5 text-sm leading-relaxed text-[#C8EDD2]/75">
                Sequoia starts with the public surface, documents what can and cannot be supported,
                and keeps visibility stages separate. The first review is free. Paid work begins only
                after the evidence defines the actual scope.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/ai-search-assessment" className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-[#1A5C3A]">
                  Request an assessment
                </Link>
                <Link href="/ai-seo-pricing" className="rounded-lg border border-white/20 px-6 py-3 text-center font-semibold text-white">
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="section-overline mb-4 text-center">Questions</p>
          <h2 className="text-center text-3xl font-extrabold text-[#0D2318]">Before choosing an AI SEO agency</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-gray-200 bg-[#fafaf8] p-6">
                <summary className="cursor-pointer font-bold text-[#0D2318]">{faq.question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
