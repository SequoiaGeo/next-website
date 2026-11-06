import Link from "next/link";
import type { Metadata } from "next";
import FaqJsonLd from "@/components/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import AiSearchTrustPanel from "@/components/AiSearchTrustPanel";
import LocalAiVisibilityIndex from "@/components/LocalAiVisibilityIndex";
import FractionalCmoTradeLinks from "@/components/FractionalCmoTradeLinks";
import { offerFaqs } from "@/lib/marketing-offer";

const PAGE_URL = "https://www.sequoiageo.com/ai-seo-pricing";
const TITLE = "Fractional CMO Pricing for Home Services: $7,000/Month | Sequoia GEO";
const DESCRIPTION = "How much does a fractional CMO cost? Leadership for $5M to $20M home service companies starts at $7,000/month. AI SEO and GEO execution starts at $4,500.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: PAGE_URL },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: PAGE_URL,
        siteName: "Sequoia GEO",
        title: "Fractional CMO Pricing for Home Service Companies | Sequoia GEO",
        description: DESCRIPTION,
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sequoia GEO fractional CMO and AI SEO pricing" }],
    },
};

const plans = [
    {
        name: "Fractional CMO leadership",
        price: "$7,000",
        cadence: "per month, starting",
        term: "Six-month initial term, then month to month",
        summary: "Aaron Husak leads your marketing function: priorities, positioning, budget recommendations, agencies and team, measurement, and AI search visibility strategy.",
        includes: [
            "Local AI Visibility Index to set the baseline",
            "Rolling 90-day plan with owners and deadlines",
            "AI search visibility strategy across ChatGPT, Google AI Overviews and Perplexity",
            "Direction and review of your agencies, coordinator and providers",
            "Weekly decision meetings and a monthly performance review",
        ],
        cta: "Discuss fractional CMO leadership",
        href: "/contact#book",
        featured: true,
    },
    {
        name: "AI SEO and GEO execution",
        price: "$4,500",
        cadence: "per month, starting",
        term: "90-day initial term, then month to month",
        summary: "The hands-on search work: SEO and GEO implementation, content from real jobs, website corrections, Google Business Profile management and tracking, in an agreed scope.",
        includes: [
            "SEO and GEO implementation with no separate AI surcharge",
            "Service and real-job content, citations and website fixes",
            "Google Business Profile posts and review responses",
            "Documented AI search baseline and repeatable questions",
            "Available on its own or under Sequoia leadership",
        ],
        cta: "Discuss AI SEO and GEO execution",
        href: "/contact#book",
        featured: false,
    },
    {
        name: "Leadership and execution",
        price: "$11,500",
        cadence: "per month, starting",
        term: "Each part keeps its own initial term",
        summary: "Aaron leads the plan and directs a defined Sequoia execution team to carry it out, with one scorecard across strategy and delivery.",
        includes: [
            "Everything in fractional CMO leadership",
            "Everything in AI SEO and GEO execution",
            "One accountable owner from plan to published work",
            "Execution volumes and channels agreed in writing",
            "Your existing providers can stay where they perform",
        ],
        cta: "Discuss leadership and execution",
        href: "/contact#book",
        featured: false,
    },
];

const costDrivers = [
    { title: "Time and decision authority", body: "How much of the marketing function the fractional CMO owns, how often you meet, and how much direct access your team needs between meetings." },
    { title: "Company complexity", body: "The number of brands, locations, service lines, providers and channels to lead. A single-location HVAC company and a three-brand, multi-trade platform are priced differently." },
    { title: "Execution included or not", body: "Leadership sets direction and reviews the work. Hands-on production, such as SEO, GEO, content and ads management, is a separate execution scope." },
    { title: "Measurement starting point", body: "Clean call tracking and field-software job sources take less work to lead than accounts that first need attribution rebuilt." },
];

const pricingFaqs = [
    {
        question: "How much does a fractional CMO cost?",
        answer: "Most fractional CMOs charge a monthly retainer set by time commitment, decision authority, company complexity and whether execution is included. Hourly and project arrangements also exist. At Sequoia GEO, fractional CMO leadership for home service companies starts at $7,000 per month, with a six-month initial term and month-to-month service afterward.",
    },
    {
        question: "How much does a fractional CMO cost for a home service company?",
        answer: "For an independent HVAC, plumbing, roofing or other home service company doing roughly $5 million to $20 million, Sequoia GEO fractional CMO leadership starts at $7,000 per month. Optional AI SEO and GEO execution starts at $4,500 per month, and both together start at $11,500 per month. Ad spend and approved software are additional.",
    },
    {
        question: "What is included in the $7,000 fractional CMO retainer?",
        answer: "The retainer covers marketing leadership from Aaron Husak: business priorities, positioning, a rolling 90-day plan, budget recommendations, direction of your team and providers, measurement and accountability, coordination with operations, technology and AI direction, AI search visibility strategy, weekly decision meetings and a monthly performance review. Every engagement starts with the Local AI Visibility Index.",
    },
    {
        question: "Is AI SEO included in the fractional CMO price?",
        answer: "AI search visibility strategy is included in leadership. Hands-on AI SEO and GEO work, such as content, website corrections, Google Business Profile management and citations, is the optional execution scope starting at $4,500 per month. GEO is part of the agreed search work, with no separate AI surcharge.",
    },
    {
        question: "How much does AI SEO cost on its own?",
        answer: "Sequoia GEO AI SEO and GEO execution starts at $4,500 per month with a 90-day initial term, then continues month to month. The written scope sets the channels, production volumes, approvals and responsibilities. You can engage execution without fractional CMO leadership.",
    },
];

const faqs = [...pricingFaqs, ...offerFaqs.filter((faq) => faq.question !== "What does Sequoia GEO charge?")];

const offerCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Fractional CMO Leadership and AI SEO Execution",
    serviceType: "Fractional CMO",
    url: PAGE_URL,
    provider: { "@type": "Organization", "@id": "https://www.sequoiageo.com/#organization", name: "Sequoia GEO", url: "https://www.sequoiageo.com" },
    areaServed: { "@type": "Country", name: "United States" },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Sequoia GEO starting prices",
        itemListElement: [
            { name: "Fractional CMO leadership", price: 7000 },
            { name: "AI SEO and GEO execution", price: 4500 },
            { name: "Fractional CMO leadership and execution", price: 11500 },
        ].map((offer) => ({
            "@type": "Offer",
            name: offer.name,
            priceCurrency: "USD",
            priceSpecification: { "@type": "UnitPriceSpecification", price: offer.price, priceCurrency: "USD", unitText: "MONTH", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" } },
            url: PAGE_URL,
        })),
    },
};

export default function PricingPage() {
    return <>
 <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.sequoiageo.com/" }, { name: "Fractional CMO Pricing", url: PAGE_URL }]}/>
 <FaqJsonLd faqs={faqs}/>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}/>

 <section className="bg-[#0D2318] py-20 text-white sm:py-24"><div className="mx-auto max-w-4xl px-6 lg:px-8">
  <p className="font-semibold text-[#C8EDD2]">Fractional CMO pricing</p>
  <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Fractional CMO pricing for home service companies</h1>
  <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]">Fractional CMO leadership starts at <strong className="text-white">$7,000 per month</strong>, with AI search visibility strategy included. It is built for independent HVAC, plumbing, roofing and other home service companies doing $5 million to $20 million. Add AI SEO and GEO execution from $4,500 per month, or engage both from $11,500.</p>
  <div className="mt-8 flex flex-wrap gap-4"><Link href="/contact#book" className="inline-flex min-h-12 items-center rounded-lg bg-white px-7 py-3 font-bold text-[#0D2318]">Discuss your plan with Aaron</Link><Link href="#pricing-plans" className="inline-flex min-h-12 items-center rounded-lg border border-white/40 px-7 py-3 font-bold text-white">Compare the options</Link></div>
 </div></section>

 <section id="pricing-plans" aria-labelledby="pricing-plans-heading" className="bg-[#fafaf8] py-16 sm:py-20"><div className="mx-auto max-w-6xl px-6 lg:px-8">
  <p className="section-overline mb-4">Leadership first. Execution when you need it.</p>
  <h2 id="pricing-plans-heading" className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">What a fractional CMO costs at Sequoia GEO</h2>
  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">Start with the leadership your business needs. Keep your existing team and providers, or add a defined Sequoia execution scope to carry out the plan. Optional marketing execution is priced separately and can also be engaged on its own.</p>
  <div className="mt-9 grid gap-6 lg:grid-cols-3">
   {plans.map((plan) => <article key={plan.name} className={plan.featured ? "flex flex-col rounded-2xl bg-[#0D2318] p-7 text-white sm:p-8" : "flex flex-col rounded-2xl border border-[#0D2318]/20 bg-white p-7 sm:p-8"}>
    {plan.featured && <p className="mb-3 w-fit rounded-full bg-[#C8EDD2] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0D2318]">Primary engagement</p>}
    <h3 className={plan.featured ? "text-2xl font-bold" : "text-2xl font-bold text-[#0D2318]"}>{plan.name}</h3>
    <p className={plan.featured ? "mt-4 text-4xl font-extrabold" : "mt-4 text-4xl font-extrabold text-[#0D2318]"}>{plan.price}</p>
    <p className={plan.featured ? "mt-1 text-sm text-[#C8EDD2]" : "mt-1 text-sm text-gray-600"}>{plan.cadence}. {plan.term}.</p>
    <p className={plan.featured ? "mt-5 leading-relaxed text-[#C8EDD2]" : "mt-5 leading-relaxed text-gray-700"}>{plan.summary}</p>
    <ul className={plan.featured ? "mt-5 flex-1 list-disc space-y-2 pl-5 leading-relaxed text-[#C8EDD2]" : "mt-5 flex-1 list-disc space-y-2 pl-5 leading-relaxed text-gray-700"}>{plan.includes.map((item) => <li key={item}>{item}</li>)}</ul>
    <Link href={plan.href} className={plan.featured ? "mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-[#0D2318]" : "mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#1A5C3A] px-6 py-3 font-bold text-white"}>{plan.cta}</Link>
   </article>)}
  </div>
  <p className="mt-6 text-base leading-relaxed text-gray-700">All fees are in USD. Ad spend and approved third-party software are additional. Channels, production volumes and responsibilities are agreed in writing. Major website builds are quoted separately. You retain ownership of your accounts and assets, and approve hiring and spending commitments.</p>
  <p className="mt-4"><Link href="/fractional-cmo" className="font-bold text-[#1A5C3A] underline underline-offset-4">See everything the fractional CMO role covers</Link></p>
 </div></section>

 <section className="bg-white py-16"><div className="mx-auto max-w-5xl px-6 lg:px-8">
  <h2 className="text-3xl font-extrabold text-[#0D2318]">What drives fractional CMO cost</h2>
  <p className="mt-5 leading-relaxed text-gray-700">Fractional CMO pricing is set by scope and responsibility, not by a list of deliverables. These are the factors that move a home service engagement above the starting fee.</p>
  <div className="mt-8 grid gap-5 md:grid-cols-2">{costDrivers.map((driver) => <article key={driver.title} className="rounded-xl border border-gray-200 p-6"><h3 className="text-xl font-bold">{driver.title}</h3><p className="mt-3 leading-relaxed text-gray-700">{driver.body}</p></article>)}</div>
  <div className="mt-8 grid gap-6 md:grid-cols-2"><article className="rounded-xl border border-gray-200 p-6"><h3 className="text-xl font-bold">Starting terms</h3><p className="mt-3 leading-relaxed text-gray-700">Leadership has a six-month initial term. Execution has a 90-day initial term. Each continues month to month afterward. The agreement confirms dates, deliverables and terms before work begins.</p></article><article className="rounded-xl border border-gray-200 p-6"><h3 className="text-xl font-bold">What changes the price</h3><p className="mt-3 leading-relaxed text-gray-700">Additional brands, locations, channels, providers, production volume, integration complexity and meeting requirements. Any added scope and cost are agreed before the work begins.</p></article></div>
 </div></section>

 <LocalAiVisibilityIndex trade="home service" exampleQuestion="who is the best HVAC company near me"/>

 <section className="bg-white py-16"><div className="mx-auto max-w-5xl px-6 lg:px-8"><h2 className="text-3xl font-extrabold text-[#0D2318]">What the AI SEO and GEO execution scope can cover</h2><p className="mt-5 leading-relaxed text-gray-700">SEO and GEO implementation, original service and community content, pages built from real jobs, technical website corrections, Google Business Profile management and review responses, citations, paid media and tracking. We agree on the channels, production volumes, approvals and responsibilities before work begins. The starting fee does not include every service or unlimited output.</p><p className="mt-5 leading-relaxed text-gray-700">AI search work uses a documented baseline and repeatable questions, with recommendations, citations and inquiries measured separately. GEO is part of the agreed search work, with no separate AI surcharge. Third-party software and advertising spend require separate approval.</p><Link href="/contact#book" className="mt-6 inline-flex min-h-12 items-center rounded-lg bg-[#1A5C3A] px-7 py-3 font-bold text-white">Discuss AI SEO and GEO execution</Link></div></section>

      <section className="bg-[#FAF7F2] py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#1A5C3A]/20 bg-white p-8 sm:p-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div>
                <p className="section-overline mb-3">Website projects</p>
                <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">Website Foundation starts at $2,500</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">One-time project pricing for a credible, responsive service-business site on Sequoia GEO&rsquo;s existing Next.js component system.</p>
              </div>
              <div className="text-sm leading-relaxed text-gray-700">
                <p>One location, up to five standard pages, a contact form, basic analytics and technical search setup, two written revision rounds, launch, and handoff.</p>
                <p className="mt-3">Custom website projects start at $7,500 when the work requires nonstandard interfaces, applications, booking flows, migrations, e-commerce, or advanced integrations. They are separately scoped and accepted only when Sequoia is the right technical fit.</p>
                <Link href="/web-design-fresno" className="mt-5 inline-block font-semibold text-[#1A5C3A] underline decoration-[#3A9E6A]/50 underline-offset-4 hover:text-[#0D2318]">See Website Foundation details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

 <FractionalCmoTradeLinks heading="Fractional CMO pricing by trade" intro="The same starting fees apply across trades. Each trade page shows how the leadership work and the call math differ for that business."/>

 <AiSearchTrustPanel/>

 <section className="bg-[#fafaf8] py-16"><div className="mx-auto max-w-4xl px-6 lg:px-8"><h2 className="text-3xl font-extrabold text-[#0D2318]">Fractional CMO pricing questions</h2><div className="mt-8 space-y-4">{faqs.map(faq => <details key={faq.question} className="rounded-xl border border-gray-200 bg-white p-6"><summary className="cursor-pointer text-lg font-bold">{faq.question}</summary><p className="mt-4 leading-relaxed text-gray-700">{faq.answer}</p></details>)}</div><Link href="/contact#book" className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-[#1A5C3A] px-7 py-3 font-bold text-white">Discuss your plan with Aaron</Link><p className="mt-6 text-base text-gray-600">Results vary. Rankings, lead volume and AI recommendations are not guaranteed.</p>
<p className="mt-5 leading-relaxed">To understand the buying options, <Link href="/blog/how-much-does-a-fractional-cmo-cost-pricing-models-what-you-get" className="font-semibold underline underline-offset-4">compare fractional CMO engagement models</Link>. Market examples in that guide are separate from the current Sequoia terms on this page.</p></div></section>
 </>;
}
