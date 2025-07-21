import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Logo from "../assets/images/iCAPL1.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Column 1: Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={Logo}
            alt="IQue Cap Logo"
            className="w-28 md:w-32 h-auto object-contain"
          />
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          {/* Address */}
          <div className="flex items-start justify-center md:justify-start text-sm">
            <FaMapMarkerAlt className="mt-1 text-red-400 mr-2" />
            <a
              href="https://maps.app.goo.gl/gUVSFZxBn5bCCuqT7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline leading-relaxed text-left"
            >
              Door No: 84,<br />
              3rd Cross Rd, KHB Block,<br />
              Koramangala, Bengaluru,<br />
              Karnataka 560095
            </a>
          </div>

          {/* Email */}
          <p className="mt-3 text-sm">
            Email:{' '}
            <a href="mailto:support@iquecap.com" className="text-blue-400 hover:underline">
              support@iquecap.com
            </a>
          </p>

          {/* Links */}
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <Link to="/privacypolicy" className="text-blue-400 hover:underline text-sm">
              Privacy Policy
            </Link>
            <span className="text-white">|</span>
            <Link to="/contact" className="text-blue-400 hover:underline text-sm">
              Help Centre
            </Link>
          </div>
        </div>

        {/* Column 3: Social Media */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61576184956695"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-emerald-400 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/ique.cap?igsh=b212OWl4eTZvMWt1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-emerald-400 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/ique-cap/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-emerald-400 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Column 4: Google Maps Button */}
        <div className="flex justify-center md:justify-end items-start">
          <div>
            <h3 className="text-lg font-semibold mb-4">Find Us</h3>
            <a
              href="https://maps.app.goo.gl/gUVSFZxBn5bCCuqT7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-emerald-900 py-4 text-center mt-6">
        <p className="text-white text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Ique Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
