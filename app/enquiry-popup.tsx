"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle, X } from "lucide-react";

type EnquiryPopupProps = { whatsapp: string | null; email: string | null };

export function EnquiryPopup({ whatsapp, email }: EnquiryPopupProps) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!whatsapp && !email) return;
    if (sessionStorage.getItem("eshan-enquiry-seen")) return;
    const target = document.getElementById("services");
    if (!target) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setOpen(true);
        sessionStorage.setItem("eshan-enquiry-seen", "1");
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(target);
    return () => observer.disconnect();
  }, [whatsapp, email]);

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

  if (!whatsapp && !email) return null;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const area = String(data.get("area") || "").trim();
    const property = String(data.get("property") || "").trim();
    if (!name || !phone || !area || !property) {
      setError("Please complete all four fields so we can understand your enquiry.");
      return;
    }
    const message = `Hello Eshan Borewells, I would like to discuss a borewell site visit.\nName: ${name}\nPhone: ${phone}\nArea: ${area}\nProperty: ${property}`;
    if (whatsapp) {
      const destination = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
      const chat = window.open(destination, "_blank", "noopener,noreferrer");
      if (!chat) window.location.href = destination;
    } else if (email) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent("Borewell site enquiry")}&body=${encodeURIComponent(message)}`;
    }
    setOpen(false);
  }

  return <>
    {whatsapp && <a className="floating-whatsapp" href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hello Eshan Borewells, I would like to discuss a borewell site visit.")}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with Eshan Borewells on WhatsApp"><MessageCircle size={24} /></a>}
    {open && <div className="enquiry-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}><section className="enquiry-dialog" role="dialog" aria-modal="true" aria-labelledby="enquiry-title"><button ref={closeRef} className="enquiry-close" type="button" aria-label="Close enquiry form" onClick={() => setOpen(false)}><X size={21} /></button><div className="enquiry-copy"><span>PLANNING A BOREWELL?</span><h2 id="enquiry-title">Let&apos;s talk about your site.</h2><p>Four quick details are enough to start a useful conversation.</p></div><form onSubmit={submit} noValidate><label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label><label>Phone number<input name="phone" autoComplete="tel" inputMode="tel" required placeholder="Your number" /></label><label>Area or locality<input name="area" autoComplete="address-level2" required placeholder="e.g. Kanakapura Road" /></label><label>Property type<select name="property" required defaultValue=""><option value="" disabled>Select one</option><option>Home</option><option>Apartment or layout</option><option>Farm</option><option>Commercial site</option><option>Industrial site</option></select></label>{error && <p className="enquiry-error" role="alert">{error}</p>}<button className="enquiry-submit" type="submit">{whatsapp ? "Continue on WhatsApp" : "Continue by email"}<ArrowRight size={18} /></button><p className="enquiry-privacy">Submitting opens {whatsapp ? "WhatsApp" : "your email app"} with your details. Nothing is stored on this site.</p></form></section></div>}
  </>;
}
