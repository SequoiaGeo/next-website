import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "AI and Client Data Policy | Sequoia GEO",
  description:
    "How Sequoia GEO handles public information, account data, customer data, credentials, AI tools, human review, and client approvals.",
  alternates: { canonical: "https://www.sequoiageo.com/ai-and-client-data-policy" },
};

const rules = [
  {
    title: "Public information first",
    body: "An initial AI Search Snapshot uses public business information and does not require account credentials. Public facts can still be wrong, so conflicts remain labeled until an authoritative source resolves them.",
  },
  {
    title: "Credentials stay out of model prompts",
    body: "Passwords, API keys, private keys, access tokens, and recovery codes are not copied into prompts. Access is granted through the platform's normal permission system when an engagement requires it.",
  },
  {
    title: "Customer data is not public prompt material",
    body: "Personal lead and customer details are not placed into public AI chat tools. When analysis requires customer-level records, Sequoia limits the data to the approved purpose and uses de-identified summaries when that is sufficient.",
  },
  {
    title: "Human review remains required",
    body: "AI output is treated as a draft or research aid. A person reviews factual claims, client-facing content, recommendations, and proposed live changes before they are published or implemented.",
  },
  {
    title: "Named examples require approval",
    body: "A client or prospect is named in a case study, assessment example, testimonial, or public result only with permission. The published page states the evidence period and does not turn an observation into a guaranteed outcome. If that permission is withdrawn, Sequoia removes the named example from its current public pages and public knowledge catalog.",
  },
  {
    title: "Clients retain ownership",
    body: "Client accounts and client-provided data remain the client's. Sequoia uses approved access for the agreed scope and does not claim ownership of the client's advertising, analytics, CRM, website, or business records.",
  },
];

export default function AiAndClientDataPolicyPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          { name: "AI and Client Data Policy", url: "https://www.sequoiageo.com/ai-and-client-data-policy" },
        ]}
      />
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="section-overline mb-4">Published safeguards</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">AI and client data policy</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-[#C8EDD2]/80">
            The practical rules Sequoia GEO uses when AI tools, public research, client accounts,
            and customer information meet in the same engagement.
          </p>
          <p className="mt-6 text-sm text-[#C8EDD2]/60">Version 1.0. Published August 30, 2026.</p>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3A9E6A]/25 bg-[#C8EDD2]/20 p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold text-[#0D2318]">The short version</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Sequoia minimizes the data shared with an AI provider, keeps credentials out of prompts,
              avoids personal customer data in public AI tools, and requires human review before a
              recommendation becomes a client-facing claim or live change.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {rules.map((rule) => (
              <article key={rule.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h2 className="text-xl font-bold text-[#0D2318]">{rule.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{rule.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0D2318]">Third-party AI systems have their own terms</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-700">
            <p>
              Retention, training, residency, and deletion controls differ by provider, product, and
              account configuration. Sequoia does not promise zero retention or a deletion timeline
              unless the selected provider and configuration support that promise and it has been verified.
            </p>
            <p>
              If an engagement needs sensitive account or customer data, the required system, fields,
              access method, and purpose are agreed before that data is used. A public-surface review
              remains available when account access is not appropriate.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/ai-search-methodology" className="rounded-lg bg-[#1A5C3A] px-6 py-3 font-semibold text-white">Read the Measurement Method</Link>
            <Link href="/privacy-policy" className="rounded-lg border border-[#1A5C3A] px-6 py-3 font-semibold text-[#1A5C3A]">Read the Privacy Policy</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
