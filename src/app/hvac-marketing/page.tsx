import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "./city-data";

export const metadata: Metadata = {
  title: "HVAC Marketing by City | Sequoia GEO",
  description:
    "Sequoia GEO provides HVAC and home services marketing for contractors across the US. Browse city-specific resources for Google Ads, LSA, and local SEO in your market.",
  alternates: {
    canonical: "https://www.sequoiageo.com/hvac-marketing",
  },
};

export default function HvacMarketingIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="section-overline mb-4">Markets We Serve</p>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            HVAC Marketing for{" "}
            <span className="text-[#3A9E6A]">Mid-Size U.S. Markets</span>
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80 max-w-2xl mx-auto">
            We focus on cities between 150,000 and 850,000 people: large enough to support real contractor revenue growth, small enough that national agencies have not saturated the market. These are the markets where local SEO authority and targeted paid media still win.
          </p>
        </div>
      </section>

      {/* City grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-[#1a1a1a] mb-8">Cities with Market-Specific Resources</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/hvac-marketing/${city.slug}`}
                className="group flex flex-col rounded-xl border border-gray-200 bg-[#fafaf8] p-5 hover:border-[#3A9E6A]/40 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-bold text-[#1a1a1a] group-hover:text-[#1A5C3A] transition">{city.city}</p>
                    <p className="text-xs text-gray-400">{city.state}</p>
                  </div>
                  <svg className="h-4 w-4 text-gray-300 group-hover:text-[#3A9E6A] transition" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{city.climate}</p>
                {city.existingClient && (
                  <span className="mt-3 self-start rounded-full bg-[#C8EDD2] px-2 py-0.5 text-xs font-semibold text-[#0D2318]">
                    Active market
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why mid-size markets */}
      <section className="bg-[#fafaf8] py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-[#1a1a1a] mb-6">Why We Focus on These Markets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: "Less agency saturation", desc: "National agencies pour budget into Dallas, Phoenix, and Chicago. Fresno, Spokane, and Wichita are underserved. Local SEO authority is still buildable." },
              { title: "High HVAC demand", desc: "We prioritize markets with extreme climates. Hot summers or cold winters (or both) mean HVAC is not optional. These markets generate the service call volume that supports contractor growth." },
              { title: "Real homeowner base", desc: "Mid-size cities have stable homeownership rates and housing stock old enough to generate consistent replacement demand rather than only new install work." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white border border-gray-200 p-5">
                <h3 className="font-bold text-[#1a1a1a] mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVAC Marketing Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-4">
            HVAC Marketing Services for Growing Contractors
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-10 max-w-3xl">
            Effective HVAC marketing combines multiple digital marketing channels into one
            integrated strategy that produces booked calls. HVAC companies that rely on a single
            marketing channel leave revenue on the table. The right HVAC marketing agency builds
            a coordinated approach across search, paid media, social media, email marketing, and
            reputation management, tailored to how HVAC businesses actually grow in each local
            market. HVAC marketing services work best when every channel reinforces the others
            rather than operating in isolation. The HVAC industry requires a different approach
            than most industries because HVAC services are need-driven, seasonal, and local
            by nature, making channel coordination critical to consistent HVAC lead flow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Local SEO",
                body: "Local SEO puts HVAC companies at the top of search engine results when homeowners search for HVAC services in their area. HVAC digital marketing built around local SEO and search engine optimization drives more qualified HVAC leads than almost any other digital marketing channel for HVAC contractors and HVAC businesses in mid-size markets. Search engines reward HVAC services companies that build consistent local authority over time.",
              },
              {
                title: "Google Ads and SEO PPC",
                body: "SEO PPC strategies give HVAC companies the strongest position across paid and organic search results simultaneously. Google Ads campaigns and Google Local Services Ads generate immediate HVAC leads while the organic strategy builds. PPC advertising requires consistent PPC management to control marketing spend and keep marketing dollars working efficiently. SEO PPC is how HVAC businesses capture both immediate demand and long-term search volume.",
              },
              {
                title: "Social Media Marketing",
                body: "Social media marketing reaches homeowners on platforms they use daily outside of search. Social media advertising and social media management help HVAC companies build brand recognition across Facebook, Instagram, and Nextdoor. Social media marketing campaigns support existing customers and generate neighbor referrals that traditional advertising approaches cannot reach as effectively. Social media is an increasingly important channel in HVAC marketing strategy.",
              },
              {
                title: "Email Marketing",
                body: "Email marketing produces some of the highest returns of any digital marketing channel available to HVAC contractors. Regular email marketing campaigns keep HVAC clients engaged between service calls, generate maintenance agreement renewals, and drive repeat bookings. Content marketing delivered through email supports lead generation and reinforces HVAC marketing strategy for each customer segment.",
              },
              {
                title: "Content Marketing and HVAC Website",
                body: "An optimized HVAC website paired with content marketing establishes authority with both search engines and homeowners. Content marketing across service pages, city-specific landing pages, and FAQ sections supports HVAC digital marketing services and drives organic lead generation. Digital marketing investment in content marketing compounds over time in ways that paid HVAC advertising campaigns cannot replicate.",
              },
              {
                title: "Reputation and Local Listings",
                body: "Online reviews and Google Business Profile management are foundational to any effective HVAC marketing program. Google Local Services Ads reward HVAC companies with strong reputation signals. Reputation management and consistent accumulation of online reviews across Google Local Services and review platforms support every other channel in the HVAC marketing strategy. Brand strategy built on trust translates directly into booked calls.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-[#fafaf8] p-6">
                <h3 className="font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choosing an HVAC Marketing Agency */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white mb-10">
            What HVAC Companies Need from a Marketing Agency
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5 text-[#C8EDD2]/80 text-base leading-relaxed">
              <p>
                The best HVAC marketing agencies focus on home service companies rather than
                dividing attention across unrelated industries. Most traditional marketing
                agencies apply the same digital marketing approach to HVAC companies that they
                use for retail or professional services. HVAC marketing works differently because
                the buying cycle is need-driven, not interest-driven. Homeowners do not browse
                HVAC companies for fun. They search when something breaks or when seasonal demand
                spikes. HVAC marketing strategy must account for this urgency at every stage.
              </p>
              <p>
                A specialized HVAC marketing agency develops city-specific HVAC digital marketing
                plans covering which digital marketing channels produce booked calls in your specific
                market, what HVAC marketing spend makes sense for your revenue stage, and which
                HVAC digital marketing tactics position your HVAC business ahead of local HVAC contractors.
                Marketing agencies in 2026 without HVAC industry depth often prioritize activity
                over revenue outcomes. The right marketing company connects each HVAC digital marketing
                investment directly to booked jobs rather than clicks and impressions. Your HVAC marketing
                partner should function as an extension of your business, not just a vendor
                delivering reports.
              </p>
              <p>
                HVAC companies evaluating the best HVAC marketing agencies should request case
                studies from HVAC contractors in comparable markets rather than general digital
                marketing results. Customized marketing strategies built around your HVAC business
                model outperform templated HVAC marketing packages. Marketing services designed
                specifically for HVAC companies and HVAC contractors deliver better outcomes than
                generic digital marketing services applied without HVAC industry knowledge.
                Traditional marketing approaches built for other industries rarely translate to the
                seasonal, geography-dependent nature of HVAC business marketing.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: "HVAC industry specialization", desc: "HVAC marketing agencies that focus exclusively on HVAC businesses and home service companies understand seasonal demand patterns, service territory limits, and how HVAC marketing strategies differ from general marketing approaches that work for other industries." },
                { title: "Transparent HVAC lead reporting", desc: "The best HVAC marketing agencies report on HVAC leads, booked calls, and cost per acquisition. Marketing services without clear attribution leave HVAC companies guessing which marketing campaigns and advertising campaigns are producing real revenue." },
                { title: "Market-specific HVAC marketing", desc: "Effective HVAC marketing adapts to local competition and local demand. The approach that attracts customers in a saturated major market differs from the HVAC digital marketing approach that builds authority in an underserved mid-size city." },
                { title: "Full-channel marketing services", desc: "Top HVAC marketing agencies combine SEO PPC, Google Ads, social media marketing, email marketing, content marketing, and reputation management into one coordinated HVAC marketing program that produces consistent lead flow for HVAC contractors and HVAC businesses." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-white/10 border border-white/10 p-5">
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-sm text-[#C8EDD2]/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HVAC Marketing FAQ */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-10">
            HVAC Marketing Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "What digital marketing channels generate the most HVAC leads?",
                a: "For most HVAC businesses, SEO PPC combinations produce the highest HVAC lead volume. Google Ads and Google Local Services Ads capture homeowners actively searching for HVAC services and HVAC contractors. Local SEO builds organic lead generation that compounds over time without ongoing ad spend. Social media marketing and email marketing support brand awareness and repeat customer engagement. The most effective HVAC marketing approach balances all of these channels based on your market, competition level, and marketing budget. HVAC companies that diversify across multiple digital marketing channels and HVAC digital marketing tactics outperform those that depend on a single source of HVAC leads.",
              },
              {
                q: "How much should HVAC companies spend on marketing?",
                a: "Most HVAC companies allocate 8 to 12 percent of revenue to marketing. Marketing dollars should be distributed across digital marketing services channels based on what produces booked calls in your specific market. HVAC businesses in highly competitive cities often need higher digital marketing investment in SEO PPC and Google Ads to gain visibility. Marketing spend on digital channels consistently outperforms traditional advertising like radio advertising and direct mail for HVAC contractors because digital marketing results are trackable and adjustable in real time. A focused marketing company helps HVAC businesses build marketing strategies that scale with revenue. The best HVAC marketing programs run coordinated marketing campaigns across all digital channels so that each season is covered by the right mix of paid and organic activity.",
              },
              {
                q: "What does an HVAC marketing agency do for contractors?",
                a: "An HVAC marketing agency manages the complete HVAC digital marketing strategy for HVAC companies and HVAC contractors across all channels. HVAC marketing services typically include HVAC website optimization, local SEO, Google Ads management, social media management, email marketing, content marketing, and reputation management for HVAC services businesses. The best HVAC marketing agency functions as an internet marketing agency specialized in the HVAC industry rather than a general marketing company applying the same approach across unrelated industries. Marketing services built specifically for HVAC contractors and HVAC services companies produce better outcomes than broad digital marketing services not tuned to HVAC industry demand patterns.",
              },
              {
                q: "What are the most common HVAC marketing challenges?",
                a: "Common HVAC marketing challenges include seasonal demand swings that make consistent lead generation difficult, competition from HVAC companies with larger digital marketing budgets, poor tracking that makes it impossible to identify which marketing campaigns and advertising campaigns are producing revenue, and over-dependence on a single digital marketing channel. The HVAC industry has steeper seasonality swings than most industries, making diversification critical. HVAC businesses and HVAC contractors that build HVAC digital marketing programs across SEO, SEO PPC, social media marketing, content marketing, and email marketing develop more resilient approaches that hold up across slow and peak seasons. Traditional marketing alone cannot address these HVAC marketing challenges.",
              },
              {
                q: "Is SEO or PPC better for HVAC companies?",
                a: "SEO PPC is not a choice between channels but a combination of HVAC digital marketing approaches working together. HVAC businesses that run Google Ads for immediate HVAC leads while building local SEO for long-term organic visibility consistently outperform HVAC companies that use only one channel. SEO PPC programs allow HVAC marketing budgets to flex by season. During peak demand periods, HVAC advertising spend can increase on paid channels. During slower periods, organic search engine traffic from content marketing and local SEO continues generating HVAC leads for contractors without additional marketing spend. The best HVAC marketing agencies and best HVAC marketing programs run both in parallel rather than forcing HVAC businesses to choose one channel.",
              },
              {
                q: "How do HVAC companies attract new customers through digital marketing?",
                a: "HVAC companies attract customers through coordinated HVAC digital marketing channels working together. Search engine optimization puts HVAC companies at the top of results when homeowners need HVAC services. Google Ads and PPC advertising generate immediate visibility for HVAC services searches. Social media marketing builds brand awareness and social proof. Email marketing campaigns engage existing customers to generate referrals and repeat service bookings. Google Business Profile management drives Google Local Services leads. Reputation management and online reviews build trust that converts searchers into callers. Effective HVAC marketing for home service companies combines all of these channels and marketing services into a coordinated HVAC marketing program built around what produces booked calls for HVAC services businesses in your specific city.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                <h3 className="font-bold text-[#1a1a1a] mb-3">{item.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A5C3A] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-2xl font-extrabold text-white">
            Your city not listed?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
            We work with contractors across the US. Book a free audit call and we will tell you honestly what the marketing opportunity looks like in your market.
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
    </>
  );
}
