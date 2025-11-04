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

const awards = [
  { count: 12, label: "Awards Earned" },
  { count: 45, label: "Startups Launched" },
  { count: 97, label: "Team Members" },
];

const ceoImages = [ceo, ceo1, ceo2, ceo3];

// ✅ Optimized Animated Counter
const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

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
    <span ref={ref} className="text-white font-bold">
      {count}+
    </span>
  );
};

const Awards = () => {
  return (
    <section className="relative w-full py-16 px-4 bg-gradient-to-r from-[#015c64] to-[#0eca85] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-white to-emerald-200 text-transparent bg-clip-text">
              Achievements
            </span>{" "}
            at iQue Cap
          </motion.h2>

          <motion.p
            className="text-white/90 mb-8 max-w-xl leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            At iQue Cap, our milestones reflect years of perseverance,
            innovation, and impact. From award-winning ideas to thriving
            startups, we're building the future — together.
          </motion.p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedNumber value={award.count} />
                </h2>
                <p className="text-white/80 text-sm md:text-base font-medium">
                  {award.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* User Avatars */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex -space-x-3">
              {[user1, user2, user3].map((user, idx) => (
                <img
                  key={idx}
                  src={user}
                  alt={`User ${idx + 1}`}
                  loading="lazy"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <span className="text-white font-semibold text-sm sm:text-base">
                10k+ Trusted Users
              </span>
              <p className="text-white/70 text-xs">Worldwide</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Swiper Carousel */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-sm">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ 
                delay: 3500, 
                disableOnInteraction: false,
                pauseOnMouseEnter: true 
              }}
              pagination={{ 
                clickable: true,
                bulletClass: "swiper-pagination-bullet bg-white/40",
                bulletActiveClass: "swiper-pagination-bullet-active bg-white"
              }}
              loop={true}
              speed={700}
              className="rounded-2xl shadow-2xl border-2 border-white/30 overflow-hidden"
            >
              {ceoImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative overflow-hidden group">
                    <img
                      src={img}
                      alt={`Achievement ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Carousel Label */}
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-white/80 text-sm font-medium">
                Our Journey Through Innovation
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;