import React from "react";
import { EyeIcon, RocketIcon } from "lucide-react";
import missionImage from "../assets/images/img14.jpg";
import visionImage from "../assets/images/img13.jpg";

const MissionVision = () => {
  return (
    <section className="bg-white px-4 py-24">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Mission and Vision</h2>
        <div className="w-28 h-1 bg-gradient-to-r from-yellow-400 to-emerald-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-28">
        {/* Vision Image */}
        <div className="rounded-3xl overflow-hidden h-full max-h-[400px] flex items-center">
          <img
            src={visionImage}
            alt="Vision"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Vision Text */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <EyeIcon className="w-8 h-8 text-yellow-500" />
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
          </div>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            At Ique Cap, we envision a future where innovation thrives without barriers. 
            Our goal is to build an inclusive and dynamic ecosystem where startups with 
            bold ideas can seamlessly access the right capital, mentorship, and resources to scale. 
            We aim to be the trusted bridge between high-potential founders and forward-thinking investors.
          </p>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Our vision is to be more than a platform—we aspire to be a movement that empowers 
            entrepreneurship across industries, geographies, and communities. Through transparency, 
            trust, and long-term collaboration, we work toward a thriving startup landscape where 
            innovation leads to sustainable progress.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Mission Text */}
        <div className="space-y-6 md:order-1 order-2">
          <div className="flex items-center space-x-3">
            <RocketIcon className="w-8 h-8 text-emerald-600" />
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
          </div>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Our mission is to empower both startups and investors through a well-structured, 
            expertly guided investment journey. We curate exceptional early-stage and growth-stage 
            startups and rigorously evaluate them to ensure that only the most promising businesses 
            reach our investor network.
          </p>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Backed by IQue Ventures' deep expertise in venture building, we aim to minimize risk 
            while maximizing impact. We’re committed to supporting visionary founders not just 
            with funding, but with strategic advice, mentorship, and operational support. 
            Through this mission, we strive to build ventures that are scalable, impactful, 
            and investment-worthy.
          </p>
        </div>

        {/* Mission Image */}
        <div className="rounded-3xl overflow-hidden h-full max-h-[400px] flex items-center md:order-2 order-1">
          <img
            src={missionImage}
            alt="Mission"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
