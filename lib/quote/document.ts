import { accessOptions, serviceOptions, variableMaterials } from "./config";
import { formatRange, quotePrice, type CostLine, type DrillingSlab, type Quote } from "./calculate";
import type { QuoteInput } from "./schema";

export const QUOTE_VALIDITY_DAYS = 7;

export type QuotationData = {
  quoteNumber: string;
  quoteDate: string;
  validUntil: string;
  validityDays: number;
  customerName: string;
  mobile: string;
  location: string;
  service: string;
  machineType: string;
  propertyType: string;
  accessType: string;
  depth: string;
  pumpDetails: string | null;
  drillingBreakdown: DrillingSlab[];
  drillingSubtotal: number | null;
  fixedOperationalCosts: CostLine[];
  fixedSubtotal: number | null;
  materialsServices: CostLine[];
  variableMaterials: typeof variableMaterials;
  estimatedTotal: number | null;
  estimatedTotalLabel: string;
  estimatedTotalFormatted: string;
  pricePending: string[];
  quote: Quote;
};

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

export function buildQuotationData({ quote, quoteNumber, capturedAt, input, customer }: {
  quote: Quote;
  quoteNumber: string;
  capturedAt: string;
  input: QuoteInput;
  customer: { name: string; mobile: string };
}): QuotationData {
  const issued = new Date(capturedAt);
  const validUntil = new Date(issued.getTime() + QUOTE_VALIDITY_DAYS * 24 * 60 * 60 * 1000);
  const price = quotePrice(quote);
  const drilling = quote.breakdown.find((line) => line.key === "drilling");
  const fixed = quote.breakdown.filter((line) => line.key.startsWith("fixed-"));
  const fixedKnown = fixed.every((line) => line.min !== null && line.max !== null);
  const services = quote.breakdown.filter((line) => line.key !== "drilling" && !line.key.startsWith("fixed-"));
  const service = serviceOptions.find((option) => option.value === input.service)?.label || input.service;
  const access = accessOptions.find((option) => option.value === input.access)?.label || input.access;
  const pumpDetails = input.pump.required === "yes" ? `${input.pump.type}, ${input.pump.hp}` : input.pump.required === "unsure" ? "Recommendation required" : null;

  return {
    quoteNumber,
    quoteDate: dateFormatter.format(issued),
    validUntil: dateFormatter.format(validUntil),
    validityDays: QUOTE_VALIDITY_DAYS,
    customerName: customer.name,
    mobile: customer.mobile,
    location: [input.locality, input.city, input.pin].filter(Boolean).join(", "),
    service,
    machineType: quote.machine,
    propertyType: input.property,
    accessType: access,
    depth: input.depth ? `${input.depth} ft` : "Site assessment required",
    pumpDetails,
    drillingBreakdown: quote.drillingSlabs,
    drillingSubtotal: drilling?.min ?? null,
    fixedOperationalCosts: fixed,
    fixedSubtotal: fixedKnown ? fixed.reduce((sum, line) => sum + line.min!, 0) : null,
    materialsServices: services,
    variableMaterials,
    estimatedTotal: price.min === price.max ? price.min : null,
    estimatedTotalLabel: price.label,
    estimatedTotalFormatted: formatRange(price.min, price.max),
    pricePending: price.pending,
    quote,
  };
}
