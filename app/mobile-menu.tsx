"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["Services", "#services"], ["Our approach", "#approach"], ["Where we work", "#areas"], ["FAQs", "#questions"], ["Contact", "#contact"]];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <div className="mobile-menu"><button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>{open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}</div>;
}
