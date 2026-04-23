import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Training Tool | Sequoia GEO",
  description:
    "Practice your sales conversations and sharpen your team's phone skills with Talk N Sell Pro — a free interactive sales training tool built for home service contractors.",
  alternates: {
    canonical: "https://www.sequoiageo.com/sales-training",
  },
};

export default function SalesTrainingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0D2318] py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-[#C8EDD2] mb-5">
            <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
            Free Tool
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Talk N Sell Pro
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#C8EDD2]/80 max-w-2xl mx-auto">
            Practice your sales conversations and train your CSRs on handling objections,
            quoting, and closing. Built for home service contractors.
          </p>
        </div>
      </section>

      {/* Iframe */}
      <section className="bg-[#fafaf8]">
        <div className="mx-auto max-w-7xl px-0 lg:px-8 py-0 lg:py-8">
          <div className="w-full rounded-none lg:rounded-2xl overflow-hidden border-0 lg:border lg:border-gray-200 shadow-none lg:shadow-xl">
            <iframe
              src="https://talk-n-sell-pro.lovable.app"
              title="Talk N Sell Pro — Sales Training Tool"
              className="w-full"
              style={{ height: "calc(100vh - 180px)", minHeight: "600px", border: "none" }}
              allow="microphone; camera"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
