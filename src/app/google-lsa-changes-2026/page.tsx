import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import InlineLeadForm from "@/components/InlineLeadForm";

export const metadata: Metadata = {
  title: "What Is Happening to Google LSA in 2026?",
  description:
    "Google folds LSA into Performance Max starting August 2026. Cost history does not migrate. We already exported three accounts. Here is the full checklist.",
  alternates: {
    canonical: "https://www.sequoiageo.com/google-lsa-changes-2026",
  },
  openGraph: {
    title: "What Is Happening to Google LSA in 2026?",
    description:
      "Google folds LSA into Performance Max starting August 2026. Cost history does not migrate. We already exported three accounts. Here is the full checklist.",
    url: "https://www.sequoiageo.com/google-lsa-changes-2026",
    type: "website",
  },
};

const faqs = [
  {
    question: "Will my LSA cost history transfer to Google Ads?",
    answer:
      "No. Campaign-level performance metrics and cost history do not migrate. Lead history does. Once your account moves, the old LSA dashboard becomes inaccessible, so anything you did not export before your migration date is gone.",
  },
  {
    question: "When does the LSA migration happen?",
    answer:
      "It is phased, beginning August 2026 for select US home services advertisers. Google emails account admins 14 days before their migration date and sends a 7-day reminder. As of August 2, 2026, no account I manage had received a notice.",
  },
  {
    question: "Will LSA still charge per lead after the change?",
    answer:
      "Yes. LSA becomes a Performance Max pay-per-lead campaign type inside Google Ads. You still pay per lead. What changes is where the campaign lives, how it reports, and the skill set required to manage it.",
  },
  {
    question: "What should I do before my account migrates?",
    answer:
      "Export every month of charged-lead history, confirm who your account admin is so the notice does not land in a dead inbox, and save your cost baselines. I completed full exports for three client accounts in July 2026, before any notice arrived, because the export is only possible while the old dashboard is still open.",
  },
];

export default function GoogleLsaChanges2026Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          {
            name: "What Is Happening to Google LSA in 2026?",
            url: "https://www.sequoiageo.com/google-lsa-changes-2026",
          },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      {/* Hero: the direct answer */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="section-overline mb-4 text-[#3A9E6A]">LSA Migration</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            What Is Happening to Google LSA in 2026?
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
            Google is folding Local Services Ads into Google Ads. A phased migration begins
            August 2026 for select US home services advertisers, and LSA becomes a
            Performance Max pay-per-lead campaign type. Your lead history migrates. Your
            campaign-level performance metrics and cost history do not. The old LSA
            dashboard becomes inaccessible once your account moves. Google emails account
            admins 14 days before their migration date, then sends a 7-day reminder. I
            completed full pre-migration exports for three client accounts in July 2026, so
            this page comes from doing the work, not summarizing someone else who did.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]"
            >
              Get Migration Help
            </Link>
            <a
              href="tel:5595213122"
              className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors"
            >
              (559) 521-3122
            </a>
          </div>
        </div>
      </section>

      {/* What changes */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
            What Changes, Line by Line
          </h2>
          <div className="mt-8 space-y-4">
            {[
              "LSA stops being a standalone product. It becomes a Performance Max pay-per-lead campaign type that lives inside Google Ads.",
              "The migration is phased, beginning August 2026, starting with select US home services advertisers. It is not a single flip-the-switch date.",
              "You still pay per lead. The billing model survives the move.",
              "The old LSA dashboard becomes inaccessible after your account migrates. There is no going back to look something up later.",
              "Google notifies account admins by email 14 days before their migration date, with a 7-day reminder after that.",
            ].map((line) => (
              <div key={line} className="flex gap-4 rounded-xl border border-gray-200 bg-[#fafaf8] p-5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#3A9E6A]" />
                <p className="text-base leading-relaxed text-gray-700">{line}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Source: Google Ads migration help documentation, verified July 2026 and
            re-checked against the accounts we manage.
          </p>
        </div>
      </section>

      {/* What migrates, what does not */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              What Migrates and What Does Not
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              This is the part most advertisers will find out too late.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#3A9E6A]/40 bg-white p-8">
              <h3 className="text-lg font-bold text-[#1A5C3A]">Migrates with you</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                Your lead history. The record of leads themselves carries into the new
                campaign type.
              </p>
            </div>
            <div className="rounded-2xl border border-red-200 bg-white p-8">
              <h3 className="text-lg font-bold text-red-700">Does not migrate</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                Campaign-level performance metrics and your cost history. Every month of
                what you paid per lead, gone from view once the old dashboard closes.
                Year-over-year cost comparisons break at the seam unless you saved the
                numbers yourself.
              </p>
            </div>
          </div>
          <p className="mt-8 text-base leading-relaxed text-gray-600">
            To make that concrete: one exteriors contractor we manage in a Texas metro has
            38 charged leads and $5,725.87 in charges across March to July 2026, a $150.68
            lifetime average per lead. That baseline is what disappears if nobody exports
            it before the account moves. It is also the kind of number you will want on
            hand when the new campaign type starts reporting, because it is the only way
            to know whether the migration made your leads more expensive. The full set of
            charged prices we track is published on{" "}
            <Link
              href="/how-much-do-hvac-plumbing-leads-cost"
              className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
            >
              what HVAC and plumbing leads cost
            </Link>
            .
          </p>
        </div>
      </section>

      {/* First-hand + action list */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
            What We Did in July, and What You Should Do Now
          </h2>
          <div className="mt-6 space-y-5">
            <p className="text-base leading-relaxed text-gray-600">
              In July 2026 I completed full pre-migration exports for three client
              accounts: every month of charged-lead history, preserved before the
              dashboards close. As of August 2, 2026, none of those accounts had received a
              migration notice, which means the exports happened with room to spare instead
              of during a 14-day scramble. That is the position you want to be in.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            {[
              {
                step: "1",
                title: "Export your history before your date",
                body: "Cost history does not migrate and the dashboard closes behind you. The export has to happen while the old dashboard still exists. Do it now, not when the email lands.",
              },
              {
                step: "2",
                title: "Confirm your account admin and watch that inbox",
                body: "The 14-day notice and the 7-day reminder go to account admins. If the admin email is a former employee or a dead inbox, your countdown starts without you.",
              },
              {
                step: "3",
                title: "Save your baselines and expect reporting to reset",
                body: "New campaign type, new reporting. Year-over-year comparisons break at the migration seam. Keep your lifetime cost-per-lead numbers where you can find them, so you can judge the new system against the old one.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 rounded-2xl border border-gray-200 p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C8EDD2] text-base font-black text-[#0D2318]">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base leading-relaxed text-gray-600">
            The bigger shift: LSA is about to live inside Google Ads, where campaign
            management is the whole game. The set-it-and-forget-it era of LSA ends with the
            dashboard. If you want the migration watched and the new campaign type managed
            against your old baselines, that is exactly what my{" "}
            <Link
              href="/lsa-management"
              className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
            >
              LSA management
            </Link>{" "}
            work covers, for{" "}
            <Link
              href="/hvac-seo"
              className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
            >
              HVAC
            </Link>{" "}
            and{" "}
            <Link
              href="/plumbing-seo"
              className="font-medium text-[#1A5C3A] underline hover:text-[#0D2318]"
            >
              plumbing
            </Link>{" "}
            companies alike.
          </p>
        </div>
      </section>

      {/* On-page capture */}
      <InlineLeadForm
        source="google_lsa_changes_2026"
        heading="Get ahead of your LSA migration"
        subtext="Tell me where to send it. I will check what your account stands to lose, whether your history is exported, and who your notice will go to. No pitch deck."
        buttonText="Get My Migration Review"
      />

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              LSA Migration Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-gray-200 p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="bg-[#fafaf8] py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">
              Keep Going
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: "LSA Management", href: "/lsa-management" },
              { label: "What HVAC and Plumbing Leads Cost", href: "/how-much-do-hvac-plumbing-leads-cost" },
              { label: "HVAC Marketing Budgets", href: "/how-much-should-hvac-companies-spend-on-marketing" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-[#1A5C3A] shadow-sm hover:border-[#3A9E6A]/40 hover:shadow-md transition"
              >
                {link.label}
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
