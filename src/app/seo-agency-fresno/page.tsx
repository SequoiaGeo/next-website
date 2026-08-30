import Link from "next/link";
import BookingCalendar from "@/components/BookingCalendar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fresno SEO Agency | Sequoia GEO: SEO & Digital Marketing in Fresno CA",
  description:
    "Fresno SEO agency run by a 13-year local operator, not a remote account manager. SEO, Google Ads, and web design tied to real revenue, not vanity rankings. Free Fresno SEO assessment.",
  alternates: {
    canonical: "https://www.sequoiageo.com/seo-agency-fresno",
  },
};

export default function SeoAgencyFresnoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sequoia GEO",
            "description":
              "Fresno SEO and digital marketing agency helping local businesses rank on Google, get recommended in AI search, and turn search visibility into paying customers.",
            "url": "https://www.sequoiageo.com",
            "telephone": "+15595213122",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Fresno",
              "addressRegion": "CA",
              "addressCountry": "US",
            },
            "areaServed": { "@type": "City", "name": "Fresno" },
            "founder": { "@type": "Person", "name": "Aaron Husak" },
            "sameAs": ["https://www.sequoiageo.com"],
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
                "name": "What does a Fresno SEO agency actually do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Fresno SEO agency helps your business show up when local customers search Google for what you offer. That covers optimizing your Google Business Profile so you appear in the Map Pack, building and correcting business citations across directories, improving your website content to match how people actually search, earning links from credible Fresno-area sources, and tracking which search traffic turns into phone calls and customers. Sequoia GEO adds revenue attribution to all of it, so you see what the work produces in customers, not just rankings on a report.",
                },
              },
              {
                "@type": "Question",
                "name": "What makes Sequoia GEO different from other SEO companies in Fresno?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Fresno SEO companies report on impressions and keyword positions. Sequoia GEO was built around revenue attribution: connecting search visibility to actual customers. Aaron Husak spent 13 years building a Fresno company to more than 130 employees and four consecutive Inc 5000 appearances before launching this agency. That means every recommendation is filtered through a business owner's lens, not an agency's lens. We also keep a small client roster on purpose, so the work gets real attention instead of a junior account manager running a template.",
                },
              },
              {
                "@type": "Question",
                "name": "How much does SEO cost for a Fresno business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO pricing for Fresno businesses depends on how competitive your industry is, the current state of your website, and the scope of work. A one-time audit and correction project costs less than an ongoing monthly program. Most Fresno businesses that are serious about organic growth invest in ongoing work because rankings require continuous maintenance. The right starting point is a conversation about where you stand today and what it would take to close the gap with your top competitors.",
                },
              },
              {
                "@type": "Question",
                "name": "How long does it take to rank in Fresno search results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google Business Profile and citation work usually produces measurable changes within 60 to 90 days. Organic rankings for competitive terms take longer, typically 4 to 8 months depending on your industry and how much work your site needs. Because Fresno is not a top-10 metro, local search here responds faster than in Los Angeles or San Francisco, so businesses that start now build a compounding lead.",
                },
              },
              {
                "@type": "Question",
                "name": "Does Sequoia GEO only do SEO, or full digital marketing for Fresno businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both. SEO is the core discipline, but a complete Fresno strategy usually combines local SEO, Google Ads, and a website built to convert. Sequoia GEO handles all three, plus fractional CMO leadership for businesses that want senior marketing direction without a full-time hire. The pieces are coordinated so paid and organic reinforce each other instead of competing for the same budget.",
                },
              },
              {
                "@type": "Question",
                "name": "Is Sequoia GEO actually based in Fresno?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Aaron Husak built and ran a Fresno-based home services company here for 13 years before starting Sequoia GEO. This is not a remote agency guessing at the market. We know Fresno's neighborhoods, seasonality, and competitive landscape from years of operating a local business in it.",
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
              SEO &amp; Digital Marketing · Fresno, CA
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              A Fresno SEO Agency Run by an{" "}
              <span className="text-[#1A5C3A]">Operator, Not an Account Manager</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Sequoia GEO is a Fresno SEO and digital marketing agency. We help local businesses
              rank higher on Google, show up in the Map Pack, get recommended in AI search, and
              turn that visibility into paying customers. Founded by Aaron Husak, who built a Fresno
              company to 4x Inc 5000 and 130+ employees using the same playbook we run for clients.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Most Fresno SEO companies send you a monthly PDF of rankings and traffic. We connect
              every optimization decision to actual outcomes: phone calls, form submissions, and
              customers. If we cannot show how the work produces revenue, we are not doing our job.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Get a Free Fresno SEO Assessment
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
              Aaron Husak spent 13 years growing a Fresno business from one truck to a regional
              operation. He brings that operator experience to every client engagement, not agency
              theory.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: "4x Inc 5000 (2021 to 2024)",
                body: "Aaron grew Balanced Comfort in Fresno to four consecutive Inc 5000 appearances. The same marketing infrastructure that drove that growth is what we build for clients.",
              },
              {
                title: "Fresno market knowledge",
                body: "We are not a remote agency guessing at your market. We know Fresno's neighborhoods, seasonality, and competitive landscape from years of running a business here.",
              },
              {
                title: "Revenue tracking, not just rankings",
                body: "Every engagement includes call tracking and conversion attribution, so you know exactly what your marketing investment produces in phone calls and customers.",
              },
              {
                title: "A small client roster by design",
                body: "We work with a limited number of Fresno businesses at a time. Your work gets senior attention, not a junior account manager running a template playbook.",
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

      {/* Services hub */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What a Fresno SEO Agency Should Cover
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              SEO is the core, but it works best when paid search and your website pull in the same
              direction. Here is how the pieces fit, and where to go deeper on each.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                title: "Local SEO &amp; Google Business Profile",
                body: "Map Pack visibility, citation building, on-page optimization, and the local signals that decide which businesses Google shows in Fresno.",
                href: "/local-seo-fresno",
                cta: "Fresno local SEO",
              },
              {
                title: "Google Ads &amp; PPC Management",
                body: "Paid search that captures demand now, with budget controls and conversion tracking so you are not paying for clicks that never book.",
                href: "/google-ads-fresno",
                cta: "Fresno Google Ads",
              },
              {
                title: "Web Design Built to Rank",
                body: "A fast, conversion-focused website with SEO built in from the start. Most Fresno sites are built for looks, not for search or booked jobs.",
                href: "/web-design-fresno",
                cta: "Fresno web design",
              },
              {
                title: "Fractional CMO Leadership",
                body: "Senior marketing direction without a full-time hire. Strategy, accountability, and a coordinated plan across every channel you run.",
                href: "/fractional-cmo",
                cta: "Fractional CMO",
              },
            ].map((item) => (
              <div key={item.cta} className="flex flex-col rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3
                  className="text-lg font-bold text-[#1a1a1a]"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className="mt-3 flex-1 text-sm leading-relaxed text-gray-600"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318]"
                >
                  Explore {item.cta}
                  <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why hire a Fresno SEO agency */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl text-center">
              Why Fresno Businesses Hire an SEO Agency
            </h2>
            <div className="mt-12 space-y-8">
              {[
                {
                  number: "01",
                  heading: "Your competitors started months or years ago",
                  body: "The Fresno businesses at the top of Google for your industry have been building that visibility for a long time. Every month you wait is another month they extend the lead. SEO is a compounding asset, and the head start matters.",
                },
                {
                  number: "02",
                  heading: "Paid ads stop the moment you stop paying",
                  body: "Google Ads produce traffic while you spend. SEO builds rankings that keep working after the work is done. The strongest Fresno businesses use paid to capture demand now while building organic to reduce paid dependency over 12 to 24 months.",
                },
                {
                  number: "03",
                  heading: "AI search is changing how customers find you",
                  body: "More people are asking ChatGPT, Gemini, and Google's AI Overviews who to call before they ever see a list of links. A Fresno business that is not built to be referenced in those answers is losing customers it never sees in its analytics.",
                },
                {
                  number: "04",
                  heading: "Rankings without revenue tracking are vanity",
                  body: "Ranking first for a keyword that never produces a call is not a win. We build attribution from the start so every decision is judged against actual customer acquisition, not search position alone.",
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
              Fresno SEO Agency: Common Questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "What does a Fresno SEO agency actually do?",
                  a: "A Fresno SEO agency helps your business show up when local customers search Google for what you offer. That covers Google Business Profile optimization for Map Pack visibility, citation building, on-page content that matches search intent, links from credible Fresno-area sources, and tracking which traffic converts into customers. Sequoia GEO adds revenue attribution to all of it, so you see customers, not just rankings.",
                },
                {
                  q: "What makes Sequoia GEO different from other SEO companies in Fresno?",
                  a: "Most Fresno SEO companies report impressions and keyword positions. Sequoia GEO was built around revenue attribution. Aaron Husak spent 13 years building a Fresno company to 130+ employees and four Inc 5000 appearances before launching this agency, so every recommendation comes through a business owner's lens. We also keep a small client roster on purpose, so the work gets senior attention.",
                },
                {
                  q: "How much does SEO cost for a Fresno business?",
                  a: "It depends on how competitive your industry is, the state of your website, and the scope of work. A one-time audit and correction project costs less than an ongoing monthly program. Most Fresno businesses serious about organic growth invest in ongoing work because rankings need continuous maintenance. The starting point is a conversation about where you stand and what it takes to close the gap with your top competitors.",
                },
                {
                  q: "How long does it take to rank in Fresno search results?",
                  a: "Google Business Profile and citation work usually shows measurable change within 60 to 90 days. Organic rankings for competitive terms take 4 to 8 months depending on your industry and how much work your site needs. Because Fresno is not a top-10 metro, local search here responds faster than in larger California markets.",
                },
                {
                  q: "Do you only do SEO, or full digital marketing?",
                  a: "Both. SEO is the core discipline, but a complete Fresno strategy usually combines local SEO, Google Ads, and a website built to convert, with fractional CMO leadership available for businesses that want senior direction without a full-time hire. The channels are coordinated so paid and organic reinforce each other.",
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
              find the highest-leverage gaps, and tell you exactly what it would take to outrank
              your top Fresno competitors.
            </p>
            <p className="mt-3 text-base text-[#C8EDD2]/60">
              No pitch deck. No obligation. Just a straight read on your situation from someone who
              spent 13 years marketing a local Fresno business.
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

      {/* Booking Calendar */}
      <section className="bg-[#fafaf8] py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Schedule Your Free Fresno SEO Call</h2>
            <p className="mt-2 text-gray-600">Pick a time that works for you. 15 minutes. No pitch deck.</p>
          </div>
          <BookingCalendar />
        </div>
      </section>
    </>
  );
}
