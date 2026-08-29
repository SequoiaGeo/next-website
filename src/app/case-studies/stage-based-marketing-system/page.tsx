import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Stage-Based Marketing System Engagement Note | Sequoia GEO",
  description:
    "An internal, anonymized engagement note about replacing disconnected marketing activity with clearer operating stages and evidence controls.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
  },
};

const operatingStages = [
  {
    number: "01",
    title: "Platform event",
    text: "A click, call event, or form event occurred. This is activity, not a qualified opportunity.",
  },
  {
    number: "02",
    title: "Complete lead",
    text: "The record contains enough information to identify and work the inquiry.",
  },
  {
    number: "03",
    title: "Contacted",
    text: "A human response reached the prospect. An automated send alone does not satisfy this stage.",
  },
  {
    number: "04",
    title: "Booked meeting",
    text: "A meeting was scheduled and recorded. A calendar-page visit is not a booking.",
  },
  {
    number: "05",
    title: "Held meeting",
    text: "The scheduled conversation occurred. No-shows remain separate from held meetings.",
  },
  {
    number: "06",
    title: "Qualified opportunity",
    text: "The buyer, need, timing, and fit meet the written qualification standard.",
  },
  {
    number: "07",
    title: "Customer",
    text: "The opportunity became a customer and can be reconciled to its original source.",
  },
];

const workstreams = [
  {
    title: "One operating model",
    text: "Work spanned positioning, controlled landing pages, paid media, analytics, lead routing, booking, follow-up, sales enablement, and reporting. These components were built around shared stage definitions. The engagement did not establish complete source-to-customer attribution.",
  },
  {
    title: "A clearer commercial offer",
    text: "Product capabilities were translated into buyer problems, use cases, and offers that the sales and marketing teams could explain consistently. The work moved beyond feature lists toward specific operational opportunities already present inside a service business.",
  },
  {
    title: "Assets the team could keep using",
    text: "The engagement produced published resources, working tools, sales materials, campaign assets, and implementation handoffs. Live assets and campaign-ready drafts remained separately labeled so delivery volume could not be mistaken for publication or performance.",
  },
  {
    title: "Evidence before account changes",
    text: "Sequoia GEO commissioned outside specialists to review the advertising accounts. Every finding was checked against live account evidence before a change. Findings the account evidence did not support were not implemented.",
  },
];

const limits = [
  "No verified paid-sourced booked meeting was established during the reviewed engagement period.",
  "No causal increase in customers, pipeline, or revenue is claimed.",
  "No traffic, ranking, or AI-assistant citation result is attributed to the published content.",
  "The operating stages were defined, but the full chain was not reconciled through the customer stage.",
  "No holdout or controlled comparison was run, so the work does not establish causality.",
  "Outside account reviews were commissioned by Sequoia GEO. They were evidence checks, not endorsements of Sequoia GEO or the engagement.",
];

export default function StageBasedMarketingSystemPreview() {
  if (process.env.VERCEL_ENV === "production") {
    notFound();
  }

  return (
    <>
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-overline mb-4">Internal Preview · Anonymized Engagement Note</p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              From disconnected marketing activity to a stage-based operating system
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-[#C8EDD2]/80">
              Sequoia GEO worked across strategy, campaigns, websites, measurement, lead routing,
              and sales enablement so one team could evaluate marketing through the same operating
              stages.
            </p>
            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#C8EDD2]/20 bg-white/5 p-6 text-left">
              <p className="text-sm font-bold uppercase tracking-widest text-[#3A9E6A]">
                This is not a results case study
              </p>
              <p className="mt-3 leading-relaxed text-[#C8EDD2]/75">
                This note documents the approach and work delivered during an anonymized
                engagement. It does not claim that the work caused more customers, pipeline,
                traffic, rankings, AI recommendations, or revenue. It remains an internal Preview
                until publication permission and reidentification risk are resolved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold text-[#1A5C3A]">The operating problem</p>
            <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Each channel was reporting a different object
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Advertising platforms could report clicks, calls, and conversion events. Forms
                could create records. Calendars could receive bookings. Sales conversations could
                happen outside the marketing systems. Without shared definitions and reconciliation,
                those objects could be reported as if they represented the same business outcome.
              </p>
              <p>
                Sequoia GEO approached the engagement as an operating-system problem. The work was
                not limited to buying media or producing content. It required clearer positioning,
                controlled destinations, stage definitions, routing, follow-up ownership, and an
                evidence standard for deciding what counted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="section-overline mb-4">The Sequoia GEO standard</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Seven stages, seven different claims
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              The firm&rsquo;s standard measurement model separates attention from business outcome.
              The engagement used the first six stages as reporting definitions. The customer
              stage was not fully reconciled, which is why the page makes no customer or
              commercial-result claim.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {operatingStages.map((stage) => (
                <article
                  key={stage.number}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
                >
                  <p className="text-sm font-bold tracking-widest text-[#3A9E6A]">{stage.number}</p>
                  <h3 className="mt-4 text-xl font-bold text-[#0D2318]">{stage.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{stage.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold text-[#1A5C3A]">What Sequoia GEO contributed</p>
            <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Embedded marketing leadership across the system
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              The value was not the number of files produced. It was the ability to work across
              founders, product, sales, creative, websites, advertising, and measurement without
              handing each problem to an isolated vendor.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {workstreams.map((item) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 p-7">
                  <h3 className="text-xl font-bold text-[#0D2318]">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="section-overline mb-4">The accountability standard</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              What this engagement note does not prove
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {limits.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                  <p className="leading-relaxed text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#C8EDD2] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[#1A5C3A]">
              The next evidence gate
            </p>
            <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">
              What would turn this into a results case study?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#1A5C3A]">
              A verified paid-sourced booked meeting, source reconciliation through the customer
              stage, and a comparison design strong enough to separate the effect of the work from
              timing, sales follow-up, product changes, and other channels. Until then, the honest
              public story is the operating discipline, not a commercial outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="section-overline mb-4">One accountable system</p>
          <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
            Need marketing, measurement, and follow-up to tell the same story?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#C8EDD2]/75">
            Sequoia GEO can diagnose where the operating chain breaks, define what each stage
            means, and build the components needed to test the next decision honestly.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
          >
            Talk Through the System
          </Link>
        </div>
      </section>
    </>
  );
}
