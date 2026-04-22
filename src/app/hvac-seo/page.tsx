import Link from "next/link";
import GHLWidget from "@/components/GHLWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC SEO & Marketing | Sequoia GEO: Built by an HVAC Operator",
  description:
    "HVAC marketing managed by someone who ran an HVAC company for 13 years and grew it to 130+ employees. I see your booking rate, your average ticket, and why your phones aren't ringing, not just your impressions.",
  alternates: {
    canonical: "https://www.sequoiageo.com/hvac-seo",
  },
};

export default function HvacSeoPage() {
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
                "name": "How long does HVAC SEO take to work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Local SEO results for HVAC contractors typically start showing within 3 to 6 months for lower-competition markets and 6 to 12 months for highly competitive metro areas. Google Business Profile improvements and review velocity can produce measurable ranking changes in 60 to 90 days. Technical SEO and on-page SEO corrections that fix existing problems can accelerate timelines. Paid advertising produces results immediately but stops when you stop spending. A complete HVAC SEO strategy uses both channels: organic for compound growth, paid for immediate volume."
                }
              },
              {
                "@type": "Question",
                "name": "What makes HVAC SEO different from general SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "HVAC SEO is local by definition: every job requires physical proximity. It is seasonal: demand spikes in summer and winter and craters in spring and fall. It is emergency-driven: the highest-intent searches happen when equipment fails, not when homeowners are planning ahead. These constraints shape keyword research, content strategy, and campaign management differently than they would for a national brand or B2B company. SEO for HVAC companies that does not account for these dynamics produces generic results that look good in reports but do not move the dispatch board."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need both paid advertising and organic SEO for my HVAC company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For most HVAC contractors, yes. Local SEO efforts produce the highest ROI over time but take months to build. Google Ads captures emergency demand immediately. The right HVAC marketing strategy uses both: SEO to build the organic foundation that reduces paid dependency over time, and paid search to capture demand that cannot wait for organic rankings. As local search visibility grows, you can pull back ad spend on keywords where you rank organically and redirect budget to new markets or higher-ticket services like air conditioning replacements."
                }
              },
              {
                "@type": "Question",
                "name": "What HVAC keywords should I be targeting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A complete keyword research strategy for HVAC companies goes beyond the obvious head terms. Emergency service queries, equipment-specific terms, location-specific terms, and problem-based queries all drive different types of phone calls. Mapping each category of relevant keywords to dedicated service pages is how HVAC companies build organic traffic that compounds year over year."
                }
              },
              {
                "@type": "Question",
                "name": "How do I measure whether my HVAC SEO is working?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The right metrics are phone calls and booked jobs from organic search, not rankings alone. Build your tracking infrastructure first: Google Analytics for web page behavior, Google Search Console for search query data, and call tracking to connect organic website traffic to actual phone calls. If your HVAC SEO program cannot show a clear line from search rankings to dispatched jobs, the program is not being managed correctly."
                }
              },
              {
                "@type": "Question",
                "name": "What is the most important ranking factor for HVAC local SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google Business Profile optimization is the single most impactful lever for HVAC local SEO in most markets. A fully optimized GBP with consistent reviews, accurate service categories, and regular posts drives Map Pack visibility that captures the majority of clicks on high-intent HVAC queries. Combined with strong on-page SEO on your service pages and consistent link building, GBP optimization is where most HVAC contractors should focus their SEO investment first."
                }
              },
              {
                "@type": "Question",
                "name": "What do most HVAC companies get wrong about SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The most common mistake is treating SEO as a one-time project rather than an ongoing program. Search engine rankings require continuous content updates, review generation, citation maintenance, and technical health monitoring. The second most common mistake is measuring SEO by rankings rather than phone calls. Rankings are a leading indicator, but booked jobs are the outcome that matters."
                }
              },
              {
                "@type": "Question",
                "name": "How is SEO for HVAC companies different from internet marketing for other local businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO for HVAC companies is shaped by two dynamics that rarely apply to other local businesses: seasonality and emergency intent. Most HVAC searches happen at the moment equipment fails, which means the conversion window is extremely short and search engines need to know your business is available, relevant, and trusted before that moment arrives. For a local HVAC contractor, the homeowner who searches for AC repair on a 105-degree afternoon will call the first credible result they see. That is why HVAC SEO focuses so heavily on real-time trust signals: review recency, GBP completeness, and service pages that load fast and answer the right questions immediately."
                }
              },
              {
                "@type": "Question",
                "name": "What should an HVAC company expect from SEO services in the first year?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In the first 90 days, expect improvements in Google Business Profile visibility, citation accuracy, and on-page SEO fundamentals. Keyword rankings for lower-competition terms typically begin moving in months three through five. By the end of the first year, a well-run HVAC SEO program should show measurable organic traffic growth, improved phone call volume from organic search, and a clear picture of which HVAC service pages are driving the most phone calls. Home service companies that invest consistently in HVAC SEO for 12 months typically see cost-per-lead from organic well below their Google Ads spend."
                }
              },
              {
                "@type": "Question",
                "name": "Do search engines other than Google matter for HVAC companies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bing, Apple Maps, and other search engines account for a real share of HVAC searches, particularly from older demographics and iPhone users. A complete HVAC SEO strategy does not ignore these platforms. Bing Places for Business and Apple Business Connect are both free and take less than an hour to configure. The same citation accuracy and on-page SEO work that helps you rank on Google also improves your visibility on other search engines."
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
              HVAC Marketing
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              HVAC SEO Built by Someone Who{" "}
              <span className="text-[#1A5C3A]">Ran an HVAC Company</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              I spent 13 years running Balanced Comfort Heating &amp; Air. I know your seasonality,
              your CSR challenges, your average ticket, and what an emergency call is worth.
              That context shapes every digital marketing decision I make for your HVAC business &mdash;
              from search engine optimization to online visibility in your local market.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Most vendors treat SEO for HVAC companies as a checklist: update meta tags, build
              citations, move on. What search engines actually reward is relevance, authority, and
              content that matches what your customers are searching when their equipment fails.
              My HVAC SEO approach ties every tactic to a business outcome &mdash; not just organic
              traffic numbers.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Get a Full Picture Audit
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

      {/* The operator difference */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What an Agency Misses. What I See.
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              Most HVAC marketing agencies report on impressions and clicks. Here&rsquo;s what matters to an HVAC business owner.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              { title: "Booking rate by season", body: "Summer emergency calls should book at 70%+. If you're at 45%, the problem isn't your ads, it's your CSR script. I'll tell you that." },
              { title: "Average ticket by lead source", body: "Not all leads are worth the same. I track which channels produce your most profitable jobs, not just your highest volume." },
              { title: "Saturday phone handling", body: "The most common HVAC revenue leak: calls on Saturday going to voicemail or a CSR who can't quote. I catch this in week one." },
              { title: "Seasonal campaign timing", body: "I've run HVAC ads through 13 California summers. I know when to scale, when to pull back, and which keywords convert in a heat emergency." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-base font-bold text-[#3A9E6A]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C8EDD2]/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I manage */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              The Full Picture for HVAC Companies
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              These aren&rsquo;t standalone HVAC services. They&rsquo;re the integrated digital marketing
              and SEO services I manage as part of your complete HVAC business growth operation &mdash;
              every channel tracked back to your dispatch board. Most companies in the HVAC industry
              run fragmented marketing efforts across three or four vendors with no one accountable for
              the combined result. This is the full-picture alternative.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Google Ads managed to cost-per-booked-job",
              "Local Service Ads setup & dispute management",
              "Google Business Profile optimization",
              "Map Pack ranking strategy",
              "Seasonal keyword campaigns (AC repair, heating & cooling)",
              "Emergency service ad scheduling",
              "Review generation integrated with dispatch",
              "HVAC website conversion optimization",
              "AI search visibility (ChatGPT, Perplexity)",
              "Marketing attribution & call tracking",
              "CSR booking rate analysis",
              "Vendor accountability (if you have existing agencies)",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operator credentials */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
                  13 Years in the HVAC Business
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Balanced Comfort Heating &amp; Air grew from a one-truck startup to 130+ employees and
                  $10M+ in annual revenue in the HVAC industry. We made the Inc 5000 four years running: 2020, 2021, 2022, 2023.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I didn&rsquo;t just market the company. I dispatched technicians. I listened to call
                  recordings. I sat in CSR trainings. I watched the seasons shift and knew exactly when
                  to run aggressive AC campaigns and when to start pre-season furnace tune-up pushes.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I&rsquo;m a California licensed C-20 HVAC contractor. This isn&rsquo;t just marketing context:
                  it&rsquo;s the reason I see things in your HVAC business that a typical digital marketing
                  agency never will.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "13 years", label: "Running an HVAC company" },
                  { stat: "130+", label: "Employees at peak" },
                  { stat: "4x", label: "Inc 5000 (2020-2023)" },
                  { stat: "C-20", label: "CA HVAC License" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-[#C8EDD2] p-5 text-center">
                    <div className="text-2xl font-extrabold text-[#0D2318]">{item.stat}</div>
                    <div className="mt-1 text-xs text-[#1A5C3A]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where HVAC Companies Lose Rankings */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Most HVAC Companies Get Wrong About Local Search
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              After working with HVAC companies across competitive markets, these are the patterns that consistently hold businesses back from ranking where they should.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Too Few Location Pages",
                body: "An HVAC business servicing eight cities should have eight dedicated location pages with unique content and local keywords. Most HVAC companies use one generic service area page that does not rank. Specific web page content built around local search intent does.",
              },
              {
                title: "Poor Online Reviews Velocity",
                body: "Google&rsquo;s algorithms weigh review recency heavily. An HVAC business with 200 online reviews where 180 are two years old will be outranked by a competitor with 80 online reviews and a steady drip of new ones. Reputation management is an active process, not a setup task. It includes soliciting fresh reviews after every completed job, responding to negative feedback, and monitoring your Google Maps rankings for review-driven drops.",
              },
              {
                title: "No Real Keyword Research",
                body: "Most HVAC companies optimize for two or three head terms and ignore the long-tail queries that drive the most phone calls: &ldquo;why is my AC blowing warm air,&rdquo; &ldquo;how much does furnace replacement cost,&rdquo; &ldquo;emergency HVAC repair near me.&rdquo; A complete keyword research process maps every relevant search term to the right web page.",
              },
              {
                title: "Tracking the Wrong Metrics",
                body: "Website traffic is not a success metric. Phone calls are. Booked jobs are. A real HVAC SEO strategy builds tracking infrastructure first: Google Analytics, Google Search Console, call tracking, so every marketing dollar ties to actual business outcomes and you can measure SEO success against a clear baseline.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8EDD2]">
                    <svg className="h-4 w-4 text-[#0D2318]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
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

      {/* HVAC SEO Tips */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              HVAC SEO Tips That Actually Move Rankings
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              These come from managing local search and online marketing programs for HVAC businesses across California, not from generic SEO blogs.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Meta Descriptions Drive Click-Through from Search Results",
                body: "Meta descriptions do not directly influence rankings, but they determine whether potential customers click your result over a competitor. For HVAC companies, meta descriptions should lead with the service, include the city, and close with a call to action. Most HVAC companies leave this as auto-generated filler that loses clicks every single day.",
              },
              {
                number: "02",
                title: "Mobile Optimization Is Non-Negotiable for HVAC Search",
                body: "Most HVAC searches happen on mobile devices: homeowners looking for help when equipment fails. An HVAC website that loads slowly on mobile devices loses potential customers before they ever read your headline. Google algorithms use mobile-first indexing, meaning your mobile experience directly determines your search engine rankings.",
              },
              {
                number: "03",
                title: "Google Search Console Tells You Exactly What Is Working",
                body: "Most HVAC companies have never opened Google Search Console. This free tool shows which search queries are driving impressions and phone calls to your website. It is the most direct way to measure SEO success and identify keyword research opportunities you are missing. Checking it weekly lets you catch ranking drops before they become revenue problems.",
              },
              {
                number: "04",
                title: "Link Building Is Where Most HVAC Companies Have the Biggest Gap",
                body: "Off-site SEO is what separates HVAC companies that rank from those that don&rsquo;t. High-quality backlinks from supplier directories, local business associations, trade publications, and home service marketing services platforms build the domain authority that local search results reward. Most home service contractors have never pursued a single backlink opportunity despite dozens being available to them. Using keyword research tools to find link gaps versus competitors is one of the fastest ways to identify where to focus off-site efforts first.",
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-6 rounded-2xl border border-gray-200 bg-white p-7">
                <div className="shrink-0 text-3xl font-extrabold text-[#3A9E6A]/40">{item.number}</div>
                <div>
                  <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How HVAC SEO Services Work */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              How HVAC SEO Services Work Month by Month
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A properly run HVAC SEO campaign is not a collection of deliverables. It is a managed
              program with a defined SEO strategy, monthly reporting on keyword rankings and organic
              traffic, and ongoing adjustments based on real SEO performance data. Here is what that
              looks like in practice for HVAC businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Month One: Audit and Infrastructure",
                body: "Every HVAC SEO campaign starts with a complete audit of your current digital marketing footprint: your HVAC website structure, Google Business Profile completeness, existing keyword rankings, citation accuracy, and on-page SEO gaps. The audit surfaces where you are losing website traffic to competitors and why. From there, we build the tracking infrastructure: call tracking, Google Analytics, and Search Console, so every future optimization is measurable against real business outcomes.",
              },
              {
                title: "Months Two and Three: On-Page and Content",
                body: "Once the audit is complete, on-page SEO work begins on your most important pages. For HVAC businesses, that means dedicated landing pages for AC repair, heating repair, system replacement, maintenance agreements, and location-specific pages for every city you serve. Each page targets specific keyword rankings and answers the questions your potential customers are actually searching. This phase typically produces the first organic search results movement.",
              },
              {
                title: "Ongoing: Authority and Local Signals",
                body: "Maintaining and growing search results positions for HVAC companies requires continuous work: acquiring backlinks from relevant local sources, review generation tied to completed jobs, Google Business Profile updates, and technical health monitoring. A successful HVAC SEO campaign is not set-and-forget. Search engines update their algorithms regularly, and the content that ranked 18 months ago may need updating to hold its position against more active competitors.",
              },
              {
                title: "Monthly: Reporting and Course Corrections",
                body: "Every month you receive a clear report showing organic traffic by landing page, keyword rankings movement, call volume from organic search, and a summary of completed and planned work. If a service page is underperforming, we adjust. If a competitor makes a move in your market, we respond. HVAC SEO services managed this way give HVAC business owners what most digital marketing vendors never provide: a clear line from SEO investment to revenue.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVAC SEO FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              HVAC SEO FAQ
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                q: "How long does HVAC SEO take to work?",
                a: "Local SEO results for HVAC contractors typically start showing within 3 to 6 months for lower-competition markets and 6 to 12 months for highly competitive metro areas. Google Business Profile improvements and review velocity can produce measurable ranking changes in 60 to 90 days. Technical SEO and on-page SEO corrections that fix existing problems can accelerate timelines. Paid advertising produces results immediately but stops when you stop spending. A complete HVAC SEO strategy uses both channels: organic for compound growth, paid for immediate volume.",
              },
              {
                q: "What makes HVAC SEO different from general SEO?",
                a: "HVAC SEO is local by definition: every job requires physical proximity. It is seasonal: demand spikes in summer and winter and craters in spring and fall. It is emergency-driven: the highest-intent searches happen when equipment fails, not when homeowners are planning ahead. These constraints shape keyword research, content strategy, and campaign management differently than they would for a national brand or B2B company. SEO for HVAC companies that does not account for these dynamics produces generic results that look good in reports but do not move the dispatch board. Every HVAC business has different peak seasons, different service mixes, and different competitive pressures — a successful HVAC SEO campaign is built around those specifics.",
              },
              {
                q: "Do I need both paid advertising and organic SEO for my HVAC company?",
                a: "For most HVAC contractors, yes. Local SEO efforts produce the highest ROI over time but take months to build. Google Ads captures emergency demand immediately. The right HVAC marketing strategy uses both: SEO to build the organic foundation that reduces paid dependency over time, and paid search to capture demand that cannot wait for organic rankings. As local search visibility grows, you can pull back ad spend on keywords where you rank organically and redirect budget to new markets or higher-ticket services like air conditioning replacements.",
              },
              {
                q: "Should HVAC companies use social media for lead generation?",
                a: "Social media marketing is rarely a primary lead generation channel for HVAC companies, but it plays a supporting role many contractors underestimate. Social media marketing posts create website link signals that influence domain authority, and consistent activity builds the online reputation profile that generates more Google reviews. Treat social media marketing as a brand signal and reputation channel rather than a direct source of phone calls. Most HVAC clients found through social channels convert at lower rates than organic search, but the indirect SEO benefits compound over time.",
              },
              {
                q: "What HVAC keywords should I be targeting?",
                a: "A complete keyword research strategy for HVAC companies goes well beyond the obvious head terms. Emergency service queries (&ldquo;AC not cooling,&rdquo; &ldquo;furnace blowing cold air&rdquo;), equipment-specific terms (&ldquo;air conditioning replacement cost,&rdquo; &ldquo;heat pump installation&rdquo;), location-specific terms (&ldquo;HVAC repair [city name]&rdquo;), and problem-based queries all drive different types of phone calls. Mapping each category of relevant keywords to dedicated service pages is how HVAC companies build organic traffic that compounds year over year.",
              },
              {
                q: "How do I measure whether my HVAC SEO is working?",
                a: "The right metrics are phone calls and booked jobs from organic search, not rankings alone. Build your tracking infrastructure first: Google Analytics for web page behavior, Google Search Console for search query data, and call tracking to connect organic website traffic to actual phone calls. Once that infrastructure is in place, you can measure SEO performance against real business outcomes rather than vanity metrics. HVAC services range widely in ticket value — AC repair visits, maintenance agreements, and full system replacements each have different economics, and your attribution should reflect that. If your HVAC SEO program cannot show a clear line from search rankings to dispatched jobs, the program is not being managed correctly.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.a }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What HVAC SEO Involves */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What HVAC SEO Actually Involves
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Search engine optimization for HVAC companies is not a single tactic. It is a coordinated
              system of local SEO, on-page SEO, technical SEO, and off-page authority building that
              works together to generate organic search traffic and phone calls.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Local SEO and Google Business Profile",
                body: "Local SEO is the highest-ROI channel for most HVAC contractors. Google Business Profile optimization drives Map Pack visibility, which captures the majority of clicks on emergency HVAC queries. Accurate NAP citations, consistent review velocity, and service area configuration are the foundation of local search rankings that produce phone calls from homeowners ready to book. For HVAC companies competing in dense markets, online visibility in the Map Pack determines whether your phone rings or a competitor's does — the difference between the first and fourth result in local search is often the majority of available clicks.",
              },
              {
                title: "On-Page SEO and Service Pages",
                body: "On-page SEO for HVAC websites means building dedicated landing pages for every major service: air conditioning repair, furnace replacement, heat pump installation, duct cleaning, and maintenance agreements. Each page targets specific keywords and answers the questions homeowners search before calling. Thin or generic service pages are the most common reason HVAC contractors fail to rank for high-value keywords.",
              },
              {
                title: "Technical SEO and Website Performance",
                body: "Technical SEO covers the infrastructure that search engines use to crawl, index, and rank your web pages. For HVAC companies, this includes website speed optimization, mobile page speed, Core Web Vitals, schema markup for local businesses, and proper site architecture. Website speed matters specifically because most emergency HVAC searches happen on mobile — a slow-loading HVAC website loses potential customers before they read a single line. Search engines use page experience signals as ranking factors, and a fast, well-structured HVAC website tells search engines your business deserves to outrank competitors with slower, less organized sites.",
              },
              {
                title: "Off-Page SEO and Online Reputation Management",
                body: "Off-page SEO for HVAC companies means earning high-quality backlinks from local directories, industry associations, home service platforms, and local media. Consistent online reviews and reputation management build the domain authority that allows HVAC businesses to outrank competitors with stronger on-page content but weaker off-page signals. Google Maps rankings and local pack positions are directly influenced by review velocity, citation consistency, and the quality of your online marketing presence across third-party platforms.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8EDD2]">
                    <svg className="h-4 w-4 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
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

      {/* HVAC SEO Strategy Channels */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              HVAC SEO Strategy: What Your Website Needs to Rank
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ranking in local search results requires a coordinated approach across
              keyword research, content, technical performance, and reputation signals. These are the four areas where HVAC marketing services have the most measurable impact.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "Keyword Research Tied to Buyer Intent",
                body: "Effective keyword research for HVAC companies goes beyond head terms like &ldquo;HVAC repair near me.&rdquo; It maps emergency queries, equipment-specific searches, location-based terms, and problem-based phrases to dedicated service pages. Each category produces different types of phone calls with different average tickets. Keyword research is the foundation of an HVAC SEO strategy that generates organic traffic from homeowners ready to book.",
              },
              {
                number: "02",
                title: "Organic Search vs. Paid Advertising",
                body: "Paid advertising produces HVAC leads immediately. Organic search compounds over time. The right HVAC marketing strategy uses both: Google Local Service Ads for emergency demand right now, and local SEO to build the organic traffic foundation that reduces cost per lead over time. As organic rankings strengthen, paid ad spend can be redirected toward new service areas or higher-ticket replacements rather than defending territory where you already rank organically.",
              },
              {
                number: "03",
                title: "Online Reviews and Local Authority",
                body: "Online reviews are both a ranking signal and a conversion signal. HVAC businesses with consistent review velocity rank higher in the Map Pack and convert more clicks to phone calls. A review generation system built into your dispatch workflow, where techs trigger review requests after every closed job, is the most reliable way to build the online reputation that local search rewards. Review quantity, recency, and response rate all factor into local search rankings and directly influence reputation management outcomes.",
              },
              {
                number: "04",
                title: "HVAC Marketing That Connects to Revenue",
                body: "HVAC marketing strategies are only as valuable as the revenue they produce. That means tracking organic traffic by landing page, connecting call tracking to search keywords, and measuring booked jobs by channel. Most HVAC business owners cannot tell you which marketing channel produced their last ten jobs. Building that attribution infrastructure is what separates a managed SEO program from a vendor relationship that produces reports but no accountability.",
              },
            ].map((item) => (
              <div key={item.number} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <div className="mb-4 text-4xl font-black text-[#C8EDD2]">{item.number}</div>
                <h3 className="text-base font-bold text-[#1a1a1a]" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="mt-2 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVAC SEO Extended FAQ */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              More HVAC SEO Questions
            </h2>
          </div>
          <div className="space-y-5">
            {[
              {
                q: "What is the most important ranking factor for HVAC local SEO?",
                a: "Google Business Profile optimization is the single most impactful lever for HVAC local SEO in most markets. A fully optimized GBP with consistent online reviews, accurate service categories, and regular posts drives Map Pack visibility that captures the majority of clicks on high-intent HVAC queries. Combined with strong on-page SEO on your web pages and consistent backlink acquisition, GBP optimization is where most HVAC businesses with a local SEO focus should invest first.",
              },
              {
                q: "How does link building work for HVAC companies?",
                a: "Link building for HVAC companies means acquiring high-quality backlinks from local business directories, chamber of commerce listings, home service review platforms, supplier websites, and local media. Each reference builds domain authority and improves Google Maps rankings and local search positions over time. What matters is the quality and relevance of online marketing signals from sources that Google associates with your service area. HVAC businesses with a clear local SEO focus consistently outperform competitors who invest only in on-page changes without building off-site authority.",
              },
              {
                q: "What do most HVAC companies get wrong about SEO?",
                a: "The most common mistake is treating SEO as a one-time project rather than an ongoing program. Search engine rankings require continuous content updates, review generation, citation maintenance, and technical health monitoring. The second most common mistake is measuring SEO by rankings rather than phone calls. Rankings are a leading indicator, but booked jobs are the outcome that matters. A proper HVAC SEO program tracks organic traffic, call volume by landing page, and revenue from organic search.",
              },
              {
                q: "How is SEO for HVAC companies different from internet marketing for other local businesses?",
                a: "SEO for HVAC companies is shaped by two dynamics that rarely apply to other local businesses: seasonality and emergency intent. Most HVAC searches happen at the moment equipment fails, which means the conversion window is extremely short and search engines need to know your business is available, relevant, and trusted before that moment arrives. Internet marketing for retail or restaurants can afford longer nurture cycles. For a local HVAC contractor, the homeowner who searches for AC repair on a 105-degree afternoon will call the first credible result they see. That is why HVAC SEO focuses so heavily on real-time trust signals: review recency, GBP completeness, and service pages that load fast and answer the right questions immediately.",
              },
              {
                q: "What should an HVAC company expect from SEO services in the first year?",
                a: "In the first 90 days, expect improvements in Google Business Profile visibility, citation accuracy, and on-page SEO fundamentals. Keyword rankings for lower-competition terms typically begin moving in months three through five. By the end of the first year, a well-run HVAC SEO program should show measurable organic traffic growth, improved phone call volume from organic search, and a clear picture of which HVAC services pages are driving the most satisfied customers to call. Home service companies that invest consistently in HVAC SEO for 12 months typically see cost-per-lead from organic well below their Google Ads spend. A successful HVAC SEO campaign by year one means your organic presence is doing meaningful revenue work, not just accumulating impressions.",
              },
              {
                q: "Do search engines other than Google matter for HVAC companies?",
                a: "Bing, Apple Maps, and other search engines account for a real share of HVAC searches, particularly from older demographics and iPhone users. A complete HVAC SEO strategy does not ignore these platforms. Bing Places for Business and Apple Business Connect are both free and take less than an hour to configure. The same citation accuracy and on-page SEO work that helps you rank on Google also improves your visibility on other search engines. For HVAC companies focused on building their business online, multi-platform visibility is a straightforward extension of the core SEO work already in place.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 bg-white p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Switching agencies callout */}
      <section className="bg-[#fafaf8] border-y border-gray-200 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#1A5C3A] mb-1">Already with an agency?</p>
            <p className="text-base text-gray-700">
              If your current HVAC marketing isn&rsquo;t producing, we can audit what you own and what a clean transition looks like before you commit to anything.
            </p>
          </div>
          <Link
            href="/leaving-my-marketing-agency"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-[#1A5C3A] px-6 py-3 text-sm font-semibold text-[#1A5C3A] hover:bg-[#1A5C3A] hover:text-white transition-colors"
          >
            Thinking about switching?
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to see what your HVAC marketing is actually producing?
          </h2>
          <p className="mt-4 text-lg text-[#C8EDD2]/80">
            Every engagement starts with a Full Picture Audit. I look at your spend, your booking rate,
            your phone handling, and your revenue, before touching a single campaign.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]"
            >
              Book a Strategy Call
            </Link>
            <a href="tel:5595213122" className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors">
              (559) 521-3122
            </a>
          </div>
        </div>
      </section>
      <GHLWidget />
    </>
  );
}
