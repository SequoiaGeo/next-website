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
      "The starting engagement can include search and AI visibility work, content and page improvements, public entity consistency, conversion and tracking fixes, reporting, and the priorities that emerge from the baseline. The exact sequence depends on the business, market, existing assets, and access available.",
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
            At Sequoia GEO, engagements start at <strong>$2,500 a month</strong>, with a
            three-month initial term and month to month after. GEO and AI SEO are part of
            the same operator-led search engagement, not a separate AI surcharge.
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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-2xl bg-[#0D2318] p-8 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-wider text-[#3A9E6A]">One starting point</p>
              <p className="mt-4 text-5xl font-extrabold tracking-tight">$2,500</p>
              <p className="mt-1 text-lg font-semibold text-[#C8EDD2]">per month</p>
              <p className="mt-6 text-sm leading-relaxed text-[#C8EDD2]/80">
                Three-month initial term, then month to month. The same published starting
                point applies to the SEO work described in the contractor SEO pricing guide.
              </p>
              <Link
                href="/how-much-does-seo-cost-for-contractors"
                className="mt-6 inline-block text-sm font-semibold text-white underline decoration-[#3A9E6A] underline-offset-4 hover:text-[#C8EDD2]"
              >
                Read the contractor SEO pricing guide
              </Link>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
                What the starting engagement is built to cover
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                The work is not a bundle of AI tricks. The starting engagement is a focused
                program to make a service business easier to find, understand, trust, and
                contact across search and AI-driven answers.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "A documented baseline for search, public information, and conversion paths",
                  "Page, content, and technical improvements tied to the approved priorities",
                  "Entity and listing consistency where public information conflicts",
                  "A fixed question set to observe AI-search visibility without confusing a citation with a recommendation",
                  "Reporting that connects the work to qualified inquiries and jobs booked when the tracking can support it",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                    <svg aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              What changes the scope, and what stays separate
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              The starting point is public. The sequence of work changes with the facts of
              the business, not with a hidden package ladder.
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
