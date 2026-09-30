import type { Metadata } from "next";
import { getProductionUrl } from "./site-url";
import "./globals.css";

const siteUrl = getProductionUrl();

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } } : {}),
  title: "Borewell Drilling in Bengaluru | Eshan Borewells",
  description: "Borewell drilling, groundwater survey, casing and flushing for homes, apartments, farms and commercial sites in Bengaluru and nearby areas within about 100 km.",
  openGraph: {
    title: "Eshan Borewells | Borewell Drilling in Bengaluru",
    description: "Site-aware borewell drilling and water solutions across Bengaluru and nearby areas.",
    type: "website",
    ...(siteUrl ? { url: siteUrl } : {}),
    ...(siteUrl ? { images: [{ url: "/hero-drilling.png", width: 1536, height: 1024, alt: "Borewell drilling rig at a Bengaluru property" }] } : {}),
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-IN"><body>{children}</body></html>;
}
