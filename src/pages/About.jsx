import React from "react";
import { motion } from "framer-motion";
import MissionVision from "./Mission";
import Founder from "./Founder";
import decorative from "../assets/images/Group 427319633.png";

const About = () => {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-l from-[#0d9866]  to-[#01454b] ">
      <div className="max-w-5xl mx-auto">
        {/* Just the image without card styling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <img
            src={decorative}
            alt="About iQue Cap"
            className="w-full h-500px"
          />
        </motion.div>
      </div>
      
      {/* Mission, Vision & Founder Components */}
      <div>
        <MissionVision />
        <Founder />
      </div>
    </section>
  );
};

export default About;