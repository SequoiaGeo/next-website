import type { Metadata } from "next";

// The calculator page is a client component, so its metadata lives here.
// Without this the page shipped the generic site-wide title.
export const metadata: Metadata = {
  title: "Marketing Leak Calculator for Home Services | Sequoia GEO",
  description:
    "Free calculator for HVAC, plumbing, and home service companies. Enter your ad spend, call volume, booking rate, and average ticket to see how much revenue your marketing funnel is leaking every year.",
  alternates: { canonical: "/marketing-leak-calculator" },
  openGraph: {
    title: "Marketing Leak Calculator for Home Services | Sequoia GEO",
    description:
      "See how much revenue your marketing funnel is leaking. Built for HVAC, plumbing, and home service companies by a 13-year operator.",
    url: "https://www.sequoiageo.com/marketing-leak-calculator",
  },
};

export default function MarketingLeakCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
