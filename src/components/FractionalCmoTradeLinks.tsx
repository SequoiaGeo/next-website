import Link from "next/link";
import { fractionalCmoTrades } from "@/lib/fractional-cmo-trades";

export default function FractionalCmoTradeLinks({
    currentHref,
    heading = "Fractional CMO leadership built for your trade",
    intro = "The leadership role is the same across trades. The demand patterns, call math and software are not. Each trade page explains how Aaron approaches that business.",
}: {
    currentHref?: string;
    heading?: string;
    intro?: string;
}) {
    const trades = fractionalCmoTrades.filter((trade) => trade.href !== currentHref);
    return <section aria-labelledby="fractional-cmo-trades-heading" className="bg-white py-16">
  <div className="mx-auto max-w-6xl px-6 lg:px-8">
   <p className="section-overline mb-4">Trades we lead</p>
   <h2 id="fractional-cmo-trades-heading" className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#0D2318]">{heading}</h2>
   <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">{intro}</p>
   <div className={`mt-8 grid gap-5 ${trades.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
    {trades.map((trade) => <Link key={trade.href} href={trade.href} className="group rounded-2xl border border-gray-200 bg-[#fafaf8] p-7 transition hover:border-[#3A9E6A]/40 hover:shadow-md">
     <p className="text-sm font-bold uppercase tracking-wider text-[#1A5C3A]">{trade.trade}</p>
     <h3 className="mt-3 text-xl font-bold text-[#0D2318] group-hover:underline group-hover:underline-offset-4">{trade.label}</h3>
     <p className="mt-3 leading-relaxed text-gray-700">{trade.body}</p>
    </Link>)}
   </div>
  </div>
 </section>;
}
