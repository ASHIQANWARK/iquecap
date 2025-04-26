import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
          <p className="text-sm">
            Address: Door No: 84, 3rd Cross Rd, KHB Block, Koramangala, Bengaluru, Karnataka 560095
          </p>
          <p className="mt-2 text-sm">
            Email:{' '}
            <a href="mailto:support@iqueventures.com" className="text-blue-400 hover:underline">
              support@iqueventures.com
            </a>
          </p>
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
              href="https://www.facebook.com/profile.php?id=61572517916783"
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

        {/* Column 4: Google Maps */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-xs md:max-w-sm">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=Koramangala,Bengaluru&output=embed"
              width="100%"
              height="180"
              className="rounded-lg shadow-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
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
