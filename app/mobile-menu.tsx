"use client";

import { useState } from "react";
import { ArrowUpRight, BadgeCheck, HelpCircle, MapPin, Menu, Phone, Route, Wrench, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services", Icon: Wrench },
  { label: "Our approach", href: "#approach", Icon: Route },
  { label: "Why us", href: "#why-us", Icon: BadgeCheck },
  { label: "Where we work", href: "#areas", Icon: MapPin },
  { label: "FAQs", href: "#questions", Icon: HelpCircle },
  { label: "Contact", href: "#contact", Icon: Phone },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <div className="mobile-menu"><button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>{open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">{links.map(({ label, href, Icon }) => <a key={href} href={href} onClick={() => setOpen(false)}><Icon size={18} strokeWidth={1.8} aria-hidden="true" /><span>{label}</span><ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" /></a>)}</nav>}</div>;
}
