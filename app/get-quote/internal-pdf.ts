import { jsPDF } from "jspdf";
import type { QuotationData } from "@/lib/quote/document";
import type { InternalDocument } from "@/lib/quote/internal-document";

type Props = { quotation: QuotationData; document: InternalDocument; phone: string; address: string };
export async function downloadInternalPdf(props: Props) {
  const response = await fetch("/fonts/NotoSans-Bold.ttf");
  if (!response.ok) throw new Error("PDF font unavailable");
  const bytes = new Uint8Array(await response.arrayBuffer());
  let binary = ""; for (const byte of bytes) binary += String.fromCharCode(byte);
  renderInternalPdf({ ...props, fontBase64: btoa(binary) }).save(`Eshan-Borewells-${props.document.mode === "invoice" ? "Invoice" : "Estimate"}.pdf`);
}

export function renderInternalPdf({ quotation, document, phone, address, fontBase64 }: Props & { fontBase64: string }) {
  const pdf = new jsPDF({ unit: "mm", format: "a4" });
  pdf.addFileToVFS("NotoSans-Bold.ttf", fontBase64);
  pdf.addFont("NotoSans-Bold.ttf", "Noto", "bold");
  pdf.setFont("Noto", "bold");
  pdf.setProperties({ title: `Eshan Borewells ${document.title}`, author: "Eshan Borewells" });
  let y = 0;
  let tableHeaders: string[] = [];
  const text = (value: string, x: number, at: number, size = 10, align: "left" | "right" = "left") => { pdf.setFontSize(size); pdf.setTextColor(19, 44, 59); pdf.text(value, x, at, { align }); };
  function header() {
    pdf.setFillColor(19,44,59); pdf.rect(0,0,210,30,"F"); pdf.setTextColor(255,255,255); pdf.setFontSize(19); pdf.text("ESHAN BOREWELLS",16,14); pdf.setFontSize(9); pdf.text(document.title,16,23); y=39;
  }
  function ensure(height: number) { if (y+height > 272) { pdf.addPage(); header(); } }
  function paragraph(value: string, size=9, width=178) { pdf.setFontSize(size); const lines=pdf.splitTextToSize(value,width) as string[]; for(const row of lines){ensure(5);text(row,16,y,size);y+=5;} }
  function section(title: string) { tableHeaders=[];ensure(22); y+=5;text(title,16,y,12);y+=7; }
  function row(values: string[], heading=false) {
    const last=values.length-1;
    const widths=values.length===3?[87,43,48]:[130,48];
    pdf.setFontSize(heading?8.5:9);
    const lines=values.map((value,index)=>pdf.splitTextToSize(value,widths[index]-8) as string[]);
    const height=Math.max(8.5,...lines.map((part)=>part.length*4.7+3.5));
    if (y + height > 272) { ensure(height); if (!heading && tableHeaders.length) row(tableHeaders,true); }
    if (heading) tableHeaders=values;
    if(heading){pdf.setFillColor(237,243,245);pdf.rect(16,y-4,178,height,"F");}
    let x=20;
    lines.forEach((part,index)=>{part.forEach((value,line)=>text(value,index===last?190:x,y+line*4.7,heading?8.5:9,index===last?"right":"left"));x+=widths[index];});
    y+=height;pdf.setDrawColor(221,230,234);pdf.line(16,y-4,194,y-4);
  }
  function summary(label:string,value:string) { ensure(13);text(label,20,y+2,10);if(value)text(value,190,y+2,11,"right");else{pdf.setDrawColor(130,145,155);pdf.line(146,y+3,190,y+3);}y+=12; }
  header();
  text("Date",145,y);if(document.date)text(document.date,194,y,10,"right");else{pdf.setDrawColor(130,145,155);pdf.line(157,y+1,194,y+1);}y+=10;
  paragraph(quotation.customerName,13);paragraph(`${quotation.mobile}\n${quotation.location}`,10);y+=3;
  paragraph(`${quotation.machineType} | ${quotation.depth} | ${quotation.propertyType}`,10);
  section("Drilling cost structure");row(document.drillingHeaders,true);for(const values of document.drillingRows)row(values);
  if(document.drillingSubtotal)summary("Drilling subtotal",document.drillingSubtotal);
  section(document.mode==="invoice"?"Fixed operational costs":"Fixed operational rates");row(["Description",document.mode==="invoice"?"Amount":"Rate"],true);for(const values of document.fixedRows)row(values);
  if(document.fixedSubtotal)summary("Fixed subtotal",document.fixedSubtotal);
  if(document.total){summary("Invoice total",document.total);for(const[label,value]of document.payments)summary(label,value);paragraph("Drilling plus fixed operational costs. Materials and conditional charges are separate. GST is not included.",8.5);}
  section("Variable material rates");paragraph("Charged according to actual site usage, separately from drilling and operational charges.",8.5);y+=2;row(["Material","Rate"],true);for(const values of document.materialRows)row(values);
  if(document.terms.length){section("Notes & terms");for(const[index,term]of document.terms.entries()){paragraph(`${index+1}. ${term}`,9);y+=3;}}
  section("Eshan Borewells");paragraph(address,9);paragraph(`${phone} | www.eshanborewells.com`,9);
  const count=pdf.getNumberOfPages();for(let page=1;page<=count;page++){pdf.setPage(page);pdf.setDrawColor(221,230,234);pdf.line(16,282,194,282);text(phone,16,288,8);pdf.link(16,284,65,7,{url:`tel:${phone.replace(/[^+\d]/g,"")}`});text(`${page} / ${count}`,194,288,8,"right");}
  return pdf;
}
