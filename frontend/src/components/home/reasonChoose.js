import { features } from "../../utils/data";
const ReasonChoose = () => {
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
              <div
                key={index}
                className="column is-12-mobile is-6-tablet is-4-desktop is-flex"
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
