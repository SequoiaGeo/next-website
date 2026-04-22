import type { Metadata } from "next";
import Link from "next/link";
import PdfDownload from "./pdf-download";

export const metadata: Metadata = {
  title: "Google Local Service Ads Guide for Contractors 2026 | Sequoia GEO",
  description:
    "The complete contractor's guide to Google Local Service Ads: how LSAs work, managing leads, disputing invalid charges, call handling, reviews, and a daily checklist. Free, no gate.",
  alternates: {
    canonical: "https://www.sequoiageo.com/lsa-guide",
  },
};

const chapters = [
  { id: "what-lsas-are", title: "What LSAs actually are" },
  { id: "managing-leads", title: "Managing leads" },
  { id: "disputing-leads", title: "Disputing bad leads" },
  { id: "call-handling", title: "Call handling" },
  { id: "reviews", title: "Reviews" },
  { id: "ranking-factors", title: "What Google is tracking" },
  { id: "checklist", title: "Daily, weekly, monthly checklist" },
];

export default function LSAGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The Business Owner's Guide to Google Local Service Ads",
            "description": "Complete guide to running and optimizing Google Local Service Ads for contractors: lead management, disputing charges, call handling, reviews, and ranking factors.",
            "author": { "@type": "Person", "name": "Aaron Husak" },
            "publisher": {
              "@type": "Organization",
              "name": "Sequoia GEO",
              "url": "https://www.sequoiageo.com"
            },
            "dateModified": "2026-04-22",
            "mainEntityOfPage": "https://www.sequoiageo.com/lsa-guide"
          })
        }}
      />

      {/* Nav strip */}
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors">
            ← Back to Sequoia GEO
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#0D2318]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 sm:py-20 text-center">
          <p className="section-overline text-[#3A9E6A] mb-4">Free Guide</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.08]">
            The Business Owner&rsquo;s Guide to{" "}
            <span className="text-[#3A9E6A]">Google Local Service Ads</span>
          </h1>
          <p className="mt-6 text-lg text-[#C8EDD2]/70 leading-relaxed max-w-2xl mx-auto">
            A plumbing company in Southern California had their LSA running for months with an active campaign
            and Google sending them Google Guaranteed leads. Every lead hit a dead phone line.
            The agency managing it never called to check.
          </p>
          <p className="mt-4 text-base text-[#C8EDD2]/50">
            This guide covers what your agency probably isn&rsquo;t checking, and what you should be doing every day, week, and month.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-[#C8EDD2]/60">
            {["7 chapters", "11 pages", "10 min/day checklist", "No email required"].map((s) => (
              <span key={s} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3A9E6A]" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main content + sticky TOC */}
      <div className="bg-[#fafaf8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-12 xl:gap-16">

            {/* Sticky TOC sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-8">
                <p className="text-xs font-bold text-[#1A5C3A] uppercase tracking-widest mb-4">Contents</p>
                <nav className="space-y-1">
                  {chapters.map((ch, i) => (
                    <a
                      key={ch.id}
                      href={`#${ch.id}`}
                      className="flex items-start gap-2.5 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-white hover:text-[#1A5C3A] transition group"
                    >
                      <span className="text-xs font-black text-[#1A5C3A]/25 mt-0.5 shrink-0 group-hover:text-[#1A5C3A]/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {ch.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 rounded-xl bg-white border border-gray-200 p-5">
                  <p className="text-xs font-semibold text-[#1a1a1a] mb-2">Want someone to audit your LSA?</p>
                  <p className="text-xs text-gray-500 mb-4">We check the basics most agencies skip: call tracking, profile accuracy, bid strategy, dispute history.</p>
                  <Link
                    href="/#contact"
                    className="block w-full text-center rounded-lg bg-[#1A5C3A] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#0D2318]"
                  >
                    Book a Free Audit
                  </Link>
                </div>
              </div>
            </aside>

            {/* Guide content */}
            <main className="min-w-0">

              {/* Chapter 1 */}
              <section id="what-lsas-are" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">01</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">What LSAs Actually Are</h2>
                </div>
                <div className="prose prose-gray max-w-none space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <p>
                    Local Service Ads are Google&rsquo;s pay-per-lead product for local service businesses. Unlike Google Ads, where you pay for every click to your website regardless of whether the visitor ever contacts you, LSAs charge you only when a potential customer reaches out directly through the ad by calling or sending a message.
                  </p>
                  <p>
                    What makes LSAs structurally different from every other advertising channel is the Google Guaranteed badge. When your business is verified through Google&rsquo;s screening process, you earn a green checkmark that appears on your ad. That badge signals to homeowners that Google has verified your license, insurance, and background check. In categories where trust is the deciding factor before someone opens their door, that verification has a measurable effect on conversion rates.
                  </p>
                  <p>
                    LSA ads appear above sponsored Google Ads and above all organic search results. When someone in your service area searches for your type of work, your LSA listing is literally the first thing they see on the page. No keyword bidding, no quality score, no landing page optimization needed to get there. Google handles ad placement based on its own signals about your account.
                  </p>
                  <p>
                    Billing is triggered when a qualifying lead comes in: a phone call lasting longer than a threshold Google sets (typically 30 seconds for most categories), or a message sent through the ad. You are not charged for spam calls, wrong numbers, or calls you successfully dispute. The lead disputes process is covered in Chapter 3, and it matters more than most contractors realize.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 mb-14" />

              {/* Chapter 2 */}
              <section id="managing-leads" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">02</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Your Most Important Job: Managing Leads</h2>
                </div>
                <div className="prose prose-gray max-w-none space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <p>
                    Google tracks two metrics about how you handle leads: how fast you respond, and what proportion you book versus archive versus dispute. Both directly affect your ad ranking and how many leads Google sends you compared to your competitors.
                  </p>
                  <p>
                    Response time is measured in minutes, not hours. If a lead comes in at 9 PM and you don&rsquo;t acknowledge it until 8 AM, Google records that gap. Your ranking drops accordingly. The contractors who dominate LSA placements in competitive markets have someone monitoring leads continuously, or they have notifications set up so nothing goes unacknowledged after hours. At minimum, a same-night response of &ldquo;Got your message, calling you first thing in the morning&rdquo; within two hours counts as a response in Google&rsquo;s system.
                  </p>
                  <p>
                    Inside the LSA dashboard, every lead has three options. <strong>Book</strong> means you&rsquo;re actively working the lead. <strong>Archive</strong> is for leads where you had a real conversation but couldn&rsquo;t help (wrong trade, job outside your scope, price mismatch). <strong>Dispute</strong> is for leads that clearly don&rsquo;t qualify as legitimate service inquiries. Most contractors use archive and dispute interchangeably, which is wrong. Archiving too much hurts your booking rate metrics. Disputing legitimate leads hurts your account standing. The difference matters.
                  </p>
                  <p>
                    Set up LSA push notifications on your phone immediately. Check the dashboard every morning before 8 AM regardless of notification settings. If you receive a message lead after hours, respond in the dashboard within two hours. These habits alone will put your account above the majority of your local competition, most of whom are checking their LSA dashboard once a week if that.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 mb-14" />

              {/* Chapter 3 */}
              <section id="disputing-leads" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">03</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">How to Get Your Money Back for Bad Leads</h2>
                </div>
                <div className="prose prose-gray max-w-none space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <p>
                    You are going to receive leads you shouldn&rsquo;t be charged for. Google built a dispute process specifically for this. Most contractors leave 15 to 30 percent of their ad spend on the table because they don&rsquo;t use it, either because they don&rsquo;t know how or because they assume it won&rsquo;t work.
                  </p>
                  <p>
                    Leads that qualify for dispute: calls from outside your service area, requests for services you don&rsquo;t offer, existing customers calling back (not a new lead), duplicate leads from the same customer, spam or robocalls, and calls where the caller hung up before any meaningful exchange. Google also auto-credits calls that fall below their minimum duration threshold, but anything above that minimum requires a manual dispute if you believe the lead was invalid.
                  </p>
                  <p>
                    How to dispute: In your LSA dashboard, find the lead, click the three-dot menu, and select &ldquo;Report a problem.&rdquo; Choose the most accurate dispute reason from the dropdown, and write a short, factual explanation in the notes field. Something like &ldquo;Caller was looking for pest control service, which we do not offer&rdquo; is enough. You have 30 days from when the lead was received to file a dispute. Do not let them pile up at the end of the month.
                  </p>
                  <p>
                    What not to dispute: leads where the caller was genuinely looking for your service but chose a competitor, leads where you couldn&rsquo;t schedule them, and leads where the job wasn&rsquo;t profitable. Google reviews disputed leads. If you dispute leads that were clearly legitimate, your dispute approval rate drops and your account standing can be affected. File disputes for genuinely invalid leads aggressively. Let legitimate leads that didn&rsquo;t book go to archive.
                  </p>
                  <p>
                    Target: if less than 10 percent of your leads are being credited back through disputes, you are either operating in a market with unusually clean lead quality or you are missing legitimate disputes.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 mb-14" />

              {/* Chapter 4 */}
              <section id="call-handling" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">04</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Call Handling That Keeps You Off the Hook</h2>
                </div>
                <div className="prose prose-gray max-w-none space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <p>
                    Google uses AI to listen to your LSA calls. Not to spy on your conversations, but to verify lead quality. The AI is determining whether a call was a genuine service inquiry for your category and service area. If it was, you get charged. If the call sounds like a wrong number, spam, or a request for something outside your listed services, you may get an automatic credit.
                  </p>
                  <p>
                    What most contractors don&rsquo;t know is that how your staff answers the call influences what the AI records. Two questions at the start of every LSA call change the outcome:
                  </p>
                  <div className="bg-[#F5FAF7] border border-[#C8EDD2] rounded-xl p-5 my-4">
                    <p className="font-semibold text-[#0D2318] mb-1">&ldquo;What service are you looking for today?&rdquo;</p>
                    <p className="font-semibold text-[#0D2318]">&ldquo;And what&rsquo;s your zip code?&rdquo;</p>
                    <p className="text-sm text-gray-600 mt-3">Ask both within the first 30 seconds. Every time, on every call.</p>
                  </div>
                  <p>
                    These questions give Google&rsquo;s AI clear signal that you&rsquo;re working a real lead for a real service in a real location. They also let you quickly identify disputable leads before you invest time in the call. If someone asks for a service outside your category or a zip code outside your service area, you have grounds for a dispute and you know it immediately.
                  </p>
                  <p>
                    Phrases to avoid on LSA calls: &ldquo;We don&rsquo;t cover that area&rdquo; said immediately without checking, &ldquo;That&rsquo;s not something we do&rdquo; said as a flat decline, and anything that sounds like you are refusing service before gathering information. Instead: &ldquo;Let me check our schedule for your zip code&rdquo; or &ldquo;Our team focuses on X and Y, let me see who might be able to help you with that.&rdquo; The distinction is whether you sound like a business that tried to help versus one that immediately turned someone away.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 mb-14" />

              {/* Chapter 5 */}
              <section id="reviews" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">05</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Reviews: Your #1 Ranking Factor</h2>
                </div>
                <div className="prose prose-gray max-w-none space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <p>
                    LSAs pull directly from your Google Business Profile reviews. Every review you have earned counts toward your LSA ranking. And Google&rsquo;s algorithm does not reward perfection. It rewards volume.
                  </p>
                  <p>
                    A business with 150 reviews at 4.8 stars consistently outranks a business with 30 reviews at 5.0 stars. Google&rsquo;s logic is straightforward: more reviews means more customers served, which means more established legitimacy. A perfect score with a small review count signals to the algorithm that you may be selectively asking only your happiest customers. A business with 150 reviews and a 4.8 is showing a broad, consistent customer base. That is what Google wants to rank.
                  </p>
                  <p>
                    Build a weekly review cadence. Every Friday afternoon, text the customers from your completed jobs that week with a review request. Keep the message short: name, context about the job, and a direct link to your Google review page. Text, not email. Review request text response rates run five to eight times higher than email for home service businesses. Most homeowners check email once a day. They check texts within minutes.
                  </p>
                  <p>
                    What to avoid: bulk review requests sent all at once, using a third-party platform that sends automated review requests to your entire customer list at one time, or anything that creates an unusual spike in review volume. Google flags suspicious patterns. Twenty reviews arriving in one week after months of low volume is a red flag, not a win. The target is three to five new reviews per week from real, recent customers, consistently.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 mb-14" />

              {/* Chapter 6 */}
              <section id="ranking-factors" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">06</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">What Google Is Actually Tracking</h2>
                </div>
                <div className="prose prose-gray max-w-none space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <p>
                    Your LSA ranking is determined by six factors. Here they are in order of how much control you have over them:
                  </p>
                  <ol className="space-y-4 mt-4">
                    {[
                      { n: 1, label: "Responsiveness", desc: "How fast you respond to leads and messages. The single highest-leverage factor you can control. Responding within five minutes to incoming leads dramatically outperforms competitors who check their dashboard once a day." },
                      { n: 2, label: "Review score and count", desc: "Your Google Business Profile rating and total review count. Volume matters more than perfection. Build this consistently over time, not in bursts." },
                      { n: 3, label: "Budget sufficiency", desc: "You need a sufficient budget to stay in rotation. If your budget runs out mid-week, you exit the ad rotation until the next budget period. Google will not tell you when this happens." },
                      { n: 4, label: "Profile completeness", desc: "Business photo, service descriptions, hours, service area, and license and insurance documents all need to be complete and current. Expired credentials pause your ads automatically." },
                      { n: 5, label: "Dispute history", desc: "A clean dispute history means you file legitimate disputes and win them. Abusing the dispute system by filing on leads that were genuine inquiries hurts your standing." },
                      { n: 6, label: "Proximity", desc: "How close your business location is to the searcher. This is the one factor you cannot control. You can expand your service area, but you cannot move your office." },
                    ].map((item) => (
                      <li key={item.n} className="flex gap-4">
                        <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#C8EDD2] text-xs font-black text-[#0D2318] mt-0.5">{item.n}</span>
                        <div>
                          <p className="font-semibold text-[#1a1a1a]">{item.label}</p>
                          <p className="text-gray-600 mt-0.5">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4">
                    The contractors who win at LSA work every controllable factor systematically. The one thing you cannot buy or optimize is proximity. Everything else responds to deliberate effort.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 mb-14" />

              {/* Chapter 7 */}
              <section id="checklist" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">07</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Daily, Weekly, and Monthly Checklist</h2>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      period: "Daily",
                      time: "10 minutes",
                      color: "bg-[#F5FAF7] border-[#C8EDD2]",
                      items: [
                        "Open LSA dashboard and review any new leads from the last 24 hours",
                        "Call back any missed call leads from the last 12 hours before starting your day",
                        "Respond to any unacknowledged message leads in the dashboard",
                        "Confirm your daily budget has not been exhausted mid-day",
                      ],
                    },
                    {
                      period: "Weekly",
                      time: "30 minutes, every Friday",
                      color: "bg-[#EEF7FF] border-[#BFDBFE]",
                      items: [
                        "Text review requests to customers from completed jobs this week",
                        "Review all leads from the week for any valid dispute candidates",
                        "File disputes on any qualifying leads before they age past 30 days",
                        "Check weekly spend vs. leads received; if cost per lead jumped, investigate the lead quality",
                        "Confirm your profile information is still accurate (hours, service area, contact info)",
                      ],
                    },
                    {
                      period: "Monthly",
                      time: "1 hour, first of the month",
                      color: "bg-[#FFF7ED] border-[#FED7AA]",
                      items: [
                        "Audit your Google Business Profile: add new photos, update service descriptions if anything has changed",
                        "Check license and insurance expiration dates in your LSA profile (expired credentials pause your ads without notice)",
                        "Review all dispute credits received and any outstanding disputes",
                        "Calculate your cost per lead for the month and compare to prior months",
                        "Compare LSA cost per lead against your other marketing channels; adjust budget allocation accordingly",
                      ],
                    },
                  ].map((block) => (
                    <div key={block.period} className={`rounded-xl border p-6 ${block.color}`}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base font-bold text-[#1a1a1a]">{block.period}</h3>
                        <span className="text-xs font-medium text-gray-500 bg-white rounded-full px-3 py-1 border border-gray-200">{block.time}</span>
                      </div>
                      <ul className="space-y-2">
                        {block.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* PDF download section */}
              <div className="border-t border-gray-200 pt-12">
                <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
                  <div className="max-w-lg">
                    <p className="text-xs font-bold text-[#1A5C3A] uppercase tracking-widest mb-2">Offline Version</p>
                    <h2 className="text-xl font-bold text-[#1a1a1a] mb-1">Get the PDF version</h2>
                    <p className="text-sm text-gray-500 mb-6">
                      11 pages. Print it out and keep it at your desk. Optional email capture to get occasional operator insights from Aaron.
                    </p>
                    <PdfDownload />
                  </div>
                </div>
              </div>

            </main>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-base font-semibold text-[#1a1a1a]">Want someone to audit your LSA setup?</p>
            <p className="text-sm text-gray-500 mt-1">We check the basics most agencies skip: phone number accuracy, conversion tracking, call handling, dispute history, and bid strategy.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/lsa-management"
              className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0D2318]"
            >
              See LSA Management Services
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#1A5C3A] px-7 py-3.5 text-sm font-semibold text-[#1A5C3A] transition hover:bg-[#1A5C3A] hover:text-white"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
