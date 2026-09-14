import Link from "next/link";
import WebsiteAssessmentForm from "@/components/WebsiteAssessmentForm";

export default function Hero() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 pt-8 pb-14 sm:pt-16 sm:pb-20">
        <div>

          {/* Left: Copy */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A5C3A] mb-6">
              AI Search Visibility for Home Service Businesses
            </p>

            <h1 className="text-4xl font-extrabold text-[#111111] sm:text-5xl lg:text-[3.5rem] leading-[1.06] tracking-tight">
              Help customers <span className="text-[#1A5C3A]">find and trust your business</span> in AI search and Google.
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Help more customers discover your business, understand why you&rsquo;re the right choice, and take the next step.
            </p>
            <div className="mt-6">
              <WebsiteAssessmentForm />
            </div>

            <p className="mt-4 text-sm font-medium text-[#0D2318] leading-relaxed max-w-xl">
              Founded by an HVAC and plumbing operator who scaled a company to $17M and earned four consecutive Inc. 5000 appearances.
            </p>

            <p className="mt-3 text-sm text-gray-400">
              Hand reviewed. Public information first. No account access needed.
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Prefer a conversation?{" "}
              <Link href="/contact#book" className="font-semibold text-[#1A5C3A] underline-offset-2 hover:underline">
                Choose a time with Aaron
              </Link>
            </p>

            <a
              href="tel:5595213122"
              className="mt-5 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Prefer to call? (559) 521-3122
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
