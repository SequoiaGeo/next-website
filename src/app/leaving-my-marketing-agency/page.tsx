import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thinking About Leaving Your Marketing Agency? | Sequoia GEO",
  description:
    "If your marketing agency keeps cycling reps, running meetings that go nowhere, and delivering nothing, here is exactly what switching looks like and what you actually own right now.",
  alternates: {
    canonical: "https://www.sequoiageo.com/leaving-my-marketing-agency",
  },
};

const painPoints = [
  {
    icon: "👤",
    title: "You're on your third account rep",
    body: "Every time you finally get someone up to speed, they're gone. New face, same promises, same results. You spend more time onboarding their team than running your business.",
  },
  {
    icon: "📅",
    title: "Meetings happen. Results don't.",
    body: "Monthly calls, quarterly reviews, new strategies. Nothing changes in the market. The dashboard looks different but the phone rings the same.",
  },
  {
    icon: "📉",
    title: "You've spent a lot and can't point to what it bought",
    body: "Thousands a month, sometimes six figures over two years. When you ask what it produced, you get reports full of impressions and sessions. Not booked jobs.",
  },
  {
    icon: "🔒",
    title: "The contract feels like the real product",
    body: "Credits get offered when you push back. Then they disappear the moment you decide to leave. The contract isn't protecting them from liability. It's protecting them from accountability.",
  },
  {
    icon: "📦",
    title: "You're not sure what you even own",
    body: "Is the website yours? Who controls your Google Business Profile? If you left tomorrow, what would you be starting over from scratch?",
  },
  {
    icon: "🙅",
    title: "When things go wrong, it's not their problem",
    body: "Performance issues get blamed on the market, the algorithm, or your CSR. Accountability stops at the invoice.",
  },
];

const checklistItems = [
  { item: "Google Business Profile", detail: "You should be listed as Primary Owner, not the agency" },
  { item: "Google Ads account", detail: "Should be under your MCC with full admin access" },
  { item: "Local Services Ads profile", detail: "Login credentials should be yours, not theirs" },
  { item: "Domain registration", detail: "Your name on the registrar, not theirs" },
  { item: "Hosting account", detail: "You should be able to transfer or point DNS without their help" },
  { item: "Analytics & Search Console", detail: "Full access, not read-only sharing" },
  { item: "Social media accounts", detail: "You are the admin, they are a manager at most" },
  { item: "Review platform logins", detail: "GBP, Yelp, BBB — you own the credentials" },
];

const timeline = [
  {
    week: "Week 1",
    title: "Audit and access recovery",
    steps: [
      "Full audit of what you own vs. what they control",
      "Recover ownership of GBP, Ads accounts, and Search Console",
      "Site backup and transfer if needed",
      "Baseline performance snapshot across all channels",
    ],
  },
  {
    week: "Week 2",
    title: "Clean slate setup",
    steps: [
      "GBP optimization and photo refresh",
      "Google Ads account restructure and ad account review",
      "LSA profile review and dispute backlog cleared",
      "Tracking setup: call tracking, form tracking, GA4 audit",
    ],
  },
  {
    week: "Week 3",
    title: "Active and reporting",
    steps: [
      "Ads live and optimized",
      "First real reporting call: booked jobs, cost per lead, cost per booked job",
      "SEO baseline set with 90-day roadmap",
      "You know exactly what is happening and why",
    ],
  },
];

const faqs = [
  {
    q: "Will I lose my Google rankings if I switch?",
    a: "Your rankings live on your domain and in your Google Business Profile, not inside your agency's account. If they built your site on their infrastructure and you don't own the domain, that's a real risk worth auditing before you leave. If you own your domain and hosting, switching agencies does not affect your organic rankings.",
  },
  {
    q: "What happens to my Google Ads history if I switch?",
    a: "Ad history lives inside the account, not the agency. If your campaigns are running inside an account you own (under your MCC), all campaign history transfers with you. If they run your ads inside their own account, you lose that history. This is one of the most common ways contractors get locked in without realizing it.",
  },
  {
    q: "Do I have to wait for my contract to expire?",
    a: "That depends on your contract terms. Some agencies will release you for cause if you can document performance failures. Others have buyout clauses. Some simply ignore the contract when you push hard enough. We can help you understand what you're actually dealing with before you make any moves.",
  },
  {
    q: "Do you require a contract?",
    a: "No. We work month-to-month. If we're not producing, you should be able to leave. That's how it should work for every agency.",
  },
  {
    q: "How fast can you take over my accounts?",
    a: "Access recovery and audit can happen in the first week. Depending on what shape things are in, we're typically running full operations within 10 to 14 days of getting started.",
  },
  {
    q: "What if my current agency built my site and I'm not sure who owns it?",
    a: "This is more common than it should be. We start by checking domain registration, hosting account ownership, and whether there are any platform lock-ins like proprietary CMS systems. In most cases we can migrate you. In some cases you'll need a rebuild. Either way, we'll tell you exactly what you're dealing with before you commit to anything.",
  },
  {
    q: "Will my Local Services Ads be impacted?",
    a: "LSA profiles are tied to the business, not the agency. As long as you have login access to your LSA account, there is no disruption when switching management. If your agency has locked you out of your own LSA profile, that's a serious problem we've dealt with before and can help resolve.",
  },
  {
    q: "How is this different from just switching to another big agency?",
    a: "Most contractors who leave one big agency end up at another one and repeat the same cycle. The difference with us is that you work directly with Aaron, not a rotating cast of account reps. Aaron ran an HVAC company for 13 years and is a 4x Inc 5000 honoree. He understands what a booked job is worth, what a real lead looks like, and what your overhead actually means. You get someone who's operated a trade business, not someone who read a case study about one.",
  },
];

export default function LeavingMyMarketingAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-white px-5 py-2 text-sm font-medium text-[#1A5C3A] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
              Switching Marketing Agencies
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              If You&rsquo;re Already Thinking About Leaving,{" "}
              <span className="text-[#1A5C3A]">Here&rsquo;s What the Switch Actually Looks Like</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Most contractors stay too long. They&rsquo;ve already paid for results that never came, they&rsquo;re not sure what they own,
              and they worry about losing rankings or starting over. This page is for you if you&rsquo;re done waiting for things to change.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Get a Free Transition Audit
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

      {/* Sound familiar */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Sound Familiar?
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              Contractors across every trade are sharing the same story. If any of these hit close to home, you&rsquo;re not alone and you&rsquo;re not stuck.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((point) => (
              <div key={point.title} className="rounded-xl bg-white/5 border border-white/10 p-6">
                <div className="text-3xl mb-3">{point.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{point.title}</h3>
                <p className="text-sm text-[#C8EDD2]/70 leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you own */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              First Thing: Find Out What You Actually Own
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Before you make any move, run through this checklist. The answers tell you how clean your exit is and what we&rsquo;d need to recover before we can operate.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-gray-200 overflow-hidden">
              {checklistItems.map((item, i) => (
                <div
                  key={item.item}
                  className={`flex items-start gap-4 px-6 py-5 ${i % 2 === 0 ? "bg-[#F5FAF7]" : "bg-white"}`}
                >
                  <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded border-2 border-[#1A5C3A]" />
                  <div>
                    <p className="font-semibold text-[#1a1a1a]">{item.item}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500 text-center">
              If you&rsquo;re missing access to any of these, that&rsquo;s the first thing we fix.{" "}
              <Link href="/#contact" className="text-[#1A5C3A] font-medium hover:underline">
                We&rsquo;ll do this audit with you for free.
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Why contractors wait too long */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
                Why Contractors Stay Too Long
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Sunk cost",
                  body: "You&rsquo;ve already put tens of thousands into it. Leaving feels like admitting it was wasted. But every month you stay is more money on the same outcome.",
                },
                {
                  title: "Fear of losing rankings",
                  body: "Agencies know this fear and use it. Your organic rankings live on your domain and in your GBP. They don&rsquo;t disappear because you changed agencies.",
                },
                {
                  title: "Not sure what to move to",
                  body: "If you&rsquo;ve been burned once, it&rsquo;s hard to trust again. The difference is knowing what questions to ask before you sign anything.",
                },
              ].map((card) => (
                <div key={card.title} className="rounded-xl bg-white border border-gray-200 p-7 shadow-sm">
                  <h3 className="text-lg font-bold text-[#1A5C3A] mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: card.body }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transition timeline */}
      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What the Transition Actually Looks Like
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              No downtime. No starting over. Three weeks to fully operational.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-6 md:grid-cols-3">
            {timeline.map((phase) => (
              <div key={phase.week} className="rounded-xl bg-white/10 border border-white/20 p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#A8D5B5] mb-1">{phase.week}</div>
                <h3 className="text-lg font-bold text-white mb-4">{phase.title}</h3>
                <ul className="space-y-2.5">
                  {phase.steps.map((step) => (
                    <li key={step} className="flex items-start gap-2.5 text-sm text-[#C8EDD2]/80">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do differently */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              What We Do Differently
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Not a pitch. The specific things that are different about how we operate.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: "No contracts",
                body: "Month-to-month only. If we&rsquo;re not producing results, you should be able to leave. We don&rsquo;t believe in holding clients who aren&rsquo;t happy.",
              },
              {
                title: "You own everything",
                body: "Your domain, your ad accounts, your GBP, your website. From day one. If you ever leave us, you walk out with everything intact.",
              },
              {
                title: "You work with Aaron directly",
                body: "Not an account rep. Not a junior strategist. Aaron ran an HVAC company for 13 years and is a 4x Inc 5000 honoree. He understands what a real lead and a booked job are worth.",
              },
              {
                title: "Reporting that means something",
                body: "We report on booked jobs and cost per job, not impressions and traffic. If we can&rsquo;t connect the marketing to revenue, that&rsquo;s on us to fix.",
              },
              {
                title: "No black-box systems",
                body: "You can see every campaign, every keyword, every ad. We explain what we&rsquo;re doing and why. You&rsquo;re never dependent on us to understand your own marketing.",
              },
              {
                title: "Performance accountability",
                body: "We set targets upfront. If we&rsquo;re not hitting them, we tell you and we have a plan. We don&rsquo;t blame the market and wait for you to give up.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operator credibility strip */}
      <section className="bg-[#F5FAF7] border-y border-[#3A9E6A]/20 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg font-semibold text-[#1A5C3A] mb-2">Why This Matters Coming From Us</p>
            <p className="text-gray-700 leading-relaxed">
              Aaron Husak ran Balanced Comfort, an HVAC and plumbing company in Fresno, CA, for 13 years. He hired marketing agencies. He got burned by them. He built his own systems, scaled to the Inc 5000 four years in a row (2020&ndash;2023), and eventually sold. Sequoia GEO exists because the marketing industry treats home service contractors as revenue, not as operators building real businesses. We know the difference.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span>4x Inc 5000 (2020&ndash;2023)</span>
              <span className="text-gray-300">|</span>
              <span>CA Licensed Contractor B, C-2, C-20, C-36</span>
              <span className="text-gray-300">|</span>
              <span>13 Years HVAC &amp; Plumbing Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* What leaving your marketing agency actually looks like */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-10">
            Leaving My Marketing Agency: What the Transition Actually Looks Like
          </h2>
          <div className="space-y-5 text-base text-gray-600 leading-relaxed max-w-3xl">
            <p>
              Most contractors who find this page are already searching &ldquo;leaving my marketing agency&rdquo; and
              have been thinking about it for months. The pattern is the same across every trade and every market: a
              contractor signs with a marketing firm expecting growth, the firm delivers reports instead of revenue, and
              the contractor eventually decides that leaving their current vendor is the only way to stop the bleeding.
              Getting out cleanly is where most clients need help.
            </p>
            <p>
              When a contractor is leaving their marketing agency, the first two weeks reveal how the previous agency
              operated. Most agencies keep client accounts inside their own systems. A contractor who has been paying for
              marketing services for 18 months may discover their Google Ads account, their LSA profile, and their
              ad history are all locked inside the vendor&rsquo;s platform. This is not an accident.
              Most agencies build client relationships this way intentionally. It is harder to leave a marketing
              agency when leaving means starting over.
            </p>
            <p>
              Our team handles the access recovery process for every contractor in transition. We contact prior vendors,
              document what exists, and transfer ownership of every account directly to the business. The contractor owns
              the ad history, the account data, and the account standing. If a contractor has been running Google
              advertising for two years, that history has real value. Our team makes sure every client leaves with it
              intact rather than leaving it behind with the old firm.
            </p>
            <p>
              The most common reason contractors stay too long with the wrong marketing firm is not confidence in the
              vendor. It is fear of disruption. Most contractors have heard that switching vendors is complicated, that
              their ads will go dark, or that other agencies cannot pick up where the current one left off.
              This is rarely true. A client who works with a firm that operates transparently can transition their
              account to a new agency in two weeks without meaningful disruption to lead flow. The two weeks of
              transition planning we do with every contractor is designed specifically to prevent any gap in coverage.
            </p>
            <p>
              Leaving your marketing agency does not require a perfect plan. It requires honest answers to a few key
              questions: what do you own, what do they control, and what will the transition cost in time and
              disruption. Our team has done this with clients across HVAC, plumbing, electrical, roofing, and other
              trades. The strategy is the same every time. Recover the accounts, document the ad history,
              build a clean foundation, and focus the budget on revenue rather than activity. Your money should
              produce booked jobs, not dashboards. Most contractors see better results within 90 days of leaving their
              marketing firm than they saw in the previous year of staying. The growth is not from a larger budget.
              It comes from ads that connect to booked jobs.
            </p>
            <p>
              The founder of Sequoia GEO hired marketing firms for 13 years while operating an HVAC and plumbing
              business. As a founder who built a home service company to the Inc 5000 four years running, he knows
              what it feels like to sit across from an account rep who cannot explain why the phone is not ringing.
              As a founder and operator who has been on the contractor side of the vendor relationship, he built
              Sequoia GEO specifically because this industry has no real accountability to the businesses it serves.
              Every client we work with gets direct access to the same founder. No account managers cycling
              in and out. No strategy that exists in a deck and not in the market. Revenue reporting that connects
              advertising spend to actual booked jobs, every month.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              Questions You Probably Have
            </h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Not Sure What You Own? Start There.
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              We&rsquo;ll do a free audit of your accounts, access, and current setup. No pitch at the end. Just a clear picture of what you&rsquo;re working with and what a clean transition would look like.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#2E8055]"
              >
                Request Your Free Transition Audit
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:5595213122"
                className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors"
              >
                (559) 521-3122
              </a>
            </div>
            <p className="mt-6 text-sm text-[#C8EDD2]/50">
              Month-to-month. No contracts. You own everything from day one.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
