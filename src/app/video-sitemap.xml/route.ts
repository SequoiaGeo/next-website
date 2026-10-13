import { podcastVideos } from "@/data/podcast-videos";

export const dynamic = "force-static";
const base = "https://www.sequoiageo.com";

function xml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;",
  })[character]!);
}

export function GET(): Response {
  // Use the same catalog as the watch pages and VideoObject markup.
  const entries = podcastVideos.map((video) => `  <url>
    <loc>${xml(`${base}/podcast/${video.slug}`)}</loc>
    <video:video>
      <video:thumbnail_loc>${xml(`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`)}</video:thumbnail_loc>
      <video:title>${xml(video.title)}</video:title>
      <video:description>${xml(video.description)}</video:description>
      <video:player_loc>${xml(`https://www.youtube-nocookie.com/embed/${video.videoId}`)}</video:player_loc>
      <video:publication_date>${xml(video.date)}</video:publication_date>
    </video:video>
  </url>`).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${entries}
</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
