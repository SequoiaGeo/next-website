import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.sequoiageo.com/",
  },
};
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import InlineCTA from "@/components/InlineCTA";
import CalculatorBanner from "@/components/CalculatorBanner";
import FullPicture from "@/components/FullPicture";
import HowItWorks from "@/components/HowItWorks";
import WhoIsItFor from "@/components/WhoIsItFor";
import AboutAaron from "@/components/AboutAaron";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FirstThirtyDays from "@/components/FirstThirtyDays";
import ClientVideoGrid from "@/components/ClientVideoGrid";
import ClientResults from "@/components/ClientResults";
import LSABanner from "@/components/LSABanner";
import YouTubeFacade from "@/components/YouTubeFacade";
import InlineLeadForm from "@/components/InlineLeadForm";
import SequoiaQuestionPanel from "@/components/SequoiaQuestionPanel";

// Lazy-load below-fold interactive components, defers their JS until
// after the critical rendering path completes.
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: true });

export default function Home() {
  const knowledgeEnabled =
    process.env.SEQUOIA_KNOWLEDGE_ENABLED === "true" &&
    process.env.SEQUOIA_KNOWLEDGE_KILL_SWITCH !== "true";

  return (
    <>
      <Hero />

      {/* TL;DR, for AI extraction and time-strapped operators */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#fafaf8] p-6 sm:p-8">
            <p className="section-overline mb-3 text-[#1A5C3A]">TL;DR</p>
            <ul className="space-y-2 text-base text-gray-700">
              <li><strong>Who we are:</strong> Sequoia GEO is an operator-led marketing agency for home service companies. Aaron Husak leads every engagement after spending 13 years building Balanced Comfort to $17M and 130+ employees (4x Inc 5000).</li>
              <li><strong>Who we serve:</strong> HVAC, plumbing, roofing, and restoration contractors doing $2M to $15M in revenue with $5K to $30K per month in marketing spend.</li>
              <li><strong>What we do:</strong> Find and address the gaps that keep prospective customers from finding, trusting, contacting, and booking a home service company. Depending on the engagement, that can include <strong>AI search visibility</strong>, <strong>SEO</strong>, <strong>paid media</strong>, websites, listings, conversion tracking, and the handoff from inquiry to booked job.</li>
              <li><strong>How we work:</strong> We verify the baseline, fix the first constraint, and measure qualified calls and jobs booked when the available systems and evidence support those stages. Engagements start at $2,500 per month with a three-month initial term, then month to month.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lead capture in the first three sections. The old first form sat 22
          sections down; most homepage visitors never saw a form at all. */}
      <InlineLeadForm
        source="homepage_top"
        heading="Get more booked jobs from the marketing you already pay for."
        subtext="Three fields. I review your marketing myself and call you with what I find. No pitch deck."
      />

      {/* Client result, right under the hero: promise then proof. Renders only
          once Mel's YouTube ID is set in ClientResults.tsx. */}
      <ClientResults />

      {knowledgeEnabled && (
        <SequoiaQuestionPanel surface="homepage_inline" embedded />
      )}

      <Problem />
      <AboutAaron />

      {/* CTA #1: Visitor just felt pain + saw credibility. Offer diagnosis. */}
      <InlineCTA
        headline="Find out what your marketing is actually producing."
        subtext="15-minute call. No pitch deck. Just your numbers and what they mean."
        buttonText="Choose a Time With Aaron"
        buttonHref="/contact#book"
        ctaContract="schedule"
        variant="green"
      />

      {/* Independently verifiable review proof without a third-party runtime. */}
      <section className="bg-[#fafaf8] py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 text-center shadow-sm sm:px-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#3A9E6A]">
              Independent reviews
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-3xl">
              Read the reviews directly on Google.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
              Open Sequoia GEO&rsquo;s public profile to see the current rating and every review at the source.
            </p>
            <a
              href="https://www.google.com/maps?cid=5823435747371480489"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0D2318] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A5C3A]"
            >
              See Sequoia GEO Reviews on Google
              <svg aria-hidden="true" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <FullPicture />
      <CalculatorBanner />
      <HowItWorks />
      <WhoIsItFor />

      {/* GBP Optimization Workshop */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="section-overline mb-3 text-[#1A5C3A]">Free Workshop</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl leading-tight">
              Google Business Profile Optimization for Contractors
            </h2>
            <p className="mt-3 text-base text-gray-600 max-w-xl mx-auto">
              A full live session on GBP strategy for home service contractors. Specific tactics, real examples.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ paddingBottom: "56.25%" }}>
            <YouTubeFacade
              videoId="KhPbr3CSGBE"
              title="Google Business Profile Optimization for Contractors (Live Workshop Replay)"
            />
          </div>
        </div>
      </section>

      <ClientVideoGrid />

      <Services />

      {/* CTA #2: direct-access differentiator */}
      <InlineCTA
        headline="You work with me, not an account manager."
        subtext="Choose a time and talk directly with the operator who will lead the work."
        buttonText="Choose a Time"
        buttonHref="/contact#book"
        ctaContract="schedule"
        variant="dark"
      />

      {/* What I actually look at when I take over marketing */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What do you actually look at when you take over a contractor&rsquo;s marketing?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              I start with the operating and marketing evidence you can verify, which may include your P&amp;L, <strong>CSR booking rate</strong>, average ticket, channel data, call records, and CRM stages. When those systems can be joined reliably, we evaluate spend through qualified leads and jobs booked instead of stopping at impressions and clicks.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Your Google Business Profile and Local Visibility",
                body: "I audit your <strong>GBP</strong> listing, your Map Pack position, and how many calls actually come from it. One client had a dead phone number in their <strong>LSA</strong> profile for three months. Their agency never noticed because they were tracking impressions, not answered calls. That is the kind of gap I close in the first week.",
              },
              {
                title: "Your Ad Spend and What It Actually Produces",
                body: "I reconcile your <strong>Google Ads</strong> and <strong>LSA</strong> activity with call, form, and CRM evidence when access and data quality allow it. That lets us distinguish platform conversions from real inquiries and, where the join is dependable, compare <strong>cost per booked job</strong> instead of stopping at cost per lead.",
              },
              {
                title: "Your Reviews and Reputation Velocity",
                body: "Reviews help customers evaluate a business, and Google says review count and positive ratings can help local ranking. Google does not publish a review-velocity weighting. I build compliant review request systems through your CRM, then measure response rate, rating, calls, and jobs booked instead of treating one review metric as the strategy.",
              },
              {
                title: "Your Attribution Gaps (The Part Everyone Skips)",
                body: "If you cannot tell which channels produced qualified inquiries or jobs booked, budget decisions remain uncertain. I inspect the available <strong>call tracking</strong>, advertising, analytics, and dispatch data in systems such as <strong>ServiceTitan</strong>, Housecall Pro, or Jobber, then document the strongest defensible connection. Missing or conflicting joins stay labeled instead of being filled by assumption.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why your current marketing isn't working */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Why is your current contractor marketing failing to produce booked jobs?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your marketing is failing to produce booked jobs because the channel is rarely the problem. The gap is almost always between your <strong>marketing</strong>, your phones, and your dispatch board. After auditing dozens of contractor marketing programs, the same four patterns show up.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "You Measure Leads, Not Booked Jobs",
                body: "Your agency sends a report showing 200 leads last month. Great. How many of those booked? How many showed up? What was the average ticket? If you cannot answer those questions by channel, you are spending blind. I had a client spending $14K/month on <strong>Google Ads</strong>. When we connected <strong>call tracking</strong> to <strong>ServiceTitan</strong>, we found 40% of their leads were going to voicemail during business hours.",
              },
              {
                number: "02",
                title: "Three Vendors, Nobody Owns the Outcome",
                body: "Your SEO company says rankings are up. Your PPC manager says cost per click is down. Your web designer says traffic increased. Revenue is flat. Nobody owns the number that matters because each vendor optimizes their own silo. The companies that grow fastest have one person accountable for the full picture, from ad click to dispatched job.",
              },
              {
                number: "03",
                title: "Your Phones Are Leaking Revenue",
                body: "A 35% <strong>CSR booking rate</strong> means you are losing more than half the leads you already paid for. I listen to call recordings, score booking performance, and build scripts that raise conversion rates. This is not a marketing problem on paper, but it is the fastest way to double your <strong>marketing ROI</strong> without spending another dollar on ads.",
              },
              {
                number: "04",
                title: "Your Past Customers Are Being Ignored",
                body: "Your existing customer database is the highest-converting, lowest-cost marketing channel you have. Past customers book at 2-3x the rate of new leads and spend more per visit. Most contractors have thousands of past customers sitting in their CRM with zero outreach. A seasonal email campaign to that list costs almost nothing and consistently produces the best ROI of any channel I manage.",
              },
            ].map((item) => (
              <div key={item.number} className="rounded-2xl border border-gray-200 bg-white p-7">
                <div className="mb-4 text-4xl font-black text-[#C8EDD2]">{item.number}</div>
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA #3: Social proof momentum, ready to act */}
      <InlineCTA
        headline="They started with one call. Most never left."
        subtext="No pitch deck. Just your numbers reviewed by someone who's been in your seat."
        buttonText="Choose a Time With Aaron"
        buttonHref="/contact#book"
        ctaContract="schedule"
        variant="light"
      />

      <FirstThirtyDays />
      <FAQ />

      {/* CTA #4: Lowest friction for non-ready visitors */}
      <InlineCTA
        headline="Not ready for a call? See how much revenue you're leaving on the table."
        subtext="Enter your spend, calls, and booking rate. Takes 60 seconds."
        buttonText="Try the Free Calculator"
        buttonHref="/marketing-leak-calculator"
        variant="light"
      />

      <ContactForm />

      {/* LSA guide is a top-of-funnel lead magnet; placed after the form so two
          stacked lead magnets (calculator + guide) don't dilute the booking push. */}
      <LSABanner />

      {/* Sticky mobile call/book bar now mounts sitewide in layout.tsx */}
    </>
  );
}
