import { quotePricing, type Pricing } from "./config";

type DrillingConfiguration = Pricing["drilling"][string][string];

export function adjustedDrillingConfiguration(
  configuration: DrillingConfiguration | undefined,
  operation: "+" | "-" = "+",
  amount = 0,
): DrillingConfiguration | undefined {
  if (!Number.isFinite(amount) || amount < 0 || amount > 1_000_000 || Math.abs(amount * 100 - Math.round(amount * 100)) > 0.000001) {
    throw new RangeError("Enter an adjustment from ₹0 to ₹10,00,000 with at most two decimal places.");
  }
  if (operation !== "+" && operation !== "-") throw new RangeError("Select + or − for the rate adjustment.");
  if (!amount) return configuration;
  if (!configuration || configuration.slabs.some((slab) => slab.perFoot === null)) {
    throw new RangeError("Rate adjustments require a machine with configured drilling rates.");
  }
  const deltaPaise = Math.round(amount * 100) * (operation === "+" ? 1 : -1);
  const slabs = configuration.slabs.map((slab) => {
    const ratePaise = Math.round(slab.perFoot! * 100) + deltaPaise;
    if (ratePaise < 0) throw new RangeError("The deduction cannot make any drilling slab rate negative.");
    return { ...slab, perFoot: ratePaise / 100 };
  });
  return { ...configuration, slabs };
}

export function drillingAdjustmentError(machine: string, diameter: string, operation: "+" | "-", amount: number, pricing: Pricing = quotePricing): string | null {
  try {
    adjustedDrillingConfiguration(pricing.drilling[machine]?.[diameter] ?? pricing.drilling[machine]?.["*"], operation, amount);
    return null;
  } catch (error) {
    if (error instanceof RangeError) return error.message;
    throw error;
  }
}
