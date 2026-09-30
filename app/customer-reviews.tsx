import { Marquee } from "@/components/ui/marquee";

export type CustomerReview = {
  quote: string;
  reviewer: string;
  rating?: 1 | 2 | 3 | 4 | 5;
};

type CustomerReviewsProps = {
  reviews: CustomerReview[];
  aggregateRating?: number | null;
  ratingSource?: string | null;
  feedbackHref: string;
};

export function CustomerReviews({ reviews, aggregateRating, ratingSource, feedbackHref }: CustomerReviewsProps) {
  if (reviews.length === 0) return <section className="reviews-section reviews-empty" aria-labelledby="reviews-heading">
    <div className="shell reviews-empty-inner">
      <div><span className="section-label">CUSTOMER FEEDBACK</span><h2 id="reviews-heading">Your experience matters.</h2></div>
      <div><p>Our earlier reviews are being restored. Worked with us? Tell us about your borewell project in your own words.</p><a href={feedbackHref} target="_blank" rel="noopener noreferrer">Share your feedback <span aria-hidden="true">↗</span></a></div>
    </div>
  </section>;

  const displayRating = aggregateRating != null && ratingSource && aggregateRating >= 1 && aggregateRating <= 5;

  return <section className="reviews-section" aria-labelledby="reviews-heading">
    <div className="shell reviews-heading">
      <div><span className="section-label">CUSTOMER FEEDBACK</span><h2 id="reviews-heading">Words from our customers.</h2></div>
      {displayRating && <p className="reviews-rating"><strong>{aggregateRating.toFixed(1)} <span aria-hidden="true">★</span></strong><span>Verified rating on {ratingSource}</span></p>}
    </div>
    <Marquee className="reviews-track" pauseOnHover repeat={4} aria-label="Customer reviews">
      {reviews.map((review, index) => <blockquote className="review-card" key={`${review.reviewer}-${index}`}>
        {review.rating != null && <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}><span aria-hidden="true">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span></div>}
        <p>“{review.quote}”</p>
        <footer>{review.reviewer}</footer>
      </blockquote>)}
    </Marquee>
  </section>;
}
