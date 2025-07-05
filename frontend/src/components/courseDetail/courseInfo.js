import React, { useState } from "react";
import { Heart, Share2, Star, Play } from "lucide-react";
import { useLocation } from "react-router-dom";
import NameUser from "../shared/nameUser";

const CourseInfo = () => {
  const location = useLocation();
  const [instructor, setInstructor] = useState({
    name: "John Doe",
    role: "Senior Developer",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  });
  const handleShare = async () => {
    const fullUrl = `${window.location.origin}${location.pathname}`;

    try {
      await navigator.clipboard.writeText(fullUrl);
      alert("URL copied to clipboard: " + fullUrl);
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Failed to copy URL.");
    }
  };

  return (
    <div className="course-card box">
      <div className="content">
        <span className="tag is-primary is-light">Development</span>
        <h1 className="title is-2 mt-3">Complete Web Development Bootcamp</h1>
        <p className="subtitle is-6 has-text-grey">
          Master HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. Build
          real-world projects and launch your web development career.
        </p>
        <NameUser user={instructor} />

        <div className="level is-mobile is-flex-wrap-wrap">
          <div className="level-left">
            <div className="level-item">
              <div className="star-rating">
                <span className="has-text-weight-semibold">4.8</span>
                <span className="ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </span>
                <span className="ml-1 has-text-grey">(13,149 students)</span>
              </div>
            </div>
          </div>

          <div className="level-right mt-2-mobile">
            <div className="level-item">
              <div className="buttons is-flex-wrap-wrap is-justify-content-flex-end">
                <button className="button is-light is-small mr-2 mb-2-mobile">
                  <Heart size={16} />
                  <span className="ml-1">Add to Favorites</span>
                </button>
                <button
                  className="button is-light is-small mb-2-mobile"
                  onClick={handleShare}
                >
                  <Share2 size={16} />
                  <span className="ml-1">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseInfo;
