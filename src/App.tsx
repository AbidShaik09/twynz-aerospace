import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about-us/About";
import Careers from "./pages/careers/Careers";
import MED from "./pages/services/MED";

export default function App() {
  return (
    <div className="holder">
      <div className="navbar py-4 flex gap-5">
        <div>
          <div className="w-20">
            <img src="images/logo.png" alt="" className="w-full h-auto" />
          </div>
        </div>
        <nav className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/services-med">Services-Med</Link>
        </nav>
      </div>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services-med" element={<MED />} />
        </Routes>
      </div>
    </div>
  );
}
