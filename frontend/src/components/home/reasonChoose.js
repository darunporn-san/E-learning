import React from "react";
import { Award, BookOpen, Users, Clock, Globe, Headphones } from "lucide-react";
const ReasonChoose = () => {
  const features = [
    {
      icon: Award,
      title: "Skill Certification",
      description:
        "Get certified and showcase your achievements with industry-recognized credentials.",
      color: "has-background-white has-text-primary",
      background: "has-background-primary-light",
    },
    {
      icon: BookOpen,
      title: "Certified Courses",
      description:
        "Access premium courses designed by experts and approved by industry leaders.",
      color: "has-background-white has-text-danger",
      background: "has-background-danger-light",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of real-world experience.",
      color: "has-background-white has-text-success",
      background: "has-background-success-light",
    },
    {
      icon: Clock,
      title: "Online Learning",
      description:
        "Study at your own pace with flexible scheduling that fits your lifestyle.",
      color: "has-background-white has-text-warning-dark",
      background: "has-background-warning-light",
    },
    {
      icon: Globe,
      title: "Lifetime Access",
      description:
        "Enjoy unlimited access to course materials and updates for life.",
      color: "has-background-white has-text-info",
      background: "has-background-info-light",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Get help whenever you need it with our dedicated support team.",
      color: "has-background-white has-text-primary",
      background: "has-background-primary-light",
    },
  ];

  return (
    <section id="about" className="section has-background-white	">
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 className="title is-2">Why Choose EduLearn?</h2>
          <p className="subtitle is-4 has-text-grey">
            We provide the best online learning experience with cutting-edge
            features designed to help you succeed.
          </p>
        </div>

        <div className="columns is-multiline">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
      <div key={index}        className="column is-12-mobile is-6-tablet is-4-desktop is-flex"
>
                <div
                  className={`card card-hover is-flex is-flex-direction-column is-fullheight ${feature.background}`}
                >
                  <div className="card-content" style={{ flexGrow: 1 }}>
                    <div className={`feature-icon ${feature.color}`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="title is-5">{feature.title}</h3>
                    <p className="has-text-grey">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ReasonChoose;
