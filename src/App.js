// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />  {/* หน้า 404 */}
      </Routes>
    </Router>
  );
}

export default App;