import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import InlineLeadForm from "@/components/InlineLeadForm";

export const metadata: Metadata = {
  title: "How Much Does SEO Cost for Contractors?",
  description:
    "Contractor SEO runs from $2,500 a month here, 3-month initial term, month to month after. What that buys, and the honest cases where you should not buy it.",
  alternates: {
    canonical: "https://www.sequoiageo.com/how-much-does-seo-cost-for-contractors",
  },
  openGraph: {
    title: "How Much Does SEO Cost for Contractors?",
    description:
      "Contractor SEO runs from $2,500 a month here, 3-month initial term, month to month after. What that buys, and the honest cases where you should not buy it.",
    url: "https://www.sequoiageo.com/how-much-does-seo-cost-for-contractors",
    type: "website",
  },
};

const faqs = [
  {
    question: "What does contractor SEO cost per month?",
    answer:
      "From this practice, engagements start at $2,500 a month with a 3-month initial term, then month to month. Ad spend, when we run ads, is separate: your money, your accounts, billed to you directly by Google.",
  },
  {
    question: "Why is there a 3-month initial term?",
    answer:
      "Because the work compounds and a shorter window proves nothing either way. After the initial term you are month to month. If the work is not earning the fee, you leave. Keeping you is my job, not the contract's.",
  },
  {
    question: "Do you discount the fee?",
    answer:
      "No. When budget is tight we phase the ad spend, which is your money anyway, and keep the work whole. A discounted fee buys discounted attention. I would rather you wait until the fee fits than start a program built to underdeliver.",
  },
  {
    question: "What should SEO reporting show me?",
    answer:
      "Calls, booked jobs, and what each cost. If a report cannot connect the work to booked revenue, it is a receipt, not a report. I ran a home services company for 13 years before I sold marketing, and that standard is the reason this practice exists.",
  },
];

export default function ContractorSeoCostPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          {
            name: "How Much Does SEO Cost for Contractors?",
            url: "https://www.sequoiageo.com/how-much-does-seo-cost-for-contractors",
          },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      {/* Hero: the direct answer, price first */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="section-overline mb-4">Pricing, Published</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl leading-tight">
            How Much Does SEO Cost for Contractors?
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-gray-700">
            Here, it starts at $2,500 a month, with a 3-month initial term and month to
            month after that. Ad spend, when we run ads at all, is separate: it stays in
            accounts you own and Google bills you directly. I publish the price because I
            spent 13 years running a home services company, got pitched by every marketing
            vendor in the book, and learned exactly what a hidden number signals.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
            >
              Get Your Free Audit
            </Link>
            <a
              href="tel:5595213122"
              className="text-base font-medium text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
            >
              (559) 521-3122
            </a>
          </div>
        </div>
      </section>

      {/* What the fee buys */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              What $2,500 a Month Buys
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Outcomes, not activity. These are the four things the fee is accountable for.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Your company named when buyers ask",
                body: "When homeowners ask Google or an AI tool who to call, the answer names a handful of companies. The work exists to make yours one of them, in the map pack and in the AI answers that are replacing it.",
              },
              {
                title: "Calls, tracked to booked jobs",
                body: "The deliverable is a phone that rings with the right jobs, and reporting that shows what each call cost and what it booked. Rankings are an input. They are never the report.",
              },
              {
                title: "An operator doing the work",
                body: "I keep a few clients at a time and do the work myself. You are not buying a seat in a 200-account queue. You are buying a senior person who ran a company in your industry thinking about your market every week.",
              },
              {
                title: "Assets you keep",
                body: "Your site, your Business Profile, your Search Console, your content. All of it lives in accounts you control. If we part ways, everything built stays yours, because it was yours the whole time.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1A5C3A] mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-gray-600">
            Trade-specific detail, with real client numbers, is published on my{" "}
            <Link href="/hvac-seo" className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]">
              HVAC SEO
            </Link>{" "}
            and{" "}
            <Link href="/plumbing-seo" className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]">
              plumbing SEO
            </Link>{" "}
            pages.
          </p>
        </div>
      </section>

      {/* Why lower-priced retainers stall */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
            Why Lower-Priced Retainers Stall
          </h2>
          <div className="mt-6 space-y-5">
            <p className="text-base leading-relaxed text-gray-600">
              A retainer priced at a fraction of this buys hours at a fraction of this. The
              work goes offshore, goes templated, or goes undone, and all three show up the
              same way: a monthly report full of activity and a phone that rings no more
              than it did last quarter. By the time the pattern is obvious, a year of
              compounding is gone, and that year is the actual price of the low retainer.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              The expensive part of SEO was never the tooling. It is a senior person who
              knows your trade thinking hard about your market, every week, with enough
              room in their client list to act on what they find. Nobody sells that at
              commodity rates, because nobody can. What gets sold at commodity rates is the
              appearance of it.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              I also do not discount the fee. When cash is tight, we phase the ad spend
              instead and keep the work whole, because a program that starts by shrinking
              the work has already decided how it ends.
            </p>
          </div>
        </div>
      </section>

      {/* When not to buy */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              When You Should Not Buy SEO
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Four honest cases. If one of them is you, keep your money for now.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "You need calls this week",
                body: (
                  <>
                    SEO compounds. Plan in quarters, not weeks. If the board is empty right
                    now, buy managed demand first, like{" "}
                    <Link
                      href="/lsa-management"
                      className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
                    >
                      Local Services Ads
                    </Link>
                    , and add SEO once this month is no longer an emergency.
                  </>
                ),
              },
              {
                title: "Your phones leak",
                body: "If calls already go unanswered or unbooked, visibility multiplies the leak. Fix the answer rate and the booking process first. It is the highest-return work in the building and it costs less than any campaign.",
              },
              {
                title: "You cannot take more work",
                body: "If the schedule is full for months, more calls just create more apologies. Raise prices before you raise call volume. Come back to SEO when capacity opens.",
              },
              {
                title: "The fee would strain cash",
                body: "If $2,500 a month strains the business, wait. A stressed budget makes rushed calls, and a program cut off early helps nobody. Stabilize first, then buy the compounding.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-page capture */}
      <InlineLeadForm
        source="how_much_does_seo_cost_for_contractors"
        heading="Get a free audit before you spend a dollar"
        subtext="Tell me where to send it. I will tell you whether SEO is even the right buy for your situation, including when the answer is not yet. No pitch deck."
      />

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              Contractor SEO Pricing Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-gray-200 p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="bg-[#fafaf8] py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
              Keep Going
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: "HVAC SEO", href: "/hvac-seo" },
              { label: "Plumbing SEO", href: "/plumbing-seo" },
              { label: "What HVAC and Plumbing Leads Cost", href: "/how-much-do-hvac-plumbing-leads-cost" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-[#1A5C3A] shadow-sm hover:border-[#3A9E6A]/40 hover:shadow-md transition"
              >
                {link.label}
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
