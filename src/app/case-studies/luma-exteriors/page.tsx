import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luma Exteriors Case Study | Sequoia GEO",
  description:
    "How an Austin exteriors company went from 9 Google reviews to 28 at a 5.0 and took the top 3 of the map pack across 88 to 96 percent of its service area.",
  alternates: {
    canonical: "https://www.sequoiageo.com/case-studies/luma-exteriors",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Owning the map: how an Austin exteriors company took the top 3 across its service area",
  description:
    "How Luma Exteriors in Austin, Texas went from 9 Google reviews to 28 at a 5.0 rating and took the top 3 of the map pack across 88 to 96 percent of its service area through Google Business Profile and Local Services Ads management.",
  author: {
    "@type": "Person",
    "@id": "https://www.sequoiageo.com/#aaron-husak",
    name: "Aaron Husak",
  },
  publisher: {
    "@id": "https://www.sequoiageo.com/#organization",
  },
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  mainEntityOfPage: "https://www.sequoiageo.com/case-studies/luma-exteriors",
};

const stats = [
  { value: "9 → 28", label: "Google reviews, all at a 5.0" },
  { value: "88-96%", label: "Of the service area in the map pack top 3" },
  { value: "61", label: "June profile interactions, up 39% over May" },
  { value: "~49", label: "Directories kept in sync" },
];

export default function LumaExteriorsCaseStudy() {
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
              Luma Exteriors
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              Owning the map: how an Austin exteriors company took the top 3 of the map pack
              across its service area. Premium siding, windows, and doors in one of the most
              competitive home improvement markets in Texas.
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
              Engagement: Google Business Profile management, Local Services Ads management
            </p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Where they started
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Luma does high-end exterior work, siding, windows, and doors with Pella, James
                Hardie, and Sherwin Williams products, in one of the most competitive home
                improvement markets in Texas. When we took over their local presence, the
                business had 9 Google reviews. The work deserved better than the profile showed,
                and in local search, the profile is the storefront.
              </p>
              <p>
                For an exteriors company, the map is the battlefield. When an Austin homeowner
                searches &ldquo;siding contractor,&rdquo; the three businesses in the map pack
                get the calls. Everyone below the fold splits the leftovers.
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
                No secret weapon, just the disciplines that move a Business Profile, run as a
                standing weekly system:
              </p>
              <ul className="space-y-4 list-disc pl-6">
                <li>
                  <strong>Reviews, treated as the number one ranking input.</strong> We built
                  the ask into the rhythm of the business and kept it running.
                </li>
                <li>
                  <strong>Posting cadence.</strong> Project showcases, before and afters,
                  seasonal content, several times a week, every week, with the client&rsquo;s
                  real photos.
                </li>
                <li>
                  <strong>Listings consistency.</strong> Name, address, and phone synced across
                  roughly 49 directories so Google never sees a conflicting signal.
                </li>
                <li>
                  <strong>LSA management with teeth.</strong> We monitor every Local Services
                  Ads lead as it arrives, respond fast because Google ranks responsiveness, and
                  dispute the leads that should never have been charged. When a lead came in
                  this June that did not fit Luma&rsquo;s work, we flagged it and submitted it
                  to Google for a billing credit the same week.
                </li>
              </ul>
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
                <strong>Reviews grew from 9 to 28, every one of them at a 5.0 rating.</strong>{" "}
                Tripled, with not a single star dropped along the way.
              </p>
              <p>
                <strong>
                  A grid scan of their service area shows Luma in the top 3 of the map pack
                  across 88 to 96 percent of their territory
                </strong>{" "}
                for their core searches, &ldquo;siding contractor&rdquo; and &ldquo;siding
                installer near me.&rdquo; That is not a single lucky pin position. That is the
                map, owned, across the area they actually serve.
              </p>
              <p>
                <strong>June 2026 was their best month of the year for profile activity:</strong>{" "}
                61 customer interactions (calls, direction requests, website clicks, messages),
                up 39 percent over May.
              </p>
              <p>
                The honest caveat we would want if we were the ones reading this: top-3 map
                coverage is measured against a May 2026 baseline scan and holds on their core
                terms; the material-specific searches (vinyl siding installation, fiber cement
                siding installation) still have room to climb, and that is exactly where the
                review velocity gets pointed next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - The takeaway */}
      <section className="bg-[#1a1a1a] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="section-overline mb-4">The Takeaway</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Local search is not won with a trick.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-400">
              <p>
                It is won with review velocity, a profile that stays active, consistent data,
                and somebody actually watching the leads. Do those four things relentlessly and
                the map pack follows. Luma&rsquo;s crews did the work that earned 5.0 stars. Our
                job was making sure Google, and every homeowner searching, could see it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attribution + CTA */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-extrabold text-white">
            Want your map owned like this?
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
            Map positions from an 88-point grid scan of the service area, baselined May 28,
            2026. Interaction figures from the Business Profile performance panel for June
            2026. Published with the client&rsquo;s approval.
          </p>
        </div>
      </section>
    </>
  );
}
