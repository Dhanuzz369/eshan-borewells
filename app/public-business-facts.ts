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

// Public pages that describe each listed service, used in the schema offer catalog.
export const PUBLIC_SERVICE_PAGES: Partial<Record<(typeof PUBLIC_SERVICE_NAMES)[number], string>> = {
  "Borewell drilling": "/borewell-drilling-bengaluru",
  "Groundwater survey and water detection": "/groundwater-survey-water-detection-bengaluru",
  "Borewell casing and completion": "/borewell-casing-installation-bengaluru",
  "Borewell flushing and redevelopment": "/borewell-flushing-redevelopment-bengaluru",
};

// Google Business Profile supplied by the owner (checked 2026-10-27).
export const PUBLIC_GOOGLE_PROFILE_URL = "https://maps.google.com/?cid=2493916436492727064";
export const PUBLIC_OPENING_HOURS = { opens: "09:00", closes: "22:00", label: "Open daily, 9 am to 10 pm" } as const;
export const PUBLIC_GOOGLE_RATING = { rating: 4.9, checked: "October 2026" } as const;

// Internal safeguards: these items are not published as facts until evidence is supplied.
export const requiresOwnerVerification = [
  "Evidence supporting the company-reported 25+ years in the industry.",
  "Records or methodology supporting the company-reported 10,000+ borewell sites.",
  "Current service availability for each locality and the approximate 100 km coverage statement.",
  "Permission to publish the individual testimonials shown on the site, and their exact individual review ratings.",
  "Project names, client references, photographs, outcomes, and permission to publish them.",
  "Public email address and social profile URLs other than the Google Business Profile.",
  "Credentials, registrations, awards, survey methodology, and any accuracy or success-rate claims.",
] as const;
