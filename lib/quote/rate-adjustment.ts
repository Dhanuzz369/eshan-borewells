import { quotePricing, type Pricing } from "./config";

type DrillingConfiguration = Pricing["drilling"][string][string];

export function adjustedDrillingConfiguration(
  configuration: DrillingConfiguration | undefined,
  operation: "+" | "-" = "+",
  amount = 0,
  overrides: Record<string, string> = {},
): DrillingConfiguration | undefined {
  if (!Number.isFinite(amount) || amount < 0 || amount > 1_000_000 || Math.abs(amount * 100 - Math.round(amount * 100)) > 0.000001) {
    throw new RangeError("Enter an adjustment from ₹0 to ₹10,00,000 with at most two decimal places.");
  }
  if (operation !== "+" && operation !== "-") throw new RangeError("Select + or − for the rate adjustment.");
  const edited = Object.entries(overrides).filter(([, raw]) => raw.trim());
  if (!amount && !edited.length) return configuration;
  if (!configuration || configuration.slabs.some((slab) => slab.perFoot === null)) {
    throw new RangeError("Rate adjustments require a machine with configured drilling rates.");
  }
  const deltaPaise = Math.round(amount * 100) * (operation === "+" ? 1 : -1);
  let from = 0;
  const slabs = configuration.slabs.map((slab) => {
    // Overrides are keyed by the slab's start foot and replace the adjusted rate for that slab.
    const raw = (overrides[String(from)] ?? "").trim();
    const label = `${from} - ${slab.to} ft`;
    from = slab.to;
    if (raw) {
      const rate = Number(raw);
      if (!/^\d+(\.\d{1,2})?$/.test(raw) || rate > 1_000_000) throw new RangeError(`Enter a rate from ₹0 to ₹10,00,000 with at most two decimal places for ${label}.`);
      return { ...slab, perFoot: rate };
    }
    const ratePaise = Math.round(slab.perFoot! * 100) + deltaPaise;
    if (ratePaise < 0) throw new RangeError("The deduction cannot make any drilling slab rate negative.");
    return { ...slab, perFoot: ratePaise / 100 };
  });
  return { ...configuration, slabs };
}

export function drillingAdjustmentError(machine: string, diameter: string, operation: "+" | "-", amount: number, overrides: Record<string, string> = {}, pricing: Pricing = quotePricing): string | null {
  try {
    adjustedDrillingConfiguration(pricing.drilling[machine]?.[diameter] ?? pricing.drilling[machine]?.["*"], operation, amount, overrides);
    return null;
  } catch (error) {
    if (error instanceof RangeError) return error.message;
    throw error;
  }
}
