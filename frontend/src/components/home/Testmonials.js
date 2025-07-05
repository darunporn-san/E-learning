import React from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../../utils/data";
import NameUser from "../shared/nameUser";
import TitleHome from "../shared/titleHome";
const Testmonials = () => {
  return (
    <section className="section has-background-white">
      <div className="container">
        <TitleHome
          title="What Our Students Say"
          description="Join thousands of satisfied learners who have transformed their
            careers."
        />
        <div className="columns is-multiline">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="column is-4">
              <div className="card card-hover">
                <div className="card-content">
                  <NameUser user={testimonial} />
                  <div className="is-flex is-justify-content-space-between is-align-items-center is-flex-wrap-wrap mb-4">
                    <div className="is-flex is-align-items-center mb-2 mr-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="has-text-warning"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <div>
                      <span className="tag is-light is-small">
                        {testimonial.course}
                      </span>
                    </div>
                  </div>

                  <div className="content">
                    <Quote className="has-text-grey-lighter mb-2" size={32} />
                    <p className="has-text-grey-dark">{testimonial.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testmonials;
