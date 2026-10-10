export type PublicBusinessFacts = {
  name: string;
  phone: string | null;
  address: string;
  email: string | null;
  description: string;
  serviceArea: string;
  services: string[];
};

export const PUBLIC_BUSINESS_NAME = "Eshan Borewells";
export const PUBLIC_BUSINESS_DESCRIPTION =
  "Borewell drilling, groundwater survey, casing and flushing for homes, apartments, farms and commercial properties in Bengaluru and nearby areas.";
export const PUBLIC_SERVICE_AREA =
  "Bengaluru and nearby areas, generally within about 100 km; confirm availability for the exact site.";
export const PUBLIC_SERVICE_NAMES = [
  "Borewell drilling",
  "Groundwater survey and water detection",
  "Borewell casing and completion",
  "Borewell flushing and redevelopment",
  "Pump installation coordination",
] as const;
