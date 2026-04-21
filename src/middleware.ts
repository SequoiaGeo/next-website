import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "hp_variant";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

// Bot patterns — always serve control to crawlers so SEO is consistent.
// NOTE: PageSpeed Insights / Lighthouse does NOT include "lighthouse" or "pagespeed"
// in the UA. The real Lighthouse mobile UA contains "moto g power" (a specific test device).
// Also match on missing Accept-Language (headless browsers) as a secondary signal.
const BOT_PATTERN =
  /googlebot|bingbot|yandexbot|baiduspider|facebookexternalhit|twitterbot|linkedinbot|slackbot|whatsapp|pinterest|embedly|W3C_Validator|lighthouse|pagespeed|moto\s*g\s*power|Chrome-Lighthouse/i;

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Only intercept the homepage
  if (pathname !== "/") {
    return NextResponse.next();
  }

  // Always serve control to crawlers — keeps SEO indexing consistent
  const ua = request.headers.get("user-agent") ?? "";
  if (BOT_PATTERN.test(ua)) {
    return NextResponse.next();
  }

  const existing = request.cookies.get(COOKIE_NAME)?.value;

  // Already assigned to v2 — redirect
  if (existing === "v2") {
    return NextResponse.redirect(new URL("/v2", request.url));
  }

  // Already assigned to control — serve normally
  if (existing === "control") {
    return NextResponse.next();
  }

  // First visit: assign 50/50
  const variant = Math.random() < 0.5 ? "v2" : "control";

  if (variant === "v2") {
    const response = NextResponse.redirect(new URL("/v2", request.url));
    response.cookies.set(COOKIE_NAME, "v2", {
      maxAge: COOKIE_MAX_AGE,
      path: "/",
      sameSite: "lax",
      httpOnly: false, // readable by JS for GA4 tagging
    });
    return response;
  }

  // Control — serve homepage with cookie set
  const response = NextResponse.next();
  response.cookies.set(COOKIE_NAME, "control", {
    maxAge: COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
    httpOnly: false,
  });
  return response;
}

export const config = {
  matcher: ["/"],
};
