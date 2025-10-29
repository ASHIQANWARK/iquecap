import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FaHome,
  FaCertificate,
  FaRocket,
  FaHandHoldingUsd,
  FaInfinity,
  FaFlag,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaArrowRight,
  FaUserTie,
  FaChartLine,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

// Import images (keep your original imports)
import heroBg from "../assets/images/acad1.png";
import trainingImage from "../assets/images/img11.jpg";
import cardIqueCap from "../assets/images/CAP3.jpg";
import cardOnline from "../assets/images/online.jpg";
import programImg from "../assets/images/hero3.jpg";
import cardCommunity from "../assets/images/img15.jpg";
import visionImg from "../assets/images/img1.jpg";
import growthImg from "../assets/images/img2.jpg";
import investingImg from "../assets/images/img3.jpg";
import advantage1Img from "../assets/images/CAP3.jpg";
import advantage2Img from "../assets/images/CAP3.jpg";
import advantage3Img from "../assets/images/CAP3.jpg";
import advantage4Img from "../assets/images/CAP3.jpg";

const CapAdvisor = () => {
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const indianLanguages = [
    "Hindi",
    "English",
    "Bengali",
    "Telugu",
    "Marathi",
    "Tamil",
    "Urdu",
    "Gujarati",
    "Kannada",
    "Odia",
    "Malayalam",
    "Punjabi",
    "Assamese",
    "Maithili",
    "Santali",
  ];

  const openWhatsApp = (formData = {}) => {
    const {
      name = "",
      email = "",
      phone = "",
      language = "",
      note = "",
    } = formData;

    let message = "Hello, I'm interested in CAP Academy!\n\n";

    if (name) message += `Name: ${name}\n`;
    if (email) message += `Email: ${email}\n`;
    if (phone) message += `Phone: ${phone}\n`;
    if (language) message += `Preferred Language: ${language}\n`;
    if (note) message += `Note: ${note}\n`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919035093820?text=${encodedMessage}`, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      language: formData.get("language"),
    };

    openWhatsApp(data);
    e.target.reset();
    setContactSubmitting(false);
  };

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      text: "This program gave me financial freedom and purpose.",
      author: "Suhara T, Kerala",
      role: "Certified CAP Advisor",
    },
    {
      text: "Cap Academy helped me gain confidence and income at the same time.",
      author: "Mary Jemshy, Kerala",
      role: "Certified CAP Advisor",
    },
  ];

  return (
    <div className="text-gray-800 antialiased">
      <Helmet>
        <title>CAP Academy | IqueCap</title>
        <meta
          name="description"
          content="CAP Academy empowers young talents through industry-driven learning, mentorship, and career growth initiatives."
        />
        <link rel="canonical" href="https://iquecap.com/capacademy" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-sm mb-4">
              <span className="h-2 w-2 bg-emerald-300 rounded-full mr-2"></span>
              Empowering India's Next Generation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              CAP <span className="text-emerald-300">Academy</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-light text-emerald-200 italic">
              Learn. Earn. Grow.
            </h2>

            <p className="text-lg text-gray-100 leading-relaxed max-w-lg">
              Empowering India's Next Generation of Investment Advisors. Become
              a certified CAP Advisor and connect investors to India's top
              startups.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://forms.gle/5ydJrcSRdT59B2Zm8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-emerald-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-emerald-50 transition-all duration-300"
              >
                Join as a CAP Advisor
                <FaArrowRight className="ml-2" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  openWhatsApp({
                    note: "Please share program details about CAP Academy.",
                  })
                }
                className="inline-flex items-center bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Contact on WhatsApp
              </motion.button>
            </div>

            <div className="pt-4">
              <p className="text-emerald-200 text-sm mb-3">Follow us:</p>
              <div className="flex gap-3">
                {[
                  {
                    icon: <FaThreads />,
                    url: "https://www.threads.com/@cap_academy.official?hl=en&xmt=AQF0EuLY1V6CpfnPBlMaZ_ccVqJ3PLWeIG_i46kEwHJghv8",
                  },
                  {
                    icon: <FaInstagram />,
                    url: "https://www.instagram.com/cap_academy.official/?hl=en",
                  },
                  {
                    icon: <FaLinkedin />,
                    url: "https://www.linkedin.com/in/cap-academy-943903374/",
                  },
                  {
                    icon: <FaFacebook />,
                    url: "https://www.facebook.com/profile.php?id=61578898209874",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/30 rounded-2xl blur-lg"></div>
              <img
                src={heroBg}
                alt="CAP Academy"
                className="relative w-full max-w-md rounded-xl shadow-2xl object-cover z-10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4">
            About <span className="text-emerald-600">CAP Academy</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            An initiative by IqueCap to create India's largest network of
            trained and certified Cap Advisors
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
              Our Vision
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-800">
              Empowering Individuals Across India
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              CAP Academy is an initiative by IqueCap to create India's largest
              network of trained and certified Cap Advisors. Our mission is to
              empower individuals—especially from Tier 2 and Tier 3 cities—with
              essential skills and knowledge in finance, startups, and
              investments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-30"></div>
            <img
              src={visionImg}
              alt="CAP Academy Vision"
              className="relative rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:order-2 space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
              Growth Story
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-800">
              India's Startup Ecosystem is Booming
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <FaChartLine className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold">$140+ Billion</h4>
                  <p className="text-gray-600">
                    invested in Indian Startups (till 2025)
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <FaFlag className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold">110+ Unicorns</h4>
                  <p className="text-gray-600">created in India</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <FaUsers className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold">5 million+</h4>
                  <p className="text-gray-600">
                    retail investors exploring alternative assets
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <FaRocket className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Tier 2/3 cities</h4>
                  <p className="text-gray-600">
                    seeing 50% YoY investor growth
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:order-1 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-30"></div>
            <img
              src={growthImg}
              alt="Startup Growth"
              className="relative rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
              Investment Opportunity
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-800">
              The Power of Investing in Startups
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>From Using Startups to Growing With Them:</strong> We use
              startups every day — to shop, travel, learn, and pay. Few people
              realize they can participate in the early journey of game-changing
              companies and grow with them as investors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-30"></div>
            <img
              src={investingImg}
              alt="Investing in Startups"
              className="relative rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* FEATURE CARDS SECTION */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
              The IqueCap Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With IqueCap, you get everything you need to succeed as a CAP
              Advisor
            </p>
          </motion.div>   

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Vetted Startup Deals",
                description:
                  "Access to carefully selected investment opportunities",
                icon: <FaCheckCircle className="text-2xl" />,
              },
              {
                title: "Structured Process",
                description: "Clear, step-by-step investment methodology",
                icon: <FaChartLine className="text-2xl" />,
              },
              {
                title: "Expert Support",
                description: "Guidance from trained Cap Advisors",
                icon: <FaUserTie className="text-2xl" />,
              },
              {
                title: "Transparent Updates",
                description: "Regular reports and progress tracking",
                icon: <FaLightbulb className="text-2xl" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-white hover:border-emerald-200"
              >
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL CARDS SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              image: cardIqueCap,
              title: "Backed by IqueCap",
              description: "Industry expertise and support",
            },
            {
              image: cardOnline,
              title: "Fully Online Learning",
              description: "Flexible, accessible from anywhere",
            },
            {
              image: cardCommunity,
              title: "Thriving Community",
              description: "Network with peers and experts",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              style={{ aspectRatio: "4/5" }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500 z-10"></div>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY BECOME A CAP ADVISOR */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
              Why Become a Cap Advisor?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of joining India's premier investment
              advisor program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHome />,
                title: "Work From Home",
                description: "Be your own boss and set your own schedule",
              },
              {
                icon: <FaCertificate />,
                title: "Get Certified",
                description:
                  "Earn a professional certification from a reputable platform",
              },
              {
                icon: <FaRocket />,
                title: "Exclusive Opportunities",
                description:
                  "Access investment deals not available to the general public",
              },
              {
                icon: <FaHandHoldingUsd />,
                title: "Help Others Grow",
                description:
                  "Guide investors toward wealth-building opportunities",
              },
              {
                icon: <FaInfinity />,
                title: "Unlimited Earnings",
                description: "No cap on your income potential",
              },
              {
                icon: <FaFlag />,
                title: "Be a Pioneer",
                description:
                  "Participate in India's startup growth story from the ground up",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 rounded-xl text-white shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all duration-300">
                  <div className="text-2xl text-white">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-emerald-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="py-16 md:py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6">
                Program Highlights
              </h2>

              <ul className="space-y-4">
                {[
                  "25-day intensive online training",
                  "Live and recorded sessions for flexibility",
                  "Learn basics of investment, startups, and pitch evaluation",
                  "Guidance on lead generation and investor handling",
                  "Real-time support and feedback from mentors",
                  "Interactive quizzes, case studies, and practice decks",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-full mr-4 mt-1">
                      <FaCheckCircle className="text-emerald-600 text-sm" />
                    </div>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-30"></div>
              <img
                src={programImg}
                alt="Program Highlights"
                className="relative rounded-xl shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRAINING FLOW */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
              Training & Certification Flow
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple steps to become a certified CAP Advisor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-30"></div>
              <img
                src={trainingImage}
                alt="Training Process"
                className="relative rounded-xl shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Register and Pay ₹10,000",
                    description:
                      "Secure your spot in the program with a simple registration",
                  },
                  {
                    step: "02",
                    title: "25 Days Online Training",
                    description:
                      "Complete our comprehensive training program at your own pace",
                  },
                  {
                    step: "03",
                    title: "Assignments & Final Quiz",
                    description:
                      "Demonstrate your knowledge through practical assignments",
                  },
                  {
                    step: "04",
                    title: "Get Certified",
                    description:
                      "Receive your official CAP Advisor certification",
                  },
                  {
                    step: "05",
                    title: "Start Earning",
                    description:
                      "Begin earning incentives on every successful deal",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EARNINGS SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Earnings & Incentives
            </h2>
            <p className="text-lg text-emerald-200 mb-12 max-w-2xl mx-auto">
              Unlock exciting rewards as you grow with CAP Academy
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-left">
              <h3 className="text-2xl font-semibold mb-8 text-center">
                How You Earn
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Incentive on every successful investment closure",
                  "Daily payout Incentive",
                  "Extra incentives for top performers",
                  "Monthly recognition & rewards",
                  "Long-term partnership opportunities with IqueCap",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-emerald-500/20 p-2 rounded-full mr-4 flex-shrink-0">
                      <FaCheckCircle className="text-emerald-300 text-xl" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-10 text-center"
              >
                <a
                  href="https://forms.gle/5ydJrcSRdT59B2Zm8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-emerald-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-emerald-50 transition-all duration-300"
                >
                  Start Earning Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories from our top-performing CAP Advisors across India!
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-md border-l-4 border-emerald-500 ${
                    activeTestimonial === index ? "" : "opacity-70"
                  }`}
                  onMouseEnter={() => setActiveTestimonial(index)}
                >
                  <p className="text-lg text-gray-800 italic mb-6">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-emerald-700">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-emerald-600">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-emerald-100 text-emerald-900 py-6 px-8 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold">
                You can be the next success story.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-700">
                  Reach out to us for any queries or support. We're here to
                  help!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <FaPhoneAlt className="text-emerald-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      Call Us
                    </h3>
                    <a
                      href="tel:+919035093820"
                      className="text-gray-600 hover:text-emerald-700 transition-colors"
                    >
                      +91 90350 93820
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-emerald-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      Email Us
                    </h3>
                    <a
                      href="mailto:capadvisormanager@iquecap.com"
                      className="text-gray-600 hover:text-emerald-700 transition-colors"
                    >
                      capadvisormanager@iquecap.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <FaGlobe className="text-emerald-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      Visit Us
                    </h3>
                    <a
                      href="https://iquecap.com/capacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-emerald-700 transition-colors"
                    >
                      www.iquecap.com/capacademy
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-emerald-800 font-medium mb-3">
                  Follow us on social media:
                </p>
                <div className="flex gap-3">
                  {[
                    {
                      icon: <FaThreads />,
                      url: "https://www.threads.com/@cap_academy.official?hl=en&xmt=AQF0EuLY1V6CpfnPBlMaZ_ccVqJ3PLWeIG_i46kEwHJghv8",
                    },
                    {
                      icon: <FaInstagram />,
                      url: "https://www.instagram.com/cap_academy.official/?hl=en",
                    },
                    {
                      icon: <FaLinkedin />,
                      url: "https://www.linkedin.com/in/cap-academy-943903374/",
                    },
                    {
                      icon: <FaFacebook />,
                      url: "https://www.facebook.com/profile.php?id=61578898209874",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-100 p-3 rounded-lg text-emerald-700 hover:bg-emerald-200 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center"
            >
              <h3 className="text-2xl font-semibold mb-6 text-emerald-800 text-center">
                Contact Form
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Fill out our Google Form to get in touch with us
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://docs.google.com/forms/d/e/1FAIpQLSf_7KkLeJU6-BsuE-0qgZeFOLUZ3x21Dm_uIv-gActy4mhnUA/viewform?usp=sharing&ouid=102317791087597349157"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-700 text-white py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-all duration-300 flex items-center justify-center"
              >
                Apply Now 
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapAdvisor;
