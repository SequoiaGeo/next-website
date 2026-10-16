import Link from "next/link";
import { afcsResults as r } from "@/data/afcs-results";

export default function AFCSResultsCard() {
  return (
    <article className="my-8 rounded-2xl border border-[#1A5C3A]/20 bg-white p-6 sm:p-9" aria-label="Home-service organic search case study">
      <p className="text-sm font-semibold uppercase tracking-wider text-[#1A5C3A]">Home-service website and SEO case study</p>
      <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0D2318] sm:text-3xl">From 26 to 121 organic Google clicks.</h3>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-700">A Fireman&apos;s Chimney Sweep saw {r.clickIncreasePercent}% more organic website clicks in a later 30-day window than in the first 30 days after its new website launched.</p>
      <dl className="mt-6 grid gap-4 sm:grid-cols-2">
        {[r.first, r.latest].map((w) => <div key={w.label} className="rounded-xl bg-[#fafaf8] p-5"><dt className="text-base font-semibold text-[#0D2318]">{w.label}</dt><dd className="mt-2 text-4xl font-extrabold text-[#1A5C3A]">{w.clicks}<span className="ml-2 text-base font-medium text-gray-600">organic clicks</span></dd><dd className="mt-2 text-sm text-gray-600">{w.dates}</dd></div>)}
      </dl>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">Source: Google Search Console, verified October 16, 2026. Both windows follow launch. Seasonal demand may contribute; clicks are not leads or booked jobs.</p>
      <Link className="mt-5 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline underline-offset-4" href="/case-studies/firemans-chimney-sweep">See the work and the Search Console results</Link>
    </article>
  );
}
