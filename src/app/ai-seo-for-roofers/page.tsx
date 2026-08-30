import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import TradeAiSearchNav from "@/components/TradeAiSearchNav";

export const metadata: Metadata = {
  title: "AI SEO for Roofers | Roofing AI Search Visibility",
  description:
    "Evidence-first AI SEO for roofing companies. Clarify services, markets, credentials, storm information, and public proof across conventional and AI-assisted search.",
  alternates: { canonical: "https://www.sequoiageo.com/ai-seo-for-roofers" },
};

const faqs = [
  {
    question: "What is AI SEO for roofing companies?",
    answer:
      "AI SEO applies established SEO foundations to AI-assisted search. For a roofing company, that includes crawl access, accurate repair and replacement information, truthful service areas and credentials, first-hand project evidence, independent corroboration, and repeated observation of mentions, citations, and recommendations.",
  },
  {
    question: "Does roofing AI SEO replace roofing SEO?",
    answer:
      "No. Search and AI-assisted answers rely on crawlable, useful, technically sound pages and trustworthy public information. AI SEO adds source reconciliation and controlled answer observation. It does not create a separate ranking system or guarantee that an AI product will recommend a company.",
  },
  {
    question: "What roofing information creates AI search conflicts?",
    answer:
      "Common conflicts include service areas, local offices, licenses, manufacturer credentials, storm and insurance language, financing, warranties, review counts, and whether the company performs repairs, replacements, or both. Sequoia verifies the current facts before proposing corrections.",
  },
  {
    question: "How should roofing AI visibility be measured?",
    answer:
      "Measure a frozen set of questions repeatedly and record the platform, date, geography, answer, and cited sources. Keep mentions, recommendations, citations, referral visits, inquiries, qualified leads, and jobs booked separate. None of those stages alone proves causation.",
  },
];

const workAreas = [
  {
    title: "Repair, replacement, and storm intent",
    body: "Separate the needs a homeowner expresses after a leak, an inspection, a hail event, or an aging-roof decision instead of treating every roofing question as the same search.",
  },
  {
    title: "Locations and service areas",
    body: "Distinguish real offices, verified service areas, and market-specific pages without manufacturing local presence or repeating city names across thin pages.",
  },
  {
    title: "Credentials and public facts",
    body: "Reconcile licenses, insurance, certifications, manufacturer relationships, warranties, financing, and years in business across the sources a buyer may encounter.",
  },
  {
    title: "First-hand project evidence",
    body: "Publish project conditions, material decisions, inspection findings, workmanship explanations, and dated photographs that demonstrate what the company actually knows and performs.",
  },
  {
    title: "Independent corroboration",
    body: "Compare owned claims with public profiles, licensing records, reviews, supplier or manufacturer records, association listings, and relevant local coverage.",
  },
  {
    title: "Measured recommendation testing",
    body: "Observe a frozen question panel across defined products and sessions, while keeping citations, recommendations, referrals, inquiries, and qualified demand separate.",
  },
];

export default function AiSeoForRoofersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "AI SEO", url: "https://www.sequoiageo.com/geo-agency" },
          { name: "AI SEO for Roofers", url: "https://www.sequoiageo.com/ai-seo-for-roofers" },
        ]}
      />
      <ServiceJsonLd
        serviceType="AI SEO for Roofing Companies"
        description="Evidence-first AI SEO for roofing companies, built on crawlability, accurate service and market information, first-hand project evidence, independent corroboration, and staged measurement."
        url="https://www.sequoiageo.com/ai-seo-for-roofers"
      />
      <FaqJsonLd faqs={faqs} />

      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1A5C3A]">
              AI SEO for roofing companies
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Make your roofing services, markets, credentials, and proof easier to verify in AI search
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
              Sequoia GEO establishes what is true, corrects conflicting public information, strengthens
              first-hand roofing evidence, and measures generated answers without confusing visibility
              with a qualified lead. Traditional SEO remains the foundation.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/ai-search-assessment" className="rounded-lg bg-[#1A5C3A] px-8 py-4 font-semibold text-white hover:bg-[#0D2318]">
                Request an AI Search Visibility Review
              </Link>
              <Link
                href="/ai-search-methodology"
                className="rounded-lg border border-[#1A5C3A]/30 bg-white px-8 py-4 font-semibold text-[#1A5C3A] hover:border-[#1A5C3A]"
              >
                See How We Measure It
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TradeAiSearchNav currentHref="/ai-seo-for-roofers" />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1A5C3A]">Why roofing is different</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              A roofing recommendation depends on more than a service keyword
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Repair, replacement, inspections, materials, insurance, financing, credentials, storms,
              and geography all affect the answer. Public claims must also remain accurate when teams,
              locations, licenses, and manufacturer relationships change.
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
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#3A9E6A]">The proof boundary</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              A citation and a recommendation are different observations
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              A roofing page can be cited without the company being named. A company can be named without
              being presented as the primary choice. Sequoia records the visible answer, cited sources,
              repeated observations, referral traffic, and later business stages separately.
            </p>
            <Link href="/proof-system" className="mt-6 inline-block font-semibold text-[#C8EDD2] underline underline-offset-4">
              Review the Sequoia Proof System
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-extrabold text-white">Questions a roofing AI Search program should test</h3>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/75">
              <li>Who should a homeowner call for a roof leak or storm inspection?</li>
              <li>Which companies perform repairs, replacements, or the material requested?</li>
              <li>Which public sources support the credentials and service area in the answer?</li>
              <li>Does the same provider appear across repeated, controlled observations?</li>
              <li>Can an AI referral be joined to an inquiry and qualification decision?</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F1F6F2] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0D2318] sm:text-4xl">Start with a documented roofing baseline</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            We review how the company is represented across its website and public sources, then define
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
