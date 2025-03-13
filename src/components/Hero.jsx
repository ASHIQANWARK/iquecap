import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import images from the assets folder
import investImg1 from "../assets/images/img13.jpg";
import investImg2 from "../assets/images/img14.jpg";
import investImg3 from "../assets/images/img15.jpg";

const slides = [
  {
    id: 1,
    title: "Your Gateway To Startup Investments",
    description: "Discover exclusive investment opportunities and drive innovation.",
    image: investImg1,
  },
  {
    id: 2,
    title: "Join Us in Backing the Brightest Ideas of Tomorrow",
    description: "Invest in high-growth startups and shape the future.",
    image: investImg2,
  },
  {
    id: 3,
    title: "Be a Part of the Next Big Breakthrough with IQue Cap",
    description: "Fuel groundbreaking ideas with smart investments.",
    image: investImg3,
  },
];

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">
                {slide.description}
              </p>
              <button className="mt-6 bg-gradient-to-r from-emerald-800 to-teal-900 hover:from-teal-400 hover:to-emerald-500 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Learn More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
