import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { featuredAboutMedia } from "@/data/media";

export const metadata: Metadata = {
  title: "About Sequoia GEO | Aaron Husak, Home Services Marketing Operator",
  description:
    "Aaron Husak has worked in home services since 2006, including 13 years building and running Balanced Comfort. Clients work directly with Aaron, not an account manager.",
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
                  In home services since 2006. Thirteen years as an owner and operator.
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
                  <p className="text-xs text-gray-500">2020 to 2023</p>
                </div>
              </div>
            </div>

            {/* Right: story */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Aaron Husak began working in home services in 2006, starting in sales and marketing
                for a residential solar company. In 2012, he launched Balanced Comfort Heating &amp; Air
                in Fresno, California. One truck. No employees. Competing against companies with decades
                of name recognition and marketing budgets that dwarfed his entire operation.
              </p>
              <p>
                Over the next 13 years, he built Balanced Comfort into one of the Central Valley&rsquo;s
                largest residential HVAC companies. 130+ employees. Offices across multiple cities. More
                than 4,000 five-star Google reviews. Four consecutive appearances on the Inc. 5000 list
                of fastest-growing private companies in America.
              </p>
              <p>
                He didn&rsquo;t hire an agency to do it. He learned the systems himself: local
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

      {/* Photo gallery, E-E-A-T proof */}
      <section className="bg-[#fafaf8] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-4">

            {/* Team panoramic */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image src="/balanced-comfort-team.webp" alt="Balanced Comfort team, Fresno, CA" width={1800} height={425} className="w-full object-cover" />
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
                <Image src="/inc5000-plaque-2021.webp" alt="Inc 5000 award, Balanced Comfort 2021, #817 overall, 595% growth" width={960} height={1200} className="w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image src="/inc5000-plaque-2022.webp" alt="Inc 5000 award, Balanced Comfort 2022, #511 overall" width={960} height={1200} className="w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image src="/cslb-license.webp" alt="California CSLB License, Balanced Comfort #1027318, C36 Plumbing, B General Building" width={3331} height={2591} className="w-full object-cover" />
              </div>
            </div>

            {/* Industry connections */}
            <div>
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">In the rooms where home services decisions get made</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="overflow-hidden rounded-2xl shadow-sm">
                  <Image src="/aaron-joe-crisera.webp" alt="Aaron Husak with Joe Crisera" width={2268} height={4032} className="w-full h-64 object-cover object-top" />
                  <div className="px-4 py-3 bg-white border-t border-gray-100">
                    <p className="text-xs font-semibold text-[#1a1a1a]">Joe Crisera</p>
                    <p className="text-xs text-gray-500">Home services industry leader</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-sm">
                  <Image src="/aaron-tommy-mello.webp" alt="Aaron Husak with Tommy Mello, founder of A1 Garage Door Service" width={4032} height={2268} className="w-full h-64 object-cover object-top" />
                  <div className="px-4 py-3 bg-white border-t border-gray-100">
                    <p className="text-xs font-semibold text-[#1a1a1a]">Tommy Mello</p>
                    <p className="text-xs text-gray-500">Founder, A1 Garage Door Service</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-sm">
                  <Image src="/aaron-michelle-van-beek.webp" alt="Aaron Husak with Michelle Van Beek at Growth Summit 2022" width={2268} height={4032} className="w-full h-64 object-cover object-top" />
                  <div className="px-4 py-3 bg-white border-t border-gray-100">
                    <p className="text-xs font-semibold text-[#1a1a1a]">Michelle Van Beek</p>
                    <p className="text-xs text-gray-500">Home services growth leader</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office + published media */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 items-stretch">
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image src="/first-office-exterior.webp" alt="Balanced Comfort first office, Fresno, CA" width={4000} height={3000} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">Featured Conversations and Trade Media</p>
                  <div className="space-y-3">
                    {featuredAboutMedia.map((item) => (
                      <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                        <span className="mt-0.5 flex-shrink-0 h-8 w-8 rounded-full bg-[#C8EDD2] flex items-center justify-center">
                          {item.kind === "podcast" ? (
                            <svg className="h-4 w-4 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>
                          ) : (
                            <svg className="h-4 w-4 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5A3.375 3.375 0 0010.125 2.25H8.25m0 12.75h7.5m-7.5 3H12m-1.5-15.75H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.625a9 9 0 00-9-9z" /></svg>
                          )}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-[#1a1a1a] group-hover:text-[#1A5C3A] transition-colors">{item.outlet}</p>
                          <p className="text-xs text-gray-500">{item.title}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <Link href="/media" className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[#1A5C3A] hover:text-[#0D2318]">
                    View all media and writing
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-500 leading-relaxed">Started in a 400 sq ft office in Fresno, CA. Grew to 130 employees, 4,000+ five-star reviews, and four consecutive Inc 5000 rankings before founding Sequoia GEO.</p>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500">
              Balanced Comfort, Fresno CA, 130+ employees at peak &bull; 4x Inc 5000 (2020 to 2023) &bull; CSLB License #1027318
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
                body: "Monthly reports showing green metrics while jobs booked stagnate is not a win. We look at cost per booked job, average ticket, and booking rate, the numbers that connect marketing spend to jobs booked.",
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

      {/* The working relationship */}
      <section className="bg-[#fafaf8] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              You work with Aaron, not an account manager.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Aaron leads the strategy, joins the working meetings, reviews the evidence, and remains
              accountable for the decisions. Specialized implementation support may be added when a scope
              requires it, but the client relationship and strategic responsibility are not handed to a
              junior account representative.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              The strongest fit is an established local or home service business that needs someone to
              understand the full customer-acquisition system, not another vendor reporting only the channel
              they manage.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Sequoia GEO is based in Fresno, California and works with contractors nationwide.
              Fresno businesses can start with our{" "}
              <Link href="/seo-agency-fresno" className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]">Fresno SEO services</Link>.
            </p>
          </div>

          {/* Stats bar */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { stat: "Direct", label: "access to Aaron" },
              { stat: "Since 2006", label: "working in home services" },
              { stat: "13 yrs", label: "owner and operator" },
              { stat: "90-day", label: "initial term" },
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

      {/* The initial term */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              The first 30 days begin a 90-day engagement.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Month one establishes the baseline, identifies the first approved constraint, implements the
              first corrections, and documents what changed. The remaining initial term gives those changes
              time to be discovered, measured, and evaluated without pretending that a result can be promised
              on a fixed date. After the initial term, the engagement continues month to month.
            </p>
            <div className="mt-10">
              <Link
                href="/ai-seo-pricing"
                className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
              >
                See Engagements and Pricing
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
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#C8EDD2]"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
