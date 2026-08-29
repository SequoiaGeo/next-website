import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Fireman's Chimney Sweep Website Rebuild | Sequoia GEO",
  description:
    "How Sequoia GEO rebuilt an unmeasured chimney-service website, improved a dated mobile lab result, corrected crawl issues, and established honest measurement.",
  alternates: {
    canonical: "https://www.sequoiageo.com/case-studies/firemans-chimney-sweep",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A Fireman's Chimney Sweep website rebuild",
  description:
    "A named case study about rebuilding an unmeasured local-service website, improving its mobile lab performance, correcting crawl issues, and establishing measurement without inventing a before-and-after growth story.",
  author: {
    "@type": "Person",
    "@id": "https://www.sequoiageo.com/#aaron-husak",
    name: "Aaron Husak",
  },
  publisher: {
    "@id": "https://www.sequoiageo.com/#organization",
  },
  datePublished: "2026-07-07",
  dateModified: "2026-08-28",
  mainEntityOfPage: "https://www.sequoiageo.com/case-studies/firemans-chimney-sweep",
};

const stats = [
  {
    value: "56 to 87",
    label: "Mobile Lighthouse performance, June 6 lab runs",
  },
  {
    value: "10.1s to 2.8s",
    label: "LCP in the same homepage lab runs",
  },
  {
    value: "8,090",
    label: "Search impressions in the 28 days ending July 7",
  },
  {
    value: "5.8",
    label: "Average position across all queries in that window",
  },
];

const workItems = [
  {
    title: "Mapped the migration",
    body: "Legacy Wix routes were mapped to current equivalents and verified after launch so customers and crawlers would continue reaching relevant pages.",
  },
  {
    title: "Corrected crawl defects",
    body: "Post-launch QA found invalid service-area combinations and non-canonical URLs in the generated sitemap. We corrected the defect and verified 214 sitemap URLs returned live pages.",
  },
  {
    title: "Matched the real service area",
    body: "Service and location coverage was built around 28 towns the owner confirmed, rather than an invented list of markets.",
  },
];

export default function FiremansChimneySweepCaseStudy() {
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
              A Fireman&rsquo;s Chimney Sweep website rebuild
            </h1>
            <p className="mt-6 text-2xl font-semibold leading-relaxed text-[#C8EDD2]">
              The business already had the reputation. The website needed to catch up.
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#C8EDD2]/80">
              Sequoia GEO rebuilt an unmeasured Wix site, corrected a mobile image-delivery defect
              after launch, aligned the new pages to the real service area, and created a record of
              what happened next.
            </p>
            <p className="mt-5 text-sm text-[#C8EDD2]/70">
              By Aaron Husak · Published July 7, 2026 · Updated August 28, 2026
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#3A9E6A]/40 bg-white/5 p-6 text-left sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#6FCF97]">
              What this evidence means
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/85">
              The previous site did not provide a dependable pre-launch analytics baseline. This
              case study does not claim traffic growth, lead growth, return on investment, or cost
              per job. It reports dated measurements and verified work completed after the June 5
              launch.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
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
              Website rebuild · Local SEO · Google Business Profile · Analytics
            </p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              A strong reputation, earned before the rebuild
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                A Fireman&rsquo;s Chimney Sweep was already well regarded locally. Its Google
                Business Profile showed a 4.8 rating across 367 reviews when verified June 16,
                2026. That credibility was earned through years of customer work, not by Sequoia
                GEO and not by the new website.
              </p>
              <p>
                The gap was the website. The previous Wix site was not supported by dependable
                pre-launch analytics available to us, and its customer path did not reflect all of
                the information the owner needed to prepare an accurate estimate. That means there
                is no honest before-and-after traffic or lead chart for this project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              A website migration, not a visual swap
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              The new site launched June 5, 2026. The work was organized around search continuity,
              usable service coverage, and post-launch verification.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {workItems.map((item) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-[#0D2318]">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="section-overline mb-4">Dated Technical Evidence</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              The mobile performance work has an inspectable record
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                On June 6, 2026, a Lighthouse mobile lab run on the live homepage scored 56 for
                performance, with a Largest Contentful Paint of 10.1 seconds. The main cause was an
                oversized hero image delivered without the image optimization expected from the new
                build.
              </p>
              <p>
                We corrected the image configuration, served responsive modern image formats, and
                deferred analytics loading. A second Lighthouse mobile lab run on the same homepage
                later that day scored 87, with a 2.8-second Largest Contentful Paint.
              </p>
              <div className="rounded-xl border border-[#1A5C3A]/20 bg-[#E8F3EC] p-5 text-base leading-relaxed text-[#0D2318]">
                These are dated single lab runs surrounding one deployment. They are not field Core
                Web Vitals, a guarantee of future test scores, or a comparison with the retired Wix
                site.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="section-overline mb-4">Early Search Visibility</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Google Search Console showed after launch
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                In the 28 days ending July 7, 2026, Google Search Console recorded 8,090 impressions
                at an average position of 5.8 across all queries, including searches for the
                business name.
              </p>
              <p>
                That is a snapshot of the site&rsquo;s visibility after launch. It is not evidence
                that impressions or rankings increased, because a dependable pre-launch comparison
                is not available. It also is not evidence of inquiries or booked work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="section-overline mb-4">Built Around the Business</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              The form changed when the quoting process changed
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                On June 29, the owner asked that website inquiries require a service address so he
                could prepare a more accurate estimate without calling back for the missing detail.
                The required field, validation, and linked address in the lead notification email
                were updated, deployed, and verified the same day.
              </p>
              <p>
                That change did not prove more leads. It made each completed inquiry more useful to
                the person responsible for responding to it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="section-overline mb-4">Measurement With Limits</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              We built the record before making the claim
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                Analytics and lead-event tracking were configured during the build, creating a
                record of website activity the previous site did not provide to us.
              </p>
              <p>
                First-touch attribution and CRM reconciliation were not complete in the latest
                verified project record. We therefore cannot say that every lead has a source, and
                this case study makes no claim about lead volume or business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-extrabold text-white">
            Need a website that can be measured honestly?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#C8EDD2]/80">
            Sequoia GEO builds the customer path, search foundation, and measurement record needed
            to make better marketing decisions.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
            >
              Request a Free Assessment
            </Link>
          </div>
          <p className="mt-10 text-sm leading-relaxed text-[#C8EDD2]/60">
            Sources: the client&rsquo;s Google Search Console, Google Business Profile, June 6
            Lighthouse reports, deployment records, and project change log. Search figures were
            verified July 7, 2026. The owner approved being named. No private quote is used.
          </p>
        </div>
      </section>
    </>
  );
}
