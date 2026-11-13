export type Brand = { theme: "eshan" | "daivik"; name: string; phone: string; whatsapp: string; address: string; website: string; email: string | null; tagline: string };

// Contact details and palette from https://www.daivikborewells.com/; address supplied by the owner.
export const daivikBrand: Brand = {
  theme: "daivik", name: "Daivik Borewells", phone: "+91 94484 17318", whatsapp: "919448417318", address: "BK Nagar, Yeshwanthpur, Bangalore",
  website: "www.daivikborewells.com", email: "daivikborewells@gmail.com", tagline: "Borewell drilling & complete water solutions",
};
export const eshanBrand = (phone: string, whatsapp: string, address: string): Brand => ({
  theme: "eshan", name: "Eshan Borewells", phone, whatsapp, address, website: "www.eshanborewells.com", email: null, tagline: "Borewell drilling & water solutions",
});
