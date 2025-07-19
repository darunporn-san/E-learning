import { Calendar} from 'lucide-react';
import { StatsCard } from '../../components/Dashboard/StatsCard';
import { useCourses } from '../../hooks/useCourses';
import type { Course, IStat } from '../../types';
import { mockstats, recentActivities, upcomingEvents } from '../../data/mockData'; // Assuming mockstats is defined in mockData.ts
// import { Users, BookOpen, Target, TrendingUp, Calendar, Clock, Award } from 'lucide-react';


const Dashboard = () => {
  const { courses } = useCourses() as { courses: Course[] };
  console.log( 'Courses:', courses);
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back! Here's what's happening with your courses.
        </p>
      </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mockstats.map((stat: IStat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>


        {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Recent Activity */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3 sm:space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'enrollment' ? 'bg-blue-500' :
                  activity.type === 'completion' ? 'bg-green-500' :
                  activity.type === 'content' ? 'bg-purple-500' : 'bg-orange-500'
                } mt-2 sm:mt-0`}></div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{activity.course}</p>
                </div>
                <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Top Performing Courses */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Top Performing Courses</h3>
          <div className="space-y-3 sm:space-y-4">
            {courses.slice(0, 3).map((course) => (
              <div key={course.id} className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-medium text-gray-900 line-clamp-1">{course.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{course.students} students</p>
                </div>
                <div className="text-right">
                  <div className="text-xs sm:text-sm font-medium text-gray-900">{course.progress}%</div>
                  <div className="w-16 sm:w-20 h-2 bg-gray-200 rounded-full mt-1">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all duration-300" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
          <div className="space-y-3 sm:space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-3 h-3 rounded-full mt-2 ${
                  event.type === 'live' ? 'bg-red-500' :
                  event.type === 'deadline' ? 'bg-yellow-500' : 'bg-green-500'
                } flex-shrink-0`}></div>
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-medium text-gray-900">{event.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{event.course}</p>
                  <div className="flex items-center mt-1 text-xs sm:text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {event.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;