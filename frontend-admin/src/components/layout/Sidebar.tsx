import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  GraduationCap,
  Settings,
} from "lucide-react";

export const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/courses", label: "Courses", icon: BookOpen },
  { path: "/instructors", label: "Instructors", icon: GraduationCap },
  { path: "/students", label: "Students", icon: Users },
  { path: "/settings", label: "Settings", icon: Settings },
];

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="lg:hidden p-2 text-gray-600 hover:text-gray-800"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span>☰</span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-sm border-r transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-center h-16 border-b">
          <h2 className="text-xl font-bold text-purple-600">EduLearn CMS</h2>
        </div>
        <nav className="mt-8">
          <div className="px-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                    isActive
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
