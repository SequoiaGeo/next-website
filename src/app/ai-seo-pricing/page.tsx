import Link from "next/link";
import type { Metadata } from "next";
import FaqJsonLd from "@/components/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import MarketingLeadershipOffer from "@/components/MarketingLeadershipOffer";
import { offerFaqs } from "@/lib/marketing-offer";
export const metadata: Metadata = { title: "Fractional CMO, SEO and GEO Execution Pricing | Sequoia GEO", description: "Fractional CMO leadership starts at $7,000 per month. Optional marketing execution, including agreed SEO and GEO work, starts at $4,500 separately.", alternates: { canonical: "https://www.sequoiageo.com/ai-seo-pricing" } };
export default function PricingPage() {
    return <>
 <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.sequoiageo.com/" }, { name: "Leadership and Execution Pricing", url: "https://www.sequoiageo.com/ai-seo-pricing" }]}/>
 <FaqJsonLd faqs={offerFaqs}/>
 <section className="bg-[#0D2318] py-20 text-white"><div className="mx-auto max-w-4xl px-6 lg:px-8"><p className="font-semibold text-[#C8EDD2]">Scope and investment</p><h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Marketing leadership and execution, clearly priced.</h1><p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]">Start with the leadership your business needs. Keep your existing team and providers, or add a defined Sequoia execution scope to carry out the plan.</p></div></section>
 <MarketingLeadershipOffer />
 <section className="bg-white py-16"><div className="mx-auto max-w-5xl px-6 lg:px-8"><h2 className="text-3xl font-extrabold text-[#0D2318]">What the execution scope can cover</h2><p className="mt-5 leading-relaxed text-gray-700">SEO and GEO implementation, original service and community content, pages built from real jobs, technical website corrections, Google Business Profile management and review responses, citations, paid media and tracking. We agree on the channels, production volumes, approvals and responsibilities before work begins. The starting fee does not include every service or unlimited output.</p><p className="mt-5 leading-relaxed text-gray-700">AI search work uses a documented baseline and repeatable questions, with recommendations, citations and inquiries measured separately. GEO is part of the agreed search work, with no separate AI surcharge. Third-party software and advertising spend require separate approval.</p><div className="mt-8 grid gap-6 md:grid-cols-2"><article className="rounded-xl border border-gray-200 p-6"><h3 className="text-xl font-bold">Starting terms</h3><p className="mt-3 leading-relaxed text-gray-700">Leadership has a six-month initial term. Execution has a 90-day initial term. Each continues month to month afterward. The agreement confirms dates, deliverables and terms before work begins.</p></article><article className="rounded-xl border border-gray-200 p-6"><h3 className="text-xl font-bold">What changes the price</h3><p className="mt-3 leading-relaxed text-gray-700">Additional brands, locations, channels, providers, production volume, integration complexity and meeting requirements. Any added scope and cost are agreed before the work begins.</p></article></div></div></section>
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


 <section className="bg-[#fafaf8] py-16"><div className="mx-auto max-w-4xl px-6 lg:px-8"><h2 className="text-3xl font-extrabold text-[#0D2318]">Pricing and scope questions</h2><div className="mt-8 space-y-4">{offerFaqs.map(faq => <details key={faq.question} className="rounded-xl border border-gray-200 bg-white p-6"><summary className="cursor-pointer text-lg font-bold">{faq.question}</summary><p className="mt-4 leading-relaxed text-gray-700">{faq.answer}</p></details>)}</div><Link href="/contact#book" className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-[#1A5C3A] px-7 py-3 font-bold text-white">Discuss your plan with Aaron</Link><p className="mt-6 text-base text-gray-600">Results vary. Rankings, lead volume and AI recommendations are not guaranteed.</p></div></section>
 </>;
}
