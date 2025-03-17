import React from "react";
import visionImg from "../assets/images/img2.jpg";
import missionImg from "../assets/images/img4.jpg";

const MissionVision = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-16 ">
      {/* Vision Card */}
      <section className="relative w-full md:w-1/2 flex flex-col rounded-xl overflow-hidden shadow-lg bg-white p-4 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
        {/* Image Section */}
        <div className="w-full">
          <img
            src={visionImg}
            alt="Vision"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Content Section */}
        <div className="w-full p-4 text-emerald-950 flex flex-col justify-center">
          <h1 className="text-2xl font-bold uppercase tracking-wide text-emerald-950 mb-2">
            Our Vision
          </h1>
          <p className="text-sm leading-relaxed text-emerald-950">
            At <span className="font-semibold text-emerald-950">IQUE CAP</span>,
            we envision a future where every individual has the power to shape
            their entrepreneurial destiny. Our vision is to be the catalyst for
            fostering innovation, sustainability, and business success.
          </p>
        </div>
      </section>

      {/* Mission Card */}
      <section className="relative w-full md:w-1/2 flex flex-col rounded-xl overflow-hidden shadow-lg bg-white p-4 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
        
        {/* Content Section */}
        <div className="w-full p-4 text-emerald-950 flex flex-col justify-center">
          <h1 className="text-2xl font-bold uppercase tracking-wide text-emerald-950 mb-2">
            Our Mission
          </h1>
          <p className="text-sm leading-relaxed text-emerald-950">
            At <span className="font-semibold text-emerald-950">IQUE CAP</span>,
            our mission is to empower visionaries with the tools, knowledge, and
            network to bring their ideas to life. We foster an ecosystem where
            innovation flourishes, businesses thrive, and impactful solutions
            emerge for a better tomorrow.
          </p>
        </div>
        <div className="w-full">
          <img
            src={missionImg}
            alt="Mission"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
