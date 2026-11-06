import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import MarketingLeadershipOffer from "@/components/MarketingLeadershipOffer";
import LocalAiVisibilityIndex from "@/components/LocalAiVisibilityIndex";
import FractionalCmoProof from "@/components/FractionalCmoProof";
import FractionalCmoTradeLinks from "@/components/FractionalCmoTradeLinks";

const PAGE_URL = "https://www.sequoiageo.com/fractional-cmo-for-plumbing-companies";
const TITLE = "Fractional CMO for Plumbing and Septic Companies | Sequoia GEO";
const DESCRIPTION = "Fractional CMO for plumbing, drain and septic companies doing $5M to $20M. A former plumbing and HVAC owner leads your marketing for $7,000 per month.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: PAGE_URL },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: PAGE_URL,
        siteName: "Sequoia GEO",
        title: "Fractional CMO for Plumbing Companies | Sequoia GEO",
        description: DESCRIPTION,
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sequoia GEO fractional CMO leadership for plumbing companies" }],
    },
};

const ownerSignals = [
    "The phones ring, but nobody can tell you how many calls went to voicemail last Saturday night.",
    "Drain cleanings and water heater swaps keep the board full while repipe, sewer and septic replacement leads arrive by accident.",
    "Local Services Ads, Google Business Profile, SEO and an answering service are each managed by someone different.",
    "Your marketing coordinator reports activity, and you still decide every budget question yourself.",
    "A roll-up just bought the shop across town and is spending like it.",
];

const plumbingLeadership = [
    {
        title: "A call board you can trust",
        body: "ServiceTitan or Housecall Pro campaigns, call tracking numbers and job types are set up so every booked job carries its source. You see which channels produce emergency service calls, which produce sewer and repipe estimates, and which produce neither.",
    },
    {
        title: "Fill the board, then raise the ticket",
        body: "Drain, leak and water heater calls keep technicians busy and earn trust. The plan protects that volume while deliberately building demand for high-margin work: whole-home repipes, sewer line replacement, trenchless repair and septic replacement, each with its own pages, offers and follow-up.",
    },
    {
        title: "After-hours and price-shopper leaks",
        body: "Missed calls, voicemail at 9 p.m., and the caller who asks for a price and hangs up are where plumbing marketing dollars disappear. Aaron works with your CSR lead and answering service on scripts, callbacks and booking rate so paid demand turns into booked work.",
    },
    {
        title: "GBP, LSA and AI search capture",
        body: "Emergency plumbing is decided in the map pack, Local Services Ads and, increasingly, AI answers. Your Google Business Profile, LSA dispute and review process, and the sources AI cites are managed as one system with one owner.",
    },
];

const callMath = [
    ["Inbound calls per month", "400", "400"],
    ["Missed or sent to voicemail", "13% (52)", "3% (12)"],
    ["Calls answered", "348", "388"],
    ["Booking rate on answered calls", "42%", "80%"],
    ["Booked jobs per month", "146", "310"],
    ["Revenue at $550 per booked job", "$80,300", "$170,500"],
];

const firstThirtyDays = [
    "Deliver the Local AI Visibility Index for your market, including emergency and septic questions.",
    "Audit call tracking, missed calls and after-hours handling in ServiceTitan or Housecall Pro.",
    "Set a booking-rate baseline from recorded calls with your CSR lead and answering service.",
    "Review GBP, LSA, SEO and paid search providers against one scorecard.",
    "Deliver the first 90-day plan, balancing dispatch-filling calls with replacement and septic demand.",
];

const plumbingFaqs = [
    {
        question: "What does a fractional CMO do for a plumbing company?",
        answer: "A fractional CMO for a plumbing company leads the marketing function part time: the plan, the budget recommendations, the agencies and the measurement. At Sequoia GEO, Aaron Husak connects call tracking and job sources in ServiceTitan or Housecall Pro to spend, works with your CSRs on missed calls and booking rate, and builds demand for repipe, sewer, trenchless and septic work alongside the service calls that fill the board.",
    },
    {
        question: "How much does a fractional CMO for a plumbing company cost?",
        answer: "Fractional CMO leadership starts at $7,000 per month, including AI search visibility strategy. Optional AI SEO and GEO execution starts at $4,500 per month, and both together start at $11,500 per month. Leadership has a six-month initial term and then continues month to month. Ad spend and approved software are additional.",
    },
    {
        question: "Do you work with septic and drain companies?",
        answer: "Yes. Septic pumping, inspection and system replacement, along with drain and sewer work, follow the same leadership model. The plan separates routine service demand from high-value replacement jobs, and the Local AI Visibility Index includes the questions homeowners ask about septic problems in your area.",
    },
    {
        question: "What size plumbing company is the right fit?",
        answer: "The best fit is an independent plumbing, drain or septic company doing roughly $5 million to $20 million a year, usually 30 to 120 employees, spending $300,000 to $1 million or more on marketing, with an owner or general manager still coordinating the vendors. Fit depends on your needs and resources, not company size alone.",
    },
    {
        question: "Can we keep our current plumbing marketing agency?",
        answer: "Yes. Aaron can lead your current agencies, answering service and employees. Recommendations about providers are explained against the agreed scorecard, and you approve hiring, provider changes and spending commitments. Sequoia execution is optional.",
    },
    {
        question: "How does a fractional CMO engagement start?",
        answer: "Every engagement starts with the Local AI Visibility Index: an executive score, an AI recommendation map across ChatGPT, Google AI Overviews and Perplexity, share of AI voice against your top three local competitors, the sources AI cites, map-pack and GBP health, review velocity, and a 90-day action plan.",
    },
];

export default function FractionalCmoForPlumbingCompaniesPage() {
    return <>
 <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.sequoiageo.com/" }, { name: "Fractional CMO", url: "https://www.sequoiageo.com/fractional-cmo" }, { name: "Fractional CMO for Plumbing Companies", url: PAGE_URL }]}/>
 <ServiceJsonLd serviceType="Fractional CMO for Plumbing Companies" description="Part-time marketing leadership for independent plumbing, drain and septic companies doing $5M to $20M, led by former plumbing and HVAC owner Aaron Husak: strategy, budgets, agencies, call-board attribution, booking rate and AI search visibility. Starting at $7,000 per month. Execution is optional and separately priced." url={PAGE_URL}/>
 <FaqJsonLd faqs={plumbingFaqs}/>

 <section className="bg-[#0D2318] py-20 text-white sm:py-28"><div className="mx-auto max-w-4xl px-6 lg:px-8">
  <p className="text-sm font-bold uppercase tracking-wider text-[#C8EDD2]">Fractional CMO for plumbing companies</p>
  <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">Keep the board full. Grow the jobs that pay for the trucks.</h1>
  <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#C8EDD2]">Aaron Husak spent 13 years building and operating Balanced Comfort, a residential plumbing and HVAC company licensed for plumbing in California, to more than 130 employees. Now he leads marketing for independent plumbing, drain and septic owners: the plan, the budget, the agencies, the missed calls and how your company shows up when a homeowner with a flooded floor asks AI who to call.</p>
  <ul className="mt-8 flex flex-wrap gap-3 text-sm font-semibold"><li className="rounded-full border border-white/25 px-4 py-2">$5M to $20M in revenue</li><li className="rounded-full border border-white/25 px-4 py-2">30 to 120 employees</li><li className="rounded-full border border-white/25 px-4 py-2">Plumbing, drain, sewer and septic</li></ul>
  <div className="mt-9 flex flex-wrap gap-4"><Link href="/contact#book" className="inline-flex min-h-12 items-center rounded-lg bg-white px-7 py-3 font-bold text-[#0D2318]">Talk with Aaron about your plumbing company</Link><Link href="#local-ai-visibility-index" className="inline-flex min-h-12 items-center rounded-lg border border-white/40 px-7 py-3 font-bold text-white">See how it starts</Link></div>
 </div></section>

 <section className="bg-white py-16"><div className="mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-10 md:grid-cols-2">
  <div>
   <h2 className="text-3xl font-extrabold text-[#0D2318]">Plumbing marketing has two jobs, and most vendors only see one.</h2>
   <p className="mt-5 leading-relaxed text-gray-700">The first job is answering urgent demand fast enough to win it: the clogged drain, the leak behind the wall, the water heater that quit before a shower. The second is building the replacement work that carries your margin: repipes, sewer lines, trenchless repairs and septic systems. An LSA vendor, an SEO agency and an answering service each optimize their own piece. Nobody balances the two.</p>
   <p className="mt-4 leading-relaxed text-gray-700">Between $5 million and $20 million, that balancing act usually lands on the owner. A fractional CMO takes it off your desk, with one person accountable for the whole plan.</p>
  </div>
  <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
   <h3 className="text-xl font-bold text-[#0D2318]">This is usually the right time when</h3>
   <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-gray-700">{ownerSignals.map((signal) => <li key={signal}>{signal}</li>)}</ul>
  </div>
 </div></div></section>

 <section className="bg-[#fafaf8] py-16 sm:py-20"><div className="mx-auto max-w-6xl px-6 lg:px-8">
  <p className="section-overline mb-4">What Aaron leads in a plumbing company</p>
  <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">Win the emergency call. Earn the replacement job.</h2>
  <div className="mt-9 grid gap-5 md:grid-cols-2">{plumbingLeadership.map((item, index) => <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7"><p className="text-sm font-bold text-[#1A5C3A]">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-3 text-xl font-bold text-[#0D2318]">{item.title}</h3><p className="mt-3 leading-relaxed text-gray-700">{item.body}</p></article>)}</div>
  <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
   <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
    <table className="w-full min-w-[520px] border-collapse text-left"><caption className="p-5 text-left text-lg font-bold text-[#0D2318]">Missed-call and booking math on the same call volume</caption><thead><tr className="border-y border-gray-200 bg-[#fafaf8]"><th scope="col" className="p-4">Illustration</th><th scope="col" className="p-4">Leaking</th><th scope="col" className="p-4">Plugged</th></tr></thead><tbody>{callMath.map((row) => <tr key={row[0]} className="border-b border-gray-200"><th scope="row" className="p-4 font-semibold">{row[0]}</th><td className="p-4 text-gray-700">{row[1]}</td><td className="p-4 font-bold text-[#0D2318]">{row[2]}</td></tr>)}</tbody></table>
   </div>
   <div>
    <h3 className="text-2xl font-extrabold text-[#0D2318]">164 more booked jobs a month from calls you already paid for.</h3>
    <p className="mt-4 leading-relaxed text-gray-700">In one published plumbing example, 13% of calls went to voicemail. Published figures put the average booking rate around 42%. Answer nearly every call, after hours included, and book 80% of the ones you should, and 400 monthly calls become 310 booked jobs instead of 146. At $550 per booked job, that is $90,200 a month more, before a single repipe or septic replacement closes.</p>
    <p className="mt-4 text-sm leading-relaxed text-gray-600">This is an illustration, not a client result. Your baseline comes from your own call logs and booking report.</p>
    <Link href="/resources/where-are-my-calls-going" className="mt-5 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline underline-offset-4">Find out where your calls are going</Link>
   </div>
  </div>
 </div></section>

 <LocalAiVisibilityIndex trade="plumbing" exampleQuestion="emergency plumber near me open now"/>

 <MarketingLeadershipOffer/>

 <FractionalCmoProof heading="Led by an owner who has answered the 2 a.m. call." operatorParagraph="Aaron spent 13 years building and operating Balanced Comfort, a residential plumbing and HVAC company in Fresno, from a one-person operation to more than 130 employees and $17M+ in annual revenue before its 2024 exit. The company appeared on the Inc. 5000 in 2021, 2022, 2023 and 2024 and reports more than 4,000 five-star reviews. He has staffed the after-hours phone, priced the repipe and argued with the answering service." proofOrder={["kabam", "afcs", "amazingAir"]} proofIntro="Results from home-service companies that approved being named, starting with a plumbing company."/>

 <section className="bg-[#fafaf8] py-16"><div className="mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-10 md:grid-cols-2">
  <div>
   <h2 className="text-3xl font-extrabold text-[#0D2318]">The first 30 days in a plumbing company</h2>
   <ol className="mt-5 list-decimal space-y-3 pl-5 leading-relaxed text-gray-700">{firstThirtyDays.map((step) => <li key={step}>{step}</li>)}</ol>
   <p className="mt-5 leading-relaxed text-gray-700">This is a working plan with decisions and accountability, not a promise that every channel can be rebuilt in the first month.</p>
  </div>
  <div>
   <h2 className="text-3xl font-extrabold text-[#0D2318]">What stays with your team</h2>
   <p className="mt-5 leading-relaxed text-gray-700">You keep ownership of your field software, ad and LSA accounts, Google Business Profile and website. Your CSRs answer the phones, your plumbers sell and perform the work, and you approve hiring and spending commitments. Aaron leads the marketing and holds every provider to the same scorecard.</p>
   <p className="mt-4 leading-relaxed text-gray-700">Comparing options? Read the <Link href="/best-plumbing-marketing-agencies" className="font-bold text-[#1A5C3A] underline underline-offset-4">guide to plumbing marketing agencies</Link> or see how <Link href="/geo-for-plumbers" className="font-bold text-[#1A5C3A] underline underline-offset-4">AI search works for plumbers</Link>.</p>
  </div>
 </div></div></section>

 <FractionalCmoTradeLinks currentHref="/fractional-cmo-for-plumbing-companies" heading="Also leading HVAC and roofing companies"/>

 <section className="bg-[#fafaf8] py-16"><div className="mx-auto max-w-4xl px-6 lg:px-8">
  <h2 className="text-3xl font-extrabold text-[#0D2318]">Questions plumbing owners ask</h2>
  <div className="mt-8 space-y-4">{plumbingFaqs.map((faq) => <details key={faq.question} className="rounded-xl border border-gray-200 bg-white p-6"><summary className="cursor-pointer text-lg font-bold">{faq.question}</summary><p className="mt-4 leading-relaxed text-gray-700">{faq.answer}</p></details>)}</div>
  <Link href="/contact#book" className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-[#1A5C3A] px-7 py-3 font-bold text-white">Talk with Aaron about leading your plumbing marketing</Link>
  <p className="mt-6 text-base text-gray-600">Results vary. Rankings, lead volume and AI recommendations are not guaranteed.</p>
 </div></section>
 </>;
}
