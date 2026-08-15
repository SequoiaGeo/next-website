import { NextResponse } from "next/server";

// A/B test removed, all visitors now see the main homepage.
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
