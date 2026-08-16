import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import InlineLeadForm from "@/components/InlineLeadForm";

export const metadata: Metadata = {
  title: "How Much Do HVAC and Plumbing Leads Cost?",
  description:
    "Real charged prices, pulled August 2026: $63.16 average per HVAC lead on LSA, $150.68 for exteriors, $41.03 chimney calls on Google Ads. Full table inside.",
  alternates: {
    canonical: "https://www.sequoiageo.com/how-much-do-hvac-plumbing-leads-cost",
  },
  openGraph: {
    title: "How Much Do HVAC and Plumbing Leads Cost?",
    description:
      "Real charged prices, pulled August 2026: $63.16 average per HVAC lead on LSA, $150.68 for exteriors, $41.03 chimney calls on Google Ads. Full table inside.",
    url: "https://www.sequoiageo.com/how-much-do-hvac-plumbing-leads-cost",
    type: "website",
  },
};

const faqs = [
  {
    question: "Why do lead costs swing so much month to month?",
    answer:
      "Small samples distort. The exteriors account above paid $225.21 per lead in a March with 2 charged leads and $125.08 in a June with 16. Same account, same market, same trade. Judge a channel on its lifetime average, $150.68 in that account, not on any single month.",
  },
  {
    question: "Are phone leads worth paying more for?",
    answer:
      "In the HVAC account above, phone leads averaged $68.00 and message leads $60.35, so the live caller carried the premium in that account. Whether the premium pays depends on how well your team answers, which is an operations question, not an ads question.",
  },
  {
    question: "Are these lead cost numbers estimates?",
    answer:
      "No. Every figure is a charged price from client accounts I manage, pulled August 2026, or from an audit I ran. Local Services Ads charges per lead and Google bills the client directly, so these are the amounts the platform actually charged. Your trade and market will differ.",
  },
  {
    question: "What about buying leads from Angi and similar sellers?",
    answer:
      "Track it before you trust it. A full-picture audit matches lead-platform spend to qualified calls and booked-job results by trade, then separates new customers from repeat and nonlead activity. The per-lead price means little without the jobs booked.",
  },
];

export default function LeadCostPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          {
            name: "How Much Do HVAC and Plumbing Leads Cost?",
            url: "https://www.sequoiageo.com/how-much-do-hvac-plumbing-leads-cost",
          },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      {/* Hero: the direct answer, numbers first */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="section-overline mb-4">Lead Costs</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl leading-tight">
            How Much Do HVAC and Plumbing Leads Cost?
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-gray-700">
            From client accounts I manage, pulled August 2026: HVAC leads averaged $63.16
            each on Google Local Services Ads in a Texas metro. An exteriors contractor in
            Texas averaged $150.68 per LSA lead, ranging from $125.08 to $225.21 by month.
            A chimney service in Boise paid $41.03 per phone lead on Google Ads search in
            July 2026. These are charged prices from real accounts, not survey estimates,
            and your trade and market will land differently.
          </p>
        </div>
      </section>

      {/* The table */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] mb-2">
            Charged Lead Prices by Trade and Channel
          </h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-100 pb-6">
            Every row is from an account we manage or an audit we ran. Trades and regions
            only, never client names.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#0D2318]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Trade and market</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C8EDD2]">Channel</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C8EDD2]">Cost per lead</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C8EDD2]">Sample</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  {
                    trade: "HVAC, Texas metro",
                    channel: "Local Services Ads",
                    cost: "$63.16 average",
                    sample: "19 charged leads, $1,200.14, Sep 2025 to Jul 2026",
                  },
                  {
                    trade: "Exteriors (windows, siding, roofing), Texas metro",
                    channel: "Local Services Ads",
                    cost: "$150.68 average",
                    sample: "38 charged leads, $5,725.87, Mar to Jul 2026",
                  },
                  {
                    trade: "Chimney service, Boise, Idaho",
                    channel: "Google Ads search",
                    cost: "$41.03 per phone lead",
                    sample: "9 call leads on $369.27, Jul 2026",
                  },
                  {
                    trade: "Plumbing, Florida",
                    channel: "Local Services Ads",
                    cost: "Not visible to us (client-held billing)",
                    sample: "5 charged phone leads, Jun to Jul 2026",
                  },
                ].map((row) => (
                  <tr key={row.trade} className="hover:bg-[#fafaf8]">
                    <td className="px-6 py-4 text-sm font-semibold text-[#1a1a1a]">{row.trade}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.channel}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#1A5C3A]">{row.cost}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.sample}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Local Services Ads charges per lead and Google bills the client directly.
            Prices vary by trade and market. The Boise campaign also ran 55 clicks at a
            $6.71 average cost per click.
          </p>
        </div>
      </section>

      {/* Month to month swings */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] mb-2">
            The Same Account, Month by Month
          </h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-200 pb-6">
            The exteriors account above, every month since it started. This is why single-month
            numbers mislead.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#0D2318]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Month</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C8EDD2]">Charged leads</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C8EDD2]">Total charged</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C8EDD2]">Cost per lead</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  { month: "March 2026", leads: "2", total: "$450.42", cpl: "$225.21" },
                  { month: "April 2026", leads: "3", total: "$414.18", cpl: "$138.06" },
                  { month: "May 2026", leads: "6", total: "$976.38", cpl: "$162.73" },
                  { month: "June 2026", leads: "16", total: "$2,001.31", cpl: "$125.08" },
                  { month: "July 2026", leads: "11", total: "$1,883.58", cpl: "$171.23" },
                ].map((row) => (
                  <tr key={row.month} className="hover:bg-[#fafaf8]">
                    <td className="px-6 py-4 text-sm font-semibold text-[#1a1a1a]">{row.month}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.leads}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.total}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#1A5C3A]">{row.cpl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            A March with 2 leads cost $225.21 each. A June with 16 cost $125.08. Nothing
            about the account changed except volume. Judge a channel on its lifetime
            average, $150.68 here, and give it months before you call a verdict. July also
            split 7 phone leads to 4 message leads, a mix worth watching because the HVAC
            account priced them differently: phone leads averaged $68.00 against $60.35 for
            message leads.
          </p>
        </div>
      </section>

      {/* The cautionary number */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
            The Number That Should Worry You More Than Price
          </h2>
          <div className="mt-6 space-y-5">
            <p className="text-base leading-relaxed text-gray-600">
              Low-priced leads and premium leads both hide the numbers that matter:
              jobs booked and the cost of each one. A full-picture audit matches recurring
              lead-platform invoices to booked-job results by trade, then separates new customers
              from repeat and nonlead activity.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              That is the standard I hold every row in the tables above to. A $41.03 phone
              lead in Boise is only a good number because those calls get answered and
              booked. A $150.68 exteriors lead can be a bargain and a $63.16 HVAC lead can
              be a waste, depending entirely on what happens after the phone rings. If you
              want the channels behind these numbers managed that way, that is what my{" "}
              <Link
                href="/lsa-management"
                className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
              >
                LSA management
              </Link>{" "}
              work is. The organic side, where the cost per call falls as rankings compound,
              lives on my{" "}
              <Link
                href="/hvac-seo"
                className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
              >
                HVAC SEO
              </Link>{" "}
              and{" "}
              <Link
                href="/plumbing-seo"
                className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
              >
                plumbing SEO
              </Link>{" "}
              pages.
            </p>
          </div>
        </div>
      </section>

      {/* On-page capture */}
      <InlineLeadForm
        source="how_much_do_hvac_plumbing_leads_cost"
        heading="Find out what your leads actually cost"
        subtext="Tell me where to send it. I will benchmark your numbers against the charged prices on this page and show you where the gap is. No pitch deck."
      />

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              Lead Cost Questions
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
              { label: "LSA Management", href: "/lsa-management" },
              { label: "HVAC Marketing Budgets", href: "/how-much-should-hvac-companies-spend-on-marketing" },
              { label: "Google LSA Changes in 2026", href: "/google-lsa-changes-2026" },
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
