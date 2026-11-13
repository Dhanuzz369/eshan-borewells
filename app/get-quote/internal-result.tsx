"use client";

import { useState } from "react";
import { ArrowLeft, Download, Phone, MessageCircle } from "lucide-react";
import type { QuotationData } from "@/lib/quote/document";
import type { InternalDocument } from "@/lib/quote/internal-document";
import type { Brand } from "./brands";

type Props = { quotation: QuotationData; document: InternalDocument; brand: Brand; onEdit: () => void };
function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return <div className="internal-table-scroll"><table className="internal-table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={index}>{row.map((value, column) => <td key={column}>{value}</td>)}</tr>)}</tbody></table></div>;
}

export function InternalResult({ quotation, document, brand, onEdit }: Props) {
  const { phone, whatsapp, address } = brand;
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function download() {
    setBusy(true); setError("");
    try { const { downloadInternalPdf } = await import("./internal-pdf"); await downloadInternalPdf({ quotation, document, brand }); }
    catch { setError("Could not prepare the PDF. Please try again."); }
    finally { setBusy(false); }
  }
  const message = [`${brand.name} ${document.title}`, `Customer: ${quotation.customerName}`, `Location: ${quotation.location}`, `Machine: ${quotation.machineType}`, `Depth: ${quotation.depth}`, ...(document.total ? [`Total: ${document.total}`] : [])].join("\n");
  return <article className={`internal-document shell brand-${brand.theme}`}>
    <div className="internal-document-tools"><button type="button" onClick={onEdit}><ArrowLeft size={16} />Edit details</button><button type="button" onClick={download} disabled={busy}><Download size={16} />{busy ? "Preparing PDF…" : "Download PDF"}</button></div>
    <header className="internal-document-heading"><div><span>{brand.name.toUpperCase()}</span><h1>{document.title}</h1><p>{address}<br />{phone} · {brand.website}{brand.email && <> · {brand.email}</>}</p></div><div className="internal-date">Date<span>{document.date || <i className="manual-blank" />}</span></div></header>
    <section className="internal-customer"><div><small>Customer & site</small><h2>{quotation.customerName}</h2><p>{quotation.mobile}<br />{quotation.location}</p></div><div><small>Job details</small><p>{quotation.machineType} · {quotation.depth}<br />{quotation.propertyType}</p></div></section>
    <section><h2>Drilling cost structure</h2><Table headers={document.drillingHeaders} rows={document.drillingRows} />{document.drillingSubtotal && <p className="internal-subtotal"><span>{document.labels.drilling}</span><strong>{document.drillingSubtotal}</strong></p>}</section>
    <section><h2>{document.mode === "invoice" ? document.labels.fixedHeading : "Fixed operational rates"}</h2><Table headers={["Description", document.mode === "invoice" ? "Amount" : "Rate"]} rows={document.fixedRows} />{document.fixedSubtotal && <p className="internal-subtotal"><span>{document.labels.fixed}</span><strong>{document.fixedSubtotal}</strong></p>}</section>
    <section><h2>{document.mode === "invoice" ? "Variable materials used" : "Variable material rates"}</h2><p className="internal-small">{document.mode === "invoice" ? "Entered quantities are included in the Estimated Bill total. Blank materials are not billed." : "Charged according to actual site usage; rates only."}</p><Table headers={document.materialHeaders} rows={document.materialRows} />{document.materialSubtotal && <p className="internal-subtotal"><span>{document.labels.materials}</span><strong>{document.materialSubtotal}</strong></p>}</section>
    {document.total && <section className="internal-payment"><p className="internal-subtotal"><span>{document.labels.total}</span><strong>{document.total}</strong></p>{document.payments.map(([label, value]) => <p className="internal-subtotal" key={label}><span>{label}</span><strong>{value || <i className="manual-blank" />}</strong></p>)}<p className="internal-small">Includes drilling, fixed operational costs and entered material quantities. Conditional charges and GST are not included.</p></section>}
    {document.yieldReport.length > 0 && <section className="internal-yield-report"><h2>Yield report</h2><dl>{document.yieldReport.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value || <span className="yield-writing-line" />}</dd></div>)}</dl></section>}
    {document.terms.length > 0 && <section><h2>Notes & terms</h2><ol className="quotation-terms">{document.terms.map((term) => <li key={term}>{term}</li>)}</ol></section>}
    <footer className="internal-document-footer"><a href={`tel:${phone.replace(/[^+\d]/g, "")}`}><Phone size={17} />{phone}</a><a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} />WhatsApp</a></footer>
    {error && <p className="quote-error" role="alert">{error}</p>}
  </article>;
}
