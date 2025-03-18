import React from "react";
import { User } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

// Correct Imports for Local Images
import shaazImage from "../assets/images/Shaaz.jpg";
import shradhaImage from "../assets/images/shradha.jpg";
import royImage from "../assets/images/Roy.jpg";
import rijuwalImage from "../assets/images/Rizwan.JPG";



const team = [
  { name: "Shaaz meharoof", role: "CHAIRMAN", image: shaazImage },
  {name: "Shradha .S", role: "Chief Accountant", image: shradhaImage},
  {name: "Roy", role: "Sales Director", image: royImage},
  {name: "Rizwan", role: "Sales Manager ", image: rijuwalImage}


];

const Team = () => {
  return (
    <div className="py-16 ">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-6xl font-bold text-center text-white mb-12">
          Our Team
          <User className="inline-block w-12 h-15  text-white" />
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-teal-400 via-emerald-500 to-emerald-900 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col items-center transition-all hover:shadow-xl hover:scale-105 w-full h-[450px]"
            >
              {/* Profile Image (Fixed Min Height for Mobile) */}
              <div className="w-full min-h-[240px] md:h-60 mb-4 flex-grow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-md"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                />
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="https://instagram.com" className="text-white hover:text-[#E1306C] transition" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={22} />
                </a>
                <a href="https://twitter.com" className="text-white hover:text-[#1DA1F2] transition" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter size={22} />
                </a>
                <a href="https://linkedin.com" className="text-white hover:text-[#0077B5] transition" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={22} />
                </a>
                <a href="https://facebook.com" className="text-white hover:text-[#1877F2] transition" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={22} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
