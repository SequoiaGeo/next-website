import Link from "next/link";
import { aiSearchTradeSurfaces } from "@/lib/ai-search-trades";

export default function TradeAiSearchNav({ currentHref }: { currentHref: string }) {
  return (
    <section className="border-y border-[#1A5C3A]/10 bg-[#F1F6F2] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1A5C3A]">
            AI Search by trade
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            One method, interpreted for how each home-service trade is actually bought
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            The SEO foundation is shared. The questions, public evidence, service details, and
            qualification rules differ by trade.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {aiSearchTradeSurfaces.map((surface) => {
            const active = surface.href === currentHref;
            return (
              <Link
                key={surface.href}
                href={surface.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-2xl border p-6 transition ${
                  active
                    ? "border-[#1A5C3A] bg-[#1A5C3A] text-white"
                    : "border-[#1A5C3A]/15 bg-white text-[#1a1a1a] hover:-translate-y-1 hover:border-[#1A5C3A]/40 hover:shadow-lg"
                }`}
              >
                <p className={`text-sm font-bold ${active ? "text-[#C8EDD2]" : "text-[#1A5C3A]"}`}>
                  {surface.shortLabel}
                </p>
                <p className="mt-2 text-lg font-extrabold leading-snug">{surface.label}</p>
                <p className={`mt-3 text-sm leading-relaxed ${active ? "text-white/80" : "text-gray-600"}`}>
                  {surface.description}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
          <Link href="/geo-agency" className="text-[#1A5C3A] underline underline-offset-4">
            View the national AI SEO service
          </Link>
          <Link href="/ai-search-methodology" className="text-[#1A5C3A] underline underline-offset-4">
            Read the measurement method
          </Link>
          <Link href="/ai-seo-pricing" className="text-[#1A5C3A] underline underline-offset-4">
            Review pricing and scope
          </Link>
        </div>
      </div>
    </section>
  );
}
