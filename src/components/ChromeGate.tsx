"use client";

// Hides global site chrome (nav, footer) on standalone paid landing pages.
//
// A paid landing page should have no escape hatches: every nav link is a way to
// leave without converting, and the global footer adds roughly 2,000px of
// unrelated content that makes scroll-depth metrics meaningless for the page.
// Every route not listed here renders chrome exactly as before, so this is a
// passthrough for the rest of the site.

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const BARE_ROUTES = new Set<string>(["/found-me-in-chatgpt"]);

export default function ChromeGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname && BARE_ROUTES.has(pathname)) return null;
  return <>{children}</>;
}
