import Link from "next/link";
import GHLWidget from "@/components/GHLWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Home Service Contractors | Sequoia GEO",
  description:
    "AI automation for HVAC, plumbing, and roofing companies. Missed call follow-up, review requests, unsold estimate rehash, and appointment confirmation  -  all automated.",
  alternates: { canonical: "https://www.sequoiageo.com/ai-automation" },
};

const automations = [
  {
    title: "Missed Call Follow-Up",
    body: "When a call goes unanswered, an automated text goes out within 60 seconds. \u201cHey, we just missed your call \u2014 is there anything we can help with?\u201d Most customers respond. Most competitors never call back.",
  },
  {
    title: "Post-Job Review Requests",
    body: "A text goes out 2\u20134 hours after job completion, when satisfaction is highest. Personalized to the job type. Includes a direct link to your Google review page. No one has to remember to do it.",
  },
  {
    title: "Unsold Estimate Rehash",
    body: "Customers who received an estimate and went silent get a follow-up sequence over 7\u201314 days. Not pushy. Just present. A meaningful percentage of these come back and book \u2014 revenue that would otherwise be lost.",
  },
  {
    title: "Appointment Confirmations and Reminders",
    body: "Automated confirmations at booking, reminders the day before, and day-of notifications. Reduces no-shows and keeps your schedule full.",
  },
  {
    title: "After-Hours Intake",
    body: "Your chat widget or SMS number collects name, address, and service needed after hours. The lead is in your CRM when the office opens, ready to book.",
  },
  {
    title: "Re-engagement Campaigns",
    body: "Customers who haven\u2019t booked in 12\u201318 months get a seasonal outreach. Tune-up season. Storm preparedness. Service plan renewal. Automated, personalized, and tied to your service history.",
  },
];

export default function AiAutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-overline mb-6">AI Automation</div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              The jobs your team doesn&rsquo;t have time to do -- automated.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              Every contractor has the same list: follow up with missed calls, ask for reviews after the
              job, re-engage customers who got an estimate and went silent. Nobody does it consistently.
              AI automation does.
            </p>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Manual follow-up doesn&rsquo;t happen at scale.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Your CSRs are busy booking calls. Your techs are running jobs. Your office staff is managing
              schedules and handling inbound volume. Nobody has bandwidth to chase missed calls, unsold
              estimates, and review requests as part of their daily operations. The customer who called at
              7 PM and went to voicemail doesn&rsquo;t get called back until the next morning, if at all.
              The customer who got a quote three weeks ago and went quiet never hears from you again. The
              job you completed yesterday doesn&rsquo;t get a review request until someone remembers to
              send one. AI automation is the only way to save time on these follow-ups while driving
              increased efficiency across the entire customer lifecycle. This is not a people problem.
              It&rsquo;s a systems problem.
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
              the follow-up tasks that require consistent execution at scale — things that are simple
              in concept but impossible to do manually at volume across every customer, every day.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Faster Response Times for Every Inquiry",
                body: "When a potential customer calls and hits voicemail, every minute without a response increases the chance they call a competitor. AI automation sends a text within 60 seconds of a missed call, opening the conversation before anyone else gets a chance. Response time is one of the most important factors in converting home service inquiries into booked jobs — and AI makes it consistent across every call, every day, including nights and weekends.",
              },
              {
                title: "Systematic Review Generation After Every Job",
                body: "Online reviews are the single most influential factor for new customers choosing between home service companies in local search. A review generation system that works automatically after every completed job removes the human dependency entirely. The right timing and personalized message get significantly higher response rates than generic requests. Over a decade of operating home services taught me that the companies with the most reviews almost never ask manually — they have a system.",
              },
              {
                title: "Revenue Recovery from Unsold Estimates",
                body: "Every home service company has a backlog of estimates that were requested, quoted, and then went silent. These represent real revenue that your business already spent time and resources to generate. An automated follow-up sequence over 7 to 14 days — non-pushy, timed appropriately — recovers a meaningful percentage of those customers. Building relationships with past estimate contacts through thoughtful automation is one of the highest-ROI activities available to a growing home service business.",
              },
              {
                title: "Re-engagement Campaigns for Repeat Business",
                body: "Repeat customers are your most profitable customers. They convert at higher rates, have higher average tickets, and generate more referrals. AI automation re-engages past customers with seasonal outreach before they search for a competitor. Tune-up season reminders, service plan renewals, and storm preparedness messages sent automatically to your customer list create a repeat customer pipeline that generates revenue without paid advertising. The key is personalization — messages that reference their service history feel different than bulk marketing emails.",
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
              It runs through the tools you already have.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#C8EDD2]/80">
              Most of these automations run through GoHighLevel, which integrates with ServiceTitan,
              Housecall Pro, and other field service platforms. We build the custom automation workflows,
              write the messaging, connect the integrations, and hand you something that runs without you
              touching it. No manual updates required — the key features are configured once and execute
              automatically every time a trigger condition is met.
            </p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 px-6 py-4">
              <p className="text-sm leading-relaxed text-[#C8EDD2]/70">
                This isn&rsquo;t a separate platform you have to learn. It layers onto your existing CRM
                and phone system. Better data informed decisions come from having every follow-up logged,
                tracked, and reportable — not scattered across text threads and sticky notes.
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
                a: "Most of the automations we build run through GoHighLevel, which integrates directly with ServiceTitan, Housecall Pro, and other field service management platforms. GoHighLevel handles the text messaging, email sequences, and CRM tracking. Your existing job management software remains the system of record. We build the automation workflows, write the messaging, configure the integrations, and hand you something that runs without ongoing attention. The key features are set up once and execute automatically every time a trigger condition is met — a missed call, a completed job, an unsold estimate that went cold.",
              },
              {
                q: "How is AI automation different from a mass email blast?",
                a: "AI automation for home service businesses is personalized, triggered, and timed — the opposite of a bulk marketing email. A missed call follow-up goes out within 60 seconds of a specific call, addressed to that specific person. A review request references the job type completed. An unsold estimate follow-up references the quote that was sent. Mass email campaigns go to everyone at once with generic messaging. Triggered automation goes to the right person at the right moment in their customer journey, which is why response rates and conversion rates are meaningfully higher.",
              },
              {
                q: "Will this feel spammy to our customers?",
                a: "Not when it is built correctly. The difference between automation that feels helpful and automation that feels intrusive is timing, tone, and relevance. A text that says 'We just missed your call — is there anything we can help with?' sent within a minute is welcome because the customer was just trying to reach you. A review request sent a few hours after a completed job, when satisfaction is highest, gets strong response rates because the timing is natural. We write the messaging to sound like it comes from your team — because it does.",
              },
              {
                q: "How long does setup take?",
                a: "For most home service businesses, the core automation workflows — missed call follow-up, post-job review requests, appointment confirmations, and after-hours intake — can be built and tested within two to three weeks. More complex workflows that integrate directly with your ServiceTitan or Housecall Pro data take longer depending on the depth of integration. We document everything so your team knows what is running and can adjust messaging over time. The goal is a system your business owns, not a black box dependent on our ongoing involvement.",
              },
              {
                q: "What makes AI automation worth the investment for a home service company?",
                a: "The financial case is straightforward: recovered missed calls, re-engaged unsold estimates, and consistent online review generation each have direct revenue impact that is measurable. If your company misses 20 calls per week and converts even 15% of the follow-up texts, that is 3 additional booked jobs per week from leads you were already paying to generate. Unsold estimate recovery routinely adds 5 to 15% to booked revenue with no additional marketing spend. Review generation improves your local search ranking and your conversion rate from every channel. The marketing ROI on automation compounds — every system runs indefinitely once it is built.",
              },
              {
                q: "Do I need a large team to make this work?",
                a: "No. AI automation is specifically designed for home service businesses where the team is focused on running jobs, not managing follow-up sequences. The automations run without anyone triggering them manually. A CSR still handles calls that come in. Your dispatch team still manages the schedule. The automation handles everything in between — the touchpoints between a lead and a booking, between a completed job and a review, between a lapsed customer and a returning appointment. Business owners who implement these systems typically report that their team feels less stretched, not more, because the follow-up work happens automatically.",
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
            The first conversation is free. Bring your current stack and we&rsquo;ll tell you exactly
            what can be automated and what the lift looks like. Every workflow we build is designed to
            reduce risk of losing leads to faster competitors and give you cleaner data for decision
            making about where your revenue is actually coming from.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#contact"
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
      <GHLWidget />
    </>
  );
}
