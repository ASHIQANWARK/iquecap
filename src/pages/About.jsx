import React from "react";
import { motion } from "framer-motion";
import decorativeSVG from "../assets/images/5052197.jpg"; // Make sure this path is correct

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-t from-emerald-950 to-teal-950 text-white rounded-3xl shadow-2xl overflow-hidden p-6 md:p-12"
        >
          {/* 🔽 Full-size SVG background inside the card */}
          <img
            src={decorativeSVG}
            alt="Card Background"
            className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 pointer-events-none"
          />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
            {/* ➤ Left: About Text */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                className="text-4xl font-extrabold drop-shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
                  iQue CAP
                </span>
              </motion.h1>

              <motion.div
                className="mt-2 mb-4 w-24 h-1 bg-gradient-to-r from-yellow-400 to-emerald-300 rounded-full mx-auto lg:mx-0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              />

              <motion.p
                className="text-lg md:text-xl leading-relaxed text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Ique Cap is a trusted startup investment platform from the startup
                fostering company, IQue Ventures (
                <a
                  href="https://www.ique.ventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-yellow-300 transition"
                >
                  www.ique.ventures
                </a>
                ). We connect investors with high-potential startups. Our team of
                venture capital experts identifies and nurtures groundbreaking
                businesses, ensuring success for both investors and entrepreneurs.
              </motion.p>
            </div>

            {/* ➤ Right: YouTube Video */}
            <motion.div
              className="flex-1 w-full max-w-xl aspect-video rounded-xl overflow-hidden border-2 border-emerald-400 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <iframe
                src="https://www.youtube.com/embed/DHIZk47dcUs?autoplay=1&mute=0&controls=1&loop=0&rel=0&modestbranding=1"
                title="iQue Cap Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
