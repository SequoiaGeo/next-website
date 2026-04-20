import React from "react";

export default function FullPicture() {
  const findings = [
    {
      amount: "$7,783/mo",
      label: "on Angi leads",
      result: "Less than $2,000 in booked revenue. The agency managing it never connected lead spend to actual jobs.",
    },
    {
      amount: "16,962",
      label: "reported conversions",
      result: "Reality: 22 booked jobs. Three of five conversion goals were misconfigured: page views counted as conversions. The report showed green. Revenue didn't move.",
    },
    {
      amount: "265 pages",
      label: "not indexed by Google",
      result: "Including their main service page. Their SEO company billed monthly while Google literally couldn't see their most important content.",
    },
    {
      amount: "1 full month",
      label: "GBP offline",
      result: "After a web migration, their Google Business Profile went dark. Nobody noticed. A full month of \"plumber near me\" searches, invisible.",
    },
    {
      amount: "Dead phone number",
      label: "in active LSA",
      result: "Google Guaranteed leads were being sent to a line nobody answered. The campaign was live and billing. The agency never called the number to check.",
    },
    {
      amount: "Appointment notes",
      label: "nobody was reading",
      result: "A tech told a customer \"if the hydrojet doesn't work, there's no charge.\" That's not how pricing works. That tech gave away a job. The marketing agency never saw it. We flagged it within 24 hours.",
    },
  ];

  return (
    <section id="full-picture" className="bg-[#fafaf8]">

      {/* Section 1: What I do differently */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <p className="section-overline mb-4">What We Do Differently</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl leading-[1.08]">
              Your marketing isn&rsquo;t just a channel.{" "}
              <span className="text-[#1A5C3A]">It&rsquo;s a pipeline.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Before touching your Google Ads, we look at the full picture. Phones. Booking rate.
              Appointment notes. Where revenue is being left on the table before a lead ever
              turns into a job. Most marketing agencies don&rsquo;t do this because it&rsquo;s
              not their department. We do it because it&rsquo;s the only way to actually move revenue.
            </p>
            <blockquote className="mt-6 border-l-2 border-[#3A9E6A] pl-5">
              <p className="text-base font-medium italic text-gray-600">
                &ldquo;You can generate 200 leads a month and still lose money if your techs are
                giving away work, your CSRs aren&rsquo;t booking right, or your follow-up
                process is broken.&rdquo;
              </p>
            </blockquote>
            <p className="mt-4 text-base text-gray-500">
              That&rsquo;s the difference between a marketing vendor and someone who&rsquo;s
              run a company like yours.
            </p>
          </div>

          {/* Right: comparison table */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <div className="grid grid-cols-2 divide-x divide-gray-200">
              <div className="bg-gray-50 px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-gray-400">
                Your agency reports on
              </div>
              <div className="bg-[#0D2318] px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-white">
                We report on
              </div>
            </div>
            {[
              ["Impressions &amp; clicks", "Revenue per marketing dollar"],
              ["Cost per lead", "Cost per booked job"],
              ["&ldquo;Leads generated&rdquo;", "Booking rate by lead source"],
              ["Rankings", "Average ticket by channel"],
              [
                "Monthly report you don&rsquo;t read",
                "\"Your Saturday booking rate dropped 15%: here&rsquo;s the call recording showing why\"",
              ],
            ].map(([agency, me], i) => (
              <React.Fragment key={i}>
                <div
                  className={`border-t border-gray-200 px-5 py-4 text-sm text-gray-500 ${i % 2 === 1 ? "bg-gray-50/60" : "bg-white"}`}
                  dangerouslySetInnerHTML={{ __html: agency }}
                />
                <div
                  className={`border-t border-l border-gray-200 px-5 py-4 text-sm font-medium text-[#0D2318] ${i % 2 === 1 ? "bg-[#C8EDD2]/30" : "bg-[#C8EDD2]/10"}`}
                  dangerouslySetInnerHTML={{ __html: me }}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Real findings */}
      <div className="bg-[#0D2318]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="section-overline mb-4 text-[#3A9E6A]">Real Findings</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.08]">
              What we find in the first 48 hours{" "}
              <span className="text-[#3A9E6A]">that agencies miss for months</span>
            </h2>
            <p className="mt-4 text-base text-[#C8EDD2]/50">
              Multiple clients. Multiple agencies. All reporting green.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {findings.map((item) => (
              <div
                key={item.label}
                className="flex flex-col rounded-xl border border-white/10 bg-white/[0.05] p-6"
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-extrabold text-[#3A9E6A]">{item.amount}</span>
                  <span className="text-xs text-[#C8EDD2]/40">{item.label}</span>
                </div>
                <p className="text-sm leading-relaxed text-[#C8EDD2]/60">{item.result}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-[#C8EDD2]/35">
            None of this required special tools. It required someone who reads your appointment notes,
            calls your phone number, and asks why revenue didn&rsquo;t move.
          </p>
        </div>
      </div>
    </section>
  );
}
