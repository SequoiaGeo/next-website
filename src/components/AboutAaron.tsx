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
                    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
                Most contractors trust their <strong>marketing partner</strong> to take care of things.
                That trust is reasonable. The problem is that most <strong>marketing partners</strong> have
                never run payroll for <strong>130 employees</strong>, watched a slow month threaten everything
                they built, or sat in a <strong>CSR training session</strong> wondering why <strong>booking rates</strong>
                won&rsquo;t move.
              </p>
              <p>
                After <strong>13 years</strong> building a <strong>home services company</strong> from startup to <strong>4x Inc 5000</strong>,
                the one thing that separated growth years from flat years wasn&rsquo;t the
                <strong>agency</strong> we hired. It was whether <strong>marketing</strong>, operations, and sales were
                connected or siloed.
              </p>
              <p>
                That&rsquo;s what <strong>Sequoia GEO</strong> is built around: the full picture. Not just
                your <strong>ad spend</strong>, but your <strong>booking rate</strong>, your <strong>average ticket</strong>, your appointment
                notes, your phones on Saturday morning. The things your current <strong>agencies</strong>
                aren&rsquo;t looking at because it&rsquo;s &ldquo;not their department.&rdquo;
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-8 rounded-xl bg-[#0D2318] px-7 py-6">
              <p className="text-base font-medium italic text-[#C8EDD2]/90 leading-relaxed">
                &ldquo;An <strong>agency</strong> sends you a <strong>leads report</strong>. An owner asks why <strong>revenue</strong> didn&rsquo;t move.&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-sm font-semibold text-[#3A9E6A]">Aaron Husak, Founder</span>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Balanced Comfort photo gallery */}
        <div className="mx-auto mt-16 max-w-5xl space-y-4">

          {/* Wide team panoramic */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/balanced-comfort-team.webp"
              alt="Balanced Comfort team — Fresno, CA"
              width={1800}
              height={425}
              className="w-full object-cover"
            />
          </div>

          {/* Three-col: training photos + fleet */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/balanced-comfort-plumbing-training.webp"
                alt="Balanced Comfort in-house plumbing training, August 2022"
                width={600}
                height={503}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/hajoca-rinnai-training.webp"
                alt="Balanced Comfort technicians at Hajoca Rinnai training"
                width={1200}
                height={900}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/hajoca-fleet-vans.webp"
                alt="Balanced Comfort fleet vans at Hajoca Solutions Group"
                width={1200}
                height={900}
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Inc 5000 plaques + CSLB license */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/inc5000-plaque-2021.webp"
                alt="Inc 5000 award plaque — Balanced Comfort 2021, #817 overall, 595% growth"
                width={960}
                height={1200}
                className="w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/inc5000-plaque-2022.webp"
                alt="Inc 5000 award plaque — Balanced Comfort 2022, #511 overall"
                width={960}
                height={1200}
                className="w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/cslb-license.webp"
                alt="California Contractors State License Board — Balanced Comfort, License #1027318, C36 Plumbing, B General Building"
                width={3331}
                height={2591}
                className="w-full object-cover"
              />
            </div>
          </div>
          <p className="text-center text-sm text-gray-400">
            Balanced Comfort, Fresno CA &mdash; 50+ employees at peak &bull; 4x Inc 5000 (2020&ndash;2023) &bull; CSLB License #1027318 (C36 Plumbing, B General Building)
          </p>

          {/* Industry connections */}
          <div className="pt-4">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">In the rooms where home services decisions get made</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/aaron-joe-crisera.webp"
                  alt="Aaron Husak with Joe Crisera, home services industry leader"
                  width={2268}
                  height={4032}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="px-4 py-3 bg-white border-t border-gray-100">
                  <p className="text-xs font-semibold text-[#1a1a1a]">Joe Crisera</p>
                  <p className="text-xs text-gray-400">Home services industry leader</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/aaron-tommy-mello.webp"
                  alt="Aaron Husak with Tommy Mello, founder of A1 Garage Door Service"
                  width={4032}
                  height={2268}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="px-4 py-3 bg-white border-t border-gray-100">
                  <p className="text-xs font-semibold text-[#1a1a1a]">Tommy Mello</p>
                  <p className="text-xs text-gray-400">Founder, A1 Garage Door Service</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/aaron-michelle-van-beek.webp"
                  alt="Aaron Husak with Michelle Van Beek at Growth Summit 2022"
                  width={2268}
                  height={4032}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="px-4 py-3 bg-white border-t border-gray-100">
                  <p className="text-xs font-semibold text-[#1a1a1a]">Michelle Van Beek</p>
                  <p className="text-xs text-gray-400">Home services growth leader</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office origin + podcasts */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 items-stretch">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/first-office-exterior.webp"
                alt="Balanced Comfort first office — Fresno, CA"
                width={4000}
                height={3000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">As Featured On</p>
                <div className="space-y-3">
                  <a
                    href="https://www.thefirstclick.net/ep-320-using-ai-to-increase-website-clarity-with-aaron-husak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <span className="mt-0.5 flex-shrink-0 h-8 w-8 rounded-full bg-[#C8EDD2] flex items-center justify-center">
                      <svg aria-hidden="true" className="h-4 w-4 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#1a1a1a] group-hover:text-[#1A5C3A] transition-colors">Digital Marketing Therapy &mdash; Ep. 320</p>
                      <p className="text-xs text-gray-400">Using AI to Increase Website Clarity</p>
                    </div>
                  </a>
                  <a
                    href="https://www.grownearby.com/podcast/the-success-story-of-aaron-husak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <span className="mt-0.5 flex-shrink-0 h-8 w-8 rounded-full bg-[#C8EDD2] flex items-center justify-center">
                      <svg aria-hidden="true" className="h-4 w-4 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#1a1a1a] group-hover:text-[#1A5C3A] transition-colors">Grow Nearby Podcast</p>
                      <p className="text-xs text-gray-400">The Success Story of Aaron Husak</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="text-xs text-gray-400 leading-relaxed">Started in a 400 sq ft office in Fresno, CA. Grew to 130 employees, 4,000+ five-star reviews, and four consecutive Inc 5000 rankings before founding Sequoia GEO.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
