import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luma Exteriors Engagement Spotlight | Sequoia GEO",
  description:
    "How Sequoia GEO verifies Local Services Ads activity against the platform record and keeps billing states separate from lead outcomes.",
  alternates: {
    canonical: "https://www.sequoiageo.com/case-studies/luma-exteriors",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lead oversight built around the platform record",
  description:
    "A client engagement spotlight on Local Services Ads and Google Business Profile oversight, billing-state reconciliation, approval controls, and accountable reporting.",
  author: {
    "@type": "Person",
    "@id": "https://www.sequoiageo.com/#aaron-husak",
    name: "Aaron Husak",
  },
  publisher: {
    "@id": "https://www.sequoiageo.com/#organization",
  },
  datePublished: "2026-07-08",
  dateModified: "2026-08-29",
  mainEntityOfPage: "https://www.sequoiageo.com/case-studies/luma-exteriors",
};

const scope = [
  "Local Services Ads oversight",
  "Business Profile oversight",
  "Approval-gated public actions",
  "Monthly client reporting",
];

const method = [
  {
    number: "01",
    title: "Reconcile against the platform record",
    body:
      "A notification is a summary, not the ledger. We use the Local Services platform record itself when reviewing lead activity and billing status.",
  },
  {
    number: "02",
    title: "Keep billing states separate",
    body:
      "Charged, not charged, in review, submitted for dispute, and credited describe different points in the billing record. None of them proves a booked job.",
  },
  {
    number: "03",
    title: "Preserve what is still unknown",
    body:
      "We report what the available record supports, what remains unknown, and what is awaiting action. Missing evidence does not become an assumed outcome.",
  },
];

export default function LumaExteriorsCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="border-b border-amber-200 bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-3 text-center text-sm font-semibold text-amber-950 lg:px-8">
          Protected Preview draft. This revised named-client copy is not approved for Production.
        </div>
      </div>

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
            Back to Client Work
          </Link>
        </div>
      </div>

      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-overline mb-4">Client Engagement Spotlight</p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Lead oversight built around the platform record
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              Luma Exteriors engages Sequoia GEO for Local Services Ads and Google Business
              Profile oversight. The work centers on separating billing states from business
              outcomes, maintaining approval visibility, and reporting only what the record
              supports.
            </p>
            <p className="mt-4 text-sm text-[#C8EDD2]/60">
              By Aaron Husak. Originally published July 8, 2026. Revised August 29, 2026.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {scope.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-6 text-center text-sm font-semibold leading-snug text-[#C8EDD2]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-[#1A5C3A]">Why verification matters</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              A charged lead is not a booked job.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Paid local lead records answer several different questions. Was the lead charged?
                Is Google still reviewing it? Was it submitted for dispute? Did the platform later
                issue a credit? Those are billing questions. They do not establish whether the
                person was qualified, scheduled, or became a customer.
              </p>
              <p>
                Sequoia treats verification as its own operating discipline. Before a contractor
                is asked to spend more, the record should show what can be proved, what remains
                unresolved, and where the next action belongs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-[#1A5C3A]">What this engagement covers</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Oversight across the lead and public-profile record
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                The contracted scope covers Local Services Ads and Google Business Profile
                oversight. That includes reviewing paid lead billing states, monitoring the
                profile and public review surfaces for changes, maintaining visibility into
                approval queues, and producing recurring client reporting.
              </p>
              <p>
                The purpose is not to turn platform activity into a flattering number. It is to
                maintain a dependable operating record that distinguishes attention, billing,
                follow-up evidence, and business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-semibold text-[#1A5C3A]">How the reconciliation works</p>
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                Keep each stage in its proper place
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {method.map((item) => (
                <div key={item.number} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                  <p className="text-sm font-extrabold text-[#3A9E6A]">{item.number}</p>
                  <h3 className="mt-3 text-xl font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="section-overline mb-4">Operating Rhythm</p>
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Monitoring, review, and reporting have different jobs.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                The operating rhythm includes daily lead and review checks, a weekly operating
                review, and monthly client reporting. Not every layer is a client-facing report.
                The earlier layers help surface questions and pending actions before the monthly
                record is prepared.
              </p>
              <p>
                Public actions on the Business Profile remain approval-gated. Monitoring does not
                silently become publishing, and an unresolved state does not silently become a
                completed outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10">
            <p className="mb-4 text-sm font-semibold text-[#1A5C3A]">The claim boundary</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What this page covers, and what it does not
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                This page documents a verification and oversight method plus a contracted service
                scope. It does not report lead volume, rankings, review growth, lead outcomes,
                booked jobs, or financial outcomes.
              </p>
              <p>
                Sequoia reports job-level measurement only where a connected CRM and call-tracking
                record exists and has been verified against the platform record. Until that chain
                is established, billing activity and business outcomes remain separate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-extrabold text-white">
            What does your paid lead record actually prove?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#C8EDD2]/80">
            We can review the available record, separate billing states from business outcomes,
            and show you what deserves action next.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
          >
            See How We Would Reconcile It
          </Link>
          <p className="mt-10 text-sm leading-relaxed text-[#C8EDD2]/55">
            Source basis: executed service scope, documented operating configuration, monthly
            reporting files, and platform reconciliation records. Client naming was previously
            approved in writing for a website story. This revised copy requires written approval
            before Production.
          </p>
        </div>
      </section>
    </>
  );
}
