// PunjabLanding.jsx
import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaRegHandshake,
  FaUserCheck,
  FaSearchDollar,
  FaFileAlt,
  FaHeadset,
  FaClock,
  FaBell,
  FaMobileAlt,
  FaRegSmile,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft,
  FaRocket,
  FaGem,
  FaLeaf,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

export default function PunjabLanding() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    investmentRange: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // Handle scroll for WhatsApp button visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setShowWhatsapp(false);
      } else {
        setShowWhatsapp(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.investmentRange) {
      alert("Please fill all fields");
      return;
    }
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", form.fullName);
      formData.append("phone", form.phone);
      formData.append("investmentRange", form.investmentRange);
      await fetch(
        "https://script.google.com/macros/s/AKfycbyjypM1LIG71oaBHPH0e4D4ps2XgMbN_2XfZSHW-lZFrk8lciofEcVXHXerKmrcC7d-DQ/exec",
        { method: "POST", body: formData, mode: "no-cors" }
      );
      setShowPopup(true);
      setForm({ fullName: "", phone: "", investmentRange: "" });
      setTimeout(() => setShowPopup(false), 4000);
    } catch (error) {
      console.error(error);
      alert("Submission failed ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919035093820?text=Hi%2C%20I%20want%20to%20invest%20with%20iQue%20Cap%20Punjab", "_blank");
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardHover = {
    hover: { scale: 1.05, y: -8, transition: { duration: 0.3 } },
  };

  return (
    <div className="font-sans w-full overflow-x-hidden bg-gradient-to-br from-[#0a2b2e] via-[#0d3d41] to-[#062123]">
      
      {/* Thank You Popup */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3"
        >
          <FaCheckCircle className="text-xl" />
          <span className="font-semibold">Thank you! Our team will contact you shortly ✅</span>
        </motion.div>
      )}

      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={openWhatsApp}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: showWhatsapp ? 1 : 0, opacity: showWhatsapp ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-2xl" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat with us
        </span>
      </motion.button>

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 md:py-0 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-[100px] top-[-200px] left-[-200px] animate-pulse" />
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-[100px] bottom-[-150px] right-[-150px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mx-auto lg:mx-0 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/20"
            >
              🇮🇳 Trusted by investors across Punjab
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Grow Your Wealth with{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Structured Investments
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Expert-led, research-driven opportunities designed for investors who want clarity, not confusion.
            </p>
            <motion.div
              variants={staggerContainer}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                Start Investing <FaArrowRight className="group-hover:translate-x-1 transition" />
              </motion.button>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <FaUsers className="text-green-400" />
                <span>Trusted by 2000+ investors across Punjab</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Lead Form */}
          <motion.div
            id="form-section"
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            className="w-full flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-2 text-center">Get Investment Details</h3>
              <p className="text-white/70 text-center text-sm mb-6">Fill the form to receive exclusive opportunities</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                  disabled={isSubmitting}
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                  disabled={isSubmitting}
                  required
                />
                <select
                  name="investmentRange"
                  value={form.investmentRange}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  required
                  disabled={isSubmitting}
                >
                  <option value="" className="text-gray-800">Select Investment Range</option>
                  <option value="50K-1L" className="text-gray-800">₹50K – ₹1L</option>
                  <option value="1L-5L" className="text-gray-800">₹1L – ₹5L</option>
                  <option value="5L+" className="text-gray-800">₹5L+</option>
                </select>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "👉 Get Investment Details"}
                </motion.button>
              </form>
              <div className="flex items-center justify-center gap-3 mt-5 text-xs text-white/50">
                <FaShieldAlt /> <span>100% Secure</span>
                <FaClock /> <span>Quick Response</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* ================= 2. TRUST STRIP ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-10 px-4 bg-white/5 backdrop-blur-sm border-y border-white/10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <FaShieldAlt />, text: "Structured Investment Approach" },
              { icon: <FaFileAlt />, text: "Transparent Process" },
              { icon: <FaUsers />, text: "Dedicated Punjab Support" },
              { icon: <FaRegHandshake />, text: "Guided Investment Journey" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="text-green-400 text-3xl">{item.icon}</div>
                <span className="text-sm font-medium text-white/80">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= 3. ABOUT SECTION ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Who We Are</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-8 rounded-full" />
          </motion.div>
          <motion.p variants={fadeUp} className="text-gray-200 text-lg md:text-xl leading-relaxed">
            iQue Cap Punjab is a regional investment platform focused on delivering curated opportunities
            with a <span className="font-semibold text-green-400">structured and research-driven approach</span>.
          </motion.p>
          <motion.p variants={fadeUp} className="text-gray-200 text-lg md:text-xl leading-relaxed mt-4">
            We simplify investing by providing clear insights, guided execution, and continuous support,
            so you can focus on growing your wealth.
          </motion.p>
        </div>
      </motion.section>

      {/* ================= 4. WHY PEOPLE CHOOSE US ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Investors Prefer iQue Cap Punjab</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
          </motion.div>
          <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaUsers />, title: "Local Presence", desc: "Deeply connected within Punjab's investment ecosystem" },
              { icon: <FaSearchDollar />, title: "Expert Evaluation", desc: "Every opportunity is rigorously vetted by experts" },
              { icon: <FaRegHandshake />, title: "Hassle-Free Process", desc: "Minimal paperwork, maximum clarity" },
              { icon: <FaFileAlt />, title: "Transparent Communication", desc: "No hidden terms, no fine print surprises" },
              { icon: <FaHeadset />, title: "Dedicated Support", desc: "Your personal investment advisor throughout" },
              { icon: <FaChartLine />, title: "Proven Track Record", desc: "Consistent performance across investment cycles" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover="hover"
                variants={cardHover}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white text-xl mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= 5. HOW IT WORKS ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
            <p className="text-gray-300 mt-4 text-lg">Your journey to financial freedom in 4 simple steps</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: <FaUserCheck />, title: "Register & Connect", desc: "Sign up and connect with our Punjab advisor" },
              { step: "02", icon: <FaSearchDollar />, title: "Explore Opportunities", desc: "Review curated investment options" },
              { step: "03", icon: <FaRegHandshake />, title: "Invest with Clarity", desc: "Make informed decisions with full transparency" },
              { step: "04", icon: <FaChartLine />, title: "Track & Grow", desc: "Monitor your portfolio and watch it grow" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="relative text-center group"
              >
                <div className="relative mb-5">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto text-green-400 text-4xl border border-green-400/30 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-10 -right-6 text-green-400/50 text-2xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= 6. DIFFERENTIATOR SECTION ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp}>
            <FaGem className="text-green-400 text-5xl mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">A Smarter Way to Invest</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-8 rounded-full" />
          </motion.div>
          <motion.p variants={fadeUp} className="text-gray-200 text-xl leading-relaxed">
            Unlike unstructured investment models, we follow a{" "}
            <span className="font-semibold text-green-400">disciplined and research-backed process</span>{" "}
            to ensure clarity, control, and informed decision-making.
          </motion.p>
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="mt-10 inline-block"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 border border-green-400/30">
              <span className="text-green-400 font-medium">👉 This builds serious investor trust.</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= 7. TRANSPARENCY SECTION ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp}>
            <FaLeaf className="text-green-400 text-5xl mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">No False Promises. Only Clarity.</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-8 rounded-full" />
          </motion.div>
          <motion.p variants={fadeUp} className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
            All investments involve risk. At iQue Cap Punjab, we focus on{" "}
            <span className="font-semibold text-green-400">minimizing uncertainty</span> through evaluation, structured planning,
            and transparent communication.
          </motion.p>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-6 inline-block"
          >
            <p className="text-amber-300 text-md">
              💡 We believe in long-term wealth creation, not unrealistic guarantees.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= 8. SOCIAL PROOF ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Investors Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "The structured approach gave me confidence. iQue Cap Punjab's team is professional and transparent.", name: "Harpreet Kaur", location: "Ludhiana", rating: 5 },
              { quote: "Finally found a platform that values clarity over hype. Great experience so far!", name: "Amrit Singh", location: "Chandigarh", rating: 5 },
              { quote: "Very supportive team. They guide you at every step and answer all your queries patiently.", name: "Rajiv Sharma", location: "Jalandhar", rating: 5 },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <FaQuoteLeft className="text-green-400 text-3xl mb-4 opacity-50" />
                <p className="text-gray-200 italic mb-4 leading-relaxed">"{review.quote}"</p>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, s) => (
                    <FaStar key={s} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= 9. EXPERIENCE SECTION ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Designed for a Smooth Investment Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FaBell />, title: "Real-time updates", desc: "Stay informed always" },
              { icon: <FaHeadset />, title: "Dedicated support", desc: "We're here for you" },
              { icon: <FaFileAlt />, title: "Clear documentation", desc: "No hidden surprises" },
              { icon: <FaMobileAlt />, title: "Seamless process", desc: "Easy digital journey" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="text-center p-5 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full flex items-center justify-center mx-auto text-green-400 text-2xl mb-3 border border-green-400/30">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= 10. FINAL CTA SECTION ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-gradient-to-r from-green-900/40 to-emerald-900/40"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp}>
            <FaHandHoldingHeart className="text-green-400 text-5xl mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Start Your Investment Journey?</h2>
            <p className="text-gray-200 text-lg mb-8">Join hundreds of successful investors who chose iQue Cap Punjab</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Get Started Now <FaRocket />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 text-center">
        <p className="text-gray-400 text-sm">
          © 2026 iQue Cap Punjab - Empowering Punjab Investors | 
          <span className="text-green-400"> 📞 +91 9035093820</span> | 
          <span className="text-green-400"> ✉️ capsupport@iquecap.com</span>
        </p>
       
      </footer>
    </div>
  );
}