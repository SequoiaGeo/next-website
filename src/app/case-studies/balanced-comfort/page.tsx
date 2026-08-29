import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balanced Comfort Founder Story | Sequoia GEO",
  description:
    "The operating experience Aaron Husak built over 13 years at Balanced Comfort, including four Inc 5000 appearances, more than 4,000 five-star reviews reported on the company site, and a 2024 Great Place to Work profile.",
  alternates: {
    canonical: "https://www.sequoiageo.com/case-studies/balanced-comfort",
  },
};

const stats = [
  { value: "13 years", label: "Owner and operator" },
  { value: "4,000+", label: "5-star reviews reported" },
  { value: "4x", label: "Inc 5000 (2021 to 2024)" },
  { value: "2024", label: "Great Place to Work profile" },
];

const strategies = [
  {
    title: "Local SEO",
    description:
      "Search visibility, service pages, local content, and business listings were treated as parts of one operating system rather than isolated marketing tasks.",
  },
  {
    title: "Reputation at scale",
    description:
      "On August 29, 2026, Balanced Comfort's website reported more than 4,000 five-star reviews. That reputation belongs to the company and team, and is presented here as founder operating history.",
  },
  {
    title: "Conversion-focused web presence",
    description:
      "Website decisions were evaluated against the customer journey, including mobile use, calls to action, trust signals, and the handoff from a visit to a phone call or booking path.",
  },
  {
    title: "Paid advertising with operating context",
    description:
      "Google Ads, Local Service Ads, and Facebook campaigns were reviewed alongside calls, booked work, operating capacity, and customer experience rather than judged by clicks alone.",
  },
  {
    title: "Google Business Profile",
    description:
      "Business information, reviews, photos, and service details were managed as customer-facing operating information, not only as a search listing.",
  },
];

export default function BalancedComfortCaseStudy() {
  return (
    <>
      {/* Nav strip */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
          >
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
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-overline mb-4">Founder&rsquo;s Story</p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Balanced Comfort Heating &amp; Air
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              Thirteen years of building and operating a multi-service home services company,
              including four Inc 5000 appearances and a 2024 Great Place to Work profile.
              This is founder operating history, not a Sequoia GEO client result.
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <div className="text-2xl font-extrabold text-[#3A9E6A]">{item.value}</div>
                <div className="mt-1 text-xs text-[#C8EDD2]/70 leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 - The Origin */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Founded on energy efficiency
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Aaron Husak founded Balanced Comfort in 2012 around residential energy efficiency
                work in Fresno. The company later expanded into additional technical and home
                service lines as programs and market conditions changed.
              </p>
              <p>
                When that program funding ended, Balanced Comfort pivoted into energy code
                calculations, mechanical engineering design, and fire protection design for an
                entirely different customer base. Two businesses in the same decade, before HVAC
                ever entered the picture.
              </p>
              <p>
                That history matters because the business had to adapt its offer, team, customer
                experience, and marketing more than once. The lessons came from operating through
                those changes, not from reviewing a dashboard after the fact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - The Pivot */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              From energy efficiency to multi-service home services
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                In 2020, a disruption to weatherization work forced Balanced Comfort to reconsider
                how it reached and served homeowners.
              </p>
              <p>
                Balanced Comfort pivoted to HVAC instead.
              </p>
              <p>
                The company expanded into heating and air conditioning across the Central Valley,
                then added plumbing and restoration services over the following years.
              </p>
              <p>
                The practical lesson was that marketing could not be separated from the phones,
                capacity, dispatch, customer experience, reputation, and follow-up. Each part
                affected whether demand became work the company could actually serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - The Marketing Engine */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl mb-14">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              The marketing and operating system behind the company
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Balanced Comfort was not built through one channel or one campaign. Marketing,
              customer experience, reputation, hiring, dispatch, and measurement had to work as
              one operating system.
            </p>
          </div>
          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strategies.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7 shadow-sm"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8EDD2]">
                  <span className="h-4 w-4 rounded-full bg-[#3A9E6A]" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-[#0D2318]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - The Operating Record */}
      <section className="bg-[#1a1a1a] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="section-overline mb-4">The operating record</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Experience built inside a service business
            </h2>
          </div>
          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl font-extrabold text-[#3A9E6A]">13 years</div>
              <div className="mt-3 text-base font-semibold text-white">Owner and Operator</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Building teams and systems across energy efficiency, HVAC, plumbing, and restoration.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl font-extrabold text-[#3A9E6A]">4,000+</div>
              <div className="mt-3 text-base font-semibold text-white">5-Star Reviews</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Reported on Balanced Comfort&rsquo;s current public website. This is company reputation,
                not a result credited to Sequoia GEO.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl font-extrabold text-[#3A9E6A]">4x</div>
              <div className="mt-3 text-base font-semibold text-white">Inc 5000</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Named to the Inc 5000 list of fastest-growing private companies four consecutive
                years: 2021, 2022, 2023, and 2024.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl font-extrabold text-[#3A9E6A]">2024</div>
              <div className="mt-3 text-base font-semibold text-white">Great Place to Work</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                The official company profile records its Great Place to Work certification and
                employee survey result in April 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Why It Matters */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Your marketing agency should know what it&rsquo;s like to run a service business.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Sequoia GEO was built by someone who ran a service company for over a decade.
                Sequoia&rsquo;s approach is informed by the operating questions a dashboard cannot
                answer on its own: Was the phone answered? Was the lead qualified? Was the job booked?
              </p>
              <p>
                Balanced Comfort is evidence of Aaron&rsquo;s operating experience. Client results are
                reported separately under the{" "}
                <Link href="/proof-system" className="font-bold text-[#1A5C3A] underline underline-offset-4">
                  Sequoia Proof System
                </Link>{" "}
                and only to the level the client records support.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-10 border-l-4 border-[#3A9E6A] pl-6">
              <p className="text-xl font-medium italic leading-relaxed text-[#1a1a1a]">
                &ldquo;Running a service company taught me to ask what happened after the lead, because
                a dashboard cannot tell you whether the phone was answered or the job was booked.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-[#1A5C3A]">
                Aaron Husak, Founder, Sequoia GEO
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="section-overline mb-4">Evidence note</p>
          <h2 className="font-serif text-2xl font-extrabold text-[#1a1a1a]">
            What supports this founder history
          </h2>
          <ul className="mt-6 space-y-4 leading-relaxed text-gray-600">
            <li>
              Aaron&rsquo;s 13-year tenure and the company&rsquo;s service history are founder-attested and
              were reconfirmed for Sequoia&rsquo;s operating record on August 21, 2026.
            </li>
            <li>
              <a href="https://www.inc.com/profile/balanced-comfort" className="font-bold text-[#1A5C3A] underline underline-offset-4">
                Inc.&rsquo;s official company profile
              </a>{" "}
              lists Balanced Comfort in 2021, 2022, 2023, and 2024.
            </li>
            <li>
              <a href="https://www.greatplacetowork.com/en/certified-company/7046556" className="font-bold text-[#1A5C3A] underline underline-offset-4">
                Great Place to Work&rsquo;s official company profile
              </a>{" "}
              records the certification page updated in April 2024.
            </li>
            <li>
              <a href="https://balancedcomfort.com/" className="font-bold text-[#1A5C3A] underline underline-offset-4">
                Balanced Comfort&rsquo;s current website
              </a>{" "}
              reports more than 4,000 five-star reviews. That is an inherited company strength,
              not a Sequoia GEO client outcome.
            </li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-gray-500">
            Public sources checked August 29, 2026. This page describes founder operating history.
            It does not claim that any single marketing action caused the company&rsquo;s growth.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-extrabold text-white">
            Ready to apply operator-led marketing discipline to your business?
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
