import { z } from "zod";
import { casingDiameters, casingMaterials, diameterOptions, machineOptions, propertyOptions, pumpCapacities, pumpTypes } from "./config";

export function normalizeMobile(value: string): string | null {
  let digits = value.replace(/[\s()+-]/g, "");
  if (digits.startsWith("0091") && digits.length === 14) digits = digits.slice(4);
  else if (digits.startsWith("91") && digits.length === 12) digits = digits.slice(2);
  else if (digits.startsWith("0") && digits.length === 11) digits = digits.slice(1);
  return /^[6-9]\d{9}$/.test(digits) && !/^(\d)\1{9}$/.test(digits) ? `+91${digits}` : null;
}
const decision = z.enum(["yes", "no", "unsure"]);
const text = z.string().trim().min(1).max(120);
export const quoteInputSchema = z.object({
  service: z.enum(["new", "existing", "pump", "complete"]),
  locality: text,
  city: text,
  pin: z.string().regex(/^(?:[1-9]\d{5})?$/),
  property: z.enum(propertyOptions),
  access: z.enum(["open", "narrow", "restricted", "unsure"]),
  machine: z.enum(machineOptions),
  depth: z.number().int().min(50).max(2000).nullable(),
  diameter: z.enum(diameterOptions),
  casing: z.object({ required: decision, material: z.enum(casingMaterials), diameter: z.enum(casingDiameters), depth: z.number().int().min(1).max(2000) }),
  pump: z.object({ required: decision, type: z.enum(pumpTypes), hp: z.enum(pumpCapacities), installationDepth: z.number().int().min(1).max(2000).nullable(), panel: z.boolean(), electrical: z.boolean() }),
  additionalServices: z.array(z.enum(["cleaning", "deepening", "testing", "pump-installation", "pump-replacement", "electrical", "casing", "flushing", "inspection", "turnkey"])).max(10).transform((items) => [...new Set(items)]),
}).superRefine((input, ctx) => {
  if ((input.service === "new" || input.service === "complete") && input.depth && input.casing.required === "yes" && input.casing.depth > input.depth) ctx.addIssue({ code: "custom", path: ["casing", "depth"], message: "Casing depth cannot exceed borewell depth." });
});
export type QuoteInput = z.infer<typeof quoteInputSchema>;
export const customerSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100).refine((s) => /\p{L}/u.test(s), "Please enter your name."),
  mobile: z.string().max(25).transform(normalizeMobile).refine((s) => s !== null, "Enter a valid Indian mobile number."),
  email: z.union([z.literal(""), z.string().trim().email().max(150)]).default(""),
  consent: z.literal(true),
});
export const submissionSchema = z.object({
  input: quoteInputSchema,
  customer: customerSchema,
  requestId: z.string().uuid(),
  website: z.string().max(200).optional(),
});
export type Submission = z.infer<typeof submissionSchema>;
export const initialInput: QuoteInput = {
  service: "new", locality: "", city: "Bengaluru", pin: "", property: "Home / Villa", access: "unsure", machine: "Sensor Rig", depth: 500, diameter: "Not Sure",
  casing: { required: "unsure", material: "Steel", diameter: "6 inch", depth: 40 },
  pump: { required: "no", type: "Submersible Pump", hp: "Not Sure", installationDepth: null, panel: false, electrical: false },
  additionalServices: [],
};
