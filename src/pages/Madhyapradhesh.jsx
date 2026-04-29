// MadhyaPradeshLanding.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaUserPlus,
  FaThList,
  FaHandHoldingUsd,
  FaChartLine,
  FaEye,
  FaBullseye,
  FaShieldAlt,
  FaUsers,
  FaFileAlt,
  FaChalkboardTeacher,
  FaLock,
  FaChartBar,
  FaNetworkWired,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";
import googleLogo from "../assets/images/icons8-google-logo-48.png";
import why from "../assets/images/2285.jpg";
import footer from "../assets/images/image-about-ls.jpg";
import how from "../assets/images/banner-one-2.png";

export default function MadhyaPradeshLanding() {
  const navigate = useNavigate();

  const EnquiryForm = () => {
    const [form, setForm] = useState({
      name: "",
      email: "",
      phone: "",
      place: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!form.name || !form.email || !form.phone || !form.place) {
        alert("Please fill all fields");
        return;
      }

      setIsSubmitting(true);

      try {
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("place", form.place);

        await fetch(
          "https://script.google.com/macros/s/AKfycbyjypM1LIG71oaBHPH0e4D4ps2XgMbN_2XfZSHW-lZFrk8lciofEcVXHXerKmrcC7d-DQ/exec",
          {
            method: "POST",
            body: formData,
          },
        );

        // SUCCESS (no redirect)
        alert("Form submitted successfully ✅");

        setForm({
          name: "",
          email: "",
          phone: "",
          place: "",
        });
      } catch (error) {
        console.error(error);
        alert("Submission failed ❌");
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="w-full flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-5 md:p-6 rounded-2xl shadow-2xl w-full max-w-sm">
          <h3 className="text-base md:text-lg font-semibold mb-4 text-center">
            Enquire Now with iQueCap MP
          </h3>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full bg-white/20 border border-white/30 p-3 rounded-lg mb-3 text-white placeholder:text-white/70"
              disabled={isSubmitting}
              required
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full bg-white/20 border border-white/30 p-3 rounded-lg mb-3 text-white placeholder:text-white/70"
              disabled={isSubmitting}
              required
            />
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter Your Phone Number"
              className="w-full bg-white/20 border border-white/30 p-3 rounded-lg mb-3 text-white placeholder:text-white/70"
              disabled={isSubmitting}
              required
            />
            <input
              name="place"
              value={form.place}
              onChange={handleChange}
              placeholder="Enter Your Location"
              className="w-full bg-white/20 border border-white/30 p-3 rounded-lg mb-4 text-white placeholder:text-white/70"
              disabled={isSubmitting}
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-400 text-black py-3 rounded-lg font-semibold hover:bg-green-300 transition disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    );
  };

  const reviews = [
    {
      name: "SabeeK Sabeek",
      location: "Tamilnadu",
      rating: 5,
      review:
        "I am safreek from tamilnadu I invest some lakhs in 40 days plan after maturity principal amount and returns in my account i really happy this is trusted platform.",
      time: "19 hours ago",
      isNew: true,
    },
    {
      name: "Ratheesh Parakkal",
      location: "",
      rating: 5,
      review: "Best investment platform secure your money",
      time: "6 weeks ago",
      isNew: false,
    },
    {
      name: "Rahul Sharma",
      location: "Madhya Pradesh",
      rating: 5,
      review:
        "Best investment platform in Madhya Pradesh. iQueCap Madhya Pradesh provides great service.",
      time: "3 months ago",
      isNew: false,
    },
    {
      name: "Priya Mehta",
      location: "Madhya Pradesh",
      rating: 5,
      review:
        "Very professional team at iQueCap Madhya Pradesh and smooth onboarding process.",
      time: "2 months ago",
      isNew: false,
    },
    {
      name: "Vikram Singh",
      location: "Madhya Pradesh",
      rating: 5,
      review:
        "iQueCap Madhya Pradesh is a trusted platform with consistent returns.",
      time: "1 month ago",
      isNew: false,
    },
  ];

  // Why Choose Services - Vertical Cards
  const whyServices = [
    {
      icon: <FaShieldAlt />,
      title: "Secure & Trusted",
      description:
        "Bank-grade security with 100% protection for your investments",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <FaUsers />,
      title: "Local Support",
      description:
        "Dedicated support team in Madhya Pradesh for personalized assistance",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <FaFileAlt />,
      title: "Paperless Onboarding",
      description: "Complete digital KYC and instant account activation",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Guidance",
      description: "Professional investment advisors to guide your decisions",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: <FaLock />,
      title: "Secure Transactions",
      description: "Encrypted payments and protected investor funds",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: <FaChartBar />,
      title: "Proven Track Record",
      description: "Consistent returns with 95% investor satisfaction",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: <FaNetworkWired />,
      title: "Robust Network",
      description: "Access to 500+ vetted startups across India",
      color: "from-teal-500 to-green-600",
    },
    {
      icon: <FaRocket />,
      title: "High Growth Potential",
      description: "Target startups with 2x-5x growth trajectory",
      color: "from-rose-500 to-red-600",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Platform",
      description: "AI-powered insights and real-time portfolio tracking",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <div className="font-sans text-white w-full overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-12 md:py-0 md:pt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#012f33] via-[#01454b] to-[#021f22]" />
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-teal-400/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

        <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-6 items-center">
          <div className="space-y-4 md:space-y-5 text-center md:text-left">
            <p className="text-xs md:text-sm lg:text-base text-gray-200 tracking-wide">
              Ready to Earn Up to 60% Returns Faster with iQueCap ?
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Invest smart, invest securely <br />
              with{" "}
              <span className="text-green-300">iQueCap</span>
            </h1>
            <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-xs sm:text-sm md:text-base">
              <li>✔ Trusted by top investors</li>
              <li>✔ Grow Your wealth Plan Your Future</li>
            </ul>
          </div>
          <EnquiryForm />
        </div>
      </section>

      {/* ================= ABOUT with VISION & MISSION CARDS ================= */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* About Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About{" "}
              <span className="text-green-600">iQueCap</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              iQueCap  is a trusted startup investment platform, connecting investors across india
              with high-potential startups.
            </p>
          </div>

          {/* Vision & Mission Cards - Side by Side */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FaEye className="text-green-600 text-xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                To go beyond being just a platform and become a powerful
                movement that transforms the investment ecosystem across
               , creating lasting wealth for every investor.
              </p>
              <div className="mt-4 pt-4 border-t border-green-200">
                <p className="text-green-600 font-semibold text-sm">
                  ✦ Empowering  Financial Future
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaBullseye className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                To empower startups and investors across through
                structured, transparent, and guided investment opportunities,
                ensuring sustainable growth and mutual success.
              </p>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-blue-600 font-semibold text-sm">
                  ✦ Building Trust Through Transparency
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "2000+", label: "Active Investors" },
              { value: "30+", label: "Startups Funded" },
              { value: "200+", label: "Team Members" },
              { value: "₹500Cr+", label: "Funds Managed" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-4 bg-gray-50 rounded-xl"
              >
                <p className="text-2xl md:text-3xl font-bold text-green-600">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE - SMALL VERTICAL CARDS ================= */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="text-green-600">iQueCap</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Discover the benefits that make us the preferred investment
              platform in India
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {whyServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span className="text-green-600 text-xs font-semibold">
                    Learn more →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GOOGLE REVIEWS ================= */}
      <section className="py-12 md:py-20 px-4 sm:px-6 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 md:space-y-6 sticky top-8">
              <div className="flex items-center gap-3">
                <img
                  src={googleLogo}
                  alt="Google Reviews"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  Google Reviews
                </h2>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    4.8
                  </span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5 md:w-6 md:h-6" />
                    ))}
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  Rated 4.8 out of 5 stars
                </p>
                <p className="text-xs md:text-sm text-gray-500">
                  Based on 150+ reviews from investors across Madhya Pradesh
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="animate-scroll-horizontal flex gap-6 py-4"
                  style={{ width: "fit-content" }}
                >
                  {[...reviews, ...reviews].map((item, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-80 md:w-96 p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex text-yellow-400 gap-1">
                          {[...Array(5)].map((_, si) => (
                            <FaStar
                              key={si}
                              size={16}
                              className={
                                si < item.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        {item.isNew && (
                          <span className="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-semibold">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 line-clamp-4">
                        "{item.review}"
                      </p>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">
                            {item.name}
                          </p>
                          {item.location && (
                            <p className="text-xs text-gray-500">
                              {item.location}
                            </p>
                          )}
                        </div>
                        <p className="text-xs text-gray-400">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes scrollHorizontal { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-scroll-horizontal { display: flex; animation: scrollHorizontal 40s linear infinite; width: fit-content; }
          .animate-scroll-horizontal:hover { animation-play-state: paused; }
          .line-clamp-4 { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
        `}</style>
      </section>

      {/* ================= HOW IT WORKS - VERTICAL TIMELINE VARIANT ================= */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              How <span className="text-green-600">iQueCap</span>{" "}
              Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Your journey to financial freedom starts here
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Timeline Steps */}
            <div className="space-y-8">
              {[
                {
                  icon: <FaUserPlus />,
                  title: "Create Account",
                  desc: "Sign up with basic details & complete KYC verification",
                  time: "5 mins",
                  step: 1,
                },
                {
                  icon: <FaThList />,
                  title: "Explore Portfolios",
                  desc: "Browse through vetted startups & investment plans",
                  time: "10 mins",
                  step: 2,
                },
                {
                  icon: <FaHandHoldingUsd />,
                  title: "Make Investment",
                  desc: "Choose amount & invest securely with one click",
                  time: "2 mins",
                  step: 3,
                },
                {
                  icon: <FaChartLine />,
                  title: "Track Returns",
                  desc: "Monitor growth & get monthly payouts",
                  time: "Ongoing",
                  step: 4,
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 pb-8 border-l-4 border-green-200 last:border-0 group"
                >
                  {/* Step Circle */}
                  <div className="absolute left-[-12px] top-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform"></div>

                  {/* Step Number */}
                  <div className="absolute left-[-28px] top-0 text-xs font-bold text-green-600">
                    {String(step.step).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all ml-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-lg">
                        {step.icon}
                      </div>
                      <h3 className="font-bold text-gray-800 text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-2 ml-12">
                      {step.desc}
                    </p>
                    <div className="flex items-center gap-2 ml-12">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        ⏱ {step.time}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Image with Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="sticky top-8"
            >
              <div className="relative  overflow-hidden ">
                <img
                  src={how} // Replace with your image
                  alt="Investment Journey"
                  className="w-full h-auto object-cover"
                />

                {/* Floating Cards */}
                <div className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-lg animate-bounce"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER BANNER ================= */}
      <section className="relative min-h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src={footer}
          alt="Footer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0b2f33]/80"></div>
        <div className="relative z-10 max-w-3xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            Ready to Grow Your Wealth <br className="hidden sm:block" />
            with iQueCap ?
          </h2>
          <p className="text-gray-200 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base">
            Take the first step – invest smart, invest simple.
          </p>
          <div className="border-t border-white/30 mb-5 sm:mb-6 md:mb-8 w-2/3 mx-auto"></div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
              <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>capsupport@iquecap.com</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
              <FaPhoneAlt className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>+91 9035093820</span>
            </div>
          </div>
          <p className="text-xs text-gray-300 mt-6">
            © 2026 iQueCap Madhya Pradesh - Empowering Madhya Pradesh Investors
          </p>
        </div>
      </section>
    </div>
  );
}
