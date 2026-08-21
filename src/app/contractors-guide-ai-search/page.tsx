import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Search for Contractors: A Practical GEO Guide | Sequoia GEO",
  description:
    "An evidence-based guide to AI search visibility for HVAC, plumbing, roofing, and other home service companies, written by a home services marketer since 2006 and 13-year owner and operator.",
  alternates: {
    canonical: "https://www.sequoiageo.com/contractors-guide-ai-search",
  },
};

const questions = [
  {
    question: "Why does an AI assistant recommend a competitor instead of my company?",
    answer:
      "The answer may be drawing from a different mix of sources, locations, wording, freshness, and trust evidence. A useful audit tests the same prompt repeatedly, records the cited sources, and checks whether your business is understandable and supported on those surfaces.",
  },
  {
    question: "Can you guarantee that ChatGPT, Gemini, or another assistant will recommend me?",
    answer:
      "No. No agency controls an assistant's answer. The work can improve crawlability, entity clarity, source coverage, factual consistency, and measurement, but a recommendation cannot be guaranteed.",
  },
  {
    question: "Is GEO different from SEO?",
    answer:
      "GEO adds recommendation and citation measurement to strong SEO foundations. The website still needs to be crawlable, indexable, useful, locally relevant, and technically sound. GEO also examines the sources assistants cite and the consistency of the business entity across the public web.",
  },
  {
    question: "How long does it take to know whether the work helped?",
    answer:
      "Technical corrections can be verified soon after deployment. Recommendation visibility is more variable, so Sequoia freezes a prompt set and compares repeated observations over 60 to 90 days instead of treating one answer as proof.",
  },
  {
    question: "How should AI recommendations be measured?",
    answer:
      "Separate visibility from demand. Track whether the business was mentioned, recommended, cited, or selected as the primary recommendation. Then separately track referred sessions, inquiries, qualified leads, and jobs booked.",
  },
];

const officialSources = [
  {
    name: "Google Search Central: AI features and your website",
    href: "https://developers.google.com/search/docs/appearance/ai-features",
    note: "Google says the same SEO fundamentals apply to its AI search features. No special AI file or schema type is required.",
  },
  {
    name: "OpenAI publisher and developer FAQ",
    href: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq",
    note: "OpenAI explains how public pages can appear in ChatGPT search and how referral traffic is identified.",
  },
  {
    name: "Bing Webmaster Tools: AI Performance",
    href: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview",
    note: "Bing's reporting connects citations, cited pages, and sampled grounding queries.",
  },
];

export default function ContractorsGuideAISearchPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Search for Contractors: A Practical GEO Guide",
    description:
      "An evidence-based guide to AI search visibility for HVAC, plumbing, roofing, and other home service companies.",
    author: {
      "@type": "Person",
      name: "Aaron Husak",
      url: "https://www.sequoiageo.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Sequoia GEO",
      url: "https://www.sequoiageo.com",
    },
    datePublished: "2026-04-18",
    dateModified: "2026-08-20",
    mainEntityOfPage: "https://www.sequoiageo.com/contractors-guide-ai-search",
  };

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-[#1A5C3A] transition-colors hover:text-[#0D2318]"
          >
            ← Back to Sequoia GEO
          </Link>
          <Link
            href="/ai-seo-pricing"
            className="text-sm font-semibold text-[#1A5C3A] transition-colors hover:text-[#0D2318]"
          >
            View GEO pricing
          </Link>
        </div>
      </div>

      <section className="bg-[#0D2318]">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
          <p className="section-overline mb-4 text-[#3A9E6A]">2026 field guide</p>
          <h1 className="text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI search for contractors, without the hype
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-medium leading-snug text-[#C8EDD2]">
            How home service companies can become easier to understand, verify, cite, and recommend
            across AI-assisted search.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#C8EDD2]/75">
            Written by Aaron Husak, in home services since 2006 and an owner and operator for 13 years, who now works one-on-one with
            businesses on search visibility, lead measurement, and the path from inquiry to booked job.
          </p>
          <p className="mt-5 text-sm tracking-wide text-[#C8EDD2]/50">
            Updated August 20, 2026 · 12 minute read
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="prose prose-gray max-w-none">
          <p className="lead">
            AI search is already producing calls for Sequoia GEO. The useful lesson is not that every
            contractor needs a new acronym. It is that a prospect who asks an assistant for a provider
            often arrives with more trust than a prospect who clicked a conventional list of links.
          </p>

          <div className="not-prose my-10 rounded-2xl border border-[#C8EDD2] bg-[#F5FAF7] p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#1A5C3A]">The short version</p>
            <p className="mt-3 text-lg font-semibold leading-relaxed text-[#0D2318]">
              Strong GEO work makes the business clear and credible across the sources an assistant can
              access, then measures whether that visibility creates qualified demand. It does not promise
              control over an AI answer.
            </p>
          </div>

          <h2>What an AI recommendation actually depends on</h2>
          <p>
            There is no single ranking factor for every assistant. The answer can change when the user,
            location, wording, date, search index, or available sources change. That is why a single prompt
            run is an observation, not a result.
          </p>
          <p>For a local business, the controllable work usually falls into five areas:</p>

          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Crawl and index access", "Important pages must be available to the relevant search crawlers and included in a healthy search index."],
              ["Entity clarity", "The business name, operator, services, locations, contact details, and relationships should be explicit and consistent."],
              ["First-hand evidence", "Original experience, named processes, project documentation, pricing context, and verified outcomes give a source something useful to contribute."],
              ["Public corroboration", "Profiles, licenses, reviews, associations, news coverage, directories, and other independent sources can support or contradict the website."],
              ["Answer usefulness", "Pages should answer the questions buyers actually ask, in language that is specific enough to quote or cite."],
              ["Measurement discipline", "Recommendation observations, citations, referred visits, inquiries, qualified leads, and jobs booked must remain separate stages."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-base font-bold text-[#0D2318]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
              </div>
            ))}
          </div>

          <h2>Start with the questions customers ask</h2>
          <p>
            Publishing dozens of pages generated from prompt variations is not the strategy. Google warns
            against scaled, low-value content. Start with questions heard on real sales calls, in customer
            emails, during estimates, and in search data. Then answer them with first-hand operating detail.
          </p>
          <p>Useful home service question groups include:</p>
          <ul>
            <li>Who should I call for this problem in my city, and why?</li>
            <li>What should this repair or replacement cost in this market?</li>
            <li>Should I repair or replace the equipment?</li>
            <li>Which option is appropriate for my home, climate, or budget?</li>
            <li>What licenses, warranties, reviews, and insurance should I verify?</li>
            <li>How long should the work take, and what happens before the crew arrives?</li>
            <li>What is different about this company&apos;s process?</li>
          </ul>
          <p>
            The strongest answer is usually not the longest. It is the answer that states the conclusion,
            explains the factors, names the limits, and shows why the writer knows.
          </p>

          <h2>Structured data helps clarity, but it is not an AI switch</h2>
          <p>
            Accurate Organization, LocalBusiness, Person, Service, and Article structured data can reduce
            ambiguity and support search features when the markup matches the visible page. Google says no
            special schema markup is required for its generative AI features. Adding FAQ markup also does not
            guarantee that an assistant will cite the answer.
          </p>
          <p>
            Treat structured data as a machine-readable version of facts a visitor can already verify. Do not
            add review totals, locations, services, awards, or relationships that are not supported on the page.
          </p>

          <h2>A 60 to 90 day measurement method</h2>
          <p>
            Recommendation testing needs a stable baseline. Freeze a small prompt set by buyer problem,
            industry, and geography. Run each prompt repeatedly in a controlled environment and keep the
            platforms separate. Record the wording, date, location context, answer position, citations, and
            whether the business was mentioned, recommended, selected first, or absent.
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="grid grid-cols-[1fr,1.4fr] bg-[#0D2318] px-5 py-3 text-sm font-bold text-white">
              <span>Stage</span>
              <span>What counts</span>
            </div>
            {[
              ["Visibility", "A page is crawled, indexed, cited, or shown in an AI visibility report."],
              ["Recommendation", "The business is named as a provider the user should consider."],
              ["Referral", "A visit arrives from a known assistant referral or a prospect reports the source."],
              ["Inquiry", "A form, call, email, or booking request is captured."],
              ["Qualified lead", "A real business has an addressable need, decision authority, and a viable service fit."],
              ["Outcome", "The lead holds a meeting, accepts an engagement, or produces a job booked."],
            ].map(([stage, definition]) => (
              <div key={stage} className="grid grid-cols-[1fr,1.4fr] border-t border-gray-100 px-5 py-4 text-sm">
                <span className="font-semibold text-[#0D2318]">{stage}</span>
                <span className="leading-relaxed text-gray-600">{definition}</span>
              </div>
            ))}
          </div>

          <p>
            Do not promote an impression, mention, citation, or visit into a lead. When a prospect voluntarily
            says an AI assistant recommended the business, preserve the exact wording and source artifact when
            available. That is recommendation evidence, not proof that every similar user saw the same answer.
          </p>

          <h2>What to inspect before changing the website</h2>
          <ol>
            <li>Test whether search and AI crawlers can fetch the important pages.</li>
            <li>Check Google and Bing index coverage rather than relying on a crawler alone.</li>
            <li>Compare the website entity facts with Google Business Profile, Bing Places, LinkedIn, Facebook, licenses, and major directories.</li>
            <li>Identify which sources the assistants cite for the frozen prompt set.</li>
            <li>Review whether the service pages answer buyer questions with original evidence.</li>
            <li>Verify that referred sessions, form submissions, calls, meetings, and qualified leads are measured separately.</li>
          </ol>

          <h2>Common questions about GEO and AI SEO</h2>
        </div>

        <div className="mt-8 space-y-4">
          {questions.map((item) => (
            <details key={item.question} className="group rounded-xl border border-gray-200 bg-white p-5">
              <summary className="cursor-pointer list-none pr-6 text-base font-bold text-[#0D2318]">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="prose prose-gray mt-14 max-w-none">
          <h2>Primary sources used for this guide</h2>
          <p>
            Platform guidance changes. These first-party sources are a better foundation than screenshots,
            engagement claims, or confident theories repeated on social media.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {officialSources.map((source) => (
            <a
              key={source.name}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl border border-gray-200 bg-white p-5 transition hover:border-[#3A9E6A]"
            >
              <p className="font-bold text-[#1A5C3A]">{source.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{source.note}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-200 pt-10">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0D2318] text-lg font-black text-white">
              AH
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1a1a1a]">Aaron Husak</p>
              <p className="text-sm font-medium text-[#1A5C3A]">Founder, Sequoia GEO</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Aaron spent 13 years operating and scaling a home services company to more than 130
                employees and four Inc. 5000 appearances. Sequoia GEO clients work directly with Aaron,
                not an account manager.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20 lg:px-8">
          <p className="section-overline mb-4 text-[#3A9E6A]">See the evidence</p>
          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl">
            Find out what AI assistants can verify about your business
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#C8EDD2]/75">
            Start with a public-surface audit, then decide whether the constraint is entity consistency,
            source coverage, website content, technical access, or measurement.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-7 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
            >
              Request a Public-Surface Audit
            </Link>
            <Link
              href="/case-studies/ai-search-readiness"
              className="inline-flex items-center justify-center rounded-lg border border-[#C8EDD2]/30 px-7 py-4 text-base font-semibold text-white transition hover:border-[#C8EDD2]"
            >
              Read the AI Readiness Field Note
            </Link>
          </div>
          <p className="mt-5 text-sm text-[#C8EDD2]/55">
            Need the scope first? <Link href="/ai-seo-pricing" className="underline hover:text-white">Review GEO pricing.</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
