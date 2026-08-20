import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "When AI Cannot Resolve a Local Business | Sequoia GEO",
  description:
    "An anonymized public-surface diagnostic showing how conflicting identity, profile, website, and directory information can make a local business harder for AI search to understand.",
  alternates: {
    canonical: "https://www.sequoiageo.com/case-studies/ai-search-readiness",
  },
};

const conflictLayers = [
  {
    number: "01",
    title: "The business identity did not have one source of truth",
    text: "The current business, its former public identity, and its legal record were all visible online without a clear transition story. A person can sometimes infer the relationship. A retrieval system should not have to guess.",
  },
  {
    number: "02",
    title: "Local profiles told different versions of the story",
    text: "Profiles, phone numbers, addresses, and review equity were divided across more than one record. That creates uncertainty about which profile is current and which proof belongs to it.",
  },
  {
    number: "03",
    title: "The website gave machines the wrong identity",
    text: "The visible site described one company, while machine-readable organization data identified unrelated businesses. This is not cosmetic metadata. It is an instruction about who the site represents.",
  },
  {
    number: "04",
    title: "Old content was still competing to define the business",
    text: "Legacy URLs, cached pages, and outdated claims remained discoverable after a rebuild. New pages cannot fully establish the current record while stale pages are left to answer the same questions.",
  },
  {
    number: "05",
    title: "Third-party proof was contradictory",
    text: "Directories and review surfaces repeated old details and conflicting trust signals. Some may be inaccurate, but they are still part of the public evidence a buyer or AI system can encounter.",
  },
];

const correctionSequence = [
  "Establish one owner-approved canonical business record before changing profiles or citations.",
  "Correct owned website identity, including organization and local-business structured data.",
  "Choose the eligible Google Business Profile path, then preserve legitimate review equity where the platform permits.",
  "Redirect or retire priority legacy URLs and remove non-converting utility pages from search indexing.",
  "Correct the priority third-party records, document submission status, and keep unresolved records visible in the closeout.",
  "Run a documented prompt panel at the beginning and close of the work, while treating the observations as point-in-time rather than a ranking guarantee.",
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "When AI Cannot Resolve a Local Business",
  description:
    "An anonymized public-surface diagnostic showing how conflicting identity, profile, website, and directory information can make a local business harder for AI search to understand.",
  author: {
    "@type": "Person",
    "@id": "https://www.sequoiageo.com/#aaron-husak",
    name: "Aaron Husak",
  },
  publisher: {
    "@id": "https://www.sequoiageo.com/#organization",
  },
  datePublished: "2026-08-20",
  dateModified: "2026-08-20",
  mainEntityOfPage: "https://www.sequoiageo.com/case-studies/ai-search-readiness",
};

export default function AiSearchReadinessFieldNote() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "Case Studies", url: "https://www.sequoiageo.com/case-studies" },
          {
            name: "AI Search Readiness",
            url: "https://www.sequoiageo.com/case-studies/ai-search-readiness",
          },
        ]}
      />

      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1A5C3A] transition-colors hover:text-[#0D2318]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Case Studies
          </Link>
        </div>
      </div>

      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-overline mb-4">Anonymized GEO Field Note</p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              When AI Cannot Resolve a Local Business
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-[#C8EDD2]/80">
              An AI-search readiness diagnosis of a local contractor whose public information
              was asking search engines, customers, and retrieval systems to reconcile several
              versions of the same company.
            </p>
            <p className="mx-auto mt-6 max-w-2xl rounded-xl border border-[#C8EDD2]/15 bg-white/5 px-5 py-4 text-sm leading-relaxed text-[#C8EDD2]/70">
              This is a pre-engagement public-surface diagnostic, not a before-and-after
              performance story. The company, location, source URLs, and identifying details
              have been removed. No claim is made about rankings, AI recommendations, traffic,
              leads, or booked work.
            </p>
            <p className="mt-5 text-sm text-[#C8EDD2]/55">By Aaron Husak · August 20, 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold text-[#1A5C3A]">The question</p>
            <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Why would a real local business be hard for AI search to understand?
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                A business can have years of experience, genuine customer proof, an active
                website, and still leave AI systems with an unreliable record. AI search does
                not receive a single, authoritative answer about a company. It encounters the
                website, structured data, local profiles, reviews, directories, historical
                pages, and public records, then has to decide whether those sources describe
                the same entity.
              </p>
              <p>
                In this diagnostic, the core problem was not a lack of marketing activity. It
                was public contradiction. The current company had credible assets, but those
                assets were divided across records that did not consistently agree on identity,
                location, contact information, history, and trust signals.
              </p>
              <p>
                That does not prove any individual AI product made a particular decision.
                Model outputs vary by prompt, account, location, model version, and time. It
                does explain why recommendation-ready visibility starts with a coherent public
                record, not with a promise to appear in an answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="section-overline mb-4">What the public record showed</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Five conflicts that made the answer less trustworthy
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {conflictLayers.map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
                >
                  <p className="text-sm font-bold tracking-widest text-[#3A9E6A]">{item.number}</p>
                  <h3 className="mt-4 text-xl font-bold leading-snug text-[#0D2318]">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{item.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-gray-500">
              Observations were drawn from publicly available owned and third-party surfaces.
              They are presented as a pattern, not as a legal conclusion about any entity or
              source.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold text-[#1A5C3A]">The work comes in an order</p>
            <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Correction before content, evidence before claims
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Publishing more location pages or chasing AI mentions before the company record is
              settled would add more material to an already conflicted surface. The responsible
              sequence is to make the business legible first.
            </p>
            <ol className="mt-10 space-y-5">
              {correctionSequence.map((item, index) => (
                <li key={item} className="flex gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C8EDD2] text-sm font-extrabold text-[#0D2318]">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-lg leading-relaxed text-gray-700">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="section-overline mb-4">What this does and does not prove</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              AI visibility is a measurement problem, not a slogan.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-400">
              <p>
                This field note documents a public-information problem and the correction path.
                It does not claim a model outcome, a position, a recommendation share, or a
                commercial result. Those claims need a documented baseline, repeatable prompts,
                source review, and enough time for independently controlled systems to update.
              </p>
              <p>
                For a company with this pattern, the first evidence of progress is a cleaner
                canonical record, implemented corrections, and an honest log of what remains
                pending or outside the company&apos;s control. Only then does it make sense to
                evaluate whether public retrieval is becoming more consistent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="section-overline mb-4">Your public surface</p>
          <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
            Is public information making your company harder to recommend?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#C8EDD2]/75">
            We can identify the owned and third-party signals that need to agree before you ask
            search engines or AI systems to trust the answer.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
            >
              Request a Public-Surface Audit
            </Link>
            <Link
              href="/ai-seo-pricing"
              className="inline-flex items-center justify-center rounded-lg border border-[#C8EDD2]/35 px-8 py-4 text-base font-semibold text-white transition hover:border-[#C8EDD2]"
            >
              View GEO and AI SEO Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
