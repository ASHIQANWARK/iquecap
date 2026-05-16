import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import Logo from "../assets/images/iCAPL1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "CAP Academy", path: "/capacademy" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white overflow-hidden">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <img
              src={Logo}
              alt="IQue Cap Logo"
              className="w-36 h-auto object-contain mb-5"
            />

            <p className="text-emerald-100 text-sm leading-relaxed max-w-sm">
              Empowering India’s next generation of startup founders,
              investors, and innovators through meaningful connections,
              strategic discovery, and ecosystem-driven growth.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61576184956695"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-emerald-600 transition duration-300 hover:scale-110"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://www.instagram.com/ique.cap?igsh=b212OWl4eTZvMWt1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-pink-600 transition duration-300 hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/ique-cap/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-blue-600 transition duration-300 hover:scale-110"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://www.youtube.com/@IQUECAP-o3n"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-red-600 transition duration-300 hover:scale-110"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-5 text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-emerald-100 hover:text-white transition duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-5 text-white">
              Contact Info
            </h3>

            <div className="space-y-5">
              
              {/* Address */}
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <FaMapMarkerAlt className="text-emerald-400 mt-1 flex-shrink-0" />

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-100 hover:text-white transition text-sm leading-relaxed max-w-xs"
                >
                  Startup Park, Sidharata Colony, Santhosapuram,
                  Koramangala 2nd Block, Koramangala,
                  Bengaluru, Karnataka 560068
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <FaPhone className="text-emerald-400" />

                <a
                  href="tel:+919036913399"
                  className="text-emerald-100 hover:text-white transition text-sm"
                >
                  +91 9036913399
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
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

          {/* Column 4 */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-5 text-white">
              Legal
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacypolicy"
                  className="text-emerald-100 hover:text-white transition duration-300 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/disclaimer"
                  className="text-emerald-100 hover:text-white transition duration-300 text-sm"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Platform Disclosure */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-4 py-4">
          
          <div>

            <p className="text-emerald-100 leading-relaxed text-center text-sm md:text-[10px] max-w-9xl mx-auto">
              iQue Cap is a startup-investor discovery and networking platform.
              Information shared here is for discovery purposes only. Startup
              funding is subject to market dynamics. iQue Cap operates as a
              discovery and networking platform, not a regulated financial
              entity.
            </p>

            <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-2 text-sm">
              <span className="text-emerald-200">
                Last updated: May 2026
              </span>

              <span className="hidden md:block text-emerald-400">
                •
              </span>

              <a
                href="mailto:support@iquecap.com"
                className="text-white hover:text-emerald-300 transition font-medium"
              >
                support@iquecap.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-emerald-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            
            <p className="text-emerald-200 text-sm">
              © {new Date().getFullYear()} IQue Cap. All rights reserved.
            </p>

            <p className="text-emerald-300 text-xs md:text-sm">
              Empowering Investors • Building Futures • Driving Innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;