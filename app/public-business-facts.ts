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

// Internal safeguards: these items are not published as facts until evidence is supplied.
export const requiresOwnerVerification = [
  "Evidence supporting the company-reported 25+ years in the industry.",
  "Records or methodology supporting the company-reported 10,000+ borewell sites.",
  "Current service availability for each locality and the approximate 100 km coverage statement.",
  "Public review source, exact individual ratings, aggregate rating, and permission to publish testimonials.",
  "Project names, client references, photographs, outcomes, and permission to publish them.",
  "Public operating hours, email address, directions URL, and social profile URLs.",
  "Credentials, registrations, awards, survey methodology, and any accuracy or success-rate claims.",
] as const;
