import React from "react";
import { Star, Quote } from "lucide-react";
const Testmonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "Software Developer",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      rating: 5,
      comment:
        "The courses are incredibly well-structured and the instructors are top-notch. I landed my dream job thanks to the skills I learned here!",
      course: "JavaScript Mastery",
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Data Analyst",
      gradient: "linear-gradient(135deg, #48cae4 0%, #0077b6 100%)",
      rating: 5,
      comment:
        "Amazing learning experience! The Python course gave me the confidence to transition into data science. Highly recommended!",
      course: "Python for Data Science",
    },
    {
      id: 3,
      name: "David Kim",
      role: "Digital Marketer",
      gradient: "linear-gradient(135deg, #f72585 0%, #b5179e 100%)",
      rating: 5,
      comment:
        "The social media marketing course transformed my business. I saw a 300% increase in engagement within the first month!",
      course: "Social Media Marketing",
    },
  ];

  return (
    <section className="section has-background-white">
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 className="title is-2">What Our Students Say</h2>
          <p className="subtitle is-4 has-text-grey">
            Join thousands of satisfied learners who have transformed their
            careers.
          </p>
        </div>

        <div className="columns is-multiline">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="column is-4">
              <div className="card card-hover">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <div
                        className="testimonial-avatar"
                        style={{ background: testimonial.gradient }}
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                    <div className="media-content">
                      <p className="title is-6">{testimonial.name}</p>
                      <p className="subtitle is-7 has-text-grey">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

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
