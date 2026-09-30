"use client";

import { useEffect, useRef, useState } from "react";
import { Droplets, Menu, X } from "lucide-react";

const links = [
  ["Services", "#services"],
  ["Our approach", "#approach"],
  ["Projects", "#projects"],
  ["Where we work", "#areas"],
  ["FAQs", "#questions"],
  ["Contact", "#contact"],
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
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<span aria-hidden="true">↗</span></a>)}
    </nav>}
  </div>;
}
