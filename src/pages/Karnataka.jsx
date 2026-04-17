import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaUserPlus, FaThList, FaHandHoldingUsd, FaChartLine } from "react-icons/fa";
import { FaEye, FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";
import googleLogo from "../assets/images/icons8-google-logo-48.png";
import about from "../assets/images/about-img-1-min.png";
import about1 from "../assets/images/fun-3.png";
import about2 from "../assets/images/serv-ico-img-2.png";
import why from "../assets/images/2285.jpg";
import link2 from "../assets/images/link-box-2.png";
import link1 from "../assets/images/link-box-1.png";
import footer from "../assets/images/image-about-ls.jpg";

export default function KarnatakaLanding() {
  const EnquiryForm = () => {
    const [form, setForm] = useState({
      name: "",
      email: "",
      phone: "",
      place: ""
    });

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
      if (!form.name || !form.email || !form.phone || !form.place) {
        alert("Please fill all fields");
        return;
      }

      try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbzEwGvYhL2uj6ouXMDT9bbHaG849lP_sExiLD9bsoWL1e81BNYuX2EZs1slm-UDI08E/exec", {
          method: "POST",
          body: JSON.stringify(form),
        });

        const data = await res.json();

        if (data.status === "success") {
          alert("Submitted successfully!");
          setForm({ name: "", email: "", phone: "", place: "" });
        } else {
          alert("Something went wrong");
        }

      } catch (error) {
        console.error(error);
        alert("Submission failed");
      }
    };

    return (
      <div className="w-full flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-5 md:p-6 rounded-2xl shadow-2xl w-full max-w-sm">
          <h3 className="text-base md:text-lg font-semibold mb-4 text-center">
            Enquire Now with iQueCap Karnataka
          </h3>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full bg-white/20 border border-white/30 p-3 rounded-lg mb-3 text-white placeholder:text-white/70"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="w-full bg-white/20 border border-white/30 p-3 rounded-lg mb-3 text-white placeholder:text-white/70"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
            className="w-full bg-white/20 border border-white/30 p-3 rounded-lg mb-3 text-white placeholder:text-white/70"
          />

          <input
            name="place"
            value={form.place}
            onChange={handleChange}
            placeholder="Enter Your Place"
            className="w-full bg-white/20 border border-white/30 p-3 rounded-lg mb-4 text-white placeholder:text-white/70"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-green-400 text-black py-3 rounded-lg font-semibold hover:bg-green-300 transition"
          >
            Submit
          </button>
        </div>
      </div>
    );
  };

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
              with <span className="text-green-300">iQueCap Karnataka</span>  <span className="text-green-300">#1 Investment Platform</span>
            </h1>

            <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-xs sm:text-sm md:text-base">
              <li>✔ Trusted by top investors in Karnataka with iQueCap Karnataka</li>
              <li>✔ Low risk or high returns, build wealth your way with iQueCap Karnataka</li>
            </ul>

            
          </div>

          {/* RIGHT FORM */}
          <EnquiryForm />
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
              <span className="text-lg md:text-xl font-semibold text-gray-900">4.7</span>
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

     {/* ================= WHY CHOOSE - PROFESSIONAL DESIGN ================= */}
      <section className="py-12 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* LEFT SIDE - CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="order-1"
            >
              <div className="space-y-4 md:space-y-5">
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
              </div>

              {/* FEATURES WITH PROFESSIONAL CARDS */}
              <div className="mt-6 md:mt-8 grid gap-3">
                {[
                  { text: "Local Support in Karnataka, Anytime with iQueCap Karnataka", border: "border-green-200" },
                  { text: "Strong Trust Signals from iQueCap Karnataka", border: "border-blue-200" },
                  { text: "Easy & Paperless Onboarding with iQueCap Karnataka", border: "border-purple-200" },
                  { text: "Expert Guidance from iQueCap Karnataka Team", border: "border-amber-200" },
                  { text: "Trusted & Secure Transactions with iQueCap Karnataka", border: "border-red-200" },
                  { text: "Proven Track Record of iQueCap Karnataka", border: "border-indigo-200" },
                  { text: "Robust Network Access through iQueCap Karnataka", border: "border-teal-200" },
                  { text: "Credibility and growth markers of iQueCap Karnataka", border: "border-yellow-200" },
                  { text: "Innovative Platform Features of iQueCap Karnataka", border: "border-cyan-200" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`group bg-white border ${item.border} rounded-xl p-3 md:p-3.5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                        {item.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              
            </motion.div>

            {/* RIGHT SIDE - IMAGE WITH BIGGER HEIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="relative order-2"
            >
              {/* Main Image Container - Bigger Height */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                <div className="relative w-full" style={{ paddingBottom: "120%" }}>
                  <img
                    src={why}
                    alt="Why Choose iQueCap Karnataka"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />
                </div>
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>

              {/* Floating Stats Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -top-6 -left-6 md:-top-10 md:-left-10 bg-white/90 backdrop-blur-md rounded-xl px-3 py-2 md:px-4 md:py-3 shadow-xl border border-white/50 z-10"
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
                className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white/90 backdrop-blur-md rounded-xl px-3 py-2 md:px-4 md:py-3 shadow-xl border border-white/50 z-10"
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

              {/* Decorative Background Element */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 md:w-80 md:h-80 bg-green-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 md:w-80 md:h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
            </motion.div>
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
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full border border-emerald-800 bg-white">
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
           

            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
              <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>salma@iquecap.com</span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
              <FaPhoneAlt className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>+91-9035514801, +91-9036913390  (iQueCap Karnataka)</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-300 mt-6">
            © 2026 iQueCap Karnataka - Empowering Karnataka Investors
          </p>
        </div>
      </section>
    </div>
  );
}