import Link from "next/link";
import GHLWidget from "@/components/GHLWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional CMO for Home Service Companies | Sequoia GEO",
  description:
    "Marketing leadership without the full-time hire. A Fractional CMO who ran a home services company for 13 years and grew it to 130+ employees and 4x Inc 5000. Strategy, execution, and operator-level accountability.",
  alternates: {
    canonical: "https://www.sequoiageo.com/fractional-cmo",
  },
};

export default function FractionalCmoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-white px-5 py-2 text-sm font-medium text-[#1A5C3A] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
              Fractional CMO
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Marketing Leadership Built for{" "}
              <span className="text-[#1A5C3A]">Home Service Companies</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              You don&rsquo;t need a full-time CMO at $180K/year. You need someone who has already built
              what you&rsquo;re building, knows your trade from the inside, and can lead your marketing
              function without the overhead. That&rsquo;s what a Fractional CMO engagement looks like.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Start With a Strategy Call
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a href="tel:5595213122" className="text-base font-medium text-[#1A5C3A] hover:text-[#0D2318] transition-colors">
                (559) 521-3122
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What a Fractional CMO actually does */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What a Fractional CMO Actually Does
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              Not a consultant who hands you a deck. Not another agency vendor. A part-time marketing
              leader embedded in your company.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: "Marketing strategy and roadmap",
                body: "Where to spend, in what order, and why. Built from your actual revenue data, not industry benchmarks that have nothing to do with your market, your trade, or your margins.",
              },
              {
                title: "Vendor oversight and accountability",
                body: "You probably already have agencies running ads, SEO, or social. A Fractional CMO holds them to revenue outcomes instead of vanity metrics. I'll tell you who's earning their fee and who isn't.",
              },
              {
                title: "Budget allocation that connects to jobs",
                body: "Most home service companies don't know their cost per booked job by channel. I build the attribution framework so every dollar of marketing spend traces back to closed revenue.",
              },
              {
                title: "Hiring and team development",
                body: "If you're ready to bring marketing in-house (a coordinator, a CSR, a content person), I'll help you define the role, hire for it, and get them producing faster.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-base font-bold text-[#3A9E6A]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C8EDD2]/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Who This Is For
            </h2>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#C8EDD2]/20 p-8">
              <h3 className="text-lg font-extrabold text-[#0D2318] mb-5">This fits if you are...</h3>
              <ul className="space-y-3">
                {[
                  "Doing $2Mâ€“$15M revenue with no dedicated marketing leader",
                  "Spending $5Kâ€“$30K/month on marketing with no clear attribution",
                  "Managing 2â€“4 separate marketing vendors with no one connecting the dots",
                  "Growing fast enough that strategy gaps are starting to limit you",
                  "A founder who needs to stop making every marketing decision personally",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#0D2318]">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-8">
              <h3 className="text-lg font-extrabold text-[#1a1a1a] mb-5">This does NOT fit if you are...</h3>
              <ul className="space-y-3">
                {[
                  "Under $1M revenue and still validating product-market fit",
                  "Looking for someone to just run ads or post on social media",
                  "Wanting a big agency with 20 people assigned to your account",
                  "Not ready to share actual revenue data and job metrics",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-500">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fractional vs full-time comparison */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Fractional vs. Full-Time vs. Agency
            </h2>
          </div>
          <div className="mx-auto max-w-4xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 text-left font-bold text-[#1a1a1a]"></th>
                  <th className="py-3 text-center font-bold text-[#1a1a1a]">Full-Time CMO</th>
                  <th className="py-3 text-center font-bold text-[#1A5C3A] bg-[#C8EDD2]/30 rounded-t-lg">Fractional CMO</th>
                  <th className="py-3 text-center font-bold text-[#1a1a1a]">Marketing Agency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Typical monthly cost", "$15Kâ€“$20K+", "$3Kâ€“$8K", "$2Kâ€“$10K"],
                  ["Industry expertise", "Varies", "Home services, 13 yrs", "Usually generic"],
                  ["Strategic ownership", "Yes", "Yes", "Rarely"],
                  ["Vendor accountability", "Yes", "Yes", "Conflict of interest"],
                  ["Revenue attribution", "Depends on hire", "Built in", "Usually impressions/leads"],
                  ["Scales with you", "Fixed overhead", "Adjustable", "Retainer-based"],
                ].map(([label, col1, col2, col3]) => (
                  <tr key={label} className="border-b border-gray-100">
                    <td className="py-3 text-left font-medium text-gray-700">{label}</td>
                    <td className="py-3 text-center text-gray-500">{col1}</td>
                    <td className="py-3 text-center font-semibold text-[#0D2318] bg-[#C8EDD2]/20">{col2}</td>
                    <td className="py-3 text-center text-gray-500">{col3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#fafaf8] p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
                  I&rsquo;ve Done What You&rsquo;re Trying to Do
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I built Balanced Comfort Heating &amp; Air from a one-truck startup to 130+ employees
                  and $10M+ in annual revenue. We made the Inc 5000 four consecutive years: 2020, 2021,
                  2022, and 2023.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I was the marketing decision-maker for that entire run. I hired and fired agencies,
                  built attribution systems, managed ad spend in the low seven figures across channels,
                  and connected every dollar of marketing to dispatch data, revenue, and margin.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I&rsquo;m a California Licensed Contractor (B General, C-2, C-20 HVAC, C-36 Plumbing).
                  That background isn&rsquo;t just context. It&rsquo;s the reason I see things other
                  marketing leaders miss.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "13 years", label: "Running home services" },
                  { stat: "$10M+", label: "Annual revenue at peak" },
                  { stat: "4x", label: "Inc 5000 (2020-2023)" },
                  { stat: "130+", label: "Employees at peak" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-[#C8EDD2] p-5 text-center">
                    <div className="text-2xl font-extrabold text-[#0D2318]">{item.stat}</div>
                    <div className="mt-1 text-xs text-[#1A5C3A]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              How a Fractional CMO Engagement Works
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Full Picture Audit",
                body: "Every engagement starts with a deep audit of your current marketing: spend by channel, attribution, phone handling, booking rate, vendor performance, and revenue leakage. You get a complete picture before any strategy is built.",
              },
              {
                step: "02",
                title: "Strategy and Roadmap",
                body: "Based on the audit, I build a prioritized roadmap. What to fix, what to kill, what to scale, and in what order. Tied to your revenue targets, not generic best practices.",
              },
              {
                step: "03",
                title: "Ongoing Leadership",
                body: "Weekly or bi-weekly strategy sessions. Vendor management. Budget decisions. Hiring guidance. You get a senior marketing voice in the room without a full-time salary on the books.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C8EDD2]">
                  <span className="text-sm font-extrabold text-[#0D2318]">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Fractional CMO Services Include */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What a Fractional CMO for Home Service Companies Actually Delivers
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Fractional CMO services cover the full scope of marketing leadership. Strategy development, vendor
              oversight, budget allocation, marketing plan development, and performance reporting. Not just one
              channel. The whole function.
            </p>
          </div>
          <div className="space-y-8">
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-8">
              <h3 className="text-xl font-extrabold text-[#0D2318] mb-3">Comprehensive Marketing Strategy</h3>
              <p className="text-base leading-relaxed text-gray-600">
                A comprehensive marketing strategy for a home service company starts with the business: average
                ticket, gross margin by service line, booking rate, phone answer rate, seasonality, and your
                competitive landscape in the local market. Without that foundation, a marketing plan is
                guesswork. I build the strategy from your actual data, covering channel selection (paid search,
                local SEO, content marketing, referral programs), budget allocation by channel, lead generation
                targets by month, cost-per-booked-job targets, and conversion rates at every stage of the
                funnel.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-8">
              <h3 className="text-xl font-extrabold text-[#0D2318] mb-3">Vendor Accountability and Campaign Oversight</h3>
              <p className="text-base leading-relaxed text-gray-600">
                Most home service companies already have agencies running Google Ads, local SEO, or web design.
                The problem is that no one holds them accountable to outcomes that matter to you. Campaign
                oversight means evaluating every vendor against the same standard: cost per booked job, not
                impressions or clicks. Fractional CMO services include making those vendor decisions
                so you don&rsquo;t have to. I&rsquo;ll tell you who is earning the fee and who
                isn&rsquo;t, and I&rsquo;ll handle the difficult conversations.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-8">
              <h3 className="text-xl font-extrabold text-[#0D2318] mb-3">Attribution That Connects Marketing to Jobs</h3>
              <p className="text-base leading-relaxed text-gray-600">
                Most home service businesses do not know their cost per booked job by marketing channel. Building
                attribution starts with the phone system: call tracking numbers by channel, integration with your
                CRM or dispatch software, and reporting that connects a booked job back to the source that drove
                it. Once tracking results is operational rather than speculative, every budget decision becomes
                defensible. Stop guessing what your marketing is producing and start managing it like any other
                cost of doing business.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-8">
              <h3 className="text-xl font-extrabold text-[#0D2318] mb-3">Align Marketing with Your Business Goals</h3>
              <p className="text-base leading-relaxed text-gray-600">
                Marketing that does not align with business goals produces activity, not outcomes. A home service
                company planning an exit in three years needs a different marketing strategy than one trying to
                double revenue in five. A company entering a new service line needs different lead generation
                priorities than one deepening penetration in an existing market. Fractional CMO services build
                the marketing plan around where you are actually trying to go, with the capital constraints,
                labor capacity, and local market dynamics you are actually dealing with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Home Services Marketing Different */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Why Home Services Marketing Is Different
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Home services operates under constraints that make it distinct from most other verticals. A
              fractional CMO who has not run a home service company will spend the first six months learning
              this.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Service is geographically bounded",
                body: "A plumbing company in Fresno cannot serve customers in Sacramento. Every marketing dollar must target the service area or it is wasted. Local SEO, local visibility in the Google Maps pack, and geotargeted paid search are the channels that drive local market revenue. Brand awareness campaigns that feel good but do not produce inbound calls from the actual service area are a drain on the budget.",
              },
              {
                title: "Demand is heavily seasonal",
                body: "HVAC demand spikes in June and July and again in October and November. Roofing contractors see surge demand after hail events. Restoration companies run surge volumes after rain events and pipe freeze cycles. A marketing strategy that does not account for seasonality misallocates budget, spending equally across months when the revenue opportunity varies by three or four times.",
              },
              {
                title: "Phone calls are the primary conversion event",
                body: "Home service customers call. They do not fill out forms. This means call tracking, phone answer rate, and call-to-book conversion are the critical metrics. Marketing feels broken to a lot of home service owners not because their lead generation is failing but because their phone handling is failing. I diagnose that distinction and address the full funnel, not just the top.",
              },
              {
                title: "Reviews drive conversion rates directly",
                body: "A home service company with 400 reviews at 4.8 stars converts search traffic at a materially higher rate than a competitor with 80 reviews at 4.2 stars. Review acquisition strategy, review response protocol, and handling of negative reviews are marketing functions that directly affect conversion rates and belong inside the comprehensive marketing strategy.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#3A9E6A]/20 bg-white p-6 shadow-sm">
                <h3 className="text-base font-extrabold text-[#0D2318] mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Common Questions About Fractional CMO Services
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "How is a fractional CMO different from a marketing consultant?",
                a: "A marketing consultant delivers a plan and exits. A fractional CMO stays in the engagement, implements the plan, manages vendors, makes ongoing budget decisions, and stays accountable to results over time. The engagement functions like having a senior marketing leadership team member inside your business, not an outside advisor who visits once.",
              },
              {
                q: "Do I need a marketing team in place before hiring a fractional CMO?",
                a: "No. Many home service businesses that hire a fractional CMO have no internal marketing team at all. Part of the fractional CMO's work is defining what internal marketing capacity the business needs, hiring for it, and building the team over time. Marketing leadership without an existing team is exactly the situation the fractional model is built for.",
              },
              {
                q: "How long does a fractional CMO engagement last?",
                a: "Most engagements run 12 to 24 months. The first 90 days are the audit and strategy build phase. Months four through twelve are execution and optimization. After the first year, many clients extend the engagement or transition some functions to a newly hired internal marketing team the fractional CMO helped build.",
              },
              {
                q: "Can a fractional CMO help if I'm already working with agencies?",
                a: "Yes, and this is the most common situation. Most home service businesses entering a fractional CMO engagement already have vendors running ads, SEO, or content marketing. The fractional CMO evaluates those vendors against actual performance data, restructures relationships that are underdelivering, and builds the management layer that ensures the remaining vendors are producing measurable growth against defined targets.",
              },
              {
                q: "What does fractional CMO pricing look like for home service companies?",
                a: "Fractional CMO pricing for home service companies typically ranges from $3,000 to $8,000 per month depending on scope, hours, and the number of vendor relationships being managed. Transparent pricing means knowing exactly what the monthly retainer includes before the engagement starts. The comparison that matters is not fractional CMO cost versus zero, it is fractional CMO cost versus the marketing dollars currently being wasted on unmanaged channels, or versus a full-time executive hire at $180,000 to $220,000 per year.",
              },
              {
                q: "What industries do you work with?",
                a: "Fractional CMO services at Sequoia GEO are built specifically for home service companies: HVAC contractors, plumbing businesses, roofing contractors, water damage and restoration companies, and other trade-based home service operations. The marketing dynamics are similar across trades (local search, phone-first conversion, seasonal demand, review-driven reputation), though each trade has channel-specific nuances that 13 years of operating in home services makes immediately familiar.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-6">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-3">{item.q}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Fractional CMO Services Include */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Fractional CMO Services Include
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              When you engage a fractional CMO agency, you are purchasing an ongoing marketing leadership function.
              That includes strategic marketing planning, vendor oversight, digital marketing channel management,
              and accountability for revenue outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Digital Marketing Channel Oversight",
                body: "Fractional CMO services include ownership of your digital marketing across every channel that drives calls and bookings: Google Ads, local SEO, Google Business Profile, social media marketing, content marketing services, email marketing, and website conversion rate optimization. Every channel is tied to a specific business objective and every marketing campaign is measured against revenue.",
              },
              {
                title: "Go-to-Market Strategy",
                body: "Go to market strategy is one of the most underutilized capabilities a fractional CMO agency provides. Every time a home service company enters a new city, launches a new service line, or wants to compete for a higher-ticket customer segment, a go to market strategy needs to be built: positioning, channel selection, messaging, competitive differentiation, and budget allocation before the first dollar is spent.",
              },
              {
                title: "Marketing and Sales Alignment",
                body: "Marketing and sales alignment is a capability most contractors have never had. A fractional CMO sits close enough to operations to understand what happens after a call comes in: booking rate, CSR performance, close rate on the truck. Those insights feed back into the marketing strategy and turn digital marketing spend into a closed-loop revenue system built around actual customer acquisition outcomes.",
              },
              {
                title: "Strategic Marketing Leadership",
                body: "Strategic marketing begins with a full audit of your current marketing efforts: what channels you are running, what your marketing metrics show, where customer acquisition costs are too high, and where marketing effectiveness is lowest. A fractional chief marketing officer does not add budget to a broken pipeline. They identify what is working, what is wasting money, and what is missing entirely.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8EDD2]">
                    <svg className="h-4 w-4 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fractional CMO vs Agencies */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Why Fractional CMO Services Beat Traditional Marketing Agencies
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Traditional marketing agencies provide execution. A fractional CMO agency provides executive level
              marketing leadership. That distinction matters because execution without leadership produces activity
              without results.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "Accountability to Business Objectives",
                body: "When home service companies work with traditional marketing agencies, they get campaign management and monthly reports. They do not get a chief marketing officer sitting on their leadership team, making decisions about how to allocate marketing expenditure across channels, or someone developing marketing strategies that connect digital marketing to revenue outcomes. A fractional CMO agency closes that gap.",
              },
              {
                number: "02",
                title: "C-Level Marketing Expertise at a Fraction of the Cost",
                body: "Fractional CMO services are the cost effective solution for home service companies that need executive level marketing leadership without the cost of a full-time hire. A full-time chief marketing officer commands $200,000 or more in annual compensation. Fractional CMO services deliver c-level marketing expertise at a fraction of that investment, with a proven track record in the specific industry that matters to your business.",
              },
              {
                number: "03",
                title: "Fresh Perspective on Marketing Challenges",
                body: "Companies that have been working with the same vendors for years often develop blind spots. Marketing challenges that have been accepted as normal are often solvable with a new strategic direction and someone willing to ask the questions that internal teams have stopped asking. A fractional CMO brings that fresh perspective alongside the industry knowledge to act on it immediately.",
              },
              {
                number: "04",
                title: "A Leadership Team, Not a Solo Consultant",
                body: "A fractional CMO agency like Sequoia GEO brings a leadership team with specialized expertise across paid media, SEO, and analytics alongside the strategic direction of a seasoned chief marketing officer. Independent consultants with high level marketing expertise run into bandwidth constraints when managing marketing initiatives across multiple channels simultaneously. A fractional CMO agency has the depth to execute as well as lead.",
              },
            ].map((item) => (
              <div key={item.number} className="rounded-2xl border border-gray-200 bg-white p-7">
                <div className="mb-4 text-4xl font-black text-[#C8EDD2]">{item.number}</div>
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fractional CMO Extended FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              More Fractional CMO Questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What does a fractional CMO agency provide that an independent consultant does not?",
                a: "A fractional CMO agency brings a full marketing leadership team rather than a single practitioner. When you hire a fractional CMO through an agency, you get strategic marketing leadership plus execution capacity. Independent consultants often have deep industry expertise but limited bandwidth to oversee marketing initiatives, manage vendors, and develop marketing strategies simultaneously. A fractional CMO agency closes that gap by pairing senior marketing leadership with a team that can execute on the strategy.",
              },
              {
                q: "How do fractional CMO services differ from outsourced marketing strategy services?",
                a: "Outsourced marketing strategy services typically deliver a plan and exit. Fractional CMO services deliver ongoing executive level marketing leadership and accountability. A fractional chief marketing officer stays involved through implementation, measuring marketing effectiveness, adjusting marketing tactics based on results, and ensuring that the go to market strategy is actually producing customer acquisition outcomes. It is a leadership relationship, not a project engagement.",
              },
              {
                q: "What business objectives can fractional CMO services help a home service company achieve?",
                a: "The business objectives fractional CMO services are most commonly engaged to achieve include lowering customer acquisition costs, increasing booking rate from digital marketing leads, building a go to market strategy for a new service area, improving marketing metrics and attribution so leadership can make better budget decisions, and accelerating growth into a new customer segment or geography. In each case, the fractional CMO provides strategic guidance, oversees marketing initiatives, and is accountable to outcomes rather than activity.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-3">{item.q}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to stop guessing on marketing?
          </h2>
          <p className="mt-4 text-lg text-[#C8EDD2]/80">
            A 15-minute strategy call is enough to know whether a Fractional CMO engagement makes sense
            for where you are right now. No pitch deck. Just a direct conversation about your numbers.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]">
              Book a Strategy Call
            </Link>
            <a href="tel:5595213122" className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors">(559) 521-3122</a>
          </div>
        </div>
      </section>
      <GHLWidget />
    </>
  );
}
