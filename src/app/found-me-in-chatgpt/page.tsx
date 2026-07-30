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
    "I put service businesses in front of people who ask AI who to hire. Run by an operator who spent 13 years building an HVAC company to 130 employees and four straight Inc. 5000 years.",
  alternates: { canonical: "https://www.sequoiageo.com/found-me-in-chatgpt" },
};

export default function FoundMeInChatGPT() {
  return (
    <div className="min-h-screen bg-[#0D2318] pb-24">
      <section className="mx-auto max-w-2xl px-5 pt-4 sm:px-6 sm:pt-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#3A9E6A]">
          You found me inside ChatGPT
        </p>

        <h1 className="mt-1.5 text-[22px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl">
          Now let&rsquo;s get your customers finding you the same way.
        </h1>

        <p className="mt-2 text-[14px] leading-snug text-[#C8EDD2] sm:text-lg">
          I put service businesses in front of people asking AI who to hire. You just watched it work.
        </p>
      </section>

      <section className="mx-auto mt-4 max-w-2xl px-5 sm:px-6">
        <LeadForm />

        <div className="mt-6 rounded-2xl bg-[#12301f] p-5">
          <p className="text-[13px] leading-relaxed text-[#b9d4c4]">
            <span className="font-bold text-white">Who you are talking to.</span> I spent 13 years
            running Balanced Comfort Heating &amp; Air, growing it to 130+ employees and four
            consecutive Inc. 5000 appearances. I bought advertising as an owner spending my own
            margin, not as an account manager spending someone else&rsquo;s. Now I run a small
            marketing practice, a few clients at a time, and I do the work myself.
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-[#b9d4c4]">
            HVAC, plumbing, roofing, and restoration. Google Ads, local SEO, AI search visibility,
            and the conversion work in between.
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
