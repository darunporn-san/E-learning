// types/index.ts
export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorId: string;
  category: string;
  price: number;
  rating: number;
  students: number;
  duration: string;
  lessons: number;
  status: 'draft' | 'under_review' | 'published' | 'archived';
  thumbnail: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  createdAt: string;
  updatedAt: string;
  courseLessons: Lesson[];
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  type: 'video' | 'text' | 'quiz' | 'assignment';
  duration: string;
  order: number;
  isPublished: boolean;
  videoUrl?: string;
  content?: string;
  resources: LessonResource[];
}

export interface LessonResource {
  id: string;
  name: string;
  type: 'pdf' | 'video' | 'link' | 'file';
  url: string;
  size?: string;
}

export interface Instructor {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  courses: number;
  rating: number;
  students: number;
  specialties: string[];
  status: 'active' | 'inactive';
}

export interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  enrolledCourses: number;
  completedCourses: number;
  totalHours: number;
  joinedAt: string;
  status: 'active' | 'inactive';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  courseCount: number;
}