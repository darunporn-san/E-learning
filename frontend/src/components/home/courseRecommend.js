import { Link } from "react-router-dom";
import CourseCard from "../shared/courseCard";
import { courses } from "../../utils/data";
import TitleHome from "../shared/titleHome";

const CouresRecommend = () => {
  return (
    <section id="courses" className="section has-background-light">
      <div className="container">
        <TitleHome
          title="Popular Courses"
          description="Join thousands of students who are advancing their careers with our
            expert-led courses."
        />

        <div className="columns is-multiline">
          {courses.map((course) => (
            <div key={course.id} className="column is-4">
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        <div className="has-text-centered mt-6">
          <Link
            to="/course-list"
            className="button is-large is-outlined is-primary"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CouresRecommend;
