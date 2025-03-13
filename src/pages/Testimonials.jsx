import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample testimonials data
const testimonials = [
  {
    name: "Nabeel",
    role: "CEO",
    text: "The team delivered an amazing project! Their attention to detail and creativity exceeded our expectations.",
  },
  {
    name: "Hashim",
    role: "CEO",
    text: "Fantastic work! They truly understand what customers need and deliver outstanding results.",
  },
  {
    name: "Shefin",
    role: "CEO",
    text: "A professional and dedicated team! Highly recommended for anyone looking for top-notch development services.",
  },
  {
    name: "Keerthi",
    role: "CEO",
    text: "Working with this team was an amazing experience. They are highly skilled and very professional.",
  },
  {
    name: "Abhirami",
    role: "CEO",
    text: "Great work! Their expertise and attention to detail made a huge difference in our project’s success.",
  },
  {
    name: "Jino",
    role: "CEO",
    text: "A trustworthy and highly skilled team. They exceeded our expectations in every way.",
  },
];

const Testimonials = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 testimonials per row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2, // Show 2 testimonials per row
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 testimonial per row
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 ">
      <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
        What Our Clients Say
      </h2>
      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className=" p-6 rounded-lg shadow-lg mx-3 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <FaQuoteLeft className="text-green-500 text-3xl mb-4" />
              <p className="text-white text-lg italic">"{testimonial.text}"</p>
              <FaQuoteRight className="text-green-500 text-3xl mt-4" />
              <h3 className="text-xl font-semibold text-white mt-3">
                {testimonial.name}
              </h3>
              <p className="text-white">{testimonial.role}</p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
