import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import TradeAiSearchNav from "@/components/TradeAiSearchNav";
import type { CityAiSearchSurface } from "@/lib/ai-search-cities";

const measurementStages = [
  "Mentioned",
  "Cited",
  "Recommended",
  "Referral visit",
  "Inquiry",
  "Qualified lead",
  "Job booked",
];

export default function CityAiSearchHub({ city }: { city: CityAiSearchSurface }) {
  const canonical = `https://www.sequoiageo.com/geo-agency/${city.slug}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "AI SEO", url: "https://www.sequoiageo.com/geo-agency" },
          { name: `${city.city}, ${city.stateAbbr}`, url: canonical },
        ]}
      />
      <ServiceJsonLd
        serviceType={`AI SEO for businesses serving ${city.city}, ${city.stateAbbr}`}
        description={`Evidence-first AI SEO for local and home service businesses serving ${city.city}, with public-source reconciliation and staged AI search measurement.`}
        url={canonical}
      />
      <FaqJsonLd faqs={city.faqs} />

      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1A5C3A]">
              AI SEO in {city.city}, {city.stateAbbr}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Build an AI search presence around facts your {city.city} business can support
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
              {city.scope}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/ai-search-assessment"
                className="rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#0D2318]"
              >
                Request a Public-Surface Review
              </Link>
              <Link
                href="/ai-search-methodology"
                className="rounded-lg border border-[#1A5C3A]/30 bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:border-[#1A5C3A]"
              >
                Read the Measurement Method
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1A5C3A]/15 bg-[#F1F6F2] py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1A5C3A]">
            Local-presence disclosure
          </p>
          <p className="text-base leading-relaxed text-[#0D2318]">{city.relationship}</p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1A5C3A]">
              Market verification focus
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0D2318] sm:text-4xl">
              {city.verificationFocus.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              {city.verificationFocus.body}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {city.verificationChecks.map((check) => (
              <article key={check.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-6">
                <h3 className="text-base font-extrabold text-[#0D2318]">{check.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{check.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#3A9E6A]">
              Local commercial question panel
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Questions worth observing in {city.city}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              The panel is frozen before material corrections are made. Each run records the product,
              date, geography, visible answer, cited sources, and misses. Questions are observations,
              not statements that Sequoia or a contractor currently appears.
            </p>
          </div>
          <ol className="space-y-4">
            {city.questions.map((question, index) => (
              <li key={question} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3A9E6A] text-sm font-extrabold text-white">
                  {index + 1}
                </span>
                <span className="pt-1 text-sm leading-relaxed text-white/80">{question}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1A5C3A]">
                Official verification sources
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0D2318] sm:text-4xl">
                Public records can support a fact without endorsing the business
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-600">
                These official sources are part of the evidence map when they apply to the trade and
                project. A record may support identity, status, or classification. It does not prove
                customer satisfaction, service availability, recommendation visibility, or business impact.
              </p>
              <div className="mt-7 space-y-4">
                {city.officialSources.map((source) => (
                  <article key={source.href} className="rounded-xl border border-gray-200 bg-white p-5">
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#1A5C3A] underline underline-offset-4"
                    >
                      {source.label}
                    </a>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{source.note}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1A5C3A]">
                Measurement boundary
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0D2318] sm:text-4xl">
                Seven stages, reported separately
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-600">
                AI visibility is not one conversion. Sequoia preserves each stage so a citation is not
                presented as a recommendation and a visit is not presented as a qualified lead.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {measurementStages.map((stage, index) => (
                  <div key={stage} className="rounded-xl border border-[#1A5C3A]/15 bg-white p-4">
                    <p className="text-xs font-bold text-[#3A9E6A]">Stage {index + 1}</p>
                    <p className="mt-1 text-sm font-extrabold text-[#0D2318]">{stage}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold">
                <Link href="/proof-system" className="text-[#1A5C3A] underline underline-offset-4">
                  Review the Proof System
                </Link>
                <Link href="/geo-agency" className="text-[#1A5C3A] underline underline-offset-4">
                  Return to the national AI SEO service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TradeAiSearchNav currentHref="" />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1A5C3A]">Questions</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0D2318] sm:text-4xl">
              AI SEO in {city.city}, explained without guarantees
            </h2>
          </div>
          <div className="mt-10 space-y-5">
            {city.faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-lg font-bold text-[#0D2318]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Start with what customers, search systems, and AI products can already see
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#C8EDD2]/80">
            Request the public-surface scorecard. If an AI search issue needs deeper verification,
            Sequoia will define the question, evidence, and access required before proposing the work.
          </p>
          <Link
            href="/ai-search-assessment"
            className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]"
          >
            Request a Public-Surface Review
          </Link>
        </div>
      </section>
    </>
  );
}
