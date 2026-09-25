import type { Metadata } from "next";
import Link from "next/link";
import EstimateReviewForm from "@/components/EstimateReviewForm";

export const metadata: Metadata = {
  title: "Will ChatGPT Choose Your Estimate? | Sequoia GEO",
  description: "Help homeowners understand your plumbing or HVAC estimate. Explain the problem, compare options, and make your scope and value clear before an AI comparison.",
  alternates: { canonical: "/resources/will-chatgpt-choose-your-estimate" },
};

const checks = [
  ["Explain what you found", "Describe the customer's concern, your documented findings, and what remains uncertain. Separate observations from assumptions. Include relevant photos with plain-language captions."],
  ["Carry the technician's reasoning", "Explain why the recommended work addresses those findings. Do not leave the homeowner to reconstruct the conversation after the technician leaves."],
  ["Make the scope comparable", "Specify equipment, materials, quantities where known, access, testing, cleanup, permits where applicable, and restoration. Say what is excluded and who is responsible for it."],
  ["Explain the difference between options", "For each option, state what it solves, what it leaves unresolved, and what the additional cost buys. Recommend an option based on the customer's needs, not just the largest price."],
  ["Make costs and conditions visible", "Identify the total for each option, optional work, allowances, and conditions that could change the price. Explain how additional work is approved. Do not hide material qualifications in fine print."],
  ["State what happens after approval", "Explain scheduling, expected disruption, completion checks, and support. Distinguish manufacturer coverage from your workmanship warranty and state the actual terms."],
];

export default function Page() {
  return <article className="mx-auto max-w-6xl px-5 pb-20 pt-28 text-[#1a1a1a]">
    <Link href="/resources" className="underline underline-offset-4">Owner decision resources</Link>
    <header className="grid gap-8 border-b py-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
      <div>
        <p className="font-semibold text-[#1A5C3A]">For plumbing and HVAC contractors</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Will ChatGPT Choose Your Estimate?</h1>
        <p className="mt-5 text-xl leading-relaxed">Make your scope, options, and value clear when customers compare you with the competition.</p>
        <a href="#review" className="btn btn-dark mt-6">Get a Free AI Estimate Review</a>
        <p className="mt-4 text-sm leading-relaxed">No wording guarantees an AI recommendation. The goal is to make the value of your actual work understandable.</p>
      </div>
      <aside className="rounded-xl bg-[#eef3ed] p-6 sm:p-8">
        <h2 className="text-2xl font-bold">You explained it in the home. Does the estimate explain it without you?</h2>
        <p className="mt-4 leading-relaxed">Imagine the homeowner uploads your estimate to ChatGPT and asks, “Which should I choose?” The document needs to carry the reasoning you shared in person, not just a list of tasks and a price.</p>
        <p className="mt-4 leading-relaxed">That applies to three competing contractors and to three options from your own company.</p>
      </aside>
    </header>

    <section className="py-10">
      <h2 className="text-3xl font-bold">Same work. A clearer explanation.</h2>
      <p className="mt-3 text-gray-600">Illustrative example only. Use your own verified findings and scope.</p>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border p-6"><h3 className="text-lg font-bold">The abbreviated estimate</h3><p className="mt-4">Replace leaking shutoff valve. Test operation. Drywall repair excluded.</p></div>
        <div className="rounded-xl border-2 border-[#1A5C3A] p-6"><h3 className="text-lg font-bold">The explanation that travels with it</h3><p className="mt-4">We observed a leak at the shutoff valve. This option replaces that valve and tests its operation after installation. Drywall repair is not included.</p><p className="mt-4 font-semibold">Still missing: the valve specification, access requirements, price, and warranty terms. Ask for those facts rather than inventing them.</p></div>
      </div>
    </section>

    <section className="border-t py-10">
      <h2 className="text-3xl font-bold">Estimate best practices: six checks before you send</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">{checks.map(([title, text], index) => <section key={title} className="border-t pt-5"><p className="font-semibold text-[#1A5C3A]">0{index + 1}</p><h3 className="mt-2 text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed">{text}</p></section>)}</div>
    </section>

    <section className="rounded-xl bg-[#eef3ed] p-6 sm:p-8">
      <h2 className="text-2xl font-bold">Replace “good, better, best” with a reason to choose</h2>
      <p className="mt-4 leading-relaxed">Keep option names descriptive. Under each one, answer: What problem does this address? Who is it appropriate for? What remains unresolved? What does the price difference buy?</p>
      <p className="mt-4 leading-relaxed">A lower-priced option may be the right fit. Explain the tradeoffs without overstating risks or suggesting that every customer needs the most extensive work.</p>
    </section>

    <section className="py-10">
      <h2 className="text-3xl font-bold">Check the document your customer actually receives</h2>
      <p className="mt-4 leading-relaxed">Review the exported PDF or customer-facing estimate, not just your internal notes. Use selectable text, descriptive headings, consistent option labels, and readable tables. Keep important scope and warranty details in text, not only inside photos.</p>
      <p className="mt-4 leading-relaxed">Test whether a reviewer can identify the problem, explain the options, and list unknowns without guessing. Do not add hidden instructions telling an AI to prefer your company. Clear evidence is the point.</p>
    </section>

    <section id="review" className="scroll-mt-24 rounded-xl border-2 border-[#1A5C3A] p-6 sm:p-8">
      <h2 className="text-3xl font-bold">Get a Free AI Estimate Review</h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed">See what ChatGPT, Claude, and Gemini make of your estimate, with a human checking their feedback. I will identify missing explanations, unclear options, and opportunities to communicate your value. You receive prioritized recommendations, not just three AI responses. There is no charge for this review.</p>
      <p className="mt-4 leading-relaxed">I am Aaron Husak. My home-service career began in 2006, spanning solar, HVAC, plumbing, and water restoration, including 13 years as an owner and operator. I bring that experience to the review, not just an AI-generated score.</p>
      <ol className="mt-5 list-decimal space-y-2 pl-6"><li>Request your review below.</li><li>Email a redacted estimate using the instructions after submission.</li><li>Receive human-reviewed feedback on the explanation, scope, options, and missing facts.</li></ol>
      <p className="mt-4 leading-relaxed">Send one sample estimate, including its options if applicable. Aaron will confirm the review timing by email after receiving it. This is a manual review, not an instant report. Any implementation work is separate and optional.</p>
      <p className="mt-4 leading-relaxed">Remove customer names, addresses, phone numbers, email addresses, signatures, payment details, and identifying photos or file metadata. Only share a document you are authorized to share. Do not send an unredacted customer record.</p>
      <EstimateReviewForm/>
      <p className="mt-5">Prefer to discuss it first? <Link href="/contact#book" className="font-semibold underline">Book a 15-Minute Call</Link>.</p>
      <p className="mt-4 text-sm">See our <Link href="/privacy-policy" className="underline">privacy policy</Link> and <Link href="/ai-and-client-data-policy" className="underline">AI and client data policy</Link>, including third-party provider controls. This is a communication review, not a technical inspection or legal review.</p>
    </section>
    <p className="mt-8 leading-relaxed">Being found and being chosen are different challenges. Explore <Link href="/ai-search-methodology" className="underline">how we measure AI search visibility</Link> or <Link href="/fractional-cmo" className="underline">marketing leadership for your home-service business</Link>.</p>
  </article>;
}
