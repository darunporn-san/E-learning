import { Course, Lesson } from '../types';
import {
  Video,
  FileText,
  CheckCircle,
  Upload,LucideIcon 
} from 'lucide-react';

export const getStatusColor = (status: Course['status']) => {
  switch (status) {
    case 'published': return 'bg-green-100 text-green-800';
    case 'draft': return 'bg-yellow-100 text-yellow-800';
    case 'under_review': return 'bg-blue-100 text-blue-800';
    case 'archived': return 'bg-gray-100 text-gray-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const getLessonTypeIcon = (type: Lesson['type']): LucideIcon => {
  switch (type) {
    case 'video': return Video;
    case 'text': return FileText;
    case 'quiz': return CheckCircle;
    case 'assignment': return Upload;
    default: return FileText;
  }
};