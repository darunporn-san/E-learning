import React, { useState } from 'react';
import { BookOpen, List, Star, Download, Play, Clock, CheckCircle, Lock } from 'lucide-react';
import { curriculumData } from '../../utils/data';

const CurriculumContent = () =>{
    
  
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