import React from "react";
import visionImg from "../assets/images/img2.jpg";
import missionImg from "../assets/images/img4.jpg"; // Import mission image

const MissionVision = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 p-8">
      {/* Vision Section */}
      <section className="w-full md:w-3/4 flex flex-col md:flex-row rounded-xl  overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={visionImg}
            alt="Vision"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-6 bg-white text-emerald-800">
          <h1 className="text-4xl font-extrabold mb-4 uppercase tracking-wide itallic">
            Our Vision
          </h1>
          <p className="text-lg leading-relaxed itallic">
            At <span className="font-semibold">IQUE CAP</span>, we envision a
            future where every individual has the power to shape their
            entrepreneurial destiny. Our vision is to be the catalyst for
            fostering innovation, sustainability, and business success. We
            aspire to create a global community where investors and
            entrepreneurs converge to drive positive change, spurring economic
            growth and shaping industries.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full md:w-3/4 flex flex-col md:flex-row-reverse rounded-xl shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={missionImg}
            alt="Mission"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-6 bg-white text-emerald-800">
          <h1 className="text-4xl font-extrabold mb-4 uppercase tracking-wide">
            Our Mission
          </h1>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">IQUE CAP</span>, our mission is
            to empower visionaries with the tools, knowledge, and network to
            bring their ideas to life. We strive to bridge the gap between
            investors and entrepreneurs by fostering an ecosystem where
            innovation flourishes, businesses thrive, and impactful solutions
            emerge for a better tomorrow.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
