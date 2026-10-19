import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import MarketingLeadershipOffer from "@/components/MarketingLeadershipOffer";
import Hero from "@/components/Hero";
import FounderIntroduction from "@/components/FounderIntroduction";
import InlineLeadForm from "@/components/InlineLeadForm";
import OperatorStory from "@/components/OperatorStory";
import MarketingAgents from "@/components/MarketingAgents";
import SequoiaQuestionPanel from "@/components/SequoiaQuestionPanel";

import SnapshotExample from "@/components/SnapshotExample";
import SnapshotNextSteps from "@/components/SnapshotNextSteps";
import YouTubeFacade from "@/components/YouTubeFacade";

export const metadata: Metadata = {
  title: "Home Services Marketing & Fractional CMO | Sequoia GEO",
  description: "Fractional CMO leadership for home-service companies, starting at $7,000 per month. Optional marketing execution starts at $4,500 separately. Work directly with Aaron Husak.",
  alternates: { canonical: "https://www.sequoiageo.com/" },
  openGraph: {
    title: "Home Services Marketing & Fractional CMO | Sequoia GEO",
    description: "Connect search, advertising, your website, and the booking handoff. Work directly with former home-service owner Aaron Husak.",
    url: "https://www.sequoiageo.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Services Marketing & Fractional CMO | Sequoia GEO",
    description: "GEO, SEO, websites, and digital marketing for HVAC, plumbing, roofing, and other home-service businesses.",
  },
};

const snapshotItems = [
  ["What we examine", "Your public business identity, website access, service pages, supporting sources, and the questions customers could ask about your services."],
  ["What you receive", "A documented snapshot of the findings, the sources behind them, and a prioritized correction path. Unknowns are labeled, not filled with assumptions."],
  ["What happens next", "Identify what deserves attention first, then discuss how Aaron can lead the plan and coordinate the work with your team. Requesting the snapshot does not book a meeting."],
];

const questions = [
  ["Who do you work with?", "We focus on home-service businesses, including HVAC, plumbing, roofing, and restoration companies. Aaron brings 13 years of experience owning and operating a home-service business."],
  ["What is GEO?", "Generative engine optimization helps AI search tools understand and evaluate your business. We work on clear service information, consistent business details, supporting evidence, and technical access. The work focuses on making your business understandable and supported by evidence."],
  ["Do you also handle SEO and other marketing?", "Yes. Fractional CMO leadership starts at $7,000 per month. Optional execution starts at $4,500 separately and can include SEO, GEO, Google Business Profile, websites and paid media. Your agreement defines channels, output and responsibilities. Ad spend and approved software are additional."],
  ["How do we start?", "Book a 15-minute conversation about your marketing priorities, or request an emailed AI Search Snapshot. We review the evidence and agree on a scope before paid work begins."],
  ["Can you build AI agents for our team?", "AI agents support research, content, analysis and production within the agreed marketing program, with Aaron directing and reviewing the work. Workflows inside your own business are scoped separately with access and approvals defined before launch."],
];
const primaryButton = "forest-button";

export default function Home() {
  const knowledgeEnabled =
    process.env.SEQUOIA_KNOWLEDGE_ENABLED === "true" &&
    process.env.SEQUOIA_KNOWLEDGE_KILL_SWITCH !== "true";

  return (
    <div className="forest-home">
      <Hero />
      <FounderIntroduction />
      <section id="proof" className="bg-[#fafaf8] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="mb-4 text-base font-semibold text-[#1A5C3A]">Results an owner can evaluate</p>
          <p className="mb-4 max-w-3xl text-base leading-relaxed text-gray-600">Real businesses. Documented search results. Hear from an owner and see the work behind the numbers.</p>
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">See the work. Understand the decisions.</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-700">Founder Aaron Husak spent 13 years as an owner and operator. His company, Balanced Comfort, appeared on the Inc. 5000 in 2021, 2022, 2023, and 2024. <Link href="/case-studies/balanced-comfort" className="font-semibold text-[#1A5C3A] underline underline-offset-4">Explore his operating track record</Link>.</p>
                    <div className="mt-8 grid gap-4 lg:grid-cols-3" aria-label="Dated client results">
            <article className="rounded-2xl border border-[#1A5C3A]/20 bg-white p-6">
              <p className="text-sm font-semibold text-[#1A5C3A]">AFCS · Google organic search</p>
              <h3 className="mt-3 text-4xl font-extrabold text-[#0D2318]">+365%</h3>
              <p className="mt-3 text-lg font-semibold text-[#0D2318]">26 to 121 website clicks</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">June 5 to July 4 versus September 14 to October 13, 2026. Both 30-day windows follow launch. Seasonal demand may contribute.</p>
              <Link href="/case-studies/firemans-chimney-sweep" className="mt-4 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline underline-offset-4">See the Search Console evidence</Link>
            </article>
            <article className="rounded-2xl border border-[#1A5C3A]/20 bg-white p-6">
              <p className="text-sm font-semibold text-[#1A5C3A]">Amazing Air · Google organic search</p>
              <h3 className="mt-3 text-4xl font-extrabold text-[#0D2318]">+50%</h3>
              <p className="mt-3 text-lg font-semibold text-[#0D2318]">40 to 60 website clicks</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">April 10 to May 9 versus September 14 to October 13, 2026. Our first 30 days working together versus a later 30-day window.</p>
              <a href="#amazing-air-proof-heading" className="mt-4 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline underline-offset-4">See the work and measurement</a>
            </article>
            <article className="rounded-2xl border border-[#1A5C3A]/20 bg-white p-6">
              <p className="text-sm font-semibold text-[#1A5C3A]">KABAM · Plumbing</p>
              <h3 className="mt-3 text-3xl font-extrabold text-[#0D2318]">50%</h3>
              <p className="mt-3 text-lg font-semibold text-[#0D2318]">increase in phone calls</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">Mike Bissett, KABAM Plumbing. <a href="https://www.youtube.com/watch?v=IpbCaelX2jo&amp;t=52" className="underline underline-offset-4">Client testimonial, May 2026.</a></p>
              <a href="#kabam-proof-heading" className="mt-4 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline underline-offset-4">Hear directly from the owner</a>
            </article>
          </div>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-gray-700">The search figures come from Google Search Console, verified October 16, 2026. They show observed changes during our work together, not a controlled measure of SEO alone. Website clicks and phone calls are different stages; neither is a booked-job count.</p>
          <article className="mt-8 grid gap-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 md:grid-cols-[1.3fr_0.7fr] md:items-center lg:gap-12" aria-labelledby="kabam-proof-heading">
            <div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <Image src="/kabam-logo.png" alt="KABAM Plumbing Services logo" width={600} height={329} sizes="144px" className="h-auto w-36 shrink-0 object-contain" />
                <p className="max-w-[240px] text-sm font-semibold text-[#1A5C3A]">KABAM Plumbing Services · Sun City Center, Florida</p>
              </div>
              <h3 id="kabam-proof-heading" className="mt-3 text-2xl font-bold leading-tight text-[#0D2318] sm:text-3xl">More calls, and an owner growing his team.</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-700">Mike is an independent plumber competing with larger companies. We rebuilt KABAM&rsquo;s website around his plumbing services and the communities he serves, giving prospective customers a clearer picture of who to call and what he can help with.</p>
              <ul className="mt-5 space-y-3 text-base leading-relaxed text-gray-700">
                <li><strong className="text-[#0D2318]">A website he owns,</strong> with content about his plumbing services.</li>
                <li><strong className="text-[#0D2318]">Local service pages,</strong> covering Sun City Center, Apollo Beach, Wimauma, Riverview, and surrounding communities.</li>
                <li><strong className="text-[#0D2318]">Clearer measurement,</strong> including corrections to duplicate form tracking.</li>
              </ul>
              <p className="mt-5 text-base leading-relaxed text-gray-700">In his May 2026 testimonial, Mike shares the increase in phone calls and his decision to hire an apprentice. Hear his experience working with Sequoia GEO in his own words.</p>
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
            <div className="mt-5 rounded-xl bg-[#fafaf8] p-5"><p className="text-2xl font-extrabold text-[#1A5C3A]">40 to 60 organic Google clicks</p><p className="mt-2 text-base leading-relaxed text-gray-700">Search Console recorded 50% more clicks in September 14 to October 13 than in April 10 to May 9, 2026, our first 30 days working together. Impressions declined from 29,465 to 25,796. These are website clicks from search, measured separately from customer inquiries.</p></div>
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
            <p className="mt-6 border-t border-gray-200 pt-5 text-sm leading-relaxed text-gray-600">Documented repairs from May and June 2026. The priority was restoring the paths homeowners use to find service and contact the team.</p>
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
      <div id="inquiry" className="scroll-mt-20">
        <InlineLeadForm source="homepage_top" heading="Tell Aaron what needs to work better" subtext="Share your business and contact details. Aaron will follow up to discuss your marketing priorities. Prefer to choose a time now? Use the call booking link above." buttonText="Request a Conversation" collectCompany />
      </div>
      <section id="services" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="mb-4 text-base font-semibold text-[#1A5C3A]">Digital marketing for the trades</p>
          <h2 className="text-3xl font-extrabold text-[#0D2318] sm:text-4xl">One direction for your marketing.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Get found for the work you want", "I set the search priorities around your services and communities, then coordinate SEO, AI search and local profiles so customers can find and evaluate your business.", "/geo-agency"],
              ["Turn interest into customer inquiries", "Your advertising, service pages and contact paths should work together. I direct the improvements that help interested homeowners understand your offer and reach your team.", "/websites"],
              ["Know what your marketing produces", "I bring the numbers together, review inquiry quality and use the evidence to decide what to continue, change or stop. You have one person accountable for the plan and its performance.", "/fractional-cmo"],
            ].map(([title, body, href]) => <article key={title} className="border-t border-[#0D2318]/20 pt-6"><h3 className="text-xl font-bold text-[#0D2318]">{title}</h3><p className="mt-3 leading-relaxed text-gray-700">{body}</p><Link href={href} className="mt-5 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline">Explore {title.toLowerCase()}</Link></article>)}
          </div>
        </div>
      </section>
      <section id="how-it-works" className="bg-[#0D2318] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Start with the marketing problem that needs attention.</h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              ["01. Review the evidence", "Review your website, search presence, and inquiry path. Identify the gaps and the information needed to understand them."],
              ["02. Set the priorities. Own the plan.", "I turn your business goals and current performance into a focused marketing plan: what deserves investment, what needs correcting and how we will measure progress. Then I direct the execution."],
              ["03. Measure and improve", "Review completed work, search visibility, inquiries, and booked jobs where tracking supports them. Use the findings to choose the next priority."],
            ].map(([title, body]) => <li key={title}><h3 className="text-xl font-bold text-[#C8EDD2]">{title}</h3><p className="mt-3 text-base leading-relaxed text-gray-200">{body}</p></li>)}
          </ol>
          <p className="mt-8 text-base text-gray-200">You retain ownership of your accounts and assets. I remain your direct point of contact.</p>
        </div>
      </section>
      <MarketingLeadershipOffer />
      <OperatorStory />
      <MarketingAgents />
      <section id="snapshot" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="mb-4 text-base font-semibold text-[#1A5C3A]">Free AI Search Snapshot</p>
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
          <h2 className="text-3xl font-extrabold text-[#0D2318] sm:text-4xl">Let&rsquo;s put your marketing in focus.</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">Tell Aaron about your home-service business and the marketing challenge you want to solve. We will discuss the next step and whether Sequoia is the right fit.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link href="/contact#book" className={primaryButton}>Book a call</Link>
            <Link href="/ai-search-assessment" className="inline-flex min-h-12 items-center font-bold text-[#1A5C3A] underline underline-offset-4">Get My Free AI Search Snapshot</Link>
          </div>
        </div>
      </section>
      <p className="forest-results-note">Results vary. Rankings, lead volume and AI recommendations are not guaranteed.</p>
    </div>
  );
}
