import Link from "next/link";
import GHLWidget from "@/components/GHLWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Sequoia GEO: Growth Operations for Home Services",
  description:
    "Not standalone services: channels I manage as your growth operator. Google Ads, Local SEO, GBP, website optimization, review systems, attribution, and vendor accountability.",
  alternates: {
    canonical: "https://www.sequoiageo.com/services",
  },
};

const services = [
  {
    title: "Google Ads & Local Service Ads",
    description: "Managed to revenue, not leads. Every campaign tied to booked jobs, average ticket, and cost per closed call, not cost per click.",
    href: "/#contact",
  },
  {
    title: "Local SEO & Google Business Profile",
    description: "Map Pack presence built on real signals: reviews, citations, content, and GBP optimization. No keyword stuffing, no fake tactics.",
    href: "/#contact",
  },
  {
    title: "Website Optimization",
    description: "Conversion-focused, not just pretty. Page speed, booking flow, trust signals, and call tracking, every element tied to phone calls and form submissions.",
    href: "/#contact",
  },
  {
    title: "Review Generation Systems",
    description: "Built around how techs actually work. Integrated with your dispatch workflow so reviews happen automatically after every closed job.",
    href: "/#contact",
  },
  {
    title: "Marketing Attribution",
    description: "Connecting ad spend to booked jobs. Call tracking, form tracking, and CRM integration so you know exactly which channel produced which revenue.",
    href: "/#contact",
  },
  {
    title: "AI Search Visibility (GEO)",
    description: "Positioning your business in ChatGPT, Perplexity, and Gemini responses when homeowners ask about HVAC, plumbing, or roofing services.",
    href: "/#contact",
  },
  {
    title: "Vendor Management",
    description: "Already have an SEO company or PPC manager? I evaluate their work against revenue outcomes and hold them accountable to metrics that matter.",
    href: "/#contact",
  },
  {
    title: "Operational Insights",
    description: "Booking rate analysis, phone handling audits, average ticket review, and CSR performance feedback. The stuff no agency will tell you.",
    href: "/#contact",
  },
];

const tradePages = [
  { label: "HVAC SEO", href: "/hvac-seo" },
  { label: "Plumbing SEO", href: "/plumbing-seo" },
  { label: "Roofing SEO", href: "/roofing-seo" },
  { label: "Restoration SEO", href: "/restoration-seo" },
  { label: "Fractional CMO", href: "/fractional-cmo" },
  { label: "AI Automation", href: "/ai-automation" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-white px-5 py-2 text-sm font-medium text-[#1A5C3A] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
              The Channels I Manage
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl">
              Tools of the Trade
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              These aren&rsquo;t standalone services. They&rsquo;re the channels I manage as your growth operator,
              each one connected to revenue, not just reports.
            </p>
            <p className="mt-4 text-base text-gray-500">
              Every engagement starts with a Full Picture Audit before any of these are touched.
              I don&rsquo;t add budget to a broken pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-gray-200 bg-[#fafaf8] p-6 shadow-sm"
              >
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#C8EDD2]">
                  <svg className="h-4 w-4 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <h2 className="text-base font-bold text-[#1a1a1a]">{service.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade-specific pages */}
      <section className="bg-[#fafaf8] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Trade-Specific Pages</h2>
            <p className="mt-3 text-base text-gray-600">
              Deep-dives into how I approach marketing for specific home service trades.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {tradePages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-xl border border-[#3A9E6A]/30 bg-white px-6 py-3 text-base font-semibold text-[#1A5C3A] shadow-sm transition hover:bg-[#C8EDD2] hover:border-[#3A9E6A]"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What Digital Marketing Covers */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What Contractor Digital Marketing Actually Covers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Digital marketing for contractors is not a single tactic. It is a coordinated system of digital
              marketing services designed to generate qualified leads at every stage of the customer journey.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Local SEO and Search Engine Optimization",
                body: "Local SEO puts your business in front of potential customers searching for your services right now. Search engine optimization for contractors focuses on Google Business Profile, service area pages, keyword research, and the authority signals that improve your position in search engine results. Strong SEO strategies build organic website traffic that generates qualified leads without ongoing ad spend.",
              },
              {
                title: "Paid Advertising and Google Local Service Ads",
                body: "Google Local Service Ads and PPC advertising are the digital marketing strategies that generate qualified leads immediately. Google local service ads appear with a Google Guaranteed badge above standard PPC advertising in the search results. Digital marketing campaigns through paid search are the fastest path to high quality leads when you need to generate more leads right now.",
              },
              {
                title: "Social Media Marketing and Content Marketing",
                body: "Social media marketing builds brand recognition in your local market between purchases. Content marketing creates high quality content that ranks in search engine results for the questions your potential customers ask. Together, social media marketing and content marketing reduce your cost per lead over time by generating inbound marketing traffic that supplements paid digital marketing campaigns.",
              },
              {
                title: "Email Marketing and Reputation Management",
                body: "Email marketing to past customers is one of the highest-ROI digital marketing strategies for contractors. A targeted email marketing campaign generates repeat business, referrals, and online reviews from homeowners who already trust you. Reputation management ensures that the digital marketing investment you put into SEO and paid advertising converts at the highest possible rate.",
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
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Strategies by Trade */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Digital Marketing Strategies by Trade
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Marketing for contractors is not one-size-fits-all. Every trade has different buyer psychology,
              seasonal demand cycles, and competitive dynamics that require trade-specific digital marketing strategies.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "HVAC Digital Marketing",
                body: "HVAC digital marketing strategies account for seasonal demand spikes in May and October. Digital marketing campaigns for HVAC companies must be ready to scale fast when search volume surges. Email marketing to past customers before each season, Google Local Service Ads for emergency calls, and social media marketing for maintenance agreements are the core HVAC marketing strategies that generate consistent revenue year-round.",
              },
              {
                number: "02",
                title: "Plumbing Digital Marketing",
                body: "Plumbing marketing strategies focus on emergency response and local search dominance. When a homeowner has a burst pipe, they open Google Search and call the first result they trust. Plumbing digital marketing prioritizes first position in search engine results, fast mobile websites, and 24/7 call coverage. Lead generation for plumbing companies depends on being the most visible contractor when emergency demand spikes.",
              },
              {
                number: "03",
                title: "Roofing and Restoration Marketing",
                body: "Roofing marketing strategies must account for long sales cycles and insurance-driven demand. Digital marketing for roofing companies includes content marketing about replacement signs and storm damage processes. Restoration digital marketing strategies separate emergency response from insurance work, requiring coordinated digital marketing campaigns across 24/7 emergency search and longer claim nurture sequences.",
              },
              {
                number: "04",
                title: "General Contractor and Construction Marketing",
                body: "Construction marketing for general contractors focuses on portfolio visibility, homeowner trust, and targeted marketing to local homeowners planning major projects. Digital marketing strategies for construction companies require high quality content that showcases completed work and builds confidence. In competitive construction markets, the contractors with stronger marketing programs win more of the best jobs.",
              },
            ].map((item) => (
              <div key={item.number} className="rounded-2xl border border-gray-200 bg-white p-7">
                <div className="mb-4 text-4xl font-black text-[#C8EDD2]">{item.number}</div>
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Contractor Marketing FAQ
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What digital marketing services do contractors need most?",
                a: "For most contractors, the highest-priority digital marketing services are a professional website with landing pages, Google Business Profile management, Google Local Service Ads for immediate lead generation, local SEO strategies for long-term organic traffic, and email marketing to past customers. These core digital marketing services cover the full customer lifecycle from new lead generation to repeat business.",
              },
              {
                q: "How long do digital marketing strategies take to work?",
                a: "PPC advertising and Google Local Service Ads generate qualified leads within days of launch. SEO strategies and content marketing take 3&ndash;6 months to produce significant results in organic search engine results, but they create compounding website traffic and lead generation over time. The most effective contractor digital marketing programs combine both: paid digital marketing campaigns for immediate qualified leads while SEO strategies build the long-term organic asset.",
              },
              {
                q: "What makes marketing for contractors different from general business marketing?",
                a: "Marketing for contractors requires trade-specific knowledge that generic digital marketing agencies do not have. Home service businesses operate on local demand, emergency buying behavior, seasonal cycles, and high-ticket sales that require trust before a homeowner commits. A contractor marketing agency that understands these dynamics builds digital marketing strategies around how homeowners actually search, evaluate, and hire contractors in competitive local markets.",
              },
              {
                q: "How should I budget for digital marketing?",
                a: "Digital marketing budgets for contractors typically run 5&ndash;12% of revenue depending on growth goals and market competitiveness. Contractors in competitive markets or those entering new service areas need to invest at the higher end to build initial visibility. As SEO strategies mature and your digital marketing program produces organic website traffic, the cost per qualified lead decreases and your marketing investment becomes more efficient over time.",
              },
              {
                q: "What is the difference between inbound marketing and paid advertising for contractors?",
                a: "Inbound marketing attracts potential customers through content marketing, SEO strategies, and email marketing to opt-in lists. Potential customers who find you through inbound marketing are actively searching and convert at higher rates. Paid advertising through PPC campaigns and Google Local Service Ads generates qualified leads immediately but stops when you stop spending. The best contractor digital marketing programs use both, because inbound marketing reduces cost per lead over time while paid advertising fills the pipeline right away.",
              },
            ].map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]" dangerouslySetInnerHTML={{ __html: faq.q }} />
                <p className="mt-3 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning note */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Before I Touch Any of These Channels
          </h2>
          <p className="mt-4 text-lg text-[#C8EDD2]/80">
            Every engagement starts with a Full Picture Audit: your marketing spend and ROI by channel,
            your phone handling, your booking rate, your review velocity, and where revenue is leaking.
            You get a complete playbook before a single dollar of new spend is approved.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]"
            >
              Start With the Audit
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <GHLWidget />
    </>
  );
}
