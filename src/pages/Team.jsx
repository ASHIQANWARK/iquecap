import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import shaazImage from "../assets/images/Shaaz.jpg";
import shradhaImage from "../assets/images/shradha.jpg";
import royImage from "../assets/images/Roy.jpg";
import rizwanImage from "../assets/images/rizwan-img.jpg";

const team = [
  { name: "Shaaz Bin Maharoof", role: "Founder & CEO", image: shaazImage },
  { name: "Shradha .S", role: "CFO", image: shradhaImage },
  { name: "Roy Alexander", role: "Senior Sales Director", image: royImage },
  { name: "Rizwan", role: "Senior Sales Manager", image: rizwanImage },
];

const Team = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-white font-bold mb-12">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-teal-400 via-emerald-500 to-emerald-900 rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:scale-105 w-full"
            >
              {/* Profile Image */}
              <div className="w-full h-60 bg-emerald-950 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full object-contain rounded-t-2xl"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/200")}
                />
              </div>

              {/* Member Info */}
              <div className="flex flex-col items-center py-4 px-3">
                <h3 className="text-lg font-semibold text-white text-center">{member.name}</h3>
                <p className="text-gray-200 text-sm text-center">{member.role}</p>

                <div className="flex space-x-3 mt-3">
                  <a href="https://www.instagram.com/ique.cap?igsh=b212OWl4eTZvMWt1" className="text-white hover:text-[#E1306C] transition" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={20} />
                  </a>
                  
                  <a href="https://www.linkedin.com/company/ique-cap/" className="text-white hover:text-[#0077B5] transition" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61572517916783" className="text-white hover:text-[#1877F2] transition" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
