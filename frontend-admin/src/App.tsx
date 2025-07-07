import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import Instructors from "./pages/Instructors";
import Student from "./pages/Students";
import Layout from "./components/layout/Layout";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
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

        <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/instructure" element={<Instructors />} />
            <Route path="/student" element={<Student />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;

// import { Routes, Route, Link } from 'react-router-dom';
// import Dashboard from './pages/Dashboard'
// import Instructors from './pages/Instructors';
// import Student from './pages/Students';
// import Sidebar from './components/layout/Sidebar';

// function App() {
//   return (
//     <div className="App">
//    <Sidebar/>

//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/instructure" element={<Instructors />} />
//         <Route path="/student" element={<Student />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
