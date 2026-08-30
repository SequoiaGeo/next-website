import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import InlineLeadForm from "@/components/InlineLeadForm";
import AiSearchTrustPanel from "@/components/AiSearchTrustPanel";

export const metadata: Metadata = {
  title: "Free AI Search Snapshot | Sequoia GEO",
  description:
    "See what ChatGPT, Google AI, Gemini, and other AI search products can verify about your business. Request a hand-reviewed AI Search Snapshot.",
  alternates: { canonical: "https://www.sequoiageo.com/ai-search-assessment" },
};

const reviewAreas = [
  {
    title: "Business identity",
    body: "We compare the name, location, services, credentials, and ownership story across your website and public sources. Contradictions stay visible until they can be resolved.",
  },
  {
    title: "Retrieval and citations",
    body: "We inspect whether useful pages can be crawled, retrieved, and cited. A citation is recorded separately from a business mention or recommendation.",
  },
  {
    title: "Recommendation questions",
    body: "We define the commercial questions a customer could ask, then document what appears without presenting one favorable answer as a permanent rank.",
  },
  {
    title: "Independent corroboration",
    body: "We identify the official records, profiles, reviews, associations, and editorial sources that support or conflict with what the business says about itself.",
  },
  {
    title: "Website evidence",
    body: "We review service clarity, first-hand expertise, internal links, technical access, and whether visible structured data agrees with the page.",
  },
  {
    title: "Measurement path",
    body: "We separate visibility from outcomes so mentions, citations, visits, inquiries, qualified leads, and jobs are not blended into one impressive-looking number.",
  },
];

const stages = [
  ["Mentioned", "The business appears in the answer."],
  ["Recommended", "The business is presented as a provider worth considering."],
  ["Primary recommendation", "The business is presented first or most strongly in that observation."],
  ["Cited", "A page connected to the business appears as a source."],
  ["Referral visit", "A visitor reaches the website from an identifiable AI source."],
  ["Inquiry", "A person contacts the business."],
  ["Qualified lead", "The inquiry is a real business need the company can address."],
  ["Job booked", "The business confirms an appointment or job under its own operating definition."],
];

const faqs = [
  {
    question: "What is included in the free AI Search Snapshot?",
    answer:
      "The AI Search Snapshot reviews the public information that search and AI systems can retrieve before account access. It documents business-identity conflicts, relevant pages and sources, an initial question set, visible citations or recommendations, and the next corrections that deserve verification.",
  },
  {
    question: "Will this guarantee that ChatGPT recommends my business?",
    answer:
      "No. AI answers can vary by product, session, location, wording, and time. Sequoia documents observable answers, strengthens the public evidence supporting the business, and measures each stage separately. No agency can guarantee a durable recommendation from an independent AI system.",
  },
  {
    question: "Is an AI Search assessment the same as an SEO audit?",
    answer:
      "They overlap, but the question is different. A general SEO audit examines search visibility and website performance. The AI Search assessment focuses on whether the business can be identified, retrieved, supported by public evidence, cited, and recommended across AI-assisted search experiences.",
  },
  {
    question: "Do I need to provide account access?",
    answer:
      "Not for the public snapshot. If the evidence points to an account-level issue, we identify the exact system and access needed before deeper verification begins.",
  },
  {
    question: "What happens after the assessment?",
    answer:
      "You receive the findings and a prioritized correction path. You may implement the work internally, ask an existing provider to handle it, or discuss a paid Sequoia engagement for verification and execution.",
  },
];

export default function AiSearchAssessmentPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "AI Search Assessment", url: "https://www.sequoiageo.com/ai-search-assessment" },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      <section id="assessment-form" className="scroll-mt-20 bg-[#0D2318] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <div>
            <p className="section-overline mb-4 text-[#3A9E6A]">Free AI Search Snapshot</p>
            <h1 className="font-serif text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
              See what AI search can actually verify about your business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#C8EDD2]/80">
              We document where your business appears, how consistently it appears, which sources
              support the answer, and what the evidence can actually prove.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#C8EDD2]/65">
              This is a dated, controlled sample, not a universal rank, and it does not assume that a
              later inquiry came from an observed answer.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Public first", "No account access to begin"],
                ["Hand reviewed", "Not an automated score"],
                ["Evidence labeled", "No recommendation guarantee"],
              ].map(([title, body]) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-bold text-white">{title}</p>
                  <p className="mt-1 text-sm text-[#C8EDD2]/65">{body}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm leading-relaxed text-[#C8EDD2]/65">
              Need the broader marketing scorecard instead?{" "}
              <Link className="font-semibold text-white underline underline-offset-4" href="/audit">
                Review the general marketing audit
              </Link>
              .
            </p>
          </div>

          <div className="[&>section]:bg-transparent [&>section]:py-0 [&>section>div]:max-w-none [&>section>div]:px-0">
            <InlineLeadForm
              source="ai_search_assessment_page"
              heading="Request your AI Search Snapshot"
              subtext="Tell me which business to review. I examine the public surface personally before requesting access to anything else."
              buttonText="Request My AI Search Snapshot"
              collectCompany
              companyLabel="Business name"
              companyPlaceholder="Your business"
            />
          </div>
        </div>
      </section>

      <AiSearchTrustPanel />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-overline mb-4">What We Examine</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Six surfaces behind an AI-generated answer
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              AI visibility is not controlled by one tag or one page. The assessment documents the
              evidence available to a search system and the gaps that prevent a confident answer.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviewAreas.map((area, index) => (
              <article key={area.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <p className="text-sm font-black text-[#1A5C3A]">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-bold text-[#0D2318]">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-overline mb-4 text-[#3A9E6A]">Measurement Standard</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Visibility and business outcomes are different stages.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#C8EDD2]/75">
              The assessment does not turn an appearance into a lead. Each observation keeps its
              original meaning.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map(([title, body]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C8EDD2]/65">{body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/ai-search-methodology"
            className="mt-8 inline-flex font-semibold text-[#C8EDD2] underline underline-offset-4"
          >
            Read the complete measurement methodology
          </Link>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <p className="section-overline mb-3">What You Receive</p>
              <h2 className="text-2xl font-extrabold text-[#0D2318]">Your AI Search Snapshot</h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-gray-600">
                <li>Business identity and public-source conflict notes</li>
                <li>An initial commercial question set</li>
                <li>Observed mentions, recommendations, citations, and absences</li>
                <li>Pages and sources supporting or weakening the answer</li>
                <li>A prioritized correction and verification path</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[#C8EDD2]/40 p-8">
              <p className="section-overline mb-3">What It Is Not</p>
              <h2 className="text-2xl font-extrabold text-[#0D2318]">A manufactured AI score</h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#0D2318]/75">
                <li>Not a permanent ranking across every user and product</li>
                <li>Not proof that one change caused a recommendation</li>
                <li>Not an account-level audit before access is approved</li>
                <li>Not a promise of citations, leads, or jobs</li>
                <li>Not a substitute for technical SEO or local search fundamentals</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/case-studies/ai-search-readiness" className="rounded-lg bg-[#1A5C3A] px-6 py-3 font-semibold text-white">
              See an AI readiness case study
            </Link>
            <Link href="/ai-seo-pricing" className="rounded-lg border border-[#1A5C3A] px-6 py-3 font-semibold text-[#1A5C3A]">
              Review engagement pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="section-overline mb-4 text-center">Questions</p>
          <h2 className="text-center text-3xl font-extrabold text-[#0D2318]">Before you request the assessment</h2>
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

      <section className="bg-[#1A5C3A] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-extrabold text-white">Start with what can be verified.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#C8EDD2]/80">
            Request the public snapshot first. If the findings support deeper work, we decide what
            evidence and access are needed next.
          </p>
          <a href="#assessment-form" className="mt-7 inline-flex rounded-lg bg-white px-7 py-3.5 font-semibold text-[#1A5C3A]">
            Request My AI Search Snapshot
          </a>
        </div>
      </section>
    </main>
  );
}
