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
    <section className="min-h-screen w-full bg-transparent flex flex-col items-center justify-center text-white py-16 px-6">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center leading-tight mb-8"
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

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2 text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold mb-3">Achievements of our Partners</h3>
          <p className="text-gray-300 mb-6 font-sans">
            At iQue Cap, we take pride in the milestones we've reached through dedication and innovation. Our journey has
            been marked by recognition, successful startups, and a growing team of professionals who make it all possible.
            These accomplishments are a testament to our unwavering commitment to empowering investors and entrepreneurs worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl shadow-xl bg-gradient-to-b from-[#003322] to-[#002711]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                <h2 className="text-5xl font-bold mb-2">
                  <AnimatedNumber value={award.count} />
                </h2>
                <p className="text-gray-300">{award.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Trusted Users */}
          <h3 className="text-3xl font-semibold mb-3">5M+ Trusted Customers</h3>
          <div className="flex items-center gap-4 mt-2">
            {[user1, user2, user3].map((user, i) => (
              <img
                key={i}
                src={user}
                alt={`User ${i + 1}`}
                className="w-14 h-14 rounded-full border-2 border-white object-cover transition-transform duration-300 hover:scale-105"
              />
            ))}
            <span className="text-base font-medium text-gray-300">
              & Growing Worldwide
            </span>
          </div>
        </motion.div>

        {/* Right Section - CEO Carousel */}
        <motion.div
          className="w-full md:w-1/2 max-w-md"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Slider {...sliderSettings}>
            {ceoImages.map((image, index) => (
              <div key={index} className="flex justify-center">
                <div className="rounded-lg overflow-hidden shadow-lg w-[300px] h-[350px] bg-[#002B1F] p-2 border-2 border-emerald-400">
                  <img
                    src={image}
                    alt={`CEO ${index + 1}`}
                    className="w-full h-full object-cover rounded-md transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
