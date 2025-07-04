import { Star, Clock, Users, Play } from "lucide-react";
const CourseCard = ({ course }) => {
  return (
    <div className="card card-hover is-flex is-flex-direction-column is-fullheight">
      <div className="course-image" style={{ background: course.gradient }}>
        <div className="play-button">
          <Play className="has-text-white" size={24} />
        </div>
        <div
          className="tag is-light"
          style={{ position: "absolute", top: "1rem", left: "1rem" }}
        >
          {course.category}
        </div>
      </div>

      <div className="card-content" style={{ flexGrow: 1 }}>
        <div className="is-flex is-justify-content-space-between is-align-items-center">
          <h3 className="title is-5 m-0">{course.title}</h3>
          <div className="field is-grouped is-align-items-center">
            <Star
              size={16}
              className="has-text-warning is-filled"
              fill="currentColor"
            />
            <span className="ml-2 has-text-weight-semibold">
              {course.rating}
            </span>
          </div>
        </div>
        <p className="has-text-grey mb-4">{course.description}</p>

        <div className="level is-mobile mb-4">
          <div className="level-left">
            <div className="level-item">
              <span className="icon-text">
                <span className="icon">
                  <Users size={16} />
                </span>
                <span className="is-size-7">
                  {course.students.toLocaleString()}
                </span>
              </span>
            </div>
            <div className="level-item">
              <span className="icon-text">
                <span className="icon">
                  <Clock size={16} />
                </span>
                <span className="is-size-7">{course.duration}</span>
              </span>
            </div>
          </div>
        </div>

        <p className="is-size-7 has-text-grey mb-4">
          by{" "}
          <span className="has-text-weight-semibold">{course.instructor}</span>
        </p>

        <button className="button is-primary is-fullwidth has-text-white">Enroll Now</button>
      </div>
    </div>
  );
};
export default CourseCard;
