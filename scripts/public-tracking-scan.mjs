#!/usr/bin/env node

import { writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const REQUEST_TIMEOUT_MS = 15_000;
const MAX_DISCOVERED_PAGES = 4;
const USER_AGENT =
  "Mozilla/5.0 (compatible; SequoiaGeoPublicSurfaceVerifier/1.0; +https://www.sequoiageo.com/)";

const TAG_PATTERNS = {
  googleAds: /\bAW-\d{5,}\b/g,
  ga4: /\bG-[A-Z0-9]{6,}\b/g,
  gtm: /\bGTM-[A-Z0-9]{4,}\b/g,
  googleTag: /\bGT-[A-Z0-9]{4,}\b/g,
};

const CALL_TRACKING_PATTERNS = {
  callrail: /callrail(?:\.com|\.js|cdn)/i,
  calltrackingmetrics: /calltrackingmetrics/i,
  whatconverts: /whatconverts/i,
  invoca: /invoca/i,
  dialogtech: /dialogtech/i,
  marchex: /marchex/i,
};

const DISCOVERY_PATH_PATTERN =
  /(?:contact|quote|estimate|booking|schedule|thank(?:-|_)?you|request)/i;

function normalizeDomain(value) {
  return value
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/^www\./i, "")
    .replace(/\/.*$/, "")
    .toLowerCase();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function findMatches(text, pattern) {
  return unique(text.match(pattern) ?? []);
}

function normalizeUsPhone(value) {
  const digits = value.replace(/\D/g, "");
  const phone =
    digits.length === 11 && digits.startsWith("1")
      ? digits.slice(1)
      : digits.length === 10
        ? digits
        : null;
  if (!phone) return null;

  const fictionalLine = Number(phone.slice(6));
  if (
    phone.slice(3, 6) === "555" &&
    fictionalLine >= 100 &&
    fictionalLine <= 199
  ) {
    return null;
  }

  return phone;
}

function findPublicPhones(markup, telLinks) {
  const values = [...telLinks];
  for (const match of markup.matchAll(
    /["'](?:telephone|phone)["']\s*:\s*["']([^"']+)["']/gi,
  )) {
    values.push(match[1]);
  }
  for (const match of markup.matchAll(
    /(?:\+?1[\s.-]?)?(?:\(\d{3}\)|\d{3}[\s.-])\s*\d{3}[\s.-]\d{4}\b/g,
  )) {
    values.push(match[0]);
  }

  return unique(values.map(normalizeUsPhone)).filter(
    (phone) => phone && phone !== "0000000000",
  );
}

export function inspectMarkup(markup) {
  const tags = Object.fromEntries(
    Object.entries(TAG_PATTERNS).map(([name, pattern]) => [
      name,
      findMatches(markup, pattern),
    ]),
  );

  const callTracking = Object.entries(CALL_TRACKING_PATTERNS)
    .filter(([, pattern]) => pattern.test(markup))
    .map(([name]) => name);

  const telLinks = unique(
    [...markup.matchAll(/href=["']tel:([^"'#?]+)["']/gi)].map((match) =>
      match[1].trim(),
    ),
  );

  const publicPhones = findPublicPhones(markup, telLinks);

  const forms = (markup.match(/<form\b/gi) ?? []).length;

  return { tags, callTracking, telLinks, publicPhones, forms };
}

async function fetchText(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": USER_AGENT,
        accept: "text/html,application/xhtml+xml,application/javascript,*/*;q=0.8",
      },
    });

    const text = await response.text();
    return {
      requestedUrl: url,
      finalUrl: response.url,
      ok: response.ok,
      status: response.status,
      contentType: response.headers.get("content-type") ?? "",
      text,
    };
  } catch (error) {
    return {
      requestedUrl: url,
      finalUrl: url,
      ok: false,
      status: null,
      contentType: "",
      text: "",
      error: error instanceof Error ? error.message : String(error),
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchHomepage(domain) {
  const secure = await fetchText(`https://${domain}/`);
  if (secure.ok || secure.status) return secure;
  return fetchText(`http://${domain}/`);
}

function discoverSameOriginPages(homepage) {
  if (!homepage.text || !homepage.finalUrl) return [];

  const base = new URL(homepage.finalUrl);
  const candidates = [];

  for (const match of homepage.text.matchAll(/href=["']([^"'#]+)["']/gi)) {
    try {
      const url = new URL(match[1], base);
      if (url.origin !== base.origin) continue;
      if (!DISCOVERY_PATH_PATTERN.test(`${url.pathname}${url.search}`)) continue;
      url.hash = "";
      candidates.push(url.toString());
    } catch {
      // Ignore malformed links. The page itself remains valid evidence.
    }
  }

  const fallbackPaths = [
    "/contact",
    "/contact-us",
    "/request-a-quote",
    "/thank-you",
  ];
  for (const path of fallbackPaths) candidates.push(new URL(path, base).toString());

  return unique(candidates)
    .filter((url) => url !== homepage.finalUrl)
    .slice(0, MAX_DISCOVERED_PAGES);
}

async function inspectContainer(tagId) {
  const url = tagId.startsWith("GTM-")
    ? `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(tagId)}`
    : `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(tagId)}`;
  const response = await fetchText(url);
  return {
    id: tagId,
    url,
    ok: response.ok,
    status: response.status,
    error: response.error,
    inspection: inspectMarkup(response.text),
  };
}

function mergeInspection(items) {
  return {
    tags: Object.fromEntries(
      Object.keys(TAG_PATTERNS).map((name) => [
        name,
        unique(items.flatMap((item) => item.inspection.tags[name])),
      ]),
    ),
    callTracking: unique(items.flatMap((item) => item.inspection.callTracking)),
    telLinks: unique(items.flatMap((item) => item.inspection.telLinks)),
    publicPhones: unique(items.flatMap((item) => item.inspection.publicPhones)),
    forms: items.reduce((total, item) => total + item.inspection.forms, 0),
  };
}

function classify(merged, pages, containers) {
  const hasAdsTag = merged.tags.googleAds.length > 0;
  const hasAnalyticsTag =
    merged.tags.ga4.length > 0 ||
    merged.tags.gtm.length > 0 ||
    merged.tags.googleTag.length > 0;
  const hasCallTracking = merged.callTracking.length > 0;
  const fetchedPageCount = pages.filter((page) => page.ok).length;
  const containerFailures = containers.filter((container) => !container.ok).length;

  if (hasAdsTag) {
    return {
      verdict: "GOOGLE_ADS_TAG_FOUND",
      outreachRule: "Do not use a missing Google Ads tag claim.",
      confidence: "high",
    };
  }

  if (hasAnalyticsTag) {
    return {
      verdict: "ANALYTICS_PRESENT_ADS_TAG_NOT_FOUND",
      outreachRule:
        "Ask whether booked-job conversions are reaching Google Ads. Do not state that conversion tracking is absent.",
      confidence: containerFailures === 0 ? "medium" : "low",
    };
  }

  if (hasCallTracking) {
    return {
      verdict: "CALL_TRACKING_PRESENT_OTHER_TAGS_NOT_FOUND",
      outreachRule:
        "A call-tracking provider is visible. Ask how booked jobs are reconciled. Do not state that analytics is absent.",
      confidence: "medium",
    };
  }

  if (fetchedPageCount === 0) {
    return {
      verdict: "COULD_NOT_VERIFY",
      outreachRule: "Do not use a tracking claim.",
      confidence: "none",
    };
  }

  return {
    verdict: "SUPPORTED_TAG_NOT_FOUND",
    outreachRule:
      "Only say the supported public scan did not find a tag. Treat runtime, consent-gated, server-side, CRM-imported, or non-Google measurement as unverified.",
    confidence: "low",
  };
}

async function scanDomain(domain) {
  const homepage = await fetchHomepage(domain);
  const pageUrls = discoverSameOriginPages(homepage);
  const pageResponses = [homepage];

  for (const url of pageUrls) pageResponses.push(await fetchText(url));

  const pages = pageResponses.map((response) => ({
    requestedUrl: response.requestedUrl,
    finalUrl: response.finalUrl,
    ok: response.ok,
    status: response.status,
    error: response.error,
    inspection: inspectMarkup(response.text),
  }));

  const pageInspection = mergeInspection(pages);
  const containerIds = unique([
    ...pageInspection.tags.gtm,
    ...pageInspection.tags.googleTag,
  ]);
  const containers = [];
  for (const tagId of containerIds) containers.push(await inspectContainer(tagId));

  const merged = mergeInspection([
    ...pages,
    ...containers.map((container) => ({ inspection: container.inspection })),
  ]);
  merged.telLinks = pageInspection.telLinks;
  merged.publicPhones = pageInspection.publicPhones;
  merged.forms = pageInspection.forms;
  const classification = classify(merged, pages, containers);

  return {
    domain,
    checkedAt: new Date().toISOString(),
    homepage: {
      requestedUrl: homepage.requestedUrl,
      finalUrl: homepage.finalUrl,
      ok: homepage.ok,
      status: homepage.status,
      error: homepage.error,
    },
    pages,
    containers,
    observed: merged,
    ...classification,
    limitations: [
      "A public tag scan cannot verify Google Ads account settings, GA4 key events, offline imports, CRM-to-Ads uploads, consent-gated runtime tags, or server-side measurement.",
      "A tag being present does not prove it fires correctly or records qualified leads or jobs booked.",
      "A tag not being found is not proof that no measurement exists.",
    ],
  };
}

function toMarkdown(results) {
  const lines = [
    "# Public Tracking Verification",
    "",
    `Checked: ${new Date().toISOString()}`,
    "",
    "This report records only what the supported public scan observed. It does not prove that a business has no conversion measurement.",
    "",
    "| Domain | Verdict | Confidence | Public phones | Google Ads IDs | GA4 IDs | Containers | Call tracking | Forms observed |",
    "|---|---|---|---|---|---|---|---|---:|",
  ];

  for (const result of results) {
    lines.push(
      `| ${result.domain} | ${result.verdict} | ${result.confidence} | ${result.observed.publicPhones.join(", ") || "none found"} | ${result.observed.tags.googleAds.join(", ") || "none found"} | ${result.observed.tags.ga4.join(", ") || "none found"} | ${[...result.observed.tags.gtm, ...result.observed.tags.googleTag].join(", ") || "none found"} | ${result.observed.callTracking.join(", ") || "none found"} | ${result.observed.forms} |`,
    );
  }

  lines.push("", "## Outreach rules", "");
  for (const result of results) {
    lines.push(`- **${result.domain}:** ${result.outreachRule}`);
  }

  lines.push(
    "",
    "## Standing limitations",
    "",
    "- A public tag scan cannot verify account settings, key-event configuration, offline conversion imports, CRM uploads, consent-gated runtime tags, or server-side measurement.",
    "- Finding a tag does not prove it fires correctly or records qualified leads or jobs booked.",
    "- Not finding a supported tag is not proof that no measurement exists.",
  );

  return `${lines.join("\n")}\n`;
}

function parseArgs(argv) {
  const options = { domains: [], json: null, markdown: null };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--json") options.json = argv[++index];
    else if (value === "--markdown") options.markdown = argv[++index];
    else options.domains.push(normalizeDomain(value));
  }
  options.domains = unique(options.domains);
  return options;
}

async function main(argv) {
  const options = parseArgs(argv);
  if (options.domains.length === 0) {
    console.error(
      "Usage: node scripts/public-tracking-scan.mjs [--json output.json] [--markdown output.md] domain...",
    );
    process.exitCode = 1;
    return;
  }

  const results = [];
  for (const domain of options.domains) {
    console.error(`Checking ${domain}...`);
    results.push(await scanDomain(domain));
  }

  if (options.json) {
    await writeFile(options.json, `${JSON.stringify(results, null, 2)}\n`, "utf8");
  }
  if (options.markdown) await writeFile(options.markdown, toMarkdown(results), "utf8");
  if (!options.json && !options.markdown) console.log(JSON.stringify(results, null, 2));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main(process.argv.slice(2));
}
