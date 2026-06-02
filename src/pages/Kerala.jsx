// KeralaBranch.jsx

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function KeralaBranch() {
  const whatsappNumber = "919035276010";

  const whatsappMessage =
    "Hello IqueCap Kerala Team, I would like to know more about investment opportunities.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const googleLogo =
    "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg";

  const reviews = [
    {
      name: "SabeeK Sabeek",
      location: "Tamilnadu",
      rating: 5,
      review:
        "I invested in the 40 days plan and received both principal and returns on time. Really happy with the platform.",
      time: "19 hours ago",
      isNew: true,
    },
    {
      name: "Ratheesh Parakkal",
      location: "Kerala",
      rating: 5,
      review: "Best investment platform secure your money.",
      time: "6 weeks ago",
      isNew: false,
    },
    {
      name: "Gopal Reddy",
      location: "Hyderabad",
      rating: 4,
      review: "Good platform for investment opportunities.",
      time: "8 weeks ago",
      isNew: false,
    },
    {
      name: "DK Akash",
      location: "Karnataka",
      rating: 5,
      review:
        "Professional service and smooth onboarding process. Highly recommended.",
      time: "3 months ago",
      isNew: false,
    },
    {
      name: "Akhila",
      location: "Kerala",
      rating: 5,
      review:
        "Very professional team and smooth onboarding process.",
      time: "2 months ago",
      isNew: false,
    },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 1; // pixels per frame
    
    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += speed;
        scrollContainer.scrollLeft = scrollAmount;
        
        // Reset scroll when reaching the end
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
      requestAnimationFrame(scroll);
    };
    
    const animation = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[450px] overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url('/assets/images/kerala-banner.jpg')`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#01454b]/95 via-[#0d9866]/80 to-[#01454b]/90" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-5xl text-white">

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Invest in Kerala’s Future <br />
              With IqueCap
            </h1>

            <p className="mt-6 text-lg md:text-2xl opacity-90 max-w-3xl mx-auto">
              Empowering investors with access to high-potential startups,
              private companies, and emerging opportunities.
            </p>

          </div>
        </div>
      </section>

      {/* NAVBAR */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">

          <Link
            to="/"
            className="text-[#0d9866] hover:text-[#01454b] font-semibold transition"
          >
            ← Back to Home
          </Link>

        </div>
      </nav>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 space-y-8">

            {/* ABOUT CARD */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                About IqueCap Kerala
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed text-[16px]">

                <p>
                  Welcome to <strong>IqueCap</strong> — a modern investment
                  platform connecting investors with high-growth startups and
                  private companies across Kerala and India.
                </p>

                <p>
                  Kerala is emerging as one of India’s strongest startup and
                  innovation ecosystems with rapid growth across technology,
                  healthcare, sustainability, tourism, and digital enterprises.
                </p>

                {/* FOCUS AREAS */}
                <div>

                  <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                    Our Focus Areas
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">

                    {[
                      "Early-Stage Startup Investments",
                      "Private Equity Opportunities",
                      "Technology & Innovation Ventures",
                      "Healthcare & Sustainable Enterprises",
                      "Investor Education & Market Insights",
                      "Long-Term Wealth Creation",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 hover:shadow-md transition"
                      >
                        <p className="font-medium text-gray-700">
                          {item}
                        </p>
                      </div>
                    ))}

                  </div>
                </div>

                {/* WHY CHOOSE */}
                <div>

                  <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                    Why Choose IqueCap Kerala?
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">

                    {[
                      {
                        title: "Emerging Innovation Hub",
                        desc: "Access Kerala’s growing startup ecosystem.",
                      },
                      {
                        title: "Early Growth Participation",
                        desc: "Invest in future-ready businesses.",
                      },
                      {
                        title: "Portfolio Diversification",
                        desc: "Expand beyond traditional investments.",
                      },
                      {
                        title: "Sustainable Growth Focus",
                        desc: "Support impactful and scalable ventures.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition"
                      >

                        <h4 className="font-semibold text-[#0d9866] text-lg mb-2">
                          {item.title}
                        </h4>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>

                      </div>
                    ))}

                  </div>
                </div>

                {/* PHILOSOPHY */}
                <div>

                  <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                    Our Investment Philosophy
                  </h3>

                  <div className="space-y-3 text-gray-700">

                    <p>✔ Quality First — Strong business fundamentals</p>

                    <p>✔ Transparent Insights — Clear investor communication</p>

                    <p>✔ Long-Term Vision — Sustainable capital growth</p>

                    <p>✔ Community Empowerment — Investing with purpose</p>

                  </div>

                </div>

              </div>
            </div>

            {/* GOOGLE REVIEWS - AUTO SCROLLING */}
            <section className="bg-white rounded-3xl shadow-xl p-8 overflow-hidden relative">

              <div className="flex items-center gap-4 mb-8">

                <img
                  src={googleLogo}
                  alt="Google"
                  className="w-12 h-12"
                />

                <div>

                  <h2 className="text-3xl font-bold text-gray-900">
                    Google Reviews
                  </h2>

                  <p className="text-gray-500 text-sm">
                    Trusted by investors across India
                  </p>

                </div>

              </div>

              {/* Auto-scrolling container */}
              <div className="relative">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                
                {/* Scrollable content */}
                <div
                  ref={scrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  {/* Double the reviews for seamless loop */}
                  {[...reviews, ...reviews, ...reviews].map((item, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-[350px] bg-gray-50 border border-gray-200 rounded-3xl p-6 hover:shadow-xl transition duration-300"
                    >
                      {/* STARS */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-1 text-yellow-400">
                          {[...Array(5)].map((_, index) => (
                            <FaStar key={index} />
                          ))}
                        </div>
                        {item.isNew && (
                          <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                            NEW
                          </span>
                        )}
                      </div>

                      {/* REVIEW */}
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-5 line-clamp-4">
                        "{item.review}"
                      </p>

                      {/* USER */}
                      <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {item.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {item.location}
                          </p>
                        </div>
                        <span className="text-xs text-gray-400">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scroll indicators */}
              <div className="flex justify-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-green-300"></div>
                <div className="w-2 h-2 rounded-full bg-green-300"></div>
              </div>

            </section>

          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">

            {/* QUICK FACTS */}
            <div className="bg-white rounded-3xl shadow-xl p-7">

              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Quick Facts
              </h3>

              <div className="space-y-5">

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Location</span>
                  <span className="font-semibold text-right">
                    Kerala, India
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Platform</span>
                  <span className="font-semibold text-right">
                    Private Equity
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Focus</span>
                  <span className="font-semibold text-right">
                    Startup & Private Companies
                  </span>
                </div>

              </div>

            </div>

            {/* WHATSAPP */}
            <div className="bg-white rounded-3xl shadow-xl p-7 text-center">

              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Enquire Now
              </h3>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-semibold transition duration-300"
              >
                Chat on WhatsApp
              </a>

              <a
                href="tel:+919035276010"
                className="block mt-5 text-[#0d9866] font-semibold hover:underline"
              >
                Call: +91 9035276010
              </a>

            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-cyan-600 to-emerald-500 rounded-3xl shadow-xl p-8 text-white text-center">

              <h3 className="text-3xl font-bold mb-4">
                Start Your Journey
              </h3>

              <p className="text-sm opacity-90 mb-6 leading-relaxed">
                Become part of Kerala’s growing investment ecosystem with
                IqueCap today.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white text-cyan-600 font-semibold py-3 rounded-2xl hover:bg-gray-100 transition duration-300"
              >
                Become a Member
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}