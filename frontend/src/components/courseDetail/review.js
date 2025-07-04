import { Star, ThumbsUp, MessageCircle, MoreHorizontal, Filter, Send } from 'lucide-react';
import React, { useState } from 'react';

const Review = () =>{
     const [selectedRating, setSelectedRating] = useState('all');
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reviews = [
    {
      id: 1,
      name: 'Alex Johnson',
      rating: 5,
      time: '2 days ago',
      comment: 'Excellent course! The instructor explains everything clearly and the projects are very practical. I feel confident in my web development skills now. The step-by-step approach and real-world examples made all the difference.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      helpful: 24,
    },
    {
      id: 2,
      name: 'Sarah Williams',
      rating: 5,
      time: '1 week ago',
      comment: 'Amazing content and structure. The step-by-step approach made learning so much easier. Highly recommend! The projects are challenging but achievable.',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      helpful: 18,
    },
    {
      id: 3,
      name: 'Michael Chen',
      rating: 4,
      time: '2 weeks ago',
      comment: 'Great course overall. The content is comprehensive and well-organized. Some sections could use more examples, but the instructor is knowledgeable.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      helpful: 12,
    }
  ];

  const ratingDistribution = [
    { stars: 5, count: 856, percentage: 69 },
    { stars: 4, count: 234, percentage: 19 },
    { stars: 3, count: 98, percentage: 8 },
    { stars: 2, count: 32, percentage: 3 },
    { stars: 1, count: 14, percentage: 1 }
  ];

  const filteredReviews = selectedRating === 'all' 
    ? reviews 
    : reviews.filter(review => review.rating === parseInt(selectedRating));

  const handleSubmitReview = async () => {
    if (!userRating || !reviewText.trim()) {
      alert('Please provide both a rating and review text');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Review submitted successfully!');
      setUserRating(0);
      setReviewText('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="student-reviews">
      <div >
        {/* Header Section */}
        <div className="reviews-header">
          <div className="reviews-title-section">
            <h3 className="reviews-title">Student Reviews</h3>
            <div className="reviews-summary">
              <div className="overall-rating">
                <span className="rating-number">4.9</span>
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="star-filled" />
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
                  className={`interactive-star ${i < (hoverRating || userRating) ? 'filled' : ''}`}
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
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="reviews-filter">
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${selectedRating === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedRating('all')}
            >
              All Reviews
            </button>
            {[5, 4, 3, 2, 1].map(rating => (
              <button
                key={rating}
                className={`filter-btn ${selectedRating === rating.toString() ? 'active' : ''}`}
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
          {filteredReviews.map(review => (
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
                            fill={i < review.rating ? 'currentColor' : 'none'}
                            className={i < review.rating ? 'star-filled' : 'star-empty'}
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
        <div className="load-more-section">
          <button className="load-more-btn">
            Show More Reviews
          </button>
        </div>
      </div>
    </div>
  );
}
export default Review