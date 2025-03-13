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
  { text: "Comprehensive Support", icon: <FaUsers className="text-blue-400" /> },
  { text: "Rigorous Vetting Process", icon: <FaCheckCircle className="text-teal-400" /> },
  { text: "Expert Guidance", icon: <FaStar className="text-yellow-400" /> },
  { text: "Access to a Robust Network", icon: <FaLightbulb className="text-purple-400" /> },
  { text: "Tailored Investment Opportunities", icon: <FaCogs className="text-green-400" /> },
  { text: "Innovative Platform Features", icon: <FaRocket className="text-red-400" /> },
  { text: "Transparent Processes", icon: <FaShieldAlt className="text-teal-400" /> },
  { text: "Strong Track Record", icon: <FaChartLine className="text-yellow-400" /> },
  { text: "Dedicated Customer Support", icon: <FaHandshake className="text-blue-400" /> },
  { text: "Flexible Investment Options", icon: <FaDollarSign className="text-purple-400" /> },
];

const WhyIqueCap = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-6 md:p-12">
      {/* Title & Description */}
      <motion.div
        className="text-center mb-10 max-w-3xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-white">
          Why Choose Ique Cap?
        </h2>
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          We provide top-tier investment opportunities, expert guidance, and a strong network for your financial growth.
        </p>
      </motion.div>

      {/* Feature List */}
      <motion.div
        className="p-8 rounded-2xl max-w-6xl w-full "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-white/10 backdrop-blur-lg transition-transform duration-300 hover:scale-105 hover:bg-white/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            >
              <div className="text-5xl mb-3 ">{item.icon}</div>
              <span className="text-lg font-semibold text-gray-100">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyIqueCap;
