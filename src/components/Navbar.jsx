import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/iCAPL1.png";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
    { 
      name: "Services", 
      path: "/services",
      
    },
    { name: "Cap Academy", path: "/capacademy" },
    { name: "Careers", path: "/careers" },
    { name: "About", path: "#about", onClick: handleAboutClick },
  ];

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={logo} 
              alt="Logo" 
              className={`h-12 w-auto transition-all duration-500 ${
                isScrolled ? "filter brightness-75" : ""
              }`} 
            />
           
              
           
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center space-x-1 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-700 hover:text-[#0eca85] hover:bg-gray-50"
                        : "text-white hover:text-[#0eca85] hover:bg-white/10"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                ) : item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-700 hover:text-[#0eca85] hover:bg-gray-50"
                        : "text-white hover:text-[#0eca85] hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-700 hover:text-[#0eca85] hover:bg-gray-50"
                        : "text-white hover:text-[#0eca85] hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className={`absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 ${
                    activeDropdown === item.name 
                      ? "opacity-100 visible translate-y-0" 
                      : "opacity-0 invisible -translate-y-2"
                  }`}>
                    <div className="p-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-3 rounded-lg text-gray-700 hover:text-[#0eca85] hover:bg-gray-50 transition-all duration-200 font-medium"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Contact Button */}
            <Link
              to="/contact"
              className={`ml-4 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 border-2 ${
                isScrolled
                  ? "border-[#0eca85] text-[#0eca85] hover:bg-[#0eca85] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#015c64]"
              } hover:scale-105 hover:shadow-lg`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? "text-gray-700 hover:bg-gray-100" 
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity z-40 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white/95 backdrop-blur-xl shadow-2xl z-50 p-8 transition-transform duration-500 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <Link 
            to="/" 
            className="flex items-center space-x-3"
            onClick={() => setIsOpen(false)}
          >
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>
          <button
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div className="mb-2">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-gray-800 hover:bg-gray-50 transition-all duration-200 font-semibold"
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-1 bg-gray-50/50 rounded-xl p-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-2.5 rounded-lg text-gray-600 hover:text-[#0eca85] hover:bg-white transition-all duration-200 font-medium"
                          onClick={() => {
                            setIsOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.onClick ? (
                <button
                  onClick={(e) => {
                    item.onClick(e);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-gray-800 hover:bg-gray-50 transition-all duration-200 font-semibold"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.path}
                  className="block px-4 py-3 rounded-xl text-gray-800 hover:bg-gray-50 transition-all duration-200 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          {/* Mobile Contact Button */}
          <Link
            to="/contact"
            className="block w-full mt-6 px-6 py-3.5 text-center rounded-xl font-semibold border-2 border-[#0eca85] text-[#0eca85] hover:bg-[#0eca85] hover:text-white transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;