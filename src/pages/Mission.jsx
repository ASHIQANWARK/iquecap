import React from "react";
import visionImg from "../assets/images/img2.jpg";
import missionImg from "../assets/images/img4.jpg";

const MissionVision = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-16">
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
            <br /><br />
            We aim to create an ecosystem that encourages groundbreaking ideas,
            supports emerging businesses, and drives meaningful change across industries.
            By harnessing the power of technology, mentorship, and collaboration,
            we strive to unlock new opportunities for entrepreneurs at every stage
            of their journey.
            <br /><br />
            Our goal is to empower individuals and businesses with the resources
            and strategies necessary to thrive in an evolving global landscape.
            Through continuous innovation and ethical leadership, we aspire to
            build a world where creativity and ambition lead to sustainable success.
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
            <br /><br />
            By providing strategic guidance, access to resources, and financial
            support, we ensure that aspiring entrepreneurs and established businesses
            alike can overcome challenges and scale effectively. 
            <br /><br />
            Our mission extends beyond profit-driven success; we prioritize ethical
            business practices, sustainability, and inclusivity. We believe in
            shaping an economic landscape that benefits communities, fuels creative
            disruption, and champions long-term prosperity.
            <br /><br />
            Through collaboration with industry leaders, investors, and forward-thinking
            individuals, we aim to redefine how businesses innovate and grow—creating
            lasting value for future generations.
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
