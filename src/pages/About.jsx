import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6 ">
      <div className="max-w-5xl mx-auto text-center">
        {/* Animated Title */}
        <motion.h1
          className="text-4xl  font-extrabold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          About{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-white">
            iQue CAP
          </span>
        </motion.h1>

        {/* Animated Underline */}
        <motion.div
          className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-yellow-400 to-emerald-300 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        ></motion.div>

        {/* Animated Description */}
        <motion.p
        className="mt-6 text-center text-xl text-white max-w-6xl mx-auto leading-relaxed font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Ique Cap is a trusted startup investment platform from the startup
        fostering company, IQue Ventures (
        <a href="https://www.ique.in" target="_blank" rel="noopener noreferrer" className="text-white underline">
          www.ique.in
        </a>
        ). Ique Cap is a premier investment platform dedicated to connecting investors with
        high-potential startups. Our team comprises seasoned professionals with
        extensive experience in venture capital, financial analysis, and
        business strategy. We leverage our expertise to identify and nurture
        groundbreaking startups, ensuring that both investors and entrepreneurs
        achieve their financial goals.
      </motion.p>
    
      </div>
    </section>
  );
};

export default About;
