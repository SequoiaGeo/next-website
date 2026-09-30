import Link from "next/link";

export default function Hero() {
  return <section className="border-b border-[#0D2318]/15 bg-[#f7f5ef] text-[#0D2318]">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-8 lg:py-24">
      <div>
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#1A5C3A]">Custom builds. Ongoing management.</p>
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">AI marketing agents,<br /><span className="font-serif font-normal italic text-[#1A5C3A]">built around your business.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#34483b]">Put an agent to work on the marketing tasks that need consistent attention: following up with leads, reconnecting with customers, and turning your expertise into campaigns.</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link href="/contact#book" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#1A5C3A] px-6 py-3 font-bold text-white hover:bg-[#0D2318]">Plan My First Agent</Link>
          <Link href="#agents" className="inline-flex min-h-12 items-center font-bold text-[#1A5C3A] underline underline-offset-4">Explore the five agents</Link>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-[#526156]">For local and home-service businesses. Led by Aaron Husak, with 13 years of experience owning and operating a home-service company.</p>
      </div>
      <aside className="rounded-2xl bg-[#0D2318] p-7 text-white shadow-xl sm:p-9" aria-label="Example agent workflow">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#C8EDD2]">One agent. One job to start.</p>
        <h2 className="mt-4 text-2xl font-bold">Keep an open estimate moving.</h2>
        <p className="mt-3 leading-relaxed text-gray-200">Example workflow, configured around your process.</p>
        <ol className="mt-7 space-y-6 border-l border-white/20 pl-6">
          <li><strong className="block text-[#C8EDD2]">01 / Check the context</strong><span className="mt-1 block text-gray-200">Review the estimate status and prior conversation.</span></li>
          <li><strong className="block text-[#C8EDD2]">02 / Follow up within your rules</strong><span className="mt-1 block text-gray-200">Use approved messages and timing. Route questions to your team.</span></li>
          <li><strong className="block text-[#C8EDD2]">03 / Know what happened</strong><span className="mt-1 block text-gray-200">Record the reply or booking. Stop when the customer responds, books, or opts out.</span></li>
        </ol>
        <p className="mt-7 border-t border-white/20 pt-5 text-sm leading-relaxed text-gray-300">We confirm tool access and test the workflow before launch. Your team controls pricing and commitments.</p>
      </aside>
    </div>
  </section>;
}
