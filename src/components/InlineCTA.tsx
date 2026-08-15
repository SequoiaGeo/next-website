"use client";

import Link from "next/link";
import { trackCallIntent, trackCtaIntent } from "@/lib/analytics";

interface InlineCTAProps {
  headline?: string;
  subtext?: string;
  variant?: "dark" | "green" | "light";
  buttonText?: string;
  buttonHref?: string;
  ctaContract?: "schedule" | "intake" | "resource";
}

/**
 * Reusable mid-page CTA strip. Drop between homepage sections
 * to give visitors a conversion path without scrolling to the bottom.
 */
export default function InlineCTA({
  headline = "Ready to see where your revenue is leaking?",
  subtext = "15 minutes. No pitch deck. Real operator-level feedback.",
  variant = "green",
  buttonText = "Choose a Time With Aaron",
  buttonHref = "/contact#book",
  ctaContract = "schedule",
}: InlineCTAProps) {
  const bg =
    variant === "dark"
      ? "bg-[#0D2318]"
      : variant === "green"
      ? "bg-[#1A5C3A]"
      : "bg-white border-y border-gray-200";

  const textColor = variant === "light" ? "text-[#1a1a1a]" : "text-white";
  const subColor = variant === "light" ? "text-gray-500" : "text-white/70";
  const btnBg =
    variant === "light"
      ? "bg-[#1A5C3A] text-white hover:bg-[#0D2318]"
      : "bg-white text-[#0D2318] hover:bg-[#C8EDD2]";
  const phoneLinkColor = variant === "light" ? "text-[#1A5C3A]" : "text-white/60 hover:text-white/90";

  return (
    <section className={`${bg} py-10 sm:py-12`}>
      <div className="mx-auto max-w-5xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className={`text-lg sm:text-xl font-bold ${textColor}`}>
            {headline}
          </p>
          <p className={`mt-1 text-sm ${subColor}`}>{subtext}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <Link
            href={buttonHref}
            onClick={() => trackCtaIntent(headline || "inline_cta", ctaContract)}
            className={`inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold transition ${btnBg}`}
          >
            {buttonText}
            <svg
              aria-hidden="true"
              className="ml-2 h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <a
            href="tel:5595213122"
            onClick={() => trackCallIntent(headline || "inline_cta")}
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${phoneLinkColor}`}
          >
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            (559) 521-3122
          </a>
        </div>
      </div>
    </section>
  );
}
