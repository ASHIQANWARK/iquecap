import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaRocket,
  FaCogs,
  FaHandshake,
  FaDollarSign,
  FaShieldAlt,
} from "react-icons/fa";

const items = [
  { text: "Comprehensive Support", icon: <FaUsers className="text-emerald-300" /> },
  { text: "Rigorous Vetting Process", icon: <FaCheckCircle className="text-emerald-300" /> },
  { text: "Expert Guidance", icon: <FaStar className="text-emerald-300" /> },
  { text: "Access to a Robust Network", icon: <FaLightbulb className="text-emerald-300" /> },
  { text: "Tailored Investment Opportunities", icon: <FaCogs className="text-emerald-300" /> },
  { text: "Innovative Platform Features", icon: <FaRocket className="text-emerald-300" /> },
  { text: "Transparent Processes", icon: <FaShieldAlt className="text-emerald-300" /> },
  { text: "Strong Track Record", icon: <FaChartLine className="text-emerald-300" /> },
  { text: "Dedicated Customer Support", icon: <FaHandshake className="text-emerald-300" /> },
  { text: "Flexible Investment Options", icon: <FaDollarSign className="text-emerald-300" /> },
];

const WhyIqueCap = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="relative z-10 flex flex-col items-center justify-center max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-12 px-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-900">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-emerald-300">
              iQue CAP
            </span>
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full" />
          <p className="text-base md:text-lg text-gray-700 mt-5 leading-relaxed max-w-3xl mx-auto">
            We provide top-tier investment opportunities, expert guidance, and a strong network for your financial growth.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="p-[2px] rounded-xl bg-gradient-to-r from-emerald-800 to-teal-600 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{
                  scale: 1.08,
                  rotate: 1,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="bg-black/30 backdrop-blur-xl text-white rounded-xl p-6 flex flex-col items-center text-center h-full shadow-lg">
                  <div className="text-4xl md:text-5xl mb-3">{item.icon}</div>
                  <span className="text-sm md:text-lg font-semibold">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyIqueCap;
