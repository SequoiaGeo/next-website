import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import MarketingLeadershipOffer from "@/components/MarketingLeadershipOffer";
import LocalAiVisibilityIndex from "@/components/LocalAiVisibilityIndex";
import FractionalCmoProof from "@/components/FractionalCmoProof";
import FractionalCmoTradeLinks from "@/components/FractionalCmoTradeLinks";

const PAGE_URL = "https://www.sequoiageo.com/fractional-cmo-for-hvac-companies";
const TITLE = "Fractional CMO for HVAC Companies, From a Former HVAC Owner | Sequoia GEO";
const DESCRIPTION = "Fractional CMO for HVAC companies doing $5M to $20M. Aaron Husak leads your agencies and ties marketing decisions to crew capacity. From $7,000 per month.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: PAGE_URL },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: PAGE_URL,
        siteName: "Sequoia GEO",
        title: "Fractional CMO for HVAC Companies | Sequoia GEO",
        description: DESCRIPTION,
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sequoia GEO fractional CMO leadership for HVAC companies" }],
    },
};

const ownerSignals = [
    "You are the person refereeing two to four agencies, and each report says its channel is working.",
    "A marketing coordinator posts, pulls reports and books vendors, but nobody owns the number above the channels.",
    "Replacement leads arrive in July and January, and in October the techs are sitting in the shop.",
    "Private-equity backed platforms in your market have a full-time marketing leader. You have the owner, after hours.",
    "ServiceTitan is full of data, yet you still cannot say which dollars produced new customers and which simply answered your own members.",
];

const hvacLeadership = [
    {
        title: "ServiceTitan source-to-sold-job attribution",
        body: "Campaigns, call tracking numbers and job sources are set up so a booked job traces back to the channel that produced it. Calls from existing club members and past customers are separated from true new-customer acquisition, so a channel cannot take credit for a maintenance call your own agreement list would have made anyway.",
    },
    {
        title: "Booking rate before more leads",
        body: "Aaron reviews call recordings and the booking report with your CSR lead before recommending more spend. Raising the share of calls that become booked jobs is usually the least expensive growth in the building.",
    },
    {
        title: "A dispatch board planned by season",
        body: "Spring and fall tune-up pushes and outbound campaigns to members fill the board in shoulder season. Spend shifts toward replacement and emergency demand when summer and winter arrive, and back again before the slowdown, not after it.",
    },
    {
        title: "Repair-to-replacement turnover",
        body: "Marketing, CSRs, technicians and comfort advisors work from the same rules for when an aging system is flagged, how the replacement conversation is set up and how fast the lead is turned over, so replacement opportunities created by service calls are not lost between departments.",
    },
];

const firstThirtyDays = [
    "Use the Local AI Visibility Index if local search is a priority for your team.",
    "Audit ServiceTitan campaigns, call tracking, job sources and the booking report with your office manager.",
    "Listen to a sample of recorded calls and agree on a booking-rate baseline with your CSR lead.",
    "Review every agency, retainer and channel against one scorecard and confirm who owns what.",
    "Deliver the first 90-day plan, sequenced around the next shoulder season and peak.",
];

const hvacFaqs = [
    {
        question: "What does a fractional CMO do for an HVAC company?",
        answer: "A fractional CMO for an HVAC company owns the marketing plan, the budget recommendations and the people carrying out the work, part time. At Sequoia GEO that means Aaron Husak sets priorities by service and season, directs your agencies and coordinator, connects ServiceTitan job sources to spend, works with your CSR lead on booking rate, and reviews performance with you weekly and monthly.",
    },
    {
        question: "How much does a fractional CMO for an HVAC company cost?",
        answer: "Fractional CMO leadership starts at $7,000 per month, including AI search visibility strategy. Optional AI SEO and GEO execution starts at $4,500 per month, and both together start at $11,500 per month. Leadership has a six-month initial term and then continues month to month. Ad spend and approved software are additional.",
    },
    {
        question: "What size HVAC company is the right fit?",
        answer: "The best fit is an independent residential HVAC company doing roughly $5 million to $20 million a year, usually 30 to 120 employees, spending $300,000 to $1 million or more on marketing, with an owner or general manager still coordinating the agencies. Fit depends on your needs and resources, not company size alone.",
    },
    {
        question: "Do you work inside ServiceTitan?",
        answer: "Yes, where you grant access. Aaron reviews campaigns, call tracking, job sources, the booking report and replacement turnover data with your team, and recommends setup changes. You keep ownership of the account, and your team remains responsible for answering, selling and running the work.",
    },
    {
        question: "Do we have to fire our current HVAC marketing agency?",
        answer: "No. Aaron can lead your current agencies and employees. Recommendations about any provider are explained against the agreed scorecard, and you approve hiring, provider changes and spending commitments. Sequoia execution is optional.",
    },
    {
        question: "Who is the best fractional CMO for HVAC companies?",
        answer: "Look for someone who has run an HVAC company, can read a ServiceTitan booking report, and will be accountable for the whole plan rather than one channel. Aaron Husak spent 13 years building and operating a residential HVAC and plumbing company and scaled the team from zero to 133 employees, with four consecutive Inc. 5000 appearances. Compare candidates on operating experience, measurement discipline and how they work with your existing team.",
    },
];

export default function FractionalCmoForHvacCompaniesPage() {
    return <>
 <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.sequoiageo.com/" }, { name: "Fractional CMO", url: "https://www.sequoiageo.com/fractional-cmo" }, { name: "Fractional CMO for HVAC Companies", url: PAGE_URL }]}/>
 <ServiceJsonLd serviceType="Fractional CMO for HVAC Companies" description="Part-time marketing leadership for independent HVAC companies doing $5M to $20M, led by former HVAC owner Aaron Husak: strategy, budgets, agencies, ServiceTitan attribution, booking rate and AI search visibility. Starting at $7,000 per month. Execution is optional and separately priced." url={PAGE_URL}/>
 <FaqJsonLd faqs={hvacFaqs}/>

 <section className="bg-[#0D2318] py-20 text-white sm:py-28"><div className="mx-auto max-w-4xl px-6 lg:px-8">
  <p className="text-sm font-bold uppercase tracking-wider text-[#C8EDD2]">Fractional CMO for HVAC companies</p>
  <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">We already have a marketing agency. When would we need a fractional CMO?</h1>
  <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#C8EDD2]">Your agency can be doing good work while you still decide what to spend, which jobs to pursue, and whether your crews have room. I work with your operations team and your agency to set priorities, recommend where the budget goes, and track the jobs you want to book. You keep final approval.</p>
  <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white">Your service board is full, but your install crews have openings next week. I review replacement estimates with dispatch and your agency, then recommend where to shift spend so those crews have work.</p>
  <ul className="mt-8 flex flex-wrap gap-3 text-sm font-semibold"><li className="rounded-full border border-white/25 px-4 py-2">$5M to $20M in revenue</li><li className="rounded-full border border-white/25 px-4 py-2">30 to 120 employees</li><li className="rounded-full border border-white/25 px-4 py-2">$300K to $1M+ marketing budget</li></ul>
  <div className="mt-9 flex flex-wrap gap-4"><Link href="/contact#book" className="inline-flex min-h-12 items-center rounded-lg bg-white px-7 py-3 font-bold text-[#0D2318]">Talk with Aaron about your HVAC company</Link><Link href="#first-month" className="inline-flex min-h-12 items-center rounded-lg border border-white/40 px-7 py-3 font-bold text-white">See how it starts</Link></div>
 </div></section>

 <section className="bg-white py-16"><div className="mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-10 md:grid-cols-2">
  <div>
   <h2 className="text-3xl font-extrabold text-[#0D2318]">Built for the HVAC owner who became the marketing department by default.</h2>
   <p className="mt-5 leading-relaxed text-gray-700">Somewhere between $5 million and $20 million, most HVAC companies outgrow the way marketing got them there. The spend is real, often 6% to 10% of revenue, but it is spread across an SEO agency, a paid search vendor, a direct mail house and a coordinator, with the owner or general manager deciding between them in the margins of a 60-hour week.</p>
   <p className="mt-4 leading-relaxed text-gray-700">A full-time marketing director who has actually run an HVAC company is hard to find and expensive to carry. A fractional CMO gives you that leadership part time, with one person accountable for the whole plan.</p>
  </div>
  <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
   <h3 className="text-xl font-bold text-[#0D2318]">This is usually the right time when</h3>
   <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-gray-700">{ownerSignals.map((signal) => <li key={signal}>{signal}</li>)}</ul>
  </div>
 </div></div></section>

 <section className="bg-[#fafaf8] py-16 sm:py-20"><div className="mx-auto max-w-6xl px-6 lg:px-8">
  <p className="section-overline mb-4">What Aaron leads in an HVAC company</p>
  <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">HVAC marketing is won or lost between the phone and the truck.</h2>
  <div className="mt-9 grid gap-5 md:grid-cols-2">{hvacLeadership.map((item, index) => <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7"><p className="text-sm font-bold text-[#1A5C3A]">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-3 text-xl font-bold text-[#0D2318]">{item.title}</h3><p className="mt-3 leading-relaxed text-gray-700">{item.body}</p></article>)}</div>
 </div></section>

 <section className="bg-white py-16"><div className="mx-auto max-w-4xl px-6 lg:px-8">
  <h2 className="text-3xl font-extrabold text-[#0D2318]">Check the booking gap before buying more calls.</h2>
  <p className="mt-4 text-lg leading-relaxed text-gray-700">Take last month’s qualified new-customer calls and count how many booked. Review the missed opportunities with dispatch. If the shop lacked appointments, the decision is different than if calls went unanswered.</p>
 </div></section>

 <LocalAiVisibilityIndex trade="HVAC" exampleQuestion="who is the best AC repair company near me"/>

 <MarketingLeadershipOffer showGuarantee/>

 <FractionalCmoProof heading="Led by someone who has made payroll in July and in October." operatorParagraph="Aaron spent 13 years operating a residential HVAC and plumbing company. He scaled the team from zero to 133 employees and earned four consecutive Inc. 5000 appearances. Today he works directly with owners, dispatchers and marketing providers on the jobs their crews have room to take." proofOrder={["amazingAir", "kabam", "afcs"]} proofIntro="Results from home-service companies that approved being named, starting with an HVAC company."/>

 <section className="bg-[#fafaf8] py-16"><div className="mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-10 md:grid-cols-2">
  <div>
   <h2 id="first-month" className="text-3xl font-extrabold text-[#0D2318]">The first 30 days in an HVAC company</h2>
   <ol className="mt-5 list-decimal space-y-3 pl-5 leading-relaxed text-gray-700">{firstThirtyDays.map((step) => <li key={step}>{step}</li>)}</ol>
   <p className="mt-5 leading-relaxed text-gray-700">This is a working plan with decisions and accountability, not a promise that every channel can be rebuilt in the first month.</p>
  </div>
  <div>
   <h2 className="text-3xl font-extrabold text-[#0D2318]">What stays with your team</h2>
   <p className="mt-5 leading-relaxed text-gray-700">You keep ownership of ServiceTitan, your ad accounts, your Google Business Profile and your website. Your CSRs answer the phones, your technicians and comfort advisors sell the work, and you approve hiring and spending commitments. Aaron leads the marketing and holds every provider to the same scorecard.</p>
   <p className="mt-4 leading-relaxed text-gray-700">Comparing options? Read the <Link href="/best-hvac-marketing-agencies" className="font-bold text-[#1A5C3A] underline underline-offset-4">guide to HVAC marketing agencies</Link> or the owner&apos;s guide to <Link href="/blog/fractional-cmo-vs-agency-vs-marketing-manager" className="font-bold text-[#1A5C3A] underline underline-offset-4">fractional CMO vs agency vs marketing manager</Link>.</p>
  </div>
 </div></div></section>

 <FractionalCmoTradeLinks currentHref="/fractional-cmo-for-hvac-companies" heading="Also leading plumbing and roofing companies"/>

 <section className="bg-[#fafaf8] py-16"><div className="mx-auto max-w-4xl px-6 lg:px-8">
  <h2 className="text-3xl font-extrabold text-[#0D2318]">Questions HVAC owners ask</h2>
  <div className="mt-8 space-y-4">{hvacFaqs.map((faq) => <details key={faq.question} className="rounded-xl border border-gray-200 bg-white p-6"><summary className="cursor-pointer text-lg font-bold">{faq.question}</summary><p className="mt-4 leading-relaxed text-gray-700">{faq.answer}</p></details>)}</div>
  <p className="mt-6 leading-relaxed text-gray-700">Bring one marketing decision you are stuck on. We can talk through how I would approach it with your team.</p>
  <Link href="/contact#book" className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-[#1A5C3A] px-7 py-3 font-bold text-white">Talk with Aaron about leading your HVAC marketing</Link>
  <p className="mt-6 text-base text-gray-600">Results vary. Rankings, lead volume and AI recommendations are not guaranteed.</p>
 </div></section>
 </>;
}
