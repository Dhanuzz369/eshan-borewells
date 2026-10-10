import {
  PUBLIC_BUSINESS_DESCRIPTION,
  PUBLIC_BUSINESS_NAME,
  PUBLIC_SERVICE_AREA,
  PUBLIC_SERVICE_NAMES,
  type PublicBusinessFacts,
} from "./public-business-facts";

// Owner-provided public details. Email remains unconfigured until supplied.
export const BUSINESS_PHONE = process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+91 98447 75905";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919844775905";
export const BUSINESS_EMAIL = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "[EMAIL]";
export const BUSINESS_ADDRESS = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "6th Block, Rajajinagar, Bengaluru";

export const publicBusinessFacts: PublicBusinessFacts = {
  name: PUBLIC_BUSINESS_NAME,
  phone: /^\+?[\d\s()-]{8,}$/.test(BUSINESS_PHONE) ? BUSINESS_PHONE : null,
  address: BUSINESS_ADDRESS,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(BUSINESS_EMAIL) ? BUSINESS_EMAIL : null,
  description: PUBLIC_BUSINESS_DESCRIPTION,
  serviceArea: PUBLIC_SERVICE_AREA,
  services: [...PUBLIC_SERVICE_NAMES],
};
