import { useNavigate } from "react-router-dom";

// Import assets
import investvideo from "../assets/images/investvideo.mp4";

// Define slide with type (removed sliding)
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
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Section - No Sliding */}
      <div className="relative w-full h-full">
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

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent drop-shadow-lg">
            {slide.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">
            {slide.description}
          </p>

          {/* Call to Action Button */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-orange-400 hover:to-yellow-500 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Investing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
