import Image from "next/image";

export default function AboutAaron() {
  return (
    <section id="about" className="bg-[#fafaf8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[280px_1fr] lg:items-start">

          {/* Left: avatar + credentials */}
          <div className="flex flex-col items-center lg:items-start gap-5">
            <div className="relative">
              <div className="relative h-64 w-56 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/aaron-husak.webp"
                  alt="Aaron Husak, Founder of Sequoia GEO"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Inc 5000 badge */}
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-[#3A9E6A]/30 bg-white px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-[#1A5C3A]">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-bold text-[#1a1a1a]">4x Inc 5000</p>
                    <p className="text-xs text-gray-400">2020 &ndash; 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Licenses */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
              {["B General", "C-2", "C-20 HVAC", "C-36 Plumbing"].map((lic) => (
                <span
                  key={lic}
                  className="rounded-full bg-[#C8EDD2] px-3 py-1 text-xs font-semibold text-[#0D2318]"
                >
                  {lic}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center lg:text-left">CA Contractor Licenses</p>
          </div>

          {/* Right: copy */}
          <div>
            <p className="section-overline mb-4">Why This Works Differently</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl leading-[1.08]">
              When you&rsquo;ve sat in the dispatch chair,{" "}
              <span className="text-[#1A5C3A]">you see things differently.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
              <p>
                Most contractors trust their marketing partner to take care of things.
                That trust is reasonable. The problem is that most marketing partners have
                never run payroll for 130 employees, watched a slow month threaten everything
                they built, or sat in a CSR training session wondering why booking rates
                won&rsquo;t move.
              </p>
              <p>
                After 13 years building a home services company from startup to 4x Inc 5000,
                the one thing that separated growth years from flat years wasn&rsquo;t the
                agency we hired. It was whether marketing, operations, and sales were
                connected or siloed.
              </p>
              <p>
                That&rsquo;s what Sequoia GEO is built around: the full picture. Not just
                your ad spend, but your booking rate, your average ticket, your appointment
                notes, your phones on Saturday morning. The things your current agencies
                aren&rsquo;t looking at because it&rsquo;s &ldquo;not their department.&rdquo;
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-8 rounded-xl bg-[#0D2318] px-7 py-6">
              <p className="text-base font-medium italic text-[#C8EDD2]/90 leading-relaxed">
                &ldquo;An agency sends you a leads report. An owner asks why revenue didn&rsquo;t move.&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-sm font-semibold text-[#3A9E6A]">Aaron Husak, Founder</span>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Balanced Comfort photos */}
        <div className="mx-auto mt-16 max-w-5xl space-y-4">
          {/* Wide team photo */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/balanced-comfort-team.webp"
              alt="Balanced Comfort team — Fresno, CA"
              width={1800}
              height={425}
              className="w-full object-cover"
            />
          </div>
          {/* Two-col: training photo + caption */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 items-end">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/balanced-comfort-plumbing-training.webp"
                alt="Balanced Comfort in-house plumbing training, August 2022"
                width={600}
                height={503}
                className="w-full object-cover"
              />
            </div>
            <div className="pb-2">
              <p className="text-sm font-semibold text-[#1a1a1a]">
                Built from the inside out.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                When entry-level plumbers were hard to find, we ran in-house training at our shop rather than wait on the market. 50+ employees at peak. 4x Inc 5000, 2020&ndash;2023. That&rsquo;s the background behind every marketing recommendation we make.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
