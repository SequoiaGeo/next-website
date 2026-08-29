import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Central HVAC Marketing Control Case Study | Sequoia GEO",
  description:
    "A preview case study showing how Sequoia GEO restored human control, separated HVAC service campaigns, corrected public information, and rebuilt measurement before scaling.",
  robots: {
    index: false,
    follow: false,
  },
};

const controlChanges = [
  {
    title: "Account control",
    body: "Google Ads could apply ten categories of changes without review. We reduced that to one low-risk maintenance setting and returned material campaign decisions to human review.",
  },
  {
    title: "Cleaner measurement",
    body: "Duplicate call actions were removed from bidding, the active call action was set to count once, and forward-looking source labels were established in Housecall Pro. Historical attribution was not guessed or backfilled.",
  },
  {
    title: "Campaigns built around the work",
    body: "The core campaign was refocused on repair and service intent. Water-heating demand received a separate Search-only campaign for hot water tanks, tankless systems, and boilers.",
  },
  {
    title: "A consistent public record",
    body: "The licensed legal identity was added to Google Ads, the Google Business Profile, and the active Yelp listing. Yelp was narrowed to HVAC, and the established Google profile name was preserved.",
  },
];

const controlMetrics = [
  { value: "10 to 1", label: "Auto-apply categories reduced" },
  { value: "2", label: "Duplicate call actions removed from bidding" },
  { value: "1", label: "Obsolete booking path removed" },
  { value: "11", label: "Approved review replies published" },
];

export default function HvacMarketingControlCaseStudy() {
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

      <div>
        <section className="bg-[#0D2318] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-overline mb-4">Active Client Engagement</p>
              <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Central HVAC: restoring control before asking the account to grow
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/85">
                The marketing system had uncontrolled Google Ads changes, conflicting conversion
                actions, mixed service priorities, an obsolete booking path, and no dependable
                connection between advertising activity and booked work.
              </p>
              <p className="mt-6 text-base leading-relaxed text-[#C8EDD2]/70">
                Sequoia GEO did not begin by asking the client to spend more. We began by making
                the existing system controlled, compliant, and measurable.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {controlMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <div className="text-2xl font-extrabold text-[#6FCF97]">{metric.value}</div>
                  <div className="mt-2 text-sm leading-snug text-[#C8EDD2]/70">{metric.label}</div>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed text-[#C8EDD2]/60">
              These are verified implementation outputs, not lead, booking, customer, or revenue
              results. The engagement is active and outcome measurement is still maturing.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="section-overline mb-4">Where It Started</p>
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                Activity was visible. Business outcomes were not.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                Google could change bidding, targeting, keywords, ad copy, and conversion settings
                without a deliberate approval step. Multiple call actions also competed to tell
                the bidding system what counted as success.
              </p>
              <p>
                Campaign structure did not reflect the client&rsquo;s current priorities. Repair
                demand, installation-oriented searches, and water-heating services needed different
                messages, landing paths, and measurement.
              </p>
              <p>
                The public record added more friction. Licensing information was inconsistent, Yelp
                listed categories that had not been credential-verified, and the Google booking path
                still led toward a system the business no longer used.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fafaf8] py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="section-overline mb-4">What We Changed</p>
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                Control first. Measurement second. Scale only when the evidence supports it.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {controlChanges.map((change) => (
                <article key={change.title} className="rounded-2xl border border-gray-200 bg-white p-7">
                  <h3 className="text-xl font-bold text-[#0D2318]">{change.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{change.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#3A9E6A]/25 bg-[#EAF6EE] p-7">
              <p className="font-semibold text-[#0D2318]">The customer path was cleaned up too.</p>
              <p className="mt-2 leading-relaxed text-[#1A5C3A]">
                The obsolete booking destination was removed through vendor coordination. Eleven
                client-approved Google review replies were published and verified. A website archive
                and page inventory were prepared, but no substantive website improvement is claimed
                here because that work has not been published.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <p className="section-overline mb-4">What This Phase Established</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              The account can now produce evidence that can be trusted.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 p-7">
                <h3 className="text-xl font-bold text-[#0D2318]">A defined decision process</h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Material Google Ads changes now require review. Repair demand and water-heating
                  demand have separate structures, so each can be evaluated against its own intent
                  instead of sharing one blended signal.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-7">
                <h3 className="text-xl font-bold text-[#0D2318]">A forward measurement path</h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Housecall Pro now has controlled source labels for future intake. The next step is
                  to reconcile calls and forms to qualified leads and booked jobs without rewriting
                  historical records.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-7">
                <h3 className="text-xl font-bold text-[#0D2318]">A safer customer path</h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  The obsolete booking destination is gone. Public profiles more accurately describe
                  the business, its licensed identity, and the services supported by the verified
                  record.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-7">
                <h3 className="text-xl font-bold text-[#0D2318]">A written evidence boundary</h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Clicks and platform conversions remain diagnostic signals. They will not be called
                  leads or booked work unless the CRM record supports that conclusion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fafaf8] py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-12">
              <p className="section-overline mb-4">What We Will Not Claim Yet</p>
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                Traffic is not a lead. A platform conversion is not a booked job.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-600">
                <p>
                  Historical Housecall Pro records did not contain reliable source data, so we
                  cannot connect prior Google Ads activity to bookings. The new labels apply going
                  forward. We will not reconstruct the past by guessing.
                </p>
                <p>
                  Early traffic windows are too small and incomplete to establish a trend. They
                  remain in the internal evidence record rather than being used as proof on this
                  page.
                </p>
                <p>
                  The defensible result of this phase is operational: the account is controlled,
                  the campaigns reflect the services being sold, public information is more
                  consistent, and future outcomes can be evaluated against a defined process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0D2318] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="section-overline mb-4">The Takeaway</p>
            <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
              Do not spend more until you can explain what the current spend produces.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#C8EDD2]/80">
              If your marketing platform can change itself, your conversion actions disagree, or
              your CRM cannot trace a lead to its source, the first job is not scaling. It is
              restoring control.
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
              Source record: signed-in Google Ads, Google Business Profile, Yelp, and Housecall Pro
              checks documented August 5 through 28, 2026. This engagement is active. No paid-search
              lead, booking, customer, revenue, or return-on-spend result is claimed. Final copy and
              use of the client name require written approval before public release.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
