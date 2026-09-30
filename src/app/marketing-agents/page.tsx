import type { Metadata } from "next";
import Link from "next/link";
import { marketingAgents } from "@/data/marketing-agents";

export const metadata: Metadata = {
  title: "Custom AI Marketing Agents | Sequoia GEO",
  description: "Custom marketing agents for lead follow-up, customer reactivation, content, reviews, and advertising performance. Scope one workflow with Sequoia GEO.",
  alternates: { canonical: "https://www.sequoiageo.com/marketing-agents" },
};

export default function MarketingAgentsPage() {
  return <>
    <section className="bg-[#f7f5ef] py-16 sm:py-24"><div className="mx-auto max-w-6xl px-6 lg:px-8">
      <p className="section-overline mb-5">Custom AI marketing agents</p>
      <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-[#0D2318] sm:text-6xl">Build around the work.<br />Keep your team in control.</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">You bring the process, business knowledge, and priorities. We build and manage an agent that uses them to handle an agreed marketing task, with clear rules for when your team steps in.</p>
      <Link href="/contact#book" className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-[#1A5C3A] px-6 py-3 font-bold text-white hover:bg-[#0D2318]">Plan My First Agent</Link>
      <p className="mt-4 text-sm text-gray-600">Start with a 15-minute Marketing Baseline Review with Aaron.</p>
    </div></section>
    <section className="py-16"><div className="mx-auto max-w-6xl px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-[#0D2318]">Choose the first job.</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-gray-700">These are custom build options. Scope and supported integrations are confirmed for your business before we promise a launch.</p>
      <div className="mt-8 space-y-6">{marketingAgents.map((agent, index) => <article id={agent.id} key={agent.id} className="scroll-mt-28 rounded-2xl border border-gray-200 bg-[#fafaf8] p-7 sm:p-9">
        <p className="text-sm font-bold text-[#1A5C3A]">AGENT 0{index + 1}</p><h3 className="mt-2 text-2xl font-bold text-[#0D2318]">{agent.name}</h3>
        <p className="mt-3 text-lg font-semibold text-[#1A5C3A]">{agent.promise}</p><p className="mt-4 max-w-3xl leading-relaxed text-gray-700">{agent.description}</p>
        <div className="mt-6 grid gap-6 border-t border-gray-200 pt-6 md:grid-cols-2"><div><h4 className="font-bold text-[#0D2318]">Your controls</h4><p className="mt-2 leading-relaxed text-gray-700">{agent.boundary}</p></div><div><h4 className="font-bold text-[#0D2318]">What we measure</h4><p className="mt-2 leading-relaxed text-gray-700">{agent.measure}</p></div></div>
      </article>)}</div>
    </div></section>
    <section className="bg-[#0D2318] py-16 text-white"><div className="mx-auto max-w-6xl px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold">A scoped build, followed by ongoing care.</h2>
      <ol className="mt-8 grid gap-8 md:grid-cols-3">{[
        ["01 / Map the workflow", "Choose one task, confirm access to the tools and data it needs, and agree on the starting point, approvals, and success measures."],
        ["02 / Build and test", "Test representative situations with your team, including replies, opt-outs, missing information, and human handoffs. Approve the pilot before it goes live."],
        ["03 / Monitor and improve", "Review completed work, exceptions, and outcomes. Adjust the workflow as your business changes, with a named person responsible for oversight."],
      ].map(([title, body]) => <li key={title}><h3 className="text-xl font-bold text-[#C8EDD2]">{title}</h3><p className="mt-3 leading-relaxed text-gray-200">{body}</p></li>)}</ol>
      <p className="mt-8 border-t border-white/20 pt-6 leading-relaxed text-gray-200">Your proposal separates setup, ongoing management, and any software or usage costs. We confirm supported integrations, data access, and responsibilities before you commit. An agent can be paused when the workflow needs attention.</p>
    </div></section>
    <section className="py-16"><div className="mx-auto max-w-3xl px-6 text-center">
      <h2 className="text-3xl font-extrabold text-[#0D2318]">Bring one task you want off your list.</h2>
      <p className="mt-5 text-lg leading-relaxed text-gray-700">We will discuss your current process, the tools you use, and whether an agent is the right fit. You do not need to select all five.</p>
      <Link href="/contact#book" className="mt-7 inline-flex min-h-12 items-center rounded-lg bg-[#1A5C3A] px-6 py-3 font-bold text-white hover:bg-[#0D2318]">Plan My First Agent</Link>
      <p className="mt-7 text-gray-700">Need help being found? <Link href="/geo-agency" className="font-semibold text-[#1A5C3A] underline underline-offset-4">Explore AI search and GEO</Link>.</p>
    </div></section>
  </>;
}
