import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/cap10.png"

const branches = [
  {
    id: "kerala",
    state: "Kerala",
    logo: logo, // Fixed: removed curly braces
    shortDesc: "God's Own Country - Premium Healthcare Services",
    route: "/kerala" // Changed to route path, not file path
  },
  {
    id: "tamil-nadu",
    state: "Tamil Nadu",
    logo: "/assets/images/tamil.png",
    shortDesc: "Traditional Care with Modern Technology",
    route: "/tamil" // Changed to route path
  },
  {
    id: "karnataka",
    state: "Karnataka",
    logo: "/assets/images/karnataka.png",
    shortDesc: "IT Hub's Premier Medical Destination",
    route: "/karnataka" // Changed to route path
  },
  {
    id: "maharashtra",
    state: "Maharashtra",
    logo: "/assets/images/maharashtra.png",
    shortDesc: "Metropolitan Excellence in Healthcare",
    route: "/maharashtra" // Changed to route path
  },
];

export default function BranchesSection() {
  const navigate = useNavigate();

  const handleBranchClick = (route) => {
    navigate(route);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-[#015c64] to-[#0eca85]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Enhanced Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
            Our Branches
          </h2>
          <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
            Serving across multiple states with excellence and dedication
          </p>
        </div>

        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch, index) => (
            <div
              key={branch.id}
              onClick={() => handleBranchClick(branch.route)}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              {/* Background Logo */}
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${branch.logo})` }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${branch.gradient || "from-[#0ea5e9] to-[#10b981]"} opacity-90 group-hover:opacity-95 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10 p-8 h-48 flex flex-col justify-between">
                {/* State Name */}
                <div>
                  <h3 className={`text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300 ${branch.accentColor || "text-cyan-300"}`}>
                    {branch.state}
                  </h3>
                  <p className="text-white/80 text-sm mt-2">{branch.shortDesc}</p>
                </div>
                
                {/* Decorative Elements */}
                <div className="flex items-center justify-between">
                  <div className="w-8 h-1 bg-white rounded-full opacity-80"></div>
                  <div className="text-white/80 text-sm font-medium">
                    Explore ›
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-500" />
            </div>
          ))}
        </div>

       
        
      </div>
    </section>
  );
}