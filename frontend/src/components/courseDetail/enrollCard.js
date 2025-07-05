import React from "react";
import { courseDetails, courseIncludes } from "../../utils/data";

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
