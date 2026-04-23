import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO Agency for Contractors & Local Businesses | Sequoia GEO",
  description:
    "Sequoia GEO is a GEO agency built around one discipline: making contractors and local businesses visible and recommendable in ChatGPT, Perplexity, Gemini, and AI search. GEO is our core work, not a bolt-on.",
  alternates: {
    canonical: "https://www.sequoiageo.com/geo-agency",
  },
};

export default function GeoAgencyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-white px-5 py-2 text-sm font-medium text-[#1A5C3A] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
              Generative Engine Optimization
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              A GEO Agency Built{" "}
              <span className="text-[#1A5C3A]">Around One Discipline</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Sequoia GEO was named after the discipline it was built around: Generative Engine Optimization.
              Not a bolt-on. Not a rebrand. A real GEO agency focused on making contractors and local
              businesses visible in ChatGPT, Perplexity, Gemini, and Claude.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Get a Free AI Visibility Audit
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

      {/* What is GEO */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What a GEO Agency Actually Does
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              GEO stands for Generative Engine Optimization. A GEO agency helps businesses show up
              when someone asks ChatGPT, Perplexity, or Google Gemini a question that should produce
              your name. That is different work from traditional SEO.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: "AI search visibility monitoring",
                body: "A GEO agency tracks whether your business is being referenced by ChatGPT, Perplexity, Gemini, and Claude when someone asks relevant questions. This is the new version of rank tracking — instead of keyword positions, you track brand mentions in AI responses.",
              },
              {
                title: "Authority content that gets cited",
                body: "AI tools are trained to prefer content that demonstrates real expertise. A GEO agency builds content designed to be cited, not just read. This is a different writing approach than traditional SEO, and it requires actual subject-matter depth.",
              },
              {
                title: "Schema and structured data",
                body: "Most websites have no structured data, which means AI tools have to guess what the business does and who it serves. A GEO agency implements schema markup and entity relationships so AI tools can confidently understand and reference the business.",
              },
              {
                title: "Third-party brand presence",
                body: "AI tools cross-reference businesses across dozens of sources. A GEO agency builds and cleans up your presence across directories, review platforms, industry publications, and local media so AI tools see a consistent, authoritative signal.",
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

      {/* GEO vs SEO */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              GEO vs. SEO: What&rsquo;s Actually Different
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              SEO optimizes for search engines that return a list of links. GEO optimizes for AI tools
              that return a synthesized answer. The underlying work overlaps in some areas and diverges sharply in others.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-6">
              <h3 className="text-base font-bold text-[#1a1a1a] mb-4">Traditional SEO Agency</h3>
              <ul className="space-y-2">
                {[
                  "Optimizes for ranking position in Google",
                  "Tracks keyword rankings",
                  "Builds backlinks",
                  "Reports impressions and clicks",
                  "Measures organic traffic volume",
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
            <div className="rounded-2xl border border-[#3A9E6A]/30 bg-[#C8EDD2]/20 p-6">
              <h3 className="text-base font-bold text-[#0D2318] mb-4">GEO Agency (Sequoia GEO)</h3>
              <ul className="space-y-2">
                {[
                  "Optimizes for AI tool mentions and recommendations",
                  "Tracks brand mentions in ChatGPT, Perplexity, Gemini",
                  "Builds entity authority and citation signals",
                  "Reports AI share of voice and mention frequency",
                  "Measures inbound from AI-referred searches",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#0D2318]">
                    <svg className="h-4 w-4 shrink-0 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-gray-500 max-w-2xl mx-auto">
            GEO does not replace traditional SEO or paid advertising. It is an additional layer on top of what works.
            A real GEO agency coordinates with your existing marketing rather than competing with it.
          </p>
        </div>
      </section>

      {/* GEO Services */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              GEO Agency Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every engagement starts with an audit. The work that follows depends on what the audit reveals.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "AI search visibility audit (ChatGPT, Perplexity, Gemini, Claude)",
              "Schema markup and structured data implementation",
              "Entity SEO and knowledge graph optimization",
              "Authority content development and optimization",
              "Third-party citation and directory cleanup",
              "Google Business Profile optimization",
              "Review velocity and reputation management",
              "AI share of voice monitoring and reporting",
              "Brand mention tracking across AI platforms",
              "Content strategy for AI citation targeting",
              "Local business entity building",
              "Fractional CMO with GEO strategy leadership",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sequoia GEO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#fafaf8] p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
                  Why Sequoia GEO Was Built Around This Discipline
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  GEO was not a rebrand. Sequoia GEO was built around that discipline specifically,
                  from the start. Most agencies offering GEO services are traditional SEO or digital
                  marketing firms that added it to their service list in 2024 or 2025. That is not
                  the same thing as building around it from day one.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  The team behind Sequoia GEO holds a California B General Contractor License and
                  spent 13 years operating in home services, growing from startup to 130+ employees
                  and $10M+ in annual revenue before launching this agency. That background means
                  Sequoia GEO understands how contractors actually make decisions, what their customers
                  search for, and what kinds of AI mentions translate into real jobs — not just impressions.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  For home service contractors and local businesses, GEO is not an abstract opportunity.
                  AI tools are being used to find plumbers, HVAC companies, roofers, and restoration
                  companies right now. The businesses showing up in those answers are winning jobs their
                  competitors do not even know they are losing.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "GEO", label: "Core discipline, not a bolt-on" },
                  { stat: "B Gen", label: "CA Contractor License" },
                  { stat: "13 yrs", label: "Home services operator" },
                  { stat: "4x", label: "Inc 5000 (2020-2023)" },
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

      {/* Who needs a GEO agency */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Who Genuinely Needs a GEO Agency
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Not every business needs a GEO agency right now. Here is an honest breakdown.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                label: "A good fit",
                color: "border-[#3A9E6A]/30 bg-[#C8EDD2]/20",
                labelColor: "text-[#1A5C3A]",
                items: [
                  "Home service contractors (HVAC, plumbing, roofing, restoration)",
                  "Professional service providers where trust drives referrals",
                  "Local businesses in markets where AI recommendations are growing",
                  "Businesses that want to reduce dependence on paid advertising",
                  "Companies expanding into new geographic markets",
                  "Anyone whose competitors have not started GEO work yet",
                ],
                icon: "check",
              },
              {
                label: "Not the right time",
                color: "border-gray-200 bg-[#fafaf8]",
                labelColor: "text-gray-500",
                items: [
                  "Businesses already at capacity from word-of-mouth",
                  "Commodity products where buyers don't research",
                  "No budget for ongoing marketing investment",
                  "Major reputation issues that need to be fixed first",
                  "Deeply regulated industries where AI is conservative about recommendations",
                  "Looking for a one-time fix rather than an ongoing discipline",
                ],
                icon: "x",
              },
            ].map((col) => (
              <div key={col.label} className={`rounded-2xl border p-7 ${col.color}`}>
                <h3 className={`text-sm font-bold uppercase tracking-wide mb-4 ${col.labelColor}`}>{col.label}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      {col.icon === "check" ? (
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      ) : (
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red flags + what to look for */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Red Flags When Choosing a GEO Agency
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              GEO is a new category. The market is full of agencies rebranding themselves as experts
              without actually understanding the work.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                flag: "They promise guaranteed rankings in AI search",
                explain: "AI tools do not have rankings the way Google does. Nobody can guarantee that. An honest GEO agency talks about expected outcomes and strategy, not guarantees.",
              },
              {
                flag: "Their strategy is just \"more content\"",
                explain: "Writing more blog posts does not equal GEO. Content quality matters more than volume, and the strategy needs to include schema, entity building, brand authority signals, and measurement.",
              },
              {
                flag: "They cannot explain how AI search tools work",
                explain: "Ask any GEO agency how ChatGPT decides which businesses to recommend. If they dodge or use vague marketing language, they do not actually know.",
              },
              {
                flag: "They use the same strategy for every client",
                explain: "GEO work should be tailored to the specific business, industry, market, and competitive landscape. A cookie-cutter approach means they are selling a template.",
              },
              {
                flag: "They have no technical capabilities",
                explain: "Real GEO requires schema markup, structured data, entity SEO, and site architecture work. If a GEO agency is just a content shop, they are missing half the discipline.",
              },
              {
                flag: "They position GEO as a replacement for your current marketing",
                explain: "GEO does not replace SEO, local search, or paid advertising. A legitimate GEO agency builds on top of what is already working, not against it.",
              },
            ].map((item) => (
              <div key={item.flag} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50">
                    <svg className="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1a1a1a]">{item.flag}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.explain}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How GEO Optimization Works */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              How Generative Engine Optimization Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Generative engine optimization geo is a distinct discipline from traditional SEO. Understanding
              how AI tools process and surface information explains why the work looks different from
              anything that came before it.
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                How AI Models Generate Answers
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                AI models like the ones powering ChatGPT, Perplexity, and Google AI Overviews do not retrieve
                a list of links the way traditional search engines do. They generate synthesized answers by
                drawing on patterns in their training data, cross-referenced against real-time web signals.
                When someone asks an AI system which plumber to call in their city, the system is not ranking
                websites. It is constructing a response based on which businesses it has encountered most
                consistently, with the most coherent entity information, across the most credible sources.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                This is why generative engine optimization requires a fundamentally different strategy than
                traditional SEO. Technical optimization for search engines focuses heavily on crawlability,
                keyword placement, and link signals. Generative engine optimization geo focuses on entity
                clarity, citation architecture, and making your business easy for AI systems to understand
                and describe accurately. A business that ranks well in Google search can still be invisible
                in AI generated answers if its entity information is inconsistent, its schema is absent, or
                its authority signals are fragmented across sources.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                AI Search Engines and AI Overviews
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                Google AI Overviews have fundamentally changed what appears at the top of search results
                for millions of queries. Where a user once saw ten blue links, they now see a generated
                paragraph that synthesizes information from multiple sources and, in some cases, no longer
                requires them to click through to any website at all. AI search engines including Perplexity
                and ChatGPT search mode operate on the same principle at a larger scale.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                For local businesses, this creates both risk and opportunity. A contractor who is not being
                referenced in AI generated answers is losing potential customers to competitors who are,
                even if their traditional search engine rankings look healthy. A GEO agency that understands
                how AI overviews select and cite sources can build the right signals into your content,
                structured data, and brand presence to improve the odds that your business appears in those
                answers. That work starts with a clear picture of where you stand today across AI powered
                search platforms, not just Google.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Technical SEO, Technical Optimization, and AI Readiness
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                Technical SEO remains important in a GEO context, but the emphasis shifts. Standard
                technical optimization for traditional search engines prioritizes page speed, crawl
                efficiency, and indexation. Technical optimization for AI search adds a layer on top:
                schema markup that clearly describes who you are and what you do, entity disambiguation
                that connects your business to the right categories and locations, and content structure
                that supports natural language query optimization.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                AI systems use structured data not just to understand page content but to build a model
                of what a business is, where it operates, who it serves, and how authoritative it is
                relative to similar businesses. Inconsistent NAP data, missing schema types, and
                fragmented brand signals across directories and third-party sources all create noise
                that makes it harder for AI models to confidently include your business in their
                responses. A real GEO agency addresses this systematically, not just by publishing
                more content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Strategy and AI Visibility */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              GEO Strategy: Building AI Search Visibility Over Time
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              AI visibility is not a campaign. It is a compounding asset built through consistent,
              coordinated work across content, citations, and entity authority.
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                AI Citations and Brand Authority
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                AI citations are the third-party references that AI systems draw on when forming their
                responses. When a review site, industry directory, local news outlet, or authoritative
                publication mentions your business in a way that is clear and consistent, that citation
                becomes a signal AI systems can use. The more high-quality sources that describe your
                business accurately and consistently, the more confident an AI system becomes about
                including you in its responses.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Brand authority in the GEO context is not just about backlinks or domain rating. It is
                about the breadth and consistency of your presence across the sources that AI models
                treat as credible. This includes structured business directories, industry associations,
                local media coverage, customer review platforms, and partner or vendor profiles. A GEO
                strategy maps all of these touchpoints, identifies the gaps, and builds a plan to fill
                them systematically.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                AI Driven Search and Traffic from AI Platforms
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                AI driven search is changing where businesses get their traffic. AI traffic from platforms
                like Perplexity, ChatGPT, and Google AI Overviews is becoming a meaningful source of
                referral visits and, more importantly, of demand generation that never produces a click
                at all. A user who asks an AI system which HVAC contractor to call and receives a confident
                recommendation may call that contractor directly, without ever visiting a website. That
                conversion is invisible in traditional analytics, but it is real.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Measuring AI visibility requires different tools than standard SEO reporting. The best
                GEO agencies track brand mentions and AI generated answers across platforms, not just
                keyword rankings and organic sessions. AI search optimization is an iterative process:
                you build the signals, monitor how AI tools respond, identify where you are still being
                overlooked, and adjust. This is not a set-it-and-forget-it discipline, and any agency
                promising otherwise is not being straight with you.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                What Separates the Best GEO Agencies
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                The best GEO agencies have a few things in common. They can explain how AI systems
                process entity information without resorting to vague buzzwords. They measure AI
                visibility consistently, not just SEO metrics. They have a clear framework for building
                citation authority rather than just producing blog content. And they are honest about
                timelines, because generative engine optimization compounds slowly compared to paid
                advertising but produces far more durable results.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                An AI engine competitive analysis is a useful starting point. By querying the major
                AI platforms with the questions your target customers are asking, you can see which
                competitors are being surfaced and what signals appear to be driving those recommendations.
                That data shapes a GEO strategy built around closing specific gaps rather than running
                a generic checklist. For home service contractors in competitive local markets, this
                kind of deliberate, data-grounded approach is what creates a real and lasting advantage
                in AI search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              GEO Agency Questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Is GEO the same as SEO?",
                a: "No, though they overlap. SEO optimizes for search engines that return a list of links — you try to be one of the clicks. GEO optimizes for AI tools that return a synthesized answer — you try to be mentioned inside the answer. The underlying signals that drive both have some overlap (content quality, authority, structured data) but the specific techniques and measurement approaches diverge significantly.",
              },
              {
                q: "How long does GEO work take to show results?",
                a: "Realistic timeline is 90 to 180 days for meaningful improvements in AI search visibility. The first phase is foundation work: schema implementation, entity building, content authority signals. The second phase is monitoring and iteration as AI tools index and process the updated signals. Any GEO agency promising results in 30 days is not being honest about how AI training and update cycles work.",
              },
              {
                q: "Do I still need SEO if I hire a GEO agency?",
                a: "Yes. GEO does not replace traditional SEO or local search work — it adds a layer on top. In fact, strong SEO foundations (quality content, technical health, authoritative backlinks) support GEO because AI tools pull heavily from the same signals that drive organic rankings. A real GEO agency coordinates with your SEO strategy rather than treating it as competition.",
              },
              {
                q: "What AI tools does GEO optimization target?",
                a: "The primary AI search platforms to optimize for are ChatGPT (including search mode), Perplexity, Google Gemini and AI Overviews, Claude, and Microsoft Copilot. Each platform has slightly different content preferences and update cycles, but the foundational GEO work — entity authority, structured data, citation-worthy content, brand consistency — improves visibility across all of them.",
              },
              {
                q: "What does the free AI visibility audit include?",
                a: "We check your current visibility across ChatGPT, Perplexity, Gemini, and Claude using queries that should surface your business. We look at your schema and structured data implementation, your entity presence across third-party sources, and your content authority signals. You get a written summary of what we find, an honest assessment of where the gaps are, and realistic advice about what to prioritize. No sales pressure, just data.",
              },
              {
                q: "Why is a GEO agency different from a general digital marketing agency?",
                a: "Most general marketing agencies offering GEO services added it to their list in 2024 or 2025 because the term started appearing in industry publications. Real GEO expertise requires deep knowledge of how large language models process and weight information, how AI training cycles work, what structured data signals AI tools actually use, and how to build entity authority in a way that compounds over time. That is different work from traditional SEO or content marketing, and it requires a fundamentally different approach to strategy and measurement.",
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
      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Find out where you stand in AI search right now
          </h2>
          <p className="mt-4 text-lg text-[#C8EDD2]/80">
            We will check your visibility across ChatGPT, Perplexity, Gemini, and Claude, tell you
            exactly what we find, and give you an honest picture of whether GEO work makes sense for
            your situation. No pitch, no package, just data.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]">
              Get the Free Audit
            </Link>
            <a href="tel:5595213122" className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors">(559) 521-3122</a>
          </div>
        </div>
      </section>
    </>
  );
}
