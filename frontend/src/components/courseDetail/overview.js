import React, { useState } from "react";
import {
  BookOpen,
  List,
  Star,
} from "lucide-react";
import CurriculumContent from "./curriculumContent";
import Review from "./review";
import Content from "./content";
const Overview = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "curriculum", label: "Curriculum", icon: List },
    { id: "reviews", label: "Reviews", icon: Star },
    // { id: "review", label: "Review", icon: Users },
  ];

  return (
    <div className="modern-tabs">
      <div className="tabs-container-with-label">
        {/* Tabs Header */}
        <div className="tabs-container">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <IconComponent size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Label or Tab Content */}
        <div className="tab-label-content">
          {activeTab === "curriculum" && <CurriculumContent />}
          {activeTab === "reviews" && <Review />}
          {activeTab === "overview" &&<Content/>}
        </div>
      </div>
    </div>
  );
};
export default Overview;
