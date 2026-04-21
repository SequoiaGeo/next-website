import Link from "next/link";
import Image from "next/image";
import GHLWidget from "@/components/GHLWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sequoia GEO | Aaron Husak, Home Services Marketing Operator",
  description:
    "Aaron Husak spent 13 years building Balanced Comfort from one truck to $10M+ and 4x Inc 5000. Now he runs Sequoia GEO, working with 10 home service contractors at a time.",
  alternates: { canonical: "https://www.sequoiageo.com/about-sequoia-geo" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-overline mb-6">About Sequoia GEO</div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Built by someone who&rsquo;s been on your side of the dispatch board.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              Most marketing consultants understand marketing. Aaron Husak understands what it costs
              when the phone doesn&rsquo;t ring.
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.6fr] lg:items-start">
            {/* Sticky left */}
            <div className="lg:sticky lg:top-24 flex flex-col gap-6">
              <div>
                <div className="section-overline mb-4">The Background</div>
                <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
                  13 years. 130 employees. One exit.
                </h2>
              </div>
              <div className="relative w-48 lg:w-full max-w-[240px]">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/aaron-husak.webp"
                    alt="Aaron Husak, Founder of Sequoia GEO"
                    width={480}
                    height={497}
                    className="w-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 rounded-xl border border-[#3A9E6A]/30 bg-white px-3 py-2 shadow-lg">
                  <p className="text-xs font-bold text-[#1a1a1a]">4x Inc 5000</p>
                  <p className="text-xs text-gray-400">2020&ndash;2023</p>
                </div>
              </div>
            </div>

            {/* Right: story */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Aaron Husak launched Balanced Comfort Heating &amp; Air in Fresno, California in 2012.
                One truck. No employees. Competing against companies with decades of name recognition
                and marketing budgets that dwarfed his entire operation.
              </p>
              <p>
                Over the next 13 years, he built Balanced Comfort into one of the Central Valley&rsquo;s
                largest residential HVAC companies. 130+ employees. Offices across multiple cities. More
                than 4,000 five-star Google reviews. Four consecutive appearances on the Inc. 5000 list
                of fastest-growing private companies in America.
              </p>
              <p>
                He didn&rsquo;t hire an agency to do it. He learned the systems himself -- local
                SEO, Google Ads, LSAs, reputation management, call tracking, booking rate optimization,
                CSR training. He watched what worked and what didn&rsquo;t with his own revenue on the
                line. In December 2024, Balanced Comfort was acquired.
              </p>
              <p>
                After the exit, Aaron started Sequoia GEO to take those 13 years of operator-level
                marketing knowledge and work directly with other contractors. Not as a vendor managing
                a dashboard. As an operator who understands why revenue didn&rsquo;t move.
              </p>
              <div className="pt-2">
                <Link
                  href="/case-studies/balanced-comfort"
                  className="inline-flex items-center gap-1 font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
                >
                  Read the Balanced Comfort case study
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery — E-E-A-T proof */}
      <section className="bg-[#fafaf8] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-4">

            {/* Team panoramic */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image src="/balanced-comfort-team.webp" alt="Balanced Comfort team — Fresno, CA" width={1800} height={425} className="w-full object-cover" />
            </div>

            {/* Training + fleet */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image src="/balanced-comfort-plumbing-training.webp" alt="Balanced Comfort in-house plumbing training, August 2022" width={600} height={503} className="w-full h-48 object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image src="/hajoca-rinnai-training.webp" alt="Balanced Comfort technicians at Hajoca Rinnai training" width={1200} height={900} className="w-full h-48 object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image src="/hajoca-fleet-vans.webp" alt="Balanced Comfort fleet vans at Hajoca Solutions Group" width={1200} height={900} className="w-full h-48 object-cover" />
              </div>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image src="/inc5000-plaque-2021.webp" alt="Inc 5000 award — Balanced Comfort 2021, #817 overall, 595% growth" width={960} height={1200} className="w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image src="/inc5000-plaque-2022.webp" alt="Inc 5000 award — Balanced Comfort 2022, #511 overall" width={960} height={1200} className="w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image src="/cslb-license.webp" alt="California CSLB License — Balanced Comfort #1027318, C36 Plumbing, B General Building" width={3331} height={2591} className="w-full object-cover" />
              </div>
            </div>

            {/* Industry connections */}
            <div>
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">In the rooms where home services decisions get made</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="overflow-hidden rounded-2xl shadow-sm">
                  <Image src="/aaron-joe-crisera.webp" alt="Aaron Husak with Joe Crisera" width={2268} height={4032} className="w-full h-64 object-cover object-top" />
                  <div className="px-4 py-3 bg-white border-t border-gray-100">
                    <p className="text-xs font-semibold text-[#1a1a1a]">Joe Crisera</p>
                    <p className="text-xs text-gray-400">Home services industry leader</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-sm">
                  <Image src="/aaron-tommy-mello.webp" alt="Aaron Husak with Tommy Mello, founder of A1 Garage Door Service" width={4032} height={2268} className="w-full h-64 object-cover object-top" />
                  <div className="px-4 py-3 bg-white border-t border-gray-100">
                    <p className="text-xs font-semibold text-[#1a1a1a]">Tommy Mello</p>
                    <p className="text-xs text-gray-400">Founder, A1 Garage Door Service</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-sm">
                  <Image src="/aaron-michelle-van-beek.webp" alt="Aaron Husak with Michelle Van Beek at Growth Summit 2022" width={2268} height={4032} className="w-full h-64 object-cover object-top" />
                  <div className="px-4 py-3 bg-white border-t border-gray-100">
                    <p className="text-xs font-semibold text-[#1a1a1a]">Michelle Van Beek</p>
                    <p className="text-xs text-gray-400">Home services growth leader</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office + podcasts */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 items-stretch">
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image src="/first-office-exterior.webp" alt="Balanced Comfort first office — Fresno, CA" width={4000} height={3000} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">As Featured On</p>
                  <div className="space-y-3">
                    <a href="https://www.thefirstclick.net/ep-320-using-ai-to-increase-website-clarity-with-aaron-husak/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                      <span className="mt-0.5 flex-shrink-0 h-8 w-8 rounded-full bg-[#C8EDD2] flex items-center justify-center">
                        <svg className="h-4 w-4 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#1a1a1a] group-hover:text-[#1A5C3A] transition-colors">Digital Marketing Therapy &mdash; Ep. 320</p>
                        <p className="text-xs text-gray-400">Using AI to Increase Website Clarity</p>
                      </div>
                    </a>
                    <a href="https://www.grownearby.com/podcast/the-success-story-of-aaron-husak/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                      <span className="mt-0.5 flex-shrink-0 h-8 w-8 rounded-full bg-[#C8EDD2] flex items-center justify-center">
                        <svg className="h-4 w-4 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>
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

            <p className="text-center text-sm text-gray-400">
              Balanced Comfort, Fresno CA &mdash; 50+ employees at peak &bull; 4x Inc 5000 (2020&ndash;2023) &bull; CSLB License #1027318
            </p>
          </div>
        </div>
      </section>

      {/* Why it's different */}
      <section className="bg-[#1a1a1a] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What operator-level marketing actually means
            </h2>
          </div>
          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                title: "We read your appointment notes",
                body: "An agency sees leads. An operator asks why a tech told a customer there'd be no charge if the job didn't work. One of those questions finds revenue. The other misses it completely.",
              },
              {
                title: "We call your phone number",
                body: "Every LSA audit starts with us dialing the number in your profile. It takes 90 seconds. We have found dead phone lines in active, billing campaigns. The agency never called.",
              },
              {
                title: "We ask why revenue didn't move",
                body: "Monthly reports showing green metrics while revenue stagnates is not a win. We look at cost per booked job, average ticket, and booking rate  -  the numbers that connect marketing spend to actual revenue.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="text-base font-bold text-[#3A9E6A]">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#C8EDD2]/70">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The model */}
      <section className="bg-[#fafaf8] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              10 contractors at a time. That&rsquo;s the whole model.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Sequoia GEO works with a maximum of 10 home service companies at any given time. Not because
              we can&rsquo;t scale  -  because the work we do requires actually knowing your business.
              Understanding your market. Reading your reports. Being available when something needs
              attention. That level of engagement isn&rsquo;t possible at agency scale.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              The contractors we work with are typically doing $2M to $15M in annual revenue, spending at
              least $3K/month on marketing, and frustrated that their current setup produces leads without
              producing growth. They don&rsquo;t need more vendors. They need someone who reads the full
              picture.
            </p>
          </div>

          {/* Stats bar */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { stat: "Max 10", label: "clients" },
              { stat: "$2M–$15M", label: "revenue range" },
              { stat: "30-day", label: "engagement start" },
              { stat: "No long-term", label: "contract required" },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-xl border border-[#3A9E6A]/20 bg-white p-5 text-center shadow-sm"
              >
                <div className="text-xl font-extrabold text-[#0D2318]">{item.stat}</div>
                <div className="mt-1 text-xs text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 30-day start */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Every engagement starts with 30 days.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              The first 30 days is an audit and implementation sprint. We get access to everything  -  ad
              accounts, analytics, LSA, ServiceTitan or whatever CRM is in use. We run through all 12
              areas. We document findings. We make approved changes. By day 30 you have a complete picture
              of what&rsquo;s working, what&rsquo;s leaking, and what the fixes look like  -  regardless of
              what you decide after that.
            </p>
            <div className="mt-10">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                Apply for Your First 30 Days
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">Ready to talk?</h2>
          <p className="mt-4 text-lg text-[#C8EDD2]/80">
            (559) 521-3122 &middot; aaron@sequoiageo.com
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#C8EDD2]"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
      <GHLWidget />
    </>
  );
}
