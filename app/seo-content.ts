import { seoPages, type SeoPage } from "./seo-pages";

export type SeoContent = {
  pageType: "service" | "locality";
  directAnswer: string;
  considerations: string[];
  relatedSlugs: string[];
};

const seoContentBySlug: Record<string, SeoContent> = {
  "borewell-drilling-bengaluru": {
    pageType: "service",
    directAnswer: "Borewell drilling in Bengaluru should be planned around the exact property, equipment access, overhead clearance, working space and intended water use. Eshan Borewells discusses those site conditions before outlining a practical drilling approach; water availability and the final scope depend on the site.",
    considerations: ["Share the site location, entry width and overhead clearance.", "Explain the property type and intended water requirement.", "A site assessment helps determine which equipment and scope may suit the property."],
    relatedSlugs: ["groundwater-survey-water-detection-bengaluru", "residential-borewell-drilling-bengaluru", "apartment-borewell-drilling-bengaluru", "farm-agricultural-borewell-drilling-bengaluru"],
  },
  "groundwater-survey-water-detection-bengaluru": {
    pageType: "service",
    directAnswer: "A groundwater survey can inform borewell planning by considering available information about the property and its conditions. It is guidance for a decision, not a promise of water or a specific yield; groundwater varies between sites and the drilling outcome remains uncertain.",
    considerations: ["Provide the exact property location and any site plan available.", "Share known borewell or water history for the property.", "Use survey findings as one input to planning, alongside site conditions."],
    relatedSlugs: ["borewell-drilling-bengaluru", "residential-borewell-drilling-bengaluru", "farm-agricultural-borewell-drilling-bengaluru"],
  },
  "borewell-casing-installation-bengaluru": {
    pageType: "service",
    directAnswer: "Borewell casing is part of completing a borewell, and the appropriate material and installation scope depend on the ground, well depth and project requirements. Discuss the borewell details and site conditions before deciding what casing work is suitable.",
    considerations: ["Share the drilling depth and available borewell details.", "The casing plan depends on site and ground conditions.", "Confirm material, dimensions and quantities for the specific project."],
    relatedSlugs: ["borewell-drilling-bengaluru", "borewell-flushing-redevelopment-bengaluru", "apartment-borewell-drilling-bengaluru"],
  },
  "borewell-flushing-redevelopment-bengaluru": {
    pageType: "service",
    directAnswer: "Borewell flushing or redevelopment may be considered when an existing well needs attention, but the borewell should be assessed before work is selected. Its history, current condition, access and water flow help determine whether this service is appropriate.",
    considerations: ["Share the borewell age, depth and previous work if known.", "Describe any change in water flow or current issue.", "Site access and the borewell's condition affect the possible approach."],
    relatedSlugs: ["borewell-casing-installation-bengaluru", "borewell-drilling-bengaluru", "groundwater-survey-water-detection-bengaluru"],
  },
  "residential-borewell-drilling-bengaluru": {
    pageType: "service",
    directAnswer: "For a residential borewell in Bengaluru, first consider the property entrance, driveway, overhead clearance, nearby structures and available working area. These details help assess equipment access and the practical scope; each site needs individual planning.",
    considerations: ["Share entry width, turning space and overhead obstructions.", "Tell us whether the property is a house, villa or plot.", "Site photos can help discuss access before arranging a visit."],
    relatedSlugs: ["borewell-drilling-bengaluru", "groundwater-survey-water-detection-bengaluru", "apartment-borewell-drilling-bengaluru"],
  },
  "apartment-borewell-drilling-bengaluru": {
    pageType: "service",
    directAnswer: "An apartment borewell project needs early coordination around the entrance, available working space, movement through the property and the project's water requirement. Share these details so the equipment options and drilling scope can be discussed for that site.",
    considerations: ["Confirm the site entry route and any access restrictions.", "Identify the available work area and project contact.", "Share the intended water use and any relevant site plan."],
    relatedSlugs: ["borewell-drilling-bengaluru", "residential-borewell-drilling-bengaluru", "commercial-industrial-borewell-drilling-bengaluru"],
  },
  "farm-agricultural-borewell-drilling-bengaluru": {
    pageType: "service",
    directAnswer: "Farm and agricultural borewell planning starts with the land location, vehicle approach, available working space and intended water use. Open land may allow different equipment access than a built-up property, but groundwater conditions and drilling outcomes vary by site.",
    considerations: ["Share the land location and vehicle approach route.", "Explain the intended agricultural water use.", "Confirm site access and equipment suitability before scheduling work."],
    relatedSlugs: ["borewell-drilling-bengaluru", "groundwater-survey-water-detection-bengaluru", "commercial-industrial-borewell-drilling-bengaluru"],
  },
  "commercial-industrial-borewell-drilling-bengaluru": {
    pageType: "service",
    directAnswer: "Commercial and industrial borewell work should be planned around site operations, access, safety requirements, working space and the property's water needs. Sharing these details early helps establish the project scope and the next steps for a site discussion.",
    considerations: ["Identify site access and any operating-hour restrictions.", "Share the property type and intended water requirement.", "Coordinate the site contact and working area before planning a visit."],
    relatedSlugs: ["borewell-drilling-bengaluru", "apartment-borewell-drilling-bengaluru", "borewell-casing-installation-bengaluru"],
  },
  "borewell-drilling-rajajinagar": {
    pageType: "locality",
    directAnswer: "For borewell work in Rajajinagar, confirm the exact site, equipment entry route, overhead clearance and available working space first. Eshan Borewells is based in 6th Block, Rajajinagar, and discusses drilling and related services according to each project's requirements; confirm availability for the specific site.",
    considerations: ["Share the exact block or site location and property type.", "Describe the entrance, turning space and overhead clearance.", "Confirm availability and the appropriate scope before arranging a visit."],
    relatedSlugs: ["borewell-drilling-bengaluru", "groundwater-survey-water-detection-bengaluru", "residential-borewell-drilling-bengaluru"],
  },
  "borewell-drilling-whitefield": {
    pageType: "locality",
    directAnswer: "For a borewell project in Whitefield, start with the exact site location, property type, equipment access and available working area. These details help Eshan Borewells discuss a practical approach; confirm availability for the particular property before planning the work.",
    considerations: ["Provide the exact Whitefield locality and site address.", "Share entry width, overhead clearance and working space.", "Tell us whether the site is residential, apartment or commercial."],
    relatedSlugs: ["borewell-drilling-bengaluru", "apartment-borewell-drilling-bengaluru", "commercial-industrial-borewell-drilling-bengaluru"],
  },
  "borewell-drilling-electronic-city": {
    pageType: "locality",
    directAnswer: "For a borewell project in Electronic City, the exact property location, access route, working area and intended water use are useful starting details. Eshan Borewells can discuss the service scope based on the site; confirm availability and access for the specific property.",
    considerations: ["Share the phase or nearby landmark and exact site location.", "Describe the entry route and available working area.", "Note any site-operation or access restrictions."],
    relatedSlugs: ["borewell-drilling-bengaluru", "commercial-industrial-borewell-drilling-bengaluru", "apartment-borewell-drilling-bengaluru"],
  },
  "borewell-drilling-yelahanka": {
    pageType: "locality",
    directAnswer: "For borewell work in Yelahanka, first confirm the exact site, entry route, overhead clearance, property type and available working space. Eshan Borewells discusses the suitable service scope from those details; availability and equipment access need confirmation for each property.",
    considerations: ["Share the exact locality and a site address or map point.", "Describe vehicle access, clearance and working space.", "Include the property type and intended water requirement."],
    relatedSlugs: ["borewell-drilling-bengaluru", "groundwater-survey-water-detection-bengaluru", "farm-agricultural-borewell-drilling-bengaluru"],
  },
  "borewell-drilling-peenya": {
    pageType: "locality",
    directAnswer: "For a borewell project in Peenya, share the exact property location, site access, operating constraints and available working space. These details help Eshan Borewells discuss a practical scope for the property; confirm availability before coordinating a site visit.",
    considerations: ["Identify the industrial area, property and site contact.", "Describe vehicle access and any operating constraints.", "Share the intended water use and available work area."],
    relatedSlugs: ["borewell-drilling-bengaluru", "commercial-industrial-borewell-drilling-bengaluru", "borewell-casing-installation-bengaluru"],
  },
  "borewell-drilling-kr-puram": {
    pageType: "locality",
    directAnswer: "For borewell work in KR Puram, begin by confirming the exact site location, property type, entry route, overhead clearance and working space. Eshan Borewells discusses the appropriate project scope based on those conditions; confirm site availability before proceeding.",
    considerations: ["Share the exact locality and site address.", "Describe access width, turning space and overhead clearance.", "Include any known details about an existing borewell."],
    relatedSlugs: ["borewell-drilling-bengaluru", "residential-borewell-drilling-bengaluru", "borewell-flushing-redevelopment-bengaluru"],
  },
  "borewell-drilling-sarjapur-road": {
    pageType: "locality",
    directAnswer: "For a borewell project around Sarjapur Road, share the exact site location, property type, access route and available working space. This lets Eshan Borewells discuss suitable drilling or related services for that property; confirm availability and site access before planning.",
    considerations: ["Provide the exact locality or nearby landmark.", "Share access, clearance and working-area details.", "Tell us whether the project is residential, apartment, farm or commercial."],
    relatedSlugs: ["borewell-drilling-bengaluru", "apartment-borewell-drilling-bengaluru", "residential-borewell-drilling-bengaluru"],
  },
};

export function getSeoContent(slug: string): SeoContent | undefined {
  return seoContentBySlug[slug];
}

export function getRelatedSeoPages(slug: string): SeoPage[] {
  const content = getSeoContent(slug);
  if (!content) return [];

  const relatedSlugs = new Set(content.relatedSlugs.filter((relatedSlug) => relatedSlug !== slug));
  return seoPages.filter((page) => relatedSlugs.has(page.slug));
}
