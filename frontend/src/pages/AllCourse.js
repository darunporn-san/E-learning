import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {  Filter, Search, Loader } from "lucide-react";
import CourseCard from "../components/shared/courseCard";
import { allCourses } from "../utils/data";

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
                    className="input is-medium "
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
                  <button className="button is-medium  is-primary">
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
                  <div className="select is-medium  is-fullwidth">
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
