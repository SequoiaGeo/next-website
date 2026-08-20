import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import InlineLeadForm from "@/components/InlineLeadForm";

export const metadata: Metadata = {
  title: "GEO and AI SEO Pricing for Service Businesses | Sequoia GEO",
  description:
    "GEO and AI SEO engagements at Sequoia GEO start at $2,500 a month, with a three-month initial term. See what is included, what is separate, and what cannot be guaranteed.",
  alternates: {
    canonical: "https://www.sequoiageo.com/ai-seo-pricing",
  },
  openGraph: {
    title: "GEO and AI SEO Pricing for Service Businesses | Sequoia GEO",
    description:
      "GEO and AI SEO engagements start at $2,500 a month, with a three-month initial term. What is included, what is separate, and what cannot be guaranteed.",
    url: "https://www.sequoiageo.com/ai-seo-pricing",
    type: "website",
  },
};

const faqs = [
  {
    question: "How much does GEO or AI SEO cost?",
    answer:
      "At Sequoia GEO, engagements start at $2,500 a month with a three-month initial term, then month to month. GEO and AI SEO are part of the same operator-led search engagement, not a separate AI surcharge.",
  },
  {
    question: "Is GEO different from SEO?",
    answer:
      "They overlap. SEO helps your business earn visibility in search results. GEO, often called AI SEO, adds the work of making the business, its evidence, and its public information understandable when an AI answer is assembled. The foundation is still useful website content, accurate entity information, and measurement.",
  },
  {
    question: "What is included in the monthly fee?",
    answer:
      "Search Foundation starts at $2,500 a month and covers a bounded search, AI visibility, conversion, or public-information constraint. Fractional Marketing Lead starts at $5,000 a month when a business needs weekly marketing leadership, launch planning, measurement oversight, and cross-channel direction. Complex Leadership starts at $6,500 a month for multiple markets, brands, vendors, or a broader operating load. Every engagement has a defined scope before work begins.",
  },
  {
    question: "What is not included?",
    answer:
      "Ad spend is separate and billed directly to you by the advertising platform. Third-party software and major website builds are discussed and approved separately. You retain your domain, analytics, ad accounts, and the assets built for you.",
  },
  {
    question: "Can you guarantee that ChatGPT will recommend my business?",
    answer:
      "No. No agency can guarantee a placement, recommendation, ranking, citation, or timeline from ChatGPT, Google, or any other answer engine. The work is measured through a documented baseline, the improvements made, visibility across a fixed question set, and qualified inquiries or jobs booked where tracking supports that connection.",
  },
  {
    question: "What happens in the first 30 days?",
    answer:
      "The first 30 days establish the baseline, identify the first approved constraint, make the first corrections, and document what changed. The initial three-month term gives the work time to be implemented, discovered, and evaluated without pretending a result can be promised on a fixed date.",
  },
  {
    question: "Is paid media management included?",
    answer:
      "Ad spend is always separate and stays in your accounts. Paid media execution is defined in writing for each engagement because the workload changes with platforms, spend, creative, and reporting requirements. It is never assumed to be included just because a broader marketing leadership engagement is in place.",
  },
  {
    question: "Can you work with a company that already has an agency?",
    answer:
      "Sequoia GEO is built to lead the marketing scope. If you already have an agency and need one problem independently verified and fixed, say that in the baseline request. That focused work is scoped after the evidence and access requirements are clear, not sold as a generic package.",
  },
];

export default function AiSeoPricingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          {
            name: "GEO and AI SEO Pricing",
            url: "https://www.sequoiageo.com/ai-seo-pricing",
          },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="section-overline mb-4">Pricing, Published</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
            How Much Does GEO and AI SEO Cost?
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-700">
            Search Foundation starts at <strong>$2,500 a month</strong>. Marketing leadership
            starts at <strong>$5,000 a month</strong>. Both begin with a 90-day initial term,
            then continue month to month. GEO and AI SEO are part of the work, not a separate
            AI surcharge.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
            You work directly with Aaron, not an account manager. The baseline decides what
            needs attention first. It does not create a menu of activity for activity&apos;s sake.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
            >
              Request a Free Baseline Review
            </Link>
            <Link
              href="/geo-agency"
              className="text-base font-semibold text-[#1A5C3A] underline decoration-[#3A9E6A]/50 underline-offset-4 hover:text-[#0D2318]"
            >
              See how GEO work is approached
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-overline mb-4">Starting prices, published</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Choose the level of involvement the business actually needs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              These are starting points, not interchangeable bundles. The baseline tells us
              which level fits, and the scope states what Sequoia owns before work starts.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              {
                name: "Search Foundation",
                price: "$2,500",
                description: "For one bounded search, AI visibility, conversion, or public-information constraint.",
                items: [
                  "Baseline and first approved priority",
                  "Site, content, technical, entity, or tracking corrections tied to that priority",
                  "Reporting on qualified inquiries and jobs booked where tracking supports it",
                ],
              },
              {
                name: "Fractional Marketing Lead",
                price: "$5,000",
                description: "For a launch or an established business that needs a marketing leader in the room every week.",
                items: [
                  "Weekly decision meeting and a 90-day operating plan",
                  "Launch economics, channel sequence, measurement, conversion, and vendor direction",
                  "Clear responsibility across marketing, sales follow-up, the website, CRM, and reputation",
                ],
              },
              {
                name: "Complex Leadership",
                price: "$6,500",
                description: "For multiple markets, brands, vendors, channels, or a larger operating load.",
                items: [
                  "Cross-channel and multi-party marketing leadership",
                  "More frequent decision support and a wider measurement program",
                  "A defined operating scope for the people, systems, and markets involved",
                ],
              },
            ].map((tier, index) => (
              <article
                key={tier.name}
                className={`rounded-2xl border p-7 ${
                  index === 1
                    ? "border-[#1A5C3A] bg-[#0D2318] text-white shadow-xl shadow-[#0D2318]/10"
                    : "border-gray-200 bg-white text-[#1a1a1a]"
                }`}
              >
                <p className={`text-sm font-bold uppercase tracking-wider ${index === 1 ? "text-[#3A9E6A]" : "text-[#1A5C3A]"}`}>
                  {tier.name}
                </p>
                <p className="mt-4 text-5xl font-extrabold tracking-tight">{tier.price}</p>
                <p className={`mt-1 text-sm font-semibold ${index === 1 ? "text-[#C8EDD2]" : "text-gray-600"}`}>per month, starting price</p>
                <p className={`mt-5 text-sm leading-relaxed ${index === 1 ? "text-[#C8EDD2]/80" : "text-gray-600"}`}>{tier.description}</p>
                <ul className="mt-6 space-y-3">
                  {tier.items.map((item) => (
                    <li key={item} className={`flex gap-3 text-sm leading-relaxed ${index === 1 ? "text-[#C8EDD2]" : "text-gray-700"}`}>
                      <span aria-hidden="true" className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${index === 1 ? "bg-[#3A9E6A]" : "bg-[#1A5C3A]"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm leading-relaxed text-gray-600">
            Every starting engagement has a 90-day initial term, then continues month to month.
            Ad spend stays in your accounts. Major site builds, third-party software, and hands-on
            paid media execution are defined separately before work begins.
          </p>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              What changes the scope, and what stays separate
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              The starting prices are public. Scope expands only when the operating load expands,
              not through a hidden package ladder.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-7">
              <h3 className="text-lg font-bold text-[#1a1a1a]">Factors that can expand the scope</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-gray-600">
                <li>Multiple locations or brands with separate public records</li>
                <li>Conflicting names, addresses, phones, licenses, or service information</li>
                <li>A significant backlog of site, content, or measurement repairs</li>
                <li>Specialized compliance, integration, or approval requirements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-7">
              <h3 className="text-lg font-bold text-[#1a1a1a]">Not included in the monthly fee</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-gray-600">
                <li>Ad spend, which stays in your own advertising accounts and is billed by the platform</li>
                <li>Third-party software, which is discussed before it is added</li>
                <li>Major website builds or redesigns, which are scoped separately</li>
                <li>Guaranteed rankings, citations, recommendations, lead volume, or timing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-overline mb-4">Start with evidence</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              A free baseline review and paid work are not the same thing
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              There is one free starting point, not a separate free offer for every service.
              The review tells us whether the starting engagement is justified and what it
              should address first.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#3A9E6A]/30 bg-[#C8EDD2]/20 p-7">
              <h3 className="text-lg font-bold text-[#0D2318]">Free baseline review</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                A public-surface review before the first conversation. It looks at the
                website, public profiles, search visibility, and the first apparent
                conversion or credibility gaps. No account access is required.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
              <h3 className="text-lg font-bold text-[#1a1a1a]">Paid engagement</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Once there is a fit, the work can use the accounts and evidence a public
                review cannot see: analytics, Search Console, listings, conversion data,
                CRM stages, and the parts of the site that need to be changed. Nothing is
                required until the scope is agreed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#3A9E6A]">The first 30 days</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">
                Establish what is true before changing what is visible
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#C8EDD2]/80">
                The first month is for a baseline, first repairs, and proof of what changed.
                It is not a promise that an answer engine will change its response on a
                particular day.
              </p>
            </div>
            <ol className="space-y-4">
              {[
                ["1", "Baseline", "Confirm public information, search signals, conversion paths, and the first constraint."],
                ["2", "Prioritize", "Agree on the repair with the strongest evidence instead of spreading effort across every tactic."],
                ["3", "Implement", "Correct the approved site, content, entity, and tracking issues."],
                ["4", "Document", "Record what changed and evaluate qualified inquiries and jobs booked where the data supports it."],
              ].map(([number, title, body]) => (
                <li key={number} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3A9E6A] text-sm font-extrabold text-[#0D2318]">{number}</span>
                  <div>
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#C8EDD2]/70">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <InlineLeadForm
        source="ai_seo_pricing"
        heading="Find out whether GEO work is the right next move"
        subtext="Request the free baseline review. You will get a direct answer about the first issue worth fixing, including when the right answer is to wait."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              GEO and AI SEO pricing questions
            </h2>
          </div>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-gray-200 p-7">
                <h3 className="text-lg font-bold text-[#1a1a1a]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
