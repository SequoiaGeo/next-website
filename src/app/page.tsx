import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import OperatorStory from "@/components/OperatorStory";
import MarketingAgents from "@/components/MarketingAgents";
import SequoiaQuestionPanel from "@/components/SequoiaQuestionPanel";

import SnapshotExample from "@/components/SnapshotExample";
import SnapshotNextSteps from "@/components/SnapshotNextSteps";
import YouTubeFacade from "@/components/YouTubeFacade";

export const metadata: Metadata = {
  title: "Home Services Digital Marketing & GEO | Sequoia GEO",
  description: "Digital marketing for home-service businesses, focused on GEO, AI search visibility, SEO, websites, and local profiles. Led by former home-service owner Aaron Husak.",
  alternates: { canonical: "https://www.sequoiageo.com/" },
  openGraph: {
    title: "Digital Marketing for Home-Service Businesses | Sequoia GEO",
    description: "Help homeowners find and evaluate your business through AI search, Google, and a website built around your services.",
    url: "https://www.sequoiageo.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Services Marketing & GEO | Sequoia GEO",
    description: "GEO, SEO, websites, and digital marketing for HVAC, plumbing, roofing, and other home-service businesses.",
  },
};

const snapshotItems = [
  ["What we examine", "Your public business identity, website access, service pages, supporting sources, and the questions customers could ask about your services."],
  ["What you receive", "A documented snapshot of the findings, the sources behind them, and a prioritized correction path. Unknowns are labeled, not filled with assumptions."],
  ["What happens next", "Use the findings with your team or existing provider, or discuss a paid engagement with Sequoia. Requesting the snapshot does not book a meeting."],
];

const questions = [
  ["Who do you work with?", "We focus on home-service businesses, including HVAC, plumbing, roofing, and restoration companies. Aaron brings 13 years of experience owning and operating a home-service business."],
  ["What is GEO?", "Generative engine optimization helps AI search tools understand and evaluate your business. We work on clear service information, consistent business details, supporting evidence, and technical access. No provider can guarantee an AI recommendation."],
  ["Do you also handle SEO and other marketing?", "Yes. GEO works alongside SEO, Google Business Profile management, website improvements, paid media, and measurement. Your proposal defines the priorities, responsibilities, and fees."],
  ["How do we start?", "Book a 15-minute conversation about your marketing priorities, or request an emailed AI Search Snapshot. We review the evidence and agree on a scope before paid work begins."],
  ["Can you build AI agents for our team?", "Yes, as an additional offering. We can scope a workflow for estimate follow-up, customer reactivation, content, reviews, or advertising analysis, with tool access and human approvals established before launch."],
];
const primaryButton = "inline-flex min-h-12 items-center justify-center rounded-lg bg-[#1A5C3A] px-6 py-3 text-base font-bold text-white hover:bg-[#0D2318] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A5C3A]";

export default function Home() {
  const knowledgeEnabled =
    process.env.SEQUOIA_KNOWLEDGE_ENABLED === "true" &&
    process.env.SEQUOIA_KNOWLEDGE_KILL_SWITCH !== "true";

  return (
    <>
      <Hero />
      <section id="services" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="section-overline mb-4">Digital marketing for the trades</p>
          <h2 className="text-3xl font-extrabold text-[#0D2318] sm:text-4xl">Get found. Earn trust. Make it easier to reach you.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["GEO and search visibility", "Help Google and AI search tools understand your services, service areas, and the evidence behind your business. GEO, SEO, and local profiles work together.", "/geo-agency"],
              ["Websites that support inquiries", "Give homeowners clear service information, proof of your work, and a working path to call or request service.", "/web-design-fresno"],
              ["Marketing direction and measurement", "Coordinate campaigns, paid media, and follow-up around the priorities that matter. Report inquiries and booked jobs where the records support them.", "/fractional-cmo"],
            ].map(([title, body, href]) => <article key={title} className="rounded-xl border border-gray-200 p-6"><h3 className="text-xl font-bold text-[#0D2318]">{title}</h3><p className="mt-3 leading-relaxed text-gray-700">{body}</p><Link href={href} className="mt-5 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline">Explore {title.toLowerCase()}</Link></article>)}
          </div>
        </div>
      </section>
      <section id="how-it-works" className="bg-[#0D2318] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Start with the marketing problem that needs attention.</h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              ["01. Review the evidence", "Review your website, search presence, and inquiry path. Identify the gaps and the information needed to understand them."],
              ["02. Agree on priorities", "Define the scope, access, responsibilities, and costs. Implement the agreed search, website, or marketing improvements."],
              ["03. Measure and improve", "Review completed work, search visibility, inquiries, and booked jobs where tracking supports them. Use the findings to choose the next priority."],
            ].map(([title, body]) => <li key={title}><h3 className="text-xl font-bold text-[#C8EDD2]">{title}</h3><p className="mt-3 text-base leading-relaxed text-gray-200">{body}</p></li>)}
          </ol>
          <p className="mt-8 text-base text-gray-200">You retain ownership of your accounts and assets. No ranking or lead guarantees.</p>
        </div>
      </section>
      <section id="proof" className="bg-[#fafaf8] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="section-overline mb-4">Our website and marketing track record</p>
          <p className="mb-4 max-w-3xl text-base leading-relaxed text-gray-600">The examples below document website and marketing projects. They are not claims of guaranteed future results.</p>
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">Website and marketing work you can inspect.</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-700">Founder Aaron Husak spent 13 years as an owner and operator. His company, Balanced Comfort, appeared on the Inc. 5000 in 2021, 2022, 2023, and 2024. <Link href="/case-studies/balanced-comfort" className="font-semibold text-[#1A5C3A] underline underline-offset-4">Explore his operating track record</Link>.</p>
          <article className="mt-8 grid gap-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 md:grid-cols-[1.3fr_0.7fr] md:items-center lg:gap-12" aria-labelledby="kabam-proof-heading">
            <div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <Image src="/kabam-logo.png" alt="KABAM Plumbing Services logo" width={600} height={329} sizes="144px" className="h-auto w-36 shrink-0 object-contain" />
                <p className="max-w-[240px] text-sm font-semibold text-[#1A5C3A]">KABAM Plumbing Services · Sun City Center, Florida</p>
              </div>
              <h3 id="kabam-proof-heading" className="mt-3 text-2xl font-bold leading-tight text-[#0D2318] sm:text-3xl">A website built around the business Mike actually runs.</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-700">Mike is an independent plumber competing with larger companies. We rebuilt KABAM&rsquo;s website around his plumbing services and the communities he serves, giving prospective customers a clearer picture of who to call and what he can help with.</p>
              <ul className="mt-5 space-y-3 text-base leading-relaxed text-gray-700">
                <li><strong className="text-[#0D2318]">A website he owns,</strong> with content about his plumbing services.</li>
                <li><strong className="text-[#0D2318]">Local service pages,</strong> covering Sun City Center, Apollo Beach, Wimauma, Riverview, and surrounding communities.</li>
                <li><strong className="text-[#0D2318]">Clearer measurement,</strong> including corrections to duplicate form tracking.</li>
              </ul>
              <p className="mt-5 text-base leading-relaxed text-gray-700">Hear Mike describe his experience working with Sequoia GEO.</p>
              <Link href="/case-studies/kabam-plumbing" className="mt-4 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline underline-offset-4">See KABAM&rsquo;s website story</Link>
            </div>
            <figure className="mx-auto w-full max-w-[280px]">
              <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-black">
                <YouTubeFacade videoId="IpbCaelX2jo" title="Michael Bissett of KABAM Plumbing on working with Sequoia GEO" isShort />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-gray-600"><span className="block font-semibold text-[#0D2318]">Michael Bissett, Owner</span>KABAM Plumbing Services · Client testimonial</figcaption>
            </figure>
          </article>
          <article aria-labelledby="amazing-air-proof-heading" className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <Image src="/amazing-air-logo.png" alt="Amazing Air Solutions logo" width={504} height={255} sizes="144px" className="h-auto w-36 shrink-0 object-contain" />
              <p className="max-w-[240px] text-sm font-semibold text-[#1A5C3A]">Amazing Air Solutions · San Antonio, Texas</p>
            </div>
            <h3 id="amazing-air-proof-heading" className="mt-3 max-w-3xl text-2xl font-bold leading-tight text-[#0D2318] sm:text-3xl">Make it possible for customers to find you and take the next step.</h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700">A homeowner should not have to work around a broken website to request service. For Amazing Air, we repaired the paths customers use to navigate, book, and reach relevant service pages.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="text-lg font-bold text-[#0D2318]">Mobile navigation that works</h4>
                <p className="mt-3 text-base leading-relaxed text-gray-700"><strong>The problem:</strong> Mobile navigation buttons changed appearance without taking visitors anywhere.</p>
                <p className="mt-3 text-base leading-relaxed text-gray-700"><strong>The repair:</strong> Replaced them with working links to the homepage, services, phone, and booking path.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0D2318]">A usable booking path</h4>
                <p className="mt-3 text-base leading-relaxed text-gray-700"><strong>The problem:</strong> Book-online buttons failed to open the scheduler because its configured website address did not match.</p>
                <p className="mt-3 text-base leading-relaxed text-gray-700"><strong>The repair:</strong> Corrected the integration, verified the scheduler opened on desktop, and added a contact-page fallback.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0D2318]">Old links with somewhere to go</h4>
                <p className="mt-3 text-base leading-relaxed text-gray-700"><strong>The problem:</strong> Legacy website addresses still appearing in search led to missing pages.</p>
                <p className="mt-3 text-base leading-relaxed text-gray-700"><strong>The repair:</strong> Added redirects and verified sampled legacy addresses reached live pages.</p>
              </div>
            </div>
            <p className="mt-6 border-t border-gray-200 pt-5 text-sm leading-relaxed text-gray-600">Documented repairs from May and June 2026. These are verified website corrections, not a measured increase in leads, bookings, or AI recommendations.</p>
          </article>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#0D2318]">Inside an AI Search Snapshot</h3>
              <SnapshotExample />
              <Link href="/case-studies/ai-search-readiness" className="mt-5 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline underline-offset-4">Read the actual assessment example</Link>
            </article>
            <article className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#0D2318]">Verify our work and our method</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-700">We establish what is true, correct what is broken, and verify the result before claiming marketing success. Client feedback describes the working relationship. Case studies explain the work and what the evidence supports.</p>
              <div className="mt-5 flex flex-col items-start gap-3 text-base font-bold text-[#1A5C3A]">
                <Link href="/case-studies" className="underline underline-offset-4">Browse client work</Link>
                <Link href="/ai-search-methodology" className="underline underline-offset-4">Read the AI search measurement method</Link>
                <Link href="/proof-system" className="underline underline-offset-4">See our proof standards</Link>
                <a href="https://www.google.com/maps?cid=5823435747371480489" className="underline underline-offset-4">Read Sequoia GEO reviews on Google</a>
                <a href="https://www.thefirstclick.net/ep-320-using-ai-to-increase-website-clarity-with-aaron-husak/" className="underline underline-offset-4">Podcast: using AI to improve website clarity</a>
                <a href="https://www.grownearby.com/podcast/the-success-story-of-aaron-husak/" className="underline underline-offset-4">Podcast: Aaron&rsquo;s home-services operating background</a>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-gray-600">Interviews and operating credentials provide background on Aaron. They are not endorsements of Sequoia&rsquo;s services or proof of client AI-search results.</p>
            </article>
          </div>
        </div>
      </section>
      <OperatorStory />
      <MarketingAgents />
      <section id="snapshot" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="section-overline mb-4">Free AI Search Snapshot</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">Help customers find and evaluate your business.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {snapshotItems.map(([title, body]) => (
              <div key={title} className="rounded-xl bg-[#fafaf8] p-6">
                <h3 className="text-lg font-bold text-[#0D2318]">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-700">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base text-gray-600">Hand reviewed by Aaron. Public information first. No account access needed to begin.</p>
          <details className="mt-5 rounded-xl border border-gray-200 p-5 text-gray-700"><summary className="cursor-pointer font-bold text-[#0D2318]">After you submit: delivery and follow-up</summary><div className="mt-4"><SnapshotNextSteps /></div></details>
          <Link href="/ai-search-assessment" className={`${primaryButton} mt-6`}>Request My Free AI Search Snapshot</Link>
        </div>
      </section>


      {knowledgeEnabled && (
        <SequoiaQuestionPanel surface="homepage_inline" embedded />
      )}
      <section id="questions" className="bg-[#fafaf8] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0D2318]">Before we work together</h2>
          <div className="mt-8 space-y-4">
            {questions.map(([question, answer]) => (
              <details key={question} className="rounded-xl border border-gray-200 bg-white p-6">
                <summary className="cursor-pointer text-lg font-bold text-[#0D2318]">{question}</summary>
                <p className="mt-4 text-base leading-relaxed text-gray-700">{answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-base text-gray-700">Looking beyond AI search? <Link href="/audit" className="font-semibold text-[#1A5C3A] underline underline-offset-4">See the separate Free Marketing Scorecard</Link>.</p>
          <p className="mt-4 text-base text-gray-700">More background: <Link href="/about-sequoia-geo" className="font-semibold text-[#1A5C3A] underline underline-offset-4">Aaron&rsquo;s operating experience</Link> and <Link href="/media#workshops" className="font-semibold text-[#1A5C3A] underline underline-offset-4">workshops and website walkthroughs</Link>.</p>
        </div>
      </section>
      <section id="contact" className="bg-white py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0D2318] sm:text-4xl">What needs to work better in your marketing?</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">Tell Aaron about your home-service business and the marketing challenge you want to solve. We will discuss the next step and whether Sequoia is the right fit.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link href="/contact#book" className={primaryButton}>Book a 15-Minute Call</Link>
            <Link href="/ai-search-assessment" className="inline-flex min-h-12 items-center font-bold text-[#1A5C3A] underline underline-offset-4">Get My Free AI Search Snapshot</Link>
          </div>
        </div>
      </section>
    </>
  );
}
