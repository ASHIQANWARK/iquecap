import React, { useState } from "react";
import moneyImage from "../assets/images/img1.jpg";
import { Paperclip } from 'lucide-react'; // Ensure the correct image path

const benefitsData = [
  { 
    title: "High Return Potential", 
    description: "Private equity investments have the potential for higher returns compared to traditional stocks or bonds, as they involve direct involvement in a company’s growth and development." 
  },
  { 
    title: "Access to Exclusive Opportunities", 
    description: "Investors gain access to unique deals and investment opportunities that are not available in public markets." 
  },
  { 
    title: "Active Management and Value Creation", 
    description: "Private equity firms actively manage their investments, working on improving business operations and strategies to maximize returns." 
  },
  { 
    title: "Diversification", 
    description: "Adding private equity to a portfolio can reduce risk by diversifying beyond publicly traded securities." 
  },
  { 
    title: "Long-Term Investment Horizon", 
    description: "Private equity investments typically have a longer investment horizon, allowing companies to grow without short-term market pressures." 
  },
  { 
    title: "Alignment of Interests", 
    description: "Investors and company management work together with aligned incentives to achieve financial success." 
  },
  { 
    title: "Illiquidity Premium", 
    description: "Since private equity investments are less liquid, they may offer higher returns as a reward for the reduced liquidity." 
  },
  { 
    title: "Reduced Market Volatility", 
    description: "Private equities are not directly affected by short-term market fluctuations, leading to more stable investment outcomes." 
  },
  { 
    title: "Strategic Control Potential", 
    description: "Investors often have a say in business decisions, leading to better alignment with long-term goals." 
  },
  { 
    title: "Tax Efficiency", 
    description: "Many private equity investments come with tax advantages such as deferred taxation on gains." 
  },
  { 
    title: "Support for Innovation & Growth", 
    description: "Private equity funding helps businesses scale up, innovate, and reach their full potential." 
  },
];

const PrivateEquity = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="  rounded-lg overflow-hidden max-w-5xl transition-all duration-300 hover:shadow-2xl">
        {/* Top Section */}
        <div className="p-10">
          <h2 className="text-4xl font-extrabold text-white text-center">
            <span className="text-black-500">What Is</span>{" "}
            <span className="italic text-green-600">Private Equity?</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
            <p className="text-white leading-relaxed flex-1 text-lg text-justify">
              Private equity investment refers to investing in companies that
              are not publicly traded. Investors purchase shares in private
              companies with the goal of generating returns through strategic
              growth, restructuring, or eventual sale.
            </p>
            <img
              src={moneyImage}
              alt="Money and Investment"
              className="w-50 h-40   object-cover shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <PrivateEquityBenefits />
    </div>
  );
};

const PrivateEquityBenefits = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b  from-emerald-500 to-emerald-900 text-white p-10 rounded-b-lg mt-10 max-w-5xl w-full">
      <h3 className="text-3xl font-semibold text-center mb-6">
        Benefits of Investing <span className="italic">in Private Equities</span>
      </h3>
      
      <ul className="space-y-4 text-lg">
        {benefitsData.map((benefit, index) => (
          <li 
            key={index} 
            className=" bg-opacity-10 rounded-lg p-5 cursor-pointer transition duration-300 hover:bg-opacity-20 flex flex-col items-start"
            onClick={() => handleToggle(index)}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Paperclip className="text-green-300 text-2xl mr-3" />  
                <span className="text-white font-semibold text-xl">{benefit.title}</span>
              </div>
              <span className="text-green-300 text-lg">{openIndex === index ? "▲" : "▼"}</span>
            </div>
            
            {/* Description Section */}
            {openIndex === index && (
              <p className="mt-3 text-gray-200 bg-black bg-opacity-10 p-4 rounded-md w-full">
                {benefit.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrivateEquity;
