import Link from "next/link";
import { leadershipResponsibilities } from "@/lib/marketing-offer";
export default function MarketingLeadershipOffer({ detailed = false }: {
    detailed?: boolean;
}) {
    return <section id="leadership-and-execution" className="bg-[#fafaf8] py-16 sm:py-20">
  <div className="mx-auto max-w-6xl px-6 lg:px-8">
   <p className="section-overline mb-4">Leadership first. Execution when you need it.</p>
   <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">Your marketing leader, with the team to carry out the plan.</h2>
   <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">You should not have to be the person connecting every marketing vendor, campaign and report. Aaron personally leads the plan, directs the people doing the work and turns performance data into decisions.</p>
   <div className="mt-9 grid gap-6 md:grid-cols-2">
    <article className="rounded-2xl bg-[#0D2318] p-7 text-white sm:p-9">
     <h3 className="text-2xl font-bold">Fractional CMO leadership</h3>
     <p className="mt-4 text-3xl font-extrabold">Starting at $7,000 per month</p>
     <p className="mt-5 leading-relaxed text-[#C8EDD2]">The priorities, positioning, marketing plan, budget recommendations, team and vendor direction, and performance oversight.</p>
     <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-[#C8EDD2]"><li>A rolling 90-day plan with owners and deadlines</li><li>Weekly decision meetings and monthly performance reviews</li><li>Direct leadership from Aaron across your team and providers</li></ul>
     <Link href="/fractional-cmo" className="mt-6 inline-flex min-h-11 items-center font-bold text-white underline underline-offset-4">Explore the leadership role</Link>
    </article>
    <article className="rounded-2xl border border-[#0D2318]/20 bg-white p-7 sm:p-9">
     <h3 className="text-2xl font-bold text-[#0D2318]">Optional marketing execution</h3>
     <p className="mt-4 text-3xl font-extrabold text-[#0D2318]">Starting at $4,500 per month</p>
     <p className="mt-5 leading-relaxed text-gray-700">The production and implementation required by the plan. Keep your existing providers, or engage Sequoia for a defined execution scope.</p>
     <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-gray-700"><li>Agreed SEO, GEO, content, website and local-profile work</li><li>Advertising management and measurement where scoped</li><li>AI agents and specialists directed and reviewed by Aaron</li></ul>
     <Link href="/ai-seo-pricing" className="mt-6 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline underline-offset-4">See scope and pricing</Link>
    </article>
   </div>
   <p className="mt-6 text-base leading-relaxed text-gray-700">When you engage Sequoia for both leadership and execution, the combined fee starts at <strong>$11,500 per month</strong>. All fees are in USD. Ad spend and approved third-party software are additional. Channels, production volumes and responsibilities are agreed in writing. Major website builds are quoted separately.</p>
   {detailed && <div className="mt-14">
    <h2 className="text-3xl font-extrabold text-[#0D2318]">What Aaron leads as your fractional CMO</h2>
    <div className="mt-8 grid gap-5 md:grid-cols-2">{leadershipResponsibilities.map((area, index) => <article key={area.title} className="rounded-2xl border border-gray-200 bg-white p-7"><p className="text-sm font-bold text-[#1A5C3A]">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-3 text-xl font-bold text-[#0D2318]">{area.title}</h3><p className="mt-3 leading-relaxed text-gray-700">{area.body}</p></article>)}</div>
    <p className="mt-6 leading-relaxed text-gray-700">You retain ownership of your accounts and assets, and approve hiring and spending commitments. Sequoia execution is optional and separately priced. Leadership includes direction and review; hands-on production requires an execution scope. Sales, dispatch and fulfillment remain with your team.</p>
   </div>}
  </div>
 </section>;
}
