import { getProductionUrl } from "../site-url";
import { seoPages } from "../seo-pages";

export const revalidate = 86400;

export function GET() {
  const origin = getProductionUrl() || "https://www.eshanborewells.com";
  const lastmod = new Date().toISOString();
  const urls = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    ...seoPages.map((page) => ({ path: `/${page.slug}`, priority: "0.8", changefreq: "monthly" })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(({ path, priority, changefreq }) => `  <url>\n    <loc>${origin}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
  return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, s-maxage=86400, stale-while-revalidate=604800" } });
}
