// Visible customer questions shared by the homepage and service/locality pages.
// Answers must stay within approved public facts (see public-business-facts.ts).
export const faqQuestions = {
  "narrow-roads": { question: "Can you work on narrow roads?", answer: "Often, yes. Compact and robotic rigs may suit narrow or restricted sites, depending on the road width, entry, overhead clearance and space around the drilling point. Share your location and a few site photos so the right rig can be chosen." },
  "survey-guarantee": { question: "Can a survey guarantee water?", answer: "No. A survey can inform planning, but groundwater conditions vary, even between nearby properties. We would never present detection as a guarantee." },
  cost: { question: "What affects the cost of drilling?", answer: "Drilling depth is the biggest factor: drilling is charged per foot, and the per-foot rate rises as the borewell goes deeper. Casing pipe, the rig needed for your site access, labour, transport and any related work make up the rest. Share your location, expected depth and site access to receive an itemised estimate." },
  where: { question: "Where do you work?", answer: "We work across Bengaluru and nearby areas, including Rajajinagar, Peenya, Yelahanka, Whitefield, KR Puram, Sarjapur Road and Electronic City. Contact us with your locality to confirm availability for your property." },
  outside: { question: "Do you work outside Bengaluru?", answer: "Yes. We discuss borewell sites in every direction around Bengaluru, generally within about 100 km. Tell us your exact location so we can confirm travel and machinery access." },
  prepare: { question: "What should I share before a borewell site visit?", answer: "Send your site location, property type, available access width and any existing water or borewell information. Site photos help us discuss suitable drilling machinery and the next step." },
  "casing-pump": { question: "Can you help with casing and pump installation?", answer: "Yes. We install borewell casing, such as PVC or M.S. steel pipe, and coordinate pump installation as part of the overall project. The exact scope depends on the site and the completed borewell." },
  flushing: { question: "Can an existing borewell be flushed?", answer: "Flushing or redevelopment may help some existing wells, but the condition of the borewell needs to be assessed first. It is not a guarantee of more water." },
} as const;

export type FaqKey = keyof typeof faqQuestions;

export const homepageFaqKeys: FaqKey[] = ["narrow-roads", "survey-guarantee", "cost", "where", "outside", "prepare", "casing-pump", "flushing"];
