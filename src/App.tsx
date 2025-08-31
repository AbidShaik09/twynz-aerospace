import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about-us/About";
import Careers from "./pages/careers/Careers";
import MED from "./pages/services/MED";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="holder">
      <Navbar />
      <div className="p-1 md:p-4">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services-med" element={<MED />} />
        </Routes>
      </div>
    </div>
  );
}
