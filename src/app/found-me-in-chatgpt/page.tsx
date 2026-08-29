import type { Metadata } from "next";
import LeadForm, { StickyCallBar } from "./lead-form";

// Paid landing page for the ChatGPT Ads test. Deliberately NOT in the sitemap
// and not linked from anywhere on the site: the only inbound path is the ads,
// which makes every session here attributable ad traffic with no organic mixed
// in. That is what lets us compare billed clicks to landed sessions honestly.
//
// Structure is driven by the Clarity read on the first 31 ad sessions: 29 of 31
// were mobile, average scroll depth was 4.58%, and 20 of 31 ended under 10
// seconds. Consequences, all deliberate:
//   - Global nav and footer are suppressed here (see ChromeGate) so there are
//     no escape hatches and the page is short enough that scroll depth means
//     something.
//   - The form submit sits above the fold at 375x812, verified by measurement.
//   - The call action is a fixed bottom bar, so the highest-intent action on a
//     phone requires no scrolling at all.
//
// Left indexable on purpose. OpenAI's docs say landing pages are reviewed by
// their classifiers before ads are eligible to run, and pages their systems
// cannot evaluate are not eligible, so we do not risk a noindex signal
// interfering with ad review over a stray organic impression.

export const metadata: Metadata = {
  title: "You found me inside ChatGPT | Sequoia GEO",
  description:
    "I put service businesses in front of people who ask AI who to hire. Run by an operator who spent 13 years building a home services company to 130 employees and four straight Inc. 5000 years.",
  alternates: { canonical: "https://www.sequoiageo.com/found-me-in-chatgpt" },
};

export default function FoundMeInChatGPT() {
  return (
    <div className="min-h-screen bg-[#0D2318] pb-24">
      <section className="mx-auto max-w-2xl px-5 pt-4 sm:px-6 sm:pt-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#3A9E6A] sm:text-sm">
          You found me inside ChatGPT
        </p>

        <h1 className="mt-1.5 text-[26px] font-extrabold leading-[1.1] tracking-tight text-white [@media(max-height:700px)]:text-[21px] sm:text-5xl lg:text-6xl">
          Now let&rsquo;s get your customers finding you the same way.
        </h1>

        <p className="mt-3 text-[15px] leading-snug text-[#C8EDD2] [@media(max-height:700px)]:mt-2 [@media(max-height:700px)]:text-[13.5px] sm:text-xl">
          I put service businesses in front of people asking AI who to hire. You just watched it work.
        </p>
      </section>

      <section className="mx-auto mt-4 max-w-2xl px-5 sm:px-6">
        <LeadForm />

        {/* Trust bar sits directly under the form, where the hesitation happens.
            Every claim here is verifiable: the Inc. 5000 years, the company he
            actually built, and the fact that he does the work himself. Nothing
            aspirational, nothing that needs an asterisk. */}
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
              Owner operated
            </dt>
            <dd className="mt-0.5 text-[10px] leading-tight text-[#8fb8a1] sm:text-xs">
              You work with me, not a rep
            </dd>
          </div>
        </dl>

        <div className="mt-4 rounded-2xl bg-[#12301f] p-5">
          <p className="text-[13px] leading-relaxed text-[#b9d4c4]">
            <span className="font-bold text-white">Who you are talking to.</span> I spent 13 years
            running Balanced Comfort Heating &amp; Air, growing it to 130+ employees and four
            consecutive Inc. 5000 appearances. I bought advertising as an owner spending my own
            margin, not as an account manager spending someone else&rsquo;s. Now I run a small
            marketing practice, a few clients at a time, and I do the work myself.
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-[#b9d4c4]">
            HVAC, plumbing, roofing, and restoration. Websites, Google Ads, local SEO, AI search
            visibility, and the conversion work in between.
          </p>
        </div>

        <p className="mt-5 text-center text-[11px] text-[#6f9a83]">
          Sequoia GEO, Sanger California
        </p>
      </section>

      <StickyCallBar />
    </div>
  );
}
