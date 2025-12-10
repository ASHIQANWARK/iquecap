import React, { useState, useEffect, useRef } from "react";
import {
  FaChartLine,
  FaBuilding,
  FaBusinessTime,
  FaCoins,
  FaMoneyCheckAlt,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

// Image imports (placeholder paths - replace with your actual paths)
import shortTermImg from "../assets/images/SHORT.jpg";
import longTermImg from "../assets/images/LONG.webp";
import equityImg from "../assets/images/equity.jpg";
import franchiseImg from "../assets/images/img12.jpg";
import cipImg from "../assets/images/CIP.png";


const services = [
  {
    title: "Short Term With High Returns",
    description:
      "Maximize your earnings with our exclusive short-term investment plans. Experience rapid growth with minimal risks.",
    icon: <FaChartLine className="text-blue-400 text-4xl" />,
    image: shortTermImg,
 
    color: "from-teal-900 to-teal-700",
    accent: "blue",
  },
  {
    title: "Long Term With Fixed Returns",
    description:
      "Secure a financially stable future with guaranteed fixed returns on long-term investments, ensuring steady growth.",
    icon: <FaBuilding className="text-emerald-400 text-4xl" />,
    image: longTermImg,
 
    color: "from-teal-900 to-teal-700",
    accent: "emerald",
  },
  {
    title: "Equity Based Investments",
    description:
      "Diversify your portfolio with strategic equity investments, leveraging high-potential stocks and market trends.",
    icon: <FaCoins className="text-amber-400 text-4xl" />,
    image: equityImg,
    color: "from-teal-900 to-teal-700",
    accent: "amber",
  },
  {
    title: "Franchise Opportunities",
    description:
      "Become a franchise owner with high ROI business models. Expand your wealth with minimal effort and strong brand backing.",
    icon: <FaBusinessTime className="text-purple-400 text-4xl" />,
    image: franchiseImg,
    color: "from-teal-900 to-teal-700",
    accent: "purple",
  },
  {
    title: "CIP Investment Plans",
    description:
      "Explore our CIP scheme, designed to maximize returns with diversified investments in 1000+ business avenues.",
    icon: <FaMoneyCheckAlt className="text-rose-400 text-4xl" />,
    image: cipImg,
    color: "from-teal-900 to-teal-700",
    accent: "rose",
  },
];

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-700 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCwyOCAwIDEsMSA1NiwwYTI4LDI4IDAgMSwxIC01NiwwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mb-6">
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Investment Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Premium Services</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Empowering your investments with expert guidance and tailored strategies for financial growth.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-500 transform ${
                activeCard === index ? "scale-105" : "scale-100"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Image with overlay */}
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-14 h-14 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-200 mb-5 flex-1">
                    {service.description}
                  </p>

                  {/* Action button */}
                  {service.brochure ? (
                    <a
                      href={service.brochure}
                      download
                      className="inline-flex items-center justify-between px-5 py-3 bg-slate-800/60 backdrop-blur-sm rounded-xl text-white font-medium hover:bg-slate-800/80 transition-all duration-300 group/btn overflow-hidden"
                    >
                      <span className="flex items-center">
                        <FaDownload className="mr-2" />
                        Download Brochure
                      </span>
                      <FaArrowRight className="transform -translate-x-1 group-hover/btn:translate-x-0 opacity-0 group-hover/btn:opacity-100 transition-all duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-700/50 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center justify-between px-5 py-3 bg-gradient-to-r from-slate-700/60 to-slate-800/60 backdrop-blur-sm rounded-xl text-white font-medium cursor-not-allowed opacity-80"
                    >
                      <span className="flex items-center">
                        <span className="mr-2">🚧</span>
                        Coming Soon
                      </span>
                      <span className="animate-pulse">⭐</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default ServicesSection;