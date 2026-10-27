export type SeoPage = {
  slug: string;
  title: string;
  /** Shorter search title when the on-page title would truncate in results. */
  metaTitle?: string;
  description: string;
  eyebrow: string;
  summary: string;
  details: string[];
  keywords: string[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "borewell-drilling-bengaluru",
    title: "Borewell Drilling in Bengaluru",
    description: "Borewell drilling in Bengaluru for homes, apartments, farms and commercial sites. Share your location and access details to plan the right rig and scope.",
    eyebrow: "BOREWELL DRILLING",
    summary: "Borewell drilling begins with the details of your property: available access, overhead clearance, neighbouring structures and the water requirement. Eshan Borewells discusses those conditions before recommending a way forward.",
    details: ["We work with sites across Bengaluru and nearby areas, including residential plots, apartments, farms and commercial properties.", "Share your site location and access details before a visit so the suitable drilling equipment and next steps can be discussed clearly."],
    keywords: ["borewell drilling Bengaluru", "borewell drilling Bangalore", "borewell contractor Bengaluru"],
  },
  {
    slug: "groundwater-survey-water-detection-bengaluru",
    title: "Groundwater Survey & Water Detection in Bengaluru",
    metaTitle: "Groundwater Survey in Bengaluru",
    description: "Groundwater survey and water detection in Bengaluru to guide where and whether to drill. Understand your site's conditions before committing to a borewell.",
    eyebrow: "GROUNDWATER SURVEY",
    summary: "A groundwater survey can help guide a borewell decision by considering conditions at a property. It is an assessment for planning, not a promise of water.",
    details: ["We discuss the site, available information and practical access before proposing a survey or drilling plan.", "Groundwater conditions vary between properties, so results should be understood as guidance alongside local site conditions."],
    keywords: ["groundwater survey Bengaluru", "water detection Bangalore", "borewell point checking Bengaluru"],
  },
  {
    slug: "borewell-casing-installation-bengaluru",
    title: "Borewell Casing Installation in Bengaluru",
    description: "Borewell casing and completion in Bengaluru, planned around ground conditions and well depth. Discuss PVC or M.S. steel casing for your new borewell.",
    eyebrow: "CASING & COMPLETION",
    summary: "Casing forms part of the supporting work around a new borewell. The right scope depends on the ground conditions, depth and completed drilling work at the site.",
    details: ["We discuss casing as part of an overall borewell project rather than treating it as a one-size-fits-all add-on.", "Share the location and current project stage so the appropriate work can be discussed."],
    keywords: ["borewell casing Bengaluru", "borewell installation Bangalore", "borewell completion service"],
  },
  {
    slug: "borewell-flushing-redevelopment-bengaluru",
    title: "Borewell Flushing & Redevelopment in Bengaluru",
    metaTitle: "Borewell Flushing in Bengaluru",
    description: "Borewell flushing and redevelopment in Bengaluru for existing wells. Have the borewell's condition assessed first; more water is never guaranteed.",
    eyebrow: "EXISTING BOREWELLS",
    summary: "Flushing or redevelopment may be considered for an existing borewell, but the borewell condition needs to be assessed first. It is not a guarantee of improved water output.",
    details: ["Existing well history, current water flow and access around the borewell help shape a useful first discussion.", "We can discuss whether an on-site assessment is the sensible next step for your property."],
    keywords: ["borewell flushing Bengaluru", "borewell redevelopment Bangalore", "existing borewell service"],
  },
  {
    slug: "residential-borewell-drilling-bengaluru",
    title: "Residential Borewell Drilling in Bengaluru",
    description: "Residential borewell drilling for houses, villas and plots in Bengaluru. Plan around gate width, driveways, overhead clearance and neighbouring buildings.",
    eyebrow: "FOR HOMES & VILLAS",
    summary: "Residential borewell work needs careful planning around gates, driveways, neighbouring houses and available space. A location and a few site details help determine the practical approach.",
    details: ["We discuss drilling options for independent homes, villas and residential plots in and around Bengaluru.", "Narrow entries and existing buildings are assessed before machinery is selected for a site."],
    keywords: ["residential borewell drilling Bengaluru", "house borewell Bangalore", "villa borewell contractor"],
  },
  {
    slug: "apartment-borewell-drilling-bengaluru",
    title: "Apartment Borewell Drilling in Bengaluru",
    description: "Apartment and layout borewell drilling in Bengaluru. Plan site entry, working space, residents' movement and the project's water requirement first.",
    eyebrow: "FOR APARTMENTS & LAYOUTS",
    summary: "Apartment and layout sites often require a clear plan for access, site movement and coordination. We discuss the property conditions before proposing the right drilling approach.",
    details: ["Share the site entrance, available working area and project requirements for a practical discussion.", "Compact drilling options may suit some built-up properties and constrained access routes."],
    keywords: ["apartment borewell drilling Bengaluru", "layout borewell Bangalore", "builder borewell contractor"],
  },
  {
    slug: "farm-agricultural-borewell-drilling-bengaluru",
    title: "Farm & Agricultural Borewell Drilling Near Bengaluru",
    metaTitle: "Farm Borewell Drilling Near Bengaluru",
    description: "Farm and agricultural borewell drilling around Bengaluru, generally within about 100 km. Plan vehicle access, working space and irrigation needs first.",
    eyebrow: "FOR FARMS & AGRICULTURE",
    summary: "Agricultural land and farm sites can have different access and working-space conditions from city properties. We discuss the land, vehicle approach and water requirement before planning drilling work.",
    details: ["Open plots and farms may suit larger drilling machinery where the site access allows it.", "We serve locations around Bengaluru, generally within about 100 km, subject to site confirmation."],
    keywords: ["farm borewell drilling Bengaluru", "agricultural borewell Bangalore", "borewell drilling near Bengaluru"],
  },
  {
    slug: "commercial-industrial-borewell-drilling-bengaluru",
    title: "Commercial & Industrial Borewell Drilling in Bengaluru",
    metaTitle: "Commercial Borewell Drilling in Bengaluru",
    description: "Commercial and industrial borewell drilling in Bengaluru for warehouses, factories and offices. Plan around site operations, access and safety first.",
    eyebrow: "FOR COMMERCIAL SITES",
    summary: "Commercial and industrial borewell projects need a plan that accounts for site operations, access, safety and the project water requirement. We begin with the conditions on the property.",
    details: ["We discuss borewell projects for warehouses, factories, commercial buildings and industrial properties.", "Providing site location, access details and the intended requirement helps make the first conversation more useful."],
    keywords: ["commercial borewell drilling Bengaluru", "industrial borewell Bangalore", "warehouse borewell contractor"],
  },
  {
    slug: "borewell-drilling-rajajinagar",
    title: "Borewell Drilling in Rajajinagar, Bengaluru",
    description: "Borewell drilling, groundwater survey, casing and flushing in Rajajinagar, Bengaluru, from our 6th Block base. Plan entry width and clearance first.",
    eyebrow: "RAJAJINAGAR, BENGALURU",
    summary: "For borewell work in Rajajinagar, available entry width, overhead clearance and the drilling point matter before machinery can be planned. Share your location and site details for a practical discussion.",
    details: ["Eshan Borewells is based in 6th Block, Rajajinagar, Bengaluru.", "We discuss borewell drilling, groundwater surveys, casing and existing-borewell support according to the site conditions."],
    keywords: ["borewell drilling Rajajinagar", "borewell service Rajajinagar", "water survey Rajajinagar"],
  },
  {
    slug: "borewell-drilling-whitefield",
    title: "Borewell Drilling in Whitefield, Bengaluru",
    description: "Borewell drilling, water survey and casing in Whitefield, Bengaluru for homes, apartments and commercial sites. Share site access to plan the right rig.",
    eyebrow: "WHITEFIELD, BENGALURU",
    summary: "Whitefield properties range from established homes to apartment and commercial developments. We discuss site entry, working space and drilling requirements before a visit is arranged.",
    details: ["Share the exact Whitefield locality, property type and available access for a clear first conversation.", "We can discuss drilling, survey, casing and suitable support for new or existing borewell projects."],
    keywords: ["borewell drilling Whitefield", "borewell contractor Whitefield", "water survey Whitefield"],
  },
  {
    slug: "borewell-drilling-electronic-city",
    title: "Borewell Drilling in Electronic City, Bengaluru",
    description: "Borewell drilling and groundwater survey in Electronic City, Bengaluru for homes, layouts, offices and industrial sites. Plan access and working space.",
    eyebrow: "ELECTRONIC CITY, BENGALURU",
    summary: "Electronic City has a mix of homes, layouts, workplaces and industrial sites. Project access and available working space are key details before borewell work is planned.",
    details: ["We discuss drilling requirements for residential, commercial and industrial properties in Electronic City.", "Share location, site photos where possible and the intended requirement to help assess the next step."],
    keywords: ["borewell drilling Electronic City", "industrial borewell Electronic City", "water survey Electronic City"],
  },
  {
    slug: "borewell-drilling-yelahanka",
    title: "Borewell Drilling in Yelahanka, Bengaluru",
    description: "Borewell drilling, water survey and casing in Yelahanka, Bengaluru for homes, layouts, farms and businesses. Share access details to plan your site.",
    eyebrow: "YELAHANKA, BENGALURU",
    summary: "Yelahanka sites may include homes, layouts and open land with very different access conditions. We discuss the property and suitable drilling approach before a site visit.",
    details: ["Share your Yelahanka site location, access and property type for a practical initial discussion.", "We can discuss borewell drilling, groundwater assessment, casing and existing-borewell support."],
    keywords: ["borewell drilling Yelahanka", "borewell service Yelahanka", "farm borewell Yelahanka"],
  },
  {
    slug: "borewell-drilling-peenya",
    title: "Borewell Drilling in Peenya, Bengaluru",
    description: "Industrial and commercial borewell drilling in Peenya, Bengaluru, plus survey and casing. Plan around factory operations, vehicle access and work area.",
    eyebrow: "PEENYA, BENGALURU",
    summary: "Peenya properties can involve industrial operations, warehouses and commercial facilities. We discuss on-site access, working area and operational requirements before planning borewell work.",
    details: ["Our team can discuss borewell requirements for industrial and commercial sites as well as nearby residential properties.", "Site location and access information help determine a suitable next step."],
    keywords: ["borewell drilling Peenya", "industrial borewell Peenya", "borewell contractor Peenya"],
  },
  {
    slug: "borewell-drilling-kr-puram",
    title: "Borewell Drilling in KR Puram, Bengaluru",
    description: "Borewell drilling, water survey and casing in KR Puram, Bengaluru for homes, apartments and commercial sites. Share your access route to plan the work.",
    eyebrow: "KR PURAM, BENGALURU",
    summary: "For a KR Puram borewell project, the access route, working space and property type are useful details to share first. They help determine the practical drilling approach.",
    details: ["We discuss new borewell drilling, groundwater surveys, casing and selected existing-well support.", "Share your exact location and site access information to confirm availability."],
    keywords: ["borewell drilling KR Puram", "borewell service KR Puram", "water survey KR Puram"],
  },
  {
    slug: "borewell-drilling-sarjapur-road",
    title: "Borewell Drilling on Sarjapur Road, Bengaluru",
    description: "Borewell drilling, groundwater survey and casing around Sarjapur Road, Bengaluru for homes, apartments and layouts. Share site access to plan the rig.",
    eyebrow: "SARJAPUR ROAD, BENGALURU",
    summary: "Sarjapur Road has a mix of individual homes, apartment projects and commercial properties. We discuss the exact site location and available access before a drilling plan is considered.",
    details: ["Send your locality, property type and site access details for a useful initial conversation.", "We can discuss drilling, groundwater survey, casing and selected existing borewell work."],
    keywords: ["borewell drilling Sarjapur Road", "borewell service Sarjapur", "apartment borewell Sarjapur Road"],
  },
];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}

export function getIndexableSeoPages() {
  return [...seoPages];
}
