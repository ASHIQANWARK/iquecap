import React from "react";
import { motion } from "framer-motion";
import MissionVision from "./Mission";
// import Founder from "./Founder";

const About = () => {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-l from-[#0d9866] to-[#01454b] text-white">
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* About iQue Cap Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About iQue Cap
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-gray-200">
            iQue Cap is a dynamic platform designed to empower aspiring entrepreneurs, 
            innovators, and startups by providing the right ecosystem for growth. 
            We focus on nurturing ideas, building strong foundations, and guiding 
            individuals towards successful business journeys.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-200">
            Our mission is to bridge the gap between ideas and execution by offering 
            mentorship, resources, and opportunities that help transform visions into reality. 
            At iQue Cap, we believe in innovation, collaboration, and continuous growth.
          </p>
        </motion.div>

      </div>

      {/* Mission, Vision & Founder Components */}
      <div className="mt-12">
        <MissionVision />
        {/* <Founder /> */}
      </div>

    </section>
  );
};

export default About;