import { getProductionUrl } from "../site-url";
import { seoPages } from "../seo-pages";

export const revalidate = 86400;

export function GET() {
  const origin = getProductionUrl() || "https://www.eshanborewells.com";
  const pageLinks = seoPages.map((page) => `- [${page.title}](${origin}/${page.slug}): ${page.description}`).join("\n");
  const text = `# Eshan Borewells

> Eshan Borewells provides site-aware borewell drilling, groundwater survey, casing, flushing and water project support in Bengaluru and nearby areas, generally within about 100 km.

## Official website
- [Eshan Borewells](${origin}/): Borewell drilling and water solutions for homes, apartments, farms, commercial and industrial sites.
- [Sitemap](${origin}/sitemap.xml): Index of the official service and locality pages.
- [Customer questions](${origin}/#questions): Practical answers about access, surveys, drilling, casing and existing borewells.

## Services and local pages
${pageLinks}

## Business details
- Office: 6th Block, Rajajinagar, Bengaluru, Karnataka, India.
- Phone and WhatsApp: +91 98447 75905.
- Coverage: Bengaluru and nearby areas, generally within about 100 km; confirm access and availability for the exact site.
- Important: groundwater surveys guide planning and do not guarantee water.
`;
  return new Response(text, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, s-maxage=86400, stale-while-revalidate=604800" } });
}
