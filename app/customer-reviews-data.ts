import type { CustomerReview } from "./customer-reviews";

// Add only customer-approved, attributable reviews here. Do not fabricate quotes or ratings.
export const customerReviews: CustomerReview[] = [];

// Display an aggregate only when it can be checked against the named source.
export const customerRating: number | null = null;
export const customerRatingSource: string | null = null;
