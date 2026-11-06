import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import MarketingLeadershipOffer from "@/components/MarketingLeadershipOffer";
import LocalAiVisibilityIndex from "@/components/LocalAiVisibilityIndex";
import FractionalCmoProof from "@/components/FractionalCmoProof";
import FractionalCmoTradeLinks from "@/components/FractionalCmoTradeLinks";

const PAGE_URL = "https://www.sequoiageo.com/fractional-cmo-for-roofing-companies";
const TITLE = "Fractional CMO for Roofing Companies | Sequoia GEO";
const DESCRIPTION = "Fractional CMO for roofing companies doing $5M to $20M. Build retail replacement demand beyond storm season, from $7,000 per month.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: PAGE_URL },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: PAGE_URL,
        siteName: "Sequoia GEO",
        title: TITLE,
        description: DESCRIPTION,
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sequoia GEO fractional CMO leadership for roofing companies" }],
    },
};

const ownerSignals = [
    "A good storm year made the company. A quiet one exposes how much of the pipeline depended on it.",
    "More claims are being denied or underpaid, and insurance-funded re-roofs no longer carry the year.",
    "Paid search, LSA, SEO, door knocking and direct mail are run by different people with different reports.",
    "Leads sit for hours before anyone calls, and the homeowner has already scheduled other roofers.",
    "Your CRM shows leads and your accounting shows sold roofs, but nothing connects the two by source.",
];

const roofingLeadership = [
    {
        title: "From storm-chasing to retail replacement demand",
        body: "Storm work stays in the plan, but it stops being the plan. Aaron builds year-round retail replacement demand from homeowners with aging roofs: age-of-home targeting, financing offers, neighborhood campaigns around completed jobs, and content that answers the questions homeowners ask before they call.",
    },
    {
        title: "A 7% to 12% budget with one owner",
        body: "Roofing companies often spend 7% to 12% of revenue on marketing across paid search, Local Services Ads, SEO, AI search, direct mail and canvassing. Aaron allocates that budget by cost per inspection and cost per sold roof, not cost per lead, and moves money as the evidence develops.",
    },
    {
        title: "Speed to lead and appointment setting",
        body: "A homeowner who fills out a form at lunch usually calls the next roofer on the list by dinner. Aaron works with your appointment setters on response time, call scripts and follow-up cadence so paid leads become inspections while the homeowner is still deciding.",
    },
    {
        title: "Lead to inspection to sold roof",
        body: "ServiceTitan, AccuLynx or JobNimbus is set up so each sold roof traces back to its source through the inspection. You see which channels produce signed contracts, which produce tire kickers, and what each sold roof actually cost to acquire.",
    },
];

const speedMath = [
    ["Retail roofing leads per month", "120", "120"],
    ["First response", "2+ hours", "Under 5 minutes"],
    ["Inspection set rate", "40%", "65%"],
    ["Inspections per month", "48", "78"],
    ["Close rate on inspections", "30%", "30%"],
    ["Sold roofs per month", "14", "23"],
    ["Revenue at $16,000 per retail roof", "$224,000", "$368,000"],
];

const firstThirtyDays = [
    "Deliver the Local AI Visibility Index for your market and replacement services.",
    "Map every lead source into ServiceTitan, AccuLynx or JobNimbus from lead to inspection to sold roof.",
    "Measure speed to lead and inspection set rate with your appointment setters.",
    "Review paid search, LSA, SEO, direct mail and canvassing spend against one scorecard.",
    "Deliver the first 90-day plan, with retail replacement demand that does not wait for weather.",
];

const roofingFaqs = [
    {
        question: "What does a fractional CMO do for a roofing company?",
        answer: "A fractional CMO for a roofing company leads the marketing function part time: the plan, the budget, the vendors and the measurement. At Sequoia GEO, Aaron Husak builds retail replacement demand that does not depend on storms, allocates spend by cost per sold roof, works with appointment setters on speed to lead, and connects your CRM so each sold roof traces back to its source.",
    },
    {
        question: "How much does a fractional CMO for a roofing company cost?",
        answer: "Fractional CMO leadership starts at $7,000 per month, including AI search visibility strategy. Optional AI SEO and GEO execution starts at $4,500 per month, and both together start at $11,500 per month. Leadership has a six-month initial term and then continues month to month. Ad spend, direct mail and approved software are additional.",
    },
    {
        question: "We do a lot of insurance and storm work. Is that a problem?",
        answer: "No. Storm and insurance work can stay in the mix. Capstone Partners reported in October 2026 that lower storm activity, carrier exits and rising claim denials have shrunk the claims-funded re-roofing pool, so the plan adds retail replacement demand and diversified lead sources that keep crews working between weather events.",
    },
    {
        question: "What size roofing company is the right fit?",
        answer: "The best fit is an independent residential roofing or exterior company doing roughly $5 million to $20 million a year, usually 30 to 120 employees and crews, spending $300,000 to $1 million or more on marketing, with an owner or sales manager still coordinating the vendors. Fit depends on your needs and resources, not company size alone.",
    },
    {
        question: "Which roofing CRMs do you work with?",
        answer: "Aaron works inside the system you already use, including ServiceTitan, AccuLynx and JobNimbus, where you grant access. You keep ownership of the account. The goal is a clean path from lead to inspection to sold roof by source, not a software migration.",
    },
    {
        question: "How does a fractional CMO engagement start?",
        answer: "Every engagement starts with the Local AI Visibility Index: an executive score, an AI recommendation map across ChatGPT, Google AI Overviews and Perplexity, share of AI voice against your top three local competitors, the sources AI cites, map-pack and GBP health, review velocity, and a 90-day action plan.",
    },
];

export default function FractionalCmoForRoofingCompaniesPage() {
    return <>
 <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.sequoiageo.com/" }, { name: "Fractional CMO", url: "https://www.sequoiageo.com/fractional-cmo" }, { name: "Fractional CMO for Roofing Companies", url: PAGE_URL }]}/>
 <ServiceJsonLd serviceType="Fractional CMO for Roofing Companies" description="Part-time marketing leadership for independent roofing companies doing $5M to $20M, led by former home-service owner Aaron Husak: retail replacement demand, budget allocation, speed to lead, CRM attribution from lead to sold roof, and AI search visibility. Starting at $7,000 per month. Execution is optional and separately priced." url={PAGE_URL}/>
 <FaqJsonLd faqs={roofingFaqs}/>

 <section className="bg-[#0D2318] py-20 text-white sm:py-28"><div className="mx-auto max-w-4xl px-6 lg:px-8">
  <p className="text-sm font-bold uppercase tracking-wider text-[#C8EDD2]">Fractional CMO for roofing companies</p>
  <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">Build a roofing company that does not wait for the next storm.</h1>
  <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#C8EDD2]">Aaron Husak spent 13 years building and operating a residential home-service company to more than 130 employees and $17M+ in revenue. Now he leads marketing for independent roofing owners: predictable retail replacement demand, a budget allocated by sold roof, faster response to every lead, and how your company shows up when homeowners ask AI who to trust with their roof.</p>
  <ul className="mt-8 flex flex-wrap gap-3 text-sm font-semibold"><li className="rounded-full border border-white/25 px-4 py-2">$5M to $20M in revenue</li><li className="rounded-full border border-white/25 px-4 py-2">30 to 120 employees and crews</li><li className="rounded-full border border-white/25 px-4 py-2">Retail and insurance roofing</li></ul>
  <div className="mt-9 flex flex-wrap gap-4"><Link href="/contact#book" className="inline-flex min-h-12 items-center rounded-lg bg-white px-7 py-3 font-bold text-[#0D2318]">Talk with Aaron about your roofing company</Link><Link href="#local-ai-visibility-index" className="inline-flex min-h-12 items-center rounded-lg border border-white/40 px-7 py-3 font-bold text-white">See how it starts</Link></div>
 </div></section>

 <section className="bg-white py-16"><div className="mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-10 md:grid-cols-2">
  <div>
   <h2 className="text-3xl font-extrabold text-[#0D2318]">Roofing revenue swings with the weather. Marketing should steady it.</h2>
   <p className="mt-5 leading-relaxed text-gray-700">Many roofing companies were built on storm years. That model is getting harder: Capstone Partners reported in October 2026 that lower storm activity, carrier exits and rising claim denials have shrunk the claims-funded re-roofing pool, and buyers now look for diversified lead generation and disciplined in-home sales.</p>
   <p className="mt-4 leading-relaxed text-gray-700">Between $5 million and $20 million, most roofers have the budget to build that kind of pipeline but no one whose job is to lead it. A fractional CMO is that person, part time, accountable for the whole plan.</p>
  </div>
  <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
   <h3 className="text-xl font-bold text-[#0D2318]">This is usually the right time when</h3>
   <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-gray-700">{ownerSignals.map((signal) => <li key={signal}>{signal}</li>)}</ul>
  </div>
 </div></div></section>

 <section className="bg-[#fafaf8] py-16 sm:py-20"><div className="mx-auto max-w-6xl px-6 lg:px-8">
  <p className="section-overline mb-4">What Aaron leads in a roofing company</p>
  <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">Count sold roofs, not leads.</h2>
  <div className="mt-9 grid gap-5 md:grid-cols-2">{roofingLeadership.map((item, index) => <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7"><p className="text-sm font-bold text-[#1A5C3A]">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-3 text-xl font-bold text-[#0D2318]">{item.title}</h3><p className="mt-3 leading-relaxed text-gray-700">{item.body}</p></article>)}</div>
  <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
   <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
    <table className="w-full min-w-[520px] border-collapse text-left"><caption className="p-5 text-left text-lg font-bold text-[#0D2318]">Speed-to-lead math on the same lead volume</caption><thead><tr className="border-y border-gray-200 bg-[#fafaf8]"><th scope="col" className="p-4">Illustration</th><th scope="col" className="p-4">Slow</th><th scope="col" className="p-4">Fast</th></tr></thead><tbody>{speedMath.map((row) => <tr key={row[0]} className="border-b border-gray-200"><th scope="row" className="p-4 font-semibold">{row[0]}</th><td className="p-4 text-gray-700">{row[1]}</td><td className="p-4 font-bold text-[#0D2318]">{row[2]}</td></tr>)}</tbody></table>
   </div>
   <div>
    <h3 className="text-2xl font-extrabold text-[#0D2318]">Nine more sold roofs a month, from leads you already bought.</h3>
    <p className="mt-4 leading-relaxed text-gray-700">When appointment setters reach every new lead in under five minutes, more homeowners book the inspection before they book someone else. Moving the inspection set rate from 40% to 65% on 120 monthly leads, with the same 30% close rate, produces 23 sold roofs instead of 14. At $16,000 per retail roof, that is $144,000 a month more on the same spend.</p>
    <p className="mt-4 text-sm leading-relaxed text-gray-600">This is an illustration, not a client result. Your baseline comes from your own CRM and call records.</p>
    <Link href="/marketing-leak-calculator" className="mt-5 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline underline-offset-4">Estimate your own marketing leak</Link>
   </div>
  </div>
 </div></section>

 <LocalAiVisibilityIndex trade="roofing" exampleQuestion="best roof replacement company near me"/>

 <MarketingLeadershipOffer/>

 <FractionalCmoProof heading="Led by an operator who has carried crews through slow months." operatorParagraph="Aaron spent 13 years building and operating Balanced Comfort, a residential home-service company in Fresno, from a one-person operation to more than 130 employees and $17M+ in annual revenue before its 2024 exit. The company appeared on the Inc. 5000 in 2021, 2022, 2023 and 2024 and reports more than 4,000 five-star reviews. Keeping crews busy when demand drops is the problem he solved for 13 years." proofOrder={["afcs", "kabam", "amazingAir"]} proofIntro="Results from home-service companies that approved being named, starting with a chimney and roofline service company. The same leadership and measurement discipline applies to roofing."/>

 <section className="bg-[#fafaf8] py-16"><div className="mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-10 md:grid-cols-2">
  <div>
   <h2 className="text-3xl font-extrabold text-[#0D2318]">The first 30 days in a roofing company</h2>
   <ol className="mt-5 list-decimal space-y-3 pl-5 leading-relaxed text-gray-700">{firstThirtyDays.map((step) => <li key={step}>{step}</li>)}</ol>
   <p className="mt-5 leading-relaxed text-gray-700">This is a working plan with decisions and accountability, not a promise that every channel can be rebuilt in the first month.</p>
  </div>
  <div>
   <h2 className="text-3xl font-extrabold text-[#0D2318]">What stays with your team</h2>
   <p className="mt-5 leading-relaxed text-gray-700">You keep ownership of your CRM, ad and LSA accounts, Google Business Profile and website. Your appointment setters book inspections, your sales reps sell the roof, your crews install it, and you approve hiring and spending commitments. Aaron leads the marketing and holds every provider to the same scorecard.</p>
   <p className="mt-4 leading-relaxed text-gray-700">Comparing options? Read the <Link href="/best-roofing-marketing-agencies" className="font-bold text-[#1A5C3A] underline underline-offset-4">guide to roofing marketing agencies</Link> or see how <Link href="/ai-seo-for-roofers" className="font-bold text-[#1A5C3A] underline underline-offset-4">AI search works for roofers</Link>.</p>
  </div>
 </div></div></section>

 <FractionalCmoTradeLinks currentHref="/fractional-cmo-for-roofing-companies" heading="Also leading HVAC and plumbing companies"/>

 <section className="bg-[#fafaf8] py-16"><div className="mx-auto max-w-4xl px-6 lg:px-8">
  <h2 className="text-3xl font-extrabold text-[#0D2318]">Questions roofing owners ask</h2>
  <div className="mt-8 space-y-4">{roofingFaqs.map((faq) => <details key={faq.question} className="rounded-xl border border-gray-200 bg-white p-6"><summary className="cursor-pointer text-lg font-bold">{faq.question}</summary><p className="mt-4 leading-relaxed text-gray-700">{faq.answer}</p></details>)}</div>
  <Link href="/contact#book" className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-[#1A5C3A] px-7 py-3 font-bold text-white">Talk with Aaron about leading your roofing marketing</Link>
  <p className="mt-6 text-base text-gray-600">Results vary. Rankings, lead volume and AI recommendations are not guaranteed.</p>
 </div></section>
 </>;
}
