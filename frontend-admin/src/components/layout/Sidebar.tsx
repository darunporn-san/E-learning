// components/layout/Sidebar.tsx
import { NavLink } from "react-router-dom"; // 👈 ใช้ NavLink แทน Link
import {
  LayoutDashboard,
  BookOpen,
  Users,
  GraduationCap,
  Settings,
} from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const navItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/courses", label: "Courses", icon: BookOpen },
    { path: "/instructors", label: "Instructors", icon: GraduationCap },
    { path: "/students", label: "Students", icon: Users },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  return (
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
  );
};

export default Sidebar;
