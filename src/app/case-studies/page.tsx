import Link from "next/link";
import type { Metadata } from "next";
import YouTubeFacade from "@/components/YouTubeFacade";

export const metadata: Metadata = {
  title: "Case Studies | Sequoia GEO",
  description:
    "Real results from Sequoia GEO. See how contractors have grown revenue, improved booking rates, and fixed what their previous agencies missed.",
  alternates: {
    canonical: "https://www.sequoiageo.com/case-studies",
  },
};

const balancedComfortStats = [
  { value: "$17M+", label: "Annual revenue at exit" },
  { value: "4,000+", label: "5-star Google reviews" },
  { value: "4x", label: "Inc 5000 honoree" },
  { value: "3x", label: "Best Place to Work certified" },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-overline mb-4">Case Studies</p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Real results. Real numbers.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              Not simulated projections or agency-inflated metrics. Here&rsquo;s what the work
              actually produces.
            </p>
          </div>
        </div>
      </section>

      {/* Client video testimonials */}
      <section className="bg-[#1a1a1a] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-xl">
            <p className="section-overline mb-4 text-[#3A9E6A]">In Their Words</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-[1.1]">
              Owners on what it&rsquo;s like to work with us.
            </h2>
          </div>
          <div className="mx-auto max-w-sm">
            {/* Michael */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <div className="mx-auto w-full max-w-[280px]">
                <div className="relative w-full overflow-hidden rounded-xl bg-black shadow-2xl" style={{ paddingBottom: "177.78%" }}>
                  <YouTubeFacade
                    videoId="IpbCaelX2jo"
                    title="Michael Bissett of KABAM Plumbing on working with Sequoia GEO"
                    isShort
                  />
                </div>
              </div>
              <footer className="mt-6 border-t border-white/10 pt-5 text-center">
                <p className="text-sm font-semibold text-white">Michael Bissett</p>
                <p className="text-xs text-gray-500">Owner, KABAM Plumbing Services</p>
                <p className="text-xs text-gray-500">Sun City Center, FL</p>
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Featured case study */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              {/* Card header */}
              <div className="bg-[#0D2318] px-8 py-10 sm:px-12">
                <span className="inline-block rounded-full bg-[#3A9E6A]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#3A9E6A]">
                  Founder&rsquo;s Story
                </span>
                <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
                  Balanced Comfort Heating &amp; Air
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#C8EDD2]/80">
                  From one truck to $17M+ annual revenue, 4,000+ 5-star Google reviews, four
                  Inc 5000 appearances, three Best Place to Work certifications, and a successful
                  exit. This is the company Aaron Husak built before starting Sequoia GEO. Every
                  strategy deployed for clients was tested here first.
                </p>
              </div>

              {/* Stats row */}
              <div className="border-b border-gray-100 bg-[#fafaf8] px-8 py-6 sm:px-12">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {balancedComfortStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl bg-[#C8EDD2] px-4 py-4 text-center"
                    >
                      <div className="text-xl font-extrabold text-[#0D2318]">{item.value}</div>
                      <div className="mt-1 text-xs text-[#1A5C3A] leading-snug">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="px-8 py-6 sm:px-12">
                <Link
                  href="/case-studies/balanced-comfort"
                  className="inline-flex items-center gap-2 text-base font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
                >
                  Read the full story
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* AFCS case study card */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              {/* Card header */}
              <div className="bg-[#0D2318] px-8 py-10 sm:px-12">
                <span className="inline-block rounded-full bg-[#3A9E6A]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#3A9E6A]">
                  Client Case Study
                </span>
                <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
                  A Fireman&rsquo;s Chimney Sweep
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#C8EDD2]/80">
                  A firefighter-owned chimney company in Emmett, Idaho with 367 Google reviews and
                  a website that had never measured anything. We rebuilt it, protected every
                  ranking it had earned, and put it on page one within three weeks of launch.
                </p>
              </div>

              {/* Stats row */}
              <div className="border-b border-gray-100 bg-[#fafaf8] px-8 py-6 sm:px-12">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { value: "367", label: "Google reviews at a 4.8" },
                    { value: "3 weeks", label: "To page one" },
                    { value: "5.8", label: "Avg position, month one" },
                    { value: "56 → 87", label: "Lighthouse mobile score" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl bg-[#C8EDD2] px-4 py-4 text-center"
                    >
                      <div className="text-xl font-extrabold text-[#0D2318]">{item.value}</div>
                      <div className="mt-1 text-xs text-[#1A5C3A] leading-snug">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="px-8 py-6 sm:px-12">
                <Link
                  href="/case-studies/firemans-chimney-sweep"
                  className="inline-flex items-center gap-2 text-base font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
                >
                  Read the full story
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* KABAM case study card */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="bg-[#0D2318] px-8 py-10 sm:px-12">
                <span className="inline-block rounded-full bg-[#3A9E6A]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#3A9E6A]">
                  Client Case Study
                </span>
                <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
                  KABAM Plumbing Services
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#C8EDD2]/80">
                  An independent, owner-operated plumber in Sun City Center, Florida, holding a
                  perfect 5.0 across 154 Google reviews in a market full of private equity
                  brands. A managed profile, a rebuilt website, and numbers watched closely
                  enough to answer &ldquo;are calls down?&rdquo; with data.
                </p>
              </div>
              <div className="border-b border-gray-100 bg-[#fafaf8] px-8 py-6 sm:px-12">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { value: "5.0", label: "Across 154 reviews" },
                    { value: "116", label: "Profile call-button clicks, 6 months" },
                    { value: "18.8K", label: "Search impressions, climbing" },
                    { value: "100%", label: "Rankings kept through rebuild" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl bg-[#C8EDD2] px-4 py-4 text-center"
                    >
                      <div className="text-xl font-extrabold text-[#0D2318]">{item.value}</div>
                      <div className="mt-1 text-xs text-[#1A5C3A] leading-snug">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-8 py-6 sm:px-12">
                <Link
                  href="/case-studies/kabam-plumbing"
                  className="inline-flex items-center gap-2 text-base font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
                >
                  Read the full story
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Luma case study card */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="bg-[#0D2318] px-8 py-10 sm:px-12">
                <span className="inline-block rounded-full bg-[#3A9E6A]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#3A9E6A]">
                  Client Case Study
                </span>
                <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
                  Luma Exteriors
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#C8EDD2]/80">
                  A premium exteriors company in Austin, Texas that went from 9 Google reviews
                  to 28 at a straight 5.0 and took the top 3 of the map pack across 88 to 96
                  percent of its service area. Review velocity, posting cadence, and Local
                  Services Ads leads watched like they cost money, because they do.
                </p>
              </div>
              <div className="border-b border-gray-100 bg-[#fafaf8] px-8 py-6 sm:px-12">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { value: "9 → 28", label: "Reviews, all 5.0" },
                    { value: "88-96%", label: "Territory in map pack top 3" },
                    { value: "+39%", label: "June interactions vs May" },
                    { value: "~49", label: "Directories in sync" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl bg-[#C8EDD2] px-4 py-4 text-center"
                    >
                      <div className="text-xl font-extrabold text-[#0D2318]">{item.value}</div>
                      <div className="mt-1 text-xs text-[#1A5C3A] leading-snug">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-8 py-6 sm:px-12">
                <Link
                  href="/case-studies/luma-exteriors"
                  className="inline-flex items-center gap-2 text-base font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
                >
                  Read the full story
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Window/insulation case study card */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="bg-[#0D2318] px-8 py-10 sm:px-12">
                <span className="inline-block rounded-full bg-[#3A9E6A]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#3A9E6A]">
                  Anonymized Case Study
                </span>
                <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
                  The $28,000-a-Month Question
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#C8EDD2]/80">
                  A Central Valley window and insulation company spending $28,000 a month on
                  ads graded by their own inflated dashboard. We rebuilt what counted as a
                  conversion, told the client the numbers would look worse because they would
                  finally be real, and cut the spend to about $7,500 while inquiries kept
                  arriving.
                </p>
              </div>
              <div className="border-b border-gray-100 bg-[#fafaf8] px-8 py-6 sm:px-12">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { value: "$28K+", label: "Peak monthly ad spend" },
                    { value: "~$7,500", label: "Spend after cleanup" },
                    { value: "~$60K", label: "Co-op funds accrued" },
                    { value: "Weekly", label: "Sales-marketing meeting" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl bg-[#C8EDD2] px-4 py-4 text-center"
                    >
                      <div className="text-xl font-extrabold text-[#0D2318]">{item.value}</div>
                      <div className="mt-1 text-xs text-[#1A5C3A] leading-snug">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-8 py-6 sm:px-12">
                <Link
                  href="/case-studies/window-insulation-company"
                  className="inline-flex items-center gap-2 text-base font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
                >
                  Read the full story
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Client results note */}
            <p className="mt-8 text-sm text-gray-500 text-center">
              Client case studies added as they&rsquo;re completed, with each client&rsquo;s
              approval. Anonymized when the client prefers it.
            </p>
          </div>
        </div>
      </section>

      {/* Full-picture audit method */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block rounded-full bg-[#C8EDD2] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#1A5C3A] mb-4">
              Audit Method
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Three Vendors. Three Dashboards. No Unified Answer.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-3xl">
              When separate vendors manage separate channels, each report can look healthy while
              nobody connects the combined system to qualified calls and jobs booked. The
              full-picture audit verifies the definitions, joins the records, and finds the gap.
            </p>
          </div>

          {/* Context strip */}
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: "Reporting structure", value: "Siloed" },
              { label: "Primary outcome", value: "Jobs booked" },
              { label: "Review approach", value: "Cross-channel" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-[#fafaf8] border border-gray-200 px-6 py-5 text-center">
                <div className="text-2xl font-extrabold text-[#0D2318]">{item.value}</div>
                <div className="mt-1 text-xs text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Findings */}
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-[#0D2318] px-7 py-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#3A9E6A]">
                What the audit verifies
              </h3>
            </div>

            <div className="divide-y divide-gray-100">

              {/* Finding 1 */}
              <div className="grid grid-cols-1 gap-4 px-7 py-6 sm:grid-cols-[auto_1fr]">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-red-50 px-3 py-2 text-center">
                    <div className="text-lg font-extrabold text-red-500">Page views</div>
                    <div className="text-xs text-red-400 leading-tight">reported as<br/>conversions</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">Google Ads: nonlead events inflated the report</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    The review identifies page views and other nonlead actions inside conversion
                    reporting, then verifies the remaining events against accepted forms, calls,
                    completed bookings, and dispatch data.
                  </p>
                </div>
              </div>

              {/* Finding 2 */}
              <div className="grid grid-cols-1 gap-4 px-7 py-6 sm:grid-cols-[auto_1fr]">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-red-50 px-3 py-2 text-center">
                    <div className="text-lg font-extrabold text-red-500">Unmatched</div>
                    <div className="text-xs text-red-400 leading-tight">lead-platform<br/>spend</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">Lead-platform spend was not tied to booked jobs</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    The review matches lead-platform invoices to qualified calls and jobs booked by
                    trade. A report that stops at leads delivered does not establish performance.
                  </p>
                </div>
              </div>

              {/* Finding 3 */}
              <div className="grid grid-cols-1 gap-4 px-7 py-6 sm:grid-cols-[auto_1fr]">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-red-50 px-3 py-2 text-center">
                    <div className="text-lg font-extrabold text-red-500">Primary</div>
                    <div className="text-xs text-red-400 leading-tight">pages missing<br/>from search</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">SEO company billing monthly while Google couldn&rsquo;t see their site</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    The review checks whether primary service pages are indexed by Google, not merely
                    published. Search Console evidence determines whether the intended search audience
                    can reach the content.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* The real problem */}
          <div className="mt-8 rounded-2xl bg-[#0D2318] px-8 py-7">
            <p className="text-sm font-bold uppercase tracking-widest text-[#3A9E6A] mb-3">The actual problem</p>
            <p className="text-base leading-relaxed text-[#C8EDD2]/80">
              This is not always a channel problem. It can be a visibility problem. Separate vendors
              each own a piece and optimize it in isolation. If no one can reconcile dispatch data,
              nobody can answer which marketing source is producing qualified calls and jobs booked.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
              This is what a Full Picture Audit surfaces. Not a critique of the agencies, an honest
              accounting of what is working, what is wasting money, and what needs to be fixed before
              another dollar gets spent.
            </p>
          </div>

          {/* CTA inline */}
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
            >
              Get Your Free Audit
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <p className="text-sm text-gray-500">48-hour turnaround. No pitch deck. Just your numbers.</p>
          </div>

        </div>
      </section>

      {/* Case study, Appointment notes / hydrojet */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="mb-10">
            <span className="inline-block rounded-full bg-[#C8EDD2] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#1A5C3A] mb-4">
              Operator Finding
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              The Tech Gave Away the Job. The Marketing Agency Never Saw It.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-3xl">
              This one wasn&rsquo;t in an ad account or a search console. It was in an appointment note.
              That&rsquo;s why most marketing agencies would never find it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">What the note said</p>
              <blockquote className="border-l-2 border-[#3A9E6A] pl-5">
                <p className="text-base font-medium italic text-gray-700 leading-relaxed">
                  &ldquo;If the hydrojet doesn&rsquo;t work, there&rsquo;s no charge.&rdquo;
                </p>
                <footer className="mt-3 text-xs text-gray-500">Tech&rsquo;s appointment note, plumbing client</footer>
              </blockquote>
              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                That&rsquo;s not how pricing works. The tech made a verbal commitment on the truck
                that the business never approved. The job got done. The customer got a free service.
                The tech moved on. Nobody flagged it until we were reviewing notes that week.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">What it actually cost</p>
              <p className="text-sm leading-relaxed text-gray-500">
                A hydrojetting job runs $300 to $600 depending on the line length and condition.
                That job was paid for by the marketing budget that generated the lead, the CSR
                time that booked it, and the tech time that ran it. The revenue went to zero
                because of one sentence said on-site that nobody in the office ever heard.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                You can generate 200 leads a month and still lose money if your techs are giving
                away work, your CSRs aren&rsquo;t booking right, or your follow-up process is
                broken. The leak isn&rsquo;t always in the ad account.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0D2318] px-8 py-7 mb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-[#3A9E6A] mb-3">Why a marketing agency will never catch this</p>
            <p className="text-base leading-relaxed text-[#C8EDD2]/80">
              Your marketing agency doesn&rsquo;t have access to your appointment notes. They
              don&rsquo;t sit in dispatch. They don&rsquo;t review job completions. They send
              you a leads report and call it a week. That&rsquo;s not a criticism, it&rsquo;s
              the scope of what they&rsquo;re hired to do.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
              The difference between a marketing vendor and someone who thinks like an owner
              is whether they ever ask why revenue didn&rsquo;t move when the lead numbers looked
              fine. An agency sends you a leads report. An owner asks what happened after the lead
              came in. Those are different questions. They produce different results.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
            >
              Talk to someone who reads the notes
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <p className="text-sm text-gray-500">No pitch deck. A real conversation about your numbers.</p>
          </div>

        </div>
      </section>

      {/* Case study, LSA setup wrong by large SEO firm */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="mb-12">
            <span className="inline-block rounded-full bg-[#C8EDD2] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#1A5C3A] mb-4">
              Audit Finding
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              A Well-Known SEO Company Set Up LSA. Three Things Were Wrong From Day One.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-3xl">
              A plumbing company came in wondering why their Local Services Ads weren&rsquo;t
              producing leads. A large, reputable SEO firm had set up the account. Here&rsquo;s
              what we found.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-[#0D2318] px-7 py-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#3A9E6A]">
                Three things wrong at setup
              </h3>
            </div>
            <div className="divide-y divide-gray-100">

              <div className="grid grid-cols-1 gap-4 px-7 py-6 sm:grid-cols-[auto_1fr]">
                <div className="shrink-0 rounded-lg bg-red-50 px-3 py-2 text-center self-start">
                  <div className="text-lg font-extrabold text-red-500">01</div>
                  <div className="text-xs text-red-400 leading-tight">Wrong<br/>number</div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">The phone number was wrong, calls dropped instantly</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    The phone number on the LSA profile was incorrect. Every call Google routed to that
                    number dropped immediately. Google Guaranteed leads, the highest-intent calls a
                    plumbing company can receive, were going to a line that disconnected on contact.
                    The owner assumed the campaign just wasn&rsquo;t working. The real answer was that
                    it was working fine; the calls just weren&rsquo;t landing anywhere.
                    Nobody at the SEO firm had ever called the number to verify it connected.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 px-7 py-6 sm:grid-cols-[auto_1fr]">
                <div className="shrink-0 rounded-lg bg-red-50 px-3 py-2 text-center self-start">
                  <div className="text-lg font-extrabold text-red-500">02</div>
                  <div className="text-xs text-red-400 leading-tight">Wrong<br/>area</div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">The service area was configured incorrectly</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    The geographic service area set in the LSA profile did not match where the company
                    actually operated. This affects which searches trigger the ad and how Google ranks
                    the profile in the Local Services pack. Leads outside the real service area are
                    harder to convert and harder to dispute. An incorrect service area also signals to
                    Google that the business serves areas it doesn&rsquo;t, which degrades match quality
                    over time.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 px-7 py-6 sm:grid-cols-[auto_1fr]">
                <div className="shrink-0 rounded-lg bg-red-50 px-3 py-2 text-center self-start">
                  <div className="text-lg font-extrabold text-red-500">03</div>
                  <div className="text-xs text-red-400 leading-tight">No lead<br/>management</div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">The owner had never been told lead management exists</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    Google Local Services Ads requires active lead management inside the LSA portal.
                    Every lead that comes in needs to be marked, booked, archived, or disputed. When
                    you dispute an invalid lead within 30 days, Google credits the charge. When you
                    consistently mark leads as booked, Google&rsquo;s algorithm improves your ranking.
                    The owner had no idea this portal existed, let alone that it needed weekly
                    attention. The SEO firm set up the account and moved on. Nobody explained
                    that managing the leads is a core part of making the campaign work.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="rounded-2xl bg-[#0D2318] px-8 py-7 mb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-[#3A9E6A] mb-3">The reputation doesn&rsquo;t run the account</p>
            <p className="text-base leading-relaxed text-[#C8EDD2]/80">
              The firm that set this up has a recognizable name. That name doesn&rsquo;t check whether
              the phone number works. It doesn&rsquo;t train the owner on the LSA portal. It gets
              the account live, moves to the next client, and sends a monthly report showing that the
              campaign is active. Active is not the same as working.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
              A five-minute call to verify the phone number would have caught this at setup.
              Thirty minutes of onboarding on lead management would have changed how the owner
              operated the account from day one. Neither happened.
            </p>
          </div>

          <div className="rounded-2xl border border-[#3A9E6A]/20 bg-white p-6 mb-8 flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C8EDD2]">
              <svg className="h-4 w-4 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1a1a1a]">Free LSA Management Guide</p>
              <p className="mt-1 text-sm text-gray-500">
                11 pages covering how to set up, manage, and dispute leads in your Google Local Services Ads account, the same process we use for every client.
              </p>
              <Link href="/lsa-guide" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors">
                Download the guide
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
            >
              Get Your Free Audit
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <p className="text-sm text-gray-500">48-hour turnaround. No pitch deck. Just your numbers.</p>
          </div>

        </div>
      </section>

      {/* Live audit video */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="section-overline mb-3">See the Work</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Live audit: Daddario Roofing
            </h2>
            <p className="mt-3 text-base text-gray-500 max-w-xl mx-auto">
              A full marketing audit walkthrough, GBP, Google Ads, LSA, website, and tracking,
              the same process run for every new client.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/XwTojj72fNA?rel=0&modestbranding=1"
              title="Live Marketing Audit: Daddario Roofing"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#1A5C3A] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-2xl font-extrabold text-white sm:text-3xl">
            Want results like these for your company?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
            Every engagement starts with understanding your numbers. Let&rsquo;s find where
            your marketing is leaking revenue.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
