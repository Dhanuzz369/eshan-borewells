// Owner-approved rates belong here (INR). null means unconfigured, never free.
// Numeric rates in tests are fixtures only, not Eshan Borewells prices.
export const serviceOptions = [
  { value: "new", label: "New Borewell", description: "Drill a completely new borewell." },
  { value: "existing", label: "Existing Borewell", description: "Cleaning, deepening or work on an existing well." },
  { value: "pump", label: "Pump Installation", description: "A pump and installation for your existing well." },
  { value: "complete", label: "Complete Borewell Solution", description: "Drilling, casing, pump and related work." },
] as const;
export const propertyOptions = ["Home / Villa", "Apartment / Layout", "Farm / Agricultural Land", "Commercial Property", "Industrial Property", "Other"] as const;
export const accessOptions = [
  { value: "open", label: "Open Access", description: "A large drilling vehicle can reach the site.", machine: "Large Rig" },
  { value: "narrow", label: "Narrow Access", description: "A smaller vehicle may be needed.", machine: "Compact Rig" },
  { value: "restricted", label: "Very Restricted Access", description: "A built-up site or a very narrow entry.", machine: "Robo / Compact Rig" },
  { value: "unsure", label: "Not Sure", description: "Let us assess the access together.", machine: "Site assessment required" },
] as const;
export const diameterOptions = ["Standard", "Large", "Not Sure"] as const;
export const machineOptions = ["Sensor Rig", "Compact Rig", "Robo Rig", "Not Sure"] as const;
export const sensorSlabs = [
  { to: 300, perFoot: 100 }, { to: 400, perFoot: 110 }, { to: 500, perFoot: 130 },
  { to: 600, perFoot: 160 }, { to: 700, perFoot: 190 }, { to: 800, perFoot: 225 },
  { to: 900, perFoot: 255 }, { to: 1000, perFoot: 305 }, { to: 1100, perFoot: 405 },
  { to: 1200, perFoot: 505 }, { to: 1300, perFoot: 605 }, { to: 1400, perFoot: 705 },
  { to: 1500, perFoot: 805 }, { to: 1600, perFoot: 905 }, { to: 1700, perFoot: 1005 },
  { to: 1800, perFoot: 1155 }, { to: 1900, perFoot: 1305 }, { to: 2000, perFoot: 1455 },
];
export const casingMaterials = ["Steel", "PVC"] as const;
export const casingDiameters = ["6 inch", "7 inch"] as const;
export const pumpTypes = ["Submersible Pump", "Open Well Pump", "Other"] as const;
export const pumpCapacities = ["1 HP", "1.5 HP", "2 HP", "3 HP", "5 HP", "7.5 HP", "10 HP", "Not Sure"] as const;
export const extras = [
  { value: "cleaning", label: "Borewell cleaning" }, { value: "deepening", label: "Borewell deepening" },
  { value: "testing", label: "Water testing" }, { value: "pump-installation", label: "Pump installation" },
  { value: "pump-replacement", label: "Pump replacement" }, { value: "electrical", label: "Electrical connection" },
  { value: "casing", label: "Casing installation" }, { value: "flushing", label: "Flushing / development" },
  { value: "inspection", label: "Site inspection" }, { value: "turnkey", label: "Complete turnkey solution" },
] as const;
export const localities = ["Kanakapura Road", "Thalaghatpura", "Vajrahalli", "JP Nagar", "Bannerghatta", "NICE Road", "Electronic City", "Sarjapur", "Uttarahalli", "Kengeri", "Ramanagara", "Rajajinagar"];
export const disclaimer = "This is an estimated quotation based on the information provided online. Final pricing may vary based on actual site conditions, drilling depth, machine access, casing requirements, water level, materials and installation requirements. Water, depth, yield and final price are not guaranteed.";
export const fixedOperationalCosts = [
  { key: "setting", label: "Setting Charges (₹0/ft)", amount: 0 },
  { key: "transport-labour", label: "Transport & Labour", amount: 2000 },
  { key: "food", label: "Food Charge", amount: 2000 },
] as const;
export const variableMaterials = [
  { label: '10" PVC Pipe', rate: 460, unit: "ft" },
  { label: '12" PVC Pipe', rate: 760, unit: "ft" },
  { label: '7" M.S. Pipe', rate: 460, unit: "ft" },
  { label: '7" M.S. Heavy Pipe', rate: 560, unit: "ft" },
  { label: '7" M.S. Welding', rate: 300, unit: "each" },
  { label: '7" M.S. Collar', rate: 300, unit: "each" },
  { label: '7" M.S. Cap', rate: 300, unit: "each" },
  { label: '6" PVC Slotted Casing', rate: 130, unit: "ft" },
  { label: "Water Injection", rate: 8, unit: "ft" },
] as const;

export type Rate = number | null;
export type Pricing = {
  version: string;
  defaultDepth: { min: number; max: number };
  allowance: { low: number; high: number };
  taxPercent: Rate;
  rounding: number;
  drilling: Record<string, Record<string, { slabs: { to: number; perFoot: Rate }[]; minimum: Rate }>>;
  access: Record<string, Rate>;
  mobilization: { bangalore: Rate; outside: Rate; localitySurcharges: Record<string, number> };
  setup: Rate;
  casing: Record<string, Record<string, Rate>>;
  pumps: Record<string, Record<string, Rate>>;
  installation: { labour: Rate; cablePerFoot: Rate; pipePerFoot: Rate; panel: Rate; electrical: Rate; transportation: Rate; accessories: Rate };
  extras: Record<string, Rate>;
  fixedOperational: readonly { key: string; label: string; amount: number }[];
  variableMaterials: readonly { label: string; rate: number; unit: string }[];
};
const drillingConfiguration = () => Object.fromEntries(diameterOptions.map((d) => [d, { slabs: [{ to: 2000, perFoot: null }], minimum: null }]));
export const quotePricing: Pricing = {
  version: "sensor-approved-2026-10-04",
  defaultDepth: { min: 300, max: 800 },
  allowance: { low: 0.9, high: 1.1 }, // Estimate band, not a business rate.
  taxPercent: null,
  rounding: 1000,
  // Sensor rates were supplied without diameter-specific adjustments. A '*' entry
  // means the supplied base rate; do not invent a diameter surcharge.
  drilling: { "Sensor Rig": { "*": { slabs: sensorSlabs, minimum: null } }, "Compact Rig": drillingConfiguration(), "Robo Rig": drillingConfiguration() },
  access: { open: null, narrow: null, restricted: null },
  mobilization: { bangalore: null, outside: null, localitySurcharges: {} },
  setup: null,
  casing: Object.fromEntries(casingMaterials.map((m) => [m, Object.fromEntries(casingDiameters.map((d) => [d, null]))])),
  pumps: Object.fromEntries(pumpTypes.map((t) => [t, Object.fromEntries(pumpCapacities.filter((hp) => hp !== "Not Sure").map((hp) => [hp, null]))])),
  installation: { labour: null, cablePerFoot: null, pipePerFoot: null, panel: null, electrical: null, transportation: null, accessories: null },
  extras: Object.fromEntries(extras.map((e) => [e.value, null])),
  fixedOperational: fixedOperationalCosts,
  variableMaterials,
};
