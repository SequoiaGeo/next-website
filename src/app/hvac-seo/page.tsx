import Link from "next/link";
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#52B788]/30 bg-white px-5 py-2 text-sm font-medium text-[#2D6A4F] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#52B788]" />
              HVAC Marketing
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              HVAC SEO Built by Someone Who{" "}
              <span className="text-[#2D6A4F]">Ran an HVAC Company</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              I spent 13 years running Balanced Comfort Heating &amp; Air. I know your seasonality,
              your CSR challenges, your average ticket, and what an emergency call is worth.
              That changes how I manage your marketing.
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

      {/* The operator difference */}
      <section className="bg-[#1B4332] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What an Agency Misses. What I See.
            </h2>
            <p className="mt-4 text-lg text-[#D8F3DC]/80">
              Your HVAC marketing agency reports on impressions and clicks. Here&rsquo;s what I look at instead.
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
                <h3 className="text-base font-bold text-[#52B788]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#D8F3DC]/70">{item.body}</p>
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
              These aren&rsquo;t standalone services. They&rsquo;re the channels I manage as part of your
              complete growth operation.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Google Ads managed to cost-per-booked-job",
              "Local Service Ads setup & dispute management",
              "Google Business Profile optimization",
              "Map Pack ranking strategy",
              "Seasonal keyword campaigns (heating & cooling)",
              "Emergency service ad scheduling",
              "Review generation integrated with dispatch",
              "Website conversion optimization",
              "AI search visibility (ChatGPT, Perplexity)",
              "Marketing attribution & call tracking",
              "CSR booking rate analysis",
              "Vendor accountability (if you have existing agencies)",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#52B788]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
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
          <div className="rounded-2xl border border-[#52B788]/20 bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
                  13 Years in the HVAC Business
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Balanced Comfort Heating &amp; Air grew from a one-truck startup to 130+ employees and
                  $10M+ in annual revenue. We made the Inc 5000 four years running: 2020, 2021, 2022, 2023.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I didn&rsquo;t just market the company. I dispatched technicians. I listened to call
                  recordings. I sat in CSR trainings. I watched the seasons shift and knew exactly when
                  to run aggressive AC campaigns and when to start pre-season furnace tune-up pushes.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I&rsquo;m a California licensed C-20 HVAC contractor. This isn&rsquo;t just marketing context:
                  it&rsquo;s the reason I see things your agency doesn&rsquo;t.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "13 years", label: "Running an HVAC company" },
                  { stat: "130+", label: "Employees at peak" },
                  { stat: "4x", label: "Inc 5000 (2020-2023)" },
                  { stat: "C-20", label: "CA HVAC License" },
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

      {/* Where HVAC Companies Lose Rankings */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Most HVAC Companies Get Wrong About Local Search
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              After working with HVAC contractors across competitive markets, these are the patterns that consistently hold companies back from ranking where they should.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Too Few Location Pages",
                body: "An HVAC business servicing eight cities should have eight dedicated location pages with unique content and local keywords. Most HVAC companies use one generic service area page that does not rank. Specific web page content built around local search intent does.",
              },
              {
                title: "Poor Google Reviews Velocity",
                body: "Google&rsquo;s algorithms weigh review recency heavily. An HVAC business with 200 reviews where 180 are two years old will be outranked by a competitor with 80 reviews and a steady drip of new ones. Online reputation management is an active process, not a setup task.",
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
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D8F3DC]">
                    <svg className="h-4 w-4 text-[#1B4332]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
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
              These come from managing local search programs for HVAC contractors across California, not from generic SEO blogs.
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
                body: "Off-site SEO, specifically link building, is what separates HVAC companies that rank from those that don&rsquo;t. High quality backlinks from supplier directories, local business associations, trade publications, and review platforms build the domain authority that local search results reward. Most HVAC companies have never pursued a single link building opportunity despite dozens being available to them.",
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-6 rounded-2xl border border-gray-200 bg-white p-7">
                <div className="shrink-0 text-3xl font-extrabold text-[#52B788]/40">{item.number}</div>
                <div>
                  <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
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
                a: "HVAC SEO is local by definition: every job requires physical proximity. It is seasonal: demand spikes in summer and winter and craters in spring and fall. It is emergency-driven: the highest-intent searches happen when equipment fails, not when homeowners are planning ahead. These constraints shape keyword research, content strategy, and campaign management differently than they would for a national brand or B2B company. HVAC SEO services that do not account for these dynamics produce generic results that look good in reports but do not move the dispatch board.",
              },
              {
                q: "Do I need both paid advertising and organic SEO for my HVAC company?",
                a: "For most HVAC contractors, yes. Local SEO efforts produce the highest ROI over time but take months to build. Google Ads captures emergency demand immediately. The right HVAC marketing strategy uses both: SEO to build the organic foundation that reduces paid dependency over time, and paid search to capture demand that cannot wait for organic rankings. As local search visibility grows, you can pull back ad spend on keywords where you rank organically and redirect budget to new markets or higher-ticket services like air conditioning replacements.",
              },
              {
                q: "Should HVAC companies use social media for lead generation?",
                a: "Social media is rarely a primary lead generation channel for HVAC companies, but it plays a supporting role many contractors underestimate. Social media posts create website link signals that influence domain authority, and consistent activity builds the online reputation profile that generates more Google reviews. Treat social media as a brand signal and online reputation channel rather than a direct source of phone calls. Most HVAC clients found through social media convert at lower rates than organic search, but the indirect SEO benefits compound over time.",
              },
              {
                q: "What HVAC keywords should I be targeting?",
                a: "A complete keyword research strategy for HVAC companies goes well beyond the obvious head terms. Emergency service queries (&ldquo;AC not cooling,&rdquo; &ldquo;furnace blowing cold air&rdquo;), equipment-specific terms (&ldquo;air conditioning replacement cost,&rdquo; &ldquo;heat pump installation&rdquo;), location-specific terms (&ldquo;HVAC repair [city name]&rdquo;), and problem-based queries all drive different types of phone calls. Mapping each category of relevant keywords to dedicated service pages is how HVAC companies build organic traffic that compounds year over year.",
              },
              {
                q: "How do I measure whether my HVAC SEO is working?",
                a: "The right metrics are phone calls and booked jobs from organic search, not rankings alone. Build your tracking infrastructure first: Google Analytics for web page behavior, Google Search Console for search query data, and call tracking to connect organic website traffic to actual phone calls. Once that infrastructure is in place, you can measure SEO success against real business outcomes rather than vanity metrics. If your HVAC SEO program cannot show a clear line from search rankings to dispatched jobs, the program is not being managed correctly.",
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
                body: "Local SEO is the highest-ROI channel for most HVAC contractors. Google Business Profile optimization drives Map Pack visibility, which captures the majority of clicks on emergency HVAC queries. Accurate NAP citations, consistent review velocity, and service area configuration are the foundation of local search rankings that produce phone calls from homeowners ready to book.",
              },
              {
                title: "On-Page SEO and Service Pages",
                body: "On-page SEO for HVAC websites means building dedicated service pages for every major service: air conditioning repair, furnace replacement, heat pump installation, duct cleaning, and maintenance agreements. Each service page targets specific keywords and answers the questions homeowners search before calling. Thin or generic service pages are the most common reason HVAC contractors fail to rank for high-value keywords.",
              },
              {
                title: "Technical SEO and Website Performance",
                body: "Technical SEO covers the infrastructure that search engines use to crawl, index, and rank your web pages. For HVAC companies, this includes mobile page speed, Core Web Vitals, schema markup for local businesses, and proper site architecture. A fast, mobile-optimized website converts organic traffic at higher rates and signals to Google that your site deserves to rank for competitive HVAC keywords.",
              },
              {
                title: "Off-Page SEO, Link Building, and Online Reputation",
                body: "Off-page SEO for HVAC companies means earning high-quality backlinks from local directories, industry associations, home service platforms, and local media. Link building combined with consistent online reviews builds the domain authority that allows HVAC contractors to rank above competitors who have stronger on-page content but weaker off-page signals. Online reputation and review management are also off-page factors that influence local search rankings.",
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
              Ranking in local search results for HVAC companies requires a coordinated approach across
              keyword research, content, technical performance, and reputation signals.
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
                body: "Online reviews are both a ranking signal and a conversion signal. HVAC companies with consistent review velocity rank higher in the Map Pack and convert more clicks to phone calls. A review generation system built into your dispatch workflow, where techs trigger review requests after every closed job, is the most reliable way to build the online reputation that local search rewards. Review quantity, recency, and response rate all factor into local search rankings.",
              },
              {
                number: "04",
                title: "HVAC Marketing That Connects to Revenue",
                body: "HVAC marketing strategies are only as valuable as the revenue they produce. That means tracking organic traffic by landing page, connecting call tracking to search keywords, and measuring booked jobs by channel. Most HVAC business owners cannot tell you which marketing channel produced their last ten jobs. Building that attribution infrastructure is what separates a managed SEO program from a vendor relationship that produces reports but no accountability.",
              },
            ].map((item) => (
              <div key={item.number} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <div className="mb-4 text-4xl font-black text-[#D8F3DC]">{item.number}</div>
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
                a: "Google Business Profile optimization is the single most impactful lever for HVAC local SEO in most markets. A fully optimized GBP with consistent reviews, accurate service categories, and regular posts drives Map Pack visibility that captures the majority of clicks on high-intent HVAC queries. Combined with strong on-page SEO on your service pages and consistent link building, GBP optimization is where most HVAC contractors should focus their SEO investment first.",
              },
              {
                q: "How does link building work for HVAC companies?",
                a: "Link building for HVAC companies focuses on acquiring high-quality backlinks from local business directories, chamber of commerce listings, home service review platforms, supplier websites, and local media coverage. Each backlink signals to Google that your website is a credible local business. HVAC companies rarely need links from national publications. What matters for local search rankings is the quality and relevance of links from sources that Google associates with your service area.",
              },
              {
                q: "What do most HVAC companies get wrong about SEO?",
                a: "The most common mistake is treating SEO as a one-time project rather than an ongoing program. Search engine rankings require continuous content updates, review generation, citation maintenance, and technical health monitoring. The second most common mistake is measuring SEO by rankings rather than phone calls. Rankings are a leading indicator, but booked jobs are the outcome that matters. A proper HVAC SEO program tracks organic traffic, call volume by landing page, and revenue from organic search.",
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

      {/* CTA */}
      <section className="bg-[#2D6A4F] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to see what your HVAC marketing is actually producing?
          </h2>
          <p className="mt-4 text-lg text-[#D8F3DC]/80">
            Every engagement starts with a Full Picture Audit. I look at your spend, your booking rate,
            your phone handling, and your revenue, before touching a single campaign.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#2D6A4F] transition hover:bg-[#D8F3DC]"
            >
              Book a Strategy Call
            </Link>
            <a href="tel:5595213122" className="text-base font-medium text-[#D8F3DC] hover:text-white transition-colors">
              (559) 521-3122
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
