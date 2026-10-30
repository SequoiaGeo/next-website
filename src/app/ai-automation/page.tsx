import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";

export const metadata: Metadata = {
  title: "AI Automation for Contractors: Follow-Up and Intake | Sequoia GEO",
  description:
    "Plan missed-call follow-up, estimate reminders and intake workflows around supported tools, human handoffs and measurable inquiries and booked jobs.",
  alternates: { canonical: "https://www.sequoiageo.com/ai-automation" },
};

const automations = [
  { title: "Missed Call Follow-Up", body: "An eligible unanswered call can trigger an approved text through the connected phone system. We agree on response targets, consent rules, duplicate handling and the person responsible for replies." },
  { title: "Post-Job Review Requests", body: "A completed-job record can trigger a review request on an agreed schedule. The scope defines eligible contacts, opt-outs, message content and how delivery failures are reviewed." },
  { title: "Unsold Estimate Follow-Up", body: "Use approved reminders for eligible estimates that remain open. Stop when a contact replies, books or opts out. Measure responses and booked jobs rather than assuming every reminder recovers a customer." },
  { title: "Appointment Confirmations and Reminders", body: "Send confirmations and reminders from verified appointment records. Define what happens when a customer cancels, reschedules or needs a person to respond." },
  { title: "After-Hours Intake", body: "Collect the agreed service-request details through supported channels. Confirm where requests arrive, who reviews them and what customers should do when urgent help is needed." },
  { title: "Re-engagement Campaigns", body: "Prepare relevant seasonal outreach from eligible service-history records. Contact eligibility, approvals, sending limits and follow-up ownership are part of the scope." },
];

export default function AiAutomationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "Services", url: "https://www.sequoiageo.com/services" },
          { name: "AI Automation", url: "https://www.sequoiageo.com/ai-automation" },
        ]}
      />
      <ServiceJsonLd
        serviceType={"AI Automation for Contractors"}
        description={"AI automation for home service contractors covering missed call recovery, speed to lead, and database reactivation."}
        url={"https://www.sequoiageo.com/ai-automation"}
      />
      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-overline mb-6">AI Automation</div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              The jobs your team doesn&rsquo;t have time to do, automated.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              Missed calls, review requests and open estimates compete for your team&rsquo;s attention.
              Agreed workflows can handle routine steps while your team handles decisions and exceptions.
            </p>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Follow-up needs an owner and a defined process.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Your CSRs are busy booking calls. Your techs are running jobs. Your office staff is managing
              schedules and handling inbound volume. Missed calls, unsold estimates and review requests can fall between those responsibilities.
              Before automating, establish where each request arrives, who follows up and which records
              show whether the work happened. Automation can support a repeatable process when the connected data and handoffs are reliable.
              Start by <Link href="/resources/where-are-my-calls-going" className="underline">checking where calls arrive and who handles them</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* What AI automation means */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What AI Automation Actually Does for Home Service Companies
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              AI automation for home service businesses is not about replacing your team. It handles
              routine follow-up steps within defined rules. Your team remains responsible for
              customer decisions, approvals and exceptions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Missed-Call Response Targets",
                body: "A connected phone system can trigger follow-up after an eligible missed call. Response targets depend on the integration and delivery service. We test routing, duplicate prevention and escalation to a person before release.",
              },
              {
                title: "Review Requests From Completed-Job Records",
                body: "Use verified job status to schedule relevant requests without relying on someone to remember each one. Your team approves the message and contact rules, monitors delivery issues and handles replies. A sent request does not guarantee a review.",
              },
              {
                title: "Follow-Up on Open Estimates",
                body: "Define which estimates are eligible, when reminders stop and who handles questions. Track replies, qualified inquiries and booked jobs against the original estimate records. The result depends on the offer, contact eligibility and follow-up handling.",
              },
              {
                title: "Re-engagement Campaigns for Repeat Business",
                body: "Use relevant service history for seasonal reminders and renewal conversations. Agree on eligible contacts, approved messages and opt-out handling. Evaluate the campaign through qualified inquiries and bookings, with sending and software costs reported separately.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#C8EDD2]">
                  <svg className="h-4 w-4 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we automate */}
      <section className="bg-[#fafaf8] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What we automate
            </h2>
          </div>
          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {automations.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#C8EDD2]">
                  <svg
                    className="h-4 w-4 text-[#1A5C3A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live build demo video */}
      <section className="bg-[#fafaf8] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="section-overline mb-3">See It In Action</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl leading-tight">
              Live build: AI sales simulator for contractors
            </h2>
            <p className="mt-3 text-base text-gray-500 max-w-xl mx-auto">
              Watch Aaron build an AI-powered sales roleplay tool for contractors from scratch.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/ra2i646BzLI?rel=0&modestbranding=1"
              title="Live Build: AI Sales Simulator for Contractors"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* How it connects */}
      <section className="bg-[#1a1a1a] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Confirm the connections before the build.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#C8EDD2]/80">
              We assess your CRM, phone system and field service software before recommending a build.
              GoHighLevel may support parts of the workflow; ServiceTitan, Housecall Pro and other
              connections require verification of access, supported features and any additional costs.
              The scope defines response targets, monitoring ownership and exception handling.
            </p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 px-6 py-4">
              <p className="text-sm leading-relaxed text-[#C8EDD2]/70">
                The handoff includes operating instructions and a named owner for monitoring. For work
                that needs reasoning or approval steps, explore <Link href="/marketing-agents" className="underline">custom agents with approval and handoff rules</Link>.
                Connected records can improve reporting, but missing events remain measurement gaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Automation FAQ */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              AI Automation for Home Services: Common Questions
            </h2>
          </div>
          <div className="space-y-5">
            {[
              {
                q: "What platforms do these automations run on?",
                a: "We assess the available CRM, phone and field service connections first. GoHighLevel may support messaging and tracking, but compatibility with ServiceTitan, Housecall Pro or another platform must be verified for the requested workflow. The proposal names supported features, costs, monitoring ownership and human handoffs.",
              },
              {
                q: "How is AI automation different from a mass email blast?",
                a: "A triggered workflow responds to an agreed event, such as an eligible missed call or open estimate. It uses approved timing, contact rules and stop conditions. A scheduled campaign reaches a defined audience. Either approach needs relevant messaging, contact eligibility and a person responsible for replies.",
              },
              {
                q: "Will this feel spammy to our customers?",
                a: "We review timing, relevance, contact eligibility and message wording before release. Opt-outs, duplicate prevention and human replies are part of the design. The team monitors actual responses rather than assuming every automated message is welcome.",
              },
              {
                q: "How long does setup take?",
                a: "The timeline depends on access, integration support, data quality, approvals and testing. We agree on milestones after verifying those dependencies. Handoff documentation identifies who maintains the workflow and how failures or changes are handled.",
              },
              {
                q: "What makes AI automation worth the investment for a home service company?",
                a: "Evaluate each workflow using matched inquiry and booking records where available. A delivered message or completed automation is not a booked job. Software, sending and maintenance costs belong in the comparison.",
              },
              {
                q: "Do I need a large team to make this work?",
                a: "A smaller team can use agreed workflows for routine steps, but someone must own replies, escalations, monitoring and updates. We define those responsibilities before launch so automation supports the team rather than leaving exceptions unattended.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 bg-white p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Want to see what&rsquo;s possible for your specific setup?
          </h2>
          <p className="mt-4 text-lg text-[#C8EDD2]/80">
            The first conversation is free. Bring your current tools and follow-up process.
            We&rsquo;ll identify what needs verification, where automation may help and what a defined
            implementation would require. Outcomes are measured in qualified inquiries and booked jobs.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#C8EDD2]"
            >
              Book a Free Strategy Call
            </Link>
            <a
              href="tel:5595213122"
              className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors"
            >
              (559) 521-3122
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
