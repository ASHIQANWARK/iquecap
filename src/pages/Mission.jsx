import React from "react";
import { motion } from "framer-motion";
import visionImg from "../assets/images/img2.jpg";
import missionImg from "../assets/images/img4.jpg";

const MissionVision = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-16 bg-transparent">
      
      {/* Vision Card */}
      <section className="relative w-full md:w-1/2 rounded-xl overflow-hidden p-[2px] animate-border-spin group hover:scale-105 transition-transform duration-300">
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-xl shadow-lg flex flex-col h-full">
          {/* Image Section */}
          <div className="w-full">
            <img
              src={visionImg}
              alt="Vision"
              className="w-full h-48 object-cover rounded-t-xl"
            />
          </div>

          {/* Content Section */}
          <div className="w-full p-6 text-white flex flex-col justify-center">
            <h1 className="text-4xl font-bold uppercase tracking-wide text-center mb-2">
              Our Vision
            </h1>
            <motion.div
              className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-yellow-400 to-emerald-300 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            ></motion.div>
            <p className="text-md leading-relaxed font-sans mt-4">
              At <span className="font-semibold">iQue CAP</span>, we envision a future
              where every individual has the power to shape their entrepreneurial destiny.
              Our vision is to be the catalyst for fostering innovation, sustainability,
              and business success.
              We aim to create an ecosystem that encourages groundbreaking ideas,
              supports emerging businesses, and drives meaningful change across industries.
              By harnessing the power of technology, mentorship, and collaboration,
              we strive to unlock new opportunities for entrepreneurs at every stage
              of their journey.
              Our goal is to empower individuals and businesses with the resources
              and strategies necessary to thrive in an evolving global landscape.
              Through continuous innovation and ethical leadership, we aspire to
              build a world where creativity and ambition lead to sustainable success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Card */}
      <section className="relative w-full md:w-1/2 rounded-xl overflow-hidden p-[2px] animate-border-spin group hover:scale-105 transition-transform duration-300">
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-xl shadow-lg flex flex-col h-full">

          {/* Content Section */}
          <div className="w-full p-6 text-white flex flex-col justify-center">
            <h1 className="text-4xl font-bold uppercase tracking-wide text-center mb-2">
              Our Mission
            </h1>
            <motion.div
              className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-yellow-400 to-emerald-300 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            ></motion.div>
            <p className="text-md leading-relaxed font-sans mt-4">
              At <span className="font-semibold">iQue CAP</span>, our mission is to empower
              visionaries with the tools, knowledge, and network to bring their ideas to life.
              We foster an ecosystem where innovation flourishes, businesses thrive,
              and impactful solutions emerge for a better tomorrow.
              By providing strategic guidance, access to resources, and financial support,
              we ensure that aspiring entrepreneurs and established businesses alike can
              overcome challenges and scale effectively.
              Our mission extends beyond profit-driven success; we prioritize ethical
              business practices, sustainability, and inclusivity. We believe in shaping
              an economic landscape that benefits communities, fuels creative disruption,
              and champions long-term prosperity.
              Through collaboration with industry leaders, investors, and forward-thinking
              individuals, we aim to redefine how businesses innovate and grow—creating
              lasting value for future generations.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full">
            <img
              src={missionImg}
              alt="Mission"
              className="w-full h-48 object-cover rounded-b-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
