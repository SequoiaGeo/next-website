import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Booking Rate Scenario Calculator for Home Services | Sequoia GEO",
  description: "Model how percentage-point changes in booking rate affect booked jobs and estimated booked value. Illustrative scenarios based on your inputs, not a forecast.",
  alternates: { canonical: "https://www.sequoiageo.com/csr-calculator" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
