import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import investvideo from "../assets/images/investvideo.mp4";
import overlaySVG from "../assets/images/3353859.jpg";

const slide = {
  id: 1,
  title: "Your Gateway To Startup Investments",
  description: "Be a Part of the Next Big Breakthrough with iQue Cap.",
  type: "video",
  src: investvideo,
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      {slide.type === "video" && (
        <video
          key={slide.id}
          src={slide.src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {/* Optional Decorative Image Overlay */}
      <img
        src={overlaySVG}
        alt="Decorative Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-10 pointer-events-none"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/30 to-black/30 z-10" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center px-4 md:px-8 max-w-4xl"
      >
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
          <span className="bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">
            {slide.title}
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          {slide.description}
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate("/contact")}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-400 hover:to-yellow-400 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Investing
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
