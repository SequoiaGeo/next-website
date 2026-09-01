import Link from "next/link";

const evidence = [
  {
    label: "Named assessment example",
    title: "Hicks Paving AI Search readiness snapshot",
    body: "A permissioned, dated public-surface assessment showing the evidence conflicts found before implementation. It does not claim a change in AI recommendations or business results.",
    href: "/case-studies/ai-search-readiness",
  },
  {
    label: "Public measurement standard",
    title: "AI Search Measurement Methodology",
    body: "See how Sequoia separates citations, mentions, recommendations, referral visits, inquiries, qualified leads, and jobs booked.",
    href: "/ai-search-methodology",
  },
  {
    label: "Claim control",
    title: "Sequoia Proof System",
    body: "The rules used to establish a baseline, classify evidence, document corrections, verify implementation, and limit causal claims.",
    href: "/proof-system",
  },
  {
    label: "Data handling",
    title: "AI and Client Data Policy",
    body: "What Sequoia will and will not place into AI tools, how account data is handled, and where human review remains required.",
    href: "/ai-and-client-data-policy",
  },
] as const;

const corroboration = [
  {
    label: "Inc. 5000 issuer record",
    detail: "Balanced Comfort, 2021, 2022, 2023, and 2024",
    href: "https://www.inc.com/profile/balanced-comfort",
  },
  {
    label: "Media and trade writing",
    detail: "Podcast interviews and Contracting Business contributions",
    href: "/media",
  },
  {
    label: "Surfer Academy credential",
    detail: "AI Search training, not evidence of client outcomes",
    href: "https://credsverse.com/credentials/bb8823fd-8d81-4d93-99fc-14d6f4b668cf?preview=2",
  },
] as const;

export default function AiSearchTrustPanel() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="ai-search-trust-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="section-overline mb-4">Inspect the evidence</p>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <h2 id="ai-search-trust-heading" className="text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">
                Trust the method before you trust the claim
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Sequoia publishes the boundaries around its AI Search work. You can inspect a named
                assessment example, the measurement definitions, the broader proof rules, and the data
                safeguards before sharing account access.
              </p>
            </div>
            <div className="rounded-2xl border border-[#3A9E6A]/25 bg-[#C8EDD2]/25 p-6">
              <p className="font-bold text-[#0D2318]">What testimonials prove</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Sequoia&rsquo;s existing testimonials describe the broader client experience and marketing
                work. They are not presented as proof that AI recommendations increased.
              </p>
              <Link href="/case-studies" className="mt-4 inline-flex text-sm font-bold text-[#1A5C3A] underline underline-offset-4">
                Review client work and testimonials
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {evidence.map((item) => (
              <article key={item.href} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#3A9E6A]">{item.label}</p>
                <h3 className="mt-3 text-xl font-bold text-[#0D2318]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
                <Link href={item.href} className="mt-5 inline-flex text-sm font-bold text-[#1A5C3A] underline underline-offset-4">
                  Open the source
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-gray-200 p-7 sm:p-8">
            <h3 className="text-xl font-bold text-[#0D2318]">Independent records you can open yourself</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {corroboration.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-xl bg-[#fafaf8] p-5 transition hover:bg-[#C8EDD2]/30"
                >
                  <span className="font-bold text-[#0D2318]">{item.label}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-gray-600">{item.detail}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
