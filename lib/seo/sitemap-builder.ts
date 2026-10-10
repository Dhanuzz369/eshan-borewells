import type { SeoPage } from "../../app/seo-pages";

function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

export function buildSitemapXml(origin: string, pages: SeoPage[]) {
  const baseUrl = origin.replace(/\/+$/, "");
  const paths = ["/", ...pages.map(({ slug }) => `/${slug}`)];
  const entries = paths.map((path) => `  <url><loc>${escapeXml(`${baseUrl}${path}`)}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;
}
