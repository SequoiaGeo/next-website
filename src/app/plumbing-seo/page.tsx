import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing SEO & Marketing | Sequoia GEO: Operator-Led Growth",
  description:
    "Plumbing marketing that connects your ad spend to booked jobs. CA Licensed C-36 Plumbing Contractor. 13 years operating home services. I see your booking rate, your average ticket, and where the revenue is leaking.",
  alternates: {
    canonical: "https://www.sequoiageo.com/plumbing-seo",
  },
};

export default function PlumbingSeoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#52B788]/30 bg-white px-5 py-2 text-sm font-medium text-[#2D6A4F] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#52B788]" />
              Plumbing Marketing
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Plumbing Marketing That Looks at{" "}
              <span className="text-[#2D6A4F]">the Full Revenue Picture</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Your agency sees leads. I see why $7,000/month in Angi leads is producing $475 in booked
              revenue. I&rsquo;m a California licensed C-36 Plumbing Contractor. I know your business
              from the inside.
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

      {/* The real problem */}
      <section className="bg-[#1B4332] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-12">
              What I Actually Found at a Plumbing Company Last Year
            </h2>
            <div className="space-y-5">
              {[
                {
                  finding: "$7,783/month on Angi leads",
                  result: "Generated approximately $475/month in booked revenue. A -94% return. The agency managing it never connected lead spend to actual jobs booked.",
                },
                {
                  finding: "265 pages not indexed by Google",
                  result: "Including the main plumbing services page. The SEO company had been billing monthly while Google literally didn't know their most important pages existed.",
                },
                {
                  finding: "Only 131 new customer calls out of 4,009 total",
                  result: "A 3.3% new customer acquisition rate from all marketing combined over 6 months. Nobody was tracking the difference between new and repeat callers.",
                },
                {
                  finding: "Sitemap redirecting to staging server",
                  result: "Google was trying to crawl the site and getting redirected to a test environment. The SEO company didn't catch it. We found it in 48 hours.",
                },
              ].map((item) => (
                <div key={item.finding} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="font-bold text-[#52B788]">{item.finding}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#D8F3DC]/70">{item.result}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-[#D8F3DC]/50">
              None of this required special tools. It required someone who knows what to look for because they&rsquo;ve lived it from the other side of the dispatch board.
            </p>
          </div>
        </div>
      </section>

      {/* What I manage */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Plumbing Marketing, End to End
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every channel connected to booked jobs, not just lead counts.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Google Ads for emergency & scheduled plumbing",
              "Local Service Ads management",
              "Google Business Profile optimization",
              "Map Pack ranking for high-value plumbing keywords",
              "Emergency call ad scheduling",
              "Review generation tied to job completion",
              "Website conversion optimization",
              "Lead source ROI tracking (Angi, HomeAdvisor, etc.)",
              "AI search visibility (ChatGPT, Perplexity)",
              "Call tracking & booking rate analysis",
              "CSR phone handling audit",
              "Vendor accountability for existing agencies",
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

      {/* Credentials */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#52B788]/20 bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
                  I&rsquo;m a Licensed Plumbing Contractor
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  California C-36 Plumbing License. That means I understand your jobs, your pricing, your
                  technicians, and your customers. When I look at your marketing, I&rsquo;m not guessing at
                  what matters.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  I ran a company that did plumbing alongside HVAC for 13 years. I know the difference
                  between a $150 drain clear and a $12,000 repipe. I know which keywords have margin and
                  which ones attract price shoppers.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "C-36", label: "CA Plumbing License" },
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

      {/* What Plumbing SEO Requires */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Plumbing SEO Actually Requires
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Most plumbing companies have one or two of these working. The ones that rank consistently have all four active at the same time.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Local SEO and Google Business Profile",
                body: "Your Google Business Profile drives more inbound calls than your website for most plumbing companies. A properly optimized listing includes complete service categories, weekly posts, photo uploads tied to completed jobs, and a systematic review generation process integrated with your dispatch workflow. Local SEO without GBP optimization leaves half your local search visibility on the table.",
              },
              {
                title: "Technical SEO and Website Performance",
                body: "Technical SEO issues suppress rankings regardless of how good the content is. Search engines cannot rank pages they cannot crawl. I consistently find plumbing websites with pages excluded from indexing, sitemap errors, slow mobile load times, and broken internal links. These are the norm across the plumbing industry, and they are fixable in weeks, not months.",
              },
              {
                title: "Keyword Research Across the Full Job Mix",
                body: "Emergency queries like &ldquo;burst pipe repair&rdquo; convert at different rates than scheduled service queries. Water heater replacement keywords attract a different customer than drain cleaning keywords. Plumbing SEO that maps each relevant keyword to the right service page, across emergency, job-type, location, and problem-based queries, builds organic traffic that compounds year over year.",
              },
              {
                title: "Off-Page SEO and Reputation Management",
                body: "Your domain authority is built through high quality backlinks from supplier directories, trade associations, local news, and relevant websites. Reputation management is the other half: Google&rsquo;s algorithm weights review recency heavily. A plumbing company with a steady drip of new reviews outranks a competitor with more reviews but a flat profile. Both require active management, not a one-time setup.",
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

      {/* Plumbing SEO Tips */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Separates Plumbing Companies That Rank from Ones That Don&rsquo;t
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              After auditing plumbing marketing programs across competitive markets, these are the consistent patterns.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                number: "01",
                title: "Location Pages, Not a Generic Service Area Page",
                body: "A plumbing company servicing eight cities should have eight dedicated location pages with unique content, local keywords, and service-specific information for each market. Most plumbing companies have a single service area page with light content that does not rank. Specific web page content built around local search intent does.",
              },
              {
                number: "02",
                title: "Review Velocity, Not Just Review Count",
                body: "Google&rsquo;s algorithm weights review recency as heavily as total count. An HVAC or plumbing company with 200 reviews where 180 are two years old will be outranked by a competitor with 80 reviews but a steady weekly drip of new ones. The fix is systematic: every completed job triggers a review request timed to send within four hours of completion.",
              },
              {
                number: "03",
                title: "Listings Management Across Every Directory",
                body: "Your business name, address, and phone number must be identical across every citation, local business directory, and data aggregator. Inconsistent listings management suppresses local pack rankings because search engines cannot confidently confirm your business location. This is an audit task, and most plumbing companies have 15 to 30 inconsistencies they have never cleaned up.",
              },
              {
                number: "04",
                title: "Attribution That Connects SEO to Dispatched Jobs",
                body: "Website traffic is not a success metric. Phone calls are. The right plumbing SEO program builds tracking infrastructure first: Google Analytics, Google Search Console, and call tracking software that isolates organic search calls from paid advertising calls. Without this, you are managing a ranking program with no way to measure whether it is producing revenue.",
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

      {/* Plumbing SEO FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Plumbing SEO FAQ
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                q: "How long does plumbing SEO take to produce results?",
                a: "Local SEO results for plumbing companies in lower-competition markets typically show within 3 to 4 months. In competitive metro markets with established plumbing companies dominating local search, it takes 6 to 12 months to build the domain authority needed to compete at the top of search engine results. Technical SEO fixes and Google Business Profile optimization produce the fastest results, often within 30 to 60 days.",
              },
              {
                q: "What&rsquo;s the difference between plumbing SEO and general SEO?",
                a: "Plumbing SEO is local by definition. Every job requires physical proximity: you cannot dispatch a plumber to a customer 200 miles away. General SEO for national brands has different objectives and strategies. Plumber SEO is optimized for local search visibility, Google Business Profile prominence, service area coverage, and emergency query capture. A digital marketing agency that manages national brands is not built to manage plumber SEO, regardless of what their proposal says.",
              },
              {
                q: "Should I invest in SEO or paid advertising for my plumbing company?",
                a: "Both, in the right proportion. Plumbing SEO builds organic traffic and local search visibility that compounds over time and lowers cost per lead year over year. Paid advertising produces immediate phone calls but stops when you stop spending. The right strategy is to run paid advertising to capture emergency demand while SEO builds the organic foundation. As local search rankings improve, you reduce ad spend on keywords where you rank organically and redirect that budget to new service areas or higher-margin jobs like sewer line replacement.",
              },
              {
                q: "What keywords should a plumbing company target?",
                a: "A complete keyword research strategy for plumbing companies spans four categories: emergency service queries (&ldquo;burst pipe repair near me,&rdquo; &ldquo;emergency plumber [city]&rdquo;), job-type queries (&ldquo;water heater installation,&rdquo; &ldquo;sewer line replacement&rdquo;), location-specific queries (&ldquo;plumber [neighborhood],&rdquo; &ldquo;drain cleaning [city]&rdquo;), and problem-based queries (&ldquo;water heater making noise,&rdquo; &ldquo;low water pressure in house&rdquo;). Mapping each category to dedicated service pages is what builds organic traffic that compounds.",
              },
              {
                q: "How do I evaluate whether my current plumbing SEO is working?",
                a: "The right metrics are phone calls and booked jobs from organic search, not rankings alone. If your current SEO services provider reports on impressions and click positions but cannot show a clear line from those rankings to your dispatch board, the program is not being managed correctly. A properly instrumented plumbing SEO program uses Google Analytics, Google Search Console, and call tracking to connect every organic search session to actual revenue.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]" dangerouslySetInnerHTML={{ __html: item.q }} />
                <p className="mt-3 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.a }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Plumbing SEO Involves */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Plumbing SEO Actually Involves
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Search engine optimization for plumbing companies is a local discipline. Every component
              works together to produce organic search visibility that generates phone calls from homeowners
              in your service area who are ready to book right now.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Local SEO and Google Business Profile",
                body: "Local SEO is the primary driver of phone calls for plumbing companies. Google Business Profile optimization determines whether you appear in the Map Pack for emergency queries like 'plumber near me' or 'burst pipe repair.' Accurate business information, review velocity, and proper service area configuration are the foundation of local search visibility that generates calls before homeowners scroll past the map.",
              },
              {
                title: "On-Page SEO and Service Pages",
                body: "On-page SEO for plumbing websites means building dedicated service pages for every major job type: water heater installation, drain cleaning, sewer line repair, leak detection, water softener installation, and emergency plumbing. Each service page targets specific keywords and answers the questions homeowners ask before calling a plumber. Generic plumbing pages that try to rank for everything rank for nothing.",
              },
              {
                title: "Technical SEO and Indexation",
                body: "Technical SEO covers the infrastructure issues that prevent plumbing websites from ranking even when the content is solid. Indexation problems, slow mobile load speeds, broken internal links, and missing schema markup are common issues that keep plumbing service pages out of search results. Technical SEO audits identify and fix these problems so that your on-page content can actually rank.",
              },
              {
                title: "Link Building and Local Authority",
                body: "Link building for plumbing companies focuses on earning high-quality backlinks from local business directories, trade associations, home service platforms, and local media. Combined with consistent review generation and citation management, link building builds the domain authority that allows plumbing companies to outrank competitors who have been in the market longer.",
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

      {/* Plumbing SEO Strategy */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Plumbing SEO Strategy: How Organic Traffic Compounds
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A plumbing SEO strategy that connects organic traffic to booked jobs requires more than
              keyword optimization. It requires understanding how homeowners search, call, and convert.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "Keyword Research Mapped to Job Types",
                body: "Effective keyword research for plumbing companies maps search queries to specific job types: emergency service calls, installation projects, repair jobs, and maintenance work each have different buyer intent and average ticket values. Building a service page for each major plumbing service, optimized for the queries homeowners actually type, is how organic traffic compounds year over year.",
              },
              {
                number: "02",
                title: "Emergency Search Capture",
                body: "Emergency plumbing queries convert at the highest rates of any search category. Homeowners with a burst pipe, a backed-up sewer, or a failed water heater are calling the first company that shows up and looks trustworthy. Fast-loading service pages, a prominently displayed phone number, and Map Pack visibility on mobile are the three factors that determine who gets that call.",
              },
              {
                number: "03",
                title: "Reputation Management and Online Reviews",
                body: "Online reviews influence both search rankings and call conversion for plumbing companies. Google Business Profile rankings weight review quantity, recency, and response rate as ranking signals. Homeowners evaluating multiple plumbers in the Map Pack default to the company with the most reviews and the fastest response times. A review generation system built into your dispatch workflow is the most reliable source of consistent new reviews.",
              },
              {
                number: "04",
                title: "Tracking from Search to Booked Job",
                body: "Most plumbing SEO programs report on rankings and organic traffic. A properly managed program tracks from first click to booked job. That requires Google Analytics for website behavior, Google Search Console for search query data, call tracking tied to organic landing pages, and CRM integration that maps calls to dispatched jobs. Without that tracking infrastructure, you cannot tell whether your plumbing SEO is producing revenue.",
              },
            ].map((item) => (
              <div key={item.number} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <div className="mb-4 text-4xl font-black text-[#D8F3DC]">{item.number}</div>
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plumbing SEO Extended FAQ */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              More Plumbing SEO Questions
            </h2>
          </div>
          <div className="space-y-5">
            {[
              {
                q: "What is the most important local SEO factor for plumbing companies?",
                a: "Google Business Profile optimization is the highest-impact starting point for plumbing local SEO. A fully optimized GBP with accurate categories, consistent NAP information, and regular review generation drives Map Pack visibility for the emergency queries that produce the highest-converting phone calls. GBP optimization produces measurable ranking changes faster than most other SEO tactics and is the first thing I address in any plumbing SEO engagement.",
              },
              {
                q: "How do I get more plumbing customers from organic search?",
                a: "Getting more plumbing customers from organic search requires three things working together: service pages that rank for the keywords your customers use, a Google Business Profile that appears in the Map Pack for local queries, and a website that converts the click into a phone call. Most plumbing websites fail on the third point. Fast load speed, a prominent phone number above the fold, and trust signals like license numbers and reviews are what turn organic traffic into booked jobs.",
              },
              {
                q: "How does plumbing SEO differ between competitive and less competitive markets?",
                a: "In less competitive markets, a well-optimized GBP and solid on-page SEO can produce ranking results within 60 to 90 days. In competitive metros where multiple plumbing companies have been investing in SEO for years, building enough domain authority to compete at the top of the Map Pack takes 6 to 12 months of consistent link building, review generation, and content development. Paid advertising fills the gap while organic authority builds.",
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
            Find out what your plumbing marketing is actually producing
          </h2>
          <p className="mt-4 text-lg text-[#D8F3DC]/80">
            The Full Picture Audit takes 48 hours. You&rsquo;ll know exactly where your revenue is leaking
            before we spend a dollar on anything new.
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
