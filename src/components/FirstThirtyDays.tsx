import Link from "next/link";

const deliverables = [
  {
    step: "01",
    title: "Full account access",
    description:
      "We get into everything: Google Ads, LSA, Analytics, GBP, Meta, call tracking, your CRM. Not a surface-level review. The full picture.",
  },
  {
    step: "02",
    title: "Complete audit with real findings",
    description:
      "Every channel audited against one metric: what is it actually producing in booked revenue? Not clicks. Not leads. Jobs.",
  },
  {
    step: "03",
    title: "Recommendations with expected impact",
    description:
      "You get a prioritized playbook: here's what's broken, here's what it's costing you, here's what we fix first and why.",
  },
  {
    step: "04",
    title: "Approved changes go live",
    description:
      "Nothing changes without your sign-off. But once you approve, the fixes happen in week two, not month three.",
  },
  {
    step: "05",
    title: "You decide at day 30",
    description:
      "Continue because you can see it working. Stop if it's not. Either way, you leave with a complete audit and real improvements already live.",
  },
];

export default function FirstThirtyDays() {
  return (
    <section className="bg-[#0D2318] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">

          {/* Left: sticky pitch */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-overline mb-4 text-[#3A9E6A]">The Offer</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.08]">
              Start with 30 days.{" "}
              <span className="text-[#3A9E6A]">No commitment required.</span>
            </h2>
            <p className="mt-5 text-base text-[#C8EDD2]/70 leading-relaxed">
              The first 30 days are a real working engagement, not a pitch or a proposal.
              You see exactly how we work, what we find, and what we fix. Then you decide
              whether to continue.
            </p>
            <p className="mt-4 text-base text-[#C8EDD2]/70 leading-relaxed">
              Most clients find more value in the first 30 days than they expected, because
              most of them didn&rsquo;t know what was leaking until we showed them.
            </p>

            <div className="mt-10 space-y-4">
              {/* Trust signals */}
              {[
                "Nothing changes without your approval",
                "You own all accounts and data",
                "No long-term contract to start",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3A9E6A]/20">
                    <svg aria-hidden="true" className="h-3 w-3 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#C8EDD2]/60">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
              >
                Apply for Your First 30 Days
                <svg aria-hidden="true" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <p className="mt-3 text-xs text-[#C8EDD2]/30">
                10 clients at a time &middot; Currently accepting applications
              </p>
            </div>
          </div>

          {/* Right: what happens */}
          <div className="space-y-0 divide-y divide-white/10">
            {deliverables.map((item) => (
              <div key={item.step} className="flex gap-7 py-8 first:pt-0 last:pb-0">
                <div className="shrink-0 pt-0.5">
                  <span className="text-4xl font-black text-white/10">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#C8EDD2]/55">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Callout */}
            <div className="pt-8">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-5">
                <p className="text-sm font-semibold text-white">
                  What you have at day 30, regardless of what you decide:
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#C8EDD2]/50">
                  A complete audit of every marketing channel, specific findings tied to revenue
                  impact, a prioritized recommendations playbook, and approved fixes already live.
                  That alone is worth the conversation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
