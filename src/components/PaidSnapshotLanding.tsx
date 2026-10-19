import Image from "next/image";
import Link from "next/link";
import WebsiteAssessmentForm from "@/components/WebsiteAssessmentForm";
import BookingCalendar from "@/components/BookingCalendar";


const reviews = [
  ["Where you appear", "A dated sample of relevant ChatGPT and Google AI answers, with the questions asked, businesses mentioned and sources linked."],
  ["What is getting in the way", "A review of your website and public business details for gaps, conflicting information and weak customer paths."],
  ["What to work on first", "Written findings by email, with a prioritized correction path and a distinction between evidence and what still needs checking."],
];
const faqs = [
  ["What will I receive?", "A written AI Search Snapshot by email: sampled answers and sources, website and public-information findings, and recommended priorities. Aaron confirms the review scope and expected delivery date after your request."],
  ["Is this an automated score?", "No. Aaron reviews the public evidence. There is no instant score or claim that one answer represents your permanent position in AI search."],
  ["Do I need to book a call or give you account access?", "No. The review starts with public information. Receive it by email without booking a meeting. Please do not send passwords or private customer information."],
  ["What if I already have a marketing agency?", "Use the findings to discuss priorities with your existing provider. If you want Sequoia GEO to help, we agree on responsibilities and scope before any paid work."],
  ["What does help after the Snapshot cost?", "The Snapshot is free, with no paid commitment. Ongoing marketing execution engagements start at $4,500 per month with a three-month initial term, then continue month to month. Advertising spend is separate. Website projects and broader marketing leadership have separate scopes and fees."],
  ["Will this guarantee more leads or AI recommendations?", "No. AI answers vary by product, question, location and date. The review identifies observations and priorities. It cannot guarantee recommendations, rankings, inquiries or booked jobs."],
];

// Both paid routes render this exact component. The source changes only the
// capture payload and measurement, never the offer, copy, form or layout.
export default function PaidSnapshotLanding({ source }: { source: "paid_snapshot_google" | "paid_snapshot_chatgpt" }) {
  return <div data-paid-snapshot className="min-h-screen bg-[#f7f5ef] text-[#0D2318]">
    <header className="border-b border-[#0D2318]/15">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Image src="/logo.png" alt="Sequoia GEO" width={160} height={64} className="h-14 w-auto" priority />
        <span className="text-right text-sm font-semibold">Aaron Husak<br /><span className="font-normal">A contractor's perspective</span></span>
      </div>
    </header>
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-14">
      <div>
        <p className="font-semibold text-[#1A5C3A]">For established home-service business owners</p>
        <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">Does AI recommend you or your competitor?</h1>
        <p className="mt-6 text-lg leading-relaxed text-[#34483b]">Get a free AI Search Snapshot of what ChatGPT and Google AI show about your business, where competitors appear, and what deserves attention first.</p>
        <p className="mt-4 text-base leading-relaxed text-[#34483b]">Written findings. Linked sources. Priorities you can discuss with your team or marketing provider.</p>
        <a href="#request" className="mt-7 inline-flex min-h-12 items-center rounded-lg bg-[#1A5C3A] px-6 py-3 font-bold text-white hover:bg-[#0D2318]">Get my free AI Search Snapshot</a>
        <p className="mt-4 text-sm leading-relaxed text-[#526156]">Hand reviewed by Aaron. No account access. No required call.</p><p className="mt-4 text-sm leading-relaxed text-[#526156]">Looking for ongoing help? Marketing execution starts at $4,500 per month with a three-month initial term. Advertising spend is separate. The Snapshot is free either way.</p>
      </div>
      <div id="request" className="scroll-mt-6 rounded-2xl border border-[#1A5C3A]/20 bg-white p-5 shadow-sm sm:p-7">
        <p className="text-sm font-bold text-[#1A5C3A]">FREE AI SEARCH SNAPSHOT</p>
        <h2 className="mt-2 font-serif text-2xl font-bold">See where your business stands.</h2>
        <p className="mb-6 mt-3 leading-relaxed text-[#526156]">Start with your website. Tell us where to send your findings on the next step.</p>
        <WebsiteAssessmentForm source={source} />
      </div>
    </section>
    <section className="border-y border-[#0D2318]/15 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="font-serif text-3xl font-bold">Know what to fix before buying more marketing.</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#526156]">Can customers find you? Does your business information hold up? What happens when someone is ready to contact you? Your Snapshot connects those questions.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">{reviews.map(([title, text], index) => <article key={title}>
          <p className="text-sm font-semibold text-[#1A5C3A]">0{index + 1}</p><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-[#526156]">{text}</p>
        </article>)}</div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[#526156]">AI answers vary with the product, question, location and date. A Snapshot documents observations and unknowns. It does not establish a permanent rank or prove that a later inquiry came from an AI answer.</p>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <figure className="m-0"><Image src="/images/aaron-intro-hat-v3.png" alt="Aaron Husak, founder of Sequoia GEO, wearing a black Sequoia hat" width={1672} height={941} sizes="(max-width: 1023px) 90vw, 440px" className="h-auto w-full" /><figcaption className="mt-3 text-sm text-[#526156]">Aaron Husak, founder of Sequoia GEO</figcaption></figure>
        <div><h2 className="font-serif text-3xl font-bold">A contractor's perspective on your marketing.</h2><p className="mt-4 leading-relaxed text-[#526156]">I spent 13 years owning and operating a home-service company. I know the difference between a report that looks busy and a conversation about the work you actually want to book.</p><p className="mt-4 leading-relaxed text-[#526156]">I review your Snapshot and explain the priorities. Use it with your current team, or discuss a defined engagement with Sequoia GEO if you want help doing the work.</p><p className="mt-4 font-semibold">Aaron Husak</p></div>
      </div>
      <div className="mt-12 border-t border-[#0D2318]/20 pt-10">
        <h2 className="font-serif text-3xl font-bold">Look at the work behind the offer.</h2>
        <div className="mt-7 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-[#0D2318]/15 bg-white p-6"><p className="text-sm font-semibold text-[#1A5C3A]">Website and local presence</p><h3 className="mt-2 text-xl font-bold">KABAM Plumbing</h3><p className="mt-3 leading-relaxed text-[#526156]">Rebuilt the website around the services and communities the company serves, alongside Google Business Profile management.</p><Link href="/case-studies/kabam-plumbing" className="mt-5 inline-block font-bold underline underline-offset-4">Read the case study</Link></article>
          <article className="rounded-xl border border-[#0D2318]/15 bg-white p-6"><p className="text-sm font-semibold text-[#1A5C3A]">Website, migration and measurement</p><h3 className="mt-2 text-xl font-bold">A Fireman's Chimney Sweep</h3><p className="mt-3 leading-relaxed text-[#526156]">Rebuilt the site with service and town pages, redirects from the previous site, and analytics and inquiry tracking.</p><Link href="/case-studies/firemans-chimney-sweep" className="mt-5 inline-block font-bold underline underline-offset-4">Read the case study</Link></article>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#526156]">These examples document client work. They do not establish that a free Snapshot produces the same outcomes or guarantees an AI recommendation.</p>
      </div>
    </section>
    <section className="bg-[#0D2318] px-6 py-12 text-white sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div><p className="text-sm font-bold text-[#C8EDD2]">IS THIS A FIT?</p><h2 className="mt-3 font-serif text-3xl font-bold">For owners ready to act on the findings.</h2><p className="mt-4 leading-relaxed text-[#D5E5DA]">This is built for established service businesses with a team, capacity for more of the right work, and an owner or manager involved in marketing decisions.</p></div>
        <div><h3 className="text-xl font-bold">Free review. Clear paid-service expectations.</h3><p className="mt-4 leading-relaxed text-[#D5E5DA]">There is no obligation to hire us. If you need ongoing help, Marketing execution starts at <strong className="text-white">$4,500 per month</strong>, with a three-month initial term. Advertising spend is separate.</p><Link href="/ai-seo-pricing" className="mt-4 inline-block font-semibold text-white underline underline-offset-4">Review services, pricing and terms</Link></div>
      </div>
    </section>
    <section className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <h2 className="font-serif text-3xl font-bold">Before you request your Snapshot.</h2>
      <div className="mt-6">{faqs.map(([question, answer]) => <details key={question} className="border-b border-[#0D2318]/20 py-5"><summary className="cursor-pointer text-lg font-bold">{question}</summary><p className="mt-3 leading-relaxed text-[#526156]">{answer}</p></details>)}</div>
      <div className="mt-10 rounded-xl border border-[#1A5C3A]/20 bg-white p-6 sm:p-8"><h2 className="font-serif text-3xl font-bold">Find your next marketing priority.</h2><p className="mt-4 leading-relaxed text-[#526156]">Request the written review first. Aaron will follow up by email to confirm the business, scope and expected delivery date.</p><a href="#request" className="mt-6 inline-flex min-h-12 items-center rounded-lg bg-[#1A5C3A] px-6 py-3 font-bold text-white hover:bg-[#0D2318]">Get my free AI Search Snapshot</a></div>
    </section>
    <section id="book" className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <h2 className="font-serif text-3xl font-bold">Prefer a conversation first?</h2>
      <p className="mb-6 mt-4 leading-relaxed text-[#526156]">Book 15 minutes with Aaron to discuss your business and whether the Snapshot is the right next step. Booking is optional and separate from requesting your written review.</p>
      <BookingCalendar />
    </section>
    <footer className="bg-[#0D2318] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 text-sm leading-relaxed sm:flex-row">
        <div><strong>Sequoia GEO</strong><br />9617 East Olive Avenue, Sanger, CA 93657</div>
        <div><a href="mailto:aaron@sequoiageo.com" className="underline">aaron@sequoiageo.com</a><br /><Link href="/privacy-policy" className="underline">Privacy policy</Link></div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl border-t border-white/20 pt-5 text-sm leading-relaxed text-[#D5E5DA]">Service-area eligibility: Sequoia GEO cannot accept HVAC or plumbing businesses located within 60 miles of Fresno, California.</p>
    </footer>
  </div>;
}
