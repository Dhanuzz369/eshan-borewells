"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { LeadForm } from "./lead-form";

type EnquiryPopupProps = { whatsapp: string | null; phone: string | null; collectionEnabled: boolean };

export function EnquiryPopup({ whatsapp, phone, collectionEnabled }: EnquiryPopupProps) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!whatsapp && !collectionEnabled) return;
    if (sessionStorage.getItem("eshan-enquiry-seen")) return;
    const target = document.getElementById("services");
    if (!target) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting && !window.location.hash) {
        setOpen(true);
        sessionStorage.setItem("eshan-enquiry-seen", "1");
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(target);
    return () => observer.disconnect();
  }, [whatsapp, collectionEnabled]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const dialog = closeRef.current?.closest(".enquiry-dialog");
      const focusable = dialog?.querySelectorAll<HTMLElement>("button, input, select, a[href]");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = previousOverflow; };
  }, [open]);

  if (!whatsapp && !collectionEnabled) return null;

  return <>
    {whatsapp && <a className="floating-whatsapp" href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hello Eshan Borewells, I would like to discuss a borewell site visit.")}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with Eshan Borewells on WhatsApp"><MessageCircle size={24} /></a>}
    {open && <div className="enquiry-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}><section className="enquiry-dialog" role="dialog" aria-modal="true" aria-labelledby="enquiry-title"><button ref={closeRef} className="enquiry-close" type="button" aria-label="Close enquiry form" onClick={() => setOpen(false)}><X size={21} /></button><div className="enquiry-copy"><span>PLANNING A BOREWELL?</span><h2 id="enquiry-title">Let&apos;s talk about your site.</h2><p>Share three details to start a useful conversation.</p></div><LeadForm source="popup" whatsapp={whatsapp} phone={phone} collectionEnabled={collectionEnabled} onDraftOpened={() => setOpen(false)} /></section></div>}
  </>;
}
