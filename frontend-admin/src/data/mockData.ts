import { Course, Instructor, Student,IStat } from '../types';
import { Users, BookOpen, Target, TrendingUp,} from 'lucide-react';


export const mockCourses: Course[]  = [
  {
    id: "course-001",
    title: "Introduction to Web Development",
    instructor: "Jane Doe",
    instructorId: "instructor-123",
    category: "Web Development",
    price: 49.99,
    rating: 4.7,
    students: 1200,
    duration: "12h 30m",
    lessons: [101, 102, 103, 104],
    status: "published",
    thumbnail: "https://example.com/images/course-001-thumb.jpg",
    description: "Learn the basics of HTML, CSS, and JavaScript to build your own websites from scratch.",
    level: "Beginner",
    tags: ["HTML", "CSS", "JavaScript", "Frontend"],
    createdAt: "2025-06-15T08:00:00Z",
    updatedAt: "2025-07-10T12:30:00Z",
   courseLessons: [
      {
        id: "lesson-001",
        courseId: "course-001",
        title: "Getting Started with HTML",
        description: "Introduction to HTML structure and elements.",
        type: "video",
        duration: "30m",
        order: 1,
        isPublished: true,
        videoUrl: "https://example.com/videos/html-intro.mp4",
        resources: [],
      },
      {
        id: "lesson-002",
        courseId: "course-001",
        title: "Styling with CSS",
        description: "Learn how to style your pages using CSS.",
        type: "video",
        duration: "45m",
        order: 2,
        isPublished: true,
        videoUrl: "https://example.com/videos/css-styling.mp4",
        resources: [],
      },
      {
        id: "lesson-003",
        courseId: "course-001",
        title: "JavaScript Basics",
        description: "Add interactivity to your site with JavaScript.",
        type: "video",
        duration: "50m",
        order: 3,
        isPublished: false,
        videoUrl: "https://example.com/videos/js-basics.mp4",
        resources: [],
      }
    ],
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=500",
    progress: 60,
  },
  {
    id: "course-002",
    title: "Advanced React Techniques",
    instructor: "John Smith",
    instructorId: "instructor-456",
    category: "Frontend Development",
    price: 79.99,
    rating: 4.9,
    students: 850,
    duration: "8h 45m",
    lessons: [201, 202, 203],
    status: "under_review",
    thumbnail: "https://example.com/images/course-002-thumb.jpg",
    description: "Master advanced patterns and performance optimization techniques in React.",
    level: "Advanced",
    tags: ["React", "Hooks", "Performance", "Optimization"],
    createdAt: "2025-05-20T10:15:00Z",
    updatedAt: "2025-07-05T09:00:00Z",
    courseLessons: [
      {
        id: "lesson-001",
        courseId: "course-001",
        title: "Getting Started with HTML",
        description: "Introduction to HTML structure and elements.",
        type: "video",
        duration: "30m",
        order: 1,
        isPublished: true,
        videoUrl: "https://example.com/videos/html-intro.mp4",
        resources: [],
      },
      {
        id: "lesson-002",
        courseId: "course-001",
        title: "Styling with CSS",
        description: "Learn how to style your pages using CSS.",
        type: "video",
        duration: "45m",
        order: 2,
        isPublished: true,
        videoUrl: "https://example.com/videos/css-styling.mp4",
        resources: [],
      },
      {
        id: "lesson-003",
        courseId: "course-001",
        title: "JavaScript Basics",
        description: "Add interactivity to your site with JavaScript.",
        type: "video",
        duration: "50m",
        order: 3,
        isPublished: false,
        videoUrl: "https://example.com/videos/js-basics.mp4",
        resources: [],
      }
    ],
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500",
    progress: 30,
  }
];

export const mockInstructors: Instructor[] = [
    {
        id: '1',
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        bio: 'Full-stack developer with 8+ years of experience in React and Node.js',
        expertise: ['React', 'JavaScript', 'Node.js', 'TypeScript'],
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.8,
        totalStudents: 2500,
        totalCourses: 5
    },
    {
        id: '2',
        name: 'Mike Chen',
        email: 'mike@example.com',
        bio: 'Senior JavaScript developer and technical writer',
        expertise: ['JavaScript', 'Python', 'Web APIs', 'Performance'],
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.9,
        totalStudents: 1800,
        totalCourses: 3
    },
    {
        id: '3',
        name: 'Emily Davis',
        email: 'emily@example.com',
        bio: 'UX/UI designer with a passion for creating beautiful and functional interfaces',
        expertise: ['UI Design', 'UX Research', 'Figma', 'Prototyping'],
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.7,
        totalStudents: 1200,
        totalCourses: 4
    }
];

export const mockStudents: Student[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        enrolledCourses: ['1', '2'],
        completedCourses: [],
        progress: { '1': 25, '2': 10 },
        totalHours: 10,
        joinedAt: '2023-01-01',
        status: 'active'
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
        enrolledCourses: ['1', '3'],
        completedCourses: ['1'],
        progress: { '1': 100, '3': 60 },
        totalHours: 20,
        joinedAt: '2023-02-01',
        status: 'active'
    }
];

export const mockstats: IStat[] = [
    { 
      title: 'Total Students', 
      value: mockStudents.length.toLocaleString(), 
      change: { value: 5, isPositive: true },
      icon: Users, 
      color: 'from-blue-500 to-blue-600' 
    },
    { 
      title: 'Active Courses', 
      value: mockCourses.filter(c => c.status === 'published').length.toString(), 
      change: { value: 3, isPositive: true },
      icon: BookOpen, 
      color: 'from-green-500 to-green-600' 
    },
    { 
      title: 'Completion Rate', 
      value: '84%', 
      change: { value: 2, isPositive: true }, 
      icon: Target, 
      color: 'from-purple-500 to-purple-600' 
    },
    { 
      title: 'Revenue', 
      value: '$32,847', 
      change: { value: 18, isPositive: true }, 
      icon: TrendingUp, 
      color: 'from-orange-500 to-orange-600' 
    }
  ];

 export    const recentActivities = [
    { action: 'New student enrolled', course: 'React Development', time: '2 hours ago', type: 'enrollment' },
    { action: 'Course completed', course: 'UI/UX Design', time: '4 hours ago', type: 'completion' },
    { action: 'New lesson published', course: 'Data Science', time: '1 day ago', type: 'content' },
    { action: 'Student certificate issued', course: 'Digital Marketing', time: '2 days ago', type: 'certificate' }
  ];

 export const upcomingEvents = [
    { title: 'Live Q&A Session', course: 'React Development', date: 'Today, 3:00 PM', type: 'live' },
    { title: 'Assignment Deadline', course: 'UI/UX Design', date: 'Tomorrow, 11:59 PM', type: 'deadline' },
    { title: 'New Course Launch', course: 'Machine Learning', date: 'Dec 15, 2024', type: 'launch' }
  ];
