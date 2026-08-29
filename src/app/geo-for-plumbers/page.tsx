import Link from "next/link";
import BookingCalendar from "@/components/BookingCalendar";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "GEO for Plumbers: Get Your Plumbing Company Recommended in AI Search",
  description:
    "AI SEO for plumbers from a home services marketer since 2006 and 13-year owner and operator. Measure mentions, recommendations, citations, visits, and qualified leads separately.",
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
              "GEO (Generative Engine Optimization) for plumbing companies. We make plumbers visible and recommendable in ChatGPT, Perplexity, Google AI Overviews, and Gemini.",
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
                  "text": "A growing share of homeowners now ask AI tools who to call before they ever see a list of links. When ChatGPT or Google's AI Overview names two or three plumbers and yours is not one of them, you lose the job before the customer even searches the normal way. Most plumbing companies have done nothing to be visible in those answers, which means the ones that start now build a lead while their competitors are not even aware the shift is happening.",
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
                  "text": "Sequoia GEO was built around the GEO discipline, not a traditional agency that added it to a list in 2024. Founder Aaron Husak spent 13 years running a home services company to more than 130 employees and four Inc 5000 appearances, so the strategy is filtered through how a contractor actually wins jobs, not just how an AI gets a mention. That operator lens is what separates GEO that produces booked plumbing jobs from GEO that produces vanity mentions.",
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
              GEO · Plumbing Companies
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              GEO for Plumbers: Be the Name{" "}
              <span className="text-[#1A5C3A]">AI Recommends</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              When a homeowner asks ChatGPT, Perplexity, Gemini, or Google&apos;s AI Overview who to call
              for a plumber, a few company names come back. GEO (Generative Engine Optimization) is
              the work that makes yours one of them. We make plumbing companies visible and
              recommendable in AI search, not just ranked on a list of links.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Built by Aaron Husak, who spent 13 years running a home services company to 4x Inc 5000.
              Every recommendation is filtered through what actually books a plumbing job, not what
              earns a vanity mention.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Get a Free AI Visibility Check
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

      {/* Why it matters */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Homeowners Are Asking AI Who to Call
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              The search box is no longer the only front door. More plumbing leads start with a
              question typed into an AI tool, and the answer names a short list of companies. If you
              are not on it, you lose the job before the homeowner ever sees a Google result.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: "AI answers name a few, not a page of ten",
                body: "A list of links gives you ten chances to be seen. An AI answer names two or three plumbers. The math is brutal, and being invisible costs more than it used to.",
              },
              {
                title: "Your reviews and reputation feed the answer",
                body: "AI tools cross-reference your Google Business Profile, reviews, directories, and local mentions. A plumber with strong, consistent signals gets named. A fragmented presence gets skipped.",
              },
              {
                title: "Most plumbers have done nothing here",
                body: "Almost no plumbing company has worked on AI visibility. That is the opportunity. The ones who start now build a lead while competitors do not know the shift is happening.",
              },
              {
                title: "It compounds, it does not reset",
                body: "Unlike paid ads that stop the day you stop paying, GEO authority builds over time. The entity and citation work you do now keeps paying off as AI tools update.",
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
                  spent 13 years in the field.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Aaron Husak grew a home services company to more than 130 employees and four Inc 5000
                  appearances before launching this agency. He knows what a booked plumbing job is worth,
                  what homeowners actually search, and why an AI mention only matters if it puts a tech in
                  a truck. That lens is what separates GEO that produces revenue from GEO that produces
                  a screenshot.
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
                a: "A growing share of homeowners ask AI tools who to call before they see a list of links. When an AI names two or three plumbers and yours is not one of them, you lose the job before the normal search even happens. Most plumbing companies have done nothing here, so the ones who start now build a real lead.",
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
