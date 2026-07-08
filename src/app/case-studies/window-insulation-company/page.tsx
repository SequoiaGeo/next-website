import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window & Insulation Company Case Study | Sequoia GEO",
  description:
    "A Central Valley home improvement company was spending $28,000 a month on ads graded by their own inflated dashboard. Here is what honest measurement found, and what happened when the spend answered to revenue.",
  alternates: {
    canonical:
      "https://www.sequoiageo.com/case-studies/window-insulation-company",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The $28,000-a-month question: what a window and insulation company's ads were really doing",
  description:
    "A home improvement company in California's Central Valley was spending $28,000 a month across Google, Local Services Ads, and Meta with inflated conversion values grading their own homework. What honest measurement found, and what changed. Company anonymized by design.",
  author: {
    "@type": "Person",
    "@id": "https://www.sequoiageo.com/#aaron-husak",
    name: "Aaron Husak",
  },
  publisher: {
    "@id": "https://www.sequoiageo.com/#organization",
  },
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  mainEntityOfPage:
    "https://www.sequoiageo.com/case-studies/window-insulation-company",
};

const stats = [
  { value: "$28K+", label: "Peak monthly ad spend at takeover" },
  { value: "~$7,500", label: "Monthly spend after the cleanup" },
  { value: "~$60K", label: "Manufacturer co-op funds accrued" },
  { value: "Weekly", label: "Sales and marketing meeting cadence" },
];

export default function WindowInsulationCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Nav strip */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-overline mb-4">Anonymized Case Study</p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              The $28,000-a-Month Question
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              What a window and insulation company&rsquo;s ads were really doing. A home
              improvement company in California&rsquo;s Central Valley, anonymized by design,
              because the point is the pattern, not the client.
            </p>
            <p className="mt-4 text-sm text-[#C8EDD2]/60">
              By Aaron Husak · Published July 8, 2026
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <div className="text-2xl font-extrabold text-[#3A9E6A]">{item.value}</div>
                <div className="mt-1 text-xs text-[#C8EDD2]/70 leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 - Where they started */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold text-[#1A5C3A] mb-4">
              Engagement: Google Ads, Local Services Ads, Meta ads, co-op program management,
              and the weekly discipline of tying marketing to sales
            </p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Where they started
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                This company was not under-spending. Ad spend peaked above $28,000 a month
                across Google, Local Services Ads, and Meta in the early months of the
                engagement, and on paper the account looked like it was earning it. The
                reporting showed strong conversion numbers.
              </p>
              <p>
                The first weeks inside the account told a different story. Our ads lead put it
                plainly in his takeover notes: the more he dug, the more he found. The headline
                problems:
              </p>
              <ul className="space-y-4 list-disc pl-6">
                <li>
                  <strong>The conversion values in Google Ads were inflating themselves.</strong>{" "}
                  Values were being passed into the account automatically in a way that
                  overstated performance, so every report built on them flattered the ads. The
                  dashboard was not measuring the business. It was grading its own homework.
                </li>
                <li>
                  <strong>The account was optimizing toward low-intent actions.</strong> Google
                  spends your budget chasing whatever you tell it counts as a win. What counted
                  as a win here included actions that were not qualified calls and were not
                  real project inquiries. So the machine got very good at buying the wrong
                  thing.
                </li>
                <li>
                  <strong>The Meta budget fed a chatbot funnel nobody could measure.</strong>{" "}
                  Ad traffic for a county-program promotion landed in a chat flow with no
                  interaction tracking behind it. Money went in. Nobody could say what came
                  out.
                </li>
              </ul>
              <p>
                None of this was visible from the owner&rsquo;s seat. That is the point. It
                never is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - What we did */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What we did
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Measurement first, spend second. Before touching budgets, we rebuilt what
                counted as a conversion: qualified phone calls and real project inquiries for
                the window and insulation lines, nothing else. We corrected the inflated values
                being passed automatically, and we told the client the honest consequence up
                front: the reported numbers would look worse for a while, because for the first
                time they would be real.
              </p>
              <p>
                Then the spend had something true to optimize against. Campaigns were
                restructured around the higher-intent searches, budgets were pulled off what
                the cleaned data showed was not producing, and monthly spend came down from its
                peak above $28,000 to about $7,500 by March while inquiries for window and
                insulation projects kept arriving.
              </p>
              <p>Two more pieces did quiet, unglamorous work:</p>
              <ul className="space-y-4 list-disc pl-6">
                <li>
                  <strong>A weekly sales and marketing meeting with the client&rsquo;s office</strong>,
                  comparing booked sales against the same month the prior year, so ad decisions
                  answered to revenue instead of to a dashboard.
                </li>
                <li>
                  <strong>The manufacturer co-op program, actually managed.</strong> Most
                  contractors leave co-op money on the table because the paperwork is
                  nobody&rsquo;s job. We ran the program and accrued roughly $60,000 in co-op
                  funds against the client&rsquo;s advertising.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - The honest part */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              The honest part
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                When we corrected the tracking, the conversion totals dropped. If your
                agency&rsquo;s numbers only ever go up, ask what happens to them when someone
                tells the truth. Cleaning this account meant reporting worse-looking numbers to
                the client on purpose, because the inflated ones were steering tens of
                thousands of dollars a month toward junk. That conversation takes ten minutes
                and a spine, and it is the single most valuable thing that happened in this
                engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - The takeaway */}
      <section className="bg-[#1a1a1a] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="section-overline mb-4">The Takeaway</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Big ad budgets do not fail loudly.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-400">
              <p>
                They fail politely, behind dashboards that say everything is fine. If you are
                spending five figures a month and cannot name, in one sentence, exactly what
                counts as a conversion in your account, assume the machine is buying something
                you would not pay for on purpose. This company&rsquo;s ads did not need more
                money. They needed the truth wired in first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attribution + CTA */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-extrabold text-white">
            Spending five figures a month and not sure what it buys?
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
            >
              Book a Free Strategy Call
            </Link>
          </div>
          <p className="mt-10 text-xs leading-relaxed text-[#C8EDD2]/50">
            Figures from the company&rsquo;s own ad account records, spend invoices,
            tracking-change documentation, and co-op accrual records, November 2025 through
            April 2026, rounded. Company anonymized by design.
          </p>
        </div>
      </section>
    </>
  );
}
