import Link from "next/link";
import GHLWidget from "@/components/GHLWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Sequoia GEO",
  description:
    "Real results from Sequoia GEO. See how contractors have grown revenue, improved booking rates, and fixed what their previous agencies missed.",
  alternates: {
    canonical: "https://www.sequoiageo.com/case-studies",
  },
};

const balancedComfortStats = [
  { value: "13 Years", label: "Building Balanced Comfort" },
  { value: "$10M+", label: "Revenue" },
  { value: "4,000+", label: "Reviews" },
  { value: "Acquired", label: "Dec 2024" },
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
                  From one truck to $10M+ annual revenue, 4,000+ Google reviews, and a
                  successful acquisition. This is the company Aaron Husak built before starting
                  Sequoia GEO. Every strategy he deploys for clients was tested here first.
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

            {/* Client results note */}
            <p className="mt-8 text-sm text-gray-400 text-center">
              Client case studies added as they&rsquo;re completed. Results are anonymized by
              default.
            </p>
          </div>
        </div>
      </section>

      {/* Audit case study — Midwest HVAC/Plumbing */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block rounded-full bg-[#C8EDD2] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#1A5C3A] mb-4">
              Audit Findings
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              $20K/Month. Three Agencies. 22 Booked Jobs.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-3xl">
              An established commercial HVAC contractor in the Midwest had spent 18 months
              trying to break into residential HVAC and plumbing. They couldn&rsquo;t keep one
              plumber busy. Three agencies were collecting checks and reporting green. Here&rsquo;s
              what the audit found in 48 hours.
            </p>
          </div>

          {/* Context strip */}
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: "Monthly marketing spend", value: "$20,000" },
              { label: "Agencies involved", value: "3 vendors" },
              { label: "Time struggling", value: "18 months" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-[#fafaf8] border border-gray-200 px-6 py-5 text-center">
                <div className="text-2xl font-extrabold text-[#0D2318]">{item.value}</div>
                <div className="mt-1 text-xs text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Findings */}
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-[#0D2318] px-7 py-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#3A9E6A]">
                What the audit found
              </h3>
            </div>

            <div className="divide-y divide-gray-100">

              {/* Finding 1 */}
              <div className="grid grid-cols-1 gap-4 px-7 py-6 sm:grid-cols-[auto_1fr]">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-red-50 px-3 py-2 text-center">
                    <div className="text-lg font-extrabold text-red-500">16,962</div>
                    <div className="text-xs text-red-400 leading-tight">reported<br/>conversions</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">Google Ads: 22 actual booked jobs</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    The Google Ads agency reported 16,962 conversions. Reality: 22 booked jobs. Three of five
                    conversion goals were misconfigured — page views and scroll events were counting as
                    conversions. Every report showed green. The agency had no idea what a booked job actually
                    cost because they were never connected to dispatch data. The client had no reason to
                    question it because the numbers looked good on paper.
                  </p>
                </div>
              </div>

              {/* Finding 2 */}
              <div className="grid grid-cols-1 gap-4 px-7 py-6 sm:grid-cols-[auto_1fr]">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-red-50 px-3 py-2 text-center">
                    <div className="text-lg font-extrabold text-red-500">$7,783</div>
                    <div className="text-xs text-red-400 leading-tight">per month<br/>to Angi</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">Angi producing less than $2,000 in booked revenue</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    The Angi rep was collecting $7,783 per month. The actual jobs booked from those leads
                    were producing less than $2,000 in revenue. Nobody had ever connected the Angi spend
                    to dispatch data to calculate the real cost per booked job. The agency managing ads
                    didn&rsquo;t look at Angi. The Angi rep wasn&rsquo;t going to flag it. The client
                    assumed that if leads were coming in, something was working.
                  </p>
                </div>
              </div>

              {/* Finding 3 */}
              <div className="grid grid-cols-1 gap-4 px-7 py-6 sm:grid-cols-[auto_1fr]">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-red-50 px-3 py-2 text-center">
                    <div className="text-lg font-extrabold text-red-500">265</div>
                    <div className="text-xs text-red-400 leading-tight">pages not<br/>indexed</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">SEO company billing monthly while Google couldn&rsquo;t see their site</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    265 pages — including their primary plumbing service pages — were not indexed by Google.
                    The SEO company was producing monthly deliverables and billing on schedule. Nobody had
                    checked Google Search Console to verify that the content they were creating was
                    actually visible in search results. The residential plumbing pages they needed to rank
                    were invisible. That&rsquo;s why one plumber couldn&rsquo;t stay busy: the demand
                    existed, but Google literally could not find the pages targeting it.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* The real problem */}
          <div className="mt-8 rounded-2xl bg-[#0D2318] px-8 py-7">
            <p className="text-sm font-bold uppercase tracking-widest text-[#3A9E6A] mb-3">The actual problem</p>
            <p className="text-base leading-relaxed text-[#C8EDD2]/80">
              This wasn&rsquo;t a channel problem. It was a visibility problem. Three vendors each owned a
              piece and optimized it in isolation. None of them had access to dispatch data. None of them
              knew what a booked plumbing job actually cost. The client was spending $20,000 per month
              and had no way to answer the only question that matters: which dollar of marketing spend is
              producing revenue?
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
              This is what a Full Picture Audit surfaces. Not a critique of the agencies — an honest
              accounting of what is working, what is wasting money, and what needs to be fixed before
              another dollar gets spent.
            </p>
          </div>

          {/* CTA inline */}
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
            >
              Get a Full Picture Audit
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <p className="text-sm text-gray-400">48-hour turnaround. No pitch deck. Just your numbers.</p>
          </div>

        </div>
      </section>

      {/* Case study — Franchise Google Ads URL */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="mb-12">
            <span className="inline-block rounded-full bg-[#C8EDD2] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#1A5C3A] mb-4">
              Audit Finding
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              The Franchise Recommended the Firm. The Firm Sent Customers to the Wrong State.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-3xl">
              A plumbing franchise location was running Google Ads through the marketing company
              the franchise recommended. One setting. One checkbox. Customers searching for a
              plumber in Oregon were landing on a page for a location in Texas.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-[#0D2318] px-7 py-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#3A9E6A]">
                What happened
              </h3>
            </div>
            <div className="divide-y divide-gray-100">

              <div className="px-7 py-6">
                <p className="text-sm font-semibold text-[#1a1a1a] mb-2">
                  &ldquo;Optimize final URL&rdquo; was enabled on a shared franchise domain
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  Google Ads has a setting that lets Google automatically choose the best landing page
                  URL on your domain for each search. For a standalone business, that&rsquo;s
                  occasionally useful. For a franchise with dozens of locations sharing one domain,
                  it&rsquo;s a disaster. Google looked across the entire franchise site and decided
                  that the Texas location&rsquo;s water heater repair page was more relevant than
                  the Oregon location&rsquo;s page. So the Oregon franchisee paid for the click.
                  The customer landed in Texas. Nobody booked. Nobody knew why.
                </p>
              </div>

              <div className="px-7 py-6">
                <p className="text-sm font-semibold text-[#1a1a1a] mb-2">
                  Clicks were leaving the service area entirely
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  Beyond the URL issue: geo-targeting was set loosely enough that clicks were coming
                  from outside the franchisee&rsquo;s actual service area. Searchers from adjacent
                  markets who Google thought were &ldquo;interested in&rdquo; the location were
                  triggering ads. A confused customer who lands on the wrong state&rsquo;s page
                  and can&rsquo;t figure out whether the company serves them does not call.
                  They go to the next result.
                </p>
              </div>

              <div className="px-7 py-6">
                <p className="text-sm font-semibold text-[#1a1a1a] mb-2">
                  The firm never checked where the clicks were actually going
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  This is a five-minute check in Google Ads. Pull the final URL report. Sort by
                  destination. See where traffic is landing. The firm managing the account had a
                  team and a process. The setting had been live since account launch. Nobody had
                  run that report. The franchisee had no reason to know the question existed, let
                  alone how to ask it.
                </p>
              </div>

            </div>
          </div>

          <div className="rounded-2xl bg-[#0D2318] px-8 py-7 mb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-[#3A9E6A] mb-3">Why this keeps happening</p>
            <p className="text-base leading-relaxed text-[#C8EDD2]/80">
              Franchise-recommended vendors have a conflict of interest. They serve the franchisor&rsquo;s
              relationship, not the individual franchisee&rsquo;s revenue. A big-name firm that manages
              accounts across hundreds of locations optimizes for efficiency at the portfolio level.
              The Oregon location is one line item. Nobody at that firm is asking why that specific
              location&rsquo;s leads aren&rsquo;t converting, because that&rsquo;s not the contract.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
              Catching it requires someone looking at your account specifically — not the template,
              not the franchise standard — and asking where the clicks are actually going.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
            >
              Get a Full Picture Audit
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <p className="text-sm text-gray-400">48-hour turnaround. No pitch deck. Just your numbers.</p>
          </div>

        </div>
      </section>

      {/* Case study — Appointment notes / hydrojet */}
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
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">What the note said</p>
              <blockquote className="border-l-2 border-[#3A9E6A] pl-5">
                <p className="text-base font-medium italic text-gray-700 leading-relaxed">
                  &ldquo;If the hydrojet doesn&rsquo;t work, there&rsquo;s no charge.&rdquo;
                </p>
                <footer className="mt-3 text-xs text-gray-400">Tech&rsquo;s appointment note &mdash; plumbing client</footer>
              </blockquote>
              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                That&rsquo;s not how pricing works. The tech made a verbal commitment on the truck
                that the business never approved. The job got done. The customer got a free service.
                The tech moved on. Nobody flagged it until we were reviewing notes that week.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">What it actually cost</p>
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
              you a leads report and call it a week. That&rsquo;s not a criticism — it&rsquo;s
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
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
            >
              Talk to someone who reads the notes
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <p className="text-sm text-gray-400">No pitch deck. A real conversation about your numbers.</p>
          </div>

        </div>
      </section>

      {/* Case study — LSA setup wrong by large SEO firm */}
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
                  <p className="text-sm font-semibold text-[#1a1a1a]">The phone number was wrong — calls dropped instantly</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    The phone number on the LSA profile was incorrect. Every call Google routed to that
                    number dropped immediately. Google Guaranteed leads — the highest-intent calls a
                    plumbing company can receive — were going to a line that disconnected on contact.
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
                    Every lead that comes in needs to be marked — booked, archived, or disputed. When
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
                11 pages covering how to set up, manage, and dispute leads in your Google Local Services Ads account — the same process we use for every client.
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
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318]"
            >
              Get a Full Picture Audit
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <p className="text-sm text-gray-400">48-hour turnaround. No pitch deck. Just your numbers.</p>
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
              A full marketing audit walkthrough — GBP, Google Ads, LSA, website, and tracking —
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
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]"
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
