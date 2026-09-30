import { getProductionUrl } from "../site-url";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const origin = getProductionUrl() || new URL(request.url).origin;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>`;
  return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8" } });
}
