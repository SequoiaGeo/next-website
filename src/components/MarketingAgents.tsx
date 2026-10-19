import Link from "next/link";
const executionAreas = [
  { name: "Research and search priorities", body: "Investigate customer questions, services, communities and search opportunities. Aaron chooses what deserves attention first.", href: "/geo-agency" },
  { name: "Content grounded in your work", body: "Turn verified job details, photos and expertise into useful service content and campaign drafts, with review before publication.", href: "/services" },
  { name: "Website improvements", body: "Prepare and implement agreed changes to pages, navigation and inquiry paths, then check that the changes work.", href: "/websites" },
  { name: "Campaign analysis", body: "Review advertising and inquiry data, flag wasted spend or tracking gaps, and prepare changes for Aaron to evaluate.", href: "/fractional-cmo" },
  { name: "Reporting and next decisions", body: "Bring the evidence together so Aaron can explain performance, set the next priorities and keep the plan moving.", href: "/fractional-cmo" },
];

export default function MarketingAgents() {
  return <section id="agents" className="scroll-mt-24 bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <p className="section-overline mb-4">How the work gets done</p>
      <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">A coordinated marketing team, directed by an owner.</h2>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">When you add a separately priced execution scope, you get support across the agreed marketing channels without building an internal department. I direct AI agents and specialists across research, content, website improvements, campaign analysis and reporting. I assign the work, review the output and decide what changes next.</p>
      <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {executionAreas.map((area, index) => <article key={area.name} className="flex flex-col rounded-2xl border border-[#0D2318]/15 bg-[#fafaf8] p-7">
          <span className="text-sm font-bold tracking-widest text-[#1A5C3A]">0{index + 1}</span>
          <h3 className="mt-4 text-2xl font-bold text-[#0D2318]">{area.name}</h3>
          <p className="mt-3 leading-relaxed text-gray-700">{area.body}</p>
          <Link href={area.href} className="mt-auto inline-flex min-h-12 items-center pt-5 font-bold text-[#1A5C3A] underline underline-offset-4">See how we work</Link>
        </article>)}
        <div className="flex flex-col justify-center rounded-2xl bg-[#0D2318] p-7 text-white">
          <h3 className="text-2xl font-bold">One accountable leader.</h3>
          <p className="mt-4 leading-relaxed text-gray-200">You work directly with Aaron on priorities, budgets and results. The agents support execution. Aaron remains responsible for directing and reviewing the work.</p>
          <Link href="/contact#book" className="mt-6 inline-flex min-h-12 items-center font-bold text-[#C8EDD2] underline underline-offset-4">Discuss your marketing plan</Link>
        </div>
      </div>
    </div>
  </section>;
}
