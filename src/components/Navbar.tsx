import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Define nav items here
const navItems = [
  { label: "Home", link: "/home" },
  { label: "About Us", link: "/about" },
  { label: "Careers", link: "/careers" },
  { label: "Services-Med", link: "/services-med" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navlink = useNavigate();
  return (
    <nav className="relative flex items-center justify-between sm:justify-start p-4 navbar text-white  ">
      {/* Logo */}
      <div>
        <div
          className="w-25 flex flex-col items-center justify-center flex flex-col items-center justify-center cursor-pointer "
          onClick={() => navlink("/home")}
          style={{ cursor: "pointer" }}
        >
          <img src="images/logo.png" alt="" className="w-full h-auto navbar " />
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden sm:flex gap-5 navbar ">
        {navItems.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            className=" navbar text-white hover:text-white-400"
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
