import Link from "next/link";

const phases = [
  { period: "Days 1 to 30", title: "Establish the baseline and choose priorities", work: "Review providers, campaigns, inquiry records and available crew capacity. Agree on the jobs and markets to pursue, the scorecard, and who approves each decision.", output: "A prioritized plan, named owners and a baseline that separates inquiries from booked jobs." },
  { period: "Days 31 to 60", title: "Direct the agreed work", work: "Coordinate your team and providers on the highest-priority changes. Check the customer path and review lead quality with the people answering calls and preparing estimates.", output: "An action log showing what shipped, what is blocked and what needs your decision." },
  { period: "Days 61 to 90", title: "Evaluate and set the next priorities", work: "Compare results with the baseline, accounting for seasonality, capacity and other changes. Recommend what to continue, revise or stop within your approved budget.", output: "A performance review and the next 90-day plan, with evidence and limitations attached." },
];

const measures = [
  ["Qualified inquiries", "Unique prospective customers requesting a service you offer in an area you serve. Separate spam, duplicates and existing-customer service calls.", "Call records and forms, checked with your office team."],
  ["Booking rate", "Booked appointments divided by qualified inquiries for the same inquiry cohort. Document what counts as a booking.", "CRM or dispatch records matched to inquiries."],
  ["Estimates and jobs won", "Track estimates issued and accepted separately. An appointment or estimate is not a job won.", "Estimate and job records, with enough time for a decision."],
  ["Cost per qualified inquiry", "Approved channel spend divided by attributable qualified inquiries. State which fees are included and leave unknown sources unassigned.", "Platform costs reconciled with inquiry records."],
  ["Capacity and follow-up", "Available installation slots and inquiries or estimates still awaiting a response. Use these to guide the next action.", "Dispatch and sales follow-up records."],
];

export default function FractionalCmoWorkExamples() {
  return <>
    <section id="sample-plan" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="section-overline mb-4">What the work looks like</p>
        <h2 className="max-w-3xl text-3xl font-extrabold text-[#0D2318] sm:text-4xl">A sample 90-day fractional CMO plan</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">This is an illustrative working structure, not a client case study or a promise of results. Your plan depends on your priorities, access, team and agreed scope. Aaron leads the decisions and reviews; your team or separately engaged providers carry out production.</p>
        <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
          {phases.map(phase => <article key={phase.period} className="grid gap-4 py-8 md:grid-cols-[180px_1fr]">
            <p className="text-lg font-bold text-[#1A5C3A]">{phase.period}</p>
            <div><h3 className="text-xl font-bold text-[#0D2318]">{phase.title}</h3><p className="mt-3 max-w-3xl leading-relaxed text-gray-700">{phase.work}</p><p className="mt-3 max-w-3xl leading-relaxed text-gray-700"><strong>What you receive:</strong> {phase.output}</p></div>
          </article>)}
        </div>
      </div>
    </section>
    <section id="sample-scorecard" className="scroll-mt-24 bg-[#fafaf8] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[#0D2318]">A scorecard that helps you decide what to do next</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">An illustrative scorecard, adapted to your business after the initial review. Each review records the reporting period, source, baseline, current result, responsible person and next action. Missing data stays marked unknown.</p>
        <dl className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {measures.map(([name, definition, source]) => <div key={name} className="border-t border-gray-300 pt-5"><dt className="text-xl font-bold text-[#0D2318]">{name}</dt><dd className="mt-3 leading-relaxed text-gray-700">{definition}<p className="mt-3"><strong>Evidence:</strong> {source}</p></dd></div>)}
        </dl>
        <p className="mt-8 leading-relaxed text-gray-700">Targets are agreed after reviewing the baseline. A change in results does not, by itself, prove that a marketing change caused it.</p>
      </div>
    </section>
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[#0D2318]">How a marketing decision connects to the work you can fulfill</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">Consider an illustrative HVAC business with a full service board but open installation slots. Increasing every campaign would not necessarily fill the right work.</p>
        <ol className="mt-6 max-w-3xl list-decimal space-y-4 pl-6 leading-relaxed text-gray-700">
          <li><strong>Check the constraint.</strong> Review open replacement estimates, inquiry sources, follow-up and available installation dates with the owner and office team.</li>
          <li><strong>Choose the next action.</strong> If suitable estimates are waiting for follow-up, assign that work before recommending more advertising. If demand is the constraint, propose a focused campaign within the approved budget.</li>
          <li><strong>Coordinate delivery.</strong> Give the agency the agreed audience and offer, confirm the website explains the same offer, and have dispatch confirm the booking handoff.</li>
          <li><strong>Review the outcome.</strong> Check qualified inquiries, appointments and jobs won separately. Record what changed and whether capacity is still available before expanding the work.</li>
        </ol>
        <p className="mt-6 max-w-3xl leading-relaxed text-gray-700">This example explains the approach; it is not a reported client result. Aaron&apos;s <Link href="/case-studies/balanced-comfort" className="font-semibold text-[#1A5C3A] underline underline-offset-4">13 years of owner-operator experience at Balanced Comfort</Link> provide the operating context for this work.</p>
        <div className="mt-10 border-t border-gray-200 pt-8">
          <h3 className="text-xl font-bold text-[#0D2318]">Explore the decisions behind the role</h3>
          <ul className="mt-5 space-y-4 text-lg text-[#1A5C3A]">
            <li><Link href="/blog/fractional-cmo-vs-agency-vs-marketing-manager" className="underline underline-offset-4">When to choose a fractional CMO, marketing manager or agency</Link></li>
            <li><Link href="/podcast/episode-5" className="underline underline-offset-4">Podcast: reputation, messaging and follow-through before more marketing spend</Link></li>
            <li><Link href="/podcast/episode-7" className="underline underline-offset-4">Podcast: evaluating marketing evidence beyond rankings</Link></li>
          </ul>
        </div>
      </div>
    </section>
  </>;
}
