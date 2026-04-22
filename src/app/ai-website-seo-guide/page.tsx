import type { Metadata } from "next";
import Link from "next/link";
import PdfDownload from "./pdf-download";

export const metadata: Metadata = {
  title: "AI Search Visibility Guide for Contractors 2026 | Sequoia GEO",
  description:
    "Why your contractor website is invisible to ChatGPT, Perplexity, and Google AI Overviews, and what to fix. Free guide covering the 5 signals AI uses to recommend businesses.",
  alternates: {
    canonical: "https://www.sequoiageo.com/ai-website-seo-guide",
  },
};

const chapters = [
  { id: "how-ai-search-works", title: "Why AI search works differently" },
  { id: "five-signals", title: "The 5 signals AI uses to evaluate your website" },
  { id: "thin-website", title: "The thin website problem" },
  { id: "schema-markup", title: "Schema markup for contractors" },
  { id: "content-ai-cites", title: "Content that AI actually cites" },
  { id: "thirty-day-checklist", title: "The 30-day AI visibility checklist" },
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
            "description": "Why contractor websites get ignored by ChatGPT, Perplexity, and Google AI Overviews, and what to fix. Covers the 5 AI visibility signals, schema markup, and a 30-day checklist.",
            "author": { "@type": "Person", "name": "Aaron Husak" },
            "publisher": {
              "@type": "Organization",
              "name": "Sequoia GEO",
              "url": "https://www.sequoiageo.com"
            },
            "dateModified": "2026-04-22",
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
            Is Your Website Invisible to AI Search?{" "}
            <span className="text-[#3A9E6A]">The Fix Starts Here.</span>
          </h1>
          <p className="mt-6 text-lg text-[#C8EDD2]/70 leading-relaxed max-w-2xl mx-auto">
            A roofing contractor in Phoenix had 47 pages on his website. His agency was proud of it.
            When we asked ChatGPT who to call for roofing in Phoenix, he wasn&rsquo;t mentioned.
            Not ranking lower. Completely absent. Three of his competitors were named by name.
            His website had the traffic. It didn&rsquo;t have the authority signals AI uses to make recommendations.
          </p>
          <p className="mt-4 text-base text-[#C8EDD2]/50">
            This guide covers what those signals are and how to build them.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-[#C8EDD2]/60">
            {["6 chapters", "12 pages", "30-day checklist", "No email required"].map((s) => (
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
              <section id="how-ai-search-works" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">01</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Why AI Search Works Differently Than Google</h2>
                </div>
                <div className="prose prose-gray max-w-none space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <p>
                    Google&rsquo;s search engine ranks web pages. ChatGPT, Perplexity, and Google&rsquo;s AI Overviews do not rank pages. They recommend businesses. That is a fundamental difference that most contractors and their agencies have not caught up to yet.
                  </p>
                  <p>
                    When someone types &ldquo;best HVAC company in Fresno&rdquo; into Google, Google shows a ranked list of pages. When someone asks ChatGPT or Perplexity the same question, the AI gives a direct recommendation with reasoning attached. If your business is not in its training data or current index with sufficient authority signals, you are not in the answer at all. There is no page 2 in AI search. There is mentioned or not mentioned.
                  </p>
                  <p>
                    AI tools build their answers from a combination of sources: their training data from before a knowledge cutoff date, real-time web access for tools like Perplexity and Bing Chat, and Google&rsquo;s index for AI Overviews. Being indexed is necessary but not sufficient. Being indexed with clear authority signals for your specific service in your specific geography is what gets you recommended.
                  </p>
                  <p>
                    The other key difference is that AI search is conversational. &ldquo;Who should I call for a leaking water heater in Boise?&rdquo; is a very different query than typing &ldquo;water heater repair Boise.&rdquo; AI answers the conversational version, and the businesses that get recommended are the ones whose content mirrors how homeowners actually describe their problems. Short-form service pages optimized for exact-match keywords are not enough.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 mb-14" />

              {/* Chapter 2 */}
              <section id="five-signals" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">02</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">The 5 Signals AI Uses to Evaluate Your Website</h2>
                </div>
                <div className="prose prose-gray max-w-none space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <p>
                    After analyzing hundreds of contractor websites against their AI search visibility, these five signals consistently determine whether a business gets recommended or ignored:
                  </p>
                  <div className="space-y-5 mt-4 not-prose">
                    {[
                      {
                        n: 1,
                        label: "Content depth",
                        desc: "Does your website have substantive pages about each service you offer? Not 200-word placeholders but real explanations of the process, what homeowners should expect, how you price, and what makes your approach different. Thin pages get ignored. Pages that answer real questions get cited."
                      },
                      {
                        n: 2,
                        label: "Topical authority",
                        desc: "Do you cover your service area comprehensively? A website with pages on every service, FAQ pages, neighborhood-specific content, and comparison guides signals authority on the topic. One that has a homepage and four service pages signals a brochure."
                      },
                      {
                        n: 3,
                        label: "Entity clarity",
                        desc: "Does AI know exactly who you are, what you do, and where you operate? Your business name, services, and service area should be unmistakably clear from your homepage, About page, and structured data. Ambiguity hurts you."
                      },
                      {
                        n: 4,
                        label: "Structured data (schema markup)",
                        desc: "Machine-readable signals that tell AI explicitly: this is a plumbing company, they serve the Phoenix metro, their phone is X, they have 247 Google reviews. Without schema, AI has to infer these facts from your content and sometimes gets them wrong or ignores you entirely."
                      },
                      {
                        n: 5,
                        label: "Trust signals",
                        desc: "Reviews referenced on your site, industry associations listed, years in business stated, named employees and photos, before-and-after project documentation. AI tools are trained to recommend businesses that appear established and legitimate. Generic stock photo websites rarely clear this bar."
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
                    Here is the test: open your website and count pages that have more than 400 words of real content. Service pages, About pages, FAQ pages, location pages. Count only pages where a homeowner would learn something they did not already know. If you have fewer than 20 of those pages, you have a thin website, and AI search has almost nothing to build a recommendation from.
                  </p>
                  <p>
                    Compare your website to what a fully built-out contractor presence looks like: individual service pages (not one page listing all services), FAQ pages answering specific homeowner questions by service type, location or neighborhood pages for the cities in your service area, process pages explaining how estimates work and what to expect on a first visit, comparison content (heat pump vs. furnace, tankless vs. tank water heater), and content that addresses the real anxiety homeowners have before calling a contractor.
                  </p>
                  <p>
                    Most contractor websites were built in two weeks by an agency that wanted to ship something and get paid. They are fine for ranking on Google for a handful of exact-match keywords. They are not enough to be recommended by AI to someone asking a natural-language question about who to trust with a $8,000 HVAC replacement.
                  </p>
                  <p>
                    The fix is not a redesign. It is adding content systematically over 90 days. Start with your highest-revenue services. Write pages that answer the ten questions homeowners actually search before hiring someone for that job. Use the specific language homeowners use, not trade terminology. Each page becomes a citation candidate. None of it requires a new website.
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
                    Schema markup is code on your website that tells search engines and AI tools exactly what your business is. It is not visible to visitors but it is one of the clearest authority signals you can give to AI search. Most contractor websites have none.
                  </p>
                  <p>
                    The three schema types that matter most for contractors:
                  </p>
                  <div className="space-y-4 not-prose mt-4">
                    {[
                      {
                        type: "LocalBusiness (or HVACBusiness, Plumber, etc.)",
                        desc: "Declares your business name, address, phone number, service area, hours, and review data in machine-readable format. This is the foundation. Every contractor website should have this on the homepage."
                      },
                      {
                        type: "Service schema",
                        desc: "Describes specific services you offer. An HVAC company should have Service schema on each service page: AC installation, furnace repair, heat pump installation, and so on. This tells AI exactly what work you do, not just that you are in the HVAC business."
                      },
                      {
                        type: "FAQPage schema",
                        desc: "Marks up question-and-answer content so AI can directly pull your answers into its responses. A plumbing company with FAQPage schema on their water heater page, answering \"how long does tankless water heater installation take\" and \"what size unit do I need,\" is positioned to have their answer cited when someone asks ChatGPT those questions."
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
                    You do not need a developer to implement basic schema. Next.js, WordPress, and most modern website platforms make it straightforward to add JSON-LD schema in the head section of your pages. Start with LocalBusiness schema on your homepage, then add FAQPage schema to your top three service pages. Add Service schema page by page as you build out your content.
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
                    There is a specific type of content that AI tools reliably reference and recommend. It has three characteristics that separate it from the content AI ignores.
                  </p>
                  <p>
                    <strong>It answers a specific question with a specific answer.</strong> &ldquo;How much does HVAC replacement cost?&rdquo; answered with a price range, what drives the price up or down, and what a homeowner should expect to pay in your market. Not &ldquo;it depends on many factors.&rdquo; AI tools are built to answer questions directly. They prefer sources that do the same.
                  </p>
                  <p>
                    <strong>It includes verifiable details.</strong> Named brands you install, actual price ranges with context, specific data points, the year you were founded, how many jobs you have completed. AI tools are trained on the internet and they know what a real, credible answer looks like versus a vague marketing statement. Specificity is credibility.
                  </p>
                  <p>
                    <strong>It reads like it was written by someone with hands-on experience, not someone who researched what to say.</strong> First-person operational knowledge. Real trade decisions. The contractor whose FAQ page explains why they stopped recommending a specific brand after seeing repeated failures in their climate zone gets recommended. The contractor whose page says &ldquo;we offer all HVAC services for all your needs&rdquo; does not.
                  </p>
                  <p>
                    The practical application: for each of your top five services, write a page that answers the ten questions homeowners actually ask before hiring someone. Use the language homeowners use when they search. Be specific about pricing expectations, what the job entails, how long it takes, and what makes your market different. That content is what AI search pulls from.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 mb-14" />

              {/* Chapter 6 */}
              <section id="thirty-day-checklist" className="scroll-mt-8 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-[#1A5C3A]/12 leading-none">06</span>
                  <h2 className="text-2xl font-extrabold text-[#1a1a1a]">The 30-Day AI Visibility Checklist</h2>
                </div>
                <div className="space-y-5">
                  {[
                    {
                      period: "Week 1",
                      label: "Structured data foundation",
                      color: "bg-[#F5FAF7] border-[#C8EDD2]",
                      items: [
                        "Add LocalBusiness JSON-LD schema to your homepage with complete business name, address, phone, hours, service area, and review data",
                        "Verify your name, address, and phone number are identical on your website, Google Business Profile, Yelp, and any other directory listings",
                        "Add your top 3 to 5 services to your Google Business Profile services section with descriptions",
                        "Confirm your Google Business Profile has at least 10 photos and a complete business description",
                      ],
                    },
                    {
                      period: "Week 2",
                      label: "Content audit and rebuild",
                      color: "bg-[#EEF7FF] border-[#BFDBFE]",
                      items: [
                        "List every service page on your website and note the word count",
                        "Identify your top 3 revenue-generating services and assess whether each page answers real homeowner questions",
                        "Write or substantially rewrite those 3 pages: 600 words minimum, an FAQ section, what to expect during the job, and pricing context",
                        "Submit those rewritten pages to Google Search Console for indexing",
                      ],
                    },
                    {
                      period: "Week 3",
                      label: "FAQ and schema expansion",
                      color: "bg-[#FFF7ED] border-[#FED7AA]",
                      items: [
                        "Add FAQPage schema to your top 3 service pages",
                        "Write 5 to 8 Q&As per page using questions from Google's People Also Ask section for your service category and city",
                        "Check that each FAQ answer is specific, not vague. If it contains the phrase 'it depends' without a follow-up explanation, rewrite it",
                        "Submit the updated pages to Google Search Console",
                      ],
                    },
                    {
                      period: "Week 4",
                      label: "Trust and authority signals",
                      color: "bg-[#F5F3FF] border-[#DDD6FE]",
                      items: [
                        "Text review requests to your last 20 completed customers",
                        "Add any industry certifications, manufacturer authorizations, or association memberships to your About page with specific names and years",
                        "Add a team page or owner bio with real background, not generic marketing copy",
                        "After 30 days, test your visibility: ask ChatGPT 'who should I call for [your service] in [your city]?' and note whether you appear. Run monthly.",
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
                      12 pages. Start with the checklist in chapter six. Optional email capture to get occasional operator insights from Aaron.
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
            <p className="text-base font-semibold text-[#1a1a1a]">Want us to check your AI visibility?</p>
            <p className="text-sm text-gray-500 mt-1">We audit where your business appears across ChatGPT, Gemini, Perplexity, and Google AI Overviews. 3 business days. No pitch attached.</p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0D2318]"
          >
            Book a Free Strategy Call
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
