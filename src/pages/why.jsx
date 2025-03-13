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
  { text: "Comprehensive Support", icon: <FaUsers className="text-teal-900" /> },
  { text: "Rigorous Vetting Process", icon: <FaCheckCircle className="text-teal-900" /> },
  { text: "Expert Guidance", icon: <FaStar className="text-teal-900" /> },
  { text: "Access to a Robust Network", icon: <FaLightbulb className="text-teal-900" /> },
  { text: "Tailored Investment Opportunities", icon: <FaCogs className="text-teal-900" /> },
  { text: "Innovative Platform Features", icon: <FaRocket className="text-teal-900" /> },
  { text: "Transparent Processes", icon: <FaShieldAlt className="text-teal-900" /> },
  { text: "Strong Track Record", icon: <FaChartLine className="text-teal-900" /> },
  { text: "Dedicated Customer Support", icon: <FaHandshake className="text-teal-900" /> },
  { text: "Flexible Investment Options", icon: <FaDollarSign className="text-teal-900" /> },
];

const WhyIqueCap = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 ">
      {/* Title & Description */}
      <motion.div
        className="text-center mb-10 max-w-3xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Why Choose <span className="text-green-400">Ique Cap?</span>
        </h2>
        <p className="text-lg text-gray-200 mt-4 leading-relaxed">
          We provide top-tier investment opportunities, expert guidance, and a strong network for your financial growth.
        </p>
      </motion.div>

      {/* Feature List */}
      <motion.div
        className="p-8 rounded-2xl max-w-6xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-white border border-gray-300 text-black transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            >
              <div className="text-5xl mb-3">{item.icon}</div>
              <span className="text-lg font-semibold">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyIqueCap;
