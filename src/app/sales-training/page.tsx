import Link from "next/link";
import type { Metadata } from "next";
import SalesTrainingFeedback from "@/components/SalesTrainingFeedback";

export const metadata: Metadata = {
  title: "Sales Training Tool for Home Service Contractors | Talk N Sell Pro",
  description:
    "Free AI-powered sales training tool built for HVAC, plumbing, roofing, and restoration contractors. Practice phone objections, booking scripts, and closing conversations. Custom versions available for your team.",
  alternates: {
    canonical: "https://www.sequoiageo.com/sales-training",
  },
};

const benefits = [
  {
    title: "Practice real objections",
    body: "Work through the calls that cost you jobs — price objections, competitor comparisons, scheduling pushback. The scenarios are built around actual conversations home service CSRs and technicians face every day.",
  },
  {
    title: "No risk, no judgment",
    body: "Sales training fails when people are afraid to make mistakes in front of their manager. This tool gives your team a private space to practice, fail, and improve before they pick up the phone.",
  },
  {
    title: "Repeatable team training",
    body: "Run the same scenario with your entire CSR team and compare how each rep handles it. Use sessions during onboarding, weekly huddles, or one-on-ones. Consistent training produces consistent booking rates.",
  },
];

const useCases = [
  { trade: "HVAC", examples: "Booking tune-up calls, overcoming price objections on equipment replacements, handling after-hours emergency calls, upselling maintenance agreements, closing deals on system replacements" },
  { trade: "Plumbing", examples: "Quoting drain cleaning vs. re-pipe conversations, dispatching emergency calls, explaining diagnostic fees, handling multi-bid situations, improving win rates on larger repair estimates" },
  { trade: "Roofing", examples: "Insurance claim calls, storm damage inspections, explaining material options, handling tire-kicker leads who won't commit, closing deals on full replacement projects" },
  { trade: "Restoration", examples: "Emergency water damage intake, working with insurance adjusters, setting expectations on timelines, multi-step project update calls, managing customer interactions through stressful situations" },
];

const steps = [
  { number: "01", title: "Choose a scenario", body: "Select the type of conversation you want to practice — inbound booking, price objection, competitor comparison, emergency call, or follow-up. Each scenario drops you into a realistic conversation from the first message. The tool covers the full sales cycle from first contact through booking." },
  { number: "02", title: "Run the conversation", body: "Respond as you would on a real call. The AI plays the customer role with realistic pushback, questions, and objections. There are no railroaded answers — the conversation goes where your responses take it. This is how sales skills actually develop: through reps and real-time feedback on what worked." },
  { number: "03", title: "Review and repeat", body: "After each session, identify where the conversation went off track and what you would do differently. Repetition is what builds the muscle memory that carries into real calls. Most sales professionals who improve their close rates do so through deliberate repetition, not a single training session." },
];

const salesSkills = [
  {
    skill: "Objection handling",
    description: "Price objections, competitor mentions, and scheduling pushback are predictable. Reps who have practiced these conversations ten times before the real call handle them differently than reps who are hearing them for the first time. Sales coaching tools can expose these patterns, but only repetition against a realistic AI customer builds the automatic response that holds up under pressure.",
  },
  {
    skill: "Booking rate improvement",
    description: "The sales process for a home service company starts the moment the phone rings. Training your CSRs specifically on inbound call conversion is the fastest lever for improving your booking rate without touching your ad budget. For small teams running with two or three CSRs, every missed booking has a direct impact on weekly revenue.",
  },
  {
    skill: "Closing conversations",
    description: "Knowing when and how to close deals is a learnable skill. The tool puts field reps and CSRs into the closing moment repeatedly so the transition from explanation to commitment becomes natural, not forced. Sales effectiveness on closing calls improves most when reps have a safe space to practice the ask.",
  },
  {
    skill: "Follow-up scripts",
    description: "Follow ups on unsold estimates and scheduled call-backs are where a large percentage of revenue gets recovered. Training your sales team on the right follow-up conversation dramatically improves win rates on leads that did not book on the first call. This is a skill gap on most home service teams and one of the highest-ROI areas to address.",
  },
];

const faqs = [
  {
    q: "Is Talk N Sell Pro really free to use?",
    a: "Yes. The public version is free and requires no account. You can start running scenarios immediately. We offer custom sales training apps for teams that need branded tools, progress tracking, and scenarios built around their specific scripts and customer interactions.",
  },
  {
    q: "What kind of sales training scenarios does the tool cover?",
    a: "The tool covers inbound booking calls, price objection handling, competitor comparison scenarios, emergency service intake, follow-up calls on unsold estimates, maintenance agreement upsells, and multi-service job conversations. New scenarios are added based on user feedback.",
  },
  {
    q: "How is this different from sales coaching software like HubSpot Sales Hub or other platforms?",
    a: "Most sales coaching software and sales coaching tools are built for B2B sales teams running long sales cycles and pipeline management. Talk N Sell Pro is built specifically for home service contractors: the scenarios, the objections, and the sales process are all modeled on HVAC, plumbing, roofing, and restoration calls. Construction sales conversations are different from software demos — the tool reflects that. No setup, no CRM integration required to get started.",
  },
  {
    q: "How often should our sales team use the tool?",
    a: "For new hires, we recommend running through a set of core scenarios before their first live calls. For existing reps, a weekly session during a team huddle surfaces skill gaps and keeps the sales process sharp. High-performing sales teams treat practice as an ongoing habit, not a one-time onboarding event.",
  },
  {
    q: "Can I use this for technician sales training, not just CSRs?",
    a: "Yes. The tool is useful for technicians who present options at the job site, handle objections in person, or upsell services during a service call. The sales skills involved — presenting value, handling price resistance, moving toward a decision — are the same whether the conversation happens on the phone or in a customer's home.",
  },
  {
    q: "What is included in a custom sales training app?",
    a: "Custom builds include training modules built from your actual call recordings, your company branding, structured learning paths for new hire onboarding, progress tracking for sales managers, real-time feedback on rep performance, and scenario updates as your service offerings or sales strategy changes. For construction sales and trade contractor teams, modules can be built around service-specific conversations that generic sales tools do not cover.",
  },
  {
    q: "How does sales training affect conversion rates?",
    a: "The average home service company books 35-45% of inbound calls without dedicated phone sales training. Companies with trained CSRs running structured training programs routinely hit 65-80% booking rates. That gap represents thousands of dollars per month in jobs that are being lost to the same marketing budget.",
  },
];

export default function SalesTrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2318] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-[#C8EDD2] mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
              Free Sales Training Tool for Contractors
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Talk N Sell Pro
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              The sales training tool for contractors built specifically for home service teams. Practice
              objection handling, booking scripts, and closing conversations without risking a real customer call.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#tool"
                className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
              >
                Launch the Tool
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
              <a
                href="#custom"
                className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors"
              >
                Want a custom version for your team?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What is Talk N Sell Pro?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Talk N Sell Pro is an AI-powered sales training tool designed specifically for customer service
              representatives, dispatchers, and technicians working in the home services industry. It simulates
              real customer conversations so your sales team can practice handling the exact situations that
              determine whether a call becomes a booked job.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Most sales training for contractors is theoretical: scripts on paper, role-plays with a manager
              who already knows the answer, or video courses that cover generic sales techniques. Talk N Sell Pro
              puts your team into the conversation with a realistic AI customer and lets them work through
              objections, pricing questions, and booking scenarios in real time. The tool does not grade or
              judge. It creates reps who close deals.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Sales enablement for home service companies has historically meant a PDF of scripts and a
              manager listening in on calls. That approach does not scale. Talk N Sell Pro gives every member
              of your sales team unlimited practice reps before they get on a live call with a real customer.
            </p>
          </div>

          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8EDD2]">
                  <svg className="h-5 w-5 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Built for Home Service Trades
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every trade has its own objections, its own customer psychology, and its own conversion
              dynamics. Talk N Sell Pro covers the conversations that matter in each one. The sales process
              for an HVAC company is different from a restoration company — and the training scenarios
              reflect that.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item.trade} className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-base font-bold text-[#1A5C3A] mb-2">{item.trade}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Tool — iframe */}
      <section id="tool" className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
            Launch the Training Tool
          </h2>
          <p className="mt-3 text-base text-gray-600 max-w-xl mx-auto">
            Free to use. No account required. Start a scenario and run through it with your sales team.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-0 lg:px-8">
          <div className="w-full rounded-none lg:rounded-2xl overflow-hidden border-0 lg:border lg:border-gray-200 shadow-none lg:shadow-xl">
            <iframe
              src="https://talk-n-sell-pro.lovable.app"
              title="Talk N Sell Pro — AI Sales Training Tool for Home Service Contractors"
              className="w-full"
              style={{ height: "calc(100vh - 120px)", minHeight: "650px", border: "none" }}
              allow="microphone; camera"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* How to use it */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              How to Get the Most Out of It
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Sales coaching only works if it is repeated enough to become automatic. Here is the
              approach that produces the fastest improvement in booking rates and win rates across
              your team.
            </p>
          </div>
          <div className="space-y-6">
            {steps.map((item) => (
              <div key={item.number} className="flex gap-6 rounded-2xl border border-gray-200 bg-white p-7">
                <div className="shrink-0 text-3xl font-extrabold text-[#3A9E6A]/40">{item.number}</div>
                <div>
                  <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Skills section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Sales Skills Does the Tool Actually Build?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The sales skills your team develops through practice on Talk N Sell Pro are the same ones
              that determine whether inbound calls become booked jobs. These are not abstract sales techniques
              — they are the specific competencies your sales representatives need to convert the leads you
              are already paying for.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2">
            {salesSkills.map((item) => (
              <div key={item.skill} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1A5C3A] mb-3">{item.skill}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why booking rate matters */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                Why Booking Rate Is the Most Underinvested Metric in Home Services
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                <p>
                  Most home service companies spend heavily on lead generation and almost nothing on
                  what happens after the phone rings. A company running $15,000 per month in Google
                  Ads with a 40% booking rate is generating half the jobs it could book from the same
                  budget. Doubling the booking rate to 80% produces the same result as doubling the
                  ad spend, at zero incremental marketing cost.
                </p>
                <p>
                  Phone sales training for CSRs is the highest-leverage investment most home service
                  operators are not making. The objections are predictable. The scripts are learnable.
                  The only variable is practice volume, and most sales teams simply do not get enough
                  reps before they are handling real customer interactions.
                </p>
                <p>
                  Talk N Sell Pro exists because the training gap is solvable. Your CSRs can run
                  through twenty realistic booking conversations before their first shift. Your
                  technicians can practice presenting options without feeling like they are pushing
                  something on a real customer at a job site. Sales management can assign specific
                  scenarios to address known skill gaps. Repetition before the real call produces
                  conversion rates that justify the marketing spend behind them.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "40%", label: "Avg. booking rate without sales training" },
                { stat: "70%+", label: "Booking rate with trained CSRs" },
                { stat: "2x", label: "Revenue impact of booking rate improvement" },
                { stat: "$0", label: "Incremental ad spend required" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-[#0D2318] p-6 text-center">
                  <div className="text-3xl font-extrabold text-[#3A9E6A]">{item.stat}</div>
                  <div className="mt-2 text-xs leading-snug text-[#C8EDD2]/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sales Enablement section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Sales Coaching vs. Traditional Training Programs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Most contractor sales training takes one of two forms: a script document that gets reviewed
              once and filed away, or a sales coaching session where a manager role-plays with a CSR in
              front of the whole team. Neither approach produces durable improvement. Sales tools only
              improve sales effectiveness when the people using them have had enough practice to deploy
              them under pressure. Here is why sales enablement through repeated practice works differently.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
              <h3 className="text-base font-bold text-[#1a1a1a] mb-3">Traditional training programs</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Scripts and one-time sessions build awareness, not muscle memory. A CSR who reads a
                call handling guide and a CSR who has practiced the same scenario twenty times respond
                to live objections completely differently. Training materials alone do not bridge that gap.
                Sales management cannot scale one-on-one coaching across a team of five or ten reps.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
              <h3 className="text-base font-bold text-[#1a1a1a] mb-3">Manager-led sales coaching</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Live sales coaching with a manager is valuable but limited. The rep is performing in
                front of their team, which creates pressure that interferes with learning. The manager
                is playing a customer role they have not actually experienced. Most teams get one or two
                coached sessions per month. That volume is not enough to change the behavior that determines
                win rates.
              </p>
            </div>
            <div className="rounded-2xl border border-[#3A9E6A]/30 bg-[#C8EDD2]/10 p-7">
              <h3 className="text-base font-bold text-[#1A5C3A] mb-3">AI-powered practice reps</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Talk N Sell Pro gives sales representatives unlimited private practice. The AI customer
                does not get tired, does not judge, and responds realistically to whatever direction the
                conversation takes. Reps can work through the same scenario ten times in a row until the
                response becomes automatic. That is what changes conversion rates and close rates on real
                calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom app CTA */}
      <section id="custom" className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-[#C8EDD2] mb-6">
              Custom Development
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Want a Custom Sales Training App Built for Your Company?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#C8EDD2]/80">
              Talk N Sell Pro is the public version. We also build custom AI-powered sales training
              applications tailored to your specific company, your scripts, your objections, and
              your brand. Your sales team trains on conversations that sound like your customers, not a
              generic proxy. Custom builds include performance tracking, structured learning paths for
              onboarding, and real-time feedback that sales managers can review.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Your exact scripts and scenarios",
                body: "We build the training scenarios around your company's actual call recordings, objection patterns, and booking workflows. The AI plays a customer who sounds like your customers, with the objections your sales representatives actually hear.",
              },
              {
                title: "Your brand and service area",
                body: "Custom apps are white-labeled to your company. Your sales team trains on a tool that references your service area, your pricing structure, and your specific services rather than a generic home service template.",
              },
              {
                title: "Performance tracking for sales managers",
                body: "Custom builds include reporting so sales managers can see which reps are training, which scenarios they are running, and where the most common breakdowns occur in the sales process. Key performance indicators for booking rate and call handling are tracked automatically.",
              },
              {
                title: "New hire onboarding acceleration",
                body: "New CSRs and technicians can complete a structured set of training modules with defined learning paths before their first live call. Custom onboarding flows built around your SOPs reduce ramp time and reduce the cost of early-stage mistakes during customer interactions. Sales leaders at companies using structured onboarding consistently report shorter time-to-productivity for new hires.",
              },
              {
                title: "Seasonal scenario updates",
                body: "As your sales cycles shift with the seasons, your training library updates to match. Pre-season surge scripts, membership renewal conversations, and storm damage intake can all be added as your business needs them. Sales enablement content stays current.",
              },
              {
                title: "Integration with your tech stack",
                body: "Custom apps can connect to your CRM, your call tracking platform, or your job management system to pull real call data into training scenarios. The gap between simulated training and real-world sales performance narrows when the training is built from real data.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-sm font-bold text-[#3A9E6A] mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#C8EDD2]/70">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-[#C8EDD2]/80 mb-6">
              Custom AI sales training apps start at a one-time build fee. Book a call to talk
              through what your team needs.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
              >
                Talk About a Custom Build
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a href="tel:5595213122" className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors">
                (559) 521-3122
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who built this */}
      <section className="bg-[#fafaf8] py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
                  Built by Someone Who Knows What a Missed Call Costs
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I built Balanced Comfort from startup to 130+ employees and $17M+ in annual revenue.
                  During that time I listened to thousands of call recordings, ran CSR training sessions,
                  and watched booking rates shift by 20+ points based entirely on how the phone was
                  answered. Sales management at that scale means you see exactly what happens when a
                  sales team does not have enough practice before they are handling real customer interactions.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Talk N Sell Pro was built because that training gap is universal. Every home service
                  company struggles with the same problem: CSRs are trained once and then thrown into
                  live calls. This tool gives them a place to practice before it costs a real customer.
                  The missed opportunities on unanswered or mishandled calls are some of the most
                  recoverable revenue in the business, and most operators are leaving it on the table.
                </p>
                <p className="mt-4 text-sm font-semibold text-[#1A5C3A]">Aaron Husak, Founder, Sequoia GEO</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "13 yrs", label: "Running a home service company" },
                  { stat: "$17M+", label: "Annual revenue at exit" },
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

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Common questions about Talk N Sell Pro and sales training for home service contractors.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-3">{item.q}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Tell Us What Would Make This Better
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Talk N Sell Pro is actively being developed. The scenarios added next, the sales enablement
              features built next, and the trades covered next are all driven by feedback from people using it.
              If you tried the tool, we want to hear what you thought.
            </p>
          </div>
          <SalesTrainingFeedback />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1A5C3A] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-extrabold text-white">
            Want this integrated into your marketing strategy?
          </h2>
          <p className="mt-4 text-base text-[#C8EDD2]/80">
            Sales training is one lever. The Full Picture Audit looks at your entire growth operation,
            from ad spend to booking rate to cost per acquired job. We look at how your sales team performs
            against your current marketing spend, and where the largest gaps in conversion rates exist.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
