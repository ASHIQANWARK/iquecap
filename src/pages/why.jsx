import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  { 
    text: "Comprehensive Support", 
    icon: <FaUsers className="text-white" />,
    description: "End-to-end guidance for your investment journey"
  },
  { 
    text: "Rigorous Vetting", 
    icon: <FaCheckCircle className="text-white" />,
    description: "Thorough due diligence on every opportunity"
  },
  { 
    text: "Expert Guidance", 
    icon: <FaStar className="text-white" />,
    description: "Industry experts to help you make informed decisions"
  },
  { 
    text: "Robust Network", 
    icon: <FaLightbulb className="text-white" />,
    description: "Access to exclusive deals and partnerships"
  },
  { 
    text: "Tailored Opportunities", 
    icon: <FaCogs className="text-white" />,
    description: "Customized investment options for your goals"
  },
  { 
    text: "Innovative Platform", 
    icon: <FaRocket className="text-white" />,
    description: "Cutting-edge technology for seamless investing"
  },
  { 
    text: "Transparent Processes", 
    icon: <FaShieldAlt className="text-white" />,
    description: "Clear and honest communication throughout"
  },
  { 
    text: "Proven Track Record", 
    icon: <FaChartLine className="text-white" />,
    description: "Consistent success in startup investments"
  },
  { 
    text: "Dedicated Support", 
    icon: <FaHandshake className="text-white" />,
    description: "Personalized assistance whenever you need"
  },
  { 
    text: "Flexible Options", 
    icon: <FaDollarSign className="text-white" />,
    description: "Various investment sizes and terms available"
  },
];

const WhyIqueCap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 40, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-r from-[#015c64] to-[#0eca85] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-white font-medium text-sm">Why Choose Us</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The{" "}
            <span className="bg-gradient-to-r from-amber-300 to-emerald-300 text-transparent bg-clip-text">
              iQue CAP
            </span>{" "}
            Advantage
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Experience unparalleled investment opportunities with our comprehensive platform 
            designed for both novice and seasoned investors.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col items-center text-center group-hover:bg-white/10 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-emerald-500/10">
                
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-100 transition-colors duration-300">
                  {item.text}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full group-hover:w-3/4 transition-all duration-500" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default WhyIqueCap;