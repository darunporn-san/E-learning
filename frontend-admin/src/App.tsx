import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Settings, 
  Star, 
  Search,
  Plus,
  Edit,
  Trash2,

  DollarSign,
  Video,
  FileText,
  Calendar,
  ChevronRight,
  ChevronDown,
  X,
  Menu,
  Play,
  CheckCircle,
  AlertCircle,
  Archive,
  Upload
} from 'lucide-react';

// Types
interface Course {
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

interface Lesson {
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

interface LessonResource {
  id: string;
  name: string;
  type: 'pdf' | 'video' | 'link' | 'file';
  url: string;
  size?: string;
}

interface Instructor {
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

interface Student {
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

interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  courseCount: number;
}

// Sample data
const sampleCourses: Course[] = [
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

const sampleInstructors: Instructor[] = [
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

const sampleStudents: Student[] = [
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

const sampleCategories: Category[] = [
  { id: '1', name: 'Programming', description: 'Software development and coding courses', color: 'blue', courseCount: 45 },
  { id: '2', name: 'Data Science', description: 'Data analysis and machine learning', color: 'green', courseCount: 23 },
  { id: '3', name: 'Design', description: 'UI/UX and graphic design courses', color: 'purple', courseCount: 18 },
  { id: '4', name: 'Business', description: 'Business and entrepreneurship', color: 'orange', courseCount: 12 },
  { id: '5', name: 'Marketing', description: 'Digital marketing and SEO', color: 'pink', courseCount: 8 }
];

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [courses, setCourses] = useState<Course[]>(sampleCourses);
  const [instructors, setInstructors] = useState<Instructor[]>(sampleInstructors);
  const [students, setStudents] = useState<Student[]>(sampleStudents);
  const [categories, setCategories] = useState<Category[]>(sampleCategories);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [selectedCourseForLessons, setSelectedCourseForLessons] = useState<string | null>(null);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dashboard stats
  const totalCourses = courses.length;
  const totalStudents = students.length;
  const totalInstructors = instructors.length;
  const totalRevenue = courses.reduce((sum, course) => sum + (course.price * course.students), 0);

  // Filter courses
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryOptions = ['all', ...categories.map(c => c.name)];

  const deleteCourse = (courseId: string) => {
    if (confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter(c => c.id !== courseId));
    }
  };

  const updateCourseStatus = (courseId: string, newStatus: Course['status']) => {
    setCourses(courses.map(c => 
      c.id === courseId 
        ? { ...c, status: newStatus, updatedAt: new Date().toISOString().split('T')[0] }
        : c
    ));
  };

  const openCourseModal = (course?: Course) => {
    setEditingCourse(course || null);
    setShowCourseModal(true);
  };

  const closeCourseModal = () => {
    setShowCourseModal(false);
    setEditingCourse(null);
  };

  const openLessonModal = (courseId: string, lesson?: Lesson) => {
    setSelectedCourseForLessons(courseId);
    setEditingLesson(lesson || null);
    setShowLessonModal(true);
  };

  const closeLessonModal = () => {
    setShowLessonModal(false);
    setEditingLesson(null);
    setSelectedCourseForLessons(null);
  };

  const openCategoryModal = (category?: Category) => {
    setEditingCategory(category || null);
    setShowCategoryModal(true);
  };

  const closeCategoryModal = () => {
    setShowCategoryModal(false);
    setEditingCategory(null);
  };

  const getStatusIcon = (status: Course['status']) => {
    switch (status) {
      case 'published': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'draft': return <Edit className="w-4 h-4 text-yellow-600" />;
      case 'under_review': return <AlertCircle className="w-4 h-4 text-blue-600" />;
      case 'archived': return <Archive className="w-4 h-4 text-gray-600" />;
      default: return <Edit className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: Course['status']) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'under_review': return 'bg-blue-100 text-blue-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLessonTypeIcon = (type: Lesson['type']) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'text': return <FileText className="w-4 h-4" />;
      case 'quiz': return <CheckCircle className="w-4 h-4" />;
      case 'assignment': return <Upload className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Courses</p>
              <p className="text-xl lg:text-2xl font-bold text-gray-900">{totalCourses}</p>
            </div>
            <div className="bg-blue-100 p-2 lg:p-3 rounded-full">
              <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Students</p>
              <p className="text-xl lg:text-2xl font-bold text-gray-900">{totalStudents.toLocaleString()}</p>
            </div>
            <div className="bg-green-100 p-2 lg:p-3 rounded-full">
              <Users className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Instructors</p>
              <p className="text-xl lg:text-2xl font-bold text-gray-900">{totalInstructors}</p>
            </div>
            <div className="bg-purple-100 p-2 lg:p-3 rounded-full">
              <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Revenue</p>
              <p className="text-xl lg:text-2xl font-bold text-gray-900">${totalRevenue.toLocaleString()}</p>
            </div>
            <div className="bg-yellow-100 p-2 lg:p-3 rounded-full">
              <DollarSign className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Recent Courses</h3>
          <div className="space-y-4">
            {courses.slice(0, 3).map(course => (
              <div key={course.id} className="flex items-center space-x-3 lg:space-x-4">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{course.title}</p>
                  <p className="text-sm text-gray-500">{course.instructor}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-medium text-gray-900">{course.students} students</p>
                  <p className="text-sm text-gray-500">{course.rating} ⭐</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Top Instructors</h3>
          <div className="space-y-4">
            {instructors.slice(0, 3).map(instructor => (
              <div key={instructor.id} className="flex items-center space-x-3 lg:space-x-4">
                <img 
                  src={instructor.avatar} 
                  alt={instructor.name}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{instructor.name}</p>
                  <p className="text-sm text-gray-500">{instructor.courses} courses</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-medium text-gray-900">{instructor.students} students</p>
                  <p className="text-sm text-gray-500">{instructor.rating} ⭐</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
        <button 
          onClick={() => openCourseModal()}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Course</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
        >
          {categoryOptions.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>

      {/* Mobile Course Cards */}
      <div className="block lg:hidden space-y-4">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-start space-x-3 mb-3">
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{course.title}</h3>
                <p className="text-sm text-gray-500">{course.instructor}</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{course.students} students</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(course.status)}`}>
                {course.status.replace('_', ' ')}
              </span>
              <span className="text-sm font-medium text-gray-900">${course.price}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>{course.lessons} lessons</span>
                <span>•</span>
                <span>{course.duration}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => openCourseModal(course)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => openLessonModal(course.id)}
                  className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                >
                  <Play className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => deleteCourse(course.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCourses.map(course => (
                <React.Fragment key={course.id}>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img 
                          src={course.thumbnail} 
                          alt={course.title}
                          className="w-10 h-10 rounded-lg object-cover mr-3"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{course.title}</div>
                          <div className="text-sm text-gray-500 flex items-center">
                            {course.lessons} lessons • {course.duration}
                            <button
                              onClick={() => openLessonModal(course.id)}
                              className="ml-2 text-purple-600 hover:text-purple-800"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            {course.courseLessons.length > 0 && (
                              <button
                                onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                                className="ml-2 text-gray-600 hover:text-gray-800"
                              >
                                {expandedCourse === course.id ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.instructor}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {course.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.students.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-900">{course.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${course.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={course.status}
                        onChange={(e) => updateCourseStatus(course.id, e.target.value as Course['status'])}
                        className={`px-2 py-1 text-xs font-medium rounded-full border-0 focus:ring-2 focus:ring-purple-500 ${getStatusColor(course.status)}`}
                      >
                        <option value="draft">Draft</option>
                        <option value="under_review">Under Review</option>
                        <option value="published">Published</option>
                        <option value="archived">Archived</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => openCourseModal(course)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => openLessonModal(course.id)}
                          className="text-green-600 hover:text-green-800"
                        >
                          <Play className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => deleteCourse(course.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Expanded Lessons Row */}
                  {expandedCourse === course.id && course.courseLessons.length > 0 && (
                    <tr>
                      <td colSpan={8} className="px-6 py-4 bg-gray-50">
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900 mb-3">Course Lessons</h4>
                          {course.courseLessons.map(lesson => (
                            <div key={lesson.id} className="flex items-center justify-between bg-white p-3 rounded-lg border">
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full">
                                  {getLessonTypeIcon(lesson.type)}
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">{lesson.title}</p>
                                  <p className="text-sm text-gray-500">{lesson.type} • {lesson.duration}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className={`px-2 py-1 text-xs rounded-full ${lesson.isPublished ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                  {lesson.isPublished ? 'Published' : 'Draft'}
                                </span>
                                <button 
                                  onClick={() => openLessonModal(course.id, lesson)}
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderInstructors = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Instructors</h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto">
          <Plus className="w-4 h-4" />
          <span>Add Instructor</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
        {instructors.map(instructor => (
          <div key={instructor.id} className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border">
            <div className="flex items-center space-x-3 lg:space-x-4 mb-4">
              <img 
                src={instructor.avatar} 
                alt={instructor.name}
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-gray-900 truncate">{instructor.name}</h3>
                <p className="text-sm text-gray-500 truncate">{instructor.email}</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{instructor.rating}</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{instructor.bio}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Courses:</span>
                <span className="font-medium">{instructor.courses}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Students:</span>
                <span className="font-medium">{instructor.students.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1 lg:gap-2 mb-4">
              {instructor.specialties.slice(0, 3).map(specialty => (
                <span key={specialty} className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">
                  {specialty}
                </span>
              ))}
              {instructor.specialties.length > 3 && (
                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                  +{instructor.specialties.length - 3}
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="flex-1 bg-purple-600 text-white py-2 px-3 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                Edit
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Students</h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto">
          <Plus className="w-4 h-4" />
          <span>Add Student</span>
        </button>
      </div>

      {/* Mobile Student Cards */}
      <div className="block lg:hidden space-y-4">
        {students.map(student => (
          <div key={student.id} className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-center space-x-3 mb-3">
              <img 
                src={student.avatar} 
                alt={student.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{student.name}</h3>
                <p className="text-sm text-gray-500 truncate">{student.email}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                student.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {student.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Enrolled:</span>
                <span className="ml-1 font-medium">{student.enrolledCourses}</span>
              </div>
              <div>
                <span className="text-gray-600">Completed:</span>
                <span className="ml-1 font-medium">{student.completedCourses}</span>
              </div>
              <div>
                <span className="text-gray-600">Hours:</span>
                <span className="ml-1 font-medium">{student.totalHours}h</span>
              </div>
              <div>
                <span className="text-gray-600">Joined:</span>
                <span className="ml-1 font-medium">{student.joinedAt}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-2 mt-3 pt-3 border-t">
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrolled</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map(student => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img 
                        src={student.avatar} 
                        alt={student.name}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.enrolledCourses}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.completedCourses}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.totalHours}h</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.joinedAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      student.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <button 
          onClick={() => openCategoryModal()}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Category</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 lg:p-6 border-b">
          <h3 className="text-lg font-semibold">Course Categories</h3>
          <p className="text-sm text-gray-600 mt-1">Manage course categories and their settings</p>
        </div>
        
        <div className="p-4 lg:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {categories.map(category => (
              <div key={category.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full bg-${category.color}-500`}></div>
                    <h4 className="font-medium text-gray-900">{category.name}</h4>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button 
                      onClick={() => openCategoryModal(category)}
                      className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <p className="text-sm font-medium text-gray-900">{category.courseCount} courses</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'courses':
        return renderCourses();
      case 'instructors':
        return renderInstructors();
      case 'students':
        return renderStudents();
      case 'settings':
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
        <h2 className="text-xl font-bold text-purple-600">EduLearn CMS</h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-gray-600 hover:text-gray-800"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-sm border-r transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex items-center justify-center h-16 border-b">
          <h2 className="text-xl font-bold text-purple-600">EduLearn CMS</h2>
        </div>
        
        <nav className="mt-8">
          <div className="px-4 space-y-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'courses', label: 'Courses', icon: BookOpen },
              { id: 'instructors', label: 'Instructors', icon: GraduationCap },
              { id: 'students', label: 'Students', icon: Users },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        <div className="p-4 lg:p-8">
          {renderContent()}
        </div>
      </div>

      {/* Course Modal */}
      {showCourseModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 lg:p-6 border-b">
              <h3 className="text-xl font-bold">
                {editingCourse ? 'Edit Course' : 'Add New Course'}
              </h3>
              <button onClick={closeCourseModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form className="p-4 lg:p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Title *</label>
                <input
                  type="text"
                  defaultValue={editingCourse?.title || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter course title"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Instructor *</label>
                  <select
                    defaultValue={editingCourse?.instructorId || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select instructor</option>
                    {instructors.filter(i => i.status === 'active').map(instructor => (
                      <option key={instructor.id} value={instructor.id}>
                        {instructor.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                  <select
                    defaultValue={editingCourse?.category || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select category</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                  <select
                    defaultValue={editingCourse?.level || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                  <input
                    type="number"
                    defaultValue={editingCourse?.price || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  defaultValue={editingCourse?.description || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={4}
                  placeholder="Enter course description"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail URL</label>
                <input
                  type="url"
                  defaultValue={editingCourse?.thumbnail || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  type="button"
                  onClick={closeCourseModal}
                  className="w-full sm:w-auto px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {editingCourse ? 'Update Course' : 'Create Course'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lesson Modal */}
      {showLessonModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 lg:p-6 border-b">
              <h3 className="text-xl font-bold">
                {editingLesson ? 'Edit Lesson' : 'Add New Lesson'}
              </h3>
              <button onClick={closeLessonModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form className="p-4 lg:p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lesson Title *</label>
                <input
                  type="text"
                  defaultValue={editingLesson?.title || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter lesson title"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type *</label>
                  <select
                    defaultValue={editingLesson?.type || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select type</option>
                    <option value="video">Video</option>
                    <option value="text">Text/Article</option>
                    <option value="quiz">Quiz</option>
                    <option value="assignment">Assignment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <input
                    type="text"
                    defaultValue={editingLesson?.duration || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="e.g., 15 min"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  defaultValue={editingLesson?.description || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={3}
                  placeholder="Enter lesson description"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Video URL (for video lessons)</label>
                <input
                  type="url"
                  defaultValue={editingLesson?.videoUrl || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="https://example.com/video.mp4"
                />
              </div>
              
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    defaultChecked={editingLesson?.isPublished || false}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Publish lesson</span>
                </label>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  type="button"
                  onClick={closeLessonModal}
                  className="w-full sm:w-auto px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {editingLesson ? 'Update Lesson' : 'Create Lesson'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex items-center justify-between p-4 lg:p-6 border-b">
              <h3 className="text-xl font-bold">
                {editingCategory ? 'Edit Category' : 'Add New Category'}
              </h3>
              <button onClick={closeCategoryModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form className="p-4 lg:p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category Name *</label>
                <input
                  type="text"
                  defaultValue={editingCategory?.name || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter category name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  defaultValue={editingCategory?.description || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={3}
                  placeholder="Enter category description"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <select
                  defaultValue={editingCategory?.color || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select color</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="purple">Purple</option>
                  <option value="orange">Orange</option>
                  <option value="pink">Pink</option>
                  <option value="red">Red</option>
                </select>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  type="button"
                  onClick={closeCategoryModal}
                  className="w-full sm:w-auto px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {editingCategory ? 'Update Category' : 'Create Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;