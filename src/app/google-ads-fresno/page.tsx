import Link from "next/link";
import GHLWidget from "@/components/GHLWidget";
import BookingCalendar from "@/components/BookingCalendar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Agency Fresno CA | Sequoia GEO: Fresno PPC Management",
  description:
    "Fresno-based Google Ads management. We build and run campaigns tied to booked jobs, not just clicks. 4x Inc 5000 operator. Free Google Ads audit for Fresno businesses.",
  alternates: {
    canonical: "https://www.sequoiageo.com/google-ads-fresno",
  },
};

export default function GoogleAdsFresnoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sequoia GEO",
            "description": "Fresno-based Google Ads management agency helping local businesses generate measurable revenue from paid search.",
            "url": "https://www.sequoiageo.com",
            "telephone": "+15595213122",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Fresno",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "City",
              "name": "Fresno"
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
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does Google Ads management cost in Fresno?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our Google Ads management fees are based on your ad spend and campaign complexity. We structure our pricing so that as your campaigns perform better, it makes sense for both sides. We do not charge percentage-of-spend fees that reward us for spending more of your money."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with any type of Fresno business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work with local service businesses across Fresno and the Central Valley. Our experience is deepest in high-ticket local services where the economics of paid search make the most sense — businesses where a single closed customer generates enough margin to justify the cost per click."
                }
              },
              {
                "@type": "Question",
                "name": "What makes your Google Ads management different?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We built and scaled a home services company to 4x Inc 5000 status. That means we understand what a real lead looks like and what it costs to close one. We tie our campaigns to booked revenue, not just form fills or phone calls. If a campaign is not producing closed jobs, we treat it as a failure regardless of impressions or CTR."
                }
              },
              {
                "@type": "Question",
                "name": "How long before I see results from Google Ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google Ads can generate calls and leads within days of launch. But meaningful data for optimization typically takes 30 to 60 days. We run a structured 90-day ramp: launch and baseline in month one, optimization in month two, and scaling in month three."
                }
              },
              {
                "@type": "Question",
                "name": "Do you require long-term contracts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work on month-to-month agreements after the initial onboarding period. We keep clients by producing results, not by locking them into contracts."
                }
              }
            ]
          })
        }}
      />

      {/* Hero */}
      <section className="bg-[#FAF7F2] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#2D6A4F] mb-4">
            Google Ads Management — Fresno, CA
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
            Google Ads Agency in Fresno That Tracks Revenue, Not Just Clicks
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Most Google Ads agencies optimize for cost per click. We optimize for booked jobs and closed revenue. Built by a Fresno operator who scaled a local service business to 4x Inc 5000 — then brought that system to other businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#2D6A4F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1B4332] transition-colors"
            >
              Get a Free Google Ads Audit
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-[#2D6A4F] text-[#2D6A4F] px-8 py-4 rounded-lg font-semibold hover:bg-[#2D6A4F] hover:text-white transition-colors"
            >
              See Our Results
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="bg-[#0D2318] py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "4x", label: "Inc 5000 Honoree" },
            { stat: "Fresno", label: "Central Valley Based" },
            { stat: "Revenue", label: "Tied Attribution" },
            { stat: "Small", label: "Roster — Real Attention" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-2xl font-bold text-white mb-1">{item.stat}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
            Why Most Fresno Businesses Waste Money on Google Ads
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Google Ads is one of the most powerful customer acquisition channels available to a local business. It is also one of the easiest to run badly. The most common failure patterns we see when auditing Fresno accounts:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Broad Match Keywords Eating Budget",
                body: "Campaigns targeting loose keyword variations that attract the wrong searches. A plumber in Clovis showing ads for 'DIY pipe repair videos.' A dental office paying for 'dental school near me.'"
              },
              {
                title: "No Conversion Tracking Worth Trusting",
                body: "Tracking page views or time-on-site as conversions. Google's algorithm then optimizes for people who browse, not people who book. The campaign looks good in the dashboard and produces nothing."
              },
              {
                title: "Generic Ad Copy with No Local Signal",
                body: "Ads that could run for any business in any city. Fresno searchers are local — your copy should mention Fresno, your service area, and your specific differentiator. Generic ads get skipped."
              },
              {
                title: "Ignoring the Landing Page",
                body: "Sending paid traffic to a homepage built for brand awareness, not conversion. A click that costs $40 and lands on a slow, generic homepage converts at 1%. The same click to a purpose-built landing page converts at 8%."
              },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
              What Our Fresno Google Ads Management Includes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every engagement starts with understanding your actual business economics — what a customer is worth, what close rate looks like, what a phone call costs to generate.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Campaign Architecture",
                body: "We build campaigns around actual search intent, not just keyword volume. Proper match type structure, negative keyword lists from day one, and ad group organization that keeps Quality Scores high and CPCs low."
              },
              {
                icon: "✍️",
                title: "Ad Copy & Extensions",
                body: "Local-specific headlines that speak to Fresno and your service area. Sitelinks, callouts, call extensions, and structured snippets that increase ad real estate and CTR. A/B testing on all ad variations."
              },
              {
                icon: "📊",
                title: "Revenue-Tied Tracking",
                body: "We connect call tracking, form conversions, and CRM data so we know which keywords produce booked jobs. Google's algorithm gets trained on real revenue signals, not proxy metrics."
              },
              {
                icon: "🏗️",
                title: "Landing Page Optimization",
                body: "We audit your existing landing pages and recommend or build purpose-built pages for each campaign. A landing page optimized for conversion doubles the ROI of every dollar spent in ads."
              },
              {
                icon: "📍",
                title: "Local Campaign Setup",
                body: "Location targeting, ad scheduling for your service hours, bid adjustments by geography within Fresno and the Central Valley. Ads that run when your phones are staffed."
              },
              {
                icon: "📈",
                title: "Monthly Reporting",
                body: "Plain-language reporting on what the campaign produced in revenue, not just impressions and clicks. We show you cost per booked job alongside ad spend so you know your actual ROI."
              },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operator Credibility */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                We Ran Google Ads Before We Managed Them
              </h2>
              <p className="text-gray-600 mb-4">
                Sequoia GEO was founded by Aaron Husak after scaling a home services company to 4x Inc 5000 recognition between 2020 and 2023. During that run, we managed seven-figure Google Ads budgets internally and learned what actually moves revenue versus what just moves metrics.
              </p>
              <p className="text-gray-600 mb-4">
                That operating experience shapes how we approach every client account. We do not chase impressions. We do not celebrate low CPCs if those clicks are not converting. We optimize for one thing: the cost to acquire a booked, closed customer.
              </p>
              <p className="text-gray-600">
                We are based in Fresno and work with local businesses across the Central Valley. We keep our client roster small so every account gets real attention from the same person managing the campaigns.
              </p>
            </div>
            <div className="bg-[#FAF7F2] rounded-2xl p-8">
              <div className="space-y-6">
                {[
                  { label: "Years Running Google Ads", value: "13+" },
                  { label: "Inc 5000 Rankings (2020–2023)", value: "4x" },
                  { label: "Fresno & Central Valley Focus", value: "✓" },
                  { label: "Revenue-Tied Attribution", value: "Always" },
                  { label: "Contracts Required", value: "Month-to-Month" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-gray-600 text-sm">{item.label}</span>
                    <span className="font-bold text-[#2D6A4F]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 px-6 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
            Which Fresno Businesses Benefit Most from Google Ads
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Google Ads works best when the lifetime value of a customer justifies the cost per click. In Fresno, CPCs for local service searches run $8 to $60 depending on the category. The math works when your average job or contract value is high enough to absorb that acquisition cost.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Local service businesses",
              "Trades and contractors",
              "Medical and dental practices",
              "Legal and professional services",
              "Home improvement companies",
              "Specialty retail with high ticket sizes",
              "Commercial cleaning and facilities",
              "Insurance and financial services",
              "Any business where one new customer pays for months of ad spend",
            ].map((type) => (
              <div key={type} className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700">
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-10 text-center">
            Common Questions About Google Ads in Fresno
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does Google Ads management cost in Fresno?",
                a: "Our management fees are based on campaign scope, not a percentage of what we spend. We price this way deliberately — a percentage-of-spend model creates an incentive to spend more of your money rather than spend it better."
              },
              {
                q: "What ad spend do you recommend to start?",
                a: "We typically recommend a minimum of $1,500 to $2,000 per month in ad spend for local campaigns in Fresno to generate enough data for meaningful optimization. Starting lower is possible, but the learning cycle takes longer and results are harder to read."
              },
              {
                q: "Do I need a new website to run Google Ads?",
                a: "Not necessarily. But if your current site converts poorly, every dollar in ads is partially wasted. We audit your landing pages as part of onboarding and will tell you honestly if a page needs work before we drive paid traffic to it."
              },
              {
                q: "How do you measure success?",
                a: "Cost per booked job is our primary metric. We set up tracking to see which keywords generate calls, which calls convert to jobs, and what those jobs are worth. Everything else — impressions, CTR, Quality Score — is supporting data."
              },
              {
                q: "Can you take over an existing Google Ads account?",
                a: "Yes, and we often do. If you have been running Google Ads without strong results, a free audit from us will identify what is wasting budget and what can be fixed quickly."
              },
            ].map((item) => (
              <div key={item.q} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-[#1A1A1A] mb-3">{item.q}</h3>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D2318] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get a Free Google Ads Audit for Your Fresno Business
          </h2>
          <p className="text-gray-300 mb-8">
            We will review your current campaigns or build a projection for what a new campaign could produce. No obligation, no sales pressure — just an honest read on whether Google Ads makes sense for your business right now.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0D2318] px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book a Free Audit Call
          </Link>
        </div>
      </section>

      {/* Booking Calendar */}
      <section className="py-16 px-6 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Schedule Your Free Google Ads Audit</h2>
          <p className="text-gray-600 mb-8">
            Pick a time that works for you. 30 minutes, no pitch — just an honest conversation about your Google Ads situation.
          </p>
          <BookingCalendar />
        </div>
      </section>
    </>
  );
}
