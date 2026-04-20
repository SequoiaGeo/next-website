import Link from "next/link";

const stats = [
  {
    value: "4x",
    label: "Inc 5000",
    sub: "2020 · 2021 · 2022 · 2023",
    accent: "#3A9E6A",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
  },
  {
    value: "130+",
    label: "Employees built",
    sub: "from solo to full company",
    accent: "#6FCF97",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    value: "$10M+",
    label: "Revenue at exit",
    sub: "acquired Dec 2024",
    accent: "#3A9E6A",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    value: "13 yrs",
    label: "In the field",
    sub: "not just marketing it",
    accent: "#6FCF97",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative bg-[#0D2318] overflow-hidden">
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Radial glow — top left */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#1A5C3A]/25 blur-[120px] pointer-events-none" />

      {/* Radial glow — right side behind stats */}
      <div className="absolute top-10 right-0 w-[480px] h-[480px] rounded-full bg-[#3A9E6A]/10 blur-[100px] pointer-events-none" />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#3A9E6A 1px, transparent 1px), linear-gradient(90deg, #3A9E6A 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">

          {/* Left: Copy */}
          <div>
            <p className="section-overline text-[#3A9E6A] mb-6">
              Growth Operations for Home Services
            </p>

            <h1 className="text-5xl font-extrabold text-white sm:text-6xl lg:text-[4.25rem] leading-[1.06] tracking-tight">
              What would your marketing look like if the person running it had{" "}
              <em className="not-italic text-[#3A9E6A]">P&L responsibility?</em>
            </h1>

            <p className="mt-8 text-lg text-[#C8EDD2]/70 leading-relaxed max-w-2xl">
              An agency sends you a leads report. An operator asks why revenue didn&rsquo;t move.
              Marketing and sales aren&rsquo;t two separate things. They&rsquo;re the same pipeline.
              If one end is leaking, it doesn&rsquo;t matter how much you pour in the other.
            </p>

            <p className="mt-4 text-base text-[#C8EDD2]/45 max-w-xl">
              13 years running a home service company to 130+ employees and 4x Inc 5000.
              Now working with 10 contractors at a time.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3A9E6A]"
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
              className="mt-6 inline-flex items-center gap-2 text-sm text-[#C8EDD2]/40 hover:text-[#C8EDD2]/70 transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Prefer to talk? (559) 521-3122
            </a>
          </div>

          {/* Right: Proof stats — redesigned */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.value}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.05] p-5 lg:p-6 overflow-hidden transition-all duration-300 hover:border-[#3A9E6A]/40 hover:bg-white/[0.08]"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }}
                />
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top left, ${s.accent}15, transparent 70%)` }}
                />

                {/* Icon */}
                <div className="mb-3 text-[#3A9E6A]/60 group-hover:text-[#3A9E6A] transition-colors">
                  {s.icon}
                </div>

                {/* Value — big and bold */}
                <div
                  className="text-4xl font-extrabold leading-none lg:text-5xl"
                  style={{ color: s.accent }}
                >
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-bold text-white leading-snug">{s.label}</div>
                <div className="mt-1 text-xs text-[#C8EDD2]/40 leading-snug">{s.sub}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-7 border-t border-white/10">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-[#C8EDD2]/35 font-medium">
            <span>CA Licensed Contractor B &middot; C-2 &middot; C-20 HVAC &middot; C-36 Plumbing</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>Fresno, CA &middot; Serving Nationwide</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>10 clients at a time &middot; Currently{" "}
              <span className="text-[#3A9E6A]/80">accepting applications</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
