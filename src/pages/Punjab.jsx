// PunjabLanding.js
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
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function PunjabLanding() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    investmentRange: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        { method: "POST", body: formData }
      );
      alert("Form submitted successfully ✅");
      setForm({ fullName: "", phone: "", investmentRange: "" });
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

  return (
    <div className="font-sans text-gray-800 w-full overflow-x-hidden bg-white">
      {/* ================= STICKY WHATSAPP BUTTON ================= */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          showWhatsapp ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp size={28} />
          <span className="hidden md:inline font-semibold">Talk to Punjab Advisor</span>
        </button>
      </div>

      {/* ================= 1. ABOVE THE FOLD (HERO SECTION) ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-16 pb-12 md:py-0 bg-gradient-to-br from-[#0a2b2e] via-[#0d3d41] to-[#062123]">
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-green-400/10 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-teal-400/10 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

        <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-5 text-center md:text-left">
            <div className="inline-block mx-auto md:mx-0 px-4 py-1.5 bg-white/10 rounded-full text-sm text-white/90 backdrop-blur-sm">
              🇮🇳 Trusted by investors across Punjab
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Grow Your Wealth with{" "}
              <span className="text-green-300">Structured Investments</span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-lg mx-auto md:mx-0">
              Expert-led, research-driven opportunities designed for investors who want clarity, not confusion.
            </p>
            <div className="flex items-center gap-2 justify-center md:justify-start text-white/80 text-sm">
              <FaUsers className="text-green-300" />
              <span>Trusted by a growing network of investors across Punjab</span>
            </div>
          </div>

          {/* Lead Form */}
          <div className="w-full flex justify-center md:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Get Investment Details</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  disabled={isSubmitting}
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  disabled={isSubmitting}
                  required
                />
                <select
                  name="investmentRange"
                  value={form.investmentRange}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select Investment Range</option>
                  <option value="50K-1L">₹50K – ₹1L</option>
                  <option value="1L-5L">₹1L – ₹5L</option>
                  <option value="5L+">₹5L+</option>
                </select>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "👉 Get Investment Details"}
                </button>
              </form>
              {/* Micro-trust */}
              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">✔ No spam</span>
                <span className="flex items-center gap-1">⏱ Quick response within 10 mins</span>
              </div>

              {/* Alternate WhatsApp CTA */}
              <button
                onClick={openWhatsApp}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-green-100 text-green-700 py-2.5 rounded-lg font-medium hover:bg-green-200 transition"
              >
                <FaWhatsapp size={18} />
                👉 Talk to Our Punjab Advisor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. TRUST STRIP ================= */}
      <section className="py-8 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: <FaShieldAlt />, text: "Structured Investment Approach" },
              { icon: <FaFileAlt />, text: "Transparent Process" },
              { icon: <FaUsers />, text: "Dedicated Punjab Support" },
              { icon: <FaRegHandshake />, text: "Guided Investment Journey" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="text-green-600 text-2xl">{item.icon}</div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. ABOUT SECTION ================= */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            iQue Cap Punjab is a regional investment platform focused on delivering curated opportunities
            with a <span className="font-semibold text-green-700">structured and research-driven approach</span>.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            We simplify investing by providing clear insights, guided execution, and continuous support,
            so you can focus on growing your wealth.
          </p>
        </div>
      </section>

      {/* ================= 4. WHY PEOPLE CHOOSE US ================= */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Investors Prefer iQue Cap Punjab</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaUsers />, title: "Local Presence with Strong Network", desc: "Deeply connected within Punjab's investment ecosystem" },
              { icon: <FaSearchDollar />, title: "Expert Evaluation of Opportunities", desc: "Every opportunity is rigorously vetted by experts" },
              { icon: <FaRegHandshake />, title: "Simple & Hassle-Free Process", desc: "Minimal paperwork, maximum clarity" },
              { icon: <FaFileAlt />, title: "Transparent Communication", desc: "No hidden terms, no fine print surprises" },
              { icon: <FaHeadset />, title: "Dedicated Relationship Support", desc: "Your personal investment advisor throughout" },
              { icon: <FaChartLine />, title: "Proven Track Record", desc: "Consistent performance across investment cycles" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. HOW IT WORKS (VISUAL) ================= */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: <FaUserCheck />, title: "Register & Connect", desc: "Sign up and connect with our Punjab advisor" },
              { step: "02", icon: <FaSearchDollar />, title: "Explore Opportunities", desc: "Review curated investment options" },
              { step: "03", icon: <FaRegHandshake />, title: "Invest with Clarity", desc: "Make informed decisions with full transparency" },
              { step: "04", icon: <FaChartLine />, title: "Track & Grow", desc: "Monitor your portfolio and watch it grow" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 text-3xl">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. DIFFERENTIATOR SECTION ================= */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">A Smarter Way to Invest</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Unlike unstructured investment models, we follow a{" "}
            <span className="font-semibold text-green-700">disciplined and research-backed process</span>{" "}
            to ensure clarity, control, and informed decision-making.
          </p>
          <div className="mt-8 inline-block bg-white rounded-full px-6 py-2 shadow-sm">
            <span className="text-green-600 font-medium">👉 This builds serious investor trust.</span>
          </div>
        </div>
      </section>

      {/* ================= 7. RISK & TRANSPARENCY ================= */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">No False Promises. Only Clarity.</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            All investments involve risk. At iQue Cap Punjab, we focus on{" "}
            <span className="font-semibold">minimizing uncertainty</span> through evaluation, structured planning,
            and transparent communication.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 inline-block">
            <p className="text-amber-800 text-sm">
              💡 We believe in long-term wealth creation, not unrealistic guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 8. SOCIAL PROOF ================= */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Investors Say</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Simple and transparent process.", name: "Harpreet Kaur", location: "Ludhiana" },
              { quote: "Professional guidance throughout.", name: "Amrit Singh", location: "Chandigarh" },
              { quote: "Clear communication and support.", name: "Rajiv Sharma", location: "Jalandhar" },
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-green-500 text-3xl mb-2">“</div>
                <p className="text-gray-700 italic mb-4">{review.quote}</p>
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 9. EXPERIENCE SECTION ================= */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Designed for a Smooth Investment Experience</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {[
              { icon: <FaBell />, title: "Real-time updates", desc: "Stay informed always" },
              { icon: <FaHeadset />, title: "Dedicated support", desc: "We're here for you" },
              { icon: <FaFileAlt />, title: "Clear documentation", desc: "No hidden surprises" },
              { icon: <FaMobileAlt />, title: "Seamless process", desc: "Easy digital journey" },
            ].map((item, i) => (
              <div key={i} className="p-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 text-2xl mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 10. FINAL CTA WITH FORM AGAIN ================= */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#0a2b2e] to-[#0d3d41] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Investing?</h2>
          <p className="text-gray-200 mb-8">Take the next step toward structured wealth creation with iQue Cap Punjab.</p>

          {/* Repeat Form */}
          <div className="max-w-md mx-auto bg-white rounded-2xl p-6 text-gray-800">
            <h3 className="text-xl font-bold mb-4 text-center">👉 Get Investment Details</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={isSubmitting}
                required
              />
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={isSubmitting}
                required
              />
              <select
                name="investmentRange"
                value={form.investmentRange}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                disabled={isSubmitting}
              >
                <option value="">Select Investment Range</option>
                <option value="50K-1L">₹50K – ₹1L</option>
                <option value="1L-5L">₹1L – ₹5L</option>
                <option value="5L+">₹5L+</option>
              </select>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                {isSubmitting ? "Submitting..." : "👉 Get Investment Details"}
              </button>
            </form>

            {/* WhatsApp CTA Again */}
            <button
              onClick={openWhatsApp}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-green-100 text-green-700 py-2.5 rounded-lg font-medium hover:bg-green-200 transition"
            >
              <FaWhatsapp size={18} />
              👉 Chat with Our Punjab Team Now
            </button>
          </div>

          {/* Contact line */}
          <p className="text-sm text-gray-300 mt-6">
            📌 Feel free to reach out for any doubts, and you can contact us directly anytime.
          </p>
          <p className="text-xs text-gray-400 mt-4">© 2026 iQue Cap Punjab - Empowering Punjab Investors</p>
        </div>
      </section>
    </div>
  );
}