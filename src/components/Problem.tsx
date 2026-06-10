export default function Problem() {
  return (
    <section id="problem" className="bg-[#1a1a1a] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl">
          <p className="section-overline mb-4">The Problem</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
            Why are you generating 200 leads a month{" "}
            <span className="text-[#3A9E6A]">and still losing money?</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            You are losing money because your marketing agencies operate in silos, optimizing for vanity metrics like clicks and impressions rather than full-pipeline revenue. <strong className="text-white">Marketing and sales are the same pipeline.</strong> If one end is leaking, it does not matter how much you pour in the other end.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            Your agencies do not see the whole pipeline. They see their piece of it, they optimize their metrics, and they send you a report that shows growth while your revenue stays flat.
          </p>
        </div>

        {/* The stat */}
        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/8 bg-white/[0.04] p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="shrink-0">
              <span className="text-6xl font-black text-[#3A9E6A] sm:text-7xl leading-none">Half</span>
            </div>
            <div>
              <p className="text-base font-semibold text-white">
                of the calls your marketing pays for never get booked.
              </p>
              <p className="mt-2 text-sm text-gray-300">
                Most home service companies I audit book fewer than half the calls they pay for. That gap is your <strong className="text-gray-200">CSR booking rate</strong>, and it lives between your marketing and your phones. No agency will tell you, because it&rsquo;s &ldquo;not their department.&rdquo;
              </p>
              <p className="mt-3 text-base font-bold text-[#3A9E6A]">It is mine.</p>
            </div>
          </div>
        </div>

        {/* Four issues */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-px sm:grid-cols-2 overflow-hidden rounded-2xl border border-white/8">
          {[
            {
              number: "01",
              title: "Siloed vendors",
              body: "Your SEO company, PPC manager, and social team each optimize their own channel. Nobody owns the revenue outcome.",
            },
            {
              number: "02",
              title: "Vanity metrics",
              body: "Impressions, clicks, \"leads generated\": metrics that look good in reports but don't tell you which jobs got booked.",
            },
            {
              number: "03",
              title: "No operator's eye",
              body: "Agencies have never reviewed your appointment notes, listened to a CSR call, or watched a job close. So they can't see what's leaking.",
            },
            {
              number: "04",
              title: "You don't own your own marketing assets",
              body: "Many contractors discover when they try to leave an agency that the website goes with them. Years of content, reviews, and SEO equity disappear with them.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="bg-[#1a1a1a] px-7 py-8 border border-white/8"
            >
              <span className="text-3xl font-black text-white/10">{item.number}</span>
              <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/marketing-leak-calculator" className="inline-flex items-center gap-2 text-sm font-semibold text-[#3A9E6A] hover:text-[#6FCF97] transition-colors">
            How much is your pipeline leaking? Try the free calculator
            <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
