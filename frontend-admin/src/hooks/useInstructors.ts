import { Instructor } from '../types';
import { mockInstructors } from '../data/mockData.ts';
import { useLocalStorage } from './useLocalStorage';

export function useInstructors() {
  const [instructors, setInstructors] = useLocalStorage<Instructor[]>('instructors', mockInstructors);

  const addInstructor = (instructor: Omit<Instructor, 'id'>) => {
    const newInstructor: Instructor = {
      ...instructor,
      id: Date.now().toString()
    };
    setInstructors((prev: Instructor[]) => [...prev, newInstructor]);
  };

  const updateInstructor = (id: string, updates: Partial<Instructor>) => {
    setInstructors((prev: Instructor[]) => 
      prev.map((instructor: Instructor) => 
        instructor.id === id ? { ...instructor, ...updates } : instructor
      )
    );
  };

  const deleteInstructor = (id: string) => {
    setInstructors((prev: Instructor[]) => prev.filter((instructor: Instructor) => instructor.id !== id));
  };

  const getInstructor = (id: string) => {
    return instructors.find((instructor: Instructor) => instructor.id === id);
  };

  return {
    instructors,
    addInstructor,
    updateInstructor,
    deleteInstructor,
    getInstructor
  } ;
}