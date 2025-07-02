import React from "react";
import { ArrowRight, Play } from "lucide-react";

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
                <button className="button is-warning is-large">
                  <span>Start Learning</span>
                  <span className="icon">
                    <ArrowRight size={20} />
                  </span>
                </button>
                <button className="button is-light is-large is-outlined">
                  <span className="icon">
                    <Play size={20} />
                  </span>
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          

            {/* <div className="column is-6">
              <div className="has-text-centered">
                <div className="hero-illustration">
                  <div className="person-avatar">
                    <div className="person-inner">
                      <div className="person-dot"></div>
                    </div>
                    <div className="graduation-cap"></div>
                  </div>

                  <div className="book-stack">
                    <div className="book book-1"></div>
                    <div className="book book-2"></div>
                    <div className="book book-3"></div>
                  </div>

                  <div className="progress-bars">
                    <div className="custom-progress">
                      <div
                        className="custom-progress-bar"
                        style={{
                          width: "75%",
                          background:
                            "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                        }}
                      ></div>
                    </div>
                    <div className="custom-progress">
                      <div
                        className="custom-progress-bar"
                        style={{
                          width: "50%",
                          background:
                            "linear-gradient(90deg, #48cae4 0%, #0077b6 100%)",
                        }}
                      ></div>
                    </div>
                    <div className="custom-progress">
                      <div
                        className="custom-progress-bar"
                        style={{
                          width: "85%",
                          background:
                            "linear-gradient(90deg, #f72585 0%, #b5179e 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="floating-elements">
                  <div className="floating-circle"></div>
                  <div className="floating-circle"></div>
                  <div className="floating-circle"></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
