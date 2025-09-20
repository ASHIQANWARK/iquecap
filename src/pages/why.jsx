import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
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
  { text: "Comprehensive Support", icon: <FaUsers className="text-amber-400" /> },
  { text: "Rigorous Vetting Process", icon: <FaCheckCircle className="text-amber-400" /> },
  { text: "Expert Guidance", icon: <FaStar className="text-amber-400" /> },
  { text: "Access to a Robust Network", icon: <FaLightbulb className="text-amber-400" /> },
  { text: "Tailored Investment Opportunities", icon: <FaCogs className="text-amber-400" /> },
  { text: "Innovative Platform Features", icon: <FaRocket className="text-amber-400" /> },
  { text: "Transparent Processes", icon: <FaShieldAlt className="text-amber-400" /> },
  { text: "Strong Track Record", icon: <FaChartLine className="text-amber-400" /> },
  { text: "Dedicated Customer Support", icon: <FaHandshake className="text-amber-400" /> },
  { text: "Flexible Investment Options", icon: <FaDollarSign className="text-amber-400" /> },
];

const WhyIqueCap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const mainControls = useAnimation();
  const cardControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      cardControls.start("visible");
    }
  }, [isInView, mainControls, cardControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-t from-emerald-950 to-teal-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10% left-10% w-72 h-72 bg-amber-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10% right-10% w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCwyOCAwIDEsMSA1NiwwYTI4LDI4IDAgMSwxIC01NiwwIiBzdHJva2U9IiMzNjM2MzYiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==')] opacity-10"></div>
      
      <div ref={ref} className="relative z-10 flex flex-col items-center justify-center max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16 px-4"
          initial={{ opacity: 0, y: -30 }}
          animate={mainControls}
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 bg-slate-800 rounded-full border border-slate-700/50">
            <span className="text-sm font-medium text-amber-400 uppercase tracking-wider">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-emerald-400">
                iQue CAP
              </span>
              
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full mx-auto mb-6"></div>
          
          <p className="text-lg md:text-xl text-slate-300 mt-5 leading-relaxed max-w-3xl mx-auto">
            We provide top-tier investment opportunities, expert guidance, and a strong network for your financial growth.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          className="w-full"
          variants={containerVariants}
          initial="hidden"
          animate={cardControls}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 to-emerald-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-md"></div>
                
                <div className="relative h-full bg-slate-800/70 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 group-hover:border-slate-700/80 transition-all duration-300 overflow-hidden">
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon container */}
                  <div className="relative z-10 mb-4 flex items-center justify-center w-16 h-16 mx-auto bg-emerald-500/50 rounded-xl border border-slate-700/50 group-hover:border-amber-400/30 transition-colors duration-300">
                    <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Text */}
                  <span className="relative z-10 text-base font-semibold text-white text-center block leading-tight">
                    {item.text}
                  </span>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400/30 rounded-tl-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-400/30 rounded-tr-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-400/30 rounded-bl-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400/30 rounded-br-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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