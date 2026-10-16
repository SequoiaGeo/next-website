// Search Console final web-search property totals, read October 16, 2026.
// These are equal post-launch windows, not an old-site versus new-site experiment.
export const afcsResults = {
  first: { label: "First 30 days after launch", dates: "June 5 to July 4, 2026", clicks: 26, impressions: 8174 },
  latest: { label: "Later 30-day window", dates: "September 14 to October 13, 2026", clicks: 121, impressions: 25915 },
  clickIncreasePercent: Math.round(((121 - 26) / 26) * 100),
  launchDate: "2026-06-05",
  verifiedOn: "2026-10-16",
} as const;
