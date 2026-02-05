import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from "../assets/images/iCAPL1.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  // Navigation links matching the navbar
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "CAP Academy", path: "/capacademy" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white shadow-lg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Logo & Description */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src={Logo}
            alt="IQue Cap Logo"
            className="w-32 h-auto object-contain"
          />
          <p className="text-sm text-emerald-100 text-center md:text-left leading-relaxed">
            Empowering India's next generation of investment advisors and startup investors with innovative solutions and expert guidance.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href="https://www.facebook.com/profile.php?id=61576184956695"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-lg hover:bg-emerald-600 transition-all duration-300"
            >
              <FaFacebookF size={18} className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/ique.cap?igsh=b212OWl4eTZvMWt1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-lg hover:bg-emerald-600 transition-all duration-300"
            >
              <FaInstagram size={18} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/ique-cap/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-lg hover:bg-emerald-600 transition-all duration-300"
            >
              <FaLinkedin size={18} className="text-white" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-lg font-semibold border-b border-emerald-700 pb-2">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.path} 
                  className="text-emerald-100 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-lg font-semibold border-b border-emerald-700 pb-2">Contact Info</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="mt-1 text-emerald-400 flex-shrink-0" />
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7832!2d77.6246!3d12.9356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150058b75f01%3A0xd3b7950ec31e6322!2sStartup%20park!5e0!3m2!1sen!2sin!4v1719724986017!5m2!1sen!2sin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-100 hover:text-white transition text-sm leading-relaxed text-left"
              >
               Startup Park, Sidharata Colony, Santhosapuram, Koramangala 2nd Block, Koramangala, Bengaluru, Karnataka 560068
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-emerald-400" />
              <a
                href="tel:+91 9036354726"
                className="text-emerald-100 hover:text-white transition text-sm"
              >
                +91 9036354726
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-emerald-400" />
              <a
                href="mailto:support@iquecap.com"
                className="text-emerald-100 hover:text-white transition text-sm"
              >
                support@iquecap.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Legal & Additional Links */}
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-lg font-semibold border-b border-emerald-700 pb-2">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/privacypolicy" className="text-emerald-100 hover:text-white transition-all duration-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-emerald-100 hover:text-white transition-all duration-300">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="text-emerald-100 hover:text-white transition-all duration-300">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link to="/refund" className="text-emerald-100 hover:text-white transition-all duration-300">
                Refund Policy
              </Link>
            </li>
          </ul>
          
          
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-emerald-950 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-emerald-200 text-sm">
              &copy; {new Date().getFullYear()} IQue Cap. All rights reserved.
            </p>
            <p className="text-emerald-300 text-xs">
              Empowering Investors • Building Futures • Driving Innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;