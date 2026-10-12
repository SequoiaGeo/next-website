import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import InlineLeadForm from "@/components/InlineLeadForm";

const url = "https://www.sequoiageo.com/auto-detailing-marketing";

export const metadata: Metadata = {
  title: "Auto Detailing Marketing for Premium Shops | Sequoia GEO",
  description: "Marketing and SEO for established detailing and protection shops serving high-end vehicles. Coatings, PPF, correction, tinting and appointment measurement.",
  alternates: { canonical: url },
  openGraph: {
    title: "Auto Detailing Marketing for Premium Shops | Sequoia GEO",
    description: "A marketing plan built around the services your shop wants to book.",
    url,
    type: "website",
  },
};

const services = [
  ["Ceramic coatings", "What preparation is included, which product is used, and how should I care for it?", "Explain preparation, coating options, approved product claims and aftercare before asking for an estimate."],
  ["Paint correction", "Can you improve this paint, and how much correction does it need?", "Show representative work with permission, explain assessment and correction levels, and avoid promising every defect can be removed."],
  ["Paint protection film", "Which panels need protection, and how does PPF differ from a coating?", "Make coverage options, film versus coating, and the estimate process understandable."],
  ["Window tinting", "Which film fits my vehicle and what are the options?", "Explain available film options and what the shop needs to quote. Verify local requirements before publishing legal claims."],
  ["Detailing", "What is included, and how do vehicle condition and size affect the quote?", "Separate maintenance details from deeper interior and exterior work so inquiries arrive with useful context."],
];

const faqs = [
  ["Do you have experience marketing auto-detailing shops?", "Yes. Our experience includes work with an established automotive detailing and protection shop: dedicated paint protection film and ceramic-coating pages, a paid-search relaunch, and call and form measurement repairs. We keep the client anonymous here and distinguish completed work from measured business outcomes."],
  ["Should my shop start with SEO or Google Ads?", "Start with the constraint. If the service information or estimate path is unclear, fix that first. If the shop has capacity and paid demand fits the budget, a scoped search campaign may be appropriate. Local SEO and paid search are measured separately; neither is a guaranteed source of appointments."],
  ["Can you help with ceramic-coating and PPF marketing?", "Yes. We develop distinct service explanations and inquiry paths for coatings, PPF, correction, tinting and detailing. The priority is the services your shop can deliver and wants to sell, using accurate scope and approved manufacturer claims."],
  ["Will AI search recommend my detailing business?", "No provider can guarantee that. We improve the accuracy, crawlability and usefulness of your public information, then observe relevant AI answers. Mentions and citations are reported separately from identifiable referrals, inquiries and appointments."],
  ["Do you work only with Fresno shops?", "Sequoia GEO is based in Sanger and works with businesses nationwide. Fresno and Clovis shop owners can discuss a local meeting; other engagements can be handled remotely."],
  ["What does an engagement cost?", "Our Search Foundation engagement starts at $4,500 per month with an initial three-month term, then continues month to month. Advertising spend is separate. Website projects have separate scopes and fees. We agree on responsibilities and deliverables before work begins; review our current services and pricing for the full terms."],
  ["Is this suitable for a new solo mobile detailer?", "This ongoing engagement is intended for established shops with a team, a dedicated facility, appointment capacity and budget for sustained marketing. A new solo operator looking for a low-cost starter package is unlikely to be a fit. Selling a premium service alone does not establish that a shop is ready for this engagement."],
];

export default function AutoDetailingMarketingPage() {
  return (
    <main>
      <ServiceJsonLd serviceType="Auto detailing marketing and SEO" description="Local SEO, service-page improvements, paid-search planning and inquiry measurement for automotive detailing and protection shops." url={url} />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.sequoiageo.com/" }, { name: "Auto Detailing Marketing", url }]} />

      <section className="bg-[#0D2318] px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="text-base font-semibold text-[#C8EDD2]">For established premium detailing and protection shops</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">Auto detailing marketing for the work you want to book.</h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#C8EDD2]">For shops serving luxury, performance and enthusiast vehicles. Build your marketing around the right inquiries for coatings, paint correction, tinting, PPF and detailing, with a team and facility ready to deliver the work.</p>
            <p className="mt-5 leading-relaxed text-[#C8EDD2]">Ongoing Search Foundation engagements start at <strong className="text-white">$4,500 per month</strong>, with a three-month initial term. Advertising spend is separate.</p>
            <Link href="/contact#book" className="btn btn-white mt-8">Talk through your shop&apos;s marketing</Link>
          </div>
          <div className="text-white">
            <Image src="/images/auto-detailing/red-ferrari.webp" alt="Red Ferrari parked on a city street" width={1800} height={1202} priority sizes="(min-width: 1024px) 460px, 100vw" className="mb-7 h-auto w-full" />
            <h2 className="text-2xl font-semibold">Experience with an established shop.</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#C8EDD2]">Our work in automotive detailing and protection includes rebuilding service pages, relaunching paid search, and repairing call and form measurement.</p>
            <p className="mt-4 leading-relaxed text-[#C8EDD2]">You work directly with Aaron Husak, a former home-service owner and operator, on priorities, scope and reporting.</p>
            <Link href="/about-sequoia-geo" className="mt-5 inline-block font-semibold text-white underline underline-offset-4">Meet Aaron</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <h2 className="text-3xl font-bold tracking-tight text-[#0D2318] sm:text-4xl">A full calendar starts with deciding what belongs on it.</h2>
          <div className="space-y-5 text-lg leading-relaxed text-gray-700">
            <p>A maintenance detail, a multi-stage correction and a protection-film installation ask different things of your team. Car detailing marketing should reflect those differences rather than send every prospect through the same broad offer.</p>
            <p>We begin with the work you want, the vehicles and customers you serve, your service area, and the appointments you can fulfill. Then we review how customers find the shop, understand the service and request a quote. Your current tools and accounts remain part of that review.</p>
            <p>A high-end vehicle owner needs to understand how you assess paint condition, explain protection options and care for the vehicle. Accurate product information and approved examples of your work help that customer evaluate the shop before contacting you.</p>
            <p>The goal is a useful plan for your shop, with a baseline we can check. We do not treat website traffic, ad clicks or AI mentions as booked appointments.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0D2318]/15 bg-[#eef3ed] px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-[#0D2318]">Built for a shop ready to invest.</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">The fit is an established business with a dedicated facility, a team, premium service capabilities and room for qualified appointments. We confirm those conditions with you before recommending a program.</p>
          </div>
          <div className="text-lg leading-relaxed text-gray-700">
            <p>You should be ready to share inquiry and appointment records, assign someone to follow up on estimates, and support the agreed service fees and any separate advertising budget.</p>
            <p className="mt-4">This is not a starter marketing package for a new solo mobile operator. It is ongoing work for a shop that can fulfill the opportunities it pursues.</p>
            <Link href="/ai-seo-pricing" className="mt-5 inline-block font-semibold text-[#1A5C3A] underline underline-offset-4">Check the scope and fees before booking</Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#0D2318] sm:text-4xl">Make each service worth choosing.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">These are the questions service pages should help answer. They are planning examples, not customer quotations or claims about a particular shop.</p>
          <div className="mt-8 grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
            <Image src="/images/auto-detailing/black-lamborghini.webp" alt="Glossy black Lamborghini with reflections across its hood" width={1012} height={1800} sizes="(min-width: 768px) 380px, 100vw" className="mx-auto h-auto w-full max-w-sm" />
            <div>
              <h3 className="text-2xl font-semibold text-[#0D2318]">Speak to owners who care about the finish.</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">For customers entrusting a luxury or performance vehicle to your team, the details matter. Show how your shop assesses the paint, recommends the right service and explains the work before an appointment.</p>
            </div>
          </div>
          <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
            {services.map(([name, question, action]) => (
              <article key={name} className="grid gap-4 py-7 md:grid-cols-[190px_1fr_1fr]">
                <h3 className="text-xl font-semibold text-[#1A5C3A]">{name}</h3>
                <p className="text-lg leading-relaxed text-[#0D2318]">{question}</p>
                <p className="leading-relaxed text-gray-700">{action}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-[#0D2318] sm:text-4xl">Connect discovery to the appointment.</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <article>
            <h3 className="text-2xl font-semibold text-[#1A5C3A]">Local SEO and Google Business Profile</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">Review business details, services, service coverage, reviews and approved work photos. Auto detailing SEO should help customers find accurate information, with website pages that match what the shop actually offers.</p>
          </article>
          <article>
            <h3 className="text-2xl font-semibold text-[#1A5C3A]">Service pages and estimate paths</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">Explain packages and quote factors without inventing prices or warranties. Make phone and form paths usable on mobile, and verify submission delivery before relying on form counts.</p>
          </article>
          <article>
            <h3 className="text-2xl font-semibold text-[#1A5C3A]">Paid search with a defined scope</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">If Google Ads fits the plan, agree on services, geography, budget and landing pages first. Review actual search terms and inquiry quality. A repair request, a product shopper and a coating estimate are different outcomes.</p>
          </article>
          <article>
            <h3 className="text-2xl font-semibold text-[#1A5C3A]">AI-search visibility with context</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">Observe the questions a customer might ask about local shops and protection options. Improve verifiable service information and evidence, while recording which answers mention or cite the business. Inclusion remains outside our control.</p>
          </article>
        </div>
      </section>

      <section className="bg-[#0D2318] px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-semibold text-[#C8EDD2]">What our detailing experience taught us</p>
            <h2 className="mt-4 text-3xl font-bold">Verify the booking path before counting the result.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#C8EDD2]">In work with an established detailing and protection shop, we rebuilt dedicated PPF and ceramic-coating pages, relaunched paid search and repaired call and form measurement. We also reviewed how approved product and installer information was presented.</p>
            <p className="mt-4 text-lg leading-relaxed text-[#C8EDD2]">That experience informs our process. It is not a claim of a guaranteed lead increase, appointment increase or search ranking.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Your report should keep these separate:</h3>
            <ul className="mt-5 space-y-4 text-lg leading-relaxed text-[#C8EDD2]">
              <li>Visibility: search impressions, visits and observed AI answers.</li>
              <li>Inquiries: received calls and successfully delivered forms.</li>
              <li>Qualified opportunities: people seeking services your shop provides.</li>
              <li>Appointments: bookings confirmed in your records.</li>
            </ul>
            <p className="mt-5 leading-relaxed text-[#C8EDD2]">Repeat calls, spam, platform events and actual customers do not belong in one total.</p>
            <Link href="/ai-search-methodology" className="mt-5 inline-block font-semibold underline underline-offset-4">How we measure AI search</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-3xl font-bold text-[#0D2318]">Plan before adding another channel.</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">For Fresno and Clovis shops planning for 2027, start with what you want to book and what the current marketing establishes. We also work remotely with shops nationwide.</p>
          </div>
          <ol className="space-y-6 text-lg leading-relaxed text-gray-700">
            <li><strong className="text-[#0D2318]">1. Establish the baseline.</strong> Review services, accounts, website, inquiry records and appointment capacity.</li>
            <li><strong className="text-[#0D2318]">2. Agree on priorities.</strong> Define the first changes, responsibilities, service fees and any separate advertising budget.</li>
            <li><strong className="text-[#0D2318]">3. Verify and report.</strong> Check completed work, monitor the agreed measures and identify what still needs attention.</li>
          </ol>
        </div>
        <div className="mt-10 flex flex-wrap gap-5">
          <Link href="/contact#book" className="btn btn-dark">Choose a time with Aaron</Link>
          <Link href="/ai-seo-pricing" className="btn btn-secondary">Review services and pricing</Link>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0D2318]">Auto detailing marketing questions</h2>
          <div className="mt-8 divide-y divide-gray-200">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="cursor-pointer text-xl font-semibold text-[#0D2318]">{question}</summary>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <InlineLeadForm source="auto_detailing_marketing_page" heading="Discuss your established shop" subtext="Search Foundation starts at $4,500 per month with a three-month initial term; advertising spend is separate. Share your shop name and contact details to discuss fit, services and capacity." buttonText="Request a conversation" collectCompany companyLabel="Shop name" companyPlaceholder="Your detailing or protection shop" />
    </main>
  );
}
