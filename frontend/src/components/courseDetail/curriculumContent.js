import React, { useState } from 'react';
import { BookOpen, List, Star, Download, Play, Clock, CheckCircle, Lock } from 'lucide-react';

const CurriculumContent = () =>{
    
  const curriculumData = [
    {
      title: "Getting Started",
      duration: "2h 30m",
      lessons: 8,
      lectures: [
        { title: "Course Introduction", duration: "5:30", type: "video", free: true },
        { title: "Setting Up Your Development Environment", duration: "15:45", type: "video", free: true },
        { title: "Understanding Web Development", duration: "12:20", type: "video", free: false },
        { title: "Your First HTML Page", duration: "18:30", type: "video", free: false },
        { title: "Course Resources Download", duration: "2:15", type: "resource", free: false },
        { title: "Development Tools Overview", duration: "20:45", type: "video", free: false },
        { title: "Setting Up Git and GitHub", duration: "25:30", type: "video", free: false },
        { title: "Section 1 Quiz", duration: "10:00", type: "quiz", free: false }
      ]
    },
    {
      title: "HTML Fundamentals",
      duration: "4h 15m",
      lessons: 12,
      lectures: [
        { title: "HTML Document Structure", duration: "22:15", type: "video", free: false },
        { title: "HTML Tags and Elements", duration: "18:45", type: "video", free: false },
        { title: "Working with Text Content", duration: "16:30", type: "video", free: false },
        { title: "Creating Lists and Tables", duration: "24:20", type: "video", free: false },
        { title: "HTML Forms and Input Elements", duration: "28:45", type: "video", free: false },
        { title: "Images and Media Elements", duration: "19:30", type: "video", free: false },
        { title: "HTML5 Semantic Elements", duration: "21:15", type: "video", free: false },
        { title: "Accessibility Best Practices", duration: "17:45", type: "video", free: false },
        { title: "HTML Validation", duration: "12:30", type: "video", free: false },
        { title: "Practice Project: Personal Portfolio", duration: "45:00", type: "project", free: false },
        { title: "HTML Cheat Sheet", duration: "3:00", type: "resource", free: false },
        { title: "HTML Fundamentals Quiz", duration: "15:00", type: "quiz", free: false }
      ]
    },
    {
      title: "CSS Styling and Layout",
      duration: "6h 45m",
      lessons: 15,
      lectures: [
        { title: "CSS Syntax and Selectors", duration: "25:30", type: "video", free: false },
        { title: "Colors, Fonts, and Text Styling", duration: "22:15", type: "video", free: false },
        { title: "The CSS Box Model", duration: "28:45", type: "video", free: false },
        { title: "CSS Layout with Flexbox", duration: "35:20", type: "video", free: false },
        { title: "CSS Grid Layout System", duration: "42:15", type: "video", free: false },
        { title: "Responsive Design Principles", duration: "31:30", type: "video", free: false },
        { title: "CSS Animations and Transitions", duration: "26:45", type: "video", free: false },
        { title: "CSS Preprocessors (Sass)", duration: "24:20", type: "video", free: false },
        { title: "CSS Frameworks Overview", duration: "18:30", type: "video", free: false },
        { title: "Modern CSS Features", duration: "20:15", type: "video", free: false },
        { title: "CSS Best Practices", duration: "16:45", type: "video", free: false },
        { title: "Debugging CSS", duration: "19:30", type: "video", free: false },
        { title: "Project: Responsive Website", duration: "60:00", type: "project", free: false },
        { title: "CSS Resources and Tools", duration: "5:00", type: "resource", free: false },
        { title: "CSS Mastery Quiz", duration: "20:00", type: "quiz", free: false }
      ]
    },
    {
      title: "JavaScript Fundamentals",
      duration: "8h 20m",
      lessons: 18,
      lectures: [
        { title: "JavaScript Introduction", duration: "15:30", type: "video", free: false },
        { title: "Variables and Data Types", duration: "22:45", type: "video", free: false },
        { title: "Functions and Scope", duration: "28:15", type: "video", free: false },
        { title: "Control Structures", duration: "25:30", type: "video", free: false },
        { title: "Arrays and Objects", duration: "32:20", type: "video", free: false },
        { title: "DOM Manipulation", duration: "35:45", type: "video", free: false },
        { title: "Event Handling", duration: "29:15", type: "video", free: false },
        { title: "Asynchronous JavaScript", duration: "38:30", type: "video", free: false },
        { title: "Promises and Async/Await", duration: "31:45", type: "video", free: false },
        { title: "Error Handling", duration: "18:20", type: "video", free: false },
        { title: "ES6+ Features", duration: "42:15", type: "video", free: false },
        { title: "JavaScript Modules", duration: "24:30", type: "video", free: false },
        { title: "Working with APIs", duration: "36:45", type: "video", free: false },
        { title: "JavaScript Testing", duration: "28:15", type: "video", free: false },
        { title: "Performance Optimization", duration: "22:30", type: "video", free: false },
        { title: "Project: Interactive Web App", duration: "90:00", type: "project", free: false },
        { title: "JavaScript Resources", duration: "8:00", type: "resource", free: false },
        { title: "JavaScript Mastery Quiz", duration: "25:00", type: "quiz", free: false }
      ]
    },
    {
      title: "React Development",
      duration: "10h 15m",
      lessons: 20,
      lectures: [
        { title: "React Introduction and Setup", duration: "18:30", type: "video", free: false },
        { title: "JSX and Components", duration: "25:45", type: "video", free: false },
        { title: "Props and State", duration: "32:15", type: "video", free: false },
        { title: "Event Handling in React", duration: "22:30", type: "video", free: false },
        { title: "React Hooks", duration: "38:45", type: "video", free: false },
        { title: "Component Lifecycle", duration: "28:20", type: "video", free: false },
        { title: "State Management", duration: "35:15", type: "video", free: false },
        { title: "React Router", duration: "31:45", type: "video", free: false },
        { title: "Forms in React", duration: "26:30", type: "video", free: false },
        { title: "API Integration", duration: "33:20", type: "video", free: false },
        { title: "Context API", duration: "29:15", type: "video", free: false },
        { title: "React Performance", duration: "24:45", type: "video", free: false },
        { title: "Testing React Apps", duration: "32:30", type: "video", free: false },
        { title: "React Best Practices", duration: "21:15", type: "video", free: false },
        { title: "Styling in React", duration: "27:30", type: "video", free: false },
        { title: "React Deployment", duration: "19:45", type: "video", free: false },
        { title: "Advanced React Patterns", duration: "36:20", type: "video", free: false },
        { title: "Project: Full React Application", duration: "120:00", type: "project", free: false },
        { title: "React Resources and Libraries", duration: "12:00", type: "resource", free: false },
        { title: "React Mastery Assessment", duration: "30:00", type: "quiz", free: false }
      ]
    },
    {
      title: "Backend Development with Node.js",
      duration: "7h 45m",
      lessons: 16,
      lectures: [
        { title: "Node.js Introduction", duration: "20:15", type: "video", free: false },
        { title: "NPM and Package Management", duration: "18:30", type: "video", free: false },
        { title: "Express.js Framework", duration: "32:45", type: "video", free: false },
        { title: "Routing and Middleware", duration: "28:20", type: "video", free: false },
        { title: "Working with Databases", duration: "35:15", type: "video", free: false },
        { title: "MongoDB and Mongoose", duration: "38:30", type: "video", free: false },
        { title: "Authentication and Authorization", duration: "42:15", type: "video", free: false },
        { title: "RESTful API Design", duration: "31:45", type: "video", free: false },
        { title: "Error Handling and Validation", duration: "24:30", type: "video", free: false },
        { title: "File Upload and Processing", duration: "26:15", type: "video", free: false },
        { title: "Security Best Practices", duration: "29:30", type: "video", free: false },
        { title: "Testing Backend APIs", duration: "27:45", type: "video", free: false },
        { title: "API Documentation", duration: "19:20", type: "video", free: false },
        { title: "Performance and Scaling", duration: "33:15", type: "video", free: false },
        { title: "Project: Full-Stack Application", duration: "150:00", type: "project", free: false },
        { title: "Backend Development Quiz", duration: "25:00", type: "quiz", free: false }
      ]
    }
  ];
      const [expandedSections, setExpandedSections] = useState([0]);
 const toggleSection = (index) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return <Play size={14} />;
      case 'quiz': return <CheckCircle size={14} />;
      case 'project': return <BookOpen size={14} />;
      case 'resource': return <Download size={14} />;
      default: return <Play size={14} />;
    }
  };
    const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'type-video';
      case 'quiz': return 'type-quiz';
      case 'project': return 'type-project';
      case 'resource': return 'type-resource';
      default: return 'type-video';
    }
  };
    return (
        <div className="curriculum-content">
      <div className="curriculum-header">
        <h3 className="curriculum-title">Course Curriculum</h3>
        <div className="curriculum-stats">
          <span className="stat-item">
            <strong>6 sections</strong> • <strong>89 lectures</strong> • <strong>40h 15m</strong> total length
          </span>
        </div>
      </div>

      <div className="curriculum-sections">
        {curriculumData.map((section, index) => (
          <div key={index} className="curriculum-section">
            <div 
              className="section-header"
              onClick={() => toggleSection(index)}
            >
              <div className="section-info">
                <h4 className="section-title">{section.title}</h4>
                <div className="section-meta">
                  <span className="section-duration">{section.lessons} lectures • {section.duration}</span>
                </div>
              </div>
              <button className={`expand-btn ${expandedSections.includes(index) ? 'expanded' : ''}`}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4.427 9.573L8 6l3.573 3.573a.5.5 0 0 0 .708-.708L8.354 4.939a.5.5 0 0 0-.708 0L3.72 8.865a.5.5 0 1 0 .708.708z"/>
                </svg>
              </button>
            </div>

            {expandedSections.includes(index) && (
              <div className="section-content">
                {section.lectures.map((lecture, lectureIndex) => (
                  <div key={lectureIndex} className="lecture-item">
                    <div className="lecture-info">
                      <div className="lecture-icon-wrapper">
                        <span className={`lecture-icon ${getTypeColor(lecture.type)}`}>
                          {getTypeIcon(lecture.type)}
                        </span>
                      </div>
                      <div className="lecture-details">
                        <span className="lecture-title">{lecture.title}</span>
                        <div className="lecture-meta">
                          <span className="lecture-type">{lecture.type}</span>
                          <span className="lecture-duration">
                            <Clock size={12} />
                            {lecture.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="lecture-actions">
                      {lecture.free ? (
                        <span className="free-badge">Free</span>
                      ) : (
                        <Lock size={14} className="lock-icon" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    )
}
export default CurriculumContent