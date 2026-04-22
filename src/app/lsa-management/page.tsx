import Link from "next/link";
import GHLWidget from "@/components/GHLWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LSA Management for HVAC & Home Service Contractors | Sequoia GEO",
  description:
    "Google Local Services Ads management by someone who ran an HVAC company for 13 years. We handle your LSA profile, dispute bad leads, and track every dollar back to booked jobs.",
  alternates: {
    canonical: "https://www.sequoiageo.com/lsa-management",
  },
};

export default function LsaManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are Google Local Services Ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google Local Services Ads are a pay-per-lead advertising format that appears at the very top of search results for local service queries. Unlike standard Google Ads where you pay per click, Local Services Ads charge per lead - phone calls and message requests from potential customers. Google Guaranteed and Google Screened badges appear on Local Services Ads accounts that pass background checks and license verification, which increases the click-through rate significantly over standard ads."
                }
              },
              {
                "@type": "Question",
                "name": "How are Local Services Ads different from Google Ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard Google Ads charge per click regardless of whether the person calling is a real prospect. Local Services Ads charge per lead - a phone call or message to your business. This means you only pay when someone contacts you directly. The tradeoff is that Local Services Ads have less targeting control than Google Ads, but the intent signal is higher. A well-managed Local Services Ads program focuses on aggressive lead dispute management to ensure you only pay for contacts that could realistically become booked jobs."
                }
              },
              {
                "@type": "Question",
                "name": "How much do Local Services Ads cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Local Services Ads cost varies by market and service category. Lead prices typically range from $25 to $150 per lead for HVAC, plumbing, electrical, and roofing trades in most markets. The relevant number is not cost per lead but cost per booked job - which depends on your lead quality, CSR conversion rate, and how aggressively you dispute invalid leads. Our LSA management clients typically recover 15 to 25 percent of their spend through dispute management alone."
                }
              },
              {
                "@type": "Question",
                "name": "What makes LSA leads lower quality than other channels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Local Services Ads generate leads from homeowners searching on Google, which is high intent. However, several factors can inflate your cost per booked job: wrong-service-area calls, consumers shopping multiple contractors, wrong service type requests, and hang-ups. Google's dispute process allows you to contest these charges within 30 days. Without active dispute management, you pay for every contact regardless of whether it was a legitimate prospect for your local services."
                }
              },
              {
                "@type": "Question",
                "name": "How does Google rank Local Services Ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google ranks Local Services Ads based on six primary factors: proximity to the searcher, review count and rating, responsiveness to leads, business hours, license and insurance verification, and overall account history. Of these, the ones you can actively improve are review velocity, response time to incoming leads, and keeping your profile complete and verified. A slow response to Local Services Ads leads - even a few hours - directly reduces how many leads Google sends you versus your competitors."
                }
              },
              {
                "@type": "Question",
                "name": "Should I run Local Services Ads and Google Ads at the same time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For most home service contractors, yes. Local Services Ads and Google Ads serve different positions in the search results and different buyer moments. Local Services Ads capture high-intent searches with the Google Guaranteed badge at the very top. Google Ads capture broader search volume with more targeting control. Running both maximizes your visibility across the full local services search ecosystem and gives you data on which channel produces the better cost per booked job for your specific market."
                }
              }
            ]
          })
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-white px-5 py-2 text-sm font-medium text-[#1A5C3A] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
              Google Local Services Ads
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              LSA Management That Actually{" "}
              <span className="text-[#1A5C3A]">Disputes Bad Leads</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Most contractors pay for every LSA lead that comes in — including wrong numbers,
              out-of-area calls, and leads for services they don&rsquo;t offer. We dispute
              aggressively, optimize your profile, and track cost per booked job, not cost per lead.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Get an LSA Audit
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

      {/* The problem */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What Most LSA Management Gets Wrong
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              Agencies set up your profile and collect a monthly fee. Here&rsquo;s what actually drives your cost per booked job.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: "Undisputed junk leads",
                body: "Wrong service type, wrong area, hang-ups — Google will credit them if you dispute within 30 days. Most contractors don't. That's money left on the table every month.",
              },
              {
                title: "Budget set-and-forget",
                body: "LSA bids need to move with your season. An HVAC company in July and January have completely different optimal weekly budgets. Static budgets waste money at peak and starve you when it matters.",
              },
              {
                title: "Outdated service areas",
                body: "Google's radius defaults are often wrong. If your LSA profile covers towns your trucks can't reach profitably, you're paying for leads you'll never close.",
              },
              {
                title: "No connection to booked revenue",
                body: "LSA reports cost per lead. That number is meaningless without knowing how many of those leads your CSR team actually converted into scheduled jobs.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-base font-bold text-[#3A9E6A]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C8EDD2]/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              What Our LSA Management Includes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything that actually moves your cost per booked job.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🧾",
                title: "Lead Dispute Management",
                body: "We review every lead, categorize disputes, and submit them to Google before the 30-day window closes. Most clients recover 15-25% of their spend through disputes alone.",
              },
              {
                icon: "📍",
                title: "Service Area Optimization",
                body: "We map your profitable service radius based on your actual job data and adjust your LSA coverage to match — keeping you out of the zones that drain margin.",
              },
              {
                icon: "💰",
                title: "Weekly Budget Management",
                body: "We adjust your weekly spend cap based on your season, your current booking rate, and capacity. You won't overspend in slow months or get throttled in peak season.",
              },
              {
                icon: "⭐",
                title: "Review Velocity Strategy",
                body: "LSA ranking is heavily driven by review count and recency. We build a review request workflow that keeps your Google Guaranteed star count climbing.",
              },
              {
                icon: "📊",
                title: "Cost Per Booked Job Tracking",
                body: "We connect your LSA performance to your CRM or ServiceTitan data so you see cost per booked job — not just cost per lead. That's the number that matters.",
              },
              {
                icon: "🔔",
                title: "Profile Health Monitoring",
                body: "LSA profiles get flagged, limited, or suspended without warning. We monitor your profile status and respond to any Google verification requests within 24 hours.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-100 bg-[#fafaf8] p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operator credibility */}
      <section className="bg-[#f0f7f3] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl mb-6">
              I Ran an HVAC Company for 13 Years. I Know What a Real Lead Is Worth.
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Before Sequoia GEO, I ran Balanced Comfort Heating &amp; Air for over a decade and grew it to 130+
                employees and four consecutive Inc. 5000 appearances. I managed Google LSAs as a
                business owner — not as an agency account manager. Building relationships with the right lead channels while tracking each one to booked revenue is what that experience taught me.
              </p>
              <p>
                That means I know that a no-heat call in January booked same day is worth five times
                a tune-up lead in March. I know your CSR can convert an LSA call at 65% if the
                script is right, and 35% if it isn&rsquo;t. And I know that a $60 lead that books a
                $4,000 system replacement is a better LSA than a $25 lead that no-shows.
              </p>
              <p>
                That context changes every decision we make in your account.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Talk to Aaron
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/lsa-guide"
                className="inline-flex items-center justify-center rounded-lg border-2 border-[#1A5C3A] px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#1A5C3A] hover:text-white"
              >
                Read the LSA Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              Who This Is For
            </h2>
          </div>
          <div className="mx-auto max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "HVAC contractors spending $3k+/mo on LSAs with no clear cost-per-job visibility",
              "Home service companies who've never systematically disputed leads",
              "Contractors who got their LSA profile limited or suspended",
              "Plumbing and electrical companies entering LSA for the first time",
              "Multi-location operators needing separate LSA profiles managed consistently",
              "Companies whose current agency isn't tracking leads to booked revenue",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-[#fafaf8] p-4">
                <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-[#3A9E6A] flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              How Our LSA Management Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A clear process for turning your Local Services Ads into a predictable lead channel.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                step: "01",
                title: "LSA Profile Audit",
                body: "We review your Google Local Services Ads account from the ground up — phone number verification, service categories, service area boundaries, budget pacing, and lead history. Most contractors have at least one profile issue that is suppressing lead volume or inflating cost per lead.",
              },
              {
                step: "02",
                title: "Lead Dispute Review",
                body: "We go back through your recent Local Services Ads leads and identify every lead that qualifies for a credit dispute: wrong service type, out-of-service-area callers, hang-ups, and duplicate calls. Google allows disputes within 30 days of a lead being charged. We submit them in batches so nothing falls through the cracks.",
              },
              {
                step: "03",
                title: "Budget and Bid Optimization",
                body: "Local Services Ads use a weekly budget model. We adjust your spend cap based on your current booking rate, seasonal demand patterns, and your capacity to handle additional jobs. More budget does not always mean more booked jobs — it means more leads you may not be able to convert.",
              },
              {
                step: "04",
                title: "Ongoing Monitoring and Reporting",
                body: "We monitor your Local Services Ads profile weekly, respond to any Google verification requests within 24 hours, and track cost per booked job — not cost per lead. Monthly reporting connects your LSA spend to actual dispatched jobs so you know exactly what your Google Ads investment is producing.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <div className="shrink-0 text-3xl font-black text-[#1A5C3A]/20">{item.step}</div>
                <div>
                  <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Search Context */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              How Local Services Ads Fit Into Your Digital Marketing Strategy
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Local Services Ads are not a replacement for organic search, Google Business Profile, or your website. They are the top-of-funnel layer that captures the highest-intent local search queries before homeowners scroll to organic results.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "LSAs vs. Organic Search",
                body: "Organic search and Local Services Ads serve different moments in the buyer journey. Organic search results capture homeowners researching and comparing companies. Local Services Ads capture homeowners who have already decided to call — right now. The Google Guaranteed badge builds trust for new customers who have never heard of your company, which is why LSA call conversion rates are typically higher than organic search calls for the same keywords. Both channels are necessary: LSAs fill the immediate pipeline while local SEO compounds over time.",
              },
              {
                title: "LSAs and Online Reputation",
                body: "Your online reputation directly influences your LSA ranking and conversion rate. Google weights review count and recency in its LSA ranking algorithm, and homeowners comparing providers in the LSA unit look at star ratings before deciding who to call. A company with 200 reviews and a 4.8 rating gets more high quality leads from the same LSA position than a competitor with 40 reviews. Reputation management and LSA management are inseparable — brand visibility in local search is built through both.",
              },
              {
                title: "LSAs on Mobile Devices",
                body: "Most emergency home service searches happen on mobile devices. When a homeowner searches for a plumber or HVAC repair on their phone, Local Services Ads appear at the very top of the screen before any organic results. Mobile users making emergency calls are not scrolling — they are clicking the first trusted result they see. A fast response time, a Google Guaranteed badge, and a mobile-friendly experience are the critical factors that determine whether you get the call.",
              },
              {
                title: "Tracking LSAs as Part of Your Full Marketing ROI",
                body: "Most digital marketing reporting treats LSA leads in a separate bucket from organic search, direct calls, and paid Google Ads. A properly managed program connects all channels: website visitors from organic search, LSA calls, and paid ad calls should all trace back to dispatched jobs and revenue. Only then can you measure marketing ROI across channels and allocate budget toward the mix that generates the most qualified leads at the lowest cost per booked job — the number that actually drives business growth.",
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

      {/* LSA Management Overview */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white mb-10">
            How LSA Management Works for Home Service Companies
          </h2>
          <div className="space-y-5 text-[#C8EDD2]/80 text-base leading-relaxed max-w-3xl">
            <p>
              Effective LSA management requires ongoing attention across multiple areas simultaneously. A local
              services program is not a set-it-and-forget advertising campaign. Local services management is an
              active process that requires weekly budget adjustments, systematic lead dispute submissions, and
              ongoing profile optimization to maintain strong Google Local Services Ads performance for your
              home service business.
            </p>
            <p>
              Home service companies running local services ads compete for a limited number of positions in
              the Google Local Services unit. The ads visible to customers searching Google depend on your
              review velocity, response speed, service area alignment, and account standing. An LSA management
              company that understands these ranking factors helps local service businesses consistently
              capture more of the high-intent customers searching for HVAC, plumbing, electrical, and roofing
              services in their specific market.
            </p>
            <p>
              Local services management without dispute tracking is the most common failure mode for home
              service companies managing their own ads accounts. Google gives businesses a 30-day window to
              dispute leads that do not qualify as legitimate customer contacts. Every undisputed junk lead
              costs your company real money. A systematic local services dispute process typically recovers
              15 to 25 percent of total ad spend, which directly reduces your cost per booked job and
              improves the return your business gets from Google ads.
            </p>
            <p>
              The most valuable thing a local services management partner provides is the connection between
              your Google Local Services Ads account and your actual revenue. Most home service businesses
              see their local services spend in one bucket and their booked jobs in another. A properly
              managed LSA program connects these two data sources so that you know exactly how much revenue
              your local services investment is generating and whether increasing your ads budget would
              produce more booked jobs or just more junk contacts from Google.
            </p>
          </div>
        </div>
      </section>

      {/* LSA by Trade */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-6">
            Local Services Ads Management by Trade
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-3xl">
            Local services advertising performs differently depending on the trade and the local market.
            HVAC, plumbing, electrical, and roofing companies all face different lead costs, dispute rates,
            and seasonal patterns. Effective local services management accounts for these differences when
            setting ad budgets, adjusting service areas, and evaluating lead quality for each home service
            business. A local services management partner with experience across multiple trades brings
            this context to every Google ads decision.
          </p>
          <div className="space-y-5 text-base text-gray-600 leading-relaxed">
            <p>
              HVAC companies running local services ads have the most pronounced seasonal swings of any home
              service trade. Local services management for HVAC businesses means cutting ad budget in shoulder
              seasons when customer demand falls and maximizing spend during peak cooling and heating months.
              Google&rsquo;s local services algorithm rewards consistent response time, so an HVAC company
              that answers every local services call quickly during peak season builds account history that
              maintains strong positioning during slower periods. LSA management that ignores seasonality
              costs HVAC businesses significant ad spend on low-converting customers.
            </p>
            <p>
              Plumbing contractors often see local services leads that are genuinely urgent. Local services
              ads for plumbing businesses attract high-intent customers who are ready to book immediately.
              This makes plumbing local services programs well-suited to companies with strong customer
              service teams who can convert inbound local services calls into booked jobs quickly. A plumbing
              business that responds to local services leads within a few minutes converts a much higher
              percentage of those calls than one that follows up hours later. LSA management for plumbing
              companies focuses on response speed, Google review velocity, and dispute management for
              out-of-area contacts.
            </p>
            <p>
              Electrical and roofing contractors face different local services challenges. Roofing local
              services management often requires seasonal ad budget adjustments after storm events, while
              electrical local services management needs to carefully define service areas to match where
              licensed electricians can legally operate. Both trades benefit from strong Google review
              programs. Local services customers comparing companies in the Google Local Services unit
              click on businesses with more reviews and better ratings. Review management and local
              services management are inseparable parts of a complete Google local services strategy.
            </p>
            <p>
              Effective local services management across all trades requires the same core disciplines:
              clean dispute management, fast customer response, a well-defined service area, and a
              systematic approach to generating Google reviews. A local services management company with
              expertise across multiple home service trades applies this foundation to your specific
              business and market. The Google Local Services Ads platform rewards active management.
              Businesses that treat local services ads as a passive channel consistently pay more per
              booked job than companies working with a focused LSA management partner.
            </p>
          </div>
        </div>
      </section>

      {/* LSA FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              LSA Management Questions
            </h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-5">
            {[
              {
                q: "What are Google Local Services Ads?",
                a: "Google Local Services Ads are a pay-per-lead advertising format that appears at the very top of search results for local service queries. Unlike standard Google Ads where you pay per click, Local Services Ads charge per lead — phone calls and message requests from potential customers. Google Guaranteed and Google Screened badges appear on Local Services Ads accounts that pass background checks and license verification, which increases the click-through rate significantly over standard ads.",
              },
              {
                q: "How are Local Services Ads different from Google Ads?",
                a: "Standard Google Ads charge per click regardless of whether the person calling is a real prospect. Local Services Ads charge per lead — a phone call or message to your business. This means you only pay when someone contacts you directly. The tradeoff is that Local Services Ads have less targeting control than Google Ads, but the intent signal is higher. A well-managed Local Services Ads program focuses on aggressive lead dispute management to ensure you only pay for contacts that could realistically become booked jobs.",
              },
              {
                q: "How much do Local Services Ads cost?",
                a: "Local Services Ads cost varies by market and service category. Lead prices typically range from $25 to $150 per lead for HVAC, plumbing, electrical, and roofing trades in most markets. The relevant number is not cost per lead but cost per booked job — which depends on your lead quality, CSR conversion rate, and how aggressively you dispute invalid leads. Our LSA management clients typically recover 15 to 25 percent of their spend through dispute management alone.",
              },
              {
                q: "What makes LSA leads lower quality than other channels?",
                a: "Local Services Ads generate leads from homeowners searching on Google, which is high intent. However, several factors can inflate your cost per booked job: wrong-service-area calls, consumers shopping multiple contractors, wrong service type requests, and hang-ups. Google&rsquo;s dispute process allows you to contest these charges within 30 days. Without active dispute management, you pay for every contact regardless of whether it was a legitimate prospect for your local services.",
              },
              {
                q: "How does Google rank Local Services Ads?",
                a: "Google ranks Local Services Ads based on six primary factors: proximity to the searcher, review count and rating, responsiveness to leads, business hours, license and insurance verification, and overall account history. Of these, the ones you can actively improve are review velocity, response time to incoming leads, and keeping your profile complete and verified. A slow response to Local Services Ads leads — even a few hours — directly reduces how many leads Google sends you versus your competitors.",
              },
              {
                q: "Should I run Local Services Ads and Google Ads at the same time?",
                a: "For most home service contractors, yes. Local Services Ads and Google Ads serve different positions in the search results and different buyer moments. Local Services Ads capture high-intent searches with the Google Guaranteed badge at the very top. Google Ads capture broader search volume with more targeting control. Running both maximizes your visibility across the full local services search ecosystem and gives you data on which channel produces the better cost per booked job for your specific market.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-100 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
              More Home Services Marketing
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Local Services Ads work best alongside a full digital marketing strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Plumbing SEO", href: "/plumbing-seo" },
              { label: "HVAC SEO", href: "/hvac-seo" },
              { label: "Roofing SEO", href: "/roofing-seo" },
              { label: "Fractional CMO", href: "/fractional-cmo" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-[#fafaf8] px-5 py-4 text-sm font-semibold text-[#1A5C3A] shadow-sm hover:border-[#3A9E6A]/40 hover:shadow-md transition"
              >
                {link.label}
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Get an LSA Audit — No Charge
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              We&rsquo;ll review your current profile, flag any disputes you&rsquo;ve missed, and give
              you a straight read on what your cost per booked job actually is.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#2d7d53]"
              >
                Request the Audit
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:5595213122"
                className="text-base font-medium text-[#3A9E6A] hover:text-white transition-colors"
              >
                (559) 521-3122
              </a>
            </div>
          </div>
        </div>
      </section>

      <GHLWidget />
    </>
  );
}
