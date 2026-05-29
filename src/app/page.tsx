import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";

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
import LSABanner from "@/components/LSABanner";
import YouTubeFacade from "@/components/YouTubeFacade";

// Lazy-load below-fold interactive components — defers their JS until
// after the critical rendering path completes.
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: true });
const StickyMobileCTA = dynamic(() => import("@/components/StickyMobileCTA"), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />

      {/* TL;DR — for AI extraction and time-strapped operators */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#fafaf8] p-6 sm:p-8">
            <p className="section-overline mb-3 text-[#1A5C3A]">TL;DR</p>
            <ul className="space-y-2 text-base text-gray-700">
              <li><strong>Who we are:</strong> Sequoia GEO is a fractional CMO and growth operator for home service companies, run by a 13-year operator who built Balanced Comfort to $10M and 130+ employees (4x Inc 5000).</li>
              <li><strong>Who we serve:</strong> HVAC, plumbing, roofing, and restoration contractors doing $2M to $15M in revenue with $5K to $30K per month in marketing spend.</li>
              <li><strong>What we do:</strong> Connect every <strong>marketing</strong> dollar to a booked job. We optimize for <strong>cost per booked job</strong>, <strong>CSR booking rate</strong>, and revenue, not impressions or clicks. We integrate <strong>Google Ads</strong>, <strong>LSA</strong>, <strong>GBP</strong>, and <strong>ServiceTitan</strong> attribution into a single pipeline view.</li>
              <li><strong>How we work:</strong> 30-day diagnostic sprint, no long contracts, starting at $2,500 per month. Limited to 10 contractors at a time.</li>
            </ul>
          </div>
        </div>
      </section>

      <Problem />
      <AboutAaron />

      {/* CTA #1: Visitor just felt pain + saw credibility. Offer diagnosis. */}
      <InlineCTA
        headline="Find out what your marketing is actually producing."
        subtext="15-minute call. No pitch deck. Just your numbers and what they mean."
        buttonText="Get Your Free Audit"
        variant="green"
      />

      {/* ── Google Reviews (Elfsight) ─────────────────────────────────── */}
      <section className="bg-[#fafaf8] py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#3A9E6A] mb-3">
            What clients say
          </p>
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-42ab95f5-d53f-4800-be57-33d24a8d29cf" data-elfsight-app-lazy />
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

      {/* CTA #2: Scarcity, medium commitment */}
      <InlineCTA
        headline="Only 10 spots. See if yours is open."
        subtext="If there's a fit, I'll tell you. If not, I'll tell you that too."
        buttonText="Check Availability"
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
              I start with your P&amp;L, your <strong>CSR booking rate</strong>, and your average ticket, then trace every dollar of <strong>marketing spend</strong> to a booked job. Most agencies hand you a report full of impressions and clicks. The channels matter, but only after we know the numbers behind them.
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
                body: "I connect your <strong>Google Ads</strong> and <strong>LSA</strong> accounts to your CRM so we can see <strong>cost per booked job</strong>, not cost per lead. A $45 lead that books at 80% is worth more than a $12 lead that books at 15%. Most agencies optimize for the $12 lead because it looks better on a report. I optimize for the one that puts a tech in a truck.",
              },
              {
                title: "Your Reviews and Reputation Velocity",
                body: "Star ratings are table stakes. What matters is review velocity: how many new reviews you get per month relative to competitors. I build automated review request sequences that run through your CRM so techs don&rsquo;t have to remember to ask. One client went from 4 reviews/month to 22 without adding any manual steps.",
              },
              {
                title: "Your Revenue Attribution (The Part Everyone Skips)",
                body: "If you cannot tell me the <strong>cost per booked job</strong> for each marketing channel, you are guessing where to spend money. I wire <strong>call tracking</strong> into your dispatch system (<strong>ServiceTitan</strong>, Housecall Pro, or similar) so every dollar of ad spend connects to a real job. This is the single change that has the biggest impact on <strong>marketing ROI</strong>, and most agencies never do it because it requires access they do not ask for.",
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
        subtext="No contracts. No pitch. Just your numbers reviewed by someone who's been in your seat."
        buttonText="Book Your 15-Minute Call"
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
        variant="green"
      />

      <LSABanner />

      <ContactForm />

      {/* Sticky mobile CTA bar: phone + book, appears after scrolling past hero */}
      <StickyMobileCTA />
    </>
  );
}
