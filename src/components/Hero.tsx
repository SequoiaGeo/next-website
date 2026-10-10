import Link from "next/link";

export default function Hero() {
  return <section className="border-b border-[#0D2318]/15 bg-[#f7f5ef] text-[#0D2318]">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-8 lg:py-24">
      <div>
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#1A5C3A]">Fractional CMO for home-service contractors</p>
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">Build your marketing around<br /><span className="text-[#1A5C3A]">the jobs you want booked.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#34483b]">I spent 13 years owning and operating a home-service company. Now I help HVAC, plumbing, roofing, and restoration owners connect their marketing to real inquiries, sales conversations, and jobs booked, across Google, AI search, advertising, and the website.</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link href="/contact#book" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#1A5C3A] px-6 py-3 font-bold text-white hover:bg-[#0D2318]">Book a 15-Minute Call</Link>
          <Link href="#inquiry" className="inline-flex min-h-12 items-center font-bold text-[#1A5C3A] underline underline-offset-4">Tell Me What Needs to Work Better</Link>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-[#526156]">Work directly with Aaron Husak. Bring your marketing questions and get an owner&rsquo;s perspective on the next step.</p>
      </div>
      <aside className="rounded-2xl bg-[#0D2318] p-7 text-white shadow-xl sm:p-9" aria-label="Our marketing approach">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#C8EDD2]">An owner&rsquo;s view of your marketing</p>
        <h2 className="mt-4 text-2xl font-bold">Look beyond the lead report.</h2>
        <p className="mt-3 leading-relaxed text-gray-200">Are the right people finding you? Are inquiries getting answered? Which ones turn into work? Those questions shape the plan.</p>
        <ol className="mt-7 space-y-6 border-l border-white/20 pl-6">
          <li><strong className="block text-[#C8EDD2]">01 / Attract the work you want</strong><span className="mt-1 block text-gray-200">Build search, advertising, and service pages around the jobs and areas you serve.</span></li>
          <li><strong className="block text-[#C8EDD2]">02 / Connect the handoffs</strong><span className="mt-1 block text-gray-200">Review the path from the first call or form to scheduling and estimate follow-up.</span></li>
          <li><strong className="block text-[#C8EDD2]">03 / Choose the next priority</strong><span className="mt-1 block text-gray-200">Use qualified inquiries and booked-job records to decide where the effort belongs.</span></li>
        </ol>
        <p className="mt-7 border-t border-white/20 pt-5 text-sm leading-relaxed text-gray-300">You own your accounts and assets. We agree on priorities and scope before work begins. No ranking or lead guarantees.</p>
      </aside>
    </div>
  </section>;
}
