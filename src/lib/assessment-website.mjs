// Validate input only. Never fetch a visitor-supplied URL from this handler.
export function normalizeAssessmentWebsite(value) {
  if (typeof value !== "string") return "";
  const text = value.trim();
  if (!text || text.length > 500 || /[\s\\]/.test(text)) return "";
  try {
    const url = new URL(/^[a-z][a-z\d+.-]*:/i.test(text) ? text : `https://${text}`);
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.port) return "";
    const labels = url.hostname.split(".");
    if (labels.length < 2 || labels.some((label) => !/^[a-z\d](?:[a-z\d-]*[a-z\d])?$/i.test(label))) return "";
    if (!/^[a-z]{2,63}$/i.test(labels.at(-1)) || /\.(local|localhost|internal)$/i.test(url.hostname)) return "";
    // The assessment needs a public page, not query strings or fragments.
    return `${url.origin}${url.pathname === "/" ? "" : url.pathname}`;
  } catch {
    return "";
  }
}
