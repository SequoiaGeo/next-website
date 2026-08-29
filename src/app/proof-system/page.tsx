import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { evidenceClasses, proofRequirements, proofStatuses } from "@/data/proof-system";

export const metadata: Metadata = {
  title: "The Sequoia Proof System | Evidence Standards",
  description:
    "How Sequoia GEO establishes what is true, corrects what is broken, verifies the result, and limits every marketing claim to the available evidence.",
  alternates: {
    canonical: "https://www.sequoiageo.com/proof-system",
  },
};

const process = [
  {
    number: "01",
    title: "Establish what is true",
    body: "We preserve the starting condition and identify its source, definition, date range, and limits. If a baseline does not exist, we say so instead of constructing one after the fact.",
  },
  {
    number: "02",
    title: "Correct what is broken",
    body: "We name the defect, record the work completed, and separate our correction from strengths the business already had.",
  },
  {
    number: "03",
    title: "Verify the result",
    body: "We test the corrected condition against a stated acceptance check. A page loading, a form arriving, and a job being booked are different results and remain separate.",
  },
  {
    number: "04",
    title: "Report only what follows",
    body: "We label later observations by their actual stage and state what they do not establish. Work completed is not automatically a lead, and a lead is not automatically a job booked.",
  },
];

const outcomeLadder = [
  ["System condition", "A page, profile, campaign, integration, or tracking path can be inspected."],
  ["Correction", "A named defect was changed and recorded."],
  ["Verification", "The corrected condition passed its defined check."],
  ["Platform activity", "A platform recorded visibility, engagement, a call, or a form event."],
  ["Inquiry", "A real person contacted the business about a possible need."],
  ["Qualified lead", "The business and need meet the client-approved qualification rule."],
  ["Job booked", "The operating business confirmed the booking under its normal definition."],
];

const refusalRules = [
  "We do not use a client's financial performance as Sequoia proof.",
  "We do not turn a platform conversion into a customer.",
  "We do not call an AI citation a recommendation.",
  "We do not claim a before-and-after result when the baseline was off or unavailable.",
  "We do not claim causation from timing alone.",
  "We do not present an inherited rating, review count, or search position as work Sequoia created.",
  "We do not name a client, shape a quotation, or publish private operating evidence without permission.",
  "We do not blame a competitor or prior vendor when the evidence establishes only a defect or incomplete handoff.",
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "The Sequoia Proof System",
  description:
    "A public evidence standard for establishing baselines, documenting corrections, verifying conditions, and limiting marketing claims to what the evidence supports.",
  author: {
    "@type": "Person",
    "@id": "https://www.sequoiageo.com/#aaron-husak",
    name: "Aaron Husak",
  },
  publisher: {
    "@id": "https://www.sequoiageo.com/#organization",
  },
  datePublished: "2026-08-29",
  dateModified: "2026-08-29",
  version: "1.0",
  mainEntityOfPage: "https://www.sequoiageo.com/proof-system",
};

export default function ProofSystemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "Proof System", url: "https://www.sequoiageo.com/proof-system" },
        ]}
      />

      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-overline mb-4">Public evidence standard, version 1.0</p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              The Sequoia Proof System
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-2xl font-semibold leading-relaxed text-[#C8EDD2]">
              We establish what is true, correct what is broken, and verify the result before we
              call it marketing success.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#C8EDD2]/75">
              This is the standard Sequoia now applies to new and revised assessments, case
              studies, and client reporting. It keeps technical work, platform activity, leads,
              and jobs booked from being blended into one flattering number.
            </p>
            <p className="mt-6 text-sm text-[#C8EDD2]/55">
              Published August 29, 2026. Current version 1.0.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="section-overline mb-4">The operating method</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Four steps before a success claim
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {process.map((step) => (
                <article key={step.number} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                  <p className="text-sm font-extrabold uppercase tracking-wider text-[#1A5C3A]">
                    {step.number}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-[#0D2318]">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="section-overline mb-4">Proof status</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              The label is set by the evidence
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
              Every published proof record receives one of these labels. The limitation travels
              with the claim so readers can see what the evidence supports and where it stops.
              Status describes what has been established. Evidence class identifies where the fact
              came from. Neither label replaces the other.
            </p>
            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="hidden grid-cols-[0.6fr_1.1fr_1.1fr] gap-6 bg-[#0D2318] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white md:grid">
                <span>Status</span>
                <span>What it means</span>
                <span>What it does not establish</span>
              </div>
              {proofStatuses.map((status) => (
                <article
                  key={status.id}
                  className="grid gap-3 border-t border-gray-200 px-6 py-6 first:border-t-0 md:grid-cols-[0.6fr_1.1fr_1.1fr] md:gap-6"
                >
                  <h3 className="font-bold text-[#0D2318]">{status.label}</h3>
                  <p className="leading-relaxed text-gray-700">{status.definition}</p>
                  <p className="leading-relaxed text-gray-500">{status.doesNotEstablish}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="section-overline mb-4">Evidence class</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Where the claim came from matters
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {evidenceClasses.map((item) => (
                <article key={item.id} className="rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-[#0D2318]">{item.label}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{item.definition}</p>
                  <p className="mt-4 border-t border-gray-100 pt-4 leading-relaxed text-gray-500">
                    <strong className="text-[#1A5C3A]">Publication rule:</strong> {item.publicationRule}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="section-overline mb-4">The outcome ladder</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Each stage answers a different question
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#C8EDD2]/75">
              Progress can move through these stages. We do not skip a stage or promote a record
              because the later label would sound more impressive.
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#C8EDD2]/65">
              If the required evidence for a stage is unavailable, the record stays Not established
              and does not enter the ladder.
            </p>
            <ol className="mt-10 grid gap-4">
              {outcomeLadder.map(([label, definition], index) => (
                <li key={label} className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-[70px_180px_1fr] sm:items-center">
                  <span className="text-2xl font-extrabold text-[#3A9E6A]">{index + 1}</span>
                  <strong className="text-white">{label}</strong>
                  <span className="leading-relaxed text-[#C8EDD2]/75">{definition}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl bg-[#C8EDD2] p-7 text-[#0D2318]">
              <p className="text-lg font-bold">Causation is a separate claim.</p>
              <p className="mt-2 leading-relaxed">
                A result observed after our work is reported as observed after. We use causal
                language only when the comparison design supports it, such as a valid pre-period,
                holdout, or controlled panel.
              </p>
            </div>
            <p className="mt-6 max-w-4xl leading-relaxed text-[#C8EDD2]/70">
              AI search uses a channel-specific expansion of platform activity: Mentioned,
              Recommended, Primary recommendation, Cited, and Referral visit. Inquiry, Qualified
              lead, and Job booked remain distinct stages. The AI page applies Sequoia&rsquo;s own
              pipeline qualification rule as a business-specific instance of the general rule
              above. The{" "}
              <Link href="/ai-search-methodology" className="font-bold text-white underline decoration-[#3A9E6A] underline-offset-4">
                AI search measurement method
              </Link>{" "}
              defines those additional observations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
            <div>
              <p className="section-overline mb-4">Before publication</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
                Every proof record must carry its context
              </h2>
              <ul className="mt-7 space-y-4">
                <li className="flex items-start gap-3 leading-relaxed text-gray-700">
                  <span aria-hidden="true" className="mt-1 text-[#1A5C3A]">✓</span>
                  <span>At least one affirmative, evidenced fact about the work or condition</span>
                </li>
                {proofRequirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed text-gray-700">
                    <span aria-hidden="true" className="mt-1 text-[#1A5C3A]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-overline mb-4">Our refusal list</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
                What we will not turn into proof
              </h2>
              <ul className="mt-7 space-y-4">
                {refusalRules.map((item) => (
                  <li key={item} className="rounded-xl border border-gray-200 bg-white p-5 leading-relaxed text-gray-700">
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
            <p className="section-overline mb-4">See the standard applied</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              One proof system, different kinds of work
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Client proof migration",
                  body: "Our current case-study library is being migrated to verified starting conditions, corrections, checks, and evidence limits as records and permissions are confirmed.",
                  href: "/case-studies",
                  cta: "View current case studies",
                },
                {
                  title: "AI search",
                  body: "See how we separate mentions, recommendations, citations, visits, inquiries, and jobs booked.",
                  href: "/ai-search-methodology",
                  cta: "Read the AI method",
                },
                {
                  title: "Your business",
                  body: "Start with a public-surface assessment that documents the current condition before recommendations are made.",
                  href: "/audit",
                  cta: "Request an assessment",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                  <h3 className="text-xl font-bold text-[#0D2318]">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{item.body}</p>
                  <Link href={item.href} className="mt-6 inline-flex font-bold text-[#1A5C3A] hover:text-[#0D2318]">
                    {item.cta}<span aria-hidden="true" className="ml-2">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1A5C3A] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">Changelog</h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-[#C8EDD2]/80">
            Version 1.0 published the four-step operating method, six proof statuses, six evidence
            classes, outcome ladder, causation rule, publication requirements, and refusal list.
          </p>
        </div>
      </section>
    </>
  );
}
