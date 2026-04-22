import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing SEO & Marketing | Sequoia GEO: Revenue-Focused Growth",
  description:
    "Roofing marketing managed to booked jobs, not leads. 13 years as a licensed home services operator. I connect your ad spend to actual closed revenue, not impressions.",
  alternates: {
    canonical: "https://www.sequoiageo.com/roofing-seo",
  },
};

export default function RoofingSeoPage() {
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
                "name": "How long does roofing SEO take to produce results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Roofing SEO typically produces measurable ranking improvements within 3 to 6 months, with significant revenue impact at the 6 to 12 month mark. Roofing companies in smaller markets often see faster results. In highly competitive urban markets, plan for a 9 to 12 month runway before organic search surpasses paid advertising as a lead volume driver."
                }
              },
              {
                "@type": "Question",
                "name": "How much does roofing SEO cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Roofing SEO cost typically ranges from $1,500 to $5,000 per month for a full-service engagement that includes keyword research, content development, technical SEO, link building, and Google Business Profile management. The right question is not how much does roofing SEO cost but what does roofing SEO produce - because a well-executed roofing SEO program should produce a positive return on investment within 12 months."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need roofing SEO if I am already running Google Ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Google Ads delivers immediate visibility but stops producing leads the moment you stop paying. Roofing SEO builds sustainable organic rankings that produce organic traffic without ongoing per-click costs. Roofing companies that invest in SEO alongside paid search build a diversified lead generation foundation that is more resilient and more cost-effective long-term. Organic search results typically convert at higher rates than paid ads because potential customers trust them more."
                }
              },
              {
                "@type": "Question",
                "name": "What makes a roofing SEO agency different from a general SEO agency?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A roofing SEO agency understands the seasonal demand patterns, storm-driven lead spikes, insurance claim workflows, and high-ticket sales cycles specific to the roofing industry. A general SEO agency applies the same template across every industry and misses the nuances that matter in roofing markets. Ask any SEO agency you evaluate for roofing-specific case studies with revenue outcomes before you commit."
                }
              },
              {
                "@type": "Question",
                "name": "What roofing SEO results should I realistically expect?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For most roofing companies starting from a weak organic baseline, realistic targets include page one rankings for 10 to 15 primary roofing keywords within 6 months, measurable increases in organic traffic and phone call volume by month 3, and a positive revenue return on SEO investment within 12 months."
                }
              },
              {
                "@type": "Question",
                "name": "What roofing keywords should I be targeting first?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Start with the keywords that produce the highest-margin jobs in your market: roof replacement, roof installation, and hail damage repair generate the highest average tickets and justify the SEO investment fastest. Emergency keywords like roof leak repair and emergency roofing produce faster conversions but at lower ticket values. A complete roofing keyword research strategy maps both high-ticket and high-urgency queries to dedicated service pages so you capture demand at every buyer stage."
                }
              },
              {
                "@type": "Question",
                "name": "How does storm damage affect roofing SEO strategy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Storm events create temporary search demand spikes that roofing companies with strong existing organic visibility capture at zero additional cost. Companies without organic rankings cannot build them fast enough to benefit after a storm. The strategy is to build local search visibility and domain authority before storm season so that when search volume spikes, your roofing company appears above competitors who only relied on paid advertising."
                }
              },
              {
                "@type": "Question",
                "name": "How do I know if my roofing SEO agency is actually performing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ask for reporting that connects organic traffic to booked roofing jobs, not just click and impression data. A performing roofing SEO program shows increasing organic traffic to service pages, growing phone call volume from organic search, and a declining cost per acquired roofing customer over time. If your agency cannot show you these numbers, the program is not being managed with revenue accountability."
                }
              },
              {
                "@type": "Question",
                "name": "What are the most important factors in roofing SEO that most agencies overlook?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The factors most agencies overlook are the ones that connect search visibility to actual revenue. Optimized listings across local business directories ensure consistent NAP data that local search algorithms depend on. High quality leads from organic search convert at higher rates than paid leads - but only if the roofing website loads fast on mobile devices and the phone is answered correctly. Online reputation management, including systematic review generation and building relationships with past customers for referrals, drives the brand visibility that compounds local search rankings over time."
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
              Roofing Marketing
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Roofing SEO That Connects to{" "}
              <span className="text-[#1A5C3A]">Revenue, Not Reports</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Most roofing marketing agencies report on rankings and leads. I report on cost per booked job,
              booking rate by lead source, and average ticket by channel. That&rsquo;s the difference between
              an agency and someone who&rsquo;s run a home services company.
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

      {/* What's different */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What Your Roofing Marketing Is Missing
            </h2>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: "Lead-to-booked job conversion",
                body: "How many of your roofing leads actually become scheduled inspections? The industry average is under 50%. If yours is worse, more ad spend makes the problem bigger, not smaller.",
              },
              {
                title: "Average ticket by channel",
                body: "Storm leads close at different tickets than organic search leads. Insurance vs. retail vs. maintenance: I track which channels produce your most profitable work.",
              },
              {
                title: "Review velocity vs. competitors",
                body: "In roofing, review recency matters more than total count. I'll show you exactly how your review pace compares to the top 3 Map Pack competitors in your market.",
              },
              {
                title: "Off-season lead strategy",
                body: "Most roofing companies go quiet in winter. I build the pipeline now so you're first when spring hits. Organic visibility compounds. Paid ads don't.",
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

      {/* Services list */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Roofing Marketing, End to End
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every channel tied to closed revenue, not just lead volume.
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Google Ads for roof replacement & repair",
              "Local Service Ads management",
              "Google Business Profile optimization",
              "Map Pack ranking strategy",
              "Storm season campaign surge management",
              "Review generation systems",
              "Roofing web design and site speed optimization",
              "Website conversion optimization",
              "Local business listings and citation management",
              "Lead source ROI tracking",
              "AI search visibility (ChatGPT, Perplexity)",
              "Insurance lead strategy",
              "Call tracking & booking rate analysis",
              "Off-season organic pipeline building",
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

      {/* Credentials */}
      <section className="bg-[#fafaf8] py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-white p-8 shadow-sm text-center">
            <h2 className="text-xl font-extrabold text-[#1a1a1a]">About Aaron Husak</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600 max-w-2xl mx-auto">
              California Licensed Contractor (B General, C-2, C-20 HVAC, C-36 Plumbing). I built{" "}
              <strong>Balanced Comfort</strong> from a one-truck startup to <strong>130+ employees</strong> over a decade in <strong>home services</strong>.{" "}
              <strong>4x Inc 5000</strong> honoree. I started <strong>Sequoia GEO</strong> to provide{" "}
              <strong>digital marketing</strong> services built around operator metrics: <strong>closed jobs</strong>,{" "}
              <strong>cost per booked job</strong>, and <strong>revenue</strong> per channel. Not impressions. Not rankings alone.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["B General", "C-2", "C-20 HVAC", "C-36 Plumbing", "4x Inc 5000"].map((c) => (
                <span key={c} className="rounded-full bg-[#C8EDD2] px-4 py-1.5 text-sm font-medium text-[#0D2318]">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Roofing SEO Requires */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Roofing SEO Actually Requires
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Roofing SEO is a specialized discipline. Here are the four pillars that determine whether roofing
              companies rank or get buried.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Local SEO and Google Business Profile",
                body: "Local SEO is the foundation of roofing SEO. Map Pack rankings require a fully optimized Google Business Profile, consistent local citations, and location-specific service pages for every city you serve. Roofing companies that skip local SEO fundamentals cannot compete in organic search regardless of how good their roofing website looks.",
              },
              {
                title: "Roofing Keyword Research",
                body: "Effective roofing keyword research targets three categories: high-intent transactional keywords (&ldquo;roof replacement cost&rdquo;), informational roofing keywords (&ldquo;how long does roof replacement take&rdquo;), and local roofing keywords (&ldquo;roofing contractors in [city]&rdquo;). Targeting only the highest-volume roofing keywords misses the most profitable search opportunities.",
              },
              {
                title: "Technical SEO and Page Speed",
                body: "Technical SEO addresses the infrastructure of your roofing website. Missing title tags, broken internal links, slow page speed, and improper mobile optimization are ranking suppressors that silently undermine every other SEO effort. Proper SEO optimization of your site&rsquo;s technical foundation is what allows all your content and link building work to actually rank. More than 60% of roofing searches happen on mobile devices &ndash; a slow roofing website is a direct revenue leak.",
              },
              {
                title: "Link Building and Online Reputation",
                body: "High quality backlinks from local and roofing-industry sources signal trust to search engines. Roofing companies that earn 2&ndash;3 new backlinks per month consistently outrank competitors with similar websites but weaker link profiles. Online reviews compound this effect &ndash; review velocity directly affects both Map Pack rankings and conversion rates from every traffic source.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8EDD2]">
                    <svg className="h-4 w-4 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
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

      {/* Roofing SEO Tips */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Roofing SEO Tips That Actually Move the Needle
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tactical improvements roofing business owners can implement now.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Build a City-Specific Service Page for Every Market You Serve",
                body: "A single &ldquo;service area&rdquo; page does not rank for city-specific roofing queries. Roofing companies that serve multiple cities need a dedicated landing page for each one, targeting local keywords like &ldquo;roofing contractors in [city]&rdquo; and &ldquo;roof replacement [city].&rdquo; These local pages are the highest-converting pages on any roofing website because they capture search traffic from potential customers who are specifically looking for roofing companies in their city.",
              },
              {
                step: "02",
                title: "Earn Reviews Faster Than Your Closest Competitors",
                body: "Google Maps rankings are heavily influenced by review recency, not just total count. A roofing company with 200 reviews and 10 in the last 30 days will outrank a competitor with 800 reviews and 2 in the last 30 days. Build a system that asks every satisfied roofing customer for a review within 24 hours of job completion. Consistent review velocity is one of the most powerful local SEO signals a roofing business can build.",
              },
              {
                step: "03",
                title: "Track Every Lead Back to Revenue, Not Just Clicks",
                body: "Roofing SEO success is not measured in organic traffic or keyword rankings alone. Connect your SEO program to call tracking and CRM data so you know exactly which roofing keywords are producing booked jobs, what the average ticket is by channel, and whether your SEO investment is generating a positive return. Digital marketing strategies that cannot demonstrate ROI at the revenue level should not survive budget reviews.",
              },
              {
                step: "04",
                title: "Invest in Mobile Speed Before Anything Else",
                body: "More than 60% of roofing searches happen on mobile devices. If your roofing website loads slowly on cellular or is difficult to navigate on a phone, you are losing potential customers before they ever read your offer. Page speed is a direct ranking signal in Google&rsquo;s algorithm. Improving mobile performance is often the highest-ROI technical SEO investment a roofing company can make, and it is frequently the most neglected.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1A5C3A] text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing SEO FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Roofing SEO Questions I Get Asked Every Week
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "How long does roofing SEO take to produce results?",
                a: "Roofing SEO typically produces measurable ranking improvements within 3 to 6 months, with significant revenue impact at the 6 to 12 month mark. Roofing companies in smaller markets often see faster results. In highly competitive urban markets, plan for a 9 to 12 month runway before organic search surpasses paid advertising as a lead volume driver.",
              },
              {
                q: "How much does roofing SEO cost?",
                a: "Roofing SEO cost typically ranges from $1,500 to $5,000 per month for a full-service engagement that includes keyword research, content development, technical SEO, link building, and Google Business Profile management. The right question is not &ldquo;how much does roofing SEO cost&rdquo; but &ldquo;what does roofing SEO produce&rdquo; &ndash; because a well-executed roofing SEO program should produce a positive return on investment within 12 months.",
              },
              {
                q: "Do I need roofing SEO if I&rsquo;m already running Google Ads?",
                a: "Yes. Google Ads delivers immediate visibility but stops producing leads the moment you stop paying. Roofing SEO builds sustainable organic rankings that produce organic traffic without ongoing per-click costs. Roofing companies that invest in SEO alongside paid search build a diversified lead generation foundation that is more resilient and more cost-effective long-term. Organic search results typically convert at higher rates than paid ads because potential customers trust them more.",
              },
              {
                q: "What makes a roofing SEO agency different from a general SEO agency?",
                a: "A roofing SEO agency understands the seasonal demand patterns, storm-driven lead spikes, insurance claim workflows, and high-ticket sales cycles specific to the roofing industry. A general SEO agency applies the same template across every industry and misses the nuances that matter in roofing markets. Ask any SEO agency you evaluate for roofing-specific case studies with revenue outcomes before you commit.",
              },
              {
                q: "What roofing SEO results should I realistically expect?",
                a: "For most roofing companies starting from a weak organic baseline, realistic targets include page one rankings for 10 to 15 primary roofing keywords within 6 months, measurable increases in organic traffic and phone call volume by month 3, and a positive revenue return on SEO investment within 12 months. I use Google Search Console and call tracking to measure SEO success at every stage so there are never surprises.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]" dangerouslySetInnerHTML={{ __html: item.q }} />
                <p className="mt-3 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.a }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Roofing SEO Involves */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Roofing SEO Actually Involves
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Search engine optimization for roofing companies spans local SEO, on-page content, technical
              performance, and off-page authority. Each component serves a different purpose in the buyer journey
              from roof damage awareness to calling a roofing contractor — and each drives a different mix of website traffic.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Local SEO and Google Business Profile",
                body: "<strong>Local SEO</strong> is the highest-ROI channel for most roofing companies. <strong>Google Business Profile</strong> optimization drives Map Pack visibility for the queries homeowners use when they notice roof damage or start evaluating replacement costs. Consistent reviews, accurate service categories, and service area configuration are the foundation of <strong>local search</strong> rankings that produce <strong>phone calls</strong> and convert <strong>website visitors</strong> into <strong>qualified leads</strong> before any other channel.",
              },
              {
                title: "On-Page SEO and Roofing Service Pages",
                body: "On-page <strong>SEO</strong> for roofing websites means building dedicated service pages for residential roof replacement, commercial roofing, storm damage repair, roof inspections, and emergency tarping. Each page targets the specific <strong>secondary keywords</strong> homeowners and insurance adjusters use when searching for roofing services. Thin, generic roofing pages that try to cover everything rank for nothing and convert <strong>potential customers</strong> at far lower rates.",
              },
              {
                title: "Storm Damage and Insurance SEO",
                body: "Roofing <strong>SEO</strong> must account for storm-driven demand spikes that are different from any other home service vertical. When hail storms or high winds move through a market, search volume for roofing services spikes within hours. Roofing companies with strong <strong>organic search</strong> visibility capture that demand at zero incremental ad cost. Insurance claim content and storm damage landing pages are critical components of a roofing <strong>SEO strategy</strong> that converts <strong>high quality leads</strong>.",
              },
              {
                title: "Link Building and Online Reputation",
                body: "<strong>Link building</strong> for roofing companies earns <strong>high quality</strong> backlinks from local business directories, manufacturer certifications and partner pages, home improvement platforms, and local media coverage of storm events. <strong>Online reputation</strong> management and <strong>building relationships</strong> with past customers through review requests builds the <strong>brand visibility</strong> that converts <strong>search results</strong> traffic into calls. Domain authority accumulated through consistent link building determines which roofing companies rank above their competitors.",
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
                    <p className="mt-2 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing SEO Strategy */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Roofing SEO Strategy: Ranking Before the Storm Hits
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The roofing companies that win after storm events are the ones who built their organic search
              visibility before any damage occurred. You cannot start SEO after hail hits and expect to benefit
              from the search volume spike.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "Keyword Research for Roofing Buyer Intent",
                body: "Roofing <strong>keyword research</strong> covers four buyer stages: awareness (damage signs, roof age questions), consideration (cost estimates, contractor evaluation), emergency (storm damage, active leak), and insurance (claim process, adjuster questions). Each stage requires different content and different service pages targeting <strong>secondary keywords</strong>. A complete roofing <strong>SEO strategy</strong> builds <strong>organic traffic</strong> across the full buyer journey, capturing <strong>potential customers</strong> at every stage.",
              },
              {
                number: "02",
                title: "Content Marketing for Long-Form Authority",
                body: "<strong>Content marketing</strong> for roofing companies builds <strong>organic search</strong> traffic through informational content that answers the questions homeowners ask before calling a roofer: how long does a roof last, what does hail damage look like, how does a roofing insurance claim work. This content builds domain authority, attracts <strong>high quality</strong> backlinks, and builds <strong>brand visibility</strong> that positions the company as the most credible roofing contractor in the <strong>local search</strong> results.",
              },
              {
                number: "03",
                title: "Reputation Management and Review Strategy",
                body: "<strong>Online reputation</strong> management is a conversion signal and a local ranking signal for roofing companies. Homeowners evaluating roofing contractors compare reviews before calling. <strong>Building relationships</strong> with past customers through a systematic review generation process consistently builds the <strong>online reputation</strong> that converts <strong>search results</strong> traffic to <strong>phone calls</strong>. Review velocity and recency matter more than total count for most roofing <strong>local SEO</strong> programs.",
              },
              {
                number: "04",
                title: "Roofing SEO Reporting That Tracks Revenue",
                body: "Most roofing <strong>SEO</strong> reports track rankings and <strong>organic traffic</strong>. Revenue-focused reporting connects <strong>organic search</strong> sessions to <strong>phone calls</strong>, calls to booked appointments, and appointments to contracted roofing jobs. That tracking infrastructure requires <strong>Google Analytics</strong>, Google Search Console, <strong>call tracking</strong> with keyword attribution, and CRM integration. <strong>Marketing ROI</strong> measured at the job level &mdash; not the click level &mdash; is the only number that tells you whether your <strong>marketing investment</strong> is producing <strong>revenue</strong>.",
              },
            ].map((item) => (
              <div key={item.number} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <div className="mb-4 text-4xl font-black text-[#C8EDD2]">{item.number}</div>
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing SEO Extended FAQ */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              More Roofing SEO Questions
            </h2>
          </div>
          <div className="space-y-5">
            {[
              {
                q: "What roofing keywords should I be targeting first?",
                a: "Start with the keywords that produce the highest-margin jobs in your market: roof replacement, roof installation, and hail damage repair generate the highest average tickets and justify the SEO investment fastest. Emergency keywords like 'roof leak repair' and 'emergency roofing' produce faster conversions but at lower ticket values. A complete roofing keyword research strategy maps both high-ticket and high-urgency queries to dedicated service pages so you capture demand at every buyer stage. This is the foundation of search engine optimization that produces revenue, not just rankings.",
              },
              {
                q: "How does storm damage affect roofing SEO strategy?",
                a: "Storm events create temporary search demand spikes that roofing companies with strong existing organic visibility capture at zero additional cost. Companies without organic rankings cannot build them fast enough to benefit after a storm. The strategy is to build local search visibility and domain authority before storm season so that when search volume spikes, your roofing company appears above competitors who only relied on paid advertising.",
              },
              {
                q: "How do I know if my roofing SEO agency is actually performing?",
                a: "Ask for reporting that connects organic traffic to booked roofing jobs, not just click and impression data. A performing roofing SEO program shows increasing organic traffic to service pages, growing phone call volume from organic search, and a declining cost per acquired roofing customer over time. If your agency cannot show you these numbers, the program is not being managed with revenue accountability.",
              },
              {
                q: "What are the most important factors in roofing SEO that most agencies overlook?",
                a: "The factors most agencies overlook are the ones that connect search visibility to actual revenue. Optimized listings across local business directories ensure consistent NAP data that local search algorithms depend on. High quality leads from organic search convert at higher rates than paid leads — but only if the roofing website loads fast on mobile devices and the phone is answered correctly. Online reputation management, including systematic review generation and building relationships with past customers for referrals, drives the brand visibility that compounds local search rankings over time. Most roofing SEO agencies optimize the website and forget the full picture.",
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
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
              More Home Services Marketing
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Roofing SEO works best as part of a coordinated digital marketing strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Local Services Ads", href: "/lsa-management" },
              { label: "HVAC SEO", href: "/hvac-seo" },
              { label: "Plumbing SEO", href: "/plumbing-seo" },
              { label: "Fractional CMO", href: "/fractional-cmo" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-[#fafaf8] px-5 py-4 text-sm font-semibold text-[#1A5C3A] shadow-sm hover:border-[#3A9E6A]/40 hover:shadow-md transition"
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

      {/* CTA */}
      <section className="bg-[#1A5C3A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Find out what your roofing marketing is actually producing
          </h2>
          <p className="mt-4 text-lg text-[#C8EDD2]/80">
            Start with the Full Picture Audit. I&rsquo;ll look at your spend, your booking rate, your
            phone handling, and your revenue. You&rsquo;ll know exactly where the leaks are before we spend anything new.
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
