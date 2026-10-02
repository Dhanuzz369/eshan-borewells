export function getProductionUrl(): string | null {
  // Keep production canonical URLs on the business domain. A preview can opt into
  // its own canonical explicitly with NEXT_PUBLIC_SITE_URL when required.
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://www.eshanborewells.com";

  try {
    const url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    return url.protocol === "https:" || url.protocol === "http:" ? url.origin : null;
  } catch {
    return null;
  }
}
