import { Link } from 'react-router-dom';
import CourseCard from "../shared/courseCard";

const CouresRecommend = () => {
  const courses = [
    {
      id: 1,
      title: "JavaScript Mastery",
      description:
        "Complete JavaScript course from beginner to advanced with real-world projects.",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 12847,
      duration: "42 hours",

      gradient: "linear-gradient(135deg, #ffdd57 0%, #ff9f43 100%)",
      category: "Programming",
    },
    {
      id: 2,
      title: "Python for Data Science",
      description:
        "Learn Python programming and data analysis with hands-on projects and real datasets.",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      students: 9573,
      duration: "38 hours",

      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      category: "Data Science",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description:
        "Master social media advertising and grow your business with proven strategies.",
      instructor: "Emma Rodriguez",
      rating: 4.7,
      students: 7821,
      duration: "28 hours",

      gradient: "linear-gradient(135deg, #f72585 0%, #b5179e 100%)",
      category: "Marketing",
    },
  ];

  return (
    <section id="courses" className="section has-background-light">
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 className="title is-2">Popular Courses</h2>
          <p className="subtitle is-4 has-text-grey">
            Join thousands of students who are advancing their careers with our
            expert-led courses.
          </p>
        </div>

        <div className="columns is-multiline">
          {courses.map((course) => (
            <div key={course.id} className="column is-4">
              <CourseCard course={course}/>
            
            </div>
          ))}
        </div>

        <div className="has-text-centered mt-6">
           <Link to="/course-list" className="button is-large is-outlined is-primary">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CouresRecommend;
