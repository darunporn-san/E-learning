import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section id="home" className="hero is-large hero-gradient">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h1 className="title is-1 has-text-white">
                Learn Without
                <span className="has-text-warning"> Limits</span>
              </h1>
              <p className="subtitle is-4 has-text-white-ter mb-6">
                Discover thousands of expert-led courses and build skills that
                matter. Start your journey to success with comprehensive
                e-learning designed for modern learners.
              </p>
              <div className="buttons">
                <Link to="/course-list" className="button is-warning is-large">
                  <span>Start Learning</span>
                  <span className="icon">
                    <ArrowRight size={20} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
