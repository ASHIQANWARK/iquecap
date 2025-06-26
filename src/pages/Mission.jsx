import React from "react";
import { motion } from "framer-motion";
import { EyeIcon, RocketIcon } from "lucide-react";
import centerImage from "../assets/images/hero.jpg"; // your center image
import svgBackground from "../assets/images/mjy12.jpg"; // your full-screen SVG

const MissionVision = () => {
  return (
    <section className="relative px-4 py-20 overflow-hidden">
      {/* Background SVG full fit */}
      <img
        src={svgBackground}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-25 z-0 pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Our Mission and Vision
        </h2>

        <motion.div
          className="mt-1 mb-10 mx-auto w-24 h-1 bg-gradient-to-r from-yellow-400 to-emerald-300 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* ➤ Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-t from-emerald-950 to-teal-950 text-white rounded-3xl shadow-xl p-8 h-full self-start"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <EyeIcon className="w-10 h-10 text-yellow-300" />
              <h3 className="text-2xl font-bold uppercase">Our Vision</h3>
              <div className="w-20 h-1 bg-yellow-400 rounded-full" />
              <p className="text-md leading-relaxed text-white/90 text-justify">
                At <strong>iQue CAP</strong>, we envision a future where every individual
                has the power to shape their entrepreneurial destiny. Our vision is to be
                the catalyst for fostering innovation, sustainability, and business success.
                We aim to create an ecosystem that encourages groundbreaking ideas,
                supports emerging businesses, and drives meaningful change across industries.
                By harnessing the power of technology, mentorship, and collaboration, we strive
                to unlock new opportunities for entrepreneurs at every stage of their journey.
                Our goal is to empower individuals and businesses with the resources and
                strategies necessary to thrive in an evolving global landscape. Through
                continuous innovation and ethical leadership, we aspire to build a world
                where creativity and ambition lead to sustainable success.
              </p>
            </div>
          </motion.div>

          {/* ➤ Center Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src={centerImage}
              alt="Collaboration"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>

          {/* ➤ Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-t from-emerald-950 to-teal-950 text-white rounded-3xl shadow-xl p-8 h-full self-end"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <RocketIcon className="w-10 h-10 text-emerald-300" />
              <h3 className="text-2xl font-bold uppercase">Our Mission</h3>
              <div className="w-20 h-1 bg-emerald-400 rounded-full" />
              <p className="text-md leading-relaxed text-white/90 text-justify">
                At <strong>iQue CAP</strong>, our mission is to empower visionaries with
                the tools, knowledge, and network to bring their ideas to life. We foster
                an ecosystem where innovation flourishes, businesses thrive, and impactful
                solutions emerge for a better tomorrow. By providing strategic guidance,
                access to resources, and financial support, we ensure that aspiring
                entrepreneurs and established businesses alike can overcome challenges and
                scale effectively. Our mission extends beyond profit-driven success; we
                prioritize ethical business practices, sustainability, and inclusivity.
                We believe in shaping an economic landscape that benefits communities, fuels
                creative disruption, and champions long-term prosperity. Through collaboration
                with industry leaders, investors, and forward-thinking individuals, we aim to
                redefine how businesses innovate and grow—creating lasting value for future
                generations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
