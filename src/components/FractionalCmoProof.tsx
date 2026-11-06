import Link from "next/link";
import { clientProof, operatorProof } from "@/lib/fractional-cmo-trades";

type ProofKey = keyof typeof clientProof;

export default function FractionalCmoProof({
    heading,
    operatorParagraph,
    proofOrder,
    proofIntro,
}: {
    heading: string;
    operatorParagraph: string;
    proofOrder: ProofKey[];
    proofIntro: string;
}) {
    return <section aria-labelledby="fractional-cmo-proof-heading" className="bg-white py-16 sm:py-20">
  <div className="mx-auto max-w-6xl px-6 lg:px-8">
   <p className="section-overline mb-4">Operator proof</p>
   <h2 id="fractional-cmo-proof-heading" className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">{heading}</h2>
   <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">{operatorParagraph}</p>
   <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
    {operatorProof.map((item) => <div key={item.label} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-5">
     <dt className="text-sm leading-snug text-gray-600">{item.label}</dt>
     <dd className="mt-2 text-2xl font-extrabold text-[#0D2318]">{item.value}</dd>
    </div>)}
   </dl>
   <Link href="/case-studies/balanced-comfort" className="mt-6 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline underline-offset-4">Read the Balanced Comfort story</Link>
   <h3 className="mt-14 text-2xl font-extrabold text-[#0D2318]">Client results</h3>
   <p className="mt-3 max-w-3xl leading-relaxed text-gray-700">{proofIntro}</p>
   <div className="mt-6 grid gap-5 md:grid-cols-3">
    {proofOrder.map((key) => {
        const proof = clientProof[key];
        return <article key={key} className="flex flex-col rounded-2xl border border-[#0D2318]/15 bg-white p-7">
      <p className="text-sm font-bold uppercase tracking-wider text-[#1A5C3A]">{proof.client}</p>
      <p className="mt-3 text-2xl font-extrabold text-[#0D2318]">{proof.headline}</p>
      <p className="mt-3 flex-1 leading-relaxed text-gray-700">{proof.detail}</p>
      <p className="mt-4 text-sm text-gray-500">Source: {proof.source}</p>
      <Link href={proof.href} className="mt-4 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline underline-offset-4">See the work</Link>
     </article>;
    })}
   </div>
   <p className="mt-6 text-base leading-relaxed text-gray-600">Client results reflect each company&apos;s whole operation during the engagement. Search clicks are measured separately from calls, and calls separately from booked jobs. Past results do not guarantee future results.</p>
  </div>
 </section>;
}
