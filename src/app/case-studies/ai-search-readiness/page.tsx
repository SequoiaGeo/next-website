import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Hicks Paving AI Search Readiness Snapshot | Sequoia GEO",
  description:
    "A permissioned, dated example of how Sequoia GEO audits conflicting public business information before making AI Search claims.",
  alternates: { canonical: "https://www.sequoiageo.com/case-studies/ai-search-readiness" },
};

const findings = [
  {
    title: "The public identity was split",
    finding:
      "The current LLC and the prior operating identity appeared across separate profiles, phone numbers, addresses, review records, and directory pages. A search system had to infer which record represented the current business.",
    source: "Public profiles and direct Google Maps observations",
    sourceType: "Self-recorded public observation",
  },
  {
    title: "Official records needed entity-level context",
    finding:
      "Virginia records distinguish the current Hicks Paving LLC Class A license from an older sole-proprietor record. Several public surfaces did not clearly distinguish the current LLC from the legacy identity.",
    source: "Virginia Department of Professional and Occupational Regulation",
    sourceType: "Official primary record",
  },
  {
    title: "The website described the wrong organizations to machines",
    finding:
      "The homepage structured data named two unrelated companies. The visible website said Hicks Paving, while the machine-readable identity said something else.",
    source: "Live homepage source captured during the audit",
    sourceType: "Self-recorded public observation",
  },
  {
    title: "Legacy URLs and indexation created avoidable noise",
    finding:
      "Priority legacy pages returned errors instead of reaching current equivalents, while the thank-you page was indexable and included in the sitemap.",
    source: "Direct URL, robots, and sitemap checks",
    sourceType: "Self-recorded public observation",
  },
  {
    title: "Review equity was divided across identities",
    finding:
      "The most substantial Google review history remained attached to the legacy identity, while a newer profile represented the current business. The assessment treated that as an entity and reputation problem, not a reason to discard legitimate reviews.",
    source: "Direct Google Maps observations",
    sourceType: "Self-recorded public observation",
  },
] as const;

const sequence = [
  "Confirm the canonical legal name, license, primary phone, address treatment, and relationship to the legacy identity.",
  "Correct owned website identity, structured data, indexation, and one-to-one redirects before creating more pages.",
  "Choose a policy-compliant Google profile path that protects legitimate review history without combining unrelated entities by assumption.",
  "Prepare source-specific correction briefs for directories and profiles the business can control or claim.",
  "Only then run a controlled AI Search observation panel and report mentions, recommendations, citations, and absences separately.",
] as const;

export default function HicksPavingAiSearchReadinessPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "Case Studies", url: "https://www.sequoiageo.com/case-studies" },
          { name: "Hicks Paving AI Search Readiness Snapshot", url: "https://www.sequoiageo.com/case-studies/ai-search-readiness" },
        ]}
      />
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="section-overline mb-4 text-[#82D2A0]">Permissioned named example</p>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            What the Hicks Paving public footprint showed before AI Search work began
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#C8EDD2]/80">
            A dated example of why Sequoia establishes one defensible business identity before trying
            to influence how search engines or AI assistants describe a company.
          </p>
          <div className="mt-8 max-w-4xl rounded-2xl border border-white/15 bg-white/5 p-6 text-sm leading-relaxed text-[#C8EDD2]/80">
            This page shows what the August 14, 2026 public-surface assessment found and the correction
            sequence it produced. It does not show a change in AI assistant recommendations, leads,
            jobs, or business results. Those outcomes were not measured in this assessment.
          </div>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Scope", "Public website, profiles, maps, official records, directories, reviews, and observable search readiness"],
              ["Evidence date", "August 14, 2026"],
              ["Evidence expiry", "Treat the observations as historical after November 12, 2026 unless they are reverified"],
              ["Permission", "Client approved use of Hicks Paving as the named example"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-6">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#3A9E6A]">{label}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <p className="section-overline mb-4">What the evidence showed</p>
            <h2 className="text-3xl font-extrabold text-[#0D2318] sm:text-4xl">Five conflicts that had to be separated</h2>
            <div className="mt-10 space-y-5">
              {findings.map((item, index) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 p-7 sm:p-8">
                  <div className="flex gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C8EDD2] font-extrabold text-[#0D2318]">{index + 1}</span>
                    <div>
                      <h3 className="text-xl font-bold text-[#0D2318]">{item.title}</h3>
                      <p className="mt-3 leading-relaxed text-gray-700">{item.finding}</p>
                      <dl className="mt-5 grid gap-3 text-sm text-gray-600 sm:grid-cols-3">
                        <div><dt className="font-bold text-[#0D2318]">Source</dt><dd className="mt-1">{item.source}</dd></div>
                        <div><dt className="font-bold text-[#0D2318]">Source type</dt><dd className="mt-1">{item.sourceType}</dd></div>
                        <div><dt className="font-bold text-[#0D2318]">Checked</dt><dd className="mt-1">August 14, 2026</dd></div>
                      </dl>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="section-overline mb-4">What the assessment produced</p>
          <h2 className="text-3xl font-extrabold text-[#0D2318] sm:text-4xl">A correction order, not another generic content plan</h2>
          <ol className="mt-10 space-y-4">
            {sequence.map((item, index) => (
              <li key={item} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6">
                <span className="font-extrabold text-[#3A9E6A]">{String(index + 1).padStart(2, "0")}</span>
                <span className="leading-relaxed text-gray-700">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0D2318]">What was not measured</h2>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li>No analytics, Search Console, advertising, call-tracking, or CRM accounts were reviewed.</li>
                <li>No test lead was submitted.</li>
                <li>No controlled ChatGPT, Gemini, or Google AI recommendation panel was run.</li>
                <li>No recommendation, lead, job, or causation result is claimed.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#3A9E6A]/25 bg-[#C8EDD2]/25 p-7">
              <h2 className="text-2xl font-extrabold text-[#0D2318]">Why that limit matters</h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                AI answers can change by product, wording, location, account state, and date. A public
                evidence audit can show why a business is difficult to resolve, but it cannot prove
                what every assistant showed or what caused a later customer decision.
              </p>
              <Link href="/ai-search-methodology" className="mt-6 inline-flex font-bold text-[#1A5C3A] underline underline-offset-4">See how later observations are measured</Link>
            </div>
          </div>
          <p className="mt-10 text-sm leading-relaxed text-gray-500">
            Last reviewed August 30, 2026. Public records and profiles can change after the evidence date.
            Treat these observations as historical after November 12, 2026 unless they are reverified.
            This is a marketing and public-surface assessment, not a legal opinion.
          </p>
        </div>
      </section>
      <section className="bg-[#1A5C3A] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">Find the conflicts affecting your public story</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#C8EDD2]/85">Start with a hand-reviewed public-surface snapshot before deciding what deserves implementation.</p>
          <Link href="/ai-search-assessment" className="mt-7 inline-flex rounded-lg bg-white px-7 py-3.5 font-bold text-[#1A5C3A]">Request an AI Search Snapshot</Link>
        </div>
      </section>
    </main>
  );
}
