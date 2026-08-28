import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const WINDOW_MS = 60_000;
const WINDOW_LIMIT = 600;
let windowStartedAt = 0;
let windowCalls = 0;

function responseHeaders() {
  return {
    "Cache-Control": "no-store, max-age=0",
    Pragma: "no-cache",
    "X-Robots-Tag": "noindex, nofollow",
  };
}

export function GET() {
  const now = Date.now();
  if (now - windowStartedAt > WINDOW_MS) {
    windowStartedAt = now;
    windowCalls = 0;
  }
  windowCalls += 1;
  if (windowCalls > WINDOW_LIMIT) {
    return NextResponse.json(
      { enabled: false, error: "rate_limited" },
      { status: 429, headers: { ...responseHeaders(), "Retry-After": "60" } },
    );
  }

  const featureEnabled = process.env.SEQUOIA_KNOWLEDGE_ENABLED === "true";
  const killSwitch = process.env.SEQUOIA_KNOWLEDGE_KILL_SWITCH === "true";

  return NextResponse.json(
    {
      enabled: featureEnabled && !killSwitch,
      externalModelSpendLimitUsd: 0,
      catalogAccess: "bundled_only",
    },
    { headers: responseHeaders() },
  );
}
