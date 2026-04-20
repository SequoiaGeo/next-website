export default function Problem() {
  return (
    <section id="problem" className="bg-[#1a1a1a] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl">
          <p className="section-overline mb-4">The Problem</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
            You can generate 200 leads a month{" "}
            <span className="text-[#3A9E6A]">and still lose money.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Marketing and sales aren&rsquo;t two separate things. They&rsquo;re the same pipeline.
            If one end is leaking, it doesn&rsquo;t matter how much you pour in the other end.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            Your agencies don&rsquo;t see the whole pipeline. They see their piece of it,
            they optimize their metrics, and they send you a report that shows growth while
            your revenue stays flat.
          </p>
        </div>

        {/* The stat */}
        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/8 bg-white/[0.04] p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="shrink-0">
              <span className="text-6xl font-black text-[#3A9E6A] sm:text-7xl leading-none">58%</span>
            </div>
            <div>
              <p className="text-base font-semibold text-white">
                of calls your marketing generates walk away without booking.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                The industry average CSR booking rate is 42%. No agency will tell you
                that, because it&rsquo;s &ldquo;not their department.&rdquo;
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
              title: "You don't own what you think you own",
              body: "Many contractors discover when they try to leave an agency that the website goes with them. Years of content, reviews, and SEO equity: gone.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="bg-[#1a1a1a] px-7 py-8 border border-white/8"
            >
              <span className="text-3xl font-black text-white/10">{item.number}</span>
              <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {item.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
