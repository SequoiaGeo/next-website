import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import InlineLeadForm from "@/components/InlineLeadForm";

export const metadata: Metadata = {
  title: "How Much Should HVAC Companies Spend on Marketing?",
  description:
    "The working band is 6 to 10 percent of gross revenue. I ran an HVAC company to $17M with low seven figures in annual ad spend. Here is the real math.",
  alternates: {
    canonical: "https://www.sequoiageo.com/how-much-should-hvac-companies-spend-on-marketing",
  },
  openGraph: {
    title: "How Much Should HVAC Companies Spend on Marketing?",
    description:
      "The working band is 6 to 10 percent of gross revenue. I ran an HVAC company to $17M with low seven figures in annual ad spend. Here is the real math.",
    url: "https://www.sequoiageo.com/how-much-should-hvac-companies-spend-on-marketing",
    type: "website",
  },
};

const faqs = [
  {
    question: "Is the 6 to 10 percent band based on gross or net revenue?",
    answer:
      "Gross. Budget from top-line revenue, then judge the spend by what it books. A percent of net punishes you for growing payroll and rewards you for shrinking. Top-line keeps the math honest and comparable year to year.",
  },
  {
    question: "Should a new HVAC company spend more than 10 percent?",
    answer:
      "Sometimes, and briefly. When nobody knows your name, awareness costs more than it returns for a while. What I watch is not only the percent. It is how much spend can be reconciled to calls, qualified inquiries, and jobs booked without filling data gaps by assumption.",
  },
  {
    question: "What do HVAC leads cost right now?",
    answer:
      "From client accounts I manage, pulled August 2026: an HVAC contractor in a Texas metro averaged $63.16 per charged lead on Google Local Services Ads over the life of the account. Those are charged prices, not estimates. Your market and lead mix will land differently.",
  },
  {
    question: "What is the most common HVAC marketing budget mistake?",
    answer:
      "Untracked lead-seller spend. A full-picture audit matches recurring lead-platform invoices to qualified calls and booked-job results by trade. Close that blind spot before you change the budget.",
  },
];

export default function HvacMarketingBudgetPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          {
            name: "How Much Should HVAC Companies Spend on Marketing?",
            url: "https://www.sequoiageo.com/how-much-should-hvac-companies-spend-on-marketing",
          },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      {/* Hero: the direct answer, number first */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="section-overline mb-4">Marketing Budgets</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl leading-tight">
            How Much Should HVAC Companies Spend on Marketing?
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-gray-700">
            Budget 6 to 10 percent of gross revenue. That band is not from a survey. I ran
            Balanced Comfort, a Fresno home services company, for 13 years. We built it past
            $17 million in annual revenue with more than 130 employees, and our annual ad
            spend ran in the low seven figures. Low seven figures against $17 million lands
            in the 6 to 10 percent band. That spend rate carried the company onto the Inc
            5000 list four years straight, 2021 through 2024.
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

      {/* Where the band comes from */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
            Where the 6 to 10 Percent Band Comes From
          </h2>
          <div className="mt-6 space-y-5">
            <p className="text-base leading-relaxed text-gray-600">
              Most budget advice for HVAC companies comes from people who never signed the
              front of a paycheck in the trades. Industry guides commonly cite
              percent-of-revenue ranges for home services. Treat those as directional. Mine
              is not a citation. It is what I actually spent, year after year, while I held
              California contractor licenses, including C-20 HVAC, and ran the company that
              spent it.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              A band beats a fixed dollar figure because marketing has to scale with
              capacity. The right spend for a company depends on how many trucks it can
              dispatch, how many calls its CSRs can answer, and how much of the market
              already knows its name. A percent of revenue moves with all three. A flat
              monthly number set once in January does not.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              The other reason I trust the band: it survived contact with growth. We did not
              spend 6 to 10 percent in a good year and cut it in a slow one. The spend rate
              held while revenue climbed, which is the only test of a marketing budget that
              matters.
            </p>
          </div>
        </div>
      </section>

      {/* What changes by stage */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              What Changes by Revenue Stage
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The band holds. Where you sit inside it depends on where the company sits.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                title: "Nobody knows your name yet",
                body: "Plan for the top of the band and expect it to feel heavy. Awareness is bought before it pays. The discipline that protects the budget is staged measurement: spend, calls, qualified inquiries, and jobs booked, with missing joins reported honestly.",
              },
              {
                title: "Referrals carry the trucks",
                body: "You can run nearer the bottom of the band, but the mistake I see is cutting to zero because the phone already rings. Companies that go dark in search hand the next heat wave to whoever kept spending. Defend the base: reviews, rankings, and a profile that stays active.",
              },
              {
                title: "Adding trucks or territory",
                body: "A new territory buys its own awareness. Budget the push like a launch, not a line item, and accept that the new market will run above the band while the home market holds it down. Blending the two on one report hides what each is doing.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7">
                <h3 className="text-base font-bold text-[#1A5C3A] mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where the money goes wrong */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
            Where HVAC Marketing Budgets Go Wrong
          </h2>
          <div className="mt-6 space-y-5">
            <p className="text-base leading-relaxed text-gray-600">
              The percent question gets the attention. The leak question decides the
              outcome. A full-picture audit matches recurring lead-platform spend to booked-job
              results by trade, then separates new-customer calls from repeat and nonlead activity.
              Without that reconciliation, the gap can persist while each channel report looks
              healthy. That blind spot
              exists in HVAC companies at every revenue size, and it makes any budget
              percentage meaningless until it is closed.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              For contrast, here is what tracked spend looks like. From client accounts I
              manage, pulled August 2026: an HVAC contractor in a Texas metro has paid
              $63.16 average per charged lead on Google{" "}
              <Link
                href="/lsa-management"
                className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
              >
                Local Services Ads
              </Link>{" "}
              over the life of the account. Phone leads averaged $68.00, message leads
              $60.35. Every one of those leads is a line item I can defend, because the
              account is watched and the numbers are pulled from what Google actually
              charged.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              So the honest answer to the budget question has two parts. Set the band at 6
              to 10 percent of gross revenue. Then make sure the dollars inside it are
              accountable, whether they go to{" "}
              <Link
                href="/hvac-seo"
                className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
              >
                HVAC SEO
              </Link>
              , Local Services Ads, or anything else. I published the full charged-price
              breakdown on{" "}
              <Link
                href="/how-much-do-hvac-plumbing-leads-cost"
                className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
              >
                what HVAC and plumbing leads cost
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* On-page capture */}
      <InlineLeadForm
        source="how_much_should_hvac_companies_spend_on_marketing"
        heading="Get a free HVAC marketing budget review"
        subtext="Tell me where to send it. I will look at what you spend now, what it produces, and where the band says you should be. No pitch deck."
      />

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              HVAC Marketing Budget Questions
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
              { label: "LSA Management", href: "/lsa-management" },
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
