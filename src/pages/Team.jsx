import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import shaazImage from "../assets/images/Shaaz.jpg";


const team = [
  {
    name: "Shaaz Bin Maharoof",
    role: "Founder & CEO",
    image: shaazImage,
    socials: {
      instagram: "https://www.instagram.com/shaazbinmaharoof?igsh=MXVpaXplZTRkdGRiNA==",
      linkedin: "https://www.linkedin.com/in/shaaz-bin-maharoof-0a0463279",
      facebook: "https://www.facebook.com/profile.php?id=61572517916783",
    },
  },
  
];

const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-900 mb-4">
          Our Team
        </h2>

        <motion.div
          className="w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-teal-400 via-emerald-500 to-emerald-900 rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              {/* Image */}
              <div className="w-full h-60 bg-emerald-950 flex items-center justify-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
                  }}
                  className="object-cover h-full w-full"
                />
              </div>

              {/* Info */}
              <div className="py-5 px-4 text-center text-white">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-200">{member.role}</p>

                <div className="flex justify-center space-x-4 mt-3">
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#E1306C] transition"
                    >
                      <FaInstagram size={20} />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0077B5] transition"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {member.socials.facebook && (
                    <a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#1877F2] transition"
                    >
                      <FaFacebook size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
