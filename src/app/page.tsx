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
import LSABanner from "@/components/LSABanner";
import YouTubeFacade from "@/components/YouTubeFacade";
import BookingCalendar from "@/components/BookingCalendar";

// Lazy-load below-fold interactive components — defers their JS until
// after the critical rendering path completes.
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: true });
const StickyMobileCTA = dynamic(() => import("@/components/StickyMobileCTA"), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <AboutAaron />

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

      {/* CTA #1: Visitor just felt pain + saw credibility. Offer diagnosis. */}
      <InlineCTA
        headline="Find out what your marketing is actually producing."
        subtext="15-minute call. No pitch deck. Just your numbers and what they mean."
        buttonText="Get Your Free Audit"
        variant="green"
      />

      <FullPicture />
      <CalculatorBanner />
      <HowItWorks />
      <WhoIsItFor />

      {/* Why work with Sequoia GEO */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="section-overline mb-3">Hear It From Aaron</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl leading-tight">
              Why contractors work with Sequoia GEO
            </h2>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ paddingBottom: "56.25%" }}>
            <YouTubeFacade
              videoId="_-VzBDgEYFY"
              title="Why work with Sequoia GEO? Aaron Husak explains"
            />
          </div>
        </div>
      </section>

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
              What I Actually Look at When I Take Over Your Marketing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Most agencies hand you a report full of impressions and clicks. I start with your P&L, your booking rate, and your average ticket. The marketing channels matter, but only after we know the numbers behind them.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Your Google Business Profile and Local Visibility",
                body: "I audit your GBP listing, your Map Pack position, and how many calls actually come from it. One client had a dead phone number in their LSA profile for three months. Their agency never noticed because they were tracking impressions, not answered calls. That is the kind of gap I close in the first week.",
              },
              {
                title: "Your Ad Spend and What It Actually Produces",
                body: "I connect your Google Ads and LSA accounts to your CRM so we can see cost per booked job, not cost per lead. A $45 lead that books at 80% is worth more than a $12 lead that books at 15%. Most agencies optimize for the $12 lead because it looks better on a report. I optimize for the one that puts a tech in a truck.",
              },
              {
                title: "Your Reviews and Reputation Velocity",
                body: "Star ratings are table stakes. What matters is review velocity: how many new reviews you get per month relative to competitors. I build automated review request sequences that run through your CRM so techs don't have to remember to ask. One client went from 4 reviews/month to 22 without adding any manual steps.",
              },
              {
                title: "Your Revenue Attribution (The Part Everyone Skips)",
                body: "If you cannot tell me the cost per booked job for each marketing channel, you are guessing where to spend money. I wire call tracking into your dispatch system so every dollar of ad spend connects to a real job. This is the single change that has the biggest impact on marketing ROI, and most agencies never do it because it requires access they do not ask for.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
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
              Four Reasons Your Marketing Isn&rsquo;t Producing Revenue
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              After auditing dozens of contractor marketing programs, the same patterns show up over and over. The channel is rarely the problem. The gap is almost always between your marketing, your phones, and your dispatch board.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "You Measure Leads, Not Booked Jobs",
                body: "Your agency sends a report showing 200 leads last month. Great. How many of those booked? How many showed up? What was the average ticket? If you cannot answer those questions by channel, you are spending blind. I had a client spending $14K/month on Google Ads. When we connected call tracking to ServiceTitan, we found 40% of their leads were going to voicemail during business hours.",
              },
              {
                number: "02",
                title: "Three Vendors, Nobody Owns the Outcome",
                body: "Your SEO company says rankings are up. Your PPC manager says cost per click is down. Your web designer says traffic increased. Revenue is flat. Nobody owns the number that matters because each vendor optimizes their own silo. The companies that grow fastest have one person accountable for the full picture, from ad click to dispatched job.",
              },
              {
                number: "03",
                title: "Your Phones Are Leaking Revenue",
                body: "A 35% CSR booking rate means you are losing more than half the leads you already paid for. I listen to call recordings, score booking performance, and build scripts that raise conversion rates. This is not a marketing problem on paper, but it is the fastest way to double your marketing ROI without spending another dollar on ads.",
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
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
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

      {/* Inline booking calendar — primary conversion path */}
      <section className="bg-[#fafaf8] pt-16 pb-0">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#3A9E6A] mb-3">Book a Call</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            Tell Me What You&rsquo;re Spending. I&rsquo;ll Tell You What It&rsquo;s Producing.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Pick a time below for a free 15-minute strategy call. No pitch deck. Just your numbers.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-sm text-gray-500">
            <svg className="h-4 w-4 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            15 minutes &bull; No pitch deck &bull; Real operator-level feedback
          </div>
        </div>
      </section>
      <section className="bg-[#fafaf8] py-10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <BookingCalendar />
        </div>
      </section>

      {/* Form as fallback */}
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex items-center gap-4 py-4">
          <div className="flex-1 border-t border-gray-200" />
          <span className="text-sm text-gray-400">or fill out the form below</span>
          <div className="flex-1 border-t border-gray-200" />
        </div>
      </div>
      <ContactForm />

      {/* Sticky mobile CTA bar: phone + book, appears after scrolling past hero */}
      <StickyMobileCTA />
    </>
  );
}
