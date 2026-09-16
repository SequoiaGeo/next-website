import Link from "next/link";
import WebsiteAssessmentForm from "@/components/WebsiteAssessmentForm";

export default function Hero() {
  return (
    <section className="border-b border-[#0D2318]/15 bg-[#f7f5ef] text-[#0D2318]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-16 lg:px-8 lg:py-20">
        <p className="mb-7 text-sm font-bold uppercase tracking-[0.16em] text-[#1A5C3A]">Built by a home-service owner.</p>
        <div className="grid gap-9 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
          <div>
            <h1 className="text-[clamp(2.25rem,9vw,3.5rem)] font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[5.5rem]">Get Recommended<br /><span className="font-serif font-normal italic text-[#1A5C3A]">by AI.</span></h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#34483b]">You have crews to keep busy, a reputation to protect, and customers counting on you. Your marketing should support all three.</p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#34483b]">Sequoia GEO helps homeowners find and choose your business through AI search and Google, led by someone who understands what happens after the phone rings.</p>
            <p className="mt-5 text-sm font-semibold leading-relaxed text-[#526156]">13 years owning and operating an HVAC and plumbing company. Four consecutive Inc. 5000 appearances.</p>
          </div>
          <div className="border-t border-[#0D2318]/20 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <WebsiteAssessmentForm />
            <p className="mt-4 text-sm text-[#526156]">AI recommendations are earned, not guaranteed.</p>
            <p className="mt-4 text-sm leading-relaxed text-[#526156]">Reviewed by Aaron, not an instant score. No account access needed.</p>
            <p className="mt-5 text-sm text-[#34483b]">Prefer to talk? <Link href="/contact#book" className="font-semibold text-[#1A5C3A] underline underline-offset-4">Choose a time with Aaron</Link>{" or "}<a href="tel:5595213122" className="font-semibold text-[#1A5C3A] underline underline-offset-4">call (559) 521-3122</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
