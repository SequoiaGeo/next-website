import Link from "next/link";
import type { Metadata } from "next";
import YouTubeFacade from "@/components/YouTubeFacade";

export const metadata: Metadata = {
  title: "Plumbing SEO Case Study: KABAM | Sequoia GEO",
  description:
    "How Sequoia GEO repaired a plumber's local search foundation in Lovable after the evidence did not justify forcing another website rebuild.",
  alternates: {
    canonical: "https://www.sequoiageo.com/case-studies/kabam-plumbing",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How an independent plumber strengthened its local search foundation without an unnecessary website rebuild",
  description:
    "A named plumbing SEO case study about client trust, an evidence-led platform decision, technical repairs inside Lovable, and honest measurement limits.",
  author: {
    "@type": "Person",
    "@id": "https://www.sequoiageo.com/#aaron-husak",
    name: "Aaron Husak",
  },
  publisher: {
    "@id": "https://www.sequoiageo.com/#organization",
  },
  datePublished: "2026-07-08",
  dateModified: "2026-08-28",
  mainEntityOfPage: "https://www.sequoiageo.com/case-studies/kabam-plumbing",
};

const workProof = [
  {
    value: "104",
    label: "Sitemap URLs submitted, processed, and discovered on August 14",
  },
  {
    value: "1 page",
    label: "Intended noindex directive observed in Google's live inspection",
  },
  {
    value: "1 event",
    label: "Success-only form event replaced duplicate submission events",
  },
];

const repairItems = [
  {
    title: "Metadata and missing-page handling",
    body: "We corrected missing-page metadata and created clearer fallbacks for legacy routes instead of treating a larger platform move as the first answer.",
  },
  {
    title: "Canonicals and structured data",
    body: "We removed the conflicting canonical from noindexed pages and corrected local business details, hours, and article markup where the evidence supported the change.",
  },
  {
    title: "Sitemap and internal discovery",
    body: "We reconciled the current sitemap, included the active route set, and submitted 104 URLs. Search Console processed it and reported 104 discovered URLs.",
  },
  {
    title: "Form measurement",
    body: "Three overlapping form-event names were reduced to one form_submission event that fires only after a successful submission.",
  },
];

export default function KabamPlumbingCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
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
            <p className="section-overline mb-4">Named Client Case Study</p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              How an independent plumber strengthened its local search foundation without an
              unnecessary website rebuild
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-[#C8EDD2]/85">
              After a disappointing agency experience, KABAM Plumbing waited roughly six months
              before hiring another marketing partner. Sequoia GEO audited what was actually
              broken, repaired the priority issues inside Lovable, and documented what still
              remains open.
            </p>
            <p className="mt-5 text-sm text-[#C8EDD2]/70">
              By Aaron Husak &middot; Published July 8, 2026 &middot; Updated August 28, 2026
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#3A9E6A]/40 bg-white/5 p-6 text-left sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#6FCF97]">
              What this case study proves
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/85">
              This is evidence of diagnosis, implementation, and measurement discipline. It does
              not claim that the work produced the client&rsquo;s reviews, current lead growth,
              booked jobs, revenue, or AI-search gains.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">
            {workProof.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <div className="text-2xl font-extrabold text-[#6FCF97]">{item.value}</div>
                <div className="mt-2 text-sm leading-snug text-[#C8EDD2]/75">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-[#1A5C3A]">
              Plumbing SEO &middot; Google Business Profile &middot; Website stewardship &middot;
              Measurement
            </p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              The first problem was trust
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                In the recorded testimonial used on this page with permission, KABAM&rsquo;s owner
                described losing visibility while paying a previous SEO company and waiting about
                six months before trying another marketing partner.
              </p>
              <p>
                He said the difference was working directly with Sequoia GEO founder Aaron Husak,
                whose background in the trades made it easier to turn the owner&rsquo;s field knowledge
                into clearer marketing decisions. That direct working relationship matters to an
                owner who does not want to be handed to a junior account representative.
              </p>
              <div className="rounded-xl border border-[#1A5C3A]/20 bg-[#E8F3EC] p-5 text-base leading-relaxed text-[#0D2318]">
                KABAM Plumbing is an ongoing paying client of Sequoia GEO. The video testimonial is
                used with the client&rsquo;s permission.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="section-overline mb-4">Client Context</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              A strong reputation that belongs to the plumber
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              KABAM held a 5.0 Google rating across 166 reviews when verified August 14, 2026. The
              profile showed 141 reviews in May and 154 on July 8. KABAM earned those reviews
              through its customer work. The count is context for the reputation Sequoia GEO is
              responsible for representing accurately, not a claim that Sequoia caused every new
              review.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-3xl font-extrabold text-[#0D2318]">5.0</p>
                <h3 className="mt-2 text-lg font-bold text-[#0D2318]">Google rating</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Maintained across 166 reviews as of August 14, 2026.
                </p>
              </article>
              <article className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-3xl font-extrabold text-[#0D2318]">141 to 166</p>
                <h3 className="mt-2 text-lg font-bold text-[#0D2318]">Dated review count</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  May measurement to the August 14 verification, with 154 recorded July 8.
                </p>
              </article>
              <article className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-3xl font-extrabold text-[#0D2318]">116</p>
                <h3 className="mt-2 text-lg font-bold text-[#0D2318]">Profile call-button clicks</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Six months through May 2026. These are not completed calls, inquiries, or jobs.
                </p>
              </article>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-gray-500">
              Google Business Profile reported 116 Google Business Profile call-button clicks over
              the six months through May 2026. That metric does not establish completed calls, unique callers,
              qualified leads, or jobs booked.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="section-overline mb-4">The Technical Decision</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Why we did not force another rebuild
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                A normal fetch of the Lovable site returned a thin application shell. That was a
                reason to investigate, not proof that Google could not read the website. A larger
                replatform would have introduced new migration risk before the actual defects were
                understood.
              </p>
              <p>
                We used Google Search Console&rsquo;s live URL Inspection on a tested page and
                confirmed that Google observed the intended noindex directive there. That is one
                page-level observation, not a claim that every route or crawler behavior was
                verified.
              </p>
              <p>
                The evidence available did not justify forcing a platform migration before
                repair. We kept the site in Lovable, corrected the priority issues we could verify,
                and preserved replatforming as an option if later evidence supports it. A different
                website with different defects may require a rebuild.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="section-overline mb-4">What We Repaired</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Fix the verified problems before selling a new platform
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {repairItems.map((item) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-[#0D2318]">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">{item.body}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-[#1A5C3A]/20 bg-[#E8F3EC] p-5 text-base leading-relaxed text-[#0D2318]">
              Search Console processed the 104-URL sitemap and reported 104 discovered URLs.
              Discovered is not the same as indexed, ranking, generating traffic, or producing a
              lead.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="section-overline mb-4">Historical Diagnostics</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What the pre-release search snapshots did and did not show
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Search Console showed 16.9K impressions in a trailing-quarter pull dated May 31,
                2026 and 18.8K in a pull dated June 25, 2026. Trailing-quarter clicks across the
                available snapshots stayed in a narrow range of 117 to 125.
              </p>
              <p>
                Those windows overlap and both predate the August technical release. They are
                historical visibility and engagement diagnostics, not a before-and-after trend,
                not evidence that the August work caused growth, and not evidence of inquiries or
                jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-overline mb-4 text-[#3A9E6A]">In His Words</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Why the owner was willing to try again
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-400">
              The client describes his prior experience, hesitation, and direct work with Sequoia
              GEO. Financial claims from the testimonial are not repeated as Sequoia results on
              this page.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-sm">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <div className="mx-auto w-full max-w-[280px]">
                <div
                  className="relative w-full overflow-hidden rounded-xl bg-black shadow-2xl"
                  style={{ paddingBottom: "177.78%" }}
                >
                  <YouTubeFacade
                    videoId="IpbCaelX2jo"
                    title="Michael Bissett of KABAM Plumbing on working with Sequoia GEO"
                    isShort
                  />
                </div>
              </div>
              <footer className="mt-6 border-t border-white/10 pt-5 text-center">
                <p className="text-sm font-semibold text-white">Michael Bissett</p>
                <p className="text-sm text-gray-400">Owner, KABAM Plumbing Services</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  Ongoing paying client. Video used with permission.
                </p>
              </footer>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="section-overline mb-4">Measurement With Limits</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Cleaner measurement may produce a lower number
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                The prior analytics setup recorded the same successful form under three event
                names. We replaced those duplicate names with one success-only event. Counts after
                the correction may appear lower because one submission is no longer recorded more
                than once.
              </p>
              <p>
                That is a measurement correction, not a decline and not proof of more leads.
                Visibility, clicks, profile contact attempts, confirmed inquiries, and booked jobs
                remain separate stages.
              </p>
              <p>
                Known open issues include the apex redirect, missing-route status-code behavior,
                complete crawler-output parity, and end-to-end inquiry-to-booked-job attribution.
                The page does not claim that every technical or measurement issue is fixed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-extrabold text-white">
            Does your website need repair or a rebuild?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#C8EDD2]/80">
            Sequoia GEO starts with the evidence. Your assessment explains what is verified, what
            remains uncertain, and which work deserves attention first.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
            >
              Request a Free Assessment
            </Link>
          </div>
          <p className="mt-10 text-sm leading-relaxed text-[#C8EDD2]/60">
            Sources: the client&rsquo;s Google Business Profile and Google Search Console, Google
            URL Inspection, analytics implementation records, sitemap processing record, and
            approved client video. Every platform number is dated and defined on the page.
          </p>
        </div>
      </section>
    </>
  );
}
