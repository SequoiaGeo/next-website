"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How fast will you see results: SEO vs PPC/LSAs?",
    answer:
      "PPC and Local Service Ads can start generating calls within 2 to 4 weeks once campaigns are launched and optimized. SEO is a longer play: expect meaningful organic growth within 3 to 6 months, with compounding returns over time. We typically recommend running both in parallel so you get immediate leads while building long-term visibility.",
  },
  {
    question: "Do you focus on lowering cost per lead or booking more jobs?",
    answer:
      "Both, but the primary KPI is booked jobs. A cheap lead that doesn't convert is worthless. We optimize the entire funnel: from the ad click to the phone call to the booked appointment, so you're getting quality leads that actually turn into revenue.",
  },
  {
    question: "Can you handle emergency intent keywords?",
    answer:
      "Absolutely. We build high-intent keyword clusters around emergency searches like \"emergency plumber near me\" or \"AC repair now.\" These searches have the highest conversion rates, and we know exactly how to target them because we've lived those 2 AM emergency calls from the dispatch side.",
  },
  {
    question: "Will you manage our Google Business Profile and reviews?",
    answer:
      "Yes. Full GBP optimization: categories, services, photos, posts, Q&A, and review response strategy. Your Google Business Profile is often the first impression potential customers get, and we treat it like the revenue asset it is.",
  },
  {
    question: "Do we keep control of our ad accounts and data?",
    answer:
      "Always. Everything is built inside your own accounts: Google Ads, Meta, Google Business Profile, analytics. You own all the data, all the campaigns, and all the history. If we ever part ways, everything stays with you. No hostage situations, ever.",
  },
  {
    question: "Which contractor trades do you specialize in?",
    answer:
      "Core expertise is in HVAC, plumbing, roofing, and restoration services. That said, the strategies apply across home services: we understand the unique dynamics of emergency work, seasonal demand, and local competition that all contractor trades share.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fafaf8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 lg:gap-24 items-start">

          {/* Left: header */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-overline mb-4">Common Questions</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl leading-[1.08]">
              No fluff.{" "}
              <span className="text-[#1A5C3A]">Just answers.</span>
            </h2>
            <p className="mt-5 text-base text-gray-500 leading-relaxed">
              The questions contractors actually ask when they&rsquo;re deciding whether this
              is right for their business.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between py-6 text-left transition hover:text-[#1A5C3A]"
                >
                  <span className="pr-8 text-base font-semibold text-[#1a1a1a] leading-snug">
                    {faq.question}
                  </span>
                  <svg
                    aria-hidden="true"
                    className={`h-5 w-5 flex-shrink-0 text-[#1A5C3A] transition-transform duration-200 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="pr-12 text-base leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
