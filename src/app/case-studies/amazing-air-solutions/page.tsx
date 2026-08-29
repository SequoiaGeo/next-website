import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazing Air Solutions Website Rebuild Case Study | Sequoia GEO",
  description:
    "A protected implementation record showing how Sequoia GEO mapped legacy URLs, repaired customer access, audited technical search signals, and clarified measurement for Amazing Air Solutions.",
  robots: { index: false, follow: false },
};

const implementationMetrics = [
  { value: "129", label: "Post-launch sitemap URLs audited" },
  { value: "4", label: "Schema and sitemap defects fixed" },
  { value: "3", label: "Customer-path defects addressed" },
  { value: "4", label: "Primary identity records aligned" },
];

const workstreams = [
  {
    number: "01",
    title: "Legacy content and URL planning",
    body: "The pre-rebuild inventory cataloged 189 legacy pages and created a URL map before migration work. That figure is an archive inventory, not a count of pages that remained live after launch or proof that rankings were preserved.",
  },
  {
    number: "02",
    title: "Customer access",
    body: "We repaired nonfunctional mobile navigation buttons, made the hidden mobile menu control visible, and corrected the scheduling widget configuration. A contact form remains available as a fallback, but end-to-end form delivery is still being verified.",
  },
  {
    number: "03",
    title: "Technical search QA",
    body: "A later audit checked the 129 URLs in the published sitemap. It identified four specific schema and sitemap defects, all documented as corrected and deployed. This is an implementation result, not a ranking or traffic result.",
  },
  {
    number: "04",
    title: "Local identity",
    body: "The current San Antonio identity was aligned across the website, Google Business Profile, Google Local Services surface, and one managed listing record. Other third-party directories remain unresolved and are not claimed as consistent.",
  },
];

export default function AmazingAirSolutionsCaseStudy() {
  return (
    <>
      <div className="border-b border-amber-200 bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-3 text-center text-sm font-semibold text-amber-900 lg:px-8">
          Protected Preview draft. Client review of the named implementation details is required
          before public release.
        </div>
      </div>

      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1A5C3A] transition-colors hover:text-[#0D2318]"
          >
            <span aria-hidden="true">&larr;</span>
            Back to Case Studies
          </Link>
        </div>
      </div>

      <main>
        <section className="bg-[#0D2318] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-overline mb-4">Website Rebuild Implementation Record</p>
              <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Amazing Air Solutions: a rebuild documented from URL mapping through live QA
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/85">
                Sequoia GEO rebuilt the San Antonio HVAC company&rsquo;s website, repaired critical
                customer-access problems, audited the technical search foundation, and aligned the
                primary business identity records.
              </p>
              <p className="mt-6 text-base leading-relaxed text-[#C8EDD2]/70">
                This page documents work completed and limits still open. It does not claim that
                the rebuild increased traffic, rankings, leads, bookings, or return.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {implementationMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <div className="text-2xl font-extrabold text-[#6FCF97]">{metric.value}</div>
                  <div className="mt-2 text-sm leading-snug text-[#C8EDD2]/70">{metric.label}</div>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-6 max-w-5xl text-center text-sm leading-relaxed text-[#C8EDD2]/60">
              These are dated implementation outputs. They are not lead, booking, customer,
              ranking, traffic, or revenue results.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="section-overline mb-4">Where the Rebuild Started</p>
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                The legacy site was inventoried before the new structure was judged.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                The rebuild kit cataloged 189 legacy pages and created a URL map for migration
                planning. The work preserved a record of the old content and routes before the new
                website replaced the prior system.
              </p>
              <p>
                A post-launch sitemap audit later checked 129 URLs. The 189-page archive and the
                129-URL sitemap audit are different inventories. They are not a before-and-after
                page count, and neither number proves that search performance was retained.
              </p>
              <p>
                The defensible story is the process: inventory first, mapping second, live checks
                after launch, and no performance claim without performance evidence.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fafaf8] py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="section-overline mb-4">What We Changed</p>
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                URL planning, customer access, technical QA, and local identity moved together.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {workstreams.map((item) => (
                <article key={item.number} className="rounded-2xl border border-gray-200 bg-white p-7">
                  <div className="text-sm font-extrabold tracking-[0.16em] text-[#3A9E6A]">
                    {item.number}
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-[#0D2318]">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <p className="section-overline mb-4">The Four Technical Corrections</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              The August 1 audit found a narrow, documented defect set.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 p-7">
                <h3 className="text-xl font-bold text-[#0D2318]">Duplicate rating markup</h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Multiple pages stacked a second rated business node over the sitewide record. The
                  duplicate nodes were removed.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-7">
                <h3 className="text-xl font-bold text-[#0D2318]">Conflicting coordinates</h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Two pages carried geographic coordinates that conflicted with the primary site
                  record. The records were aligned to one San Antonio location.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-7">
                <h3 className="text-xl font-bold text-[#0D2318]">Missing review-page entry</h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  The live reviews page was absent from the sitemap. It was added to the published
                  sitemap.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-7">
                <h3 className="text-xl font-bold text-[#0D2318]">Redirecting sitemap entry</h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  The sitemap listed a gallery URL that redirected elsewhere. The redirecting entry
                  was removed.
                </p>
              </div>
            </div>
            <p className="mt-8 text-base leading-relaxed text-gray-500">
              The audit also found an installation-cost article with no internal links outside the
              blog index. Two links from the relevant service page were added. None of these changes
              establishes a ranking or traffic outcome.
            </p>
          </div>
        </section>

        <section className="bg-[#fafaf8] py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <p className="section-overline mb-4">Where Measurement Stands</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Correcting a measurement setting is not the same as proving a customer outcome.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-[#3A9E6A]/25 bg-[#EAF6EE] p-7">
                <p className="font-semibold text-[#0D2318]">What was corrected</p>
                <p className="mt-3 leading-relaxed text-[#1A5C3A]">
                  Advertising conversion tagging that had not been recording was repaired. Several
                  conversion actions were also narrowed so reporting would not treat unlike events
                  as the same business result.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-7">
                <p className="font-semibold text-[#0D2318]">What remains open</p>
                <p className="mt-3 leading-relaxed text-gray-600">
                  End-to-end form delivery and attribution from traffic source through booked job
                  remain unverified. The contact form cannot be described as a proven backup intake
                  path until that delivery check is complete.
                </p>
              </div>
            </div>
            <p className="mt-8 text-lg leading-relaxed text-gray-600">
              That is why this case study reports implementation work and no lead, booking, ranking,
              traffic, impression, or return figures. Those outcomes require a complete evidence
              path, not a platform event or a configuration change.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-12">
              <p className="section-overline mb-4">What Is Still Unresolved</p>
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                The open items stay visible instead of being written out of the story.
              </h2>
              <ul className="mt-7 space-y-4 text-lg leading-relaxed text-gray-600">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3A9E6A]" />
                  Some third-party directory records still need controlled correction and recheck.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3A9E6A]" />
                  Form acceptance, intake receipt, and the resulting business record are not yet one
                  verified chain.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3A9E6A]" />
                  Source-to-booked-job attribution remains incomplete, so channel performance is not
                  claimed here.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3A9E6A]" />
                  The 60,000-impression figure proposed for this story is excluded because no retained
                  source record substantiates it.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#0D2318] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="section-overline mb-4">The Takeaway</p>
            <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
              A rebuild should leave an evidence trail, not just a new design.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#C8EDD2]/80">
              Sequoia GEO documents the legacy structure, tests the customer path, checks the
              technical search foundation, and separates implementation activity from business
              outcomes that have actually been verified.
            </p>
            <div className="mt-8">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
              >
                Request a Free Marketing Assessment
              </Link>
            </div>
            <p className="mt-10 text-sm leading-relaxed text-[#C8EDD2]/55">
              Source record: rebuild inventory dated April 2026; customer-path fixes documented May
              17 and 18, 2026; technical audit dated August 1, 2026; and local identity and
              measurement reviews updated through August 25, 2026. The client approved use of the
              company name in case-study materials on July 24, 2026. The named defect narrative
              still requires client review before public release. No private owner quotation is
              used.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
