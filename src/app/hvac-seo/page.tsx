import Link from "next/link";
import type { Metadata } from "next";
import InlineLeadForm from "@/components/InlineLeadForm";
import FaqJsonLd from "@/components/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";

export const metadata: Metadata = {
  title: "HVAC SEO & Marketing That Books Jobs | Sequoia GEO",
  description:
    "HVAC SEO from an operator who ran a home services company for 13 years and grew it to 130+ employees. Rankings tied to qualified calls and jobs booked.",
  alternates: {
    canonical: "https://www.sequoiageo.com/hvac-seo",
  },
};

const faqs = [
  {
    question: "How long does HVAC SEO take to work?",
    answer:
      "Months, not weeks. Google Business Profile work moves fastest. Content and authority building take longer, and competitive metros take longer than small markets. Paid search fills the gap while organic builds, then hands territory back as rankings take hold. Anyone quoting you a guaranteed timeline is guessing, and anyone guaranteeing rankings is lying.",
  },
  {
    question: "What makes HVAC SEO different from general SEO?",
    answer:
      "Three things. Every job is local, so proximity drives rankings. Demand is seasonal, so content and budget have to move with the weather. And the highest-intent searches happen when equipment fails, which means trust signals like review recency and page speed decide who gets the call. Generic SEO ignores all three.",
  },
  {
    question: "Do I need both paid advertising and organic SEO for my HVAC company?",
    answer:
      "Most HVAC companies do. Paid search captures emergency demand today. Organic compounds and lowers your cost per lead over time. As rankings strengthen, you pull ad spend off keywords you own organically and point it at new service areas or replacement work.",
  },
  {
    question: "How do I measure whether my HVAC SEO is working?",
    answer:
      "Phone calls and booked jobs from organic search. Not rankings, not traffic. That requires call tracking, Google Analytics, and Search Console wired in before the work starts, so every dollar can be traced to an outcome. If your current program cannot draw a line from rankings to the dispatch board, it is not being managed.",
  },
  {
    question: "Should HVAC companies buy leads from Angi or other lead sellers?",
    answer:
      "Audit the math first. A full-picture review matches recurring lead-platform spend to qualified calls and jobs booked by trade, then separates new customers from repeat and nonlead activity. Lead sellers can fill a slow week, but every lead fee still needs to connect to a qualified call and job booked.",
  },
  {
    question: "Does AI search matter for HVAC companies yet?",
    answer:
      "Yes, and it rewards the same fundamentals. When a homeowner asks ChatGPT or Perplexity who to call, those tools lean on the signals real customers already left behind: reviews, consistent business information, and pages that state plainly what you do and where. There is no separate trick to buy. Companies with strong local SEO foundations are the ones AI assistants recommend, which is why I track AI referrals in every account I manage.",
  },
  {
    question: "What does HVAC SEO cost with Sequoia GEO?",
    answer:
      "Engagements start at $2,500 a month with a 3-month initial term, month to month after. Ad spend is separate, stays yours, and is billed to you directly by Google.",
  },
];

export default function HvacSeoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "Services", url: "https://www.sequoiageo.com/services" },
          { name: "HVAC SEO", url: "https://www.sequoiageo.com/hvac-seo" },
        ]}
      />
      <ServiceJsonLd
        serviceType={"HVAC SEO and Marketing"}
        description={"SEO and marketing for HVAC contractors, connecting local search visibility to booked jobs rather than to lead counts."}
        url={"https://www.sequoiageo.com/hvac-seo"}
      />
      <FaqJsonLd faqs={faqs} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-white px-5 py-2 text-sm font-medium text-[#1A5C3A] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
              HVAC Marketing
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              HVAC SEO Built by Someone Who{" "}
              <span className="text-[#1A5C3A]">Ran an HVAC Company</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              I spent 13 years running Balanced Comfort Heating &amp; Air. I know your seasonality,
              your CSR challenges, your average ticket, and what an emergency call is worth.
              That context shapes every digital marketing decision I make for your HVAC business.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Most vendors treat SEO for HVAC companies as a checklist: update meta tags, build
              citations, move on. I tie every tactic to a business outcome, not organic traffic
              numbers. The market data behind that approach is on our{" "}
              <Link href="/hvac-statistics" className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]">
                HVAC industry statistics
              </Link>{" "}
              page.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact#book"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Choose a Time With Aaron
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

      {/* The operator difference */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What an Agency Misses. What I See.
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              Most HVAC marketing agencies report on impressions and clicks. Here&rsquo;s what matters to an HVAC business owner.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              { title: "Booking rate by season", body: "Summer emergency calls should book at a far higher rate than shoulder-season calls. If yours don't, the problem isn't your ads, it's your CSR script. I'll tell you that." },
              { title: "Average ticket by lead source", body: "Not all leads are worth the same. I track which channels produce your most profitable jobs, not just your highest volume." },
              { title: "Saturday phone handling", body: "The most common HVAC revenue leak: calls on Saturday going to voicemail or a CSR who can't quote. I catch this in week one." },
              { title: "Seasonal campaign timing", body: "I've run HVAC ads through 13 California summers. I know when to scale, when to pull back, and which keywords convert in a heat emergency." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-base font-bold text-[#3A9E6A]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C8EDD2]/70">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-[#C8EDD2]/70">
            The HVAC calendar is the strategy. Pre-season tune-up pushes before the first heat wave,
            maintenance plans in the shoulder seasons, and ad budgets that scale into the peaks
            instead of averaging across the year. A vendor who has never sat through a July dispatch
            board sets the same budget in April as in August. That mistake shows up on your P&amp;L,
            not in their report.
          </p>
        </div>
      </section>

      {/* Operator credentials */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
                  13 Years in the HVAC Business
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Balanced Comfort Heating &amp; Air grew from a startup to 130+ employees and
                  $17M+ in annual revenue before the exit. We made the Inc 5000 four years running: 2020, 2021, 2022, 2023.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I didn&rsquo;t just market the company. I dispatched technicians. I listened to call
                  recordings. I sat in CSR trainings. I watched the seasons shift and knew exactly when
                  to run aggressive AC campaigns and when to start pre-season furnace tune-up pushes.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I also signed the checks. Our annual ad spend ran in the low seven figures against
                  that $17M+ in revenue. Do the division and it lands in the 6 to 10 percent of
                  revenue band, which is still how I frame budgets today. The full breakdown is in{" "}
                  <Link href="/how-much-should-hvac-companies-spend-on-marketing" className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]">
                    how much HVAC companies should spend on marketing
                  </Link>.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I held California&rsquo;s C-20 HVAC license while running my own company. This isn&rsquo;t just marketing context:
                  it&rsquo;s the reason I see things in your HVAC business that a typical
                  marketing agency never will.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  When I audit an HVAC company now, I am not reading a template. I am looking for
                  the leaks I lived through: the Saturday calls nobody answered, the CSR who quoted
                  a diagnostic fee like an apology, the ad budget that stayed flat while the
                  dispatch board overflowed. Marketing vendors count clicks. Operators count trucks.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "13 years", label: "Running an HVAC company" },
                  { stat: "130+", label: "Employees at peak" },
                  { stat: "4x", label: "Inc 5000 (2021-2024)" },
                  { stat: "C-20", label: "CA HVAC license held" },
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

      {/* First-hand lead cost data */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What an HVAC Lead Actually Costs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Not benchmarks from a blog. Charged-lead data from client accounts I manage, pulled
              August 2026. If a vendor quotes you a cost per lead without showing charged invoices,
              ask where the number came from. Mine come from the accounts.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#fafaf8] p-7 text-center">
              <div className="text-3xl font-extrabold text-[#0D2318]">$63.16</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Average per charged Local Services Ads lead for an HVAC contractor in a Texas metro:
                19 charged leads from September 2025 through July 2026, $1,200.14 total.
              </p>
            </div>
            <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#fafaf8] p-7 text-center">
              <div className="text-3xl font-extrabold text-[#0D2318]">$68.00 / $60.35</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Same account, by lead type: 7 phone leads at a $68.00 average, 12 message leads at a
                $60.35 average. Phone leads cost more.
              </p>
            </div>
            <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#fafaf8] p-7 text-center">
              <div className="text-3xl font-extrabold text-[#0D2318]">912 reviews</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                At a 4.9 average on an HVAC Google Business Profile I manage in Texas. Review velocity
                is a system tied to dispatch, not a favor you ask for at the door.
              </p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-gray-500">
            LSA charges per lead and Google bills you directly. Prices vary hard by trade and
            market: an exteriors contractor I manage in a Texas metro pays $150.68 average on the
            same platform, 38 charged leads at $5,725.87 from March through July 2026. These are
            real charged prices, not estimates. Charged-lead data across more trades is in{" "}
            <Link href="/how-much-do-hvac-plumbing-leads-cost" className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]">
              how much HVAC and plumbing leads cost
            </Link>.
          </p>
        </div>
      </section>

      {/* LSA to Performance Max migration */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Running Local Services Ads? The Ground Is Moving.
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              Google is folding LSA into Google Ads. Verified against Google&rsquo;s own
              documentation in July 2026, then re-checked on our accounts in August.
            </p>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-[#C8EDD2]/80">
            <p>
              A phased migration begins August 2026 for select US home-services advertisers. LSA
              becomes a Performance Max pay-per-lead campaign type inside Google Ads, and the old
              LSA dashboard becomes inaccessible once an account migrates. Lead history carries
              over. Campaign-level performance metrics and cost history do not.
            </p>
            <p>
              That last part is the trap. If you have years of charged-lead pricing in your LSA
              dashboard, it disappears at migration unless someone exports it first. Google emails
              account admins 14 days before their migration date, plus a 7-day reminder. Miss those
              two emails and the data is gone.
            </p>
            <p>
              We completed full pre-migration exports for three client accounts in July 2026, every
              month of charged-lead history preserved before the dashboards close. As of August 2,
              no migration notice had landed on any account we manage, which means the window to
              export is still open. If nobody is watching your LSA account for that email, that is
              worth fixing this month.
            </p>
          </div>
        </div>
      </section>

      {/* Case study proof strip */}
      <section className="bg-white pt-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#fafaf8] p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1A5C3A] mb-3">
              Proof, Not Promises
            </p>
            <p className="text-lg font-bold text-[#1a1a1a]">
              Page one in the first month, measured from day one
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              The same local SEO process in action: a home services company with a dated,
              unmeasured site rebuilt into a page-one presence within three weeks of launch, with
              analytics, call tracking, and form tracking wired from the start.
            </p>
            <Link
              href="/case-studies/firemans-chimney-sweep"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
            >
              Read the case study
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What I manage */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              The Full Picture for HVAC Companies
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              These aren&rsquo;t standalone HVAC services. They&rsquo;re one integrated program,
              every channel tracked back to your dispatch board, with one person accountable for
              the combined result.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Google Ads managed to cost-per-booked-job",
              "Local Services Ads setup & dispute management",
              "Google Business Profile optimization",
              "Map Pack ranking strategy",
              "Seasonal keyword campaigns (AC repair, heating & cooling)",
              "Emergency service ad scheduling",
              "Review generation integrated with dispatch",
              "HVAC website conversion optimization",
              "AI search visibility (ChatGPT, Perplexity)",
              "Marketing attribution & call tracking",
              "CSR booking rate analysis",
              "Vendor accountability (if you have existing agencies)",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What HVAC SEO involves */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What HVAC SEO Actually Involves
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Four areas of work, managed as one program and measured in phone calls.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Local SEO and Google Business Profile",
                body: "The Map Pack can be an important source of emergency HVAC calls. Keep categories, services, hours, service areas, and public business information accurate. Compare review count, rating, recency, responses, and request completion, but do not treat review velocity as a published ranking formula. Google describes local ranking through relevance, distance, and prominence.",
              },
              {
                title: "On-Page Service and Location Pages",
                body: "A dedicated page for every major service and every city you serve, each mapped to what homeowners actually search: emergency queries, equipment terms, and problem phrases. One generic service-area page does not rank. Thin pages are how HVAC contractors lose high-value keywords to smaller competitors. Every page should answer the question the homeowner typed before it asks for the call.",
              },
              {
                title: "Technical Performance",
                body: "A homeowner with a dead AC is often searching from a phone. Mobile usability, crawl access, page speed, and clear service information affect whether the page is eligible, usable, and persuasive. Supported structured data can reduce ambiguity when it matches the visible page, but it does not decide rankings or AI recommendations.",
              },
              {
                title: "Authority and Measurement",
                body: "Backlinks from supplier directories, trade associations, and local media build the authority that holds rankings. And none of it counts without instrumentation: call tracking, Google Analytics, and Search Console wired in first, so the report shows calls and booked jobs by channel instead of traffic. Rankings without instrumentation is a story. Rankings with call tracking is a business case.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7">
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

      {/* How the engagement runs */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              How the Engagement Runs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              No mystery retainer. Here is what you actually get, month by month.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Month One: The Audit and the Wiring",
                body: "I audit your full footprint: website, Google Business Profile, rankings, citations, ad accounts, and how your phones get answered. Then the measurement gets wired in: call tracking, analytics, Search Console. Nothing gets optimized until we can prove what it produced.",
              },
              {
                title: "Months Two and Three: Pages That Book Calls",
                body: "Service and location pages built around what your customers actually search, starting with the highest-value gaps the audit found. This phase is usually where the first ranking movement shows, and where thin pages that were bleeding calls to competitors get replaced.",
              },
              {
                title: "Ongoing: Authority and Season Shifts",
                body: "Review generation tied to dispatch, local link acquisition, and campaign timing that follows your season instead of a set-and-forget budget. When the first heat wave hits, your campaigns are already positioned for it, because I have run that week from the other side.",
              },
              {
                title: "Every Month: A Report You Can Read",
                body: "Calls and booked jobs by channel, what got done, what happens next. If a page underperforms, we change it. If a competitor moves in your market, we answer. You will never have to ask what you paid for.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVAC SEO FAQ */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              HVAC SEO FAQ
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-gray-200 bg-white p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Switching agencies callout */}
      <section className="bg-[#fafaf8] border-y border-gray-200 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#1A5C3A] mb-1">Already with an agency?</p>
            <p className="text-base text-gray-700">
              If your current HVAC marketing isn&rsquo;t producing, we can audit what you own and what a clean transition looks like before you commit to anything.
            </p>
          </div>
          <Link
            href="/leaving-my-marketing-agency"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-[#1A5C3A] px-6 py-3 text-sm font-semibold text-[#1A5C3A] hover:bg-[#1A5C3A] hover:text-white transition-colors"
          >
            Thinking about switching?
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to see what your HVAC marketing is actually producing?
          </h2>
          <p className="mt-4 text-lg text-[#C8EDD2]/80">
            Every engagement starts with a Marketing Baseline Review. I look at your spend, your booking rate,
            your phone handling, and your revenue, before touching a single campaign. Engagements
            start at $2,500 a month.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact#book"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]"
            >
              Choose a Time With Aaron
            </Link>
            <a href="tel:5595213122" className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors">
              (559) 521-3122
            </a>
          </div>
        </div>
      </section>

      {/* On-page capture: request the audit without leaving the page */}
      <InlineLeadForm
        source="hvac_seo_page"
        heading="Request an HVAC marketing baseline review"
        subtext="Tell us where to send it. We review your rankings, your ads, and your booking path before the call. No pitch deck."
      />
    </>
  );
}
