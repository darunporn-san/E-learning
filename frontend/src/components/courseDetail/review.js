import {
  Star,
  ThumbsUp,
  MessageCircle,
  MoreHorizontal,
  Filter,
  Send,
} from "lucide-react";
import React, { useState } from "react";
import { ratingDistribution, reviews } from "../../utils/data";

const Review = () => {
  const [selectedRating, setSelectedRating] = useState("all");
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [visibleReviews, setVisibleReviews] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const filteredReviews =
    selectedRating === "all"
      ? reviews
      : reviews.filter((review) => review.rating === parseInt(selectedRating));
  const displayedReviews = filteredReviews.slice(0, visibleReviews);
  const hasMoreReviews = visibleReviews < filteredReviews.length;
    const handleShowMore = () => {
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      setVisibleReviews(prev => Math.min(prev + 3, filteredReviews.length));
      setIsLoading(false);
    }, 800);
  };

  const handleSubmitReview = async () => {
    if (!userRating || !reviewText.trim()) {
      alert("Please provide both a rating and review text");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      alert("Review submitted successfully!");
      setUserRating(0);
      setReviewText("");
      setIsSubmitting(false);
    }, 1000);
  };

  // Reset visible reviews when filter changes
  React.useEffect(() => {
    setVisibleReviews(3);
  }, [selectedRating]);

  return (
    <div className="student-reviews">
      <div>
        {/* Header Section */}
        <div className="reviews-header">
          <div className="reviews-title-section">
            <h3 className="reviews-title">Student Reviews</h3>
            <div className="reviews-summary">
              <div className="overall-rating">
                <span className="rating-number">4.9</span>
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill="currentColor"
                      className="star-filled"
                    />
                  ))}
                </div>
                <span className="total-reviews">1,234 reviews</span>
              </div>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="rating-distribution">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="rating-row">
                <span className="rating-label">{item.stars} stars</span>
                <div className="rating-bar">
                  <div
                    className="rating-fill"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="rating-count">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Add Review Section */}
        <div className="add-review-section">
          <h4 className="add-review-title">Share your experience</h4>

          <div className="rating-input">
            <span className="rating-label">Your rating:</span>
            <div className="interactive-stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={`interactive-star ${
                    i < (hoverRating || userRating) ? "filled" : ""
                  }`}
                  onMouseEnter={() => setHoverRating(i + 1)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setUserRating(i + 1)}
                />
              ))}
            </div>
          </div>

          <div className="review-input-section">
            <textarea
              className="review-textarea"
              placeholder="Write your review here... Share your experience with this course and help other students make informed decisions."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={4}
            />
            <div className="review-input-footer">
              <span className="character-count">
                {reviewText.length}/500 characters
              </span>
              <button
                className="submit-review-btn"
                onClick={handleSubmitReview}
                disabled={isSubmitting || !userRating || !reviewText.trim()}
              >
                <Send size={18} />
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </button>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="reviews-filter">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${
                selectedRating === "all" ? "active" : ""
              }`}
              onClick={() => setSelectedRating("all")}
            >
              All Reviews
            </button>
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                className={`filter-btn ${
                  selectedRating === rating.toString() ? "active" : ""
                }`}
                onClick={() => setSelectedRating(rating.toString())}
              >
                {rating} <Star size={14} fill="currentColor" />
              </button>
            ))}
          </div>
          <button className="sort-btn">
            <Filter size={16} />
            Most Helpful
          </button>
        </div>

        {/* Reviews List */}
        <div className="reviews-list">
          {displayedReviews.map((review) => (
            <div key={review.id} className="modern-review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="reviewer-avatar"
                  />
                  <div className="reviewer-details">
                    <div className="reviewer-name-section">
                      <span className="reviewer-name">{review.name}</span>
                    </div>
                    <div className="review-meta">
                      <div className="review-rating">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill={i < review.rating ? "currentColor" : "none"}
                            className={
                              i < review.rating ? "star-filled" : "star-empty"
                            }
                          />
                        ))}
                      </div>
                      <span className="review-time">{review.time}</span>
                    </div>
                  </div>
                </div>
                <button className="review-menu">
                  <MoreHorizontal size={16} />
                </button>
              </div>

              <div className="review-content">
                <p>{review.comment}</p>
              </div>

              <div className="review-actions">
                <button className="helpful-btn">
                  <ThumbsUp size={16} />
                  Helpful ({review.helpful})
                </button>
                <button className="reply-btn">
                  <MessageCircle size={16} />
                  Reply
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {hasMoreReviews && (
          <div className="load-more-section">
            <button 
              className="load-more-btn"
              onClick={handleShowMore}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : `Show More Reviews (${filteredReviews.length - visibleReviews} remaining)`}
            </button>
          </div>
        )}
        {!hasMoreReviews && filteredReviews.length > 3 && (
          <div className="load-more-section">
            <p className="all-reviews-loaded">All reviews loaded</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Review;
