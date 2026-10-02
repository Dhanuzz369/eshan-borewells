import { getProductionUrl } from "../site-url";

export const revalidate = 86400;

export function GET() {
  const origin = getProductionUrl() || "https://www.eshanborewells.com";
  const text = `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`;
  return new Response(text, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, s-maxage=86400, stale-while-revalidate=604800" } });
}
