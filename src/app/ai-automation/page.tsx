import Link from "next/link";
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
              Your CSRs are busy booking calls. Your techs are running jobs. The customer who called at
              7 PM and went to voicemail doesn&rsquo;t get called back until the next morning, if at all.
              The customer who got a quote three weeks ago and went quiet never hears from you again. The
              job you completed yesterday doesn&rsquo;t get a review request until someone remembers to
              send one. This is not a people problem. It&rsquo;s a systems problem.
            </p>
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

      {/* How it connects */}
      <section className="bg-[#1a1a1a] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              It runs through the tools you already have.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#C8EDD2]/80">
              Most of these automations run through GoHighLevel, which integrates with ServiceTitan,
              Housecall Pro, and other field service platforms. We build the workflows, write the
              messaging, connect the integrations, and hand you something that runs without you touching it.
            </p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 px-6 py-4">
              <p className="text-sm leading-relaxed text-[#C8EDD2]/70">
                This isn&rsquo;t a separate platform you have to learn. It layers onto your existing CRM
                and phone system.
              </p>
            </div>
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
            what can be automated and what the lift looks like.
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
    </>
  );
}
