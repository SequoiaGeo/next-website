import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car and Air Marketing Measurement Case Study | Sequoia GEO",
  description:
    "A protected case study preview showing how Sequoia GEO rebuilt paid search, service pages, and lead measurement for an Atlanta-area automotive and aircraft detailing business.",
  robots: { index: false, follow: false },
};

const metrics = [
  { value: "19 days", label: "First live reporting window" },
  { value: "174", label: "Google Ads clicks" },
  { value: "4", label: "Platform-reported phone leads" },
  { value: "1", label: "Client-confirmed paid job" },
];

const rebuilds = [
  {
    number: "01",
    title: "Paid search",
    body: "We launched a focused Search campaign around paint protection film, ceramic coating, and paint correction. Campaign structure, targeting, and search-term decisions were documented instead of left inside an inherited account that was no longer running.",
  },
  {
    number: "02",
    title: "Call and form measurement",
    body: "We rebuilt call tracking around one primary action that counts once and requires a 60-second call. Form measurement was changed so the advertising event fires only after a successful form confirmation.",
  },
  {
    number: "03",
    title: "High-intent service pages",
    body: "The paint protection film and ceramic coating pages were rebuilt with clearer service choices, pricing context, qualified manufacturer claims, FAQs, phone paths, and estimate forms.",
  },
  {
    number: "04",
    title: "Reporting and accountability",
    body: "The client approved the campaign before launch, received ongoing updates, and helped verify that the form path and first paid advertising customer reached the business.",
  },
];

export default function CarAndAirCaseStudy() {
  return (
    <>
      <div className="border-b border-amber-200 bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-3 text-center text-sm font-semibold text-amber-900 lg:px-8">
          Protected Preview draft. Client approval is required before public release.
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
              <p className="section-overline mb-4">Paid Search and Measurement Case Study</p>
              <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                We rebuilt the tracking before we counted a lead.
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/85">
                Car and Air is an Atlanta-area automotive and aircraft detailing business. Its
                inherited advertising account was off, and its conversion history could not
                reliably distinguish customer inquiries from platform activity.
              </p>
              <p className="mt-6 text-base leading-relaxed text-[#C8EDD2]/70">
                Sequoia GEO relaunched paid search, rebuilt two high-intent service pages, repaired
                call and form measurement. During the campaign&rsquo;s first 19 live days, the client
                reported one paid job from the advertising.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <div className="text-2xl font-extrabold text-[#6FCF97]">{metric.value}</div>
                  <div className="mt-2 text-sm leading-snug text-[#C8EDD2]/70">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-6 max-w-5xl rounded-2xl border border-[#6FCF97]/25 bg-white/5 px-6 py-5 text-center text-sm leading-relaxed text-[#C8EDD2]/75">
              Reporting window: July 13 through July 31, 2026. The four phone leads were reported by
              Google Ads. They are not four independently verified customers. The paid job was
              separately confirmed and attributed to advertising by the client. The ad, call, and
              job records have not yet been independently joined into one trace.
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="section-overline mb-4">Where It Started</p>
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                The account was off. The historical conversion total was not a lead count.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                All eight inherited campaigns were paused, and the reviewed six-month period showed
                no advertising activity. There was no valid active baseline to compare against. We
                do not describe turning an off account back on as growth.
              </p>
              <p>
                The primary sales goal counted page views, the download action was misconfigured,
                and the actual form action was not attached to any campaign. A reported conversion
                could be a page view, an engagement, a direction request, or a phone event.
              </p>
              <p>
                The first job was therefore not to produce a larger conversion number. It was to
                define what deserved to be counted.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fafaf8] py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="section-overline mb-4">What We Rebuilt</p>
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                Campaign, measurement, landing experience, and reporting moved together.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {rebuilds.map((item) => (
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
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="section-overline mb-4">After the Click</p>
                <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                  High-intent visitors received a clearer path to an estimate.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Advertising cannot compensate for a service page that leaves customers unsure
                  about coverage, preparation, pricing, or the next step. The rebuilt pages answer
                  those questions and connect the visitor to a phone or form path.
                </p>
              </div>
              <div className="space-y-4">
                <a
                  href="https://www.carandair.com/car/paint-protection-film/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-gray-200 p-6 transition hover:border-[#3A9E6A] hover:bg-[#EAF6EE]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#3A9E6A]">
                    Live Service Page
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-[#0D2318]">
                    XPEL Paint Protection Film
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Coverage choices, pricing context, manufacturer-qualified proof, FAQs, and an
                    estimate path.
                  </p>
                </a>
                <a
                  href="https://www.carandair.com/car/ceramic-coating/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-gray-200 p-6 transition hover:border-[#3A9E6A] hover:bg-[#EAF6EE]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#3A9E6A]">
                    Live Service Page
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-[#0D2318]">Ceramic Coating</h3>
                  <p className="mt-2 text-gray-600">
                    Inspection-based service paths, qualified product claims, FAQs, trust proof,
                    and an estimate form.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fafaf8] py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <p className="section-overline mb-4">The Result the Client Confirmed</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              One paid job, confirmed by the client, in the first 19 live days.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-[#3A9E6A]/25 bg-[#EAF6EE] p-7">
                <p className="font-semibold text-[#0D2318]">What the client reported</p>
                <p className="mt-3 leading-relaxed text-[#1A5C3A]">
                  The client reported that a customer from the advertising completed a paid job.
                  That is a client-reported business outcome, not an independently traced
                  attribution path.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-7">
                <p className="font-semibold text-[#0D2318]">What it does not establish</p>
                <p className="mt-3 leading-relaxed text-gray-600">
                  One paid job is not a mature trend, and the evidence does not isolate which change
                  caused it. We do not use this 19-day window to claim a repeatable lead rate,
                  return on investment, or finished transformation.
                </p>
              </div>
            </div>

            <blockquote className="mt-8 rounded-2xl border border-gray-200 bg-white p-8">
              <p className="font-serif text-2xl font-semibold leading-relaxed text-[#0D2318]">
                &ldquo;Great to see it working as planned.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-medium text-gray-500">
                Client comment after confirming the first paid advertising customer. Written
                publication approval is required before this quote can appear publicly.
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <p className="section-overline mb-4">Why We Did Not Report Four Verified Leads</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Platform events and customer inquiries are different stages.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                A later July 13 through August 11 account view contained four platform conversion
                events. Those events were split across older call actions and were not four
                independently verified leads. The call-detail report contained nine received ad
                calls, three of which lasted at least 60 seconds.
              </p>
              <p>
                We changed the active call action to Count One with a 60-second threshold. We also
                made the successful form confirmation the primary website action. A direct test
                verified that the form event reached Google Ads, but no ad-attributed form lead had
                been observed in the reviewed evidence.
              </p>
              <p>
                The later account view overlaps the first reporting period and uses a different
                measurement state. Its figures are not added to the first 19-day results.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fafaf8] py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <p className="section-overline mb-4">Beyond the Ad Account</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Trust problems can lose a customer before tracking ever sees them.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-bold text-[#0D2318]">Credential language</h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Sitewide trust language was aligned to the documented manufacturer-approved
                  wording.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-bold text-[#0D2318]">Supplier proof</h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Obsolete supplier logos were removed, and active relationships were described
                  more precisely.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-bold text-[#0D2318]">Installer visibility</h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  A missing manufacturer-locator record was identified and escalated. Current
                  locator presence is not claimed here without saved official verification.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0D2318] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="section-overline mb-4">The Takeaway</p>
            <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
              Do not optimize toward a number you cannot explain.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#C8EDD2]/80">
              Sequoia GEO works across the campaign, the page customers see, and the measurement
              used to judge the result. That is how we separate visible activity from leads and
              paid jobs a business can confirm.
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
              Sources: Google Ads audit dated June 19, 2026; July report covering July 13 through
              31, 2026; fulfillment review updated August 13, 2026; and the two live service pages
              checked August 28, 2026. The engagement remains active. The client name, reported paid
              job, and quote require written approval before public release.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
