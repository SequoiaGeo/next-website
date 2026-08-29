import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import InlineLeadForm from "@/components/InlineLeadForm";

export const metadata: Metadata = {
  title: "Best Plumbing Marketing Agencies 2026 Ranked by an Operator",
  description:
    "8 plumbing marketing companies ranked by a home services marketer since 2006 and 13-year owner and operator, with pricing where it exists. My own practice is on the list, disclosed.",
  alternates: {
    canonical: "https://www.sequoiageo.com/best-plumbing-marketing-agencies",
  },
};

const agencies = [
  {
    rank: 1,
    name: "Hook Agency",
    url: "hookagency.com",
    bestFor: "Established plumbing contractors ($2M+ revenue) prioritizing brand and organic growth",
    tag: "SEO + Web Design",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    meta: [
      { label: "Best for", value: "$2M+ revenue contractors" },
      { label: "Pricing", value: "Custom quote required" },
      { label: "Team scale", value: "Mid-size agency" },
    ],
    summary:
      "Hook Agency targets the top 5% of growth-mode plumbing and home service contractors, with an explicit revenue floor of $2M or more. Their core offering pairs custom WordPress websites with SEO and Google Ads in an integrated system, built on the premise that design and organic search work better together than as separate engagements. They operate without long-term contracts and give clients access to live reporting dashboards. The agency publicly cites 170+ five-star Google reviews and shares named case study results showing lead growth percentages across their contractor clients.",
    strengths: [
      "Deep contractor focus across plumbing, HVAC, roofing, and electrical with a consistent methodology",
      "No long-term contracts; live reporting dashboards visible at any time",
      "Named client case studies with verifiable lead growth metrics",
    ],
    considerations: [
      "The $2M+ revenue threshold makes them a poor fit for smaller or earlier-stage plumbing operations",
      "Pricing is not transparent; requires a strategy call to get any number",
      "Primarily web and SEO focused; less emphasis on paid media, LSA, or reputation management",
    ],
    isOwnAgency: false,
  },
  {
    rank: 2,
    name: "Rival Digital",
    url: "rivaldigital.com",
    bestFor: "Home service contractors wanting a single agency covering all digital channels",
    tag: "Full-Stack Digital",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    meta: [
      { label: "Best for", value: "Multi-channel operators" },
      { label: "Pricing", value: "Custom quote required" },
      { label: "Team scale", value: "Mid-size agency" },
    ],
    summary:
      "Rival Digital describes itself as a home services-exclusive agency. Their founder Eric Thomas authored a methodology book called The HOME Advantage, and the agency holds partnerships with Nexstar Network, which signals credibility within the trades ecosystem. Their service stack covers AI search optimization, organic SEO, LSA management, PPC, social media, and email marketing, all under one contract. They serve plumbing alongside HVAC, electrical, roofing, and several adjacent trades.",
    strengths: [
      "Exclusive home services focus across multiple trade verticals with a founder-backed methodology",
      "Nexstar Network affiliation builds trust with growth-oriented contractors",
      "AI search optimization included as a standard service offering, not an add-on",
    ],
    considerations: [
      "Not plumbing-exclusive; attention is distributed across multiple trades simultaneously",
      "No public case studies with specific lead or revenue numbers surfaced on their homepage",
      "Pricing is entirely opaque; no tier or range information available without a sales call",
    ],
    isOwnAgency: false,
  },
  {
    rank: 3,
    name: "Plumbing & HVAC SEO",
    url: "plumberseo.net",
    bestFor: "Plumbing and HVAC contractors wanting a specialist agency with a documented track record",
    tag: "Trade Specialist",
    tagColor: "bg-sky-50 text-sky-700 border-sky-200",
    meta: [
      { label: "Best for", value: "Plumbing and HVAC contractors" },
      { label: "Pricing", value: "Custom quote required" },
      { label: "Team scale", value: "3x Inc. 5000 ranked" },
    ],
    summary:
      "Plumbing & HVAC SEO (plumberseo.net) serves only plumbing, HVAC, and electrical contractors across the US, Canada, and Australia. They report 179+ active clients, 7.1 million leads generated, a 95% client retention rate after 12 months, and three consecutive Inc. 5000 rankings. They are a Google Partner and Nexstar Network partner. Their service stack covers SEO, PPC, LSA management, reputation management, web design, social media, email marketing, and call tracking under one roof.",
    strengths: [
      "7.1 million leads generated across 179+ clients represents verifiable scale in the trade",
      "Three consecutive Inc. 5000 rankings signal genuine and sustained company growth",
      "Full service stack including reputation management and call tracking, all trade-specific",
    ],
    considerations: [
      "Serves only plumbing, HVAC, and electrical; not a fit for contractors who also do roofing or restoration",
      "The domain redirect from plumbingandhvacseo.com to plumberseo.net may reflect a recent rebrand still in progress",
      "No specific dollar-amount case studies publicly listed; retention rates are the primary proof point",
    ],
    isOwnAgency: false,
  },
  {
    rank: 4,
    name: "RYNO Strategic Solutions",
    url: "rynoss.com",
    bestFor: "Multi-location plumbing contractors using ServiceTitan who need enterprise-grade analytics",
    tag: "Analytics + ServiceTitan",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    meta: [
      { label: "Best for", value: "ServiceTitan users, $5M+ revenue" },
      { label: "Pricing", value: "$5,000+/month stated publicly" },
      { label: "Team scale", value: "Large agency (Blue Corona merger)" },
    ],
    summary:
      "RYNO Strategic Solutions formed from the 2024 merger of Blue Corona and RYNO, two of the most recognized names in contractor marketing. Their proprietary RYNOtrax2.0 platform integrates with ServiceTitan and 30+ ad channels, connecting every lead to a booked job with attribution across the full funnel. Clients own their websites and all data outright. Published results include a 72% qualified lead increase year-over-year for Hometown Plumbing and a 77:1 SEO ROI for another client. They layer CSR coaching on top of marketing to address conversion gaps.",
    strengths: [
      "Full-funnel approach: marketing plus CSR coaching plus revenue attribution in one partner",
      "Client owns their website and all digital assets with no platform lock-in",
      "Deep ServiceTitan integration connects ad spend to jobs booked",
    ],
    considerations: [
      "Scale of the combined agency may mean less personalized attention for single-location operators",
      "Entry investment of $5,000+/month positions them well above smaller operators' marketing budgets",
      "The Blue Corona to RYNO rebrand is recent; some continuity questions remain in the market",
    ],
    isOwnAgency: false,
  },
  {
    rank: 5,
    name: "Scorpion",
    url: "scorpion.co",
    bestFor: "Larger or multi-location plumbing operations wanting a technology-platform approach",
    tag: "AI-Driven Platform",
    tagColor: "bg-orange-50 text-orange-700 border-orange-200",
    meta: [
      { label: "Best for", value: "Multi-location, franchise systems" },
      { label: "Pricing", value: "Enterprise inquiry required" },
      { label: "Team scale", value: "Large technology company" },
    ],
    summary:
      "Scorpion is a large-scale digital marketing technology company serving home services alongside legal, healthcare, and franchise businesses. Their plumbing offering includes websites, SEO, paid search, reputation management, and a proprietary AI platform that allocates marketing spend in real time based on performance data. The technology differentiates them from pure-service agencies. Their scale is significant; they are a technology-first company with hundreds of employees and thousands of clients across multiple industries.",
    strengths: [
      "Proprietary AI platform that auto-adjusts ad budgets in real time based on incoming lead performance",
      "Significant resources and infrastructure from serving thousands of clients across multiple verticals",
      "Enterprise-grade technology stack suitable for franchise systems and multi-location operations",
    ],
    considerations: [
      "Not plumbing-exclusive; serves dozens of industries which limits trade-specific depth",
      "Technology-platform model can feel impersonal for owner-operators who want direct relationships",
      "Dedicated plumbing landing pages returned 404 errors at time of research, suggesting lower niche investment",
    ],
    isOwnAgency: false,
  },
  {
    rank: 6,
    name: "Strictly Plumbers",
    url: "strictlyplumbers.com",
    bestFor: "Plumbing contractors of any size who want a trade-built partner beyond just marketing",
    tag: "Plumbing-Only",
    tagColor: "bg-teal-50 text-teal-700 border-teal-200",
    meta: [
      { label: "Best for", value: "Plumbing only, all sizes" },
      { label: "Pricing", value: "Custom quote required" },
      { label: "Team scale", value: "Boutique specialist" },
    ],
    summary:
      "Strictly Plumbers is a marketing agency built and run by a former plumber with 15 years of hands-on trade experience. They report 500+ plumbing companies served and offer a full suite covering web design, SEO, PPC, Google Guarantee, Facebook ads, phone tracking, and an AI chatbot called The Plumber Bot built specifically for plumbing service conversations. Beyond marketing, they also offer business coaching, sales training, and virtual dispatch services, which puts them closer to a full plumbing operations partner than a traditional agency.",
    strengths: [
      "Founded and run by an ex-plumber with 15 years in the trade; genuine operational credibility",
      "Proprietary AI chatbot built for plumbing-specific lead conversations",
      "Breadth of operational support including coaching, dispatch, and sales training alongside marketing",
    ],
    considerations: [
      "The 500+ clients claim is strong but specific case study metrics were not surfaced on the website",
      "Team size, capacity, and agency structure are not disclosed publicly",
      "The blend of marketing and operational services may dilute focus in either area",
    ],
    isOwnAgency: false,
  },
  {
    rank: 7,
    name: "Built-Right Digital",
    url: "builtrightdigital.com",
    bestFor: "Plumbing contractors who want transparent, predictable pricing without a sales call",
    tag: "Transparent Pricing",
    tagColor: "bg-green-50 text-green-700 border-green-200",
    meta: [
      { label: "Best for", value: "Any size, budget-conscious" },
      { label: "Pricing", value: "$1,199 to $19,999/month (public)" },
      { label: "Team scale", value: "1,000+ clients served" },
    ],
    summary:
      "Built-Right Digital publishes four public pricing tiers ranging from $1,199 to $19,999 per month, which is rare in the home services marketing industry and eliminates the discovery call required just to understand costs. Their plumbing service covers local SEO, Google Ads, Meta Ads, website design, and listing management. They report 1,000+ clients across home services verticals with a 4.9-star rating and 5+ year average client tenure, which suggests strong retention relative to industry norms.",
    strengths: [
      "Publicly listed pricing tiers remove friction from the evaluation process entirely",
      "5+ year average client tenure suggests the retention numbers are genuine, not marketing",
      "Home services focus across multiple trades with plumbing-specific service pages and campaign strategy",
    ],
    considerations: [
      "Serves HVAC, roofing, electrical, and other trades alongside plumbing; not plumbing-exclusive",
      "The $1,199/month entry tier may deliver limited scope in competitive plumbing markets",
      "Specific plumbing revenue or lead case studies were not prominently featured at time of research",
    ],
    isOwnAgency: false,
  },
  {
    rank: 8,
    name: "Sequoia GEO",
    url: "sequoiageo.com",
    bestFor: "Growth-stage plumbing contractors ($2M to $15M) who want an operator-perspective partner",
    tag: "Operator-Founded",
    tagColor: "bg-[#C8EDD2]/50 text-[#1A5C3A] border-[#3A9E6A]/30",
    meta: [
      { label: "Best for", value: "$2M to $15M revenue contractors" },
      { label: "Pricing", value: "From $2,500 a month, 3-month initial term, month to month after" },
      { label: "Team scale", value: "Principal-led" },
    ],
    summary:
      "Full disclosure: this one is mine. I put it last on purpose. Read the other seven first. Sequoia GEO is an operator-led marketing practice founded by Aaron Husak, who built Balanced Comfort HVAC from a solo operation to $17M+ in annual revenue and four consecutive Inc. 5000 rankings (2020 to 2023). The practice serves HVAC, plumbing, and home service contractors doing $2M to $15M. Marketing services include Google Ads, LSA, local SEO, GBP management, and web design, but the core differentiator is direct access to Aaron and a focus on booking rates, CSR performance, and conversion gaps alongside campaign execution.",
    strengths: [
      "Only shop on this list where the founder built and operated a $17M+ home service company with Inc. 5000 recognition",
      "Aaron leads every engagement rather than handing the relationship to a junior account manager",
      "Revenue attribution connects past the lead: booking rates, CSR call quality, and appointment data",
    ],
    considerations: [
      "Principal-led structure means scope and communication expectations should be defined before work begins",
      "Boutique structure means fewer proprietary technology tools and platform integrations than the bigger names on this list",
      "Newer brand with less market recognition than companies who have been marketing themselves for a decade",
    ],
    isOwnAgency: true,
  },
];

const howToChoose = [
  { tier: "Under $1M revenue", rec: "Look at Built-Right Digital (transparent pricing, lower entry point) or Strictly Plumbers (plumbing-only with operational coaching). Avoid agencies with $5K+/month minimums until the revenue supports the investment." },
  { tier: "$1M to $5M revenue", rec: "Hook Agency, Rival Digital, and Plumbing & HVAC SEO are all solid options with documented contractor track records. Sequoia GEO is worth a conversation if you are actively trying to scale and want an operator-perspective partner, not just a vendor." },
  { tier: "$5M to $15M revenue", rec: "At this scale, attribution becomes critical. RYNO's ServiceTitan integration and CSR coaching layer make sense if you need to connect marketing spend to jobs booked, not just lead counts. Sequoia GEO fills a similar gap if you want a principal-level relationship rather than account managers." },
  { tier: "$15M+ or multi-location", rec: "Scorpion and RYNO are the natural fits at this scale. The technology infrastructure and team depth they offer matches the operational complexity of a large multi-location plumbing operation." },
];

type Agency = (typeof agencies)[number];

function AgencyCard({ agency }: { agency: Agency }) {
  return (
    <div
      className={`rounded-2xl border p-8 shadow-sm ${agency.isOwnAgency ? "border-[#3A9E6A]/40 ring-2 ring-[#3A9E6A]/20" : "border-gray-200"}`}
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0D2318] text-sm font-black text-white shrink-0">
            {agency.rank}
          </span>
          <div>
            <h2 className="text-xl font-extrabold text-[#1a1a1a]">{agency.name}</h2>
            <p className="text-xs text-gray-500">{agency.url}</p>
          </div>
        </div>
        <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${agency.tagColor}`}>
          {agency.tag}
        </span>
      </div>

      <p className="text-sm font-semibold text-[#1A5C3A] mb-4">{agency.bestFor}</p>

      <div className="flex flex-wrap gap-3 mb-5">
        {agency.meta.map((m) => (
          <div key={m.label} className="rounded-lg bg-[#fafaf8] border border-gray-200 px-3 py-2">
            <p className="text-xs text-gray-500">{m.label}</p>
            <p className="text-xs font-semibold text-[#1a1a1a] mt-0.5">{m.value}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-600 leading-relaxed mb-5">{agency.summary}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-bold text-[#1A5C3A] uppercase tracking-wider mb-2">Strengths</p>
          <ul className="space-y-2">
            {agency.strengths.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Considerations</p>
          <ul className="space-y-2">
            {agency.considerations.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function BestPlumbingAgenciesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "Best Plumbing Marketing Agencies", url: "https://www.sequoiageo.com/best-plumbing-marketing-agencies" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best Plumbing Marketing Agencies 2026",
            "description": "8 plumbing marketing agencies ranked and reviewed for 2026, with strengths, considerations, and who each agency is best for by revenue size.",
            "author": { "@type": "Organization", "name": "Sequoia GEO" },
            "publisher": { "@type": "Organization", "name": "Sequoia GEO", "url": "https://www.sequoiageo.com" },
            "dateModified": "2026-08-03",
            "mainEntityOfPage": "https://www.sequoiageo.com/best-plumbing-marketing-agencies"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Best Plumbing Marketing Agencies 2026",
            "itemListOrder": "https://schema.org/ItemListOrderAscending",
            "numberOfItems": agencies.length,
            "itemListElement": agencies.map((agency) => ({
              "@type": "ListItem",
              "position": agency.rank,
              "name": agency.name,
              "url": `https://${agency.url}`,
            })),
          })
        }}
      />

      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="section-overline mb-4">Research & Rankings</p>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Best Plumbing Marketing Agencies 2026
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80 max-w-2xl mx-auto">
            8 agencies ranked and reviewed: what each one is best at, who they are the right fit for, and where they fall short. Based on direct research across agency websites, case studies, and public pricing.
          </p>
          <p className="mt-4 text-sm text-[#C8EDD2]/50">
            Last updated August 2026.
          </p>
        </div>
      </section>

      {/* Disclosure */}
      <section className="bg-amber-50 border-b border-amber-200">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-4">
          <p className="text-sm text-amber-800">
            <strong>Disclosure:</strong> Sequoia GEO produced this research and is ranked last on purpose. The list is built to be useful, not self-promotional. Read the other seven first.
          </p>
        </div>
      </section>

      {/* Agency cards, ranks 1 to 3 */}
      <section className="bg-white pt-16 pb-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-12">
          {agencies.slice(0, 3).map((agency) => (
            <AgencyCard key={agency.rank} agency={agency} />
          ))}
        </div>
      </section>

      {/* Mid-list lead capture */}
      <InlineLeadForm
        source="best_plumbing_agencies_midlist"
        heading="Want an honest read before you pick one?"
        subtext="I audit your current plumbing marketing before the first call. You see what is working, what is not, and which of these eight actually fits your company."
        buttonText="Get Your Free Audit"
      />

      {/* Agency cards, ranks 4 to 8 */}
      <section className="bg-white pt-12 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-12">
          {agencies.slice(3).map((agency) => (
            <AgencyCard key={agency.rank} agency={agency} />
          ))}
        </div>
      </section>

      {/* Case study proof strip */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-[#fafaf8] p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1A5C3A] mb-3">
              What Working With Us Looks Like
            </p>
            <p className="text-lg font-bold text-[#1a1a1a]">
              An independent plumber holding a 5.0 across 166 Google reviews
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Before comparing agencies, look at what the work produces. KABAM Plumbing in Sun
              City Center, Florida: a client-earned 5.0 rating across 166 reviews when verified
              August 14, 2026, an evidence-led decision to repair the Lovable site before forcing
              another rebuild, and 116 Google Business Profile call-button clicks over the six
              months through May. The Google metric measures clicks on the call button, not
              completed calls, qualified leads, or jobs booked.
            </p>
            <Link
              href="/case-studies/kabam-plumbing"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
            >
              Read the case study
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

      {/* How to choose */}
      <section className="bg-[#fafaf8] py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-2">How to Choose the Right Agency by Revenue</h2>
          <p className="text-gray-500 text-sm mb-10 border-b border-gray-200 pb-6">The right agency depends heavily on your current revenue and what problem you are actually trying to solve.</p>
          <div className="space-y-4">
            {howToChoose.map((item) => (
              <div key={item.tier} className="flex gap-5 p-5 rounded-xl bg-white border border-gray-200">
                <div className="shrink-0">
                  <span className="inline-block rounded-lg bg-[#C8EDD2] px-3 py-1 text-xs font-bold text-[#0D2318] whitespace-nowrap">{item.tier}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.rec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-lg font-extrabold text-[#1a1a1a] mb-5">Related: Plumbing Marketing Resources</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Plumbing SEO Services", href: "/plumbing-seo" },
              { label: "Plumbing Statistics 2026", href: "/plumbing-statistics" },
              { label: "Local Services Ads Guide", href: "/lsa-guide" },
              { label: "LSA Management Services", href: "/lsa-management" },
              { label: "Best HVAC Agencies", href: "/best-hvac-marketing-agencies" },
              { label: "Fractional CMO", href: "/fractional-cmo" },
              { label: "Best Plumbing SEO Keywords", href: "/blog/best-plumbing-seo-keywords" },
              { label: "GEO for Plumbers", href: "/geo-for-plumbers" },
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
      <section className="bg-[#1A5C3A] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-2xl font-extrabold text-white sm:text-3xl">
            Want a second opinion on your current plumbing marketing?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
            We run a free audit of your current setup before the first call. Google Ads, LSA, SEO, booking rates, and what the numbers are actually saying.
          </p>
          <div className="mt-8">
            <Link
              href="/contact#book"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
