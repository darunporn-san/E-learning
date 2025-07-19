import type { FC } from 'react';
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
  lessons?: number[]; // Assuming lessons can be an array of lesson IDs or a count
  status: "draft" | "under_review" | "published" | "archived";
  thumbnail: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  createdAt: string;
  updatedAt: string;
  courseLessons: ILesson[];
  image: string;
  progress: number; // Percentage of course completion
}

export interface ILesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  type: "video" | "text" | "quiz" | "assignment";
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
  type: "pdf" | "video" | "link" | "file";
  url: string;
  size?: string;
}

export interface Instructor {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  rating: number;
  students?: number;
  specialties?: string[];
  status?: "active" | "inactive";
  totalStudents: number;
  expertise: string[];
  totalCourses: number;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  enrolledCourses: number[] | string[]; // Array of course IDs
  completedCourses: number[] | string[]; // Array of course IDs
  totalHours: number;
  joinedAt: string;
  status: "active" | "inactive";
  progress: Record<string, number>; // Course ID to progress percentage
}

export interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  courseCount: number;
}

export interface IStat {
  title: string;
  value: string;
  change?: {
    value: number;
    isPositive: boolean;
  };
icon: FC<{ className?: string }>;
  color: string;
}
