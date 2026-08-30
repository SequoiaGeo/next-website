import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import InlineLeadForm from "@/components/InlineLeadForm";

export const metadata: Metadata = {
  title: "How Much Should Plumbers Spend on Marketing?",
  description:
    "Plan a plumbing marketing budget around capacity, job mix, and attributable jobs booked. See how to find untracked lead-platform spend before adding budget.",
  alternates: {
    canonical: "https://www.sequoiageo.com/how-much-should-plumbers-spend-on-marketing",
  },
  openGraph: {
    title: "How Much Should Plumbers Spend on Marketing?",
    description:
      "Plan a plumbing marketing budget around capacity, job mix, and attributable jobs booked. See how to find untracked lead-platform spend before adding budget.",
    url: "https://www.sequoiageo.com/how-much-should-plumbers-spend-on-marketing",
    type: "website",
  },
};

const faqs = [
  {
    question: "Is Angi worth it for plumbers?",
    answer:
      "It can be, if the spend is tracked to jobs booked. A full-picture audit matches recurring lead-platform invoices to qualified calls and booked-job results by trade. Whatever lead source you buy, establish the tracking first.",
  },
  {
    question: "How many leads should Local Services Ads produce for a plumber?",
    answer:
      "Fewer than the sales pitch implies, in many markets. A Florida plumber whose profile we manage took 5 charged phone leads through LSA across June and July 2026. Volume varies by market, but budget for a steady drip, not a flood, and make every one of those calls count.",
  },
  {
    question: "Should the budget percent come off gross or net revenue?",
    answer:
      "Gross. The band exists to scale marketing with the size of the operation, and top-line revenue is the cleanest measure of that. Judge the spend afterward by booked jobs, not by whether the percent looked comfortable.",
  },
  {
    question: "Where should a plumber put the first marketing dollars?",
    answer:
      "Toward being found and being answered. Rankings, reviews, and a booking process that picks up the phone. Volume spend comes after that, because more calls into an unanswered line is a bigger version of the same leak. I publish real numbers on what that work produces on my plumbing SEO page.",
  },
];

export default function PlumberMarketingBudgetPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          {
            name: "How Much Should Plumbers Spend on Marketing?",
            url: "https://www.sequoiageo.com/how-much-should-plumbers-spend-on-marketing",
          },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      {/* Hero: the direct answer, number first */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="section-overline mb-4">Marketing Budgets</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl leading-tight">
            How Much Should Plumbers Spend on Marketing?
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-gray-700">
            Plan on 6 to 10 percent of gross revenue. The band comes from my own books, not
            a survey. I ran Balanced Comfort for 13 years and held California contractor
            licenses, including C-36 Plumbing, while I operated it. We built past $17
            million in annual revenue with more than 130 employees, spending low seven
            figures a year on advertising. Low seven figures against $17 million is 6 to 10
            percent. Four straight Inc 5000 lists, 2021 through 2024, came out of that
            spend rate.
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

      {/* The cautionary tale */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
            The Lead-Platform Invoice Nobody Matched to Jobs
          </h2>
          <div className="mt-6 space-y-5">
            <p className="text-base leading-relaxed text-gray-600">
              Percent-of-revenue budgeting assumes the dollars inside the budget work.
              Often they do not, and nobody notices. A full-picture audit matches recurring
              lead-platform spend to booked-job results by trade, then separates new-customer
              calls from repeat and nonlead activity.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              The owner was not careless and the platform was not lying. The company had a
              blind spot: no one had ever connected the monthly invoice to the booked-job
              number. That connection is the whole audit. It is also why I tell plumbers
              the budget question is the second question. The first is whether you can see
              what your current spend books. Until you can, changing the number just
              changes the size of the leak.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              This is the cautionary number I want stuck in your head when a rep quotes you
              a per-lead price: the price of the lead tells you nothing. Jobs booked and the
              cost per booked job tell you whether the source worked.
            </p>
          </div>
        </div>
      </section>

      {/* Where the band comes from */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
            Where the 6 to 10 Percent Band Comes From
          </h2>
          <div className="mt-6 space-y-5">
            <p className="text-base leading-relaxed text-gray-600">
              Industry guides commonly cite percent-of-revenue ranges for the trades. Treat
              those as directional, because most of the people publishing them never ran a
              shop. My band is the spend rate I actually held while the company grew:
              advertising in the low seven figures every year against $17 million in
              revenue. It funded brand, search, and the phones that answered what the spend
              produced.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              A band beats a flat monthly figure because plumbing capacity moves. Trucks
              get added, techs leave, a drain season spikes. A percent of revenue scales
              with the operation. Where you sit inside the band is an operator call: newer
              and unknown companies live near the top because awareness is bought before it
              pays, while established shops with heavy referral flow can run nearer the
              bottom, as long as they defend the base of reviews and rankings instead of
              cutting to zero.
            </p>
          </div>
        </div>
      </section>

      {/* LSA reality for plumbers */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
            What Local Services Ads Actually Produce for a Plumber
          </h2>
          <div className="mt-6 space-y-5">
            <p className="text-base leading-relaxed text-gray-600">
              From client accounts I manage: a Florida plumber took 5 charged phone leads
              through Google{" "}
              <Link
                href="/lsa-management"
                className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
              >
                Local Services Ads
              </Link>{" "}
              across June and July 2026. Billing for that account sits with the client, so
              I will not quote dollars I did not verify. The count is the point. In many
              plumbing markets, LSA is a steady drip, not a flood, and a realistic budget
              treats it as one channel among several instead of the plan.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              That is why the band matters. Five leads in two months will not fill a board,
              but five answered, booked, five-star-reviewed jobs compound into the rankings
              and reputation that produce the next fifty calls. The budget buys the system,
              not a lead faucet. I published the charged prices behind several trades on{" "}
              <Link
                href="/how-much-do-hvac-plumbing-leads-cost"
                className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
              >
                what HVAC and plumbing leads cost
              </Link>
              , and what the organic side of the system looks like on my{" "}
              <Link
                href="/plumbing-seo"
                className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
              >
                plumbing SEO
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      {/* On-page capture */}
      <InlineLeadForm
        source="how_much_should_plumbers_spend_on_marketing"
        heading="Get a free plumbing marketing budget review"
        subtext="Tell me where to send it. I will look at what you spend now, what it books, and where the leaks are. No pitch deck."
      />

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              Plumbing Marketing Budget Questions
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
              { label: "Plumbing SEO", href: "/plumbing-seo" },
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
