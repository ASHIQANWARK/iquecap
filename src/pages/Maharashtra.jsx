// MaharashtraBranch.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function MaharashtraBranch() {

  const whatsappNumber = "919035465958";
  const whatsappMessage =
    "Hello IqueCap Maharashtra Team, I would like to know more about investment opportunities.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">

      {/* Hero Banner */}
      <div className="relative h-96 bg-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('/assets/images/maharashtra-banner.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0d9866] to-[#01454b] opacity-80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold">
              Invest in Maharashtra’s Future — With IqueCap
            </h1>
            <p className="text-xl opacity-90 mt-3">
              Empowering investors to access high-potential startups and private companies.
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
                About IqueCap
              </h2>

              <div className="prose prose-lg text-gray-600 space-y-6">

                <p>
                  Welcome to <strong>IqueCap</strong> — a modern investment platform
                  that bridges passionate investors with high-potential private
                  companies and startups. Our mission is to democratize access
                  to early-stage investing, empowering individuals to participate
                  in the growth of tomorrow’s leading businesses across Maharashtra and India.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    About IqueCap Maharashtra
                  </h3>
                  <p>
                    Maharashtra has emerged as one of India’s most dynamic startup ecosystems.
                    Cities like Mumbai, Pune, Nashik, and Aurangabad are home to visionary founders
                    and rapid-growth companies attracting nationwide investors.
                    IqueCap Maharashtra brings these opportunities closer,
                    helping you discover, evaluate and support ventures shaping
                    the future of innovation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Our Focus Areas
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Early-Stage Startup Investments</li>
                    <li>Private Company Equity Opportunities</li>
                    <li>Investor Education & Market Insights</li>
                    <li>Seamless Investment Management Platform</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Why Choose IqueCap Maharashtra?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-600 mb-2">
                        Curated Regional Opportunities
                      </h4>
                      <p className="text-sm">
                        Access vetted high-potential private businesses rooted in Maharashtra.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-600 mb-2">
                        Early Growth Participation
                      </h4>
                      <p className="text-sm">
                        Invest early in companies shaping the future before mainstream markets notice.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-600 mb-2">
                        Portfolio Diversification
                      </h4>
                      <p className="text-sm">
                        Expand beyond traditional assets into private equity and startups.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-600 mb-2">
                        Support Innovation
                      </h4>
                      <p className="text-sm">
                        Fuel innovation, job creation, and Maharashtra’s economic growth.
                      </p>
                    </div>

                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Our Investment Philosophy
                  </h3>
                  <p>
                    ✔ Quality First — Strong fundamentals & leadership  
                    ✔ Transparent Insights — Clear company data & tracking  
                    ✔ Long-Term Vision — Smart, patient capital allocation  
                    ✔ Community Empowerment — Investing as partnership
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
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-semibold">Maharashtra, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Type</span>
                  <span className="font-semibold">Private Equity & Startup Investing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Focus</span>
                  <span className="font-semibold">Early-Stage & Private Companies</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Enquiry */}
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Enquire Now
              </h3>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition"
              >
                Chat on WhatsApp
              </a>

              <a
                href="tel:+919035465958"
                className="block mt-4 text-[#0d9866] font-semibold"
              >
                Call: 9035465958
              </a>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl shadow-xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-3">
                Start Your Journey with IqueCap
              </h3>
              <p className="text-sm mb-4 opacity-90">
                Become a member now — and be part of Maharashtra’s investment revolution.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 w-full block"
              >
                Become a Member
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}