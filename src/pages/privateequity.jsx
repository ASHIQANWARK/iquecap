import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import moneyImage from "../assets/images/img1.jpg";
import { Paperclip, ChevronDown, ChevronUp, Target, BarChart3, Lock, Zap, PieChart, Clock, Users, Shield, TrendingUp, Lightbulb } from "lucide-react";

const PrivateEquity = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const benefitsData = [
    {
      title: "High Return Potential",
      description: "Private equity investments offer higher returns compared to traditional stocks or bonds through active involvement in company growth.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Access to Exclusive Opportunities",
      description: "Investors gain access to unique deals and investment opportunities not available in public markets.",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Active Management & Value Creation",
      description: "Private equity firms work closely with businesses to optimize operations and maximize returns.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Diversification",
      description: "Adding private equity to a portfolio reduces risk by diversifying beyond public securities.",
      icon: <PieChart className="w-6 h-6" />
    },
    {
      title: "Long-Term Investment Horizon",
      description: "Private equity investments focus on sustained growth without short-term market pressures.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Alignment of Interests",
      description: "Investors and management collaborate with aligned incentives for financial success.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Illiquidity Premium",
      description: "Since private equity investments are less liquid, they may offer higher returns.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Reduced Market Volatility",
      description: "Private equities are shielded from short-term market fluctuations, leading to more stable investment outcomes.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Strategic Control Potential",
      description: "Investors often participate in decision-making, ensuring alignment with long-term goals.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Tax Efficiency",
      description: "Private equity investments often provide tax advantages such as deferred taxation on gains.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Support for Innovation & Growth",
      description: "Private equity funding drives business innovation, scalability, and market leadership.",
      icon: <TrendingUp className="w-6 h-6" />
    },
  ];

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const accordionVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex flex-col items-center justify-center px-4 py-12 md:py-20">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative rounded-2xl overflow-hidden max-w-6xl w-full shadow-2xl mb-16"
      >
        <div 
          className="relative h-64 md:h-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${moneyImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-800/70"></div>
          
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Understanding{" "}
              <span className="text-emerald-300 italic">Private Equity</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-emerald-100 max-w-2xl leading-relaxed"
            >
              Private equity investment refers to investing in companies that are not publicly traded, with the goal of generating returns through strategic growth and eventual sale.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 max-w-6xl w-full"
      >
        <div className="text-center mb-10">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Benefits of{" "}
            <span className="text-emerald-600">Private Equity</span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Discover the advantages that make private equity an attractive investment option for sophisticated investors.
          </motion.p>
        </div>

        <motion.ul 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {benefitsData.map((benefit, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className={`rounded-xl overflow-hidden transition-all duration-300 cursor-pointer bg-white border border-emerald-100 shadow-sm hover:shadow-md ${
                openIndex === index ? "ring-2 ring-emerald-500" : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4 text-emerald-600">
                    {benefit.icon}
                  </div>
                  <span className="text-lg font-semibold text-slate-800">
                    {benefit.title}
                  </span>
                </div>
                <div className="text-emerald-600">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={accordionVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <p className="text-slate-700 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </motion.ul>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 p-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white"
        >
          <h4 className="text-xl font-semibold mb-4 text-center">Why Investors Choose Private Equity</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">25%+</div>
              <div className="text-sm">Average Annual Returns</div>
            </div>
            <div>
              <div className="text-2xl font-bold">$4T+</div>
              <div className="text-sm">Global Market Size</div>
            </div>
            <div>
              <div className="text-2xl font-bold">15%</div>
              <div className="text-sm">Outperformance vs. S&P 500</div>
            </div>
            <div>
              <div className="text-2xl font-bold">80%</div>
              <div className="text-sm">Of Fortune 1000 Use PE</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-slate-600 mb-6">
            Interested in exploring private equity opportunities?
          </p>
          <button className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-300 shadow-md">
            Speak with an Expert
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivateEquity;