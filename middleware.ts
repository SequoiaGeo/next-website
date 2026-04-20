import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE = "hp_variant";
const SPLIT = 0.5; // 50/50

export function middleware(request: NextRequest) {
  const existing = request.cookies.get(COOKIE)?.value;

  // Already assigned — route accordingly
  if (existing === "atlas") {
    const url = request.nextUrl.clone();
    url.pathname = "/v2";
    return NextResponse.rewrite(url);
  }
  if (existing === "control") {
    return NextResponse.next();
  }

  // First visit — assign randomly
  const variant = Math.random() < SPLIT ? "atlas" : "control";
  const cookieOpts = {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
    httpOnly: false, // readable by GA4 client script
  };

  if (variant === "atlas") {
    const url = request.nextUrl.clone();
    url.pathname = "/v2";
    const res = NextResponse.rewrite(url);
    res.cookies.set(COOKIE, "atlas", cookieOpts);
    return res;
  }

  const res = NextResponse.next();
  res.cookies.set(COOKIE, "control", cookieOpts);
  return res;
}

// Only runs on the homepage
export const config = {
  matcher: ["/"],
};
