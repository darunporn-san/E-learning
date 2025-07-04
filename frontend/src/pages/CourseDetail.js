import CourseInfo from "../components/courseDetail/courseInfo";
import EnrollCard from "../components/courseDetail/enrollCard";
import { Star, Clock, Users, Play } from "lucide-react";
import Overview from "../components/courseDetail/overview";

const CourseDetail = () => {
  return (
    <section className="section">
      <div className="container py-5">
        <div className="columns">
          <div className="column is-8">
            <CourseInfo />
            <div className="course-card box">
              <div
                className="course-image"
                style={{
                  background:
                    "linear-gradient(135deg, #ffdd57 0%, #ff9f43 100%)",
                  height: 400,
                }}
              >
                <div className="play-button">
                  <Play className="has-text-white" size={24} />
                </div>
              </div>
            </div>
            <Overview/>
          </div>
          <div className="column is-4">
            <EnrollCard />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CourseDetail;
