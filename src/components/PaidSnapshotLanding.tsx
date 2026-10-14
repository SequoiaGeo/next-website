import Image from "next/image";
import Link from "next/link";
import WebsiteAssessmentForm from "@/components/WebsiteAssessmentForm";
import BookingCalendar from "@/components/BookingCalendar";
import SnapshotNextSteps from "@/components/SnapshotNextSteps";

const reviews = [
  ["Your business", "Do your website, public profiles and service details tell the same story?"],
  ["Your customers' questions", "What appears in a dated sample of relevant AI search answers, and which sources support it?"],
  ["Your next steps", "Which gaps deserve verification or correction before you invest in more marketing?"],
];

// Both paid routes render this exact component. The source changes only the
// capture payload and measurement, never the offer, copy, form or layout.
export default function PaidSnapshotLanding({ source }: { source: "paid_snapshot_google" | "paid_snapshot_chatgpt" }) {
  return <div data-paid-snapshot className="min-h-screen bg-[#f7f5ef] text-[#0D2318]">
    <header className="border-b border-[#0D2318]/15">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Image src="/logo.png" alt="Sequoia GEO" width={160} height={64} className="h-auto w-32 sm:w-40" priority />
        <span className="text-right text-sm font-semibold">Aaron Husak<br /><span className="font-normal">A contractor's perspective</span></span>
      </div>
    </header>
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:py-20">
      <div>
        <p className="font-semibold text-[#1A5C3A]">Free AI Search Snapshot</p>
        <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">When customers ask AI, does your business enter the conversation?</h1>
        <p className="mt-6 text-lg leading-relaxed text-[#34483b]">See what ChatGPT and Google AI can verify about your business, which sources they use, and what deserves attention next.</p>
        <p className="mt-4 text-base leading-relaxed text-[#34483b]">Aaron reviews the public evidence and sends written findings with sources and a prioritized correction path. No account access needed to begin.</p>
        <a href="#request" className="mt-7 inline-flex min-h-12 items-center rounded-lg bg-[#1A5C3A] px-6 py-3 font-bold text-white hover:bg-[#0D2318]">Request my free Snapshot</a>
        <p className="mt-4 text-sm leading-relaxed text-[#526156]">No paid commitment. No promise of an AI recommendation.</p>
      </div>
      <figure className="m-0">
        <Image src="/images/aaron-intro-hat-v3.png" alt="Aaron Husak, founder of Sequoia GEO, wearing a black Sequoia hat" width={1672} height={941} sizes="(max-width: 1023px) 90vw, 500px" className="h-auto w-full" priority />
        <figcaption className="mt-4 border-t border-[#0D2318]/20 pt-4 text-base leading-relaxed text-[#34483b]">13 years owning and operating a home-service company. Now helping owners connect marketing decisions to inquiries and booked work.</figcaption>
      </figure>
    </section>
    <section className="border-y border-[#0D2318]/15 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="font-serif text-3xl font-bold">A review you can act on.</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">{reviews.map(([title, text], index) => <article key={title}>
          <p className="text-sm font-semibold text-[#1A5C3A]">0{index + 1}</p><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-[#526156]">{text}</p>
        </article>)}</div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[#526156]">AI answers vary with the product, question, location and date. A Snapshot documents observations and unknowns. It does not establish a permanent rank or prove that a later inquiry came from an AI answer.</p>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <h2 className="font-serif text-3xl font-bold">Work you can inspect.</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-[#526156]">Explore documented client work before deciding whether to request a review.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">{[
        ["KABAM Plumbing", "/case-studies/kabam-plumbing"],
        ["A Fireman's Chimney Sweep", "/case-studies/firemans-chimney-sweep"],
        ["Amazing Air Solutions", "/case-studies"],
      ].map(([name, href]) => <Link key={name} href={href} className="border-t border-[#0D2318]/25 py-5 font-bold underline underline-offset-4">{name}<span className="mt-2 block text-sm font-normal no-underline">Read the work and its limits</span></Link>)}</div>
    </section>
    <section id="request" className="scroll-mt-6 border-y border-[#0D2318]/15 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[.85fr_1.15fr] sm:py-16">
        <div><h2 className="font-serif text-3xl font-bold">Request your free AI Search Snapshot.</h2><p className="mt-4 leading-relaxed text-[#526156]">Start with your business website. Your written review comes by email; booking a conversation is optional.</p><div className="mt-6 text-[#526156]"><SnapshotNextSteps /></div></div>
        <WebsiteAssessmentForm source={source} />
      </div>
    </section>
    <section id="book" className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <h2 className="font-serif text-3xl font-bold">Prefer to discuss the Snapshot?</h2>
      <p className="mb-6 mt-4 leading-relaxed text-[#526156]">Choose an available time with Aaron. Requesting a Snapshot and booking a meeting are separate steps.</p>
      <BookingCalendar />
    </section>
    <footer className="bg-[#0D2318] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 text-sm leading-relaxed sm:flex-row">
        <div><strong>Sequoia GEO</strong><br />9617 East Olive Avenue, Sanger, CA 93657</div>
        <div><a href="mailto:aaron@sequoiageo.com" className="underline">aaron@sequoiageo.com</a><br /><Link href="/privacy-policy" className="underline">Privacy policy</Link></div>
      </div>
    </footer>
  </div>;
}
