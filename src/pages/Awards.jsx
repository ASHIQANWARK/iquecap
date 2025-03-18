import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
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
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

// Number Animation Component
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
    <span ref={ref} className="text-green-400">
      {count}+
    </span>
  );
};

const Awards = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white py-16">
      {/* Title Header */}
      <motion.h2
        className="text-5xl font-extrabold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our <span className="text-green-400">Achievements</span> at Ique Cap
      </motion.h2>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Awards Earned Section */}
          <h3 className="text-3xl font-bold mt-6">Achievements</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg  shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <h2 className="text-5xl font-extrabold">
                  <AnimatedNumber value={award.count} />
                </h2>
                <p className="text-lg text-gray-300">{award.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Trusted Customers */}
          <h3 className="text-3xl font-bold mt-12">5M+ Trusted Global Customers</h3>
          <div className="flex items-center space-x-4 mt-6">
            {[user1, user2, user3].map((user, index) => (
              <img
                key={index}
                src={user}
                alt={`User ${index + 1}`}
                className="w-16 h-16 rounded-full border-2 border-white object-cover"
              />
            ))}
            <span className="text-lg font-semibold text-gray-300">
              5M+ Trusted Global Customers
            </span>
          </div>
        </motion.div>

        {/* Right Section - CEO Image Carousel */}
        <motion.div
          className="w-full md:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Slider {...sliderSettings} className="p-6 rounded-xl">
            {ceoImages.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`CEO ${index + 1}`}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
