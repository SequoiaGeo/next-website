import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Home Services AI Recommendation Report Pilot",
  description:
    "Read the registered method for Sequoia GEO's home services AI recommendation research pilot. Results have not yet been published.",
  alternates: {
    canonical: "https://www.sequoiageo.com/home-services-ai-recommendation-report",
  },
  robots: { index: false, follow: true },
};

const design = [
  { value: "1", label: "trade" },
  { value: "1", label: "metro" },
  { value: "12", label: "commercial prompts" },
  { value: "3", label: "AI search products" },
  { value: "5", label: "fresh-session repeats" },
  { value: "180", label: "coded observations before controls" },
];

const questions = [
  "How often does each product name a specific local provider?",
  "When is a provider recommended rather than only mentioned?",
  "How often does the primary recommendation repeat?",
  "Which sources appear when recommendations are produced?",
  "Where do AI search products disagree about the same market?",
  "Which public contradictions appear in cited or retrieved sources?",
];

const boundaries = [
  "The study will describe only what appeared in the registered sample.",
  "Each platform will be reported separately rather than averaged into a universal rank.",
  "Repeat observations measure stability and are not treated as statistically independent trials.",
  "A citation will not be presented as a provider recommendation, inquiry, or qualified lead.",
  "The report will not claim that one public signal caused an AI answer.",
  "Provider names will not be published until conflict, legal, and relationship reviews are complete.",
];

export default function HomeServicesAiRecommendationReportPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          {
            name: "Home Services AI Recommendation Report",
            url: "https://www.sequoiageo.com/home-services-ai-recommendation-report",
          },
        ]}
      />

      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-200">
            Research protocol registered, results not yet published
          </span>
          <p className="section-overline mb-4 mt-8 text-[#3A9E6A]">Home Services Research</p>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Home Services AI Recommendation Report
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#C8EDD2]/80">
            Sequoia GEO is preparing a reproducible pilot examining how AI-assisted search products
            mention, recommend, and cite local home service providers. This page publishes the study
            design before any result is collected or headline is chosen.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/ai-search-methodology" className="rounded-lg bg-white px-7 py-3.5 font-semibold text-[#1A5C3A]">
              Read the measurement method
            </Link>
            <Link href="/ai-search-assessment" className="rounded-lg border border-white/25 px-7 py-3.5 font-semibold text-white">
              Request your own assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-overline mb-4">Registered Pilot Design</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2318] sm:text-4xl">
              The method is frozen before the observations begin.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              The default panel includes ChatGPT Search, Google AI Mode, and Perplexity. The exact
              product, account state, search state, date, and local time will be recorded because
              interfaces and retrieval behavior can change.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {design.map((item) => (
              <div key={item.label} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-5 text-center">
                <p className="text-3xl font-black text-[#1A5C3A]">{item.value}</p>
                <p className="mt-2 text-sm leading-snug text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-gray-500">
            The three-platform panel may change before collection if access or reproducibility fails.
            Any substitution and its reason will be recorded before the prompt set is frozen.
          </p>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="section-overline mb-4">Research Questions</p>
            <h2 className="text-3xl font-extrabold text-[#0D2318]">What the pilot is designed to observe</h2>
            <ol className="mt-8 space-y-4">
              {questions.map((question, index) => (
                <li key={question} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
                  <span className="font-black text-[#1A5C3A]">{index + 1}</span>
                  <span className="text-sm leading-relaxed text-gray-700">{question}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="section-overline mb-4">Publication Boundaries</p>
            <h2 className="text-3xl font-extrabold text-[#0D2318]">What the report will not overstate</h2>
            <ul className="mt-8 space-y-4">
              {boundaries.map((boundary) => (
                <li key={boundary} className="flex gap-3 rounded-xl bg-[#C8EDD2]/35 p-5">
                  <span aria-hidden="true" className="mt-0.5 font-black text-[#1A5C3A]">✓</span>
                  <span className="text-sm leading-relaxed text-[#0D2318]/80">{boundary}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-overline mb-4 text-[#3A9E6A]">How Answers Will Be Coded</p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Mention, recommendation, citation, and absence remain separate.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Mention", "A provider appears anywhere in the response."],
              ["Recommendation", "The response presents the provider as one a buyer could hire."],
              ["Primary recommendation", "The provider is presented first or most strongly in that observation."],
              ["Citation", "A source appears in the answer, whether or not its provider is recommended."],
              ["Absence", "The provider does not appear under the registered coding rule."],
              ["Source type", "Provider, official, editorial, directory, review, forum, or unresolved source."],
              ["Variance", "The answer changes across the five fresh-session stability checks."],
              ["Second coding", "At least 20 percent of observations receive independent stage coding."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C8EDD2]/65">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="section-overline mb-4">Current Status</p>
          <h2 className="text-3xl font-extrabold text-[#0D2318] sm:text-4xl">No provider results have been published.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
            The remaining decision gate is to select the pilot trade and metro, complete the conflict
            review, define the provider universe and official source list, freeze the 12 prompts, and
            confirm the second-coder plan. Results will replace this status section only after the
            collection and quality checks are complete.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-lg border border-[#1A5C3A] px-7 py-3.5 font-semibold text-[#1A5C3A]">
              Ask to receive the published report
            </Link>
            <Link href="/ai-search-assessment" className="rounded-lg bg-[#1A5C3A] px-7 py-3.5 font-semibold text-white">
              Request an AI Search assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
