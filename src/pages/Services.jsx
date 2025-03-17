import React from "react";
import { FaChartLine, FaBuilding, FaBusinessTime, FaCoins, FaMoneyCheckAlt } from "react-icons/fa";
import shortTermImg from "../assets/images/SHORT.jpg";
import longTermImg from "../assets/images/LONG.webp";
import equityImg from "../assets/images/equity.jpg";
import franchiseImg from "../assets/images/FRANCHISE.jpg";
import cipImg from "../assets/images/CIP.png";

const services = [
  {
    title: "Short Term With High Returns",
    description:
      "Maximize your earnings with our exclusive short-term investment plans. Experience rapid growth with minimal risks.",
    icon: <FaChartLine className="text-blue-600 text-4xl" />,
    image: shortTermImg,
  },
  {
    title: "Long Term With Fixed Returns",
    description:
      "Secure a financially stable future with guaranteed fixed returns on long-term investments, ensuring steady growth.",
    icon: <FaBuilding className="text-green-600 text-4xl" />,
    image: longTermImg,
  },
  {
    title: "Equity Based Investments",
    description:
      "Diversify your portfolio with strategic equity investments, leveraging high-potential stocks and market trends.",
    icon: <FaCoins className="text-yellow-600 text-4xl" />,
    image: equityImg,
  },
  {
    title: "Franchise Opportunities",
    description:
      "Become a franchise owner with high ROI business models. Expand your wealth with minimal effort and strong brand backing.",
    icon: <FaBusinessTime className="text-purple-600 text-4xl" />,
    image: franchiseImg,
  },
  {
    title: "CIP Investment Plans",
    description:
      "Explore our CIP scheme, designed to maximize returns with diversified investments in 1000+ business avenues.",
    icon: <FaMoneyCheckAlt className="text-red-600 text-4xl" />,
    image: cipImg,
  },
];

const ServicesSection = () => {
  return (
    <div className="py-16 bg-gradient-to-t from-emerald-950 to-teal-950">
      <div className="max-w-6xl mx-auto text-center p-8 rounded-lg">
        <h2 className="text-4xl font-extrabold text-white">Our Services</h2>
        <p className="text-lg text-white mt-2">
          Empowering your investments with expert guidance and tailored strategies.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-opacity-90 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
          >
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mt-4 text-white">{service.title}</h3>
              <p className="text-sm text-white mt-2">{service.description}</p>
              <button
                className="mt-5 px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
