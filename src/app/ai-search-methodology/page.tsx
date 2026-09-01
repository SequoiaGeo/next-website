import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "AI Search Measurement Methodology | Sequoia GEO",
  description:
    "How Sequoia GEO distinguishes AI mentions, recommendations, citations, referrals, inquiries, qualified leads, and jobs booked.",
  alternates: {
    canonical: "https://www.sequoiageo.com/ai-search-methodology",
  },
};

const definitions = [
  {
    stage: "Mentioned",
    definition: "The business appears anywhere in the response.",
    doesNotProve: "That the assistant recommends hiring the business.",
  },
  {
    stage: "Recommended",
    definition: "The response presents the business as a plausible provider to hire.",
    doesNotProve: "That the business is the first or strongest recommendation.",
  },
  {
    stage: "Primary recommendation",
    definition: "The response presents the business first or as the clearest recommended provider.",
    doesNotProve: "That the position will repeat for another user or another run.",
  },
  {
    stage: "Cited",
    definition: "A page from the business is shown as a source in the answer.",
    doesNotProve: "That the business itself was mentioned or recommended.",
  },
  {
    stage: "Referral visit",
    definition: "A captured website session arrives from an identified AI source or registered campaign link.",
    doesNotProve: "That the visitor became an inquiry or that every AI referral was captured.",
  },
  {
    stage: "Inquiry",
    definition: "A real person contacts the business about a possible service need.",
    doesNotProve: "That the business, need, authority, or source meets the qualification rule.",
  },
  {
    stage: "Qualified lead",
    definition: "A real business, an addressable Sequoia GEO need, and a decision-maker response or meeting are established.",
    doesNotProve: "That the opportunity will become a customer or job booked.",
  },
  {
    stage: "Job booked",
    definition: "The operating business confirms a booked job under its normal written definition.",
    doesNotProve: "That a prior citation or prompt observation caused the booking.",
  },
];

const protocol = [
  {
    title: "Freeze the question set",
    body: "Pre-register a frozen core of commercial and control questions, plus a separately reported rotating set. Record the geography and inclusion rules before the wave begins. Do not rewrite questions after seeing the answers.",
  },
  {
    title: "Control the session",
    body: "Use a fresh session with memory disabled where the product permits it. Record the platform, visible product, app or web surface, account state, search or browse state, device, geography, location method, and date.",
  },
  {
    title: "Repeat each observation",
    body: "Run each frozen question five times in separate fresh sessions per platform. The prompt-platform cell is the analysis unit. The repeats measure answer stability and are not treated as statistically independent trials.",
  },
  {
    title: "Archive before coding",
    body: "Preserve the complete response privately with the timestamp, visible citations, companies named, and search state. Code the observation only after the artifact is saved.",
  },
  {
    title: "Code each stage separately",
    body: "Record mentioned, recommended, primary, cited, or absent independently. A cited Sequoia page does not automatically create a Sequoia recommendation.",
  },
  {
    title: "Check coding reliability",
    body: "Have an independent second reviewer code at least 20 percent of observations before drawing a conclusion. Preserve both decisions, report disagreements by field, and stop publication when a material code cannot be resolved against the public definition.",
  },
];

const confidenceLevels = [
  {
    label: "Recorded",
    definition: "Directly logged inside a named instrument, within that instrument's stated coverage.",
  },
  {
    label: "Observed",
    definition: "Preserved under a documented prompt and session protocol on a stated date.",
  },
  {
    label: "Inferred",
    definition: "Supported by evidence only when the assumption connecting the evidence is stated.",
  },
  {
    label: "Unknown",
    definition: "No available instrument or identity-level join can verify the claim.",
  },
];

const answerEvidenceChain = ["Eligibility", "Citation", "Mention", "Recommendation"];
const businessEvidenceChain = ["Identifiable referral", "Inquiry", "Qualified lead", "Job booked"];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Sequoia GEO AI Search Measurement Methodology",
  description:
    "A public methodology for distinguishing AI mentions, recommendations, citations, referrals, inquiries, qualified leads, and jobs booked.",
  author: {
    "@type": "Person",
    "@id": "https://www.sequoiageo.com/#aaron-husak",
    name: "Aaron Husak",
  },
  publisher: {
    "@id": "https://www.sequoiageo.com/#organization",
  },
  datePublished: "2026-08-20",
  dateModified: "2026-08-30",
  version: "1.4",
  mainEntityOfPage: "https://www.sequoiageo.com/ai-search-methodology",
};

export default function AiSearchMethodologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "AI SEO", url: "https://www.sequoiageo.com/geo-agency" },
          {
            name: "AI Search Measurement Methodology",
            url: "https://www.sequoiageo.com/ai-search-methodology",
          },
        ]}
      />

      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-overline mb-4">Public methodology, version 1.4</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              How Sequoia GEO measures AI search without turning visibility into a lead
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-[#C8EDD2]/80">
              AI answers change. Citations are not recommendations. Referral visits are not inquiries.
              This page defines every stage before Sequoia reports it.
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#C8EDD2]/60">
              Sequoia built the AI Search Evidence System used inside its AI SEO engagements. The
              current release combines dated manual question panels, public-source reconciliation,
              lead attribution, and the evidence stages defined below. An automated OpenAI query and
              source collector is still pilot-only until its first live observation is validated. The
              system is included in the engagement, not sold as a separate software subscription.
            </p>
            <p className="mt-6 text-sm text-[#C8EDD2]/55">
              Published August 20, 2026. Last revised August 30, 2026.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#C8EDD2]/70">
              This AI-specific method operates under the broader{" "}
              <Link href="/proof-system" className="font-bold text-white underline decoration-[#3A9E6A] underline-offset-4">
                Sequoia Proof System
              </Link>
              , which governs evidence classes, corrections, verification, causation, and publication limits across all client work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="section-overline mb-4">Confidence and coverage</p>
            <h2 className="max-w-4xl text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              How confident can an AI visibility assessment be?
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
              We document where your business appears, how consistently it appears, which sources
              support the answer, and what the evidence can actually prove. A controlled prompt panel
              measures the conditions we record. It does not represent every question, user, location,
              or AI session.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {confidenceLevels.map((item) => (
                <article key={item.label} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-[#0D2318]">{item.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.definition}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-[#3A9E6A]/25 bg-white p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-wider text-[#1A5C3A]">
                    Generated-answer evidence
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {answerEvidenceChain.map((stage) => (
                      <div key={stage} className="rounded-lg bg-[#C8EDD2]/45 px-3 py-3 text-center text-sm font-semibold text-[#0D2318]">
                        {stage}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-dashed border-[#1A5C3A]/40 bg-[#fafaf8] px-5 py-4 text-center lg:max-w-[220px]">
                  <p className="font-bold text-[#0D2318]">Measurement gap</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Most AI products do not preserve an identity-level join from a generated answer to
                    the person who later visits or contacts the business.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-extrabold uppercase tracking-wider text-[#1A5C3A]">
                    Business-outcome evidence
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {businessEvidenceChain.map((stage) => (
                      <div key={stage} className="rounded-lg bg-[#0D2318] px-3 py-3 text-center text-sm font-semibold text-white">
                        {stage}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-gray-600">
                Sequoia reports both chains, but does not fill the gap with an assumed attribution.
                A change is described as movement only when the comparison uses a frozen panel and an
                appropriate reference, such as untreated pages, reference prompts, or a no-intervention arm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="section-overline mb-4">The reporting ladder</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Eight stages, eight different claims
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
              A result can move through several stages, but it is counted once at each stage and never
              promoted without the required evidence.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
              This page applies Sequoia&rsquo;s own pipeline qualification rule as a business-specific
              instance of the general qualification rule in the Sequoia Proof System.
            </p>
            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
              <div className="hidden grid-cols-[0.55fr_1.15fr_1.15fr] gap-6 bg-[#0D2318] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white md:grid">
                <span>Stage</span>
                <span>What it means</span>
                <span>What it does not prove</span>
              </div>
              {definitions.map((item) => (
                <article
                  key={item.stage}
                  className="grid gap-3 border-t border-gray-200 bg-white px-6 py-6 first:border-t-0 md:grid-cols-[0.55fr_1.15fr_1.15fr] md:gap-6"
                >
                  <h3 className="font-bold text-[#0D2318]">{item.stage}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{item.definition}</p>
                  <p className="text-sm leading-relaxed text-gray-500">{item.doesNotProve}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-overline mb-4">Controlled prompt observations</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                How an observation wave is run
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                The goal is a repeatable sample with known limitations, not a screenshot selected
                because it looks favorable.
              </p>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-2">
              {protocol.map((item, index) => (
                <li key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7">
                  <p className="text-sm font-extrabold tracking-widest text-[#3A9E6A]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-[#0D2318]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
            <div>
              <p className="section-overline mb-4">Variance and limits</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                AI answers are observations, not universal rankings
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                <p>
                  Results can vary by platform, product version, prompt wording, geography, account
                  state, memory, retrieval behavior, and date. Repeated observations reduce the risk of
                  overreacting to one answer, but they do not create a market-wide ranking.
                </p>
                <p>
                  Multiple runs of the same question on the same platform are correlated observations.
                  Sequoia uses those repeats to describe stability, not to inflate the sample size or
                  imply statistical independence.
                </p>
                <p>
                  Sequoia reports platforms separately and preserves misses as well as appearances.
                  Results are expressed as observed counts or shares within the frozen sample, never as
                  universal search volume.
                </p>
                <p>
                  A 30-day review can identify implementation failures. Material recommendation changes
                  are evaluated over 60 to 90 days after discovery and indexing, with no guarantee that a
                  correction will change an independently controlled answer.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#3A9E6A]/25 bg-[#C8EDD2]/20 p-8">
              <h3 className="text-xl font-bold text-[#0D2318]">Required context for a published number</h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-gray-700">
                {[
                  "Business or property measured",
                  "Platform, account report, and metric definition",
                  "Exact date range and read date",
                  "Prompt panel, frozen or rotating arm, repetitions, and session controls",
                  "App or web surface, account state, device, geography, and location method",
                  "Whether the result is observed, self-reported, reconstructed, or unavailable",
                  "Explicit statement of what the metric does not establish",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Referral evidence",
                  body: "Analytics can capture some assistant referrals and registered tracking links. Direct calls, copied links, privacy controls, and untagged journeys can leave the source unknown.",
                },
                {
                  title: "Reported recommendations",
                  body: "A prospect's account of how they found Sequoia is valuable intake evidence. Without the original artifact, it is not proof of the exact prompt, answer, or causal source.",
                },
                {
                  title: "Commercial outcomes",
                  body: "Inquiries, qualified leads, meetings, and jobs booked are reconciled in the operating system. A citation or scheduled calendar event cannot be substituted for qualification.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#C8EDD2]/65">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="section-overline mb-4">Publication rules</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            What Sequoia commits to publishing honestly
          </h2>
          <ul className="mt-8 space-y-5 text-base leading-relaxed text-gray-700">
            {[
              "Publish misses and absences alongside favorable observations.",
              "Do not imply that a correction caused a recommendation without a defensible design and observation window.",
              "Keep customer identity, artifacts, and outcomes private unless written permission covers the specific publication.",
              "Separate owned-page citations from independent corroboration.",
              "Preserve the frozen question set for the reporting period and date later additions separately.",
              "Update definitions through a visible changelog instead of silently rewriting prior results.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C8EDD2] text-xs font-extrabold text-[#0D2318]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 p-7">
            <h2 className="text-xl font-bold text-[#0D2318]">Changelog</h2>
            <div className="mt-5 grid gap-3 text-sm text-gray-600 sm:grid-cols-[140px_1fr]">
              <p className="font-semibold text-[#1A5C3A]">August 30, 2026</p>
              <p>Version 1.4 added explicit confidence labels, documented the gap between generated-answer evidence and identifiable business outcomes, and expanded prompt-panel and session controls.</p>
              <p className="font-semibold text-[#1A5C3A]">August 29, 2026</p>
              <p>Version 1.3 placed this channel-specific method under the Sequoia Proof System and clarified how Sequoia&rsquo;s pipeline qualification rule relates to the general proof standard.</p>
              <p className="font-semibold text-[#1A5C3A]">August 21, 2026</p>
              <p>Version 1.2 documented Sequoia&rsquo;s included AI Search Evidence System, identified the automated collector as pilot-only pending live validation, and clarified that the system is delivery infrastructure rather than a separate software product.</p>
              <p className="font-semibold text-[#1A5C3A]">August 21, 2026</p>
              <p>Version 1.1 clarified that repeat runs within a prompt-platform cell measure stability and are not statistically independent trials.</p>
              <p className="font-semibold text-[#1A5C3A]">August 20, 2026</p>
              <p>Version 1.0 published with stage definitions, five-run observation protocol, variance rules, source context, privacy boundaries, and publication commitments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            See what this method looks like when applied
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#C8EDD2]/80">
            Read the current Sequoia visibility snapshot or request a public-surface assessment for your business.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/geo-agency" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]">
              View the AI SEO Evidence Page
            </Link>
            <Link href="/ai-search-assessment" className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:border-white">
              Request an AI Search Snapshot
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
