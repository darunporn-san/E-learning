import React from "react";
import { Check } from "lucide-react";

const Content = () => {
  return (
    <div className="course-content">
      <div className="mx-5 my-5">
        <h3 className="title is-4">What you'll learn</h3>
        <div className="columns">
          <div className="column">
            <div className="content">
              <div className="course-feature">
                <span className="icon has-text-success">
                  <Check size={16} />
                </span>
                <span>Build responsive websites with HTML and CSS</span>
              </div>
              <div className="course-feature">
                <span className="icon has-text-success">
                  <Check size={16} />
                </span>
                <span>Create dynamic web apps with React</span>
              </div>
              <div className="course-feature">
                <span className="icon has-text-success">
                  <Check size={16} />
                </span>
                <span>Master JavaScript ES6+ features</span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <div className="course-feature">
                <span className="icon has-text-success">
                  <Check size={16} />
                </span>
                <span>Build backend APIs with Node.js</span>
              </div>
              <div className="course-feature">
                <span className="icon has-text-success">
                  <Check size={16} />
                </span>
                <span>Work with MongoDB databases</span>
              </div>
              <div className="course-feature">
                <span className="icon has-text-success">
                  <Check size={16} />
                </span>
                <span>Deploy applications to production</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 my-5">
        <h3 className="title is-4">Course Description</h3>
        <div className="content">
          <p>
            This comprehensive course covers everything you need to become a
            full-stack web developer. Starting with the fundamentals of HTML and
            CSS, you'll progress through JavaScript, React, and backend
            development with Node.js. By the end of this course, you'll have
            built several real-world projects and gained the skills needed to
            launch your web development career.
          </p>
        </div>
      </div>

      <div className="mx-5 my-5">
        <h3 className="title is-4">Requirements</h3>
        <div className="content">
          <ul>
            <li>Basic computer skills</li>
            <li>No prior programming experience required</li>
            <li>A computer with internet connection</li>
            <li>Willingness to learn and practice</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Content;
