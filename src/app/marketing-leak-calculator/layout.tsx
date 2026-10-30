import type { Metadata } from "next";

// The calculator page is a client component, so its metadata lives here.
// Without this the page shipped the generic site-wide title.
export const metadata: Metadata = {
  title: "Marketing Leak Calculator for Home Services | Sequoia GEO",
  description:
    "Free calculator for HVAC, plumbing, and home service companies. Enter spend, qualified inquiries, booking rate and average job value to compare illustrative booking scenarios. Results are not a forecast.",
  alternates: { canonical: "/marketing-leak-calculator" },
  openGraph: {
    title: "Marketing Leak Calculator for Home Services | Sequoia GEO",
    description:
      "Compare illustrative booking scenarios from your inputs. Built for HVAC, plumbing and home service companies.",
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
