import { accessOptions, extras, quotePricing, type Pricing, type Rate } from "./config";
import type { QuoteInput } from "./schema";

export type CostLine = { key: string; label: string; min: Rate; max: Rate; detail: string };
export type DrillingSlab = { from: number; to: number; feet: number; rate: Rate; amount: Rate };
export type Quote = { breakdown: CostLine[]; drillingSlabs: DrillingSlab[]; estimatedMin: Rate; estimatedMax: Rate; subtotalMin: Rate; subtotalMax: Rate; taxPercent: Rate; machine: string; assumptions: string[]; pricingVersion: string };
export function quotePrice(quote: Quote) {
  const priced = quote.breakdown.filter((line) => line.min !== null && line.max !== null);
  const full = quote.estimatedMin !== null && quote.estimatedMax !== null;
  return {
    label: full ? "Estimated project total" : priced.length === 1 && priced[0].key === "drilling" ? "Drilling quotation" : "Priced items subtotal",
    min: full ? quote.estimatedMin : priced.length ? priced.reduce((sum, line) => sum + line.min!, 0) : null,
    max: full ? quote.estimatedMax : priced.length ? priced.reduce((sum, line) => sum + line.max!, 0) : null,
    full,
    pending: [...quote.breakdown.filter((line) => line.min === null || line.max === null).map((line) => line.label), ...(quote.taxPercent === null ? ["Tax"] : [])],
  };
}
export function formatRange(min: Rate, max: Rate): string {
  if (min === null || max === null) return "To be confirmed";
  const f = (n: number) => new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(n);
  return min === max ? `₹${f(min)}` : `₹${f(min)} – ₹${f(max)}`;
}
export function drillingSlabs(depth: number, configuration: Pricing["drilling"][string][string]): DrillingSlab[] {
  let previous = 0;
  return configuration.slabs.flatMap((slab) => {
    const from = previous;
    const feet = Math.max(0, Math.min(depth, slab.to) - previous);
    previous = slab.to;
    return feet ? [{ from, to: from + feet, feet, rate: slab.perFoot, amount: slab.perFoot === null ? null : feet * slab.perFoot }] : [];
  });
}
function slabCost(depth: number, configuration: Pricing["drilling"][string][string]): Rate {
  let previous = 0;
  let total = 0;
  for (const slab of configuration.slabs) {
    const feet = Math.max(0, Math.min(depth, slab.to) - previous);
    if (feet && slab.perFoot === null) return null;
    total += feet * (slab.perFoot ?? 0);
    previous = slab.to;
    if (depth <= previous) break;
  }
  if (depth > previous) return null;
  return Math.max(total, configuration.minimum ?? 0);
}
export function calculateQuote(input: QuoteInput, pricing: Pricing = quotePricing): Quote {
  const breakdown: CostLine[] = [];
  const assumptions: string[] = [];
  let appliedSlabs: DrillingSlab[] = [];
  const add = (key: string, label: string, rate: Rate, detail = "", max: Rate = rate) => breakdown.push({ key, label, min: rate, max, detail });
  const drilling = input.service === "new" || input.service === "complete";
  const pumpInstall = input.pump.required !== "no" || input.service === "pump" || input.service === "complete" || input.additionalServices.includes("pump-installation") || input.additionalServices.includes("pump-replacement");
  const multiply = (rate: Rate, quantity: number | null) => rate === null || quantity === null ? null : rate * quantity;
  if (drilling) {
    const depths = input.depth === null ? pricing.defaultDepth : { min: input.depth, max: input.depth };
    const config = pricing.drilling[input.machine]?.[input.diameter] || pricing.drilling[input.machine]?.["*"];
    if (config && input.depth !== null) appliedSlabs = drillingSlabs(input.depth, config);
    add("drilling", "Borewell drilling", config ? slabCost(depths.min, config) : null, input.depth ? `${input.depth} ft · ${input.diameter} · depth slab rates` : `${depths.min}–${depths.max} ft planning range`, config ? slabCost(depths.max, config) : null);
    for (const cost of pricing.fixedOperational) add(`fixed-${cost.key}`, cost.label, cost.amount);
    if (input.depth === null) assumptions.push("Depth is unknown. The planning range is not a groundwater prediction.");
    if (input.access === "unsure" || input.diameter === "Not Sure") assumptions.push("Machine access and borewell diameter require site assessment.");
    if (input.machine === "Sensor Rig") assumptions.push("The supplied Sensor Rig drilling rates are applied progressively. Suitability, diameter, additional work and taxes must be confirmed separately.");
  }
  const local = /^(bangalore|bengaluru)$/i.test(input.city.trim());
  if (!drilling) {
    const mobilization = local ? pricing.mobilization.bangalore : pricing.mobilization.outside;
    add("mobilization", "Mobilization / site travel", mobilization === null ? null : mobilization + (pricing.mobilization.localitySurcharges[input.locality.trim().toLowerCase()] ?? 0), local ? "Bengaluru" : "Outside Bengaluru; travel to be confirmed");
  }
  const casingSelected = input.casing.required !== "no" || input.additionalServices.includes("casing");
  if (casingSelected) {
    const confirmed = input.casing.required === "yes";
    add("casing", "Casing installation", confirmed ? multiply(pricing.casing[input.casing.material]?.[input.casing.diameter] ?? null, input.casing.depth) : null, confirmed ? `${input.casing.depth} ft · ${input.casing.material} · ${input.casing.diameter}` : "Requirement to be assessed");
  }
  if (input.pump.required !== "no") add("pump", "Pump supply", input.pump.required === "yes" ? pricing.pumps[input.pump.type]?.[input.pump.hp] ?? null : null, input.pump.required === "yes" ? `${input.pump.type} · ${input.pump.hp}` : "Pump requirement to be assessed");
  if (pumpInstall) {
    add("pump-labour", "Pump installation labour", pricing.installation.labour);
    add("cable", "Pump cable", multiply(pricing.installation.cablePerFoot, input.pump.installationDepth), input.pump.installationDepth ? `${input.pump.installationDepth} ft provisional length` : "Length to be assessed");
    add("pipe", "Pump pipe", multiply(pricing.installation.pipePerFoot, input.pump.installationDepth), input.pump.installationDepth ? `${input.pump.installationDepth} ft provisional length` : "Length to be assessed");
    add("accessories", "Pump accessories", pricing.installation.accessories);
    add("transport", "Pump transportation", pricing.installation.transportation);
    if (input.pump.panel) add("panel", "Starter / control panel", pricing.installation.panel);
    if (input.pump.electrical) add("electrical", "Electrical work", pricing.installation.electrical);
    assumptions.push("Pump capacity, pipe and cable lengths depend on water level, installation depth and usage. Our team must confirm selection.");
  }
  for (const key of [...new Set(input.additionalServices)]) {
    if (["pump-installation", "casing"].includes(key) || (key === "electrical" && pumpInstall && input.pump.electrical)) continue;
    // Turnkey scope is priced as a whole, not charged again over the existing components.
    if (key === "turnkey") { assumptions.push("Turnkey coordination and final scope require a site discussion."); add(key, "Turnkey coordination", null); continue; }
    add(key, extras.find((e) => e.value === key)!.label, pricing.extras[key] ?? null);
  }
  if (input.service === "existing" && input.additionalServices.length === 0 && input.pump.required === "no" && input.casing.required === "no") add("assessment", "Existing borewell work", null, "Select the work needed or request a site assessment");
  const complete = breakdown.every((line) => line.min !== null && line.max !== null);
  const subtotalMin = complete ? breakdown.reduce((sum, line) => sum + line.min!, 0) : null;
  const subtotalMax = complete ? breakdown.reduce((sum, line) => sum + line.max!, 0) : null;
  const tax = pricing.taxPercent;
  const estimatedMin = subtotalMin === null || tax === null ? null : Math.floor(subtotalMin * (1 + tax / 100) * pricing.allowance.low / pricing.rounding) * pricing.rounding;
  const estimatedMax = subtotalMax === null || tax === null ? null : Math.ceil(subtotalMax * (1 + tax / 100) * pricing.allowance.high / pricing.rounding) * pricing.rounding;
  if (!complete || tax === null) assumptions.push("One or more rates, requirements or applicable taxes need confirmation. No final total is available yet.");
  return { breakdown, drillingSlabs: appliedSlabs, estimatedMin, estimatedMax, subtotalMin, subtotalMax, taxPercent: tax, machine: drilling ? input.machine === "Not Sure" ? accessOptions.find((o) => o.value === input.access)!.machine : input.machine : "Installation / service access assessment", assumptions, pricingVersion: pricing.version };
}
