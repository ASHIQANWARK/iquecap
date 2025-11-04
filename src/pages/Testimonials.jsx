import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Nabeel",
    role: "Invester",
    text: "The team delivered an amazing project! Their attention to detail and creativity exceeded our expectations.",
  },
  {
    name: "Hashim",
    role: "Invester",
    text: "Fantastic work! They truly understand what customers need and deliver outstanding results.",
  },
  {
    name: "Shefin",
    role: "Invester",
    text: "A professional and dedicated team! Highly recommended for anyone looking for top-notch development services.",
  },
  {
    name: "Keerthi",
   role: "Invester",
    text: "Working with this team was an amazing experience. They are highly skilled and very professional.",
  },
  {
    name: "Abhirami",
    role: "Invester",
    text: "Great work! Their expertise and attention to detail made a huge difference in our project's success.",
  },
  {
    name: "Jino",
    role: "Invester",
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
    centerMode: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#015c64] to-[#0eca85] flex flex-col items-center justify-center py-14 px-6 overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What Our Clients Say
      </motion.h2>

      {/* Underline */}
      <motion.div
        className="mt-1 mb-10 mx-auto w-20 h-1 bg-gradient-to-r from-yellow-400 to-emerald-300 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Slider */}
      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3 py-2"> {/* Added padding for spacing */}
              <motion.div
                className="relative p-4 rounded-xl bg-white/10 border border-emerald-500/20 backdrop-blur-lg shadow-lg flex flex-col justify-between h-[220px] transition-transform transform hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-emerald-300 text-xl mb-2 opacity-70" />

                {/* Testimonial Text */}
                <p className="text-gray-100 text-xs md:text-sm italic leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Footer */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="h-8 w-8 bg-emerald-400/20 rounded-full flex items-center justify-center text-xs font-bold text-emerald-300">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-emerald-300 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;