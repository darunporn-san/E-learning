import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {  Filter, Search, Loader } from "lucide-react";
import CourseCard from "../components/shared/courseCard";

const AllCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const categories = [
    "All",
    "Programming",
    "Data Science",
    "Marketing",
    "Design",
    "Business",
    "Photography",
  ];

  // Extended course data with more courses for infinite scroll demonstration
  const allCourses = [
    {
      id: 1,
      title: "JavaScript Mastery",
      description:
        "Complete JavaScript course from beginner to advanced with real-world projects.",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 12847,
      duration: "42 hours",
      price: 89,
      originalPrice: 149,
      gradient: "linear-gradient(135deg, #ffdd57 0%, #ff9f43 100%)",
      category: "Programming",
      level: "Beginner to Advanced",
      lessons: 156,
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
      price: 79,
      originalPrice: 129,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      category: "Data Science",
      level: "Intermediate",
      lessons: 124,
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
      price: 69,
      originalPrice: 119,
      gradient: "linear-gradient(135deg, #f72585 0%, #b5179e 100%)",
      category: "Marketing",
      level: "Beginner",
      lessons: 89,
    },
    {
      id: 4,
      title: "React Development Bootcamp",
      description:
        "Build modern web applications with React, Redux, and modern JavaScript.",
      instructor: "Alex Thompson",
      rating: 4.9,
      students: 15632,
      duration: "45 hours",
      price: 99,
      originalPrice: 179,
      gradient: "linear-gradient(135deg, #61dafb 0%, #21759b 100%)",
      category: "Programming",
      level: "Intermediate",
      lessons: 178,
    },
    {
      id: 5,
      title: "UI/UX Design Fundamentals",
      description:
        "Learn design principles, user research, and create stunning user interfaces.",
      instructor: "Lisa Park",
      rating: 4.8,
      students: 6429,
      duration: "32 hours",
      price: 75,
      originalPrice: 125,
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
      category: "Design",
      level: "Beginner",
      lessons: 98,
    },
    {
      id: 6,
      title: "Machine Learning with Python",
      description:
        "Dive deep into machine learning algorithms and build predictive models.",
      instructor: "Dr. James Wilson",
      rating: 4.9,
      students: 8934,
      duration: "52 hours",
      price: 119,
      originalPrice: 199,
      gradient: "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)",
      category: "Data Science",
      level: "Advanced",
      lessons: 203,
    },
    {
      id: 7,
      title: "Digital Marketing Strategy",
      description:
        "Complete digital marketing course covering SEO, PPC, content marketing, and analytics.",
      instructor: "Mark Davis",
      rating: 4.6,
      students: 5847,
      duration: "35 hours",
      price: 85,
      originalPrice: 145,
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      category: "Marketing",
      level: "Intermediate",
      lessons: 112,
    },
    {
      id: 8,
      title: "Business Analytics",
      description:
        "Learn to analyze business data and make data-driven decisions.",
      instructor: "Jennifer Lee",
      rating: 4.7,
      students: 4521,
      duration: "29 hours",
      price: 79,
      originalPrice: 139,
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      category: "Business",
      level: "Intermediate",
      lessons: 87,
    },
    {
      id: 9,
      title: "Photography Masterclass",
      description:
        "Master photography techniques from composition to post-processing.",
      instructor: "David Miller",
      rating: 4.8,
      students: 3892,
      duration: "26 hours",
      price: 65,
      originalPrice: 115,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      category: "Photography",
      level: "Beginner to Advanced",
      lessons: 76,
    },
    {
      id: 10,
      title: "Node.js Backend Development",
      description:
        "Build scalable backend applications with Node.js, Express, and MongoDB.",
      instructor: "Robert Kim",
      rating: 4.8,
      students: 11234,
      duration: "40 hours",
      price: 95,
      originalPrice: 165,
      gradient: "linear-gradient(135deg, #68d391 0%, #38a169 100%)",
      category: "Programming",
      level: "Intermediate",
      lessons: 145,
    },
    {
      id: 11,
      title: "Advanced Photoshop Techniques",
      description:
        "Master professional photo editing and digital art creation with Adobe Photoshop.",
      instructor: "Maria Santos",
      rating: 4.7,
      students: 7456,
      duration: "30 hours",
      price: 70,
      originalPrice: 120,
      gradient: "linear-gradient(135deg, #9f7aea 0%, #805ad5 100%)",
      category: "Design",
      level: "Advanced",
      lessons: 92,
    },
    {
      id: 12,
      title: "Financial Planning & Investment",
      description:
        "Learn personal finance, investment strategies, and wealth building techniques.",
      instructor: "Thomas Brown",
      rating: 4.6,
      students: 5632,
      duration: "25 hours",
      price: 60,
      originalPrice: 110,
      gradient: "linear-gradient(135deg, #f6ad55 0%, #ed8936 100%)",
      category: "Business",
      level: "Beginner",
      lessons: 78,
    },
    {
      id: 13,
      title: "Deep Learning with TensorFlow",
      description:
        "Advanced neural networks and deep learning using TensorFlow and Keras.",
      instructor: "Dr. Anna Petrov",
      rating: 4.9,
      students: 6789,
      duration: "55 hours",
      price: 129,
      originalPrice: 219,
      gradient: "linear-gradient(135deg, #4299e1 0%, #3182ce 100%)",
      category: "Data Science",
      level: "Advanced",
      lessons: 234,
    },
    {
      id: 14,
      title: "Content Marketing Mastery",
      description:
        "Create compelling content that drives engagement and converts visitors to customers.",
      instructor: "Jessica White",
      rating: 4.5,
      students: 4321,
      duration: "22 hours",
      price: 55,
      originalPrice: 95,
      gradient: "linear-gradient(135deg, #ed64a6 0%, #d53f8c 100%)",
      category: "Marketing",
      level: "Beginner",
      lessons: 67,
    },
    {
      id: 15,
      title: "Mobile App Design with Figma",
      description:
        "Design beautiful mobile applications using Figma and modern design principles.",
      instructor: "Carlos Rodriguez",
      rating: 4.8,
      students: 8765,
      duration: "28 hours",
      price: 80,
      originalPrice: 140,
      gradient: "linear-gradient(135deg, #38b2ac 0%, #319795 100%)",
      category: "Design",
      level: "Intermediate",
      lessons: 85,
    },
    {
      id: 16,
      title: "Wedding Photography Business",
      description:
        "Start and grow a successful wedding photography business from scratch.",
      instructor: "Sophie Turner",
      rating: 4.7,
      students: 2987,
      duration: "24 hours",
      price: 75,
      originalPrice: 125,
      gradient: "linear-gradient(135deg, #fc8181 0%, #f56565 100%)",
      category: "Photography",
      level: "Intermediate",
      lessons: 72,
    },
    {
      id: 17,
      title: "Vue.js Complete Guide",
      description:
        "Master Vue.js framework and build modern single-page applications.",
      instructor: "Kevin Zhang",
      rating: 4.8,
      students: 9876,
      duration: "36 hours",
      price: 85,
      originalPrice: 155,
      gradient: "linear-gradient(135deg, #48bb78 0%, #38a169 100%)",
      category: "Programming",
      level: "Intermediate",
      lessons: 128,
    },
    {
      id: 18,
      title: "Startup Business Strategy",
      description:
        "Learn how to validate, launch, and scale a successful startup business.",
      instructor: "Michael Johnson",
      rating: 4.6,
      students: 6543,
      duration: "33 hours",
      price: 90,
      originalPrice: 160,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      category: "Business",
      level: "Advanced",
      lessons: 105,
    },
  ];

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default: // popular
        return b.students - a.students;
    }
  });

  // Reset displayed courses when filters change
  useEffect(() => {
    const initialCourses = sortedCourses.slice(0, coursesPerPage);
    setDisplayedCourses(initialCourses);
    setCurrentPage(1);
    setHasMore(sortedCourses.length > coursesPerPage);
  }, [selectedCategory, searchTerm, sortBy]);

  const fetchMoreCourses = () => {
    const nextPage = currentPage + 1;
    const startIndex = nextPage * coursesPerPage;
    const endIndex = startIndex + coursesPerPage;
    const newCourses = sortedCourses.slice(startIndex, endIndex);

    if (newCourses.length > 0) {
      setTimeout(() => {
        setDisplayedCourses((prev) => [...prev, ...newCourses]);
        setCurrentPage(nextPage);
        setHasMore(endIndex < sortedCourses.length);
      }, 500); // Simulate loading delay
    } else {
      setHasMore(false);
    }
  };

  const LoadingSpinner = () => (
    <div className="has-text-centered py-6">
      <Loader className="has-text-primary animate-spin" size={32} />
      <p className="mt-3 has-text-grey">Loading more courses...</p>
    </div>
  );

  const EndMessage = () => (
    <div className="has-text-centered py-6">
      <p className="title is-5 has-text-grey">🎉 You've seen all courses!</p>
      <p className="subtitle is-6 has-text-grey">
        Try adjusting your filters to discover more content
      </p>
    </div>
  );

  return (
    <div style={{ paddingTop: "3.25rem" }}>
      {/* Hero Section */}
      <section className="hero is-medium hero-gradient">
        <div className="hero-body">
          <div className="container">
            <div className="has-text-centered">
              <h1 className="title is-1 has-text-white">All Courses</h1>
              <p className="subtitle is-4 has-text-white-ter">
                Discover our complete collection of expert-led courses designed
                to advance your career
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="section has-background-white">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <div className="field has-addons">
                <div className="control has-icons-left is-expanded">
                  <input
                    className="input is-large"
                    type="text"
                    placeholder="Search courses, instructors, or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <span className="icon is-left">
                    <Search size={20} />
                  </span>
                </div>
                <div className="control">
                  <button className="button is-large is-primary">
                    <span className="icon">
                      <Search size={20} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="field">
                <div className="control has-icons-left">
                  <div className="select is-large is-fullwidth">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="popular">Most Popular</option>
                      <option value="rating">Highest Rated</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>
                  <span className="icon is-left">
                    <Filter size={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="field is-grouped is-grouped-multiline mb-6">
            {categories.map((category) => (
              <div key={category} className="control">
                <button
                  className={`button ${
                    selectedCategory === category ? "is-primary" : "is-light"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </div>
            ))}
          </div>

          {/* Results Count */}
          <div className="level mb-5">
            <div className="level-left">
              <div className="level-item">
                <p className="subtitle is-6">
                  Showing {displayedCourses.length} of {sortedCourses.length}{" "}
                  courses
                </p>
              </div>
            </div>
          </div>

          {/* Infinite Scroll Courses Grid */}
          {displayedCourses.length > 0 ? (
            <InfiniteScroll
              dataLength={displayedCourses.length}
              next={fetchMoreCourses}
              hasMore={hasMore}
              loader={<LoadingSpinner />}
              endMessage={<EndMessage />}
              style={{ overflow: "visible" }}
            >
              <div className="columns is-multiline">
                {displayedCourses.map((course) => (
                  <div className="column is-4" key={course.id}>
                    <CourseCard course={course}/>
                    {/* <CourseCard key={course.id} course={course} /> */}
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          ) : (
            /* No Results */
            <div className="has-text-centered mt-6">
              <p className="title is-4">No courses found</p>
              <p className="subtitle is-6">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllCourses;
