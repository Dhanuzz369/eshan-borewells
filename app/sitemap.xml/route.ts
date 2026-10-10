import { getProductionUrl } from "../site-url";
import { seoPages } from "../seo-pages";
import { buildSitemapXml } from "../../lib/seo/sitemap-builder";

export const revalidate = 86400;

export function GET() {
  const origin = getProductionUrl() || "https://www.eshanborewells.com";
  const xml = buildSitemapXml(origin, seoPages);
  return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, s-maxage=86400, stale-while-revalidate=604800" } });
}
