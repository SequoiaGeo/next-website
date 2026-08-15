import Link from "next/link";
import YouTubeFacade from "@/components/YouTubeFacade";

const credentials = [
  "4x Inc 5000",
  "130+ employees built",
  "$17M+ revenue at exit",
  "13 years in the field",
  "You work with me, not an account manager",
];

export default function Hero() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A5C3A] mb-6">
              Operator-Led Marketing for Home Service Contractors
            </p>

            <h1 className="text-4xl font-extrabold text-[#111111] sm:text-5xl lg:text-[3.5rem] leading-[1.06] tracking-tight">
              More <span className="text-[#1A5C3A]">booked jobs</span> on your calendar. Not more clicks, leads, and reports.
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              I built a home service company. 130 employees, a $17M exit, 4x Inc 5000. Now I lead every Sequoia engagement and remain your point of contact. I watch the whole pipeline: the ads, the phones, and the booking rate. Most agencies are accountable for their channel. I am accountable for the booked job.
            </p>

            <p className="mt-4 text-sm font-semibold text-[#1A5C3A]">
              Engagements start at $2,500/mo with a three-month initial term, then month to month.
            </p>

            <div className="mt-8">
              <Link
                href="/contact#book"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-[0.9375rem] font-bold text-white transition-colors hover:bg-[#0D2318] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A5C3A]"
              >
                Choose a Time With Aaron
                <svg aria-hidden="true" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <p className="mt-3 text-sm text-gray-400">
              15 minutes. No pitch deck. You work directly with me.
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Want proof first?{" "}
              <Link href="/case-studies" className="font-semibold text-[#1A5C3A] underline-offset-2 hover:underline">
                See client results
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

            {/* Proof strip */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 list-none p-0 m-0" aria-label="Credentials">
                {credentials.map((c) => (
                  <li key={c} className="text-sm font-medium text-gray-500">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Client video testimonial */}
          <div className="mx-auto w-full max-w-[320px] lg:max-w-[340px]">
            <div
              className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-gray-100 bg-black"
              style={{ paddingBottom: "177.78%" }}
            >
              <YouTubeFacade
                videoId="IpbCaelX2jo"
                title="Michael Bissett of KABAM Plumbing on working with Sequoia GEO"
                isShort
              />
            </div>
            <p className="mt-3 text-sm text-gray-500 text-center">
              Michael Bissett, owner of KABAM Plumbing, Sun City Center FL.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
