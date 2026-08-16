import Link from "next/link";
import type { Metadata } from "next";
import YouTubeFacade from "@/components/YouTubeFacade";

export const metadata: Metadata = {
  title: "KABAM Plumbing Case Study | Sequoia GEO",
  description:
    "How an independent, owner-operated plumber in Sun City Center, Florida holds a 5.0 rating across 154 Google reviews and competes against consolidated brands with a managed profile and a rebuilt website.",
  alternates: {
    canonical: "https://www.sequoiageo.com/case-studies/kabam-plumbing",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The independent plumber holding a 5.0 with 154 reviews in a consolidator's market",
  description:
    "How KABAM Plumbing Services in Sun City Center, Florida competes against private equity consolidated brands with a managed Google Business Profile, a rebuilt website, and measurement instead of vibes.",
  author: {
    "@type": "Person",
    "@id": "https://www.sequoiageo.com/#aaron-husak",
    name: "Aaron Husak",
  },
  publisher: {
    "@id": "https://www.sequoiageo.com/#organization",
  },
  datePublished: "2026-07-08",
  dateModified: "2026-08-15",
  mainEntityOfPage: "https://www.sequoiageo.com/case-studies/kabam-plumbing",
};

const stats = [
  { value: "5.0", label: "Across 154 Google reviews" },
  { value: "116", label: "Profile call-button clicks in six months" },
  { value: "16.9K → 18.8K", label: "Search impressions in under a month" },
  { value: "1,200+", label: "Impressions on a single service-area page" },
];

export default function KabamPlumbingCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Nav strip */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
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

      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-overline mb-4">Client Case Study</p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              KABAM Plumbing Services
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              The independent plumber holding a 5.0 with 154 reviews in a consolidator&rsquo;s
              market. Owner-operated in Sun City Center, Florida. Mike Bissett answers his own
              phone.
            </p>
            <p className="mt-4 text-sm text-[#C8EDD2]/60">
              By Aaron Husak · Published July 8, 2026
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <div className="text-2xl font-extrabold text-[#3A9E6A]">{item.value}</div>
                <div className="mt-1 text-xs text-[#C8EDD2]/70 leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 - Where they started */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold text-[#1A5C3A] mb-4">
              Engagement: Google Business Profile management, full website rebuild
            </p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Where they started
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Mike is the kind of plumber private equity keeps buying: great work, loyal
                customers, real reputation. Except nobody bought Mike. He competes against the
                consolidated brands with their call centers and ad budgets, as one guy who does
                the work himself.
              </p>
              <p>
                His online presence had to punch above its weight class, because it is the only
                marketing department he has.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - What we did */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What we did
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                <strong>Google Business Profile, run like it matters.</strong> Review generation
                built into his workflow, every review answered, posting kept active, categories
                and services kept accurate. For an independent operator, the profile does the
                job a whole marketing team does for the big brands.
              </p>
              <p>
                <strong>A website he owns.</strong> We rebuilt kabamplumbingservices.com around
                the towns he actually serves, Sun City Center, Apollo Beach, Wimauma, Riverview,
                and the surrounding communities, with a page for each service area instead of
                one generic page pretending to be everywhere.
              </p>
              <p>
                <strong>Measurement instead of vibes.</strong> When Mike asked whether his calls
                were slowing down this spring, we did not guess. We pulled his numbers, showed
                him calls were actually up month over month, and identified what he was feeling:
                a seasonal dip in profile views while the rebuilt site re-indexed, already
                recovering. That is the difference between managing marketing and reassuring a
                client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - What happened */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What happened
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                <strong>A 5.0-star rating across 154 Google reviews.</strong> Not 4.8. Five
                point zero, and the count keeps growing without the score budging: 141 reviews
                at the May measurement, 154 as of this writing. The consolidated brands win on
                review volume; a perfect score with real volume behind it is the
                independent&rsquo;s counterpunch.
              </p>
              <p>
                <strong>116 Google Business Profile call-button clicks:</strong> Google&rsquo;s
                performance metric counted 116 clicks on the profile&rsquo;s call button over the
                six months through May. It does not establish completed calls, unique callers,
                qualified leads, or jobs booked.
              </p>
              <p>
                <strong>The rebuilt site indexed cleanly and is climbing.</strong> Search
                impressions grew from 16.9K to 18.8K in under a month across the trailing
                quarter, with the new service-area pages pulling their own weight (the Wimauma
                page alone drew over 1,200 impressions). Clicks held steady through the
                migration, which is the test most website rebuilds fail.
              </p>
              <p>
                The honest part: KABAM&rsquo;s rankings for the big head terms are still
                climbing, page 2 to 3 and moving, and we said so to Mike directly rather than
                dressing up impressions as leads. What is already documented is the 5.0 profile,
                the call-button interaction count, and a site that carries his real service area
                instead of fighting it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mike's video */}
      <section className="bg-[#1a1a1a] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <p className="section-overline mb-4 text-[#3A9E6A]">In His Words</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Mike, on working with us.
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Filmed in his work truck between jobs, which is exactly why it is believable.
            </p>
          </div>
          <div className="mx-auto max-w-sm">
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
                <p className="text-xs text-gray-500">Owner, KABAM Plumbing Services</p>
                <p className="text-xs text-gray-500">Sun City Center, FL</p>
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - The takeaway */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="section-overline mb-4">The Takeaway</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              An independent plumber cannot outspend the private equity brands. He can
              out-reputation them.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                A managed profile with real review velocity, a website that tells Google exactly
                where he works, and numbers watched closely enough to answer &ldquo;are calls
                down?&rdquo; with data instead of a shrug. That is the playbook, and it is
                working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attribution + CTA */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-extrabold text-white">
            Competing against the big brands on your own?
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
            >
              Book a Free Strategy Call
            </Link>
          </div>
          <p className="mt-10 text-xs leading-relaxed text-[#C8EDD2]/50">
            Review count and rating verified on the live Google Business Profile July 8, 2026.
            Call figures from the client&rsquo;s Business Profile performance panel through May
            2026. Search figures from his Google Search Console, pulled May 31 and June 25,
            2026. We publish clients&rsquo; real numbers, with their permission, or we do not
            publish at all.
          </p>
        </div>
      </section>
    </>
  );
}
