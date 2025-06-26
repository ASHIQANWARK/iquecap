import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { name: "Nabeel", role: "CEO", text: "The team delivered an amazing project! Their attention to detail and creativity exceeded our expectations." },
  { name: "Hashim", role: "CEO", text: "Fantastic work! They truly understand what customers need and deliver outstanding results." },
  { name: "Shefin", role: "CEO", text: "A professional and dedicated team! Highly recommended for anyone looking for top-notch development services." },
  { name: "Keerthi", role: "CEO", text: "Working with this team was an amazing experience. They are highly skilled and very professional." },
  { name: "Abhirami", role: "CEO", text: "Great work! Their expertise and attention to detail made a huge difference in our project’s success." },
  { name: "Jino", role: "CEO", text: "A trustworthy and highly skilled team. They exceeded our expectations in every way." },
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
    <section className="w-full bg-gradient-to-t from-emerald-950 to-teal-950 flex flex-col items-center justify-center py-14 px-6 overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What Our Clients Say
      </motion.h2>

      {/* Underline */}
      <motion.div
        className="mt-1 mb-10 mx-auto w-24 h-1 bg-gradient-to-r from-yellow-400 to-emerald-300 rounded-full"
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
              className="relative p-8 rounded-3xl bg-gradient-to-br from-emerald-800/30 to-black/30 border border-emerald-400/30 backdrop-blur-xl shadow-lg flex flex-col justify-between min-h-[320px] transition-transform transform hover:scale-105 hover:shadow-2xl mx-4" // added mx-4 for spacing between cards
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              {/* Quote Icon at top */}
              <FaQuoteLeft className="text-emerald-300 text-5xl absolute top-6 left-6 opacity-20" />

              {/* Testimonial Text */}
              <p className="text-gray-200 text-base italic leading-relaxed mb-6 z-10">
                "{testimonial.text}"
              </p>

              {/* Footer */}
              <div className="flex flex-col items-center mt-6">
                <div className="h-14 w-14 bg-emerald-300/20 rounded-full flex items-center justify-center text-xl font-bold text-emerald-300 mb-6"> {/* Adjusted margin */}
                  {testimonial.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                <p className="text-emerald-300 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
