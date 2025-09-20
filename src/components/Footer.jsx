import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from "../assets/images/iCAPL1.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Column 1: Logo */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <img
            src={Logo}
            alt="IQue Cap Logo"
            className="w-28 md:w-32 h-auto object-contain"
          />
          <p className="text-sm text-gray-300 text-center md:text-left leading-relaxed">
            Empowering India’s next generation of investment advisors and startup investors.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-lg font-semibold border-b border-emerald-800 pb-2">Contact Us</h3>
          <div className="flex items-start justify-center md:justify-start text-sm">
            <FaMapMarkerAlt className="mt-1 text-red-400 mr-2" />
            <a
              href="https://maps.app.goo.gl/gUVSFZxBn5bCCuqT7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-400 transition leading-relaxed text-left"
            >
              Door no : 84, <br />
              3rd cross, near Jyoti Nivas College Road, Koramangala Industrial Layout, 5th Block,<br />
              Koramangala, Bengaluru,<br />
              Karnataka 560095
            </a>
          </div>
          <p className="text-sm">
            Email:{' '}
            <a
              href="mailto:support@iquecap.com"
              className="text-emerald-400 hover:text-white transition"
            >
              info@iquecap.com
            </a>
          </p>
        </div>

        {/* Column 3: Quick Links */}
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-lg font-semibold border-b border-emerald-800 pb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-emerald-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/capacademy" className="hover:text-emerald-400 transition">CAP Academy</Link>
            </li>
            <li>
              <Link to="/privacypolicy" className="hover:text-emerald-400 transition">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-emerald-400 transition">Help Centre</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media & Map */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h3 className="text-lg font-semibold border-b border-emerald-800 pb-2 w-full md:w-auto text-center md:text-left">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61576184956695"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-emerald-400 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/ique.cap?igsh=b212OWl4eTZvMWt1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-emerald-400 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/ique-cap/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-emerald-400 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
          <a
            href="https://maps.app.goo.gl/gUVSFZxBn5bCCuqT7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md text-sm transition"
          >
            View on Google Maps
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-emerald-900 py-4 text-center">
        <p className="text-gray-400 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Ique Ventures. All rights reserved.
        </p>
      </div>
    </footer> 
  );
};

export default Footer;
