import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/iCAPL1.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAboutClick = (e) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about", onClick: handleAboutClick },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    {name: "Cap Academy" ,path:"/capacademy"},
    { name: "Careers", path: "/careers" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gradient-to-t from-emerald-950 to-teal-950 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-sans">
            {menuItems.map(({ name, path, onClick }) =>
              onClick ? (
                <button
                  key={name}
                  onClick={onClick}
                  className="text-lg font-semibold text-white hover:text-[#0D5C75] transition duration-300"
                >
                  {name}
                </button>
              ) : (
                <Link
                  key={name}
                  to={path}
                  className="text-lg font-semibold text-white hover:text-[#0D5C75] transition duration-300"
                >
                  {name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white shadow-lg z-50 p-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-900"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        <nav className="mt-12 space-y-6 text-lg font-semibold">
          {menuItems.map(({ name, path, onClick }) =>
            onClick ? (
              <button
                key={name}
                onClick={onClick}
                className="block px-4 py-2 rounded-md text-gray-900 hover:text-[#0D5C75] transition duration-300"
              >
                {name}
              </button>
            ) : (
              <Link
                key={name}
                to={path}
                className="block px-4 py-2 rounded-md text-gray-900 hover:text-[#0D5C75] transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            )
          )}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
