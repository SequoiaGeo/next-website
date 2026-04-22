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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does plumbing SEO take to produce results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Local SEO results for plumbing companies in lower-competition markets typically show within 3 to 4 months. In competitive metro markets with established plumbing companies dominating local search, it takes 6 to 12 months to build the domain authority needed to compete at the top of search engine results. Technical SEO fixes and Google Business Profile optimization produce the fastest results, often within 30 to 60 days."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between plumbing SEO and general SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Plumbing SEO is local by definition. Every job requires physical proximity: you cannot dispatch a plumber to a customer 200 miles away. General SEO for national brands has different objectives and strategies. Plumber SEO is optimized for local search visibility, Google Business Profile prominence, service area coverage, and emergency query capture. A digital marketing agency that manages national brands is not built to manage plumber SEO, regardless of what their proposal says."
                }
              },
              {
                "@type": "Question",
                "name": "Should I invest in SEO or paid advertising for my plumbing company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both, in the right proportion. Plumbing SEO builds organic traffic and local search visibility that compounds over time and lowers cost per lead year over year. Paid advertising produces immediate phone calls but stops when you stop spending. The right strategy is to run paid advertising to capture emergency demand while SEO builds the organic foundation. As local search rankings improve, you reduce ad spend on keywords where you rank organically and redirect that budget to new service areas or higher-margin jobs."
                }
              },
              {
                "@type": "Question",
                "name": "What keywords should a plumbing company target?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A complete keyword research strategy for plumbing companies spans four categories: emergency service queries such as burst pipe repair near me or emergency plumber, job-type queries such as water heater installation or sewer line replacement, location-specific queries such as plumber by neighborhood or drain cleaning by city, and problem-based queries such as water heater making noise or low water pressure in house. Mapping each category to dedicated landing pages is what drives consistent search visibility that compounds."
                }
              },
              {
                "@type": "Question",
                "name": "How do I evaluate whether my current plumbing SEO is working?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The right metrics are phone calls and booked jobs from organic search, not rankings alone. If your current SEO services provider reports on impressions and click positions but cannot show a clear line from those rankings to your dispatch board, the program is not being managed correctly. A properly instrumented plumbing SEO program uses Google Analytics, Google Search Console, and call tracking to connect every organic search session to actual revenue."
                }
              },
              {
                "@type": "Question",
                "name": "What are the critical factors that determine whether plumbing SEO generates results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The critical factors are: a fully optimized Google Business Profile with consistent review velocity, web design and page speed that keeps visitors engaged on mobile devices, optimized listings across all major directories, secondary keywords mapped to dedicated content pages, and attribution that connects search results to booked jobs. Most plumbing companies have two or three of these working in isolation. Getting all of them active at the same time is what produces high quality leads from organic search on a consistent basis."
                }
              },
              {
                "@type": "Question",
                "name": "What is the most important local SEO factor for plumbing companies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google Business Profile optimization is the highest-impact starting point for plumbing local SEO. A fully optimized GBP with accurate categories, consistent NAP information, and regular review generation drives Map Pack visibility for the emergency queries that produce the highest-converting phone calls. GBP optimization produces measurable ranking changes faster than most other SEO tactics."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get more plumbing customers from organic search?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Getting more plumbing customers from organic search requires three things working together: service pages that rank for the keywords your customers use, a Google Business Profile that appears in the Map Pack for local queries, and a website that converts the click into a phone call. Most plumbing websites fail on the third point. Fast load speed, a prominent phone number above the fold, and trust signals like license numbers and reviews are what turn search traffic into booked jobs."
                }
              },
              {
                "@type": "Question",
                "name": "How does plumbing SEO differ between competitive and less competitive markets?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In less competitive markets, a well-optimized GBP and solid on-page SEO can produce ranking results within 60 to 90 days. In competitive metros where multiple plumbing companies have been investing in SEO for years, building enough domain authority to compete at the top of the Map Pack takes 6 to 12 months of consistent link building, review generation, and content development. Paid advertising fills the gap while organic authority builds."
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
              Plumbing Marketing
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Plumbing Marketing That Looks at{" "}
              <span className="text-[#1A5C3A]">the Full Revenue Picture</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Your agency sees leads. I see why $7,000/month in Angi leads is producing $475 in booked
              revenue. I&rsquo;m a California licensed C-36 Plumbing Contractor. I know your business
              from the inside.
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

      {/* The real problem */}
      <section className="bg-[#0D2318] py-20">
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
                  <p className="font-bold text-[#3A9E6A]">{item.finding}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#C8EDD2]/70">{item.result}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-[#C8EDD2]/50">
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
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plumbing SEO Services */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Plumbing SEO Services: What&rsquo;s Actually Included
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Not all plumbing SEO services are the same. Here is exactly what a full-service plumbing SEO program covers
              and what each component produces for your plumbing business.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Local SEO for Plumbing Businesses",
                body: "Local SEO is what gets your plumbing business into the Map Pack when potential customers need a plumber in your area. For plumbing contractors, local search is where the highest-converting calls come from. Improving local search visibility means optimizing your Google Business Profile, building citations across local directories, and targeting the location-based queries that homeowners run when they need help right now. Local plumbing businesses that invest in local SEO consistently reach more potential customers than those relying on paid advertising alone.",
              },
              {
                title: "On-Page SEO and Plumbing Website Optimization",
                body: "Your plumbing website needs to be optimized for the keywords your target audience actually uses. On-page SEO for a plumbing site means writing content that targets seo keywords like 'water heater repair near me' or 'drain cleaning [city],' adding SEO-friendly meta descriptions that improve click-through from search engine results pages, and structuring each page so search engines can understand what plumbing services you offer. Most plumbing websites are missing the relevant keywords that would move them up in local search results and help potential customers find them.",
              },
              {
                title: "Technical SEO Audit and Site Health",
                body: "A technical SEO audit identifies the indexation errors, slow load times, and crawlability issues that prevent your plumbing website from ranking even when the content is strong. SEO tools reveal problems that most plumbing business owners never see: pages blocked from search engines, missing schema markup, broken links, and mobile speed issues. Fixing these issues is often the fastest-impact work in any plumbing SEO engagement because the results show up in search engine rankings within weeks.",
              },
              {
                title: "Plumbing SEO Strategy and Keyword Research",
                body: "A real plumbing SEO strategy starts with understanding how potential customers find plumbing services in your market. SEO for plumbers means mapping the right target keywords to each page — emergency queries, job-type queries, and location terms — and then building content that matches what those potential customers are searching for. Plumbing business owners who try to rank for every plumbing service on a single generic page consistently underperform competitors who build a deliberate seo strategy across their whole site.",
              },
              {
                title: "Digital Marketing and Internet Marketing Integration",
                body: "Plumbing SEO does not operate in isolation. A complete digital marketing strategy for plumbing companies connects SEO to paid advertising, review management, and social media through a unified tracking framework. Internet marketing works best when all marketing channels feed into the same attribution system — so you can see which online marketing investment is reaching potential customers and which is generating noise. We manage the full digital marketing mix so no channel operates blind.",
              },
              {
                title: "Online Reputation and Visibility Management",
                body: "Online visibility for a plumbing business is built through two interconnected systems: review generation and brand authority. Your online reputation — the volume, recency, and quality of your reviews — directly influences both local search rankings and how many potential customers choose to call you. Plumbing business owners who encourage customer reviews and systematically build their business online across search engines, directories, and review platforms reach significantly more potential customers than those who rely on word of mouth alone.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-white p-8 sm:p-12 shadow-sm">
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
                  I ran a company that did plumbing alongside HVAC for over a decade. I know the difference
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
                body: "Technical SEO issues suppress rankings regardless of how good the content is. Search engines cannot rank pages they cannot crawl. I consistently find plumbing websites with pages excluded from indexing, sitemap errors, slow mobile load times, and broken internal links. More than 60% of plumbing searches happen on mobile devices — and a site that isn&rsquo;t mobile friendly and user friendly on small screens loses those callers before they read a single word. These issues are the norm across the plumbing industry, and they are fixable in weeks, not months.",
              },
              {
                title: "Keyword Research Across the Full Job Mix",
                body: "Emergency queries like &ldquo;burst pipe repair&rdquo; convert at different rates than scheduled service queries. Water heater replacement keywords attract a different customer than drain cleaning keywords. Plumbing SEO that maps each relevant keyword to the right page, across emergency, job-type, location, and problem-based queries, builds organic traffic across all your services that compounds year over year.",
              },
              {
                title: "Off-Page SEO and Reputation Management",
                body: "Your domain authority is built through high quality backlinks from supplier directories, trade associations, local news, and relevant websites. Reputation management is the other half: review recency is a direct ranking factor — Google weights it heavily. A plumbing company with a steady drip of new reviews outranks a competitor with more reviews but a flat profile. Both require active management, not a one-time setup.",
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
                body: "Google&rsquo;s algorithm weights review recency as heavily as total count. HVAC contractors and plumbing companies with 200 reviews where 180 are two years old will be outranked by a competitor with 80 reviews but a steady weekly drip of new ones. The fix is systematic: every completed job triggers a review request timed to send within four hours of completion.",
              },
              {
                number: "03",
                title: "Listings Management Across Every Directory",
                body: "Optimized listings across every citation, local business directory, and data aggregator require your business name, address, and phone number to be identical everywhere. Inconsistent listings management suppresses local pack rankings because search engines cannot confidently confirm your business location. Most plumbing companies have 15 to 30 inconsistencies they have never cleaned up — and these are fixable in a single audit pass.",
              },
              {
                number: "04",
                title: "Attribution That Connects SEO to Dispatched Jobs",
                body: "Website traffic is not a success metric. Phone calls are. The right plumbing SEO program builds tracking infrastructure first: Google Analytics, Google Search Console, and call tracking software that isolates organic search calls from paid advertising calls. Without this, you are managing a ranking program with no way to measure whether it is producing revenue.",
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
                a: "Both, in the right proportion. Plumbing SEO builds local search visibility and organic rankings that compound over time and lower cost per lead year over year. Paid advertising produces immediate phone calls but stops when you stop spending. The right strategy is to run paid advertising to capture emergency demand while SEO builds the organic foundation. As local search rankings improve, you reduce ad spend on keywords where you rank organically and redirect that budget to new service areas or higher-margin jobs like sewer line replacement.",
              },
              {
                q: "What keywords should a plumbing company target?",
                a: "A complete keyword research strategy for plumbing companies spans four categories: emergency service queries (&ldquo;burst pipe repair near me,&rdquo; &ldquo;emergency plumber [city]&rdquo;), job-type queries (&ldquo;water heater installation,&rdquo; &ldquo;sewer line replacement&rdquo;), location-specific queries (&ldquo;plumber [neighborhood],&rdquo; &ldquo;drain cleaning [city]&rdquo;), and problem-based queries (&ldquo;water heater making noise,&rdquo; &ldquo;low water pressure in house&rdquo;). Mapping each category to dedicated landing pages is what drives lasting search visibility that compounds.",
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
              — from web design and page speed to content and link building — works together to produce
              organic search visibility that beats your local competition and generates phone calls from
              homeowners who are ready to book right now.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Local SEO and Google Business Profile",
                body: "Local SEO is the primary driver of phone calls for plumbing companies. As a service area business, your Google Business Profile optimization determines whether you appear in the Map Pack for emergency queries like 'plumber near me' or 'burst pipe repair.' Accurate business information, review velocity, and proper service area configuration are the foundation of local search visibility that generates calls before homeowners scroll past the map.",
              },
              {
                title: "On-Page SEO and Service Pages",
                body: "On-page SEO for plumbing websites means building dedicated service pages for every major job type: water heater installation, drain cleaning, sewer line repair, leak detection, water softener installation, and emergency plumbing. The website&rsquo;s content on each page should target specific keywords, answer the questions homeowners ask before calling, and include meta descriptions that improve click-through rates from search results. Generic plumbing pages that try to rank for everything rank for nothing.",
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
                body: "Effective keyword research for plumbing companies maps search queries to specific job types: emergency service calls, installation projects, repair jobs, and maintenance work each have different buyer intent and average ticket values. Beyond primary service keywords, targeting secondary keywords — problem-based queries, symptom searches, and long-tail location terms — is how you generate more traffic and high quality leads from organic search over time. Creating content for each service and city you cover compounds the return. Each page builds on the last — and the plumbing companies doing this consistently outrank those who built one generic page and stopped.",
              },
              {
                number: "02",
                title: "Emergency Search Capture",
                body: "Emergency plumbing queries convert at the highest rates of any search category. Homeowners with a burst pipe, a backed-up sewer, or a failed water heater are calling the first company that shows up and looks trustworthy. Fast-loading service pages, a prominently displayed phone number, and Map Pack visibility on mobile are the three factors that determine who gets that call.",
              },
              {
                number: "03",
                title: "Reputation Management and Online Reviews",
                body: "Online reviews influence both search rankings and call conversion for plumbing companies. Your online reputation and brand visibility in local search are shaped by review volume, recency, and response rate — all of which Google weights as ranking signals. Homeowners evaluating multiple plumbers in the Map Pack default to the company with the most reviews and the fastest response times. Building relationships with past customers through follow-up and review requests is one of the key elements that separates consistently growing plumbing companies from those stuck at the same volume year over year. A review generation system built into your dispatch workflow is the most reliable way to maintain that momentum.",
              },
              {
                number: "04",
                title: "Tracking from Search to Booked Job",
                body: "Most plumbing SEO programs report on rankings and organic traffic. A properly managed program tracks from first click to booked job. Website visitors from organic search become phone calls, phone calls become qualified leads, and qualified leads become dispatched jobs. That tracking requires Google Analytics for website behavior, Google Search Console for search query data, call tracking tied to organic landing pages, and CRM integration. Only then can you measure marketing ROI with confidence and know whether your plumbing SEO is producing real revenue.",
              },
            ].map((item) => (
              <div key={item.number} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <div className="mb-4 text-4xl font-black text-[#C8EDD2]">{item.number}</div>
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Look For in a Plumbing SEO Company */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What to Look For in a Plumbing SEO Company
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Most plumbing companies hire the wrong SEO partner because they evaluate proposals instead of results.
              Here is what actually separates capable SEO companies from those who produce reports and collect retainers.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Real Experience With Plumbing Contractors",
                body: "SEO for plumbing contractors is different from SEO for e-commerce or national brands. The plumbing industry has specific search patterns — potential customers search for plumbing help in moments of urgency, not during casual browsing — and a generalist agency will not understand that dynamic. Look for an SEO company that has worked with service businesses and can speak specifically to your job mix, your service area, and the local search rankings that drive real calls.",
              },
              {
                title: "Revenue Reporting, Not Just Search Engine Rankings",
                body: "An SEO company that reports on impressions and click positions without connecting those numbers to booked jobs is not managing your plumbing business effectively. Meaningful SEO performance reporting shows the line from potential customers finding you in search engine rankings, to calls, to revenue. Plumbing business owners deserve to know whether their SEO investment is generating work — not just website traffic.",
              },
              {
                title: "A Clear Local SEO Strategy for Your Market",
                body: "Every plumbing market is different. The local SEO strategy for a solo plumber in a mid-size city looks different from a multi-location operation competing in a major metro. Look for an SEO company that builds a local seo strategy specific to your competitive landscape, your service area, and the target keywords your customers actually use when they search for plumbing services online.",
              },
              {
                title: "Access to the Right SEO Tools and Reporting",
                body: "Effective SEO efforts require the right infrastructure: Google Search Console, Google Analytics, call tracking, and local ranking tools that show exactly where your plumbing site stands in local search results. An SEO company that cannot give you access to your own data is a company that does not want you to see the full picture. Transparent reporting across all marketing channels is the baseline for any legitimate plumbing SEO engagement.",
              },
              {
                title: "Content Built Around How Customers Search",
                body: "The best plumbing SEO companies build high quality content around how customers search — not how industry insiders talk. That means writing about specific plumbing problems, service types, and local neighborhoods rather than producing generic plumbing tips. Marketing strategies built around real customer search behavior generate calls. Generic content that was not written for search engine optimization generates nothing.",
              },
              {
                title: "Backlinks from Reputable Websites and Local Sources",
                body: "Off-page SEO for plumbing companies means earning backlinks from reputable websites: trade associations, local media, home services industry directories, and local business platforms. Service businesses that pair high quality content with legitimate link sources outrank those relying on low-quality directories. Building online reputation through quality links and citations is what sustains long-term search engine optimization results.",
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
                q: "What are the critical factors that determine whether plumbing SEO generates results?",
                a: "The critical factors are: a fully optimized Google Business Profile with consistent review velocity, web design and page speed that keeps website visitors engaged on mobile devices, optimized listings across all major directories, secondary keywords mapped to targeted content pages, and attribution that connects search results to booked jobs. Most plumbing companies have two or three of these working in isolation. Getting all of them active at the same time is what produces high quality leads from organic search on a consistent basis and builds the compounding return that makes plumbing SEO worth the investment.",
              },
              {
                q: "What is the most important local SEO factor for plumbing companies?",
                a: "GBP optimization is the highest-impact starting point for plumbing local SEO. A fully optimized profile with accurate categories, consistent NAP information, and regular review generation drives Map Pack visibility for the emergency queries that produce the highest-converting phone calls. GBP optimization produces measurable ranking changes faster than most other SEO tactics and is the first thing I address in any plumbing SEO engagement.",
              },
              {
                q: "How do I get more plumbing customers from organic search?",
                a: "Getting more plumbing customers from organic search requires three things working together: service pages that rank for the keywords your customers use, a Google Business Profile that appears in the Map Pack for local queries, and a website that converts the click into a phone call. Most plumbing websites fail on the third point. Fast load speed, a prominent phone number above the fold, and trust signals like license numbers and reviews are what turn search results visitors into booked jobs.",
              },
              {
                q: "How does plumbing SEO differ between competitive and less competitive markets?",
                a: "In less competitive markets, a well-optimized GBP and solid on-page SEO can produce ranking results within 60 to 90 days. In competitive metros where multiple plumbing companies have been investing in SEO for years, building enough domain authority to compete at the top of the Map Pack takes 6 to 12 months of consistent link building, review generation, and content development. Paid advertising fills the gap while organic authority builds.",
              },
              {
                q: "How do I know if an SEO company truly understands the plumbing industry?",
                a: "Ask about their experience with plumbing contractors specifically — not just general home services. A company that understands the plumbing industry knows that search engine optimization for service businesses is local by nature, that emergency query volume shifts seasonally, and that the plumbing job mix (drain cleaning vs. repipes vs. sewer line work) requires different keyword strategies. If they also manage HVAC SEO for HVAC contractors or similar trade work alongside plumbing SEO, that is a strong positive signal. Generic digital marketing experience does not translate to plumbing business results without industry-specific knowledge.",
              },
              {
                q: "What internet marketing channels matter most for a plumbing business?",
                a: "For most plumbing businesses, the highest-priority internet marketing channels are organic local search (Google Map Pack and search results), Google Ads for immediate lead capture, and review management for conversion and trust. Online visibility across all three channels compounds: potential customers search for plumbing help in moments of urgency, checking the Map Pack, clicking the first organic result, and reading reviews before calling. Plumbing businesses visible across all three touchpoints convert at significantly higher rates than those that depend on a single channel. Mobile users account for more than 60% of plumbing searches, so every online marketing investment needs to perform on small screens first.",
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

      {/* Related services */}
      <section className="bg-[#fafaf8] py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
              More Home Services Marketing
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Plumbing SEO is one piece of a full digital marketing strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Local Services Ads", href: "/lsa-management" },
              { label: "HVAC SEO", href: "/hvac-seo" },
              { label: "Roofing SEO", href: "/roofing-seo" },
              { label: "Fractional CMO", href: "/fractional-cmo" },
              { label: "Leaving Your Agency?", href: "/leaving-my-marketing-agency" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-[#1A5C3A] shadow-sm hover:border-[#3A9E6A]/40 hover:shadow-md transition"
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

      {/* Switching agencies callout */}
      <section className="bg-[#fafaf8] border-y border-gray-200 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#1A5C3A] mb-1">Already with an agency?</p>
            <p className="text-base text-gray-700">
              If your current plumbing SEO company isn&rsquo;t producing, we can audit what you own and what a clean
              transition looks like before you commit to anything new.
            </p>
          </div>
          <Link href="/leaving-my-marketing-agency" className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-[#1A5C3A] px-6 py-3 text-sm font-semibold text-[#1A5C3A] hover:bg-[#1A5C3A] hover:text-white transition-colors">
            Thinking about switching?
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Find out what your plumbing marketing is actually producing
          </h2>
          <p className="mt-4 text-lg text-[#C8EDD2]/80">
            The Full Picture Audit takes 48 hours. You&rsquo;ll know exactly where your revenue is leaking
            before we spend a dollar on anything new.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]">
              Book a Strategy Call
            </Link>
            <a href="tel:5595213122" className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors">(559) 521-3122</a>
          </div>
        </div>
      </section>
    </>
  );
}
