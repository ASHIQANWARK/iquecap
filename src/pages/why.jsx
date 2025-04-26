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
  { text: "Comprehensive Support", icon: <FaUsers className="text-green-500" /> },
  { text: "Rigorous Vetting Process", icon: <FaCheckCircle className="text-green-500" /> },
  { text: "Expert Guidance", icon: <FaStar className="text-green-500" /> },
  { text: "Access to a Robust Network", icon: <FaLightbulb className="text-green-500" /> },
  { text: "Tailored Investment Opportunities", icon: <FaCogs className="text-green-500" /> },
  { text: "Innovative Platform Features", icon: <FaRocket className="text-green-500" /> },
  { text: "Transparent Processes", icon: <FaShieldAlt className="text-green-500" /> },
  { text: "Strong Track Record", icon: <FaChartLine className="text-green-500" /> },
  { text: "Dedicated Customer Support", icon: <FaHandshake className="text-green-500" /> },
  { text: "Flexible Investment Options", icon: <FaDollarSign className="text-green-500" /> },
];

const WhyIqueCap = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-transparent">
      {/* Title & Description */}
      <motion.div
        className="text-center mb-10 max-w-4xl"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          Why Choose{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-white">
            iQue CAP
          </span>
        </h2>
        <motion.div
          className="mt-3 mx-auto w-24 h-1 bg-gradient-to-r from-yellow-400 to-emerald-300 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        ></motion.div>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          We provide top-tier investment opportunities, expert guidance, and a strong network for your financial growth.
        </p>
      </motion.div>

      {/* Feature List */}
      <motion.div
        className="p-4 md:p-8 rounded-2xl max-w-7xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="p-[2px] rounded-xl bg-gradient-to-r from-yellow-400 to-emerald-300 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            >
              <div className="bg-emerald-950 text-white rounded-xl p-6 flex flex-col items-center text-center h-full">
                <div className="text-4xl md:text-5xl mb-3">{item.icon}</div>
                <span className="text-sm md:text-lg font-semibold">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyIqueCap;
