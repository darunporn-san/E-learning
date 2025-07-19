import { useLocation } from "react-router-dom";
import { navItems } from "./Sidebar"; // adjust path if needed
import { Bell, User } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const activeTab =
    navItems.find((item) => item.path === location.pathname)?.label ||
    "Dashboard";

  return (
    <div className="hidden lg:block bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 capitalize">
            {activeTab}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Manage your e-learning platform
          </p>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
