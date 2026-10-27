import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found | Eshan Borewells",
};

export default function NotFound() {
  return <main className="seo-page">
    <section className="seo-hero"><div className="shell"><span className="section-label">PAGE NOT FOUND</span><h1>This page does not exist.</h1><p>The link may be out of date. Explore our borewell drilling, groundwater survey, casing and flushing services from the homepage.</p><Link className="button button-primary" href="/">Go to the homepage <ArrowRight size={18} /></Link></div></section>
  </main>;
}
