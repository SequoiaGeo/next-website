import Link from "next/link";
import GHLWidget from "@/components/GHLWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Fresno CA | Sequoia GEO: Fresno Website Designer",
  description:
    "Fresno-based website design built to rank on Google and convert visitors into customers. Fast, mobile-first, and wired for local SEO from day one. Free consultation for Fresno businesses.",
  alternates: {
    canonical: "https://www.sequoiageo.com/web-design-fresno",
  },
};

export default function WebDesignFresnoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sequoia GEO",
            "description": "Fresno-based web design agency building high-performance websites for local businesses that rank on Google and convert visitors into customers.",
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
                "name": "How much does a website cost in Fresno?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A professionally built website for a local Fresno business typically ranges from $3,000 to $12,000 depending on the number of pages, functionality needed, and whether SEO and content are included. We give fixed-price proposals so there are no surprises."
                }
              },
              {
                "@type": "Question",
                "name": "Do your websites rank on Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We build every site with local SEO as a foundation, not an afterthought. That means proper technical structure, fast load times, schema markup, Google Business Profile integration, and content written to match how Fresno customers actually search. Rankings take time, but the site is built to earn them."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to build a website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most local business websites take 4 to 8 weeks from kickoff to launch. Timeline depends on how quickly we receive content and feedback from you. We run a structured process that keeps projects moving without requiring constant involvement from the business owner."
                }
              },
              {
                "@type": "Question",
                "name": "Will I be able to update the website myself?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We build on platforms that give you full editing access with no technical knowledge required. You can update your content, add photos, change hours, and publish new pages without touching code."
                }
              },
              {
                "@type": "Question",
                "name": "Do you redesign existing websites?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. If your current site is underperforming, we start with an honest audit. Some sites need a full rebuild; others need targeted improvements. We will tell you which situation you are in before you commit to anything."
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
            Web Design — Fresno, CA
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
            Fresno Website Designer That Builds for Google Rankings and Actual Revenue
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            A website that looks good but does not rank is a brochure. We build Fresno business websites that are fast, mobile-first, and structured to show up when local customers are searching. Then we track what the site produces in leads, calls, and booked revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#2D6A4F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1B4332] transition-colors"
            >
              Get a Free Website Audit
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-[#2D6A4F] text-[#2D6A4F] px-8 py-4 rounded-lg font-semibold hover:bg-[#2D6A4F] hover:text-white transition-colors"
            >
              See Our Work
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
            { stat: "SEO-First", label: "Built to Rank" },
            { stat: "Revenue", label: "Tied to Site Performance" },
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
            Why Most Local Business Websites in Fresno Fail to Produce Leads
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            When we audit the websites of local Fresno businesses, we find the same problems repeatedly. None of them are design problems. They are strategy problems.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Built for Looks, Not for Search",
                body: "Beautiful design that Google cannot parse. No local keyword signals, missing schema markup, no Google Business Profile integration. The site ranks for the company name and nothing else — which means it only gets visited by people who already know you exist."
              },
              {
                title: "Slow Load Times Killing Conversions",
                body: "Sites built on bloated page builders or loaded with unoptimized images load in 6 to 10 seconds on mobile. Google penalizes slow sites in rankings, and users abandon them before they see your offer. Page speed is not optional."
              },
              {
                title: "No Clear Call to Action",
                body: "Visitors arrive and have no obvious next step. The phone number is buried in the footer. The contact form requires 12 fields. There is no booking link. A site that confuses visitors does not convert them."
              },
              {
                title: "Generic Content That Matches No Search Query",
                body: "Paragraphs written to sound impressive rather than to answer the specific questions Fresno searchers are typing into Google. Content that does not match search intent does not rank, and does not convert the visitors who do show up."
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
              What Our Fresno Web Design Engagements Include
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every site we build starts with an understanding of how your customers search, what makes you different from competitors in Fresno, and what a conversion is actually worth to your business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏗️",
                title: "Custom Design",
                body: "No templates. We design to your brand, your market position, and the expectations of Fresno customers in your category. Every layout decision is made with conversion and readability in mind."
              },
              {
                icon: "⚡",
                title: "Performance Optimization",
                body: "Core Web Vitals tuned from the start. Image compression, lazy loading, minimal JavaScript, and hosting on edge infrastructure so your site loads fast everywhere in Fresno and beyond."
              },
              {
                icon: "📍",
                title: "Local SEO Architecture",
                body: "Schema markup for LocalBusiness, correct NAP consistency, Google Business Profile integration, location-specific page structure, and content aligned to how Fresno customers actually search."
              },
              {
                icon: "📱",
                title: "Mobile-First Build",
                body: "More than 70% of local searches happen on mobile. We design for mobile first, then scale up to desktop — not the other way around. Your site works on every device, every screen size."
              },
              {
                icon: "🔗",
                title: "Conversion-Optimized Pages",
                body: "Clear calls to action, click-to-call phone numbers, booking integrations, and trust signals placed where they matter. Every service page is designed to turn a visitor into a contact."
              },
              {
                icon: "📊",
                title: "Analytics and Attribution",
                body: "We connect Google Analytics, Search Console, call tracking, and your CRM so you can see exactly what your website produces. Not just traffic — actual leads and their source."
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

      {/* Why We Build Differently */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                We Built a Website That Drove 4x Inc 5000 Growth — Now We Build Yours
              </h2>
              <p className="text-gray-600 mb-4">
                Sequoia GEO was founded by Aaron Husak after running a home services company from the ground up to 4x Inc 5000 status. We built and rebuilt that company's digital presence through every growth stage — and learned what separates a website that generates pipeline from one that just takes up a domain.
              </p>
              <p className="text-gray-600 mb-4">
                The lesson: a website is not a marketing channel on its own. It is the destination that makes every other channel work. A weak website makes your Google Ads more expensive, your SEO harder, and your word-of-mouth referrals less likely to convert.
              </p>
              <p className="text-gray-600">
                We are based in Fresno and focused on the Central Valley. We understand local market dynamics here — the competitive landscape, the neighborhoods, the seasonality — in a way that a San Francisco or Los Angeles agency never will.
              </p>
            </div>
            <div className="bg-[#FAF7F2] rounded-2xl p-8">
              <div className="space-y-6">
                {[
                  { label: "Inc 5000 Rankings (2020–2023)", value: "4x" },
                  { label: "Based in Fresno, CA", value: "✓" },
                  { label: "SEO Built Into Every Site", value: "Always" },
                  { label: "Revenue Attribution Included", value: "✓" },
                  { label: "Ownership of All Assets", value: "100% Yours" },
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

      {/* Process */}
      <section className="py-20 px-6 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-10 text-center">
            How a Fresno Website Project Works
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Discovery and Audit",
                body: "We start by understanding your business, your customers, and how you currently show up online. If you have an existing site, we audit it honestly before recommending a path forward."
              },
              {
                step: "02",
                title: "Strategy and Architecture",
                body: "We map out the site structure, identify the pages needed to capture the searches your customers are running, and define what conversion looks like for your business type."
              },
              {
                step: "03",
                title: "Design and Development",
                body: "We build in stages with your review at each milestone. Design mockup first, then development, then content population. No surprises at the end."
              },
              {
                step: "04",
                title: "Pre-Launch SEO and QA",
                body: "Before we go live, we run through a full technical checklist: page speed, mobile rendering, schema markup, Search Console setup, sitemap submission, and conversion tracking verification."
              },
              {
                step: "05",
                title: "Launch and Ongoing Support",
                body: "We handle the launch and stay involved during the initial indexing period. Monthly check-ins available for clients who want ongoing optimization as the site starts ranking."
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="text-3xl font-bold text-[#2D6A4F] w-12 flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-10 text-center">
            Questions About Web Design in Fresno
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does a website cost in Fresno?",
                a: "Local business sites we build typically range from $3,000 to $12,000. That range covers everything from a streamlined 5-page service site to a multi-location, feature-heavy build with booking integrations. We give fixed-price proposals before any work starts."
              },
              {
                q: "Do you offer website hosting and maintenance?",
                a: "Yes. We offer hosting and maintenance plans that cover updates, security patches, speed monitoring, and backup. You own your domain and assets regardless of whether you stay on our hosting or move elsewhere."
              },
              {
                q: "Can you redesign a website we already have?",
                a: "Yes. We start with a no-cost audit of your current site. If a full rebuild is the right answer, we will explain why. If targeted improvements would produce better results faster, we will recommend that instead."
              },
              {
                q: "Will our site work for Google Ads landing pages?",
                a: "We design with paid traffic in mind. If you plan to run Google Ads, we build dedicated landing pages structured for high Quality Scores and conversion — not just aesthetics."
              },
              {
                q: "Do you write the content for the website?",
                a: "Yes. Copywriting is included in most of our engagements. We research how your customers search, write to match that intent, and create content that both ranks and converts. We do not repurpose your old copy — we rebuild it from the ground up."
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
            Get a Free Website Audit for Your Fresno Business
          </h2>
          <p className="text-gray-300 mb-8">
            We will review your current site and tell you exactly what is holding back your rankings and conversions. If a rebuild makes sense, we will show you what that looks like. No pressure, no generic advice.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0D2318] px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book a Free Website Review
          </Link>
        </div>
      </section>

      {/* GHL Booking Widget */}
      <section className="py-16 px-6 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Schedule Your Free Consultation</h2>
          <p className="text-gray-600 mb-8">
            30 minutes to review your site, talk through your goals, and see if we are the right fit.
          </p>
          <GHLWidget />
        </div>
      </section>
    </>
  );
}
