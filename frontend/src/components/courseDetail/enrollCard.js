import React from "react";
import { Clock, PlayCircle, User, Globe, Award } from "lucide-react";

const courseDetails = [
  { icon: <Clock size={16} />, label: "Duration", value: "40 hours" },
  { icon: <PlayCircle size={16} />, label: "Lessons", value: "156 videos" },
  { icon: <User size={16} />, label: "Level", value: "Beginner" },
  { icon: <Globe size={16} />, label: "Language", value: "English" },
  { icon: <Award size={16} />, label: "Certificate", value: "Yes" },
];

const courseIncludes = [
  "40+ hours video",
  "35 articles",
  "Downloadable resources",
  "Full lifetime access",
  "Certificate of completion",
];

const EnrollCard = () => {
  return (
    <div className="price-card box">
      <div className="content">
        <div className="buttons is-fullwidth mb-4">
          <button className="button is-primary is-fullwidth is-medium has-text-white">
            Enroll Now
          </button>
        </div>

        <div className="course-details">
          {courseDetails.map((item, index) => (
            <div
              key={index}
              className="course-feature is-justify-content-space-between"
            >
              <div>
                <span className="icon">{item.icon}</span>
                <span className="has-text-weight-semibold">{item.label}</span>
              </div>
              <span className="is-pulled-right">{item.value}</span>
            </div>
          ))}
        </div>

        <hr />

        <div className="course-includes">
          <p className="has-text-weight-semibold mb-3">This course includes:</p>
          <div className="content">
            {courseIncludes.map((text, index) => (
              <div key={index} className="course-feature">
                <span className="icon has-text-success">✓</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollCard;
