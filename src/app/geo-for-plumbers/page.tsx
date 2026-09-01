import Link from "next/link";
import BookingCalendar from "@/components/BookingCalendar";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TradeAiSearchNav from "@/components/TradeAiSearchNav";

export const metadata: Metadata = {
  title: "AI SEO for Plumbers | Plumbing AI Search Visibility",
  description:
    "AI SEO for plumbers from a founder whose home-services career began in 2006 and includes 13 years as an owner and operator. Measure each evidence stage separately.",
  alternates: {
    canonical: "https://www.sequoiageo.com/geo-for-plumbers",
  },
};

export default function GeoForPlumbersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "Services", url: "https://www.sequoiageo.com/services" },
          { name: "GEO for Plumbers", url: "https://www.sequoiageo.com/geo-for-plumbers" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Generative Engine Optimization for Plumbers",
            "provider": {
              "@type": "Organization",
              "name": "Sequoia GEO",
              "url": "https://www.sequoiageo.com",
              "telephone": "+15595213122",
            },
            "areaServed": { "@type": "Country", "name": "United States" },
            "description":
            "Evidence-first AI SEO for plumbing companies, built on crawlability, accurate public business information, first-hand plumbing evidence, independent corroboration, and staged measurement.",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is GEO for plumbers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GEO stands for Generative Engine Optimization. Sequoia uses AI SEO as the primary term for improving the crawlability, accuracy, usefulness, and corroboration of a plumbing company's public information, then measuring whether relevant AI products mention, cite, recommend, or refer a prospect to it. The foundation remains SEO, and no provider controls the answer an AI product gives.",
                },
              },
              {
                "@type": "Question",
                "name": "How is GEO different from regular plumbing SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The foundations are shared. Google says its existing SEO guidance also applies to its AI features, with no special AI schema required. AI SEO adds controlled testing across generated answers and separates mentions, recommendations, citations, visits, inquiries, and qualified leads. It does not replace plumbing SEO.",
                },
              },
              {
                "@type": "Question",
                "name": "Why does GEO matter for plumbing companies now?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Some homeowners now ask AI products who to call instead of beginning with a page of links. That creates another surface where a plumbing company may be mentioned, cited, or recommended. The responsible first step is to establish a repeatable baseline and inspect the public sources behind the answers before claiming business impact.",
                },
              },
              {
                "@type": "Question",
                "name": "How long does GEO take to work for a plumbing company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Technical corrections can be verified after deployment. Recommendation visibility is more variable, so repeated observations should be compared over 60 to 90 days after material indexing changes. Structured data can reduce ambiguity when it matches the visible page, but Google does not require special schema for its AI features and no correction guarantees a recommendation.",
                },
              },
              {
                "@type": "Question",
                "name": "Who runs GEO for plumbers at Sequoia GEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Founder Aaron Husak spent 13 years running a home services company to more than 130 employees and four Inc 5000 appearances. That operator experience keeps the work focused on accurate measurement, qualified inquiries, and jobs booked instead of treating an AI mention as a business result.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-white px-5 py-2 text-sm font-medium text-[#1A5C3A] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
              AI SEO · Plumbing Companies
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              AI SEO for Plumbers: Build a Verifiable{" "}
              <span className="text-[#1A5C3A]">AI Search Foundation</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Sequoia GEO establishes what is true, corrects conflicting public information, strengthens
              first-hand plumbing evidence, and measures how the business appears across conventional
              and AI-assisted search. GEO and AEO are industry labels. AI SEO is the broader work.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Built by Aaron Husak, who spent 13 years running a home services company to 4x Inc 5000.
              The work is filtered through what helps a contractor evaluate qualified inquiries and jobs
              booked, without treating visibility as a guaranteed outcome.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/ai-search-assessment"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Request an AI Search Visibility Review
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

      <TradeAiSearchNav currentHref="/geo-for-plumbers" />

      {/* Why it matters */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              AI-Assisted Search Creates Another Place Customers Can Ask Who to Call
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              A generated answer may mention a company, cite its page, or recommend it. Those are
              different observations, and none of them proves that an inquiry or booked job followed.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: "Generated answers are selective",
                body: "A generated answer may surface only a small provider set. Record what appears, what is cited, and whether the observation repeats before drawing a conclusion.",
              },
              {
                title: "Your reviews and reputation feed the answer",
                body: "AI products can draw from websites, business profiles, reviews, directories, and other public sources. Conflicts across those sources create avoidable ambiguity.",
              },
              {
                title: "The baseline comes before the intervention",
                body: "Freeze the commercial questions, products, geography, and observation rules before changing the website or public profiles.",
              },
              {
                title: "Corrections can be verified",
                body: "Technical releases and public-source corrections can be documented. Recommendation behavior remains variable and must be observed separately over time.",
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

      {/* What GEO for plumbers covers */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What GEO for Plumbers Involves
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every engagement starts with a check of where your plumbing company currently stands in
              AI answers. The work that follows depends on what that reveals.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI visibility check",
                body: "We query ChatGPT, Perplexity, Gemini, and Google AI Overviews with the questions your customers ask, and see whether your plumbing company is named and how you stack up against local competitors.",
              },
              {
                title: "Entity and structured-data consistency",
                body: "We align visible business information, public profiles, and supported structured data to reduce avoidable ambiguity. Structured data must match the page and does not guarantee a citation or recommendation.",
              },
              {
                title: "Citation and reputation signals",
                body: "We clean up and build your presence across the directories, review platforms, and local sources AI tools treat as credible, so the signals reinforce instead of contradict.",
              },
              {
                title: "Content built to be cited",
                body: "We create plumbing content designed to be referenced by AI, not just ranked by Google. Real expertise, specific to your services and service area.",
              },
              {
                title: "Google Business Profile depth",
                body: "Your GBP is a primary source AI tools pull from. We optimize categories, services, reviews, and posts so it feeds the right signal into AI answers.",
              },
              {
                title: "Monitoring and reporting",
                body: "We track your AI mentions over time, not just keyword rankings, so you can see whether the work is moving you into the answers that matter.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-gray-500">
            GEO works best alongside the fundamentals. See our{" "}
            <Link href="/plumbing-seo" className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]">
              plumbing SEO and marketing
            </Link>{" "}
            page for the traditional search side, and the deeper guide on{" "}
            <Link href="/blog/plumber-geo-ai-search-optimization" className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]">
              getting your plumbing business recommended by ChatGPT and Google AI
            </Link>
            .
          </p>
        </div>
      </section>

      {/* GEO vs plumbing SEO */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              GEO vs. Traditional Plumbing SEO
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              They are not the same work, and you want both. Here is the difference.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-bold text-[#1a1a1a] mb-4">Traditional Plumbing SEO</h3>
              <ul className="space-y-2">
                {[
                  "Competes for a spot on Google's list of links",
                  "Tracks keyword rankings and the Map Pack",
                  "Measures clicks and organic traffic",
                  "Wins when a homeowner picks your link",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-500">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#3A9E6A]/30 bg-[#C8EDD2]/20 p-6">
              <h3 className="text-base font-bold text-[#0D2318] mb-4">GEO for Plumbers</h3>
              <ul className="space-y-2">
                {[
                  "Tests relevant buyer questions across AI products",
                  "Separates mentions, recommendations, and citations",
                  "Reconciles public facts and source contradictions",
                  "Connects referral visits to qualified leads where tracking supports it",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#0D2318]">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-gray-500 max-w-2xl mx-auto">
            AI SEO does not replace plumbing SEO or paid ads. It adds broader observation and
            attribution so you can test whether AI-assisted discovery is producing qualified demand.
          </p>
        </div>
      </section>

      {/* Why Sequoia GEO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#fafaf8] p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
                  Run by a Home Services Operator, Not a Generalist Agency
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Sequoia GEO was named around Generative Engine Optimization and now uses AI SEO as
                  its primary public term. The practice is run by someone who
                  began working in home services in 2006 and spent 13 years as an owner and operator.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Aaron Husak grew a home services company to more than 130 employees and four Inc 5000
                  appearances before launching this agency. He knows what a booked plumbing job is worth,
                  what homeowners actually search, and why visibility must be kept separate from qualified
                  inquiries and jobs booked. That lens keeps the work centered on verified corrections and
                  accountable measurement instead of treating a screenshot as commercial proof.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "GEO", label: "Core discipline, not a bolt-on" },
                  { stat: "13 yrs", label: "Home services operator" },
                  { stat: "4x", label: "Inc 5000 (2021 to 2024)" },
                  { stat: "130+", label: "Team built from scratch" },
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

      {/* FAQ */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              GEO for Plumbers: Common Questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What is GEO for plumbers?",
                a: "GEO stands for Generative Engine Optimization. Sequoia uses AI SEO as the primary term for improving the crawlability, accuracy, usefulness, and corroboration of a plumbing company's public information, then measuring mentions, recommendations, citations, visits, inquiries, and qualified leads. No provider controls the answer an AI product gives.",
              },
              {
                q: "How is GEO different from regular plumbing SEO?",
                a: "The foundations are shared. Google says its existing SEO guidance also applies to its AI features, with no special AI schema required. AI SEO adds controlled testing across generated answers and separates visibility from visits and qualified demand. It does not replace plumbing SEO.",
              },
              {
                q: "Why does GEO matter for plumbing companies now?",
                  a: "Some homeowners ask AI products who to call instead of beginning with a page of links. That creates another surface where a plumbing company may be mentioned, cited, or recommended. Establish the baseline first and inspect the sources behind the answer before claiming business impact.",
              },
              {
                q: "How long does GEO take to work for a plumbing company?",
                a: "Technical corrections can be verified after deployment. Recommendation visibility is more variable, so repeated observations should be compared over 60 to 90 days after material indexing changes. Structured data can reduce ambiguity when it matches the visible page, but Google does not require special schema for its AI features and no correction guarantees a recommendation.",
              },
              {
                q: "Do I still need plumbing SEO if I invest in GEO?",
                a: "Yes, but not because every system uses one shared ranking formula. Google says its existing SEO fundamentals remain relevant for AI features in Search. A crawlable website, accurate business information, useful local content, and consistent public facts improve the foundation for both traditional and AI-assisted discovery. Recommendation behavior still varies by platform and cannot be guaranteed. See our plumbing SEO and marketing page for the traditional search side.",
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
      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            See Where Your Plumbing Company Stands in AI Search
          </h2>
          <p className="mt-4 text-lg text-[#C8EDD2]/80">
            We will check whether ChatGPT, Perplexity, Gemini, and Google AI name your company when
            homeowners ask who to call, show you how you compare to local competitors, and tell you
            honestly whether GEO work makes sense for you. No pitch, just data.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]">
              Get the Free AI Visibility Check
            </Link>
            <a href="tel:5595213122" className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors">(559) 521-3122</a>
          </div>
        </div>
      </section>

      {/* Booking Calendar */}
      <section className="bg-[#fafaf8] py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Schedule Your Free AI Visibility Check</h2>
            <p className="mt-2 text-gray-600">Pick a time that works for you. 15 minutes. No pitch deck.</p>
          </div>
          <BookingCalendar />
        </div>
      </section>
    </>
  );
}
