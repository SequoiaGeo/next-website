import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Fireman's Chimney Sweep Case Study | Sequoia GEO",
  description:
    "A new website that hit page one in its first month, for a firefighter-owned chimney company that had never measured anything. Website rebuild, local SEO, and measurement from day one.",
  alternates: {
    canonical: "https://www.sequoiageo.com/case-studies/firemans-chimney-sweep",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "A new website that hit page one in its first month, for a company that had never measured anything",
  description:
    "How A Fireman's Chimney Sweep in Emmett, Idaho went from an unmeasured template site to a page-one presence in its first month, with analytics, call tracking, and form tracking wired from day one.",
  author: {
    "@type": "Person",
    "@id": "https://www.sequoiageo.com/#aaron-husak",
    name: "Aaron Husak",
  },
  publisher: {
    "@id": "https://www.sequoiageo.com/#organization",
  },
  datePublished: "2026-07-07",
  dateModified: "2026-07-07",
  mainEntityOfPage: "https://www.sequoiageo.com/case-studies/firemans-chimney-sweep",
};

const stats = [
  { value: "367", label: "Google reviews at a 4.8 rating" },
  { value: "3 weeks", label: "To page one for core chimney terms" },
  { value: "5.8", label: "Average search position, first month" },
  { value: "56 → 87", label: "Lighthouse mobile performance score" },
];

export default function FiremansChimneySweepCaseStudy() {
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
              A Fireman&rsquo;s Chimney Sweep
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              A new website that hit page one in its first month, for a company that had never
              measured anything. Firefighter-owned, based in Emmett, Idaho, serving Boise and 27
              surrounding towns.
            </p>
            <p className="mt-4 text-sm text-[#C8EDD2]/60">
              By Aaron Husak · Published July 7, 2026
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
              Engagement: website rebuild, local SEO, Google Business Profile management, review
              management, analytics
            </p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Where they started
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Bryan runs a chimney company built on reputation: 367 Google reviews at a 4.8,
                earned one fireplace at a time. His website did not match the business. It was a
                dated template site, and in all the years it had been up, nothing had ever been
                measured. No analytics. No conversion tracking. No way to know if the website
                produced a single job.
              </p>
              <p>
                That is more common than most contractors think. The phone rings, the trucks stay
                busy, and nobody can say which dollar of marketing did it.
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
                We rebuilt the site from scratch and treated the launch like a migration, not a
                redo. Every page of the old site that had standing in Google got a permanent
                redirect to its replacement, so the rankings the business had earned were carried
                over instead of thrown away.
              </p>
              <p>
                The new build: a page for every service, a page for every one of the 28 towns
                Bryan actually serves, written with real local detail instead of copy-pasted
                templates. Mobile performance went from a 56 to an 87 on Google&rsquo;s own
                Lighthouse test, because a chimney customer on a phone does not wait ten seconds
                for a hero image.
              </p>
              <p>
                Then we turned the lights on: analytics, call tracking, and form tracking wired
                from day one, so every lead has a source. When Bryan asked for the service-request
                form to require the customer&rsquo;s address so he could quote accurately on the
                first call, it was live the same day.
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
                Within three weeks of launch, Google had the new site on page one for the searches
                that matter to this business: chimney cleaning, chimney inspection, and chimney
                sweep terms in the Boise area. Across its first full month, the site averaged
                position 5.8 for every query it appeared on, and Google showed it in results more
                than 8,000 times.
              </p>
              <p>
                We will be straight about the volume: chimney work is seasonal, and summer is the
                quiet season. The clicks in month one were modest, and anyone who promises
                otherwise in June is selling you something. What the first month proved is
                position. The site enters the busy season ranking, indexed, and measured, which is
                the entire point of building in the off-season.
              </p>
              <p>
                Service requests now come through the site with everything Bryan needs to quote,
                and he can see where each one came from.
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
              You do not need a decade of SEO history to rank.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-400">
              <p>
                You need a technically clean site, pages that reflect the real business, a launch
                that protects what you already earned, and measurement from day one. Reputation
                did the rest here, because 367 Google reviews at a 4.8 were always the strongest
                asset this company had. The website finally caught up to it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attribution + CTA */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-extrabold text-white">
            Ready for a website that earns its keep?
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
            Every number in this case study comes from the client&rsquo;s own Google Search
            Console, Google Business Profile, and Lighthouse tests, not from an agency dashboard.
            Review count and search positions verified July 7, 2026. Published with the
            owner&rsquo;s permission.
          </p>
        </div>
      </section>
    </>
  );
}
