// src/components/Awards.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Images
import user1 from "../assets/images/varsha.jpg";
import user2 from "../assets/images/INDU MAAM.jpg";
import user3 from "../assets/images/arun.jpg";
import ceo1 from "../assets/images/art14.jpg";
import ceo2 from "../assets/images/art17.jpg";
import ceo3 from "../assets/images/art15.jpg";
import ceo from "../assets/images/shaazbinmahroof (1).jpg";
import bgSVG from "../assets/images/3353859.jpg";

const awards = [
  { count: 32, label: "Awards Earned" },
  { count: 45, label: "Startups Launched" },
  { count: 97, label: "Team Members" },
];

const ceoImages = [ceo, ceo1, ceo2, ceo3];

// ✅ Optimized Animated Counter
const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 1000;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
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
    <section
      className="relative w-full py-20 px-6 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgSVG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 z-10">
        {/* Left Side */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-200 text-transparent bg-clip-text">
              Achievements
            </span>{" "}
            at iQue Cap
          </motion.h2>

          <p className="text-gray-300 mb-8 max-w-xl leading-relaxed">
            At iQue Cap, our milestones reflect years of perseverance,
            innovation, and impact. From award-winning ideas to thriving
            startups, we're building the future — together.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-10">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#014233] to-[#011F16] px-10 py-8 rounded-2xl text-center shadow-xl backdrop-blur-md w-full max-w-sm mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h2 className="text-5xl font-extrabold mb-3">
                  <AnimatedNumber value={award.count} />
                </h2>
                <p className="text-gray-300 text-base sm:text-lg font-medium">
                  {award.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* User Avatars */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex -space-x-3">
              {[user1, user2, user3].map((user, idx) => (
                <img
                  key={idx}
                  src={user}
                  alt={`User ${idx + 1}`}
                  loading="lazy"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white object-cover hover:scale-105 transition-transform"
                />
              ))}
            </div>
            <span className="text-sm sm:text-base font-medium text-gray-300 mt-2 sm:mt-0">
              5M+ Trusted Users Worldwide
            </span>
          </div>
        </motion.div>

        {/* Right Side - Swiper Carousel */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-[260px] sm:w-[300px]">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              speed={600}
              className="rounded-xl shadow-2xl border-2 border-emerald-500"
            >
              {ceoImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="overflow-hidden bg-[#002A22] rounded-xl">
                    <img
                      src={img}
                      alt={`CEO ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-[340px] sm:h-[380px] object-cover rounded-lg duration-500"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
