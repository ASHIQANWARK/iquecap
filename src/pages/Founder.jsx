import React, { useRef, useEffect, useState } from "react";
import { Play, Quote, Award, TrendingUp, Users } from "lucide-react";

// Import founder image (replace with your actual path)
import founderImage from "../assets/images/Shaaz.jpg";;

const Founder = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section 
      ref={sectionRef}
      className="relative bg-transparent py-20 px-4 overflow-hidden" 
      id="founder"
    >
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm mb-4">
            Leadership
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Founder
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Visionary leadership driving innovation and growth in the investment sector
          </p>
        </div>

        {/* Founder Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Founder Image */}
          <div className={`w-full lg:w-2/5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl rotate-3"></div>
              <img
                src={founderImage}
                alt="Shaaz Bin Maharoof - Founder of iQue Cap"
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Founder Quote & Info */}
          <div className={`w-full lg:w-3/5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '300ms'}}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100/50">
              <Quote className="text-emerald-400 mb-4" size={32} />
              <blockquote className="text-2xl font-light text-slate-800 italic mb-6">
                "At iQue Cap, we are not just another Investment Firm. We are creating a safe space for money to flow, helping unlimited individuals choose the right Investment Options."
              </blockquote>
              <div className="border-t border-slate-100 pt-6">
                <h3 className="text-xl font-bold text-slate-900">Shaaz Bin Maharoof</h3>
                <p className="text-emerald-600 font-medium">Founder & CEO, iQue Cap</p>
                <p className="text-slate-600 mt-3">
                  With over a decade of experience in investment and finance, Shaaz has dedicated his career to creating accessible investment opportunities for individuals seeking financial growth and security.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '600ms'}}>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100/50 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4">
              <Award className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Excellence</h3>
            <p className="text-slate-600">
              Commitment to the highest standards in investment strategies and client service.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100/50 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4">
              <TrendingUp className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Growth</h3>
            <p className="text-slate-600">
              Focus on sustainable growth and long-term value creation for our investors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100/50 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4">
              <Users className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Community</h3>
            <p className="text-slate-600">
              Building a community of informed investors who support and learn from each other.
            </p>
          </div>
        </div>

        
        
      </div>
    </section>
  );
};

export default Founder;