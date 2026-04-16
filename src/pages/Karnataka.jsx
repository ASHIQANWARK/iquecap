import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaUserPlus, FaThList, FaHandHoldingUsd, FaChartLine } from "react-icons/fa";
import { FaEye, FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";
import googleLogo from "../assets/images/icons8-google-logo-48.png"
import about from "../assets/images/about-img-1-min.png"
import about1 from "../assets/images/fun-3.png"
import about2 from "../assets/images/serv-ico-img-2.png"
import why from "../assets/images/2285.jpg"
import link2 from "../assets/images/link-box-2.png"
import link1 from "../assets/images/link-box-1.png"
import footer from "../assets/images/image-about-ls.jpg"

export default function KarnatakaLanding() {
  const whatsappNumber = "919035465957";
  const whatsappMessage =
    "Hello iQueCap Karnataka Team, I would like to know more about investment opportunities.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="font-sans text-white w-full overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-12 md:py-0 md:pt-0">

        {/* DARK GREEN GRADIENT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#012f33] via-[#01454b] to-[#021f22]" />

        {/* SOFT GLOW EFFECT */}
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-teal-400/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-6 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-4 md:space-y-5 text-center md:text-left">
            <p className="text-xs md:text-sm lg:text-base text-gray-200 tracking-wide">
              Ready to Earn Up to 60% Returns Faster with iQueCap Karnataka?
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Invest smart, invest securely <br />
              with <span className="text-green-300">iQueCap Karnataka</span> — <span className="text-green-300">#1 Investment Platform</span>
            </h1>

            <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-xs sm:text-sm md:text-base">
              <li>✔ Trusted by top investors in Karnataka with iQueCap Karnataka</li>
              <li>✔ Low risk or high returns, build wealth your way with iQueCap Karnataka</li>
            </ul>

            <button className="bg-green-400 text-black px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-green-300 transition duration-300 shadow-lg text-sm md:text-base">
              Learn How iQueCap Karnataka Works
            </button>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-5 md:p-6 rounded-2xl shadow-2xl w-full max-w-sm mx-4 md:mx-0">

              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-5 text-center">
                Enquire Now with iQueCap Karnataka
              </h3>

              <input
                className="w-full bg-white/20 border border-white/30 placeholder-gray-300 text-white p-2.5 md:p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm md:text-base"
                placeholder="Enter Your Name"
              />

              <input
                className="w-full bg-white/20 border border-white/30 placeholder-gray-300 text-white p-2.5 md:p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm md:text-base"
                placeholder="Enter Your Email"
              />

              <input
                className="w-full bg-white/20 border border-white/30 placeholder-gray-300 text-white p-2.5 md:p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm md:text-base"
                placeholder="Enter Your Phone Number"
              />

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="block bg-green-400 text-black text-center py-2.5 md:py-3 rounded-lg font-semibold hover:bg-green-300 transition duration-300 shadow-lg text-sm md:text-base"
              >
                Connect with iQueCap Karnataka
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT TEXT */}
          <div className="space-y-5 md:space-y-6 order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              About iQueCap Karnataka
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              iQueCap Karnataka is a trusted startup investment platform from the startup 
              fostering company, IQues Ventures (www.ique.ventures). We connect 
              investors across Karnataka with high-potential startups, enabling smart and guided 
              investment opportunities.
            </p>

            {/* VISION with Icon */}
            <div className="flex gap-3">
              <div className="flex-shrink-0 mt-1">
                <FaEye className="text-green-600 text-xl md:text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-1">
                  Our Vision at iQueCap Karnataka
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  To go beyond being just a platform and become a powerful movement 
                  that transforms the investment ecosystem across Karnataka.
                </p>
              </div>
            </div>

            {/* MISSION with Icon */}
            <div className="flex gap-3">
              <div className="flex-shrink-0 mt-1">
                <FaBullseye className="text-green-600 text-xl md:text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-1">
                  Our Mission at iQueCap Karnataka
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  To empower startups and investors across Karnataka through structured, transparent, 
                  and guided investment opportunities with iQueCap Karnataka.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center order-1 md:order-2">
            
            {/* MAIN IMAGE */}  
            <img
              src={about}
              alt="iQueCap Karnataka About"
              className="rounded-2xl w-full max-w-sm md:max-w-md object-cover"
            />

            {/* TOP CARD */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-md text-xs sm:text-sm font-medium text-gray-800">
              <img
                src={about1}
                alt="iQueCap Karnataka Investors"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
              />
              <span className="text-xs sm:text-sm">5M+ Active Investors with iQueCap Karnataka</span>
            </div>

            {/* BOTTOM CARD */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-md text-xs sm:text-sm font-medium text-gray-800">
              <img
                src={about2}
                alt="iQueCap Karnataka Team"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
              />
              <span className="text-xs sm:text-sm">97+ Team Members at iQueCap Karnataka</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GOOGLE REVIEWS ================= */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

          {/* LEFT HEADER */}
          <div className="space-y-3 md:space-y-4 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <img src={googleLogo} alt="Google Reviews iQueCap Karnataka" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                iQueCap Karnataka Google Reviews
              </h2>
            </div>

            {/* RATING */}
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-lg md:text-xl font-semibold text-gray-900">4.8</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-3 h-3 md:w-4 md:h-4" />
                ))}
              </div>
            </div>

            <p className="text-xs md:text-sm text-gray-500">
              Rated by investors across Karnataka for iQueCap Karnataka
            </p>

            <button className="mt-2 bg-[#01454b] hover:bg-[#01363b] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition shadow">
              Write a Review for iQueCap Karnataka
            </button>
          </div>

          {/* REVIEWS */}
          {[
            {
              name: "DK Akash",
              review: "Best investment platform in Karnataka. iQueCap Karnataka provides great service and 100% security for your money.",
            },
            {
              name: "Akhila",
              review: "Very professional team at iQueCap Karnataka and smooth onboarding process. Highly recommended for Karnataka investors.",
            },
            {
              name: "Musthafa K",
              review: "iQueCap Karnataka is a trusted platform with consistent returns. Customer support is excellent.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 md:p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition bg-white/80 backdrop-blur-md"
            >
              {/* STARS */}
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={12} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                ))}
              </div>

              {/* REVIEW TEXT */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                {item.review}
              </p>

              {/* NAME */}
              <p className="font-semibold text-gray-900 text-xs sm:text-sm">
                {item.name} - iQueCap Karnataka Investor
              </p>
            </div>
          ))}
        </div>
      </section>

    {/* ================= WHY CHOOSE - MODERN ADVANCED DESIGN ================= */}
      <section className="py-12 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        
        

        <div className="max-w-6xl mx-auto relative z-10">
    

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* LEFT SIDE - IMAGE WITH MODERN OVERLAYS */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="relative order-2 md:order-1"
            >
             
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                <img
                  src={why}
                  alt="Why Choose iQueCap Karnataka"
                  className="w-full max-w-sm md:max-w-md object-cover mx-auto rounded-2xl"
                />
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Stats Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -top-6 -left-6 md:-top-10 md:-left-10 bg-white/90 backdrop-blur-md rounded-xl px-3 py-2 md:px-4 md:py-3 shadow-xl border border-white/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <FaChartLine className="text-white text-sm md:text-base" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Avg. Returns</p>
                    <p className="text-lg md:text-xl font-bold text-gray-800">Up to 60%</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white/90 backdrop-blur-md rounded-xl px-3 py-2 md:px-4 md:py-3 shadow-xl border border-white/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-800 to-cyan-500 rounded-lg flex items-center justify-center">
                    <FaUserPlus className="text-white text-sm md:text-base" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Happy Investors</p>
                    <p className="text-lg md:text-xl font-bold text-gray-800">1000+</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE - CONTENT WITH ADVANCED ANIMATIONS */}
            <div className="order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 md:space-y-5"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Why Choose <br />
                  <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    iQueCap Karnataka
                  </span>
                </h2>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  iQueCap Karnataka offers top-tier investment opportunities backed by expert-driven
                  strategies, ensuring security, growth, and long-term value for investors across Karnataka.
                </p>
              </motion.div>

              {/* FEATURES WITH MODERN CARDS */}
              <div className="mt-6 md:mt-8 grid gap-3">
                {[
                  { icon: "🏢", text: "Local Support in Karnataka, Anytime with iQueCap Karnataka", color: "from-emerald-500 to-emerald-350", border: "border-green-200" },
                  { icon: "🔒", text: "Strong Trust Signals from iQueCap Karnataka", color: "from-emerald-500 to-emerald-350", border: "border-blue-200" },
                  { icon: "📱", text: "Easy & Paperless Onboarding with iQueCap Karnataka", color: "from-emerald-500 to-emerald-350", border: "border-purple-200" },
                  { icon: "🎯", text: "Expert Guidance from iQueCap Karnataka Team", color: "from-emerald-500 to-emerald-350", border: "border-amber-200" },
                  { icon: "🛡️", text: "Trusted & Secure Transactions with iQueCap Karnataka", color: "from-emerald-500 to-emerald-350", border: "border-red-200" },
                  { icon: "📈", text: "Proven Track Record of iQueCap Karnataka", color: "from-emerald-500 to-emerald-350", border: "border-indigo-200" },
                  { icon: "🌐", text: "Robust Network Access through iQueCap Karnataka", color: "from-emerald-500 to-emerald-350", border: "border-teal-200" },
                  { icon: "⭐", text: "Credibility and growth markers of iQueCap Karnataka", color: "from-emerald-500 to-emerald-350", border: "border-yellow-200" },
                  { icon: "💡", text: "Innovative Platform Features of iQueCap Karnataka", color: "from-emerald-500 to-emerald-350", border: "border-cyan-200" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`group bg-gradient-to-r ${item.color} border ${item.border} rounded-xl p-3 md:p-3.5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl md:text-2xl transform group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                        {item.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA BUTTON WITH ANIMATION */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 md:mt-10"
              >
                <button className="group relative bg-gradient-to-r from-[#01454b] to-[#01363b] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Contact iQueCap Karnataka Today
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= CTA STRIP ================= */}
      <section className="py-8 md:py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 md:gap-5">

          {/* CARD 1 */}
          <div className="bg-gray-500 p-3 sm:p-4 rounded-xl flex items-center justify-between gap-3">
            <img
              src={link2}
              alt="Invest with iQueCap Karnataka"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
            />
            <div className="max-w-[55%] text-right">
              <h3 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm md:text-base">
                Start Investing in Game-Changing Startups Today with iQueCap Karnataka
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Explore iQueCap Karnataka Opportunities →
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#054045] text-white p-3 sm:p-4 rounded-xl flex items-center justify-between gap-3">
            <div className="max-w-[55%]">
              <h3 className="font-semibold mb-1 text-xs sm:text-sm md:text-base">
                Connect with Visionary Founders and Ideas through iQueCap Karnataka
              </h3>
              <p className="text-xs sm:text-sm opacity-90">
                Join iQueCap Karnataka as an Investor →
              </p>
            </div>
            <img
              src={link1}
              alt="Connect with iQueCap Karnataka"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gray-50 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-16"
        >
          How iQueCap Karnataka Works
        </motion.h2>

        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-[42px] left-0 w-full border-t border-dashed border-gray-300 hidden lg:block"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-6">

            {[
              { icon: <FaUserPlus />, title: "Sign Up with iQueCap Karnataka Instantly" },
              { icon: <FaThList />, title: "Explore iQueCap Karnataka Options" },
              { icon: <FaHandHoldingUsd />, title: "Invest with iQueCap Karnataka Confidence" },
              { icon: <FaChartLine />, title: "Track & Grow with iQueCap Karnataka" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center px-2"
              >
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full border border-gray-300 bg-white">
                    <span className="text-green-600 text-xl sm:text-2xl">{step.icon}</span>
                  </div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-700 rounded-full absolute left-1/2 -translate-x-1/2 -bottom-1 sm:bottom-0"></div>
                </div>

                <h3 className="mt-4 sm:mt-6 text-xs sm:text-sm font-semibold text-gray-700 text-center px-1">
                  {step.title}
                </h3>

                <div className="w-full border-t border-dashed border-gray-300 mt-3 sm:mt-4 md:hidden"></div>

                <span className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500">{i + 1}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER BANNER ================= */}
      <section className="relative min-h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src={footer}
          alt="iQueCap Karnataka Footer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0b2f33]/80"></div>

        <div className="relative z-10 max-w-3xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            Ready to Grow Your Wealth <br className="hidden sm:block" />
            with iQueCap Karnataka?
          </h2>

          <p className="text-gray-200 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base">
            Take the first step with iQueCap Karnataka – invest smart, invest simple.
          </p>

          <div className="border-t border-white/30 mb-5 sm:mb-6 md:mb-8 w-2/3 mx-auto"></div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
            <button className="bg-[#01454b] hover:bg-[#01363b] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium transition duration-300 shadow-lg text-xs sm:text-sm md:text-base">
              Contact iQueCap Karnataka
            </button>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
              <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>support@iquecap.co</span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
              <FaPhoneAlt className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>+91 9035465957 (iQueCap Karnataka)</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-300 mt-6">
            © 2024 iQueCap Karnataka - Empowering Karnataka Investors
          </p>
        </div>
      </section>
    </div>
  );
}