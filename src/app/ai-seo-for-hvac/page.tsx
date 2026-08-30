import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import TradeAiSearchNav from "@/components/TradeAiSearchNav";

export const metadata: Metadata = {
  title: "AI SEO for HVAC Companies | AI Search Visibility",
  description:
    "Evidence-first AI SEO for HVAC companies. Improve crawlability, entity clarity, service evidence, and measurement across conventional and AI-assisted search.",
  alternates: { canonical: "https://www.sequoiageo.com/ai-seo-for-hvac" },
};

const faqs = [
  {
    question: "What is AI SEO for HVAC companies?",
    answer:
      "AI SEO applies established SEO foundations to the questions customers ask in AI-assisted search. For an HVAC company, that includes crawl access, accurate services and service areas, consistent business facts, first-hand expertise, independent corroboration, and repeated observation of whether the business is mentioned, cited, or recommended. No provider controls the answer an AI product gives.",
  },
  {
    question: "Is AI SEO different from HVAC SEO?",
    answer:
      "It is an extension of HVAC SEO, not a replacement. The website still needs to be crawlable, useful, technically sound, and locally relevant. AI SEO adds source reconciliation and controlled observation of generated answers, while measuring citations, recommendations, referral visits, inquiries, and qualified leads separately.",
  },
  {
    question: "What makes HVAC difficult for AI search systems to interpret?",
    answer:
      "HVAC companies often have overlapping service, installation, emergency, maintenance, equipment, rebate, and geographic information. Dealer claims, licenses, locations, acquisitions, and service areas may also conflict across the public web. The work begins by determining which facts are current and which sources support them.",
  },
  {
    question: "How does Sequoia measure HVAC AI search visibility?",
    answer:
      "Sequoia freezes a relevant question set, records the platform, date, geography, answer, sources, and repeated observations, then separates mentions, recommendations, citations, referral visits, inquiries, and qualified leads. A screenshot is an observation, not proof of stable visibility or business impact.",
  },
];

const workAreas = [
  {
    title: "Retrieval and crawl access",
    body: "Confirm that the pages explaining services, equipment, locations, and expertise can be crawled and indexed through ordinary search infrastructure.",
  },
  {
    title: "Business and service clarity",
    body: "Reconcile company names, locations, licenses, service areas, hours, equipment types, financing, and emergency availability across owned and third-party sources.",
  },
  {
    title: "First-hand HVAC evidence",
    body: "Publish useful explanations grounded in real field experience, including diagnostic process, equipment decisions, maintenance questions, rebates, and homeowner expectations.",
  },
  {
    title: "Independent corroboration",
    body: "Compare the website with public profiles, reviews, manufacturer records, association listings, local coverage, and other sources that may confirm or contradict the business.",
  },
  {
    title: "Controlled answer observation",
    body: "Test a frozen set of customer and buyer questions repeatedly, while recording the visible product, geography, answer, cited sources, and limitations.",
  },
  {
    title: "Qualified-demand measurement",
    body: "Keep AI referrals, inquiries, qualification, meetings, and jobs booked separate so attention is not reported as a business result.",
  },
];

export default function AiSeoForHvacPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "AI SEO", url: "https://www.sequoiageo.com/geo-agency" },
          { name: "AI SEO for HVAC", url: "https://www.sequoiageo.com/ai-seo-for-hvac" },
        ]}
      />
      <ServiceJsonLd
        serviceType="AI SEO for HVAC Companies"
        description="Evidence-first AI SEO for HVAC companies, built on crawlability, accurate public business information, first-hand evidence, independent corroboration, and staged measurement."
        url="https://www.sequoiageo.com/ai-seo-for-hvac"
      />
      <FaqJsonLd faqs={faqs} />

      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1A5C3A]">
              AI SEO for HVAC companies
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Help AI search understand your HVAC company before it decides which sources to use
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
              Sequoia GEO establishes what is true, corrects public contradictions, strengthens useful
              HVAC evidence, and measures generated answers without treating a mention as a lead.
              Traditional SEO remains the foundation.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/ai-search-assessment"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#0D2318]"
              >
                Request an AI Search Visibility Review
              </Link>
              <Link
                href="/ai-search-methodology"
                className="inline-flex items-center justify-center rounded-lg border border-[#1A5C3A]/30 bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:border-[#1A5C3A]"
              >
                See How We Measure It
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TradeAiSearchNav currentHref="/ai-seo-for-hvac" />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1A5C3A]">Why HVAC is different</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              One company can represent dozens of services, systems, brands, and customer situations
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Emergency repair, replacement, heat pumps, indoor air quality, maintenance, rebates, and
              commercial work create different questions. AI systems also encounter changing service
              areas, manufacturer claims, licenses, locations, and reviews across many sources.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workAreas.map((area) => (
              <div key={area.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-lg font-extrabold text-[#0D2318]">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#3A9E6A]">The measurement boundary</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              AI visibility is not one metric
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              A cited page does not prove the company was recommended. A recommendation does not prove
              a visit. A visit does not prove an inquiry or a qualified lead. Sequoia records each stage
              separately and preserves the limitations of the observation.
            </p>
            <Link href="/proof-system" className="mt-6 inline-block font-semibold text-[#C8EDD2] underline underline-offset-4">
              Review the Sequoia Proof System
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-extrabold text-white">Questions an HVAC AI Search program should test</h3>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/75">
              <li>Who should I call for emergency AC repair in this service area?</li>
              <li>Which companies install and service the equipment involved?</li>
              <li>Which public sources support the business facts in the answer?</li>
              <li>Does the same business appear across repeated, controlled observations?</li>
              <li>Can an AI referral be joined to an inquiry and qualification decision?</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F1F6F2] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0D2318] sm:text-4xl">Start with a documented HVAC baseline</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            We review how the business is represented across its website and public sources, then define
            the questions and evidence required before recommending a scope.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/ai-search-assessment" className="rounded-lg bg-[#1A5C3A] px-8 py-4 font-semibold text-white hover:bg-[#0D2318]">
              Request the Review
            </Link>
            <Link href="/ai-seo-pricing" className="font-semibold text-[#1A5C3A] underline underline-offset-4">
              Review AI SEO pricing and scope
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
