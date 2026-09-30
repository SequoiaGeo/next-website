import Link from "next/link";
import { marketingAgents } from "@/data/marketing-agents";

export default function MarketingAgents() {
  return <section id="agents" className="scroll-mt-24 bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <p className="section-overline mb-4">Five places to put an agent to work</p>
      <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">Start with the task your team keeps chasing.</h2>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">An agent uses your business context and connected tools to carry out an agreed task. We scope, build, test, and manage that workflow around the way your team works.</p>
      <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {marketingAgents.map((agent, index) => <article key={agent.id} className="flex flex-col rounded-2xl border border-[#0D2318]/15 bg-[#fafaf8] p-7">
          <span className="text-sm font-bold tracking-widest text-[#1A5C3A]">0{index + 1}</span>
          <h3 className="mt-4 text-2xl font-bold text-[#0D2318]">{agent.name}</h3>
          <p className="mt-3 font-semibold text-[#1A5C3A]">{agent.promise}</p>
          <p className="mt-3 leading-relaxed text-gray-700">{agent.description}</p>
          <Link href={`/marketing-agents#${agent.id}`} className="mt-auto inline-flex min-h-12 items-center pt-5 font-bold text-[#1A5C3A] underline underline-offset-4">Explore this agent</Link>
        </article>)}
        <div className="flex flex-col justify-center rounded-2xl bg-[#0D2318] p-7 text-white">
          <h3 className="text-2xl font-bold">Your process comes first.</h3>
          <p className="mt-4 leading-relaxed text-gray-200">Start with one workflow. We confirm what your tools support, define the approvals, and agree on what success will look like.</p>
          <Link href="/contact#book" className="mt-6 inline-flex min-h-12 items-center font-bold text-[#C8EDD2] underline underline-offset-4">Plan My First Agent</Link>
        </div>
      </div>
    </div>
  </section>;
}
