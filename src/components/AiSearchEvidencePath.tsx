import Link from "next/link";

export default function AiSearchEvidencePath() {
  return (
    <section className="bg-[#0D2318] py-16" data-ai-search-evidence-treatment="method-case-assessment">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <p className="section-overline mb-3 text-[#82D2A0]">Evaluating AI search support?</p>
        <h2 className="max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">
          See the method, a permissioned example, and the first assessment step
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#C8EDD2]/80">
          Sequoia GEO is an operator-led AI-search visibility and recommendation practice for home-service companies. We establish what is true, correct what is broken, and verify the result before claiming marketing success. A mention, recommendation, citation, visit, inquiry, qualified lead, and booked job are reported as different stages.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              href: "/ai-search-methodology",
              title: "Review the methodology",
              body: "See the repeatable prompt, source, coding, and evidence rules.",
            },
            {
              href: "/case-studies/ai-search-readiness",
              title: "Read the Hicks Paving example",
              body: "See the verified conflicts and correction order without an unproven outcome claim.",
            },
            {
              href: "/ai-search-assessment",
              title: "Request a free assessment",
              body: "Start with a hand-reviewed snapshot of your public AI-search readiness.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:border-[#82D2A0]/60 hover:bg-white/10"
            >
              <span className="block font-bold text-white">{item.title}</span>
              <span className="mt-2 block text-sm leading-relaxed text-[#C8EDD2]/70">{item.body}</span>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-[#C8EDD2]/60">
          No assessment can guarantee that an AI assistant will recommend a business. The purpose is to improve verifiability and measure what changes.
        </p>
      </div>
    </section>
  );
}
