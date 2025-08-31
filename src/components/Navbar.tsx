import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Define nav items here
const navItems = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about" },
  { label: "Careers", link: "/careers" },
  { label: "Services-Med", link: "/services-med" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navlink = useNavigate();
  return (
    <nav className="relative flex items-center justify-between p-4 navbar text-white">
      {/* Logo */}
      <div>
        <div
          className="w-25 flex flex-col items-center justify-center flex flex-col items-center justify-center relative cursor-pointer group"
          onClick={() => navlink("/")}
          style={{ cursor: "pointer" }}
        >
          <img src="images/logo.png" alt="" className="w-full h-auto" />
          {/* on hover, we want something like tooltip displaying text */}
          <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
            Home
          </span>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden sm:flex gap-5">
        {navItems.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            className="hover:text-yellow-400"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Hamburger Button for Mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-center items-center gap-1 w-8 h-8"
        >
          <span className="block w-8 h-1 bg-white"></span>
          <span className="block w-8 h-1 bg-white"></span>
          <span className="block w-8 h-1 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-gray-700 rounded shadow-lg flex flex-col p-3 sm:hidden z-50">
          {navItems.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className="py-2 hover:text-yellow-400"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
