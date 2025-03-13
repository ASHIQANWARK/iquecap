import { motion } from "framer-motion";
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
  { count: "32+", label: "Awards Earned" },
  { count: "45+", label: "Startups Launched" },
  { count: "97+", label: "Team Members" },
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

const Awards = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Our Achievements at <br/> <span className="text-green-400">Ique Cap</span>
        </h2>

        {/* Awards Earned Section */}
        <h3 className="text-3xl font-bold text-white mt-10">
          🏆 Awards Earned
        </h3>
        <div className="mt-6 grid grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <h2 className="text-5xl font-extrabold text-green-400">
                {award.count}
              </h2>
              <p className="text-lg text-gray-300">{award.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Trusted Customers */}
        <h3 className="text-3xl font-bold text-white mt-12">
          5M+ Trusted Global Customers
        </h3>
        <div className="flex items-center space-x-4 mt-6">
          <img
            src={user1}
            alt="User 1"
            className="w-16 h-16 rounded-full border-2 border-white object-cover"
          />
          <img
            src={user2}
            alt="User 2"
            className="w-16 h-16 rounded-full border-2 border-white object-cover"
          />
          <img
            src={user3}
            alt="User 3"
            className="w-16 h-16 rounded-full border-2 border-white object-cover"
          />

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
        <Slider
          {...sliderSettings}
          className=" p-6 rounded-xl "
        >
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
  );
};

export default Awards;
