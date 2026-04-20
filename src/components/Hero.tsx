import Link from "next/link";

const stats = [
  { value: "4x", label: "Inc 5000 honoree", sub: "2020 · 2021 · 2022 · 2023" },
  { value: "130+", label: "Employees built", sub: "from solo to full company" },
  { value: "$10M+", label: "Revenue at exit", sub: "acquired Dec 2024" },
  { value: "13 yrs", label: "In the field", sub: "not just marketing it" },
];

export default function Hero() {
  return (
    <section className="relative bg-[#1B4332] overflow-hidden">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#2D6A4F]/30 via-transparent to-[#1B4332]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">

          {/* Left: Copy */}
          <div>
            <p className="section-overline text-[#52B788] mb-6">
              Growth Operations for Home Services
            </p>

            <h1 className="text-5xl font-extrabold text-white sm:text-6xl lg:text-[4.25rem] leading-[1.06] tracking-tight">
              What would your marketing look like if the person running it had{" "}
              <em className="not-italic text-[#52B788]">P&L responsibility?</em>
            </h1>

            <p className="mt-8 text-lg text-[#D8F3DC]/70 leading-relaxed max-w-2xl">
              An agency sends you a leads report. An operator asks why revenue didn&rsquo;t move.
              Marketing and sales aren&rsquo;t two separate things. They&rsquo;re the same pipeline.
              If one end is leaking, it doesn&rsquo;t matter how much you pour in the other.
            </p>

            <p className="mt-4 text-base text-[#D8F3DC]/45 max-w-xl">
              13 years running a home service company to 130+ employees and 4x Inc 5000.
              Now working with 10 contractors at a time.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#52B788] px-8 py-4 text-base font-semibold text-[#1B4332] transition hover:bg-[#6FCF97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#52B788]"
              >
                Book a Strategy Call
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-4 text-base font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                See the Proof
              </Link>
            </div>

            <a
              href="tel:5595213122"
              className="mt-6 inline-flex items-center gap-2 text-sm text-[#D8F3DC]/40 hover:text-[#D8F3DC]/70 transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Prefer to talk? (559) 521-3122
            </a>
          </div>

          {/* Right: Proof stats */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="rounded-xl border border-white/10 bg-white/[0.06] p-5 lg:p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-extrabold text-[#52B788] lg:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm font-semibold text-white leading-snug">{s.label}</div>
                <div className="mt-1 text-xs text-[#D8F3DC]/40 leading-snug">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-7 border-t border-white/10">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-[#D8F3DC]/35 font-medium">
            <span>CA Licensed Contractor B &middot; C-2 &middot; C-20 HVAC &middot; C-36 Plumbing</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>Fresno, CA &middot; Serving Nationwide</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>10 clients at a time &middot; Currently{" "}
              <span className="text-[#52B788]/80">accepting applications</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
