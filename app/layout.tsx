import type { Metadata } from "next";
import { getProductionUrl } from "./site-url";
import "./globals.css";

const siteUrl = getProductionUrl();

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } } : {}),
  title: "Borewell Drilling & Water Survey in Bengaluru | Eshan Borewells",
  description: "Borewell drilling, groundwater survey, casing, flushing and water solutions for homes, apartments, farms and commercial sites across Bengaluru and nearby areas.",
  keywords: ["borewell drilling Bengaluru", "borewell drilling Bangalore", "groundwater survey Bengaluru", "water detection Bangalore", "borewell casing", "borewell flushing", "residential borewell", "apartment borewell", "farm borewell", "borewell services near me"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    title: "Eshan Borewells | Borewell Drilling in Bengaluru",
    description: "Site-aware borewell drilling and water solutions across Bengaluru and nearby areas.",
    type: "website",
    ...(siteUrl ? { url: siteUrl } : {}),
    ...(siteUrl ? { images: [{ url: "/hero-drilling.webp", width: 1672, height: 941, alt: "Borewell drilling rig at a Bengaluru property" }] } : {}),
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Eshan Borewells",
  url: siteUrl || "https://www.eshanborewells.com",
  inLanguage: "en-IN",
  description: "Borewell drilling, groundwater survey and water solutions in Bengaluru and nearby areas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-IN"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />{children}</body></html>;
}
