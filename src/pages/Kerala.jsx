// KeralaBranch.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function KeralaBranch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
    

      {/* Hero Banner */}
      <div className="relative h-96 bg-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('/assets/images/kerala-banner.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0d9866]  to-[#01454b] opacity-80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-4">
              
              <h1 className="text-5xl font-bold">iQueCap Kerala</h1>
            </div>
            <p className="text-xl opacity-90">
              God's Own Country - Premium Investment Solutions
            </p>
          </div>
        </div>
      </div>
         {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            ← Back to All Home
          </Link>
        </div>
      </nav>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About iQueCap Kerala
              </h2>

              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  <strong>iQueCap Kerala</strong> brings strategic investment 
                  expertise to the lush landscapes of God's Own Country. 
                  We specialize in identifying unique opportunities that 
                  leverage Kerala's natural resources, skilled workforce, 
                  and progressive business environment.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Our Focus Areas
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Tourism & Hospitality Infrastructure</li>
                    <li>Ayurveda & Wellness Centers</li>
                    <li>Information Technology Parks</li>
                    <li>Renewable Energy Projects</li>
                    <li>Healthcare & Medical Tourism</li>
                    <li>Education & Skill Development</li>
                    <li>Startups in Traditional Industries</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Why Choose iQueCap Kerala?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-600 mb-2">
                        Natural Advantage
                      </h4>
                      <p className="text-sm">
                        Strategic location with access to ports, educated workforce, 
                        and thriving tourism industry
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-600 mb-2">
                        Sustainable Focus
                      </h4>
                      <p className="text-sm">
                        Emphasis on eco-friendly and sustainable business models
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-600 mb-2">
                        Local Expertise
                      </h4>
                      <p className="text-sm">
                        Deep understanding of Kerala's unique business landscape 
                        and cultural nuances
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-600 mb-2">
                        Global Connectivity
                      </h4>
                      <p className="text-sm">
                        Strong connections with international markets, 
                        especially Middle East and Europe
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Our Investment Philosophy
                  </h3>
                  <p>
                    We believe in nurturing businesses that contribute to 
                    Kerala's sustainable development while delivering strong 
                    returns. Our approach combines local insights with global 
                    best practices to create lasting impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quick Facts
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Location</span>
                  <span className="font-semibold">Kochi, Kerala</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Focus</span>
                  <span className="font-semibold">
                    Sustainable Investments
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sectors</span>
                  <span className="font-semibold">
                    Tourism, IT, Healthcare, Renewable Energy
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Investment Range</span>
                  <span className="font-semibold">₹25L - ₹25Cr</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-600 text-sm">Address</p>
                  <p className="font-semibold">
                    iQueCap Kerala, Marine Drive, Kochi, Kerala - 682031
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <p className="font-semibold">kerala@iquecap.com</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Phone</p>
                  <p className="font-semibold">+91-484-2555555</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Connect With Us
              </h3>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/iquecap_kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Follow us on Instagram</span>
                </a>

                <a
                  href="https://www.linkedin.com/company/iquecap-kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-blue-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="bg-gradient-to-r from-cyan-600 to-emerald-500 rounded-2xl shadow-xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-3">Partner With Us</h3>
              <p className="text-sm mb-4 opacity-90">
                Ready to grow your business in Kerala?
              </p>
              <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 w-full">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}