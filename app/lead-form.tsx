"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

type LeadFormProps = {
  source: "footer" | "popup";
  whatsapp: string | null;
  phone: string | null;
  collectionEnabled: boolean;
  onDraftOpened?: () => void;
};

type LeadDetails = { name: string; phone: string; siteLocation: string };

export function LeadForm({ source, whatsapp, phone, collectionEnabled, onDraftOpened }: LeadFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  function readDetails(): LeadDetails | null {
    if (!formRef.current) return null;
    const form = new FormData(formRef.current);
    const details = {
      name: String(form.get("name") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      siteLocation: String(form.get("siteLocation") || "").trim(),
    };
    if (!details.name || !details.phone || !details.siteLocation) {
      setMessage("Please enter your name, phone number and site location.");
      return null;
    }
    if (!/^\d{10,15}$/.test(details.phone.replace(/\D/g, ""))) {
      setMessage("Please enter a valid phone number with 10 to 15 digits.");
      return null;
    }
    setMessage("");
    return details;
  }

  function openWhatsappDraft(details: LeadDetails) {
    if (!whatsapp) return;
    const text = `Hello Eshan Borewells, I would like to discuss a borewell site visit.\nName: ${details.name}\nPhone: ${details.phone}\nSite location: ${details.siteLocation}`;
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;
    const chat = window.open(url, "_blank", "noopener,noreferrer");
    if (!chat) window.location.href = url;
    onDraftOpened?.();
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const details = readDetails();
    if (!details) return;
    if (!collectionEnabled) {
      openWhatsappDraft(details);
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...details, source, website: String(new FormData(event.currentTarget).get("website") || "") }),
      });
      if (!response.ok) throw new Error("Delivery failed");
      setStatus("sent");
      setMessage("Thank you. We received your site details and will get in touch.");
      formRef.current?.reset();
    } catch {
      setStatus("error");
      setMessage("We could not save your enquiry. Please use WhatsApp or call us instead.");
    }
  }

  return <form ref={formRef} className={`lead-form lead-form-${source}`} onSubmit={submit} noValidate>
    <div className="lead-fields">
      <label>Name<input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></label>
      <label>Phone number<input name="phone" autoComplete="tel" inputMode="tel" required maxLength={25} placeholder="Your number" /></label>
      <label>Site location<input name="siteLocation" autoComplete="address-level2" required maxLength={150} placeholder="e.g. Rajajinagar" /></label>
    </div>
    <div className="lead-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    {message && <p className={`lead-message ${status === "sent" ? "lead-message-success" : ""}`} role="status">{message}</p>}
    <div className="lead-actions">
      <button type="submit" className="lead-submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : collectionEnabled ? "Send enquiry" : "Continue on WhatsApp"}<ArrowRight size={18} /></button>
      {collectionEnabled && whatsapp && <button type="button" className="lead-whatsapp" onClick={() => { const details = readDetails(); if (details) openWhatsappDraft(details); }}><MessageCircle size={18} />Use WhatsApp instead</button>}
      {phone && <a className="lead-call" href={`tel:${phone.replace(/[^+\d]/g, "")}`}><Phone size={17} />Call now</a>}
    </div>
    <p className="lead-privacy">{collectionEnabled ? "We use your details only to respond to this borewell enquiry." : "Your details open as a WhatsApp draft. Tap Send there to share them with us. Nothing is stored on this site."}</p>
  </form>;
}
