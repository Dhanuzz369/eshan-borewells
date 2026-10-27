"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { LeadForm } from "./lead-form";

type EnquiryPopupProps = { whatsapp: string | null; phone: string | null; collectionEnabled: boolean };

// Shown once per browser, after the visitor has spent this long on the site.
export const ENQUIRY_POPUP_DELAY_MS = 60_000;
const SHOWN_KEY = "eshan-enquiry-popup-shown";

function alreadyShown() {
  try { return window.localStorage.getItem(SHOWN_KEY) === "1"; } catch { return false; }
}

function markShown() {
  try { window.localStorage.setItem(SHOWN_KEY, "1"); } catch { /* storage unavailable: the popup still shows only once per page view */ }
}

export function EnquiryPopup({ whatsapp, phone, collectionEnabled }: EnquiryPopupProps) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  function dismiss() {
    setOpen(false);
  }

  useEffect(() => {
    if (!whatsapp && !collectionEnabled) return;
    if (alreadyShown()) return;

    // Count only time the page is actually visible, so a background tab doesn't trigger it.
    let remaining = ENQUIRY_POPUP_DELAY_MS;
    let startedAt = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const show = () => {
      if (alreadyShown()) return;
      markShown();
      setOpen(true);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
    const start = () => { startedAt = Date.now(); timer = setTimeout(show, remaining); };
    const pause = () => { clearTimeout(timer); timer = undefined; remaining = Math.max(0, remaining - (Date.now() - startedAt)); };
    function onVisibilityChange() {
      if (document.visibilityState === "hidden") { if (timer) pause(); } else if (!timer) start();
    }

    if (document.visibilityState === "visible") start();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => { clearTimeout(timer); document.removeEventListener("visibilitychange", onVisibilityChange); };
  }, [whatsapp, collectionEnabled]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
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
    {open && <div className="enquiry-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) dismiss(); }}><section className="enquiry-dialog" role="dialog" aria-modal="true" aria-labelledby="enquiry-title"><button ref={closeRef} className="enquiry-close" type="button" aria-label="Close enquiry form" onClick={dismiss}><X size={21} /></button><div className="enquiry-copy"><span>PLANNING A BOREWELL?</span><h2 id="enquiry-title">Let&apos;s talk about your site.</h2><p>Share three details to start a useful conversation.</p></div><LeadForm source="popup" whatsapp={whatsapp} phone={phone} collectionEnabled={collectionEnabled} onDraftOpened={() => setOpen(false)} onSubmitted={() => setOpen(false)} /></section></div>}
  </>;
}
