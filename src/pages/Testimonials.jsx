import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full bg-transparent flex flex-col items-center justify-center py-10 px-4 overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What Our Clients Say
      </motion.h2>

      {/* Underline */}
      <motion.div
        className="mt-1 mb-8 mx-auto w-20 h-1 bg-gradient-to-r from-yellow-400 to-emerald-300 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Slider */}
      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/10 border border-white/20 p-6 mx-3 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 min-h-[280px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <FaQuoteLeft className="text-emerald-300 text-2xl mb-2" />
              <p className="text-gray-200 text-base italic mb-2 px-2">
                "{testimonial.text}"
              </p>
              <FaQuoteRight className="text-emerald-300 text-2xl mb-2" />
              <h3 className="text-lg font-bold text-white mt-2">{testimonial.name}</h3>
              <p className="text-emerald-300 text-sm">{testimonial.role}</p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
