import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restoration SEO & Marketing | Sequoia GEO: Revenue-Focused Growth",
  description:
    "Water and fire damage restoration marketing managed to booked jobs. B General Licensed Contractor. I understand insurance jobs vs. retail, TPA relationships, and storm surge marketing, because I've operated in home services for 13 years.",
  alternates: {
    canonical: "https://www.sequoiageo.com/restoration-seo",
  },
};

export default function RestorationSeoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#52B788]/30 bg-white px-5 py-2 text-sm font-medium text-[#2D6A4F] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#52B788]" />
              Restoration Marketing
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Restoration Marketing That Understands{" "}
              <span className="text-[#2D6A4F]">Your Job Mix</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Insurance jobs, TPA relationships, retail emergency calls, storm surges: restoration marketing
              is not the same as HVAC or plumbing. Most agencies treat it like it is. I&rsquo;ve operated in
              home services long enough to know the difference matters.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#2D6A4F] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#2D6A4F]/25 transition hover:bg-[#1B4332]"
              >
                Get a Full Picture Audit
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a href="tel:5595213122" className="text-base font-medium text-[#2D6A4F] hover:text-[#1B4332] transition-colors">
                (559) 521-3122
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's different about restoration */}
      <section className="bg-[#1B4332] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Why Restoration Marketing Is Different
            </h2>
            <p className="mt-4 text-lg text-[#D8F3DC]/80">
              Your marketing mix looks nothing like a standard home services company. These are the metrics
              that actually matter for restoration.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: "Insurance vs. retail job mix",
                body: "Insurance jobs drive volume. Retail emergency calls drive margin. Most restoration companies underinvest in direct consumer marketing because their agency doesn't understand the difference. I track average ticket and margin by job type.",
              },
              {
                title: "Storm surge vs. baseline marketing",
                body: "After a major weather event, your call volume doesn't need more ads: it needs capacity management and booking systems. I build surge strategies before storm season hits, not after.",
              },
              {
                title: "Emergency response timing",
                body: "Water damage calls happen at 2am. Ads need to run 24/7. LSAs need to be active. Your phone handling needs to convert on the first call. Most agencies don't think through the full emergency response chain.",
              },
              {
                title: "Review generation in restoration",
                body: "Customers who just had a flooded basement or a house fire are not in the mood to leave reviews. I build review workflows timed to project completion, not job close, because the emotional arc is longer.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-base font-bold text-[#52B788]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#D8F3DC]/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I track */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What I Actually Measure
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Standard agencies report leads. I report on what leads are worth to your business.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-6">
              <h3 className="text-base font-bold text-[#1a1a1a] mb-4">Agency Reports On</h3>
              <ul className="space-y-2">
                {[
                  "Total leads generated",
                  "Cost per lead by channel",
                  "Keyword rankings",
                  "Website traffic volume",
                  "Ad impressions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-500">
                    <svg className="h-4 w-4 shrink-0 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#52B788]/30 bg-[#D8F3DC]/20 p-6">
              <h3 className="text-base font-bold text-[#1B4332] mb-4">I Report On</h3>
              <ul className="space-y-2">
                {[
                  "Cost per booked job by channel",
                  "Average job ticket by lead source",
                  "Insurance vs. retail conversion rate",
                  "Booking rate by time of day and day of week",
                  "Review velocity vs. top 3 local competitors",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#1B4332]">
                    <svg className="h-4 w-4 shrink-0 text-[#52B788]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Restoration Marketing, End to End
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every channel tied to revenue by job type, not just lead count.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Google Ads for water & fire damage keywords",
              "Local Service Ads setup & management",
              "Google Business Profile optimization",
              "Map Pack ranking for emergency restoration",
              "Storm surge campaign management",
              "24/7 emergency ad scheduling",
              "Review generation tied to project completion",
              "Website conversion optimization",
              "AI search visibility (ChatGPT, Perplexity)",
              "Insurance vs. retail lead attribution",
              "Call tracking & booking rate analysis",
              "Off-season pipeline building",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#52B788]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#52B788]/20 bg-[#fafaf8] p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
                  I Have a B General Contractor License
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  California B General License covers the structural and general contracting work that
                  runs alongside restoration projects. That license means I&rsquo;ve been in the trenches
                  of home services long enough to understand how your jobs actually work.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I know the difference between a mitigation-only job and a full rebuild. I know why
                  your average ticket varies by 10x depending on the job type. I know that your marketing
                  has to look completely different for emergency water damage calls versus proactive
                  mold remediation inquiries.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I built Balanced Comfort from startup to 130+ employees and $10M+ in annual revenue.
                  That experience is what I bring to every restoration client I work with.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "B Gen", label: "CA Contractor License" },
                  { stat: "13 yrs", label: "Home services operator" },
                  { stat: "4x", label: "Inc 5000 (2020-2023)" },
                  { stat: "130+", label: "Employees at peak" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-[#D8F3DC] p-5 text-center">
                    <div className="text-2xl font-extrabold text-[#1B4332]">{item.stat}</div>
                    <div className="mt-1 text-xs text-[#2D6A4F]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Restoration SEO Requires */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Restoration SEO Actually Requires
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Restoration SEO is not the same as standard home service SEO. Here are the four components
              every restoration company needs to compete in local search results.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Local SEO and Google Business Profile",
                body: "Local SEO is the foundation of restoration SEO. Most restoration company calls come from the Map Pack, not from organic results below it. Winning local SEO means a fully optimized Google Business Profile, consistent local citations, and service area pages for every city you serve. Search engines reward restoration companies that demonstrate active, legitimate local businesses with strong review velocity.",
              },
              {
                title: "Emergency vs. Proactive Keyword Strategy",
                body: "Restoration SEO must serve both emergency demand (&ldquo;water damage restoration near me&rdquo; at 2am) and proactive demand (&ldquo;mold inspection cost&rdquo; from a researching homeowner). Most home service SEO strategies target one or the other. Restoration SEO requires dedicated service pages calibrated to each type of search intent so you capture both the emergency call and the planned project.",
              },
              {
                title: "Technical SEO and Site Speed",
                body: "A slow restoration website loses emergency calls before the property owner even reads your offer. Page speed is a direct search engine ranking signal. Technical SEO ensures search engines can crawl and index your restoration website correctly. I audit every restoration company&rsquo;s website for technical issues before building out any content strategy &ndash; technical debt silently suppresses rankings for years.",
              },
              {
                title: "Link Building and Reputation",
                body: "Search engines use link building signals and review velocity to determine which restoration company deserves to rank. High quality backlinks from local citations, industry associations, and local media coverage build domain authority over time. Paired with a systematic review generation process timed to project completion, link building and reputation management compound into durable local SEO rankings your competitors cannot quickly match.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D8F3DC]">
                    <svg className="h-4 w-4 text-[#2D6A4F]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restoration SEO Tips */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Restoration SEO Tips That Move the Needle
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Practical improvements restoration companies can implement immediately.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Build Service Area Pages for Every City You Serve",
                body: "A restoration company that serves 15 cities needs 15 dedicated service area pages to rank in local searches. One generic service area page will not rank in local search results for city-specific queries. Pages built around local keywords like &ldquo;water damage restoration in [city]&rdquo; capture emergency search traffic from property owners actively searching for restoration services in their specific location &ndash; the highest-converting organic traffic a restoration website can earn.",
              },
              {
                step: "02",
                title: "Time Review Requests to Project Completion, Not Job Close",
                body: "Property owners who just experienced water damage or a house fire are not emotionally ready to leave reviews immediately after the job closes. The emotional arc of a restoration project is longer than a standard home service call. I build review workflows timed to project completion &ndash; typically 2 to 3 weeks after the restoration work is finished &ndash; because that is when customer sentiment peaks and review conversion rates are highest.",
              },
              {
                step: "03",
                title: "Run 24/7 Local Service Ads Alongside Organic SEO",
                body: "Water damage restoration calls happen at 2am on a Sunday. Your Local Service Ads need to be active around the clock, not just during business hours. While restoration SEO builds organic rankings over months, LSAs capture emergency calls immediately. The restoration companies that win high-ticket emergency jobs consistently are the ones with 24/7 ad coverage and a phone team trained to convert emergency callers on the first contact.",
              },
              {
                step: "04",
                title: "Separate Insurance and Retail Lead Tracking",
                body: "Insurance restoration jobs and retail emergency calls produce different average tickets, different close rates, and different lifetime values. If your restoration SEO and paid advertising are measured only by total lead count, you cannot optimize toward the job type that actually produces the most revenue. I connect every restoration marketing channel to call tracking and job data so you know which channels produce insurance leads, which produce retail calls, and which produce the highest-ticket work.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2D6A4F] text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restoration SEO FAQ */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Restoration SEO Questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "How long does restoration SEO take?",
                a: "Most restoration companies see measurable improvements in search engine rankings within 3 to 6 months. Significant increases in organic traffic and phone calls typically follow at the 6 to 9 month mark. Competitive urban markets may require 9 to 12 months before organic SEO surpasses paid advertising as a lead volume driver. The SEO investment compounds over time in ways that paid search cannot replicate.",
              },
              {
                q: "What makes restoration SEO different from other home service SEO?",
                a: "Restoration SEO must serve emergency demand (&ldquo;water damage near me&rdquo; at 2am) and proactive demand (&ldquo;mold inspection cost&rdquo;) simultaneously. It also requires different content strategies for insurance-driven jobs versus retail emergency calls. Most home service SEO strategies are built for one demand pattern. Restoration SEO has to serve both, which requires a more sophisticated content architecture and keyword strategy.",
              },
              {
                q: "Do restoration companies need SEO and paid ads?",
                a: "Yes. Paid ads deliver immediate visibility for high-priority restoration keywords while SEO builds organic rankings over time. A restoration company relying entirely on paid advertising is vulnerable to rising cost-per-click rates. A restoration company investing only in SEO misses emergency calls during the months before organic rankings mature. The right restoration marketing strategy uses both channels, with SEO building the long-term organic foundation.",
              },
              {
                q: "What restoration SEO results should I expect?",
                a: "Realistic targets for most restoration companies: page one rankings for 8 to 12 primary restoration keywords within 6 months, measurable increases in organic traffic and phone call volume by month 3, and a positive revenue return on SEO investment within 12 months. I use Google Search Console and call tracking to measure SEO success at every stage so there are no surprises.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 bg-white p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]" dangerouslySetInnerHTML={{ __html: item.q }} />
                <p className="mt-3 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.a }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Restoration SEO Involves */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Restoration SEO Actually Involves
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Search engine optimization for restoration companies has to serve two distinct demand types:
              emergency calls from homeowners with active water damage or fire damage, and insurance-driven
              jobs where adjusters and policyholders are researching restoration contractors days after the event.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Local SEO and Emergency Search Visibility",
                body: "Local SEO for restoration companies focuses heavily on emergency query capture: 'water damage restoration near me,' 'flood cleanup,' 'fire damage repair.' These queries happen at 2am when homeowners are in crisis. Google Business Profile visibility in the Map Pack, fast mobile load speeds, and a prominently displayed phone number determine which restoration company gets that call. Local search visibility built before emergencies happen captures demand that cannot be planned around.",
              },
              {
                title: "On-Page SEO for Restoration Services",
                body: "On-page SEO for restoration websites requires dedicated service pages for every major category: water damage restoration, fire and smoke damage, mold remediation, storm damage cleanup, and biohazard cleaning. Each service page targets specific keywords and addresses the questions homeowners and adjusters search before selecting a restoration contractor. Separate insurance claim content and retail emergency content serve different buyer journeys with different search behavior.",
              },
              {
                title: "Insurance Adjuster and TPA Content",
                body: "Restoration companies working with insurance carriers and TPAs need content that speaks to adjusters, not just homeowners. Service pages that address certifications, response times, documentation processes, and preferred vendor qualifications attract the insurance-side searches that produce high-volume job flow. This content layer is unique to restoration SEO and ignored by most general home service SEO agencies.",
              },
              {
                title: "Link Building and Local Authority",
                body: "Link building for restoration companies earns high-quality backlinks from emergency services directories, insurance industry resources, property management associations, local media coverage of major damage events, and trade certification programs. Domain authority built through consistent link building determines which restoration company appears first when disaster search volume spikes after major weather events in the service area.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D8F3DC]">
                    <svg className="h-4 w-4 text-[#2D6A4F]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restoration SEO Strategy */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Restoration SEO Strategy: Serving Two Demand Types
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Most home service SEO is built around one demand pattern. Restoration marketing has to serve
              both emergency response and insurance claim workflows, which require different content, different
              keywords, and different conversion paths.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "Keyword Research for Emergency and Insurance Jobs",
                body: "Restoration keyword research maps queries across two tracks: emergency homeowner searches that happen in the moment of crisis, and research-phase queries from homeowners and adjusters evaluating restoration companies after the initial emergency has been addressed. Each track requires different service page content, different calls to action, and different conversion expectations. A complete keyword strategy covers both.",
              },
              {
                number: "02",
                title: "Content Marketing for Restoration Authority",
                body: "Content marketing for restoration companies builds organic traffic through educational content that answers the questions property owners ask after water damage, fire damage, or mold discovery: what does the restoration process involve, how long does it take, what does insurance cover, how do I prevent mold after a flood. This content builds domain authority, attracts high-quality backlinks, and positions the company as the most credible option in the local market.",
              },
              {
                number: "03",
                title: "Online Reviews and Reputation Management",
                body: "Restoration companies operate in high-stress situations where the customer experience is particularly memorable. Positive online reviews from satisfied restoration customers carry significant weight in local search rankings and conversion. A review generation system that captures feedback consistently after every completed job builds the online reputation that local search rewards. Review recency matters because restoration jobs happen year-round and reviews from three years ago carry less weight than recent ones.",
              },
              {
                number: "04",
                title: "Attribution from Search to Dispatched Job",
                body: "Restoration SEO success should be measured by dispatched jobs and revenue, not impressions and rankings. That requires call tracking tied to organic landing pages, integration with your CRM or job management system, and reporting that separates emergency organic calls from insurance referrals from paid search. Without that attribution infrastructure, you cannot allocate marketing budget correctly or hold your SEO program accountable to actual business outcomes.",
              },
            ].map((item) => (
              <div key={item.number} className="rounded-2xl border border-gray-200 bg-white p-7">
                <div className="mb-4 text-4xl font-black text-[#D8F3DC]">{item.number}</div>
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restoration SEO Extended FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              More Restoration SEO Questions
            </h2>
          </div>
          <div className="space-y-5">
            {[
              {
                q: "What restoration keywords produce the highest-value jobs?",
                a: "Water damage restoration and fire damage restoration keywords typically produce the highest average job values because the scope of work is substantial and insurance coverage is common. Mold remediation keywords produce consistent volume but are more price-sensitive. Emergency keywords like 'water damage near me' and 'flood cleanup' convert immediately but compete heavily on speed of response. A complete restoration SEO strategy covers all categories mapped to dedicated service pages.",
              },
              {
                q: "How does restoration SEO handle the insurance vs. retail distinction?",
                a: "The most effective restoration SEO programs maintain separate content tracks for insurance-driven jobs and retail emergency calls. Insurance content addresses the claim process, contractor certifications, documentation standards, and TPA relationships. Retail emergency content focuses on speed, availability, and what to do immediately after discovering damage. These are different audiences with different search behavior and different decision criteria. Mixing them on a single generic page serves neither well.",
              },
              {
                q: "What should I look for in a restoration SEO agency?",
                a: "Look for a restoration SEO agency that understands the difference between insurance job flow and emergency retail calls, has experience with the specific platforms restoration companies use for job management and documentation, and reports success in terms of dispatched jobs rather than website traffic. A general digital marketing agency does not have the restoration industry knowledge to build the content strategy that captures both demand types effectively.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2D6A4F] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Find out what your restoration marketing is actually producing
          </h2>
          <p className="mt-4 text-lg text-[#D8F3DC]/80">
            The Full Picture Audit looks at your spend by channel, your insurance vs. retail job mix,
            your booking rate, and where revenue is leaking. You&rsquo;ll know exactly what to fix
            before we add a dollar of new spend.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#2D6A4F] transition hover:bg-[#D8F3DC]">
              Book a Strategy Call
            </Link>
            <a href="tel:5595213122" className="text-base font-medium text-[#D8F3DC] hover:text-white transition-colors">(559) 521-3122</a>
          </div>
        </div>
      </section>
    </>
  );
}
