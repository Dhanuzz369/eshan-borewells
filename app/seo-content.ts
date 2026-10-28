import { faqQuestions, type FaqKey } from "./faq-data";
import { seoPages, type SeoPage } from "./seo-pages";

// Date the service/locality page copy was last substantively revised. Update when the copy changes.
export const SEO_CONTENT_UPDATED = "2026-10-27";

export type SeoContent = {
  pageType: "service" | "locality";
  /** Question-shaped H2 for the answer-first block. */
  answerHeading: string;
  directAnswer: string;
  considerations: string[];
  relatedSlugs: string[];
};

const seoContentBySlug: Record<string, SeoContent> = {
  "borewell-drilling-bengaluru": {
    pageType: "service",
    answerHeading: "How should you plan borewell drilling in Bengaluru?",
    directAnswer: "Borewell drilling in Bengaluru should be planned around the exact property, equipment access, overhead clearance, working space and intended water use. Eshan Borewells discusses those site conditions before outlining a practical drilling approach; water availability and the final scope depend on the site.",
    considerations: ["Share the site location, entry width and overhead clearance.", "Explain the property type and intended water requirement.", "A site assessment helps determine which equipment and scope may suit the property."],
    relatedSlugs: ["groundwater-survey-water-detection-bengaluru", "residential-borewell-drilling-bengaluru", "apartment-borewell-drilling-bengaluru", "farm-agricultural-borewell-drilling-bengaluru"],
  },
  "groundwater-survey-water-detection-bengaluru": {
    pageType: "service",
    answerHeading: "What can a groundwater survey tell you?",
    directAnswer: "A groundwater survey can inform borewell planning by considering available information about the property and its conditions. It is guidance for a decision, not a promise of water or a specific yield; groundwater varies between sites and the drilling outcome remains uncertain.",
    considerations: ["Provide the exact property location and any site plan available.", "Share known borewell or water history for the property.", "Use survey findings as one input to planning, alongside site conditions."],
    relatedSlugs: ["borewell-drilling-bengaluru", "residential-borewell-drilling-bengaluru", "farm-agricultural-borewell-drilling-bengaluru"],
  },
  "borewell-casing-installation-bengaluru": {
    pageType: "service",
    answerHeading: "What does borewell casing involve?",
    directAnswer: "Borewell casing is part of completing a borewell, and the appropriate material and installation scope depend on the ground, well depth and project requirements. Discuss the borewell details and site conditions before deciding what casing work is suitable.",
    considerations: ["Share the drilling depth and available borewell details.", "The casing plan depends on site and ground conditions.", "Confirm material, dimensions and quantities for the specific project."],
    relatedSlugs: ["borewell-drilling-bengaluru", "borewell-flushing-redevelopment-bengaluru", "apartment-borewell-drilling-bengaluru"],
  },
  "borewell-flushing-redevelopment-bengaluru": {
    pageType: "service",
    answerHeading: "When is borewell flushing worth considering?",
    directAnswer: "Borewell flushing or redevelopment may be considered when an existing well needs attention, but the borewell should be assessed before work is selected. Its history, current condition, access and water flow help determine whether this service is appropriate.",
    considerations: ["Share the borewell age, depth and previous work if known.", "Describe any change in water flow or current issue.", "Site access and the borewell's condition affect the possible approach."],
    relatedSlugs: ["borewell-casing-installation-bengaluru", "borewell-drilling-bengaluru", "groundwater-survey-water-detection-bengaluru"],
  },
  "residential-borewell-drilling-bengaluru": {
    pageType: "service",
    answerHeading: "How do you plan a borewell for a house or villa?",
    directAnswer: "For a residential borewell in Bengaluru, first consider the property entrance, driveway, overhead clearance, nearby structures and available working area. These details help assess equipment access and the practical scope; each site needs individual planning.",
    considerations: ["Share entry width, turning space and overhead obstructions.", "Tell us whether the property is a house, villa or plot.", "Site photos can help discuss access before arranging a visit."],
    relatedSlugs: ["borewell-drilling-bengaluru", "groundwater-survey-water-detection-bengaluru", "apartment-borewell-drilling-bengaluru"],
  },
  "apartment-borewell-drilling-bengaluru": {
    pageType: "service",
    answerHeading: "How do you plan a borewell for an apartment or layout?",
    directAnswer: "An apartment borewell project needs early coordination around the entrance, available working space, movement through the property and the project's water requirement. Share these details so the equipment options and drilling scope can be discussed for that site.",
    considerations: ["Confirm the site entry route and any access restrictions.", "Identify the available work area and project contact.", "Share the intended water use and any relevant site plan."],
    relatedSlugs: ["borewell-drilling-bengaluru", "residential-borewell-drilling-bengaluru", "commercial-industrial-borewell-drilling-bengaluru"],
  },
  "farm-agricultural-borewell-drilling-bengaluru": {
    pageType: "service",
    answerHeading: "How do you plan a farm borewell near Bengaluru?",
    directAnswer: "Farm and agricultural borewell planning starts with the land location, vehicle approach, available working space and intended water use. Open land may allow different equipment access than a built-up property, but groundwater conditions and drilling outcomes vary by site.",
    considerations: ["Share the land location and vehicle approach route.", "Explain the intended agricultural water use.", "Confirm site access and equipment suitability before scheduling work."],
    relatedSlugs: ["borewell-drilling-bengaluru", "groundwater-survey-water-detection-bengaluru", "commercial-industrial-borewell-drilling-bengaluru"],
  },
  "commercial-industrial-borewell-drilling-bengaluru": {
    pageType: "service",
    answerHeading: "How do you plan a commercial or industrial borewell?",
    directAnswer: "Commercial and industrial borewell work should be planned around site operations, access, safety requirements, working space and the property's water needs. Sharing these details early helps establish the project scope and the next steps for a site discussion.",
    considerations: ["Identify site access and any operating-hour restrictions.", "Share the property type and intended water requirement.", "Coordinate the site contact and working area before planning a visit."],
    relatedSlugs: ["borewell-drilling-bengaluru", "apartment-borewell-drilling-bengaluru", "borewell-casing-installation-bengaluru"],
  },
  "borewell-drilling-rajajinagar": {
    pageType: "locality",
    answerHeading: "How do you plan a borewell in Rajajinagar?",
    directAnswer: "For borewell work in Rajajinagar, confirm the exact site, equipment entry route, overhead clearance and available working space first. Eshan Borewells is based in 6th Block, Rajajinagar, and discusses drilling and related services according to each project's requirements; confirm availability for the specific site.",
    considerations: ["Share the exact block or site location and property type.", "Describe the entrance, turning space and overhead clearance.", "Confirm availability and the appropriate scope before arranging a visit."],
    relatedSlugs: ["borewell-drilling-bengaluru", "groundwater-survey-water-detection-bengaluru", "residential-borewell-drilling-bengaluru"],
  },
  "borewell-drilling-whitefield": {
    pageType: "locality",
    answerHeading: "How do you plan a borewell in Whitefield?",
    directAnswer: "For a borewell project in Whitefield, start with the exact site location, property type, equipment access and available working area. These details help Eshan Borewells discuss a practical approach; confirm availability for the particular property before planning the work.",
    considerations: ["Provide the exact Whitefield locality and site address.", "Share entry width, overhead clearance and working space.", "Tell us whether the site is residential, apartment or commercial."],
    relatedSlugs: ["borewell-drilling-bengaluru", "apartment-borewell-drilling-bengaluru", "commercial-industrial-borewell-drilling-bengaluru"],
  },
  "borewell-drilling-electronic-city": {
    pageType: "locality",
    answerHeading: "How do you plan a borewell in Electronic City?",
    directAnswer: "For a borewell project in Electronic City, the exact property location, access route, working area and intended water use are useful starting details. Eshan Borewells can discuss the service scope based on the site; confirm availability and access for the specific property.",
    considerations: ["Share the phase or nearby landmark and exact site location.", "Describe the entry route and available working area.", "Note any site-operation or access restrictions."],
    relatedSlugs: ["borewell-drilling-bengaluru", "commercial-industrial-borewell-drilling-bengaluru", "apartment-borewell-drilling-bengaluru"],
  },
  "borewell-drilling-yelahanka": {
    pageType: "locality",
    answerHeading: "How do you plan a borewell in Yelahanka?",
    directAnswer: "For borewell work in Yelahanka, first confirm the exact site, entry route, overhead clearance, property type and available working space. Eshan Borewells discusses the suitable service scope from those details; availability and equipment access need confirmation for each property.",
    considerations: ["Share the exact locality and a site address or map point.", "Describe vehicle access, clearance and working space.", "Include the property type and intended water requirement."],
    relatedSlugs: ["borewell-drilling-bengaluru", "groundwater-survey-water-detection-bengaluru", "farm-agricultural-borewell-drilling-bengaluru"],
  },
  "borewell-drilling-peenya": {
    pageType: "locality",
    answerHeading: "How do you plan a borewell in Peenya?",
    directAnswer: "For a borewell project in Peenya, share the exact property location, site access, operating constraints and available working space. These details help Eshan Borewells discuss a practical scope for the property; confirm availability before coordinating a site visit.",
    considerations: ["Identify the industrial area, property and site contact.", "Describe vehicle access and any operating constraints.", "Share the intended water use and available work area."],
    relatedSlugs: ["borewell-drilling-bengaluru", "commercial-industrial-borewell-drilling-bengaluru", "borewell-casing-installation-bengaluru"],
  },
  "borewell-drilling-kr-puram": {
    pageType: "locality",
    answerHeading: "How do you plan a borewell in KR Puram?",
    directAnswer: "For borewell work in KR Puram, begin by confirming the exact site location, property type, entry route, overhead clearance and working space. Eshan Borewells discusses the appropriate project scope based on those conditions; confirm site availability before proceeding.",
    considerations: ["Share the exact locality and site address.", "Describe access width, turning space and overhead clearance.", "Include any known details about an existing borewell."],
    relatedSlugs: ["borewell-drilling-bengaluru", "residential-borewell-drilling-bengaluru", "borewell-flushing-redevelopment-bengaluru"],
  },
  "borewell-drilling-sarjapur-road": {
    pageType: "locality",
    answerHeading: "How do you plan a borewell around Sarjapur Road?",
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

export type ProcessStep = { title: string; detail: string };

const drillingProcess: ProcessStep[] = [
  { title: "Share the site details", detail: "Send the location, property type, entry width, overhead clearance and a few photos, along with the water requirement." },
  { title: "Match the rig to the access", detail: "Large, compact and robotic rigs are considered against the entry route, clearance and working space at the property." },
  { title: "Agree the scope and estimate", detail: "Drilling, casing, pump installation coordination and related work are confirmed before work starts." },
  { title: "Drill and complete the borewell", detail: "Drilling proceeds at the agreed point. Casing and completion follow, based on what the drilling encounters; water, depth and yield cannot be promised in advance." },
];

const processByKind: Record<string, ProcessStep[]> = {
  drilling: drillingProcess,
  survey: [
    { title: "Share the property details", detail: "Send the exact location, any site plan, and what you know about nearby or previous borewells on the property." },
    { title: "Survey the site", detail: "The survey considers the conditions at the property to help decide whether and where drilling may be worth attempting." },
    { title: "Review the findings", detail: "Findings are discussed as one input to planning, alongside site access and the water requirement. They are not a promise of water or yield." },
    { title: "Decide the next step", detail: "If you choose to drill, the drilling point, rig and scope are planned from the survey discussion and the site conditions." },
  ],
  casing: [
    { title: "Share the borewell details", detail: "Send the drilling depth, the borewell diameter and the stage the project has reached." },
    { title: "Choose the casing", detail: "Casing material, such as PVC or M.S. steel pipe, and its diameter are chosen for the ground conditions and the well." },
    { title: "Confirm quantities", detail: "Pipe length, joints, collars and caps are confirmed for the specific borewell before installation." },
    { title: "Install and complete", detail: "Casing is installed as part of completing the borewell, and pump installation can be coordinated afterwards." },
  ],
  flushing: [
    { title: "Describe the borewell", detail: "Share its age, depth, previous work and any change in water flow or quality you have noticed." },
    { title: "Assess its condition", detail: "The borewell's condition and the access around it are checked before any work is proposed." },
    { title: "Decide if flushing suits", detail: "Flushing or redevelopment is suggested only where it is a sensible option for that well." },
    { title: "Carry out the agreed work", detail: "The agreed work is completed and the result discussed. More water cannot be promised in advance." },
  ],
};

const kindBySlug: Record<string, string> = {
  "groundwater-survey-water-detection-bengaluru": "survey",
  "borewell-casing-installation-bengaluru": "casing",
  "borewell-flushing-redevelopment-bengaluru": "flushing",
};

export type PageFaq = { question: string; answer: string };

// Area-specific questions, written only from facts already published on the site
// (office location, hours, property mix, rig options, ~100 km coverage).
const localityFaqsBySlug: Record<string, PageFaq[]> = {
  "borewell-drilling-rajajinagar": [
    { question: "Is Eshan Borewells based in Rajajinagar?", answer: "Yes. Our office is in 6th Block, Rajajinagar, Bengaluru, and we are open daily from 9 am to 10 pm. Share your exact block or site location to confirm availability for your property." },
    { question: "Can a drilling rig reach a built-up Rajajinagar plot?", answer: "It depends on the entry width, overhead clearance and space around the drilling point. Compact and robotic rigs may suit narrow or restricted sites once access is assessed, so send a few site photos first." },
  ],
  "borewell-drilling-whitefield": [
    { question: "Do you drill for apartments and gated communities in Whitefield?", answer: "Yes. We discuss borewell projects for apartments and layouts as well as independent homes and commercial properties in Whitefield. Apartment sites need early coordination on the entry route, working area and a project contact." },
    { question: "What should a Whitefield apartment association share first?", answer: "The exact locality, the site entrance, the available working area, the intended water use and any site plan. These details help plan equipment access before a visit is arranged." },
  ],
  "borewell-drilling-electronic-city": [
    { question: "Do you work on industrial and commercial sites in Electronic City?", answer: "Yes. We discuss borewell requirements for homes, layouts, offices and industrial properties in Electronic City. Commercial and industrial work is planned around site operations, access and safety." },
    { question: "What helps plan a borewell at an Electronic City workplace?", answer: "Share the phase or a nearby landmark, the site contact, any operating-hour or access restrictions and the area available for the rig." },
  ],
  "borewell-drilling-yelahanka": [
    { question: "Can you drill on open land or farm plots around Yelahanka?", answer: "Yes. Open plots and farms may suit larger drilling machinery where access allows. We work around Bengaluru, generally within about 100 km, subject to confirming the site." },
    { question: "Which details matter most for a Yelahanka site?", answer: "The exact locality or a map point, vehicle access, overhead clearance, working space, the property type and the intended water requirement." },
  ],
  "borewell-drilling-peenya": [
    { question: "Do you drill borewells for factories in Peenya?", answer: "Yes. We discuss borewell projects for industrial and commercial sites in Peenya, as well as nearby homes, planned around site operations, access and safety." },
    { question: "How is drilling planned around factory operations?", answer: "Identify the site contact, the area available for the rig, any operating-hour restrictions and the intended water use, so the work can be coordinated with the site before a visit." },
  ],
  "borewell-drilling-kr-puram": [
    { question: "Can you work on an existing borewell in KR Puram?", answer: "We discuss selected existing-borewell work, such as flushing or redevelopment, after the borewell's condition is assessed. Share its age, depth and any change in water flow; more water cannot be promised." },
    { question: "What should I share for a KR Puram borewell?", answer: "The exact locality and site address, access width, turning space, overhead clearance and any details of an existing borewell on the property." },
  ],
  "borewell-drilling-sarjapur-road": [
    { question: "Do you work with apartments and layouts on Sarjapur Road?", answer: "Yes. Sarjapur Road has individual homes, apartment projects and commercial properties, and we discuss drilling, groundwater survey, casing and selected existing-borewell work for each." },
    { question: "Do you travel beyond Sarjapur Road?", answer: "Yes. We work in every direction around Bengaluru, generally within about 100 km. Share the exact locality or a nearby landmark so we can confirm machinery access." },
  ],
};

// One shared question per area page, varied so the same answer doesn't repeat across areas.
const localitySharedFaqBySlug: Record<string, FaqKey> = {
  "borewell-drilling-rajajinagar": "survey-guarantee",
  "borewell-drilling-whitefield": "survey-guarantee",
  "borewell-drilling-electronic-city": "casing-pump",
  "borewell-drilling-yelahanka": "survey-guarantee",
  "borewell-drilling-peenya": "casing-pump",
  "borewell-drilling-kr-puram": "narrow-roads",
  "borewell-drilling-sarjapur-road": "casing-pump",
};

const faqKeysBySlug: Record<string, FaqKey[]> = {
  "groundwater-survey-water-detection-bengaluru": ["survey-guarantee", "prepare", "cost"],
  "borewell-casing-installation-bengaluru": ["casing-pump", "flushing", "prepare"],
  "borewell-flushing-redevelopment-bengaluru": ["flushing", "prepare", "cost"],
  "farm-agricultural-borewell-drilling-bengaluru": ["outside", "prepare", "cost"],
  "residential-borewell-drilling-bengaluru": ["narrow-roads", "prepare", "cost"],
  "apartment-borewell-drilling-bengaluru": ["narrow-roads", "survey-guarantee", "cost"],
  "borewell-drilling-bengaluru": ["where", "narrow-roads", "cost"],
  "commercial-industrial-borewell-drilling-bengaluru": ["casing-pump", "where", "survey-guarantee"],
};

const imageBySlug: Record<string, { src: string; alt: string }> = {
  "borewell-drilling-bengaluru": { src: "/large-drilling-rig.webp", alt: "Borewell drilling rig set up at an open site near Bengaluru" },
  "groundwater-survey-water-detection-bengaluru": { src: "/survey-technician.webp", alt: "Technician reviewing a groundwater survey before borewell drilling" },
  "borewell-casing-installation-bengaluru": { src: "/casing-installation.webp", alt: "Borewell casing pipe being installed during well completion" },
  "borewell-flushing-redevelopment-bengaluru": { src: "/borewell-water-flow.webp", alt: "Water flowing from a borewell pipe" },
  "residential-borewell-drilling-bengaluru": { src: "/compact-drilling-rig.webp", alt: "Compact borewell drilling rig in a narrow residential driveway" },
  "apartment-borewell-drilling-bengaluru": { src: "/compact-drilling-rig.webp", alt: "Compact borewell drilling rig suited to built-up sites" },
  "farm-agricultural-borewell-drilling-bengaluru": { src: "/large-drilling-rig.webp", alt: "Large borewell drilling rig working on open farmland" },
  "commercial-industrial-borewell-drilling-bengaluru": { src: "/large-drilling-rig.webp", alt: "Large borewell drilling rig for commercial and industrial sites" },
};

export function getProcessSteps(slug: string): ProcessStep[] {
  return processByKind[kindBySlug[slug] ?? "drilling"];
}

export function getFaqKeys(slug: string): FaqKey[] {
  return faqKeysBySlug[slug] ?? ["prepare", "narrow-roads", "cost"];
}

/** Visible FAQs for a page: area pages get their own questions plus one shared answer. */
export function getPageFaqs(slug: string): PageFaq[] {
  const local = localityFaqsBySlug[slug];
  if (local) return [...local, faqQuestions[localitySharedFaqBySlug[slug] ?? "prepare"]];
  return getFaqKeys(slug).map((key) => faqQuestions[key]);
}

export function getSeoImage(slug: string) {
  return imageBySlug[slug] ?? { src: "/compact-drilling-rig.webp", alt: "Compact borewell drilling rig for Bengaluru sites with limited access" };
}

/** Other locality pages, for cross-linking area guidance. */
export function getLocalityPages(excludeSlug?: string): SeoPage[] {
  return seoPages.filter((page) => page.slug !== excludeSlug && getSeoContent(page.slug)?.pageType === "locality");
}
