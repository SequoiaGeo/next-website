import Link from "next/link";
import type { Metadata } from "next";
import InlineLeadForm from "@/components/InlineLeadForm";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Free Marketing Scorecard for Home Services | Sequoia GEO",
  description:
    "Request a hand-reviewed public marketing scorecard covering positioning, website conversion, SEO, content, local identity, reputation, and distribution.",
  alternates: { canonical: "https://www.sequoiageo.com/audit" },
};

const dimensions = [
  {
    title: "Positioning and offer",
    body: "Can a prospective customer understand who the business serves, what problem it solves, and why it is credible?",
  },
  {
    title: "Website experience and conversion",
    body: "Does the site give a visitor a clear service path, usable contact options, and enough trust to take the next step?",
  },
  {
    title: "Technical SEO",
    body: "Can search engines crawl, render, index, and connect the pages that are supposed to represent the business?",
  },
  {
    title: "On-page SEO",
    body: "Do the primary pages answer a specific search need without competing against another page on the same site?",
  },
  {
    title: "Content authority",
    body: "Does the site demonstrate first-hand knowledge, answer buyer questions, and support important claims with evidence?",
  },
  {
    title: "Entity and local consistency",
    body: "Do the website, business profiles, official records, addresses, phones, services, and service areas describe the same company?",
  },
  {
    title: "Reputation footprint",
    body: "What can a buyer verify from reviews, responses, partner pages, associations, and other independent sources?",
  },
  {
    title: "Social and distribution",
    body: "Is useful work being distributed through the channels the intended audience already uses, with a path back to the business?",
  },
];

const deliverables = [
  {
    title: "Eight-dimension scorecard",
    body: "Each area receives a score, assessment, evidence source, and confidence level so the result can be checked.",
  },
  {
    title: "Prioritized findings",
    body: "The report identifies the five corrections that deserve attention first instead of producing an unranked list of observations.",
  },
  {
    title: "Access decision",
    body: "If a public finding requires account-level verification, the report identifies the exact system and evidence needed next.",
  },
];

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "Marketing Scorecard", url: "https://www.sequoiageo.com/audit" },
        ]}
      />

      <section id="audit-form" className="scroll-mt-20 bg-[#0D2318] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <div>
            <p className="section-overline mb-4 text-[#3A9E6A]">Free Marketing Scorecard</p>
            <h1 className="font-serif text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
              See what your public marketing says before sharing account access.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#C8EDD2]/80">
              Sequoia reviews the website, search presence, public profiles, reputation, positioning,
              and conversion path that a prospective customer can see. Every finding includes its
              source and confidence so you can decide what deserves deeper verification.
            </p>
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-[#C8EDD2]/75">
              <li><strong className="text-white">Public first:</strong> no advertising, CRM, or analytics access is needed to begin.</li>
              <li><strong className="text-white">Hand reviewed:</strong> the scorecard is not generated from one automated scan.</li>
              <li><strong className="text-white">Operator led:</strong> you work with me, not an account manager.</li>
            </ul>
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="font-bold text-white">Looking specifically at ChatGPT, Gemini, or Google AI?</p>
              <p className="mt-2 text-sm leading-relaxed text-[#C8EDD2]/70">
                The AI Search Assessment examines recommendation questions, citations, retrieval,
                public contradictions, and how AI visibility is measured.
              </p>
              <Link href="/ai-search-assessment" className="mt-3 inline-flex font-semibold text-[#C8EDD2] underline underline-offset-4">
                Request the AI Search Assessment
              </Link>
            </div>
          </div>

          <div className="[&>section]:bg-transparent [&>section]:py-0 [&>section>div]:max-w-none [&>section>div]:px-0">
            <InlineLeadForm
              source="audit_page"
              heading="Request your marketing scorecard"
              subtext="Tell me which business to review. I examine the public surface personally before requesting access to anything else."
              buttonText="Request My Marketing Scorecard"
              collectCompany
              companyLabel="Business name"
              companyPlaceholder="Your business"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-overline mb-4">Public-Surface Review</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">
              Eight dimensions customers can encounter before they contact you
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              The first review establishes what is visible. It does not claim to know booked jobs,
              sales outcomes, account settings, or internal call handling before the supporting
              systems and records are available.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {dimensions.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <div className="flex gap-4">
                  <span className="font-black text-[#1A5C3A]">0{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-bold text-[#0D2318]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <p className="section-overline mb-4">What Comes Back</p>
            <h2 className="text-3xl font-extrabold text-[#0D2318] sm:text-4xl">A decision document, not a dashboard screenshot</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {deliverables.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A5C3A] font-black text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#0D2318]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="section-overline mb-4 text-[#3A9E6A]">Evidence Boundary</p>
            <h2 className="text-3xl font-extrabold text-white">What the free review can establish</h2>
            <ul className="mt-7 space-y-3 text-sm leading-relaxed text-[#C8EDD2]/75">
              <li>What customers and search systems can currently reach</li>
              <li>Where public business facts agree or conflict</li>
              <li>Whether important pages and contact paths function visibly</li>
              <li>Which claims have independent support</li>
              <li>Which corrections can begin without account access</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="section-overline mb-4 text-[#3A9E6A]">What Requires More Evidence</p>
            <h2 className="text-2xl font-extrabold text-white">Account and operating conclusions</h2>
            <ul className="mt-7 space-y-3 text-sm leading-relaxed text-[#C8EDD2]/75">
              <li>Advertising configuration and spend efficiency</li>
              <li>CRM source records and lead qualification</li>
              <li>Call handling and appointment outcomes</li>
              <li>Analytics events and attribution joins</li>
              <li>Jobs booked or other verified operating outcomes</li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-[#C8EDD2]/60">
              If one of these systems matters, the scorecard identifies the access and record needed
              before Sequoia presents an account-level conclusion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#3A9E6A]/25 bg-[#C8EDD2]/30 p-8">
              <p className="section-overline mb-3">Good Fit</p>
              <h2 className="text-2xl font-extrabold text-[#0D2318]">You need one reliable starting point.</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#0D2318]/75">
                The scorecard is designed for an established service business that has active public
                marketing and wants to understand what is true before approving broader work.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-8">
              <p className="section-overline mb-3">Not The Same Offer</p>
              <h2 className="text-2xl font-extrabold text-[#0D2318]">AI Search has its own assessment.</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                If your primary question is why AI products do or do not mention, cite, or recommend
                the company, use the dedicated AI Search path so the review begins with the right evidence.
              </p>
              <Link href="/ai-search-assessment" className="mt-5 inline-flex font-semibold text-[#1A5C3A] underline underline-offset-4">
                Go to the AI Search Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1A5C3A] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-extrabold text-white">Start with the public evidence.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#C8EDD2]/80">
            Request the scorecard. You will hear from me personally about the business, the public
            findings, and whether deeper verification is warranted.
          </p>
          <a href="#audit-form" className="mt-7 inline-flex rounded-lg bg-white px-7 py-3.5 font-semibold text-[#1A5C3A]">
            Request My Marketing Scorecard
          </a>
        </div>
      </section>
    </main>
  );
}
