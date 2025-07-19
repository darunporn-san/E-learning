import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Instructors from "./pages/Instructors";
// import Student from "./pages/Student";
import Students from "./pages/Students";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/instructors" element={<Instructors />} />

          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;