import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import user1 from "../assets/images/varsha.jpg";
import user2 from "../assets/images/INDU MAAM.jpg";
import user3 from "../assets/images/arun.jpg";
import ceo1 from "../assets/images/art14.jpg";
import ceo2 from "../assets/images/art17.jpg";
import ceo3 from "../assets/images/art15.jpg";

const awards = [
  { count: 32, label: "Awards Earned" },
  { count: 45, label: "Startups Launched" },
  { count: 97, label: "Team Members" },
];

const ceoImages = [ceo1, ceo2, ceo3];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
};

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      let incrementTime = 50;
      let step = Math.ceil(end / (1000 / incrementTime));

      let timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-emerald-400 font-bold">
      {count}+
    </span>
  );
};

const Awards = () => {
  return (
    <section className="w-full bg-transparent flex flex-col items-center justify-center text-white py-16 md:py-24 px-4 md:px-8 overflow-x-hidden">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-center leading-tight mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-teal-200 text-transparent bg-clip-text">
          Achievements
        </span>{" "}
        at iQue Cap
      </motion.h2>

      {/* Content */}
      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-center gap-16">
        {/* Left Side */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Achievements of our Partners
          </h3>
          <p className="text-gray-300 mb-8 max-w-lg">
            At iQue Cap, we take pride in the milestones we've reached through
            dedication and innovation. Our journey has been marked by
            recognition, successful startups, and a growing team of
            professionals who make it all possible. These accomplishments are a
            testament to our unwavering commitment to empowering investors and
            entrepreneurs worldwide.
          </p>

          {/* Awards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 w-full">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center text-center p-6 rounded-2xl shadow-xl bg-gradient-to-b from-[#003322] to-[#002711]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold mb-2">
                  <AnimatedNumber value={award.count} />
                </h2>
                <p className="text-gray-300 text-sm">{award.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Trusted Users */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center space-x-3">
              {[user1, user2, user3].map((user, idx) => (
                <img
                  key={idx}
                  src={user}
                  alt={`User ${idx + 1}`}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white object-cover transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>
            <span className="text-base font-medium text-gray-300 mt-2 sm:mt-0">
              5M+ Trusted Customers & Growing
            </span>
          </div>
        </motion.div>

        {/* Right Side - CEO Carousel */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-[260px] sm:w-[300px]">
            <Slider {...sliderSettings}>
              {ceoImages.map((image, idx) => (
                <div key={idx} className="flex justify-center">
                  <div className="rounded-lg overflow-hidden shadow-lg w-full h-[340px] sm:h-[380px] bg-[#002B1F] p-2 border-2 border-emerald-400">
                    <img
                      src={image}
                      alt={`CEO ${idx + 1}`}
                      className="w-full h-full object-cover rounded-md transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
