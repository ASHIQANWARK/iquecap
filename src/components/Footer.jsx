import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from "../assets/images/iCAPL1.png";

const Footer = () => {
  return (
    <footer className="bg-emerald-950  text-white shadow-md ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1: Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={Logo}
            alt="IQue Cap Logo"
            className="w-32 h-auto object-contain"
          />
        </div>

        {/* Column 2: Address, Email, Privacy Policy & Help Centre */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <p className="text-white">
            Address: Door No: 84, 3rd Cross Rd, KHB Block, Koramangala, Bengaluru, Karnataka 560095
          </p>
          <p className="text-white mt-2">
            Email:{' '}
            <a href="mailto:support@iqueventures.com" className="text-blue-700 hover:underline">
              support@iqueventures.com
            </a>
          </p>
          <p className="text-black mt-2">
            <a href="/privacy-policy" className="text-blue-700 hover:underline">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="/help-centre" className="text-blue-700 hover:underline">
              Help Centre
            </a>
          </p>
        </div>

        {/* Column 3: Social Media */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61572517916783"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-emerald-700 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/ique.cap?igsh=b212OWl4eTZvMWt1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-600 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/ique-cap/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-700 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Column 4: Google Maps Location */}
        <div className="w-full flex justify-center md:justify-end">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=Koramangala,Bengaluru&output=embed"
            width="100%"
            height="180"
            className="rounded-lg shadow-lg max-w-md"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-emerald-950 py-4 text-center rounded-b-xl">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Ique Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
