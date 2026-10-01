import Link from "next/link";

export default function Hero() {
  return <section className="border-b border-[#0D2318]/15 bg-[#f7f5ef] text-[#0D2318]">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-8 lg:py-24">
      <div>
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#1A5C3A]">Digital marketing for home-service businesses</p>
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">Help homeowners find you.<br /><span className="font-serif font-normal italic text-[#1A5C3A]">Give them a reason to call.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#34483b]">Digital marketing for HVAC, plumbing, roofing, and other home-service companies, with a focus on GEO: helping customers find and evaluate your business through AI search, alongside Google, your website, and local profiles.</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link href="/contact#book" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#1A5C3A] px-6 py-3 font-bold text-white hover:bg-[#0D2318]">Book a 15-Minute Call</Link>
          <Link href="/ai-search-assessment" className="inline-flex min-h-12 items-center font-bold text-[#1A5C3A] underline underline-offset-4">Get My Free AI Search Snapshot</Link>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-[#526156]">Built around the way home-service businesses operate. Led by Aaron Husak, with 13 years of experience owning and operating a home-service company.</p>
      </div>
      <aside className="rounded-2xl bg-[#0D2318] p-7 text-white shadow-xl sm:p-9" aria-label="Our marketing approach">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#C8EDD2]">From visibility to the next conversation.</p>
        <h2 className="mt-4 text-2xl font-bold">Marketing that connects the pieces.</h2>
        <p className="mt-3 leading-relaxed text-gray-200">Start with what is keeping the right customers from finding and contacting you.</p>
        <ol className="mt-7 space-y-6 border-l border-white/20 pl-6">
          <li><strong className="block text-[#C8EDD2]">01 / Get found</strong><span className="mt-1 block text-gray-200">Strengthen your website, Google presence, and AI search visibility.</span></li>
          <li><strong className="block text-[#C8EDD2]">02 / Make the next step clear</strong><span className="mt-1 block text-gray-200">Help visitors understand your services and request help without friction.</span></li>
          <li><strong className="block text-[#C8EDD2]">03 / Know what happened</strong><span className="mt-1 block text-gray-200">Connect inquiries to conversations and booked jobs where tracking supports it.</span></li>
        </ol>
        <p className="mt-7 border-t border-white/20 pt-5 text-sm leading-relaxed text-gray-300">You own your accounts and assets. We agree on priorities and scope before work begins. No ranking or lead guarantees.</p>
      </aside>
    </div>
  </section>;
}
