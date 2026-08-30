import type { Metadata } from "next";
import LeadForm, { StickyCallBar } from "./lead-form";

// Landing page for the Sequoia GEO sponsor banner at Immanuel High School in
// Reedley. The banner asks one question in very large type and carries a QR to
// this page, so this page answers that question and nothing else.
//
// Same construction as /found-me-in-chatgpt and for the same reasons: nav and
// footer suppressed (see ChromeGate), conversion path above the fold, fixed
// call bar, not in the sitemap, linked from nowhere. Every session here came
// off the banner, which makes the QR measurable.

export const metadata: Metadata = {
  title: "Does AI recommend your business? | Sequoia GEO",
  description:
    "A free check for Reedley area businesses: see what ChatGPT, Google, and Perplexity actually say when someone asks for a business like yours. Run by a local operator, 4x Inc. 5000.",
  alternates: { canonical: "https://www.sequoiageo.com/immanuel" },
};

export default function ImmanuelBannerPage() {
  return (
    <div className="min-h-screen bg-[#0D2318] pb-24">
      <section className="mx-auto max-w-2xl px-5 pt-4 sm:px-6 sm:pt-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#3A9E6A] sm:text-sm">
          You scanned this at Immanuel
        </p>

        <h1 className="mt-1.5 text-[26px] font-extrabold leading-[1.1] tracking-tight text-white [@media(max-height:700px)]:text-[21px] sm:text-5xl lg:text-6xl">
          So, does AI recommend your business?
        </h1>

        <p className="mt-3 text-[15px] leading-snug text-[#C8EDD2] [@media(max-height:700px)]:mt-2 [@media(max-height:700px)]:text-[13.5px] sm:text-xl">
          When somebody asks ChatGPT or Google for a business like yours, you either come up or you
          do not. Most owners have never checked.
        </p>
      </section>

      <section className="mx-auto mt-4 max-w-2xl px-5 sm:px-6">
        <LeadForm />

        <dl className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-[#1e4a33] bg-[#12301f]/60 px-2 py-3.5 sm:gap-4 sm:px-4">
          <div className="border-r border-[#1e4a33] px-1 text-center sm:px-2">
            <dt className="text-[13px] font-extrabold leading-tight text-white sm:text-base">
              4x Inc. 5000
            </dt>
            <dd className="mt-0.5 text-[10px] leading-tight text-[#8fb8a1] sm:text-xs">
              2021 to 2024
            </dd>
          </div>
          <div className="border-r border-[#1e4a33] px-1 text-center sm:px-2">
            <dt className="text-[13px] font-extrabold leading-tight text-white sm:text-base">
              13 years in home services
            </dt>
            <dd className="mt-0.5 text-[10px] leading-tight text-[#8fb8a1] sm:text-xs">
              Built it to 130+ employees
            </dd>
          </div>
          <div className="px-1 text-center sm:px-2">
            <dt className="text-[13px] font-extrabold leading-tight text-white sm:text-base">
              Right up the road
            </dt>
            <dd className="mt-0.5 text-[10px] leading-tight text-[#8fb8a1] sm:text-xs">
              Based in Sanger
            </dd>
          </div>
        </dl>

        <div className="mt-4 rounded-2xl bg-[#12301f] p-5">
          <p className="text-[13px] leading-relaxed text-[#b9d4c4]">
            <span className="font-bold text-white">Who you are talking to.</span> I am Aaron Husak.
            I spent 13 years running Balanced Comfort Heating &amp; Air here in the valley, growing
            it to 130+ employees and four straight years on the Inc. 5000. I bought advertising as
            an owner spending my own margin, not as an account manager spending someone
            else&rsquo;s. Now I run a small marketing practice out of Sanger, a few clients at a
            time, and I do the work myself.
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-[#b9d4c4]">
            Websites, Google, local search, and the AI answers people are starting to trust instead
            of scrolling. If you own a business around here, the check is free and there is no
            pitch attached to it.
          </p>
        </div>

        <p className="mt-5 text-center text-[11px] text-[#6f9a83]">
          Proud sponsor of Immanuel athletics. Go Eagles.
        </p>
      </section>

      <StickyCallBar />
    </div>
  );
}
