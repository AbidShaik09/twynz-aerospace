import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about-us/About";
import Careers from "./pages/careers/Careers";
import MED from "./pages/services/MED";

export default function App() {
  return (
    <div className="navbar">
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/services-med">Services-Med</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services-med" element={<MED />} />
      </Routes>
    </div>
  );
}
