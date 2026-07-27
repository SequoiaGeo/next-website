import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT Ads Management | Sequoia GEO: OpenAI Ads for Your Business",
  description:
    "ChatGPT Ads management from a small marketing practice already running campaigns in OpenAI's ads platform. Pixel installation, conversion tracking, ad copy, and campaign management.",
  alternates: {
    canonical: "https://www.sequoiageo.com/chatgpt-ads",
  },
};

export default function ChatGptAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sequoia GEO",
            "description": "Small marketing practice in Fresno, CA managing ChatGPT Ads, Google Ads, local SEO, and AI search visibility for service businesses. Founded by a 4x Inc 5000 operator.",
            "url": "https://www.sequoiageo.com",
            "telephone": "+15595213122",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Fresno",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "founder": {
              "@type": "Person",
              "name": "Aaron Husak"
            },
            "sameAs": [
              "https://www.sequoiageo.com"
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "ChatGPT Ads Management",
            "serviceType": "OpenAI ChatGPT advertising campaign management",
            "description": "Full setup and management of advertising campaigns in OpenAI's ChatGPT ads platform: conversion pixel installation, conversion event tracking, ad copywriting, targeting configuration, and ongoing campaign management.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Sequoia GEO",
              "telephone": "+15595213122",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Fresno",
                "addressRegion": "CA",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            }
          })
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
                "name": "What are ChatGPT ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ChatGPT ads are sponsored placements that appear alongside ChatGPT's responses for people using the free and Go tiers of ChatGPT. Each ad is clearly labeled as sponsored and displayed separately from the answer itself. OpenAI began testing ads in early 2026 and opened the platform to advertisers of every size in July 2026."
                }
              },
              {
                "@type": "Question",
                "name": "Who sees ads in ChatGPT?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As of July 2026, ads are shown to ChatGPT users on the free tier and the lower-cost Go tier. Subscribers on Plus, Pro, Business, and Enterprise plans do not see ads. OpenAI also excludes users under 18 and conversations it classifies as sensitive."
                }
              },
              {
                "@type": "Question",
                "name": "How does ChatGPT ad targeting work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There is no keyword bidding. Campaigns combine geographic targeting with conversational context: you describe the customer you want to reach in plain language, and the system matches your ads to relevant conversations. OpenAI states that ads do not change the answers ChatGPT gives."
                }
              },
              {
                "@type": "Question",
                "name": "How much do ChatGPT ads cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The platform supports cost-per-click, cost-per-impression, and cost-per-conversion bidding. As of July 2026, campaigns require a minimum daily budget of 25 dollars, and you control total spend with your own caps. Because the platform is new, there is no reliable long-term benchmark data on click costs yet, and any provider quoting average costs today is working from weeks of data, not years."
                }
              },
              {
                "@type": "Question",
                "name": "Can you show ROI numbers from ChatGPT ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not yet, and neither can anyone else being honest. The platform opened to all advertisers in July 2026. What we do instead is wire the OpenAI conversion pixel and a defined conversion event before any money is spent, so every dollar is measured from day one, and report exactly what the campaign produced. If the numbers do not work, we say so and stop."
                }
              },
              {
                "@type": "Question",
                "name": "Why start ChatGPT ads now instead of waiting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Three reasons. Fewer advertisers are competing for the same placements today than there will be once the channel matures. Account learnings compound, so the businesses testing now will know what works in their category before the crowd arrives. And your potential customers are already asking ChatGPT the questions your business answers. The honest counterweight: it is a new channel, so it should be tested with a controlled budget, not bet on."
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
              OpenAI ChatGPT Ads: New Channel
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              ChatGPT Ads, Managed by Someone{" "}
              <span className="text-[#1A5C3A]">Already Running Them</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              OpenAI opened ChatGPT advertising to businesses of every size in July 2026. Most
              marketers are still reading about it. We have live campaigns, working pixels, and
              conversion tracking wired on real websites, including the one you are on right now.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Talk About ChatGPT Ads
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

      {/* Why now */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Why the Timing Matters
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              Every advertising channel has an early window. Google Ads had one. Facebook had one.
              This is what the ChatGPT window looks like right now.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: "Low competition, for now",
                body: "The platform opened to all advertisers in July 2026. Most businesses have not moved yet. Fewer advertisers competing for the same placements is a structural advantage that will not last.",
              },
              {
                title: "Your buyers are already there",
                body: "People ask ChatGPT who to hire, what to buy, and how to solve problems your business solves. The conversations are happening whether or not your business shows up in them.",
              },
              {
                title: "Account learnings compound",
                body: "The businesses testing now will know which copy, targeting, and offers work in their category before the crowd arrives. That knowledge is earned with reps, not bought later.",
              },
              {
                title: "The honest caveat",
                body: "The channel is months old. Nobody has long-term performance data, and anyone promising you benchmark returns is guessing. That is exactly why we test with controlled budgets and measure everything from day one.",
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

      {/* First-hand proof strip */}
      <section className="bg-white pt-16 pb-4">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#fafaf8] p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1A5C3A] mb-3">
              We Operate in This Channel
            </p>
            <p className="text-lg font-bold text-[#1a1a1a]">
              This is not a service page written from press coverage.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              We have installed OpenAI&rsquo;s conversion pixel on two websites, wired lead
              conversion events into real forms, built a campaign for a B2B software client, and
              launched our own test campaign promoting this site. The OpenAI pixel is firing on the
              page you are reading right now. The campaigns are new, so we will not show you
              results numbers yet. What we can show you is a working setup, because we built one.
            </p>
            <Link
              href="/blog/what-are-chatgpt-ads"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
            >
              Read the full first-hand explainer
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              What Our ChatGPT Ads Management Includes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Full setup and ongoing management. Tracking comes first, spend comes second.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🧩",
                title: "Conversion Pixel Installation",
                body: "We install OpenAI's conversion pixel on your website and verify it fires correctly before a dollar is spent. We have done this on live production sites, including our own.",
              },
              {
                icon: "🎯",
                title: "Conversion Event Setup",
                body: "A pixel alone measures nothing. We wire the conversion events that matter, like a lead form submission, so the platform optimizes toward real business outcomes instead of clicks.",
              },
              {
                icon: "🏗️",
                title: "Campaign Architecture",
                body: "Budget, goal, geography, and audience structure built around your business economics. The platform targets by conversational context, and the campaign structure has to respect that.",
              },
              {
                icon: "✍️",
                title: "Ad Copy and Creative",
                body: "ChatGPT ads carry a business name, headline, description, and image. The format is compact, so the copy has to earn attention inside a conversation, not interrupt one.",
              },
              {
                icon: "🗣️",
                title: "Context Targeting",
                body: "Instead of bidding on keywords, you describe the customer you want to reach. Writing that description well is closer to knowing your buyer than operating a dashboard. That is where we spend our time.",
              },
              {
                icon: "📊",
                title: "Honest Measurement",
                body: "UTM tagging, conversion reporting, and plain-language reviews of what the spend produced. If the channel is not penciling for your business, we tell you and stop.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-100 bg-[#fafaf8] p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the platform works */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              How the ChatGPT Ads Platform Works, as of July 2026
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The platform is changing month to month. These are the facts as they stand today,
              verified against OpenAI&rsquo;s published materials and our own account.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Who sees the ads",
                body: "Ads appear for ChatGPT users on the free tier and the lower-cost Go tier. Subscribers on Plus, Pro, Business, and Enterprise plans do not see ads. OpenAI excludes users under 18 and conversations it classifies as sensitive. That still leaves the largest share of ChatGPT's audience, because most people use the product without paying for the higher tiers.",
              },
              {
                title: "What the ads look like",
                body: "Each ad carries a business name, headline, description, and image, appears in a clearly labeled sponsored unit, and sits visually separate from the answer itself. OpenAI states that ads do not change the answers ChatGPT gives. The ad rides alongside the conversation rather than inside it.",
              },
              {
                title: "How targeting works",
                body: "There is no keyword auction. Campaigns combine geographic targeting down to the postal code level with conversational context. At the ad group level you describe, in plain language, who you want to reach. The system matches your ads to conversations where that description fits. It rewards advertisers who genuinely understand their buyer.",
              },
              {
                title: "What it costs and how you pay",
                body: "The platform supports cost-per-click, cost-per-impression, and cost-per-conversion bidding, with a minimum daily budget of $25 per campaign as of July 2026. You control the caps. There is no reliable long-term data on click costs in any category yet, which is a reason to run controlled tests, not a reason to stay out.",
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

      {/* Operator credibility */}
      <section className="bg-[#f0f7f3] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl mb-6">
              I Test Channels With My Own Money Before I Bill Anyone to Manage Them
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                I run a small marketing practice. A few clients at a time, and I do the work
                myself. When OpenAI opened ChatGPT advertising in July 2026, I did not write a
                thought piece about it. I opened an account, installed the pixel on this website,
                wired the lead conversion event, and launched a campaign promoting my own business.
              </p>
              <p>
                Before this, I spent 13 years running Balanced Comfort Heating &amp; Air, growing
                it to 130+ employees and four consecutive Inc. 5000 appearances. I bought
                advertising as an owner spending my own margin, not as an account manager spending
                someone else&rsquo;s. That is the lens I bring to a brand-new channel: skeptical,
                measured, and early.
              </p>
              <p>
                The businesses that learned Google Ads in the early years bought customers at
                prices that look imaginary today. I cannot promise ChatGPT ads will repeat that
                pattern. I can make sure that if it does, you were in the room when it happened.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Talk to Aaron
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/blog/what-are-chatgpt-ads"
                className="inline-flex items-center justify-center rounded-lg border-2 border-[#1A5C3A] px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#1A5C3A] hover:text-white"
              >
                Read the ChatGPT Ads Explainer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              Who Should Test This Channel
            </h2>
          </div>
          <div className="mx-auto max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "Businesses whose customers ask ChatGPT the questions the business answers",
              "High-ticket services where one closed customer covers months of testing",
              "B2B companies selling to buyers who research with AI tools",
              "Local service companies that want a channel their competitors have not touched",
              "Businesses with a working landing page and lead capture already in place",
              "Owners who want early account history before the channel gets crowded",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-[#fafaf8] p-4">
                <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-[#3A9E6A] flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-500 leading-relaxed">
            Who should wait: businesses with no conversion tracking in place, and businesses that
            need a guaranteed cost per lead this quarter. A new channel is a test, and we will tell
            you that to your face before taking your money.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              How We Run a ChatGPT Ads Engagement
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Measurement first, spend second, honesty throughout.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                step: "01",
                title: "Tracking Before Spending",
                body: "We install the OpenAI conversion pixel on your site, wire the conversion event that matters to your business, and verify events fire correctly in a live browser session. No campaign launches until the measurement works, because unmeasured spend on a new channel is how budgets disappear.",
              },
              {
                step: "02",
                title: "Campaign Build",
                body: "Budget, bidding model, geography, and context targeting built around your customer. We write the plain-language audience description the platform uses for matching, which takes real knowledge of your buyer, and we write the ad copy: business name, headline, description, and image.",
              },
              {
                step: "03",
                title: "Controlled Test Launch",
                body: "We launch with a test budget you agree to in advance, with multiple ad variations so the test produces learning, not just spend. Before launch we set the decision rule together: the numbers that would kill the test and the numbers that would scale it.",
              },
              {
                step: "04",
                title: "Read the Results, Then Decide",
                body: "We report what the campaign actually produced in conversions and cost, in plain language. If the channel works for your business, we scale it deliberately. If it does not, we stop and put the budget where your data says it belongs. Either way, you own the account and the learnings.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <div className="shrink-0 text-3xl font-black text-[#1A5C3A]/20">{item.step}</div>
                <div>
                  <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              ChatGPT Ads Questions
            </h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-5">
            {[
              {
                q: "What are ChatGPT ads?",
                a: "ChatGPT ads are sponsored placements that appear alongside ChatGPT's responses for people using the free and Go tiers of ChatGPT. Each ad is clearly labeled as sponsored and displayed separately from the answer itself. OpenAI began testing ads in early 2026 and opened the platform to advertisers of every size in July 2026.",
              },
              {
                q: "Who sees ads in ChatGPT?",
                a: "As of July 2026, ads are shown to ChatGPT users on the free tier and the lower-cost Go tier. Subscribers on Plus, Pro, Business, and Enterprise plans do not see ads. OpenAI also excludes users under 18 and conversations it classifies as sensitive.",
              },
              {
                q: "How does ChatGPT ad targeting work?",
                a: "There is no keyword bidding. Campaigns combine geographic targeting with conversational context: you describe the customer you want to reach in plain language, and the system matches your ads to relevant conversations. OpenAI states that ads do not change the answers ChatGPT gives.",
              },
              {
                q: "How much do ChatGPT ads cost?",
                a: "The platform supports cost-per-click, cost-per-impression, and cost-per-conversion bidding. As of July 2026, campaigns require a minimum daily budget of $25, and you control total spend with your own caps. Because the platform is new, there is no reliable long-term benchmark data on click costs yet, and any provider quoting average costs today is working from weeks of data, not years.",
              },
              {
                q: "Can you show ROI numbers from ChatGPT ads?",
                a: "Not yet, and neither can anyone else being honest. The platform opened to all advertisers in July 2026. What we do instead is wire the OpenAI conversion pixel and a defined conversion event before any money is spent, so every dollar is measured from day one, and report exactly what the campaign produced. If the numbers do not work, we say so and stop.",
              },
              {
                q: "Why should we start now instead of waiting?",
                a: "Three reasons. Fewer advertisers are competing for the same placements today than there will be once the channel matures. Account learnings compound, so the businesses testing now will know what works in their category before the crowd arrives. And your potential customers are already asking ChatGPT the questions your business answers. The honest counterweight: it is a new channel, so it should be tested with a controlled budget, not bet on.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-100 bg-[#fafaf8] p-7">
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
              ChatGPT Ads Work Best Alongside the Rest of Your Marketing
            </h2>
            <p className="mt-3 text-base text-gray-600">
              A new paid channel amplifies a strategy. It does not replace one.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Google Ads Management", href: "/google-ads-fresno" },
              { label: "AI Search Visibility (GEO)", href: "/geo-agency" },
              { label: "LSA Management", href: "/lsa-management" },
              { label: "Website Design", href: "/websites" },
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
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Want a Straight Read on Whether This Channel Fits Your Business?
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              A 30-minute conversation. We will look at what your customers ask AI tools, what your
              current tracking can support, and whether a controlled ChatGPT ads test makes sense
              for you right now. If it does not, we will tell you that too.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#2d7d53]"
              >
                Start the Conversation
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:5595213122"
                className="text-base font-medium text-[#3A9E6A] hover:text-white transition-colors"
              >
                (559) 521-3122
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
