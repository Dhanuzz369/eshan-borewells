import { getProductionUrl } from "../site-url";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const origin = getProductionUrl() || new URL(request.url).origin;
  const text = `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`;
  return new Response(text, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
