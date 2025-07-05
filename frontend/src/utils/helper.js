import {
  BookOpen,
  Download,
  Play,
  Clock,
  CheckCircle,
  Lock,
} from "lucide-react";
export const getTypeIcon = (type) => {
  switch (type) {
    case "video":
      return <Play size={14} />;
    case "quiz":
      return <CheckCircle size={14} />;
    case "project":
      return <BookOpen size={14} />;
    case "resource":
      return <Download size={14} />;
    default:
      return <Play size={14} />;
  }
};
export const getTypeColor = (type) => {
  switch (type) {
    case "video":
      return "type-video";
    case "quiz":
      return "type-quiz";
    case "project":
      return "type-project";
    case "resource":
      return "type-resource";
    default:
      return "type-video";
  }
};
