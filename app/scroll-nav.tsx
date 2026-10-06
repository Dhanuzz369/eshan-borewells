"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BadgeCheck, Calculator, Droplets, HelpCircle, MapPin, Menu, Phone, Route, Wrench, X } from "lucide-react";

const links = [
  { label: "Get Quote", href: "/get-quote", Icon: Calculator },
  { label: "Services", href: "#services", Icon: Wrench },
  { label: "Our approach", href: "#approach", Icon: Route },
  { label: "Why us", href: "#why-us", Icon: BadgeCheck },
  { label: "Where we work", href: "#areas", Icon: MapPin },
  { label: "FAQs", href: "#questions", Icon: HelpCircle },
  { label: "Contact", href: "#contact", Icon: Phone },
];

export function ScrollNav() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting);
      if (entry.isIntersecting) setOpen(false);
    }, { threshold: 0 });
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeOutside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open]);

  return <div ref={navRef} className={`scroll-nav ${visible ? "scroll-nav-visible" : ""} ${open ? "scroll-nav-open" : ""}`}>
    <button type="button" className="scroll-nav-trigger" aria-expanded={open} aria-controls="scroll-nav-links" aria-label={open ? "Close site menu" : "Open site menu"} tabIndex={visible ? 0 : -1} onClick={() => setOpen(!open)}>
      <span className="scroll-nav-brand"><Droplets size={18} strokeWidth={2.2} /></span>
      <span>Explore Eshan</span>
      <span className="scroll-nav-icon">{open ? <X size={18} /> : <Menu size={18} />}</span>
    </button>
    {open && visible && <nav id="scroll-nav-links" className="scroll-nav-links" aria-label="Quick navigation">
      {links.map(({ label, href, Icon }) => <a key={href} href={href} onClick={() => setOpen(false)}><span className="scroll-nav-link-icon"><Icon size={17} strokeWidth={1.8} /></span><span className="scroll-nav-link-label">{label}</span><ArrowUpRight className="scroll-nav-link-arrow" size={16} strokeWidth={1.8} aria-hidden="true" /></a>)}
    </nav>}
  </div>;
}
