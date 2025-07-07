import { Category, Course, Instructor, Student } from "../types";

// Sample data
export const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    instructor: 'John Doe',
    instructorId: '1',
    category: 'Programming',
    price: 89.99,
    rating: 4.8,
    students: 13149,
    duration: '40 hours',
    lessons: 156,
    status: 'published',
    thumbnail: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Master HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. Build real-world projects and launch your web development career.',
    level: 'Beginner',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    createdAt: '2024-01-15',
    updatedAt: '2024-07-01',
    courseLessons: [
      {
        id: '1',
        courseId: '1',
        title: 'Introduction to Web Development',
        description: 'Overview of web development technologies and tools',
        type: 'video',
        duration: '15 min',
        order: 1,
        isPublished: true,
        videoUrl: 'https://example.com/video1',
        resources: [
          { id: '1', name: 'Course Slides.pdf', type: 'pdf', url: '#', size: '2.5 MB' },
          { id: '2', name: 'Setup Guide', type: 'link', url: '#' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'JavaScript Mastery',
    instructor: 'Sarah Johnson',
    instructorId: '2',
    category: 'Programming',
    price: 69.99,
    rating: 4.9,
    students: 8247,
    duration: '32 hours',
    lessons: 124,
    status: 'published',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Complete JavaScript course from beginner to advanced with real-world projects.',
    level: 'Intermediate',
    tags: ['JavaScript', 'ES6', 'Async/Await', 'DOM'],
    createdAt: '2024-02-20',
    updatedAt: '2024-06-15',
    courseLessons: []
  },
  {
    id: '3',
    title: 'Python for Data Science',
    instructor: 'Dr. Michael Chen',
    instructorId: '3',
    category: 'Data Science',
    price: 79.99,
    rating: 4.8,
    students: 5932,
    duration: '28 hours',
    lessons: 98,
    status: 'draft',
    thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Learn Python programming and data analysis with hands-on projects and real datasets.',
    level: 'Beginner',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    createdAt: '2024-03-10',
    updatedAt: '2024-06-20',
    courseLessons: []
  }
];

export const sampleInstructors: Instructor[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@edulearn.com',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Senior Full Stack Developer with 8+ years of experience',
    courses: 3,
    rating: 4.8,
    students: 15000,
    specialties: ['Web Development', 'JavaScript', 'React'],
    status: 'active'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@edulearn.com',
    avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'JavaScript expert and frontend architect',
    courses: 2,
    rating: 4.9,
    students: 12000,
    specialties: ['JavaScript', 'Frontend', 'React'],
    status: 'active'
  },
  {
    id: '3',
    name: 'Dr. Michael Chen',
    email: 'michael@edulearn.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Data Science expert with PhD in Computer Science',
    courses: 1,
    rating: 4.8,
    students: 8000,
    specialties: ['Python', 'Data Science', 'Machine Learning'],
    status: 'active'
  }
];

export const sampleStudents: Student[] = [
  {
    id: '1',
    name: 'Alice Smith',
    email: 'alice@example.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    enrolledCourses: 3,
    completedCourses: 1,
    totalHours: 45,
    joinedAt: '2024-01-20',
    status: 'active'
  },
  {
    id: '2',
    name: 'Bob Wilson',
    email: 'bob@example.com',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    enrolledCourses: 2,
    completedCourses: 2,
    totalHours: 72,
    joinedAt: '2024-02-15',
    status: 'active'
  }
];

export const sampleCategories: Category[] = [
  { id: '1', name: 'Programming', description: 'Software development and coding courses', color: 'blue', courseCount: 45 },
  { id: '2', name: 'Data Science', description: 'Data analysis and machine learning', color: 'green', courseCount: 23 },
  { id: '3', name: 'Design', description: 'UI/UX and graphic design courses', color: 'purple', courseCount: 18 },
  { id: '4', name: 'Business', description: 'Business and entrepreneurship', color: 'orange', courseCount: 12 },
  { id: '5', name: 'Marketing', description: 'Digital marketing and SEO', color: 'pink', courseCount: 8 }
];