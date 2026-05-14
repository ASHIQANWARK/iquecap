import React from "react";
import { motion } from "framer-motion";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-emerald-950 px-6 pb-12 pt-32 md:px-12 md:pt-20 flex justify-center">
      <motion.div
        className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-emerald-900">
            Platform Disclosure
          </h1>

          <p className="mt-4 text-center text-gray-600 text-lg">
            A Note Before You Explore
          </p>

          <p className="mt-5 text-center text-gray-700 leading-relaxed max-w-3xl mx-auto">
            iQue Cap is where serious capital meets serious opportunity.
            Here’s how we operate.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="mt-12 space-y-10">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200 pb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                {section.title}
              </h2>

              <div className="text-gray-700 leading-relaxed text-[16px]">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          className="mt-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-emerald-800 mb-3">
            Website Footer Disclosure
          </h3>

          <p className="text-gray-700 leading-relaxed">
            iQue Cap is a startup-investor discovery and networking platform.
            Information shared here is for discovery purposes only. Startup
            funding is subject to market dynamics. iQue Cap operates as a
            discovery and networking platform, not a regulated financial entity.
            For queries —{" "}
            <a
              href="mailto:support@iquecap.com"
              className="text-emerald-700 font-medium hover:underline"
            >
              support@iquecap.com
            </a>
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: May 2026 · support@iquecap.com
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const sections = [
  {
    title: "WHO WE ARE",
    content: (
      <p>
        iQue Cap is where serious capital meets serious opportunity. We curate,
        we connect, we facilitate — across India’s most dynamic startup and
        investor ecosystem. That’s what we do, and we do it well.
        <br />
        <br />
        Want to know more about us? We’re always reachable directly at{" "}
        <a
          href="mailto:support@iquecap.com"
          className="text-emerald-700 font-medium hover:underline"
        >
          support@iquecap.com
        </a>
      </p>
    ),
  },

  {
    title: "WHAT WE SHARE",
    content: (
      <p>
        All information on this platform is shared to enable informed
        discovery. Startup journeys carry market dynamics, and every
        opportunity here reflects the vision of the founders and operators
        behind it.
        <br />
        <br />
        We bring the right room together — what happens next is built on real
        conversations and real intent.
      </p>
    ),
  },

  {
    title: "HOW WE OPERATE",
    content: (
      <p>
        iQue Cap functions as a structured discovery and networking platform.
        For anything beyond discovery — legal, financial, or regulatory
        guidance — we always recommend the right experts for the right
        decisions.
      </p>
    ),
  },

  {
    title: "ONE LAST THING",
    content: (
      <p>
        Every connection made on iQue Cap is the beginning of something real.
        The conversations, the deals, the partnerships — they belong to the
        people in the room.
        <br />
        <br />
        We just make sure it’s the right room.
      </p>
    ),
  },
];

export default Disclaimer;