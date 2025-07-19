import { Course } from '../types';
import React from 'react';
import { mockCourses } from '../data/mockData';

// If '../data/mockData' or './useLocalStorage' do not exist, create simple mocks for development/testing:
function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = React.useState<T>(initialValue);
  return [value, setValue];
}

export function useCourses() {
  const [courses, setCourses] = useLocalStorage<Course[]>('courses', mockCourses);
  console.log('mockCourses:', courses,mockCourses);
  
  const addCourse = (course: Omit<Course, 'id'>) => {
    const newCourse: Course = {
      ...course,
      id: Date.now().toString(),
      lessons: 0 // Assuming lessons is a number; adjust as per your Course type definition
    };
    setCourses((prev: Course[]) => [...prev, newCourse]);
  };

  const updateCourse = (id: string, updates: Partial<Course>) => {
    setCourses((prev: Course[]) => 
      prev.map((course: Course) => 
        course.id === id ? { ...course, ...updates } : course
      )
    );
  };

  const deleteCourse = (id: string) => {
    setCourses((prev: Course[]) => prev.filter((course: Course) => course.id !== id));
  };

  const getCourse = (id: string) => {
    return courses.find((course: Course) => course.id === id);
  };

  return {
    courses,
    addCourse,
    updateCourse,
    deleteCourse,
    getCourse
  };
}