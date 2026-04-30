import Link from "next/link";
import GHLWidget from "@/components/GHLWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local SEO Fresno CA | Sequoia GEO: Fresno-Based SEO Consultant",
  description:
    "Fresno-based SEO consultant helping local businesses rank on Google and convert search traffic into paying customers. Real attribution, not just rankings. Free strategy call.",
  alternates: {
    canonical: "https://www.sequoiageo.com/local-seo-fresno",
  },
};

export default function LocalSeoFresnoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sequoia GEO",
            "description": "Fresno-based local SEO and digital marketing consultancy helping businesses rank on Google and convert search traffic into customers.",
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
                "name": "What does a local SEO consultant in Fresno actually do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A local SEO consultant helps your Fresno business appear when potential customers search for what you offer on Google. That includes optimizing your Google Business Profile so you appear in the Map Pack, building and correcting your business citations across directories, creating and improving the content on your website pages so they match what people actually search, earning links from other Fresno-area websites, and tracking which search traffic turns into phone calls and customers. The goal is not rankings in a spreadsheet. The goal is more customers finding you before they find your competitors."
                }
              },
              {
                "@type": "Question",
                "name": "How long does local SEO take to work for a Fresno business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google Business Profile improvements and citation corrections typically produce measurable ranking changes within 60 to 90 days. Organic search rankings for competitive terms take longer, usually 4 to 8 months depending on how established your competitors are and how much technical and content work your site needs. Fresno is a competitive market for many industries, but it is not a top-10 metro, which means local SEO here responds faster than in Los Angeles or San Francisco. Businesses that start SEO work now build a compounding advantage over competitors who are still relying entirely on paid ads."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Sequoia GEO different from other SEO companies in Fresno?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most SEO agencies report on impressions and keyword rankings. Sequoia GEO was built around revenue attribution: connecting search visibility to actual customers, not just clicks. Aaron Husak spent 13 years building a Fresno-based company to over 130 employees and four Inc 5000 appearances. That experience means every SEO recommendation is filtered through a business owner's lens, not a marketing agency's lens. We do not take on unlimited clients. We work with a small number of Fresno businesses at a time so the work actually gets done."
                }
              },
              {
                "@type": "Question",
                "name": "Does my Fresno business need a website to benefit from local SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Google Business Profile alone can drive significant local search visibility without a website, but a well-built website dramatically improves results. Your website creates the content depth that Google uses to understand what you do, where you serve, and why you are the right choice. Businesses with strong websites rank higher in organic search, show up for more keyword variations, and convert more of the traffic they receive into inquiries. If your current website is slow, outdated, or poorly structured, fixing it is often the highest-leverage SEO action available."
                }
              },
              {
                "@type": "Question",
                "name": "How much does local SEO cost for a Fresno business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Local SEO pricing for Fresno businesses varies based on the competitiveness of your industry, the current state of your website, and the scope of work required. A one-time audit and correction project will cost less than an ongoing monthly SEO program. Most Fresno businesses that are serious about growing their organic search presence invest in ongoing work because search rankings require continuous maintenance. The right place to start is a conversation about where you currently stand and what it would take to close the gap with your top competitors."
                }
              },
              {
                "@type": "Question",
                "name": "Should I use paid ads or local SEO for my Fresno business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Fresno businesses benefit from both, used at different stages. Paid Google Ads produce traffic immediately but stop when you stop paying. Local SEO builds organic visibility that compounds over time and does not require ongoing ad spend to maintain. The businesses with the strongest customer acquisition in Fresno typically use paid search to capture demand now while building organic SEO to reduce their paid dependency over 12 to 24 months. If budget is limited, Google Business Profile optimization and basic on-page SEO produce the highest return per dollar for most local Fresno businesses."
                }
              },
              {
                "@type": "Question",
                "name": "Can Sequoia GEO help with website design for Fresno businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Website design and local SEO are closely connected. A website that is slow to load, hard to navigate on mobile, or missing the right content cannot rank well regardless of how much SEO work is done off-site. Sequoia GEO designs and builds websites for Fresno businesses with search performance built in from the start, not added as an afterthought. If your current site is holding your SEO back, we can assess whether a rebuild or targeted improvements make more sense for your situation."
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
              Local SEO · Fresno, CA
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Fresno Local SEO That{" "}
              <span className="text-[#1A5C3A]">Brings In Customers</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Sequoia GEO is a Fresno-based SEO consultancy. We help local businesses rank higher
              on Google, show up in the Map Pack, and turn search traffic into paying customers.
              Founded by Aaron Husak, who built a Fresno company to 4x Inc 5000 and 130+ employees
              using the same strategies we use for our clients.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Most SEO agencies send you a monthly PDF with rankings and traffic numbers.
              We connect every search optimization decision to actual business outcomes: phone calls,
              form submissions, and customers. If we cannot show you how our work is producing revenue,
              we are not doing our job.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Get a Free SEO Assessment
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

      {/* Credibility bar */}
      <section className="bg-[#0D2318] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Built in Fresno. Focused on Revenue.
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              Aaron Husak spent 13 years growing a Fresno business from scratch. He knows what it
              takes to compete in this market, and he brings that operator experience to every
              SEO engagement.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: "4x Inc 5000 (2020–2023)",
                body: "Aaron grew Balanced Comfort in Fresno to four consecutive Inc 5000 appearances. The same marketing infrastructure that drove that growth is what we build for our clients."
              },
              {
                title: "Fresno market knowledge",
                body: "We are not a remote agency guessing at your market. We know Fresno's neighborhoods, seasonality, and competitive landscape from years of running a local business here."
              },
              {
                title: "Revenue tracking, not just rankings",
                body: "Every engagement includes call tracking and conversion attribution so you know exactly what your SEO investment is producing in phone calls and customers."
              },
              {
                title: "A small client roster by design",
                body: "We work with a limited number of Fresno businesses at a time. That means your work gets real attention, not a junior account manager running a template playbook."
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

      {/* Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What We Do for Fresno Businesses
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Local SEO is not one tactic. It is a connected system of signals that Google uses
              to decide which businesses to show when someone searches in Fresno.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📍",
                title: "Google Business Profile",
                body: "Your GBP is the single most important local SEO asset for most Fresno businesses. We optimize your categories, services, photos, posts, and review strategy to maximize Map Pack visibility."
              },
              {
                icon: "🔍",
                title: "On-Page SEO",
                body: "We audit and improve your website pages to match what Fresno customers actually search, from service pages to location pages to your homepage title and description."
              },
              {
                icon: "📋",
                title: "Citation Building",
                body: "Consistent business information across Google, Yelp, Apple Maps, Bing, and 40+ directories is a core local ranking signal. We build and correct your citations so they reinforce your credibility."
              },
              {
                icon: "✍️",
                title: "Content Strategy",
                body: "Fresno searchers ask specific questions. We identify the questions your customers search and create content that captures that traffic and positions your business as the obvious choice."
              },
              {
                icon: "🔗",
                title: "Link Building",
                body: "Links from other Fresno-area websites and industry publications tell Google your business has real-world authority. We build links that move rankings, not links that exist on paper."
              },
              {
                icon: "📊",
                title: "Attribution Tracking",
                body: "We set up call tracking and conversion measurement so you see the direct line from SEO to phone calls. Monthly reporting includes customer acquisition data, not just traffic charts."
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fresno businesses */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl text-center">
              Why Fresno Businesses Hire a Local SEO Consultant
            </h2>
            <div className="mt-12 space-y-8">
              {[
                {
                  number: "01",
                  heading: "Your competitors are already investing in it",
                  body: "Local SEO is not a new idea. The Fresno businesses showing up at the top of Google for your industry have been building that visibility for months or years. Every month you wait is another month your competitors extend their lead."
                },
                {
                  number: "02",
                  heading: "Paid ads stop working the moment you stop paying",
                  body: "Google Ads and social media ads produce traffic as long as you are spending. Local SEO builds organic rankings that continue driving traffic after the work is done. Most Fresno businesses that invest consistently in SEO reduce their paid ad dependency over 12 to 24 months."
                },
                {
                  number: "03",
                  heading: "Most Fresno searches happen on phones",
                  body: "Over 60 percent of local searches happen on mobile devices. A Fresno customer looking for what you offer on their phone and not finding you in the Map Pack or top organic results is a customer your competitor just captured."
                },
                {
                  number: "04",
                  heading: "Rankings without revenue tracking are vanity",
                  body: "Ranking number one for a keyword that does not produce phone calls is not a win. We build attribution from the start so every optimization decision is evaluated against actual customer acquisition, not search engine position alone."
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-6">
                  <div className="flex-shrink-0 text-4xl font-black text-[#C8EDD2]">{item.number}</div>
                  <div>
                    <h3 className="text-base font-bold text-[#1a1a1a]">{item.heading}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl text-center mb-12">
              Fresno Local SEO: Common Questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "What does a local SEO consultant in Fresno actually do?",
                  a: "A local SEO consultant helps your Fresno business appear when potential customers search for what you offer on Google. That includes optimizing your Google Business Profile for Map Pack visibility, building accurate citations across directories, improving your website pages to match search intent, earning links from relevant Fresno-area websites, and tracking which search traffic converts into actual customers. The work is ongoing because search rankings require continuous maintenance."
                },
                {
                  q: "How long does local SEO take to work for a Fresno business?",
                  a: "Google Business Profile improvements and citation corrections typically produce measurable ranking changes within 60 to 90 days. Organic search rankings for competitive terms take longer, usually 4 to 8 months depending on how competitive your industry is in Fresno. Because Fresno is not a top-10 metro, local SEO here responds faster than in Los Angeles or San Francisco. Businesses that invest now build a compounding advantage over competitors who are still relying entirely on paid ads."
                },
                {
                  q: "Does my Fresno business need a website to do local SEO?",
                  a: "A Google Business Profile alone can drive significant visibility without a website, but a well-built website dramatically improves results. Your website creates the content depth that Google uses to understand what you do, where you serve, and why you are the right choice. Businesses with strong websites rank higher in organic search, appear for more keyword variations, and convert more traffic into inquiries. If your current website is slow, outdated, or poorly structured, addressing that is often the highest-leverage SEO action available."
                },
                {
                  q: "What types of Fresno businesses do you work with?",
                  a: "Sequoia GEO works with local Fresno businesses across industries that depend on local search visibility to attract customers. We are not industry-exclusive. The fundamentals of local SEO, Google Business Profile optimization, citation building, on-page content, and attribution tracking, apply across business types. What matters most is whether you are ready to invest consistently and measure results against actual customer acquisition, not just traffic numbers."
                },
                {
                  q: "Should I use paid Google Ads or local SEO for my Fresno business?",
                  a: "Most Fresno businesses benefit from both, used strategically. Paid ads produce traffic immediately but stop the moment you stop paying. Local SEO builds visibility that compounds over time. The strongest Fresno businesses in competitive industries use paid search to capture demand now while building organic visibility to reduce paid dependency over 12 to 24 months. If budget is limited, Google Business Profile optimization and basic on-page SEO produce the highest return per dollar for most local businesses."
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-gray-200 pb-8">
                  <h3 className="text-base font-bold text-[#1a1a1a] mb-3">{item.q}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Find Out Where You Stand in Fresno Search
            </h2>
            <p className="mt-4 text-lg text-[#C8EDD2]/80">
              Book a free 15-minute strategy call. We will look at your current Google visibility,
              identify the highest-leverage gaps, and tell you exactly what it would take to
              outrank your top Fresno competitors.
            </p>
            <p className="mt-3 text-base text-[#C8EDD2]/60">
              No pitch deck. No obligation. Just a straight read on your situation from someone
              who has spent 13 years marketing a local Fresno business.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#2d7a52]"
              >
                Book a Free Strategy Call
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a href="tel:5595213122" className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors">
                (559) 521-3122
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GHL Booking Widget */}
      <section className="bg-[#fafaf8] py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Schedule Your Free Call</h2>
            <p className="mt-2 text-gray-600">Pick a time that works for you. 15 minutes.</p>
          </div>
          <GHLWidget />
        </div>
      </section>
    </>
  );
}
