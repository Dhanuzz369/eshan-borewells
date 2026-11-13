export type Brand = { name: string; phone: string; whatsapp: string; address: string; website: string; email: string | null; tagline: string };

// Details as published on https://www.daivikborewells.com/ (no street address is listed there).
export const daivikBrand: Brand = {
  name: "Daivik Borewells", phone: "+91 94484 17318", whatsapp: "919448417318", address: "Bengaluru, Karnataka",
  website: "www.daivikborewells.com", email: "daivikborewells@gmail.com", tagline: "Borewell drilling & complete water solutions",
};
export const eshanBrand = (phone: string, whatsapp: string, address: string): Brand => ({
  name: "Eshan Borewells", phone, whatsapp, address, website: "www.eshanborewells.com", email: null, tagline: "Borewell drilling & water solutions",
});
