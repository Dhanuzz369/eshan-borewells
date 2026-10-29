type GuidanceSection = { heading: string; paragraphs: string[] };

// Public decision guidance only. Internal price tables and customer records stay private.
export const GUIDANCE_UPDATED = "2026-10-29";
const guidance: Record<string, GuidanceSection[]> = {
  "borewell-drilling-bengaluru": [
    { heading: "What should a drilling estimate include?", paragraphs: [
      "Ask for drilling, casing and operational charges to be listed separately. A drilling rate per foot is not the whole project cost: the final drilled depth, casing length, materials used and agreed additional work affect the bill. Confirm which charges are fixed and which depend on actual usage before work starts.",
      "Where rates change with depth, ask how each depth range is charged. A slab-by-slab breakdown helps you compare the same scope between contractors. Also confirm payment stages, applicable taxes and any waiting or flushing charges; do not compare only the lowest headline rate.",
    ] },
    { heading: "Drilling depth, water yield and completion", paragraphs: [
      "The depth of a neighbouring borewell does not establish the depth or yield at your property. Share any nearby records as background, but discuss your own site and intended water use. A survey can guide planning; neither a depth estimate nor a survey guarantees water.",
      "Before the team leaves, ask for a record of the drilled depth, casing installed and any observations about water-bearing layers or drilling conditions. Confirm how yield was assessed and what pump information is available. Pump installation coordination should be based on the completed borewell, not an assumed outcome.",
    ] },
  ],
  "groundwater-survey-water-detection-bengaluru": [
    { heading: "Water detection and borewell point checking", paragraphs: [
      "Borewell point checking, water detection and groundwater survey are terms customers use when deciding where to drill. Start by explaining whether you need a new drilling point, want advice about an existing borewell, or are investigating a change in water flow. These are different questions and may need different assessments.",
      "Ask which survey method is proposed, what access it needs and what the findings can reasonably tell you. Confirm whether the scope includes an on-site discussion, a marked drilling point, written observations or a report. The method and deliverables should be agreed for your property; they are not assumed to be included in every visit.",
    ] },
    { heading: "What to share and how to use the findings", paragraphs: [
      "Bring a site plan or location pin, the intended water use and any available records of existing wells. Useful records include known depths, previous work and changes in flow. If you do not have records, say so rather than treating estimates as measured facts.",
      "Ask the assessor to explain limitations and how the findings affect the proposed drilling point. A survey does not establish drinking-water safety, guarantee a particular depth or promise a sustained yield. Discuss water quality testing separately if the water is intended for drinking.",
    ] },
  ],
  "borewell-casing-installation-bengaluru": [
    { heading: "Comparing PVC and M.S. casing scope", paragraphs: [
      "When discussing casing, confirm the material, diameter, specification and proposed installed length. PVC casing, M.S. casing and slotted filter pipe should not be treated as interchangeable line items. Ask the team to explain which items are suitable for the borewell and the site conditions.",
      "A useful material breakdown separates pipe charged by length from welding, collars and caps charged by quantity. Confirm whether installation and related work are included. Actual quantities should be recorded so you can reconcile the materials used with the final bill.",
    ] },
    { heading: "Information needed for an existing borewell", paragraphs: [
      "Share the borewell depth, existing casing details and current problem if known. Photographs of the accessible wellhead and past drilling records can help the initial conversation. Do not assume a proposed casing change is possible until the borewell has been assessed.",
      "Keep the completed drilling and material records for future maintenance and pump discussions. The appropriate casing scope depends on the well; a nearby property's pipe length is not a specification for your site.",
    ] },
  ],
  "borewell-flushing-redevelopment-bengaluru": [
    { heading: "Flushing an existing borewell or drilling a new one?", paragraphs: [
      "A change in water delivery does not by itself identify the cause. Explain whether the issue is low flow, silt, interrupted pumping or a recent change after maintenance. Share the existing depth, pump information and service history so the next assessment can be discussed.",
      "Flushing concerns an existing borewell and should not be assumed to solve every water or pump problem. Ask what the proposed work is intended to address, what its limitations are, and whether a separate pump assessment is needed before choosing the service.",
    ] },
    { heading: "Agree the scope before work starts", paragraphs: [
      "Confirm equipment access, the work area and the proposed flushing scope. Ask how observations before and after the work will be recorded and what charges apply. Keep any findings with the borewell's previous records rather than relying only on a verbal comparison.",
      "An assessment may indicate that the proposed work is unsuitable. Improved or sustained water output cannot be promised in advance. A decision about a new borewell is a separate site-planning discussion, not an automatic consequence of low flow in the existing well.",
    ] },
  ],
  "borewell-drilling-electronic-city": [
    { heading: "Apartment, workplace and individual-site enquiries", paragraphs: [
      "For an apartment or managed property in Electronic City, identify the person coordinating access and the approved work area. Share entry photographs and any restrictions on vehicle movement or working times. Confirm the arrangements with the property manager before scheduling machinery.",
      "For an individual house or plot, explain whether access passes through a gate, driveway or occupied building area. The exact site conditions determine whether a larger rig, compact equipment or a robotic rig should be considered; a locality name alone cannot determine the machine.",
    ] },
    { heading: "Compare the project scope, not just a per-foot rate", paragraphs: [
      "Confirm whether your enquiry concerns a new borewell, point checking, casing or an existing-well problem. Ask for drilling depth ranges, operational costs and materials to be separated so you can compare like-for-like estimates. Record actual depth and material usage when work is completed.",
      "Eshan Borewells operates from 6th Block, Rajajinagar; this page is service guidance for Electronic City, not a claim of a separate local branch. Call with the exact site location to confirm travel, availability and access before making arrangements.",
    ] },
  ],
  "borewell-drilling-sarjapur-road": [
    { heading: "Pinpoint the property along Sarjapur Road", paragraphs: [
      "A Sarjapur Road enquiry needs the actual property pin or a nearby landmark, not just the corridor name. Share the final approach route and explain whether the site is an individual plot, occupied home, apartment or layout. This helps distinguish vehicle travel from the final entry into the property.",
      "For a layout or apartment, identify the project contact and agreed drilling area. For an occupied home, share photographs showing the gate, nearby structures and overhead obstructions. Availability and suitable machinery must be confirmed for the particular site.",
    ] },
    { heading: "New drilling and existing-well work need different records", paragraphs: [
      "For a new borewell, explain the intended water use and whether a survey has already been carried out. For an existing well, send the known depth, casing information, pump details and the problem you are experiencing. Do not use a neighbour's result as a promise for your property.",
      "Ask the contractor to distinguish drilling, casing and materials from other operational work in the estimate. Keep the drilling record and material quantities after completion for future servicing. Our office is in Rajajinagar; service on Sarjapur Road is subject to site confirmation.",
    ] },
  ],
  "borewell-drilling-rajajinagar": [
    { heading: "Contact the Rajajinagar office about your site", paragraphs: [
      "Eshan Borewells is based in 6th Block, Rajajinagar, Bengaluru. Call +91 98447 75905 or send your location and site photographs on WhatsApp to start a discussion. Published contact hours are daily, 9 am to 10 pm; confirm a visit with the team rather than assuming machinery is available immediately.",
      "Describe whether you need new drilling, groundwater point checking, casing or attention to an existing borewell. For a house with restricted entry, photographs of the gate and route to the drilling area help the team discuss equipment access before a site visit.",
    ] },
    { heading: "Keep a clear scope and completion record", paragraphs: [
      "Ask for drilling charges, operational costs and casing or other materials to be identified separately. The actual depth and quantities used affect the final amount. Confirm payment stages and the agreed work rather than treating an initial estimate as a fixed promise for unknown ground conditions.",
      "For an existing well, share previous drilling records and explain any changes in flow or recent pump work. Ask what observations will be recorded if work proceeds. Water availability, suitable equipment and the final scope depend on the property, even for a site near the office.",
    ] },
  ],
};

export function getServiceGuidance(slug: string): GuidanceSection[] {
  return guidance[slug] ?? [];
}
