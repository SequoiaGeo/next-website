import type { Metadata } from "next";
import Link from "next/link";
import PdfDownload from "./pdf-download";

export const metadata: Metadata = {
  title: "AI Search Visibility Guide for Contractors 2026 | Sequoia GEO",
  description:
    "How contractors can improve crawl access, entity clarity, public corroboration, and useful content for AI-assisted search.",
  alternates: {
    canonical: "https://www.sequoiageo.com/ai-website-seo-guide",
  },
};

const chapters = [
  { id: "how-ai-search-works", title: "Why AI search works differently" },
  { id: "five-signals", title: "The 5 surfaces an AI visibility audit reviews" },
  { id: "thin-website", title: "The thin website problem" },
  { id: "schema-markup", title: "Schema markup for contractors" },
  { id: "content-ai-cites", title: "Content that AI actually cites" },
  { id: "thirty-day-checklist", title: "The 30-day foundation checklist" },
];

export default function AIWebsiteSEOGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Is Your Website Invisible to AI Search? The Fix Starts Here.",
            "description": "How contractors can improve crawl access, entity clarity, public corroboration, useful content, and measurement for AI-assisted search.",
            "author": { "@type": "Person", "name": "Aaron Husak" },
            "publisher": {
              "@type": "Organization",
              "name": "Sequoia GEO",
              "url": "https://www.sequoiageo.com"
            },
            "dateModified": "2026-08-20",
            "mainEntityOfPage": "https://www.sequoiageo.com/ai-website-seo-guide"
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
            Can AI Search Understand{" "}
            <span className="text-[#3A9E6A]">and Verify Your Business?</span>
          </h1>
          <p className="mt-6 text-lg text-[#C8EDD2]/70 leading-relaxed max-w-2xl mx-auto">
            A contractor can have dozens of indexed pages and still be absent from a recommendation.
            The website may be crawlable while the business entity remains unclear, unsupported, or
            contradicted across the public web. This guide shows what to inspect before adding more content.
          </p>
          <p className="mt-4 text-base text-[#C8EDD2]/50">
            This guide covers what those signals are and how to build them.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-[#C8EDD2]/60">
            {["6 chapters", "Source-backed guidance", "30-day foundation", "No email required"].map((s) => (
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
                  <p className="text-xs font-semibold text-[#1a1a1a] mb-2">Want us to check your AI visibility?</p>
                  <p className="text-xs text-gray-500 mb-4">We audit where your business appears across ChatGPT, Gemini, Perplexity, and Google AI Overviews. 3 business days. No pitch.</p>
                  <Link
                    href="/contact"
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
              <section id="how-ai-search-works" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">01</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Why AI Search Works Differently Than Google</h2>
                </div>
                <div className="prose prose-gray max-w-none space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <p>
                    Conventional search often presents ranked links, maps, and other search features. AI-assisted search can instead synthesize an answer and cite selected sources. Some answers name businesses, while others provide information without recommending a provider.
                  </p>
                  <p>
                    A recommendation answer can change with the assistant, prompt wording, date, available search index, user context, and sources retrieved. That makes one prompt run an observation, not a stable ranking position.
                  </p>
                  <p>
                    The controllable foundation is familiar: important pages must be crawlable and indexable, the business entity must be clear, and the public evidence must support what the website claims. Those conditions improve eligibility, but they do not guarantee a citation or recommendation.
                  </p>
                  <p>
                    AI search is also conversational. &ldquo;Who should I call for a leaking water heater in Boise?&rdquo; includes a problem, location, and hiring intent. Pages should answer that intent with useful first-hand detail, while the rest of the public web corroborates the business name, service, and geography.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 mb-14" />

              {/* Chapter 2 */}
              <section id="five-signals" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">02</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">The 5 Surfaces an AI Visibility Audit Reviews</h2>
                </div>
                <div className="prose prose-gray max-w-none space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <p>
                    No five-item list determines every AI answer. These are five controllable surfaces worth reviewing because they affect whether a business is understandable, retrievable, and credible:
                  </p>
                  <div className="space-y-5 mt-4 not-prose">
                    {[
                      {
                        n: 1,
                        label: "Content depth",
                        desc: "Do the important service pages explain the process, customer decision, pricing factors, and first-hand experience? Page length alone is not the test. The question is whether the page adds useful information."
                      },
                      {
                        n: 2,
                        label: "Topical authority",
                        desc: "Does the site answer the important questions around its actual services and service area? Location and service pages should exist because they help a buyer, not because a template can generate them at scale."
                      },
                      {
                        n: 3,
                        label: "Entity clarity",
                        desc: "Are the business name, operator, services, locations, contact details, and relationships explicit and consistent on the website and public profiles? Contradictions weaken confidence."
                      },
                      {
                        n: 4,
                        label: "Structured data (schema markup)",
                        desc: "Accurate structured data can reduce ambiguity when it matches the visible page. Google does not require special schema for its generative AI features, and markup does not guarantee a citation."
                      },
                      {
                        n: 5,
                        label: "Trust signals",
                        desc: "Licenses, reviews, associations, named team members, project documentation, and independent coverage should support the claims a business makes. Every detail needs to be current and verifiable."
                      },
                    ].map((item) => (
                      <div key={item.n} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200">
                        <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#C8EDD2] text-xs font-black text-[#0D2318] mt-0.5">{item.n}</span>
                        <div>
                          <p className="font-semibold text-[#1a1a1a] text-sm">{item.label}</p>
                          <p className="text-gray-600 text-sm mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200 mb-14" />

              {/* Chapter 3 */}
              <section id="thin-website" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">03</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">The Thin Website Problem</h2>
                </div>
                <div className="prose prose-gray max-w-none space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <p>
                    Here is the test: inventory the pages that help a customer make a decision. For each important service, ask whether the page answers cost factors, options, process, timing, risks, and what is different about the company&apos;s approach. A page can be long and still add very little. There is no universal word-count or page-count threshold for AI visibility.
                  </p>
                  <p>
                    Compare your website to what a fully built-out contractor presence looks like: individual service pages (not one page listing all services), FAQ pages answering specific homeowner questions by service type, location or neighborhood pages for the cities in your service area, process pages explaining how estimates work and what to expect on a first visit, comparison content (heat pump vs. furnace, tankless vs. tank water heater), and content that addresses the real anxiety homeowners have before calling a contractor.
                  </p>
                  <p>
                    A site built around short keyword templates may leave important buyer questions unanswered. The response is not to attack the prior builder or publish more template pages. It is to identify the missing decisions and add first-hand evidence where it helps the customer.
                  </p>
                  <p>
                    The fix may not require a redesign. Start with the services that matter most, use questions from real calls and search data, and add the details only the operator can provide. Measure crawl and index status first, then compare recommendation observations over 60 to 90 days.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 mb-14" />

              {/* Chapter 4 */}
              <section id="schema-markup" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">04</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Schema Markup for Contractors</h2>
                </div>
                <div className="prose prose-gray max-w-none space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <p>
                    Schema markup is machine-readable data that can help search engines interpret facts already visible on the page. It can reduce ambiguity, but it is not an authority score and it does not instruct an assistant to recommend the business.
                  </p>
                  <p>
                    Three schema types commonly used by contractor websites are:
                  </p>
                  <div className="space-y-4 not-prose mt-4">
                    {[
                      {
                        type: "LocalBusiness (or HVACBusiness, Plumber, etc.)",
                        desc: "Represents supported business facts such as the name, address, phone number, service area, and hours. Add only properties a visitor can verify on the page, and use the most accurate business subtype available."
                      },
                      {
                        type: "Service schema",
                        desc: "Can describe a service covered by the visible page. It helps express the relationship between the provider, service, and service area, but does not replace useful service content."
                      },
                      {
                        type: "FAQPage schema",
                        desc: "Represents visible question-and-answer content when the page meets the platform's eligibility rules. It does not make an AI assistant pull or cite an answer, and Google limits FAQ rich results to selected authoritative sites."
                      },
                    ].map((item) => (
                      <div key={item.type} className="flex gap-3 p-4 bg-[#F5FAF7] rounded-xl border border-[#C8EDD2]">
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                        <div>
                          <p className="font-semibold text-[#0D2318] text-sm">{item.type}</p>
                          <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4">
                    Validate structured data before publishing it, and keep it synchronized with the visible page and public profiles. Start with accurate Organization or LocalBusiness data. Add other types only when the page genuinely supports them. Google says no special schema markup is required for its generative AI features.
                  </p>
                  <p>
                    Read the current first-party guidance from{" "}
                    <a
                      href="https://developers.google.com/search/docs/appearance/ai-features"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-[#1A5C3A] underline underline-offset-2"
                    >
                      Google Search Central
                    </a>
                    .
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 mb-14" />

              {/* Chapter 5 */}
              <section id="content-ai-cites" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">05</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Content That AI Actually Cites</h2>
                </div>
                <div className="prose prose-gray max-w-none space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <p>
                    No content format is reliably cited by every assistant. Useful sources often share three characteristics that also help human buyers evaluate the answer.
                  </p>
                  <p>
                    <strong>It answers a specific question with a specific answer.</strong> &ldquo;How much does HVAC replacement cost?&rdquo; should include a current price range, what drives the price up or down, and the market and date the range covers. That makes the page more useful to a buyer and easier to verify than an unsupported &ldquo;it depends.&rdquo;
                  </p>
                  <p>
                    <strong>It includes verifiable details.</strong> Named brands you install, actual price ranges with context, specific data points, the year you were founded, and how many jobs you have completed. Specificity gives search systems and buyers facts they can compare across your site and other public sources. Every number should be current, attributable, and consistent wherever it appears.
                  </p>
                  <p>
                    <strong>It includes first-hand experience.</strong> Explain real trade decisions, operating constraints, and what changed the company&apos;s recommendation. That gives the page information a generic summary cannot supply.
                  </p>
                  <p>
                    The practical application: for each important service, answer questions customers actually ask before hiring. Use their language. Include pricing factors, what the job entails, how long it can take, and what makes the local market different. Then verify whether the page is crawled, indexed, cited, and associated with the right business entity.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 mb-14" />

              {/* Chapter 6 */}
              <section id="thirty-day-checklist" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">06</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">The 30-Day AI Search Foundation Checklist</h2>
                </div>
                <div className="space-y-5">
                  {[
                    {
                      period: "Week 1",
                      label: "Crawl, index, and entity foundation",
                      color: "bg-[#F5FAF7] border-[#C8EDD2]",
                      items: [
                        "Verify that Google, Bing, and permitted AI search crawlers can fetch the important pages",
                        "Inspect index coverage in Google Search Console and Bing Webmaster Tools",
                        "Compare the business name, contact details, services, operator, and geography across the website and major profiles",
                        "Validate Organization or LocalBusiness structured data against the visible page",
                      ],
                    },
                    {
                      period: "Week 2",
                      label: "Buyer questions and first-hand evidence",
                      color: "bg-[#EEF7FF] border-[#BFDBFE]",
                      items: [
                        "Collect questions from sales calls, estimates, customer emails, Search Console, and People Also Ask",
                        "Identify the three service pages with the largest gap between buyer intent and useful answers",
                        "Add pricing factors, process, timing, alternatives, proof, and named operator experience where supported",
                        "Strengthen internal links and submit materially changed pages for indexing",
                      ],
                    },
                    {
                      period: "Week 3",
                      label: "Recommendation and citation baseline",
                      color: "bg-[#FFF7ED] border-[#FED7AA]",
                      items: [
                        "Freeze a small set of buyer prompts by service, problem, and geography",
                        "Run each prompt repeatedly in a controlled environment and keep platforms separate",
                        "Record mentions, recommendations, primary position, citations, date, and prompt wording",
                        "Inspect cited sources and correct material contradictions on sources the business can legitimately manage",
                      ],
                    },
                    {
                      period: "Week 4",
                      label: "Demand measurement and next decision",
                      color: "bg-[#F5F3FF] border-[#DDD6FE]",
                      items: [
                        "Confirm that a captured form or call is the conversion event, not an AI-referred visit",
                        "Preserve known assistant referrals and voluntarily reported recommendation evidence without overwriting source uncertainty",
                        "Separate visibility, recommendation, referral, inquiry, qualified lead, and job booked in reporting",
                        "Choose the next 60 to 90 day test from the largest verified constraint, not from one favorable answer",
                      ],
                    },
                  ].map((block) => (
                    <div key={block.period} className={`rounded-xl border p-6 ${block.color}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-base font-bold text-[#1a1a1a]">{block.period}</h3>
                          <p className="text-xs text-gray-500 mt-0.5">{block.label}</p>
                        </div>
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
                      8 pages. Start with the foundation checklist in chapter six. Optional email capture to get occasional operator insights from Aaron.
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
            <p className="text-base font-semibold text-[#1a1a1a]">Want to see what AI assistants can verify about your business?</p>
            <p className="text-sm text-gray-500 mt-1">The public-surface audit separates crawl access, entity consistency, source coverage, website evidence, and recommendation observations.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0D2318]"
          >
            Request a Public-Surface Audit
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
