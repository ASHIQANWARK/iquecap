import React, { useState } from "react";
import moneyImage from "../assets/images/img1.jpg";
import { Paperclip } from "lucide-react";

const benefitsData = [
  {
    title: "High Return Potential",
    description:
      "Private equity investments offer higher returns compared to traditional stocks or bonds through active involvement in company growth.",
  },
  {
    title: "Access to Exclusive Opportunities",
    description:
      "Investors gain access to unique deals and investment opportunities not available in public markets.",
  },
  {
    title: "Active Management & Value Creation",
    description:
      "Private equity firms work closely with businesses to optimize operations and maximize returns.",
  },
  {
    title: "Diversification",
    description:
      "Adding private equity to a portfolio reduces risk by diversifying beyond public securities.",
  },
  {
    title: "Long-Term Investment Horizon",
    description:
      "Private equity investments focus on sustained growth without short-term market pressures.",
  },
  {
    title: "Alignment of Interests",
    description:
      "Investors and management collaborate with aligned incentives for financial success.",
  },
  {
    title: "Illiquidity Premium",
    description:
      "Since private equity investments are less liquid, they may offer higher returns.",
  },
  {
    title: "Reduced Market Volatility",
    description:
      "Private equities are shielded from short-term market fluctuations, leading to more stable investment outcomes.",
  },
  {
    title: "Strategic Control Potential",
    description:
      "Investors often participate in decision-making, ensuring alignment with long-term goals.",
  },
  {
    title: "Tax Efficiency",
    description:
      "Private equity investments often provide tax advantages such as deferred taxation on gains.",
  },
  {
    title: "Support for Innovation & Growth",
    description:
      "Private equity funding drives business innovation, scalability, and market leadership.",
  },
];

const PrivateEquity = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div
        className="relative bg-cover bg-center shadow-2xl rounded-2xl overflow-hidden max-w-5xl w-full p-10 transform hover:scale-105 transition duration-500"
        style={{ backgroundImage: `url(${moneyImage})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 backdrop-blur-sm"></div>

        {/* Title Section */}
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-extrabold text-black">
            What Is{" "}
            <span className="italic text-green-400">Private Equity?</span>
          </h2>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 mt-6 text-black">
          <p className="leading-relaxed flex-1 text-lg text-justify">
            Private equity investment refers to investing in companies that are
            not publicly traded. Investors purchase shares in private companies
            with the goal of generating returns through strategic growth,
            restructuring, or eventual sale.
          </p>
        </div>
      </div>

      {/* Combined Benefits Section */}
      <div className="bg-white text-black p-10 rounded-2xl shadow-xl mt-10 max-w-5xl w-full">
        <h3 className="text-4xl font-semibold text-center mb-6">
          Benefits of{" "}
          <span className="italic text-green-300">Private Equities</span>
        </h3>

        <ul className="space-y-4 text-lg">
          {benefitsData.map((benefit, index) => (
            <li
              key={index}
              className={`p-5 rounded-xl transition-all duration-300 cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 ${
                openIndex === index ? "bg-transparent" : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <Paperclip className="text-gray-800 text-2xl mr-3" />
                  <span className="text-gray-800 font-semibold text-xl">
                    {benefit.title}
                  </span>
                </div>
                <span className="text-green-600 text-lg">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </div>
              {/* Description Section */}
              {openIndex === index && (
                <p className="mt-3 text-gray-700 bg-gray-100 p-4 rounded-md w-full">
                  {benefit.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrivateEquity;
