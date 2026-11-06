import Link from "next/link";
import { localAiVisibilityIndexParts } from "@/lib/fractional-cmo-trades";

export default function LocalAiVisibilityIndex({
    trade,
    exampleQuestion,
}: {
    trade: string;
    exampleQuestion: string;
}) {
    return <section id="local-ai-visibility-index" aria-labelledby="local-ai-visibility-index-heading" className="bg-[#0D2318] py-16 text-white sm:py-20">
  <div className="mx-auto max-w-6xl px-6 lg:px-8">
   <p className="text-sm font-bold uppercase tracking-wider text-[#C8EDD2]">How every engagement starts</p>
   <h2 id="local-ai-visibility-index-heading" className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">The Local AI Visibility Index</h2>
   <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#C8EDD2]">Before Aaron changes a budget or a vendor, he documents where your {trade} company actually stands when homeowners search and ask AI. A homeowner typing &ldquo;{exampleQuestion}&rdquo; into ChatGPT gets a short list of names. The Index shows whether yours is on it, who is, and why.</p>
   <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {localAiVisibilityIndexParts.map((part, index) => <article key={part.title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
     <p className="text-sm font-bold text-[#C8EDD2]">{String(index + 1).padStart(2, "0")}</p>
     <h3 className="mt-2 text-lg font-bold">{part.title}</h3>
     <p className="mt-2 leading-relaxed text-[#C8EDD2]">{part.body}</p>
    </article>)}
   </div>
   <p className="mt-8 max-w-3xl leading-relaxed text-[#C8EDD2]">AI answers change between sessions, so the Index is a documented baseline taken with a repeatable question set, not a permanent rank. Mentions, citations, referral visits, inquiries and booked jobs are recorded separately, following the <Link href="/ai-search-methodology" className="font-bold text-white underline underline-offset-4">published measurement methodology</Link>.</p>
   <Link href="/contact#book" className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-white px-7 py-3 font-bold text-[#0D2318]">Start with your Local AI Visibility Index</Link>
  </div>
 </section>;
}
