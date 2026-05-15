import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// A/B test removed — all visitors now see the main homepage.
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
