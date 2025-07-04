import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllCourses from "./pages/AllCourse";
import Header from "./layout/header";
import Footer from "./layout/footer";
import CourseDetail from "./pages/CourseDetail";

function AppWrapper() {
  const location = useLocation();
  const hideHeaderPaths = ["/login", "/register"];
  const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {shouldShowHeader && <Header />}

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course-list" element={<AllCourses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {shouldShowHeader && <Footer />}
    </div>
  );
}
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
