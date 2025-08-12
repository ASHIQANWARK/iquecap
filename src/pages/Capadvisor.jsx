// src/pages/CapAdvisor.jsx
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
  FaGlobe,FaInstagram, FaLinkedin, FaFacebook
} from "react-icons/fa";

import { FaThreads } from "react-icons/fa6"; // Threads icon

import heroBg from "../assets/images/acad1.png";
import trainingImage from "../assets/images/img11.jpg";
import cardIqueCap from "../assets/images/CAP3.jpg";
import cardOnline from "../assets/images/online.jpg";
import programImg from "../assets/images/hero3.jpg";
/* If you have a third card image, add it here; otherwise programImg is used */
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
    "Santali"
  ];

  const openWhatsApp = ({ name, email, phone, language }) => {
    const whatsappNumber = "919035093820"; // without +
    const message = `Hello, I would like to know more about CAP Academy.%0A
Name: ${name}%0A
Email: ${email}%0A
Phone: ${phone}%0A
Preferred Language: ${language}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactSubmitting(true);

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const language = e.target.language.value;

    // Validation
    if (!name) {
      alert("Name is required");
      setContactSubmitting(false);
      return;
    }
    if (!phone || !/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number");
      setContactSubmitting(false);
      return;
    }

    openWhatsApp({ name, email, phone, language });
    setTimeout(() => setContactSubmitting(false), 800);
  };
  return (
    <div className="text-gray-800 antialiased">
      {/* Helmet */}
      <Helmet>
        <title>CAP Academy | IqueCap</title>
        <meta
          name="description"
          content="CAP Academy empowers young talents through industry-driven learning, mentorship, and career growth initiatives."
        />
        <link rel="canonical" href="https://iquecap.com/capacademy" />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -36 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
        CAP Academy
      </h1>

      <h2 className="text-2xl sm:text-3xl italic font-light text-emerald-200">
        Learn. Earn. Grow.
      </h2>

      <p className="text-lg sm:text-xl text-gray-100 leading-relaxed">
        Empowering India's Next Generation of Investment Advisors. Become a
        certified CAP Advisor and connect investors to India's top
        startups. Access world-class training, mentorship, and industry
        insights that put you ahead in the game.
      </p>

      <p className="text-gray-200">
        Practical, mentor-driven learning with real-world opportunities — for
        students, professionals, and entrepreneurial minds.
      </p>

      <div className="flex flex-wrap gap-3 items-center">
        <a
          href="https://forms.gle/5ydJrcSRdT59B2Zm8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-emerald-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-emerald-100 transition duration-300"
        >
          Join as a CAP Advisor
        </a>

        <button
          onClick={() =>
            openWhatsApp({
              name: "I'm interested in CAP Academy",
              email: "",
              phone: "",
              note: "Please share program details.",
            })
          }
          className="inline-block bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full hover:bg-white/20 transition"
        >
          Contact on WhatsApp
        </button>
      </div>

      {/* Social Media Links */}
      <div className="flex gap-4 mt-6">
        <a
          href="https://www.threads.com/@cap_academy.official?hl=en&xmt=AQF0EuLY1V6CpfnPBlMaZ_ccVqJ3PLWeIG_i46kEwHJghv8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
        >
          <FaThreads className="text-white text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/cap_academy.official/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
        >
          <FaInstagram className="text-white text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/cap-academy-943903374/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
        >
          <FaLinkedin className="text-white text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61578898209874"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
        >
          <FaFacebook className="text-white text-2xl" />
        </a>
      </div>

      {/* Small benefit badges */}
      <div className="flex flex-wrap gap-3 mt-6">
        <div className="inline-flex items-center gap-2 bg-white/8 py-2 px-3 rounded-full text-sm">
          <FaCertificate className="text-emerald-200" />
          <span>Certification</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-white/8 py-2 px-3 rounded-full text-sm">
          <FaRocket className="text-emerald-200" />
          <span>Mentorship</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-white/8 py-2 px-3 rounded-full text-sm">
          <FaHandHoldingUsd className="text-emerald-200" />
          <span>Earnings</span>
        </div>
      </div>
    </motion.div>

    {/* Right Image */}
    <motion.div
      initial={{ opacity: 0, x: 36 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <img
        src={heroBg}
        alt="CAP Academy"
        className="w-full max-w-md rounded-lg object-cover"
      />
    </motion.div>
  </div>
</section>


      {/* Breadcrumb */}
      <div className="bg-white py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto text-sm text-gray-600 font-medium">
          <span className="text-emerald-700 hover:underline cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Cap Academy</span>
        </div>
      </div>

      {/* ABOUT */}
     <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-16 text-center text-emerald-900 tracking-tight">
        About <span className="text-emerald-600">CAP Academy</span>
      </h2>

      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-4">
            Our Vision
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            CAP Academy is an initiative by IqueCap to create India's largest
            network of trained and certified Cap Advisors. Our mission is to
            empower individuals—especially from Tier 2 and Tier 3 cities—with
            essential skills and knowledge in finance, startups, and
            investments.
          </p>
        </div>
        <div>
          <img
            src={visionImg}
            alt="CAP Academy Vision"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div className="order-2 md:order-1">
          <img
            src={growthImg}
            alt="Startup Growth"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="order-1 md:order-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-4">
            India's Startup Growth in Numbers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>
              <strong>$140+ Billion</strong> invested in Indian Startups (till
              2025)
            </li>
            <li>
              <strong>110+ Unicorns</strong> created
            </li>
            <li>
              <strong>5 million+</strong> retail investors exploring alternative
              assets
            </li>
            <li>
              <strong>Tier 2/3 cities</strong> seeing 50% YoY investor growth
            </li>
          </ul>
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-4">
            The Power of Investing in Startups
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>From Using Startups to Growing With Them:</strong> We use
            startups every day — to shop, travel, learn, and pay. Few people
            realize they can participate in the early journey of game-changing
            companies and grow with them as investors.
          </p>
        </div>
        <div>
          <img
            src={investingImg}
            alt="Investing in Startups"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Section 4 */}
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-6">
          The IqueCap Advantage
        </h3>
        <h4 className="text-xl sm:text-2xl font-semibold text-emerald-700 mb-6">
          With IqueCap, You Get:
        </h4>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { text: "Access to vetted startup deals", img: advantage1Img },
            { text: "Structured investment process", img: advantage2Img },
            { text: "Support from trained Cap Advisors", img: advantage3Img },
            { text: "Transparent updates and reports", img: advantage4Img },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-emerald-50 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <img
                src={item.img}
                alt={item.text}
                className="w-20 h-20 mb-4 rounded-full object-cover shadow"
              />
              <p className="text-gray-800 font-medium text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
 

        {/* Visual Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer max-w-md mx-auto" style={{ aspectRatio: "1 / 1" }}>
            <img src={cardIqueCap} alt="Backed by IqueCap" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <p className="text-white font-bold text-lg sm:text-2xl text-center px-4">Backed by IqueCap</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer max-w-md mx-auto" style={{ aspectRatio: "1 / 1" }}>
            <img src={cardOnline} alt="Fully Online, Easy-to-Learn Format" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <p className="text-white font-bold text-lg sm:text-2xl text-center px-4">Fully Online, Easy-to-Learn Format</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer max-w-md mx-auto" style={{ aspectRatio: "1 / 1" }}>
            <img src={cardCommunity} alt="Join a Thriving Community" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <p className="text-white font-bold text-lg sm:text-2xl text-center px-4">Join a Thriving Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BECOME A CAP ADVISOR */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-emerald-900">Why Become a Cap Advisor?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaHome />, text: "Work from home and be your own boss" },
              { icon: <FaCertificate />, text: "Get certified by a professional platform" },
              { icon: <FaRocket />, text: "Access exclusive investment opportunities" },
              { icon: <FaHandHoldingUsd />, text: "Help others grow their wealth" },
              { icon: <FaInfinity />, text: "Unlimited earning potential" },
              { icon: <FaFlag />, text: "Be part of India's startup growth story" },
            ].map((card, idx) => (
              <div key={idx} className="bg-gradient-to-br from-emerald-600 to-emerald-900 p-6 rounded-xl shadow-md text-center">
                <div className="w-14 h-14 mx-auto flex items-center justify-center text-white rounded-md mb-4 text-2xl">
                  {card.icon}
                </div>
                <p className="text-lg font-medium text-white">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald-900">Program Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img src={programImg} alt="Program Highlights" className="w-full h-full object-cover max-h-[420px]" />
            </div>

            <div className="flex flex-col justify-center">
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
                <li>25-day intensive online training</li>
                <li>Live and recorded sessions for flexibility</li>
                <li>Learn basics of investment, startups, and pitch evaluation</li>
                <li>Guidance on lead generation and investor handling</li>
                <li>Real-time support and feedback from mentors</li>
                <li>Interactive quizzes, case studies, and practice decks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING & CERTIFICATION FLOW */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-emerald-900">Training & Certification Flow</h2>
            <ol className="space-y-4 list-decimal pl-6 text-lg text-gray-700">
              <li>Register and Pay Rs.10,000</li>
              <li>Attend 25 days of online training</li>
              <li>Complete assignments and final quiz</li>
              <li>Get Certified as a Cap Advisor</li>
              <li>Earn Commissions on every deal</li>
            </ol>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={trainingImage} alt="Training Process" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* EARNINGS & INCENTIVES */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-emerald-900">Earnings & Incentives</h2>
          <p className="text-lg mb-10 text-emerald-900">Unlock exciting rewards as you grow with CAP Academy.</p>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-900 rounded-2xl p-8 md:p-10 shadow-xl text-white text-center">
            <h3 className="text-2xl font-semibold mb-6">How You Earn</h3>
            <ul className="space-y-4 text-lg flex flex-col items-center">
              <li className="flex items-center gap-3"><FaCheckCircle className="text-emerald-300 text-xl" /><span>Incentive on every successful investment closure</span></li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-emerald-300 text-xl" /><span>Daily payout bonuses</span></li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-emerald-300 text-xl" /><span>Extra incentives for top performers</span></li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-emerald-300 text-xl" /><span>Monthly recognition & rewards</span></li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-emerald-300 text-xl" /><span>Long-term partnership opportunities with IqueCap</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-emerald-900">Success Stories</h2>
          <p className="text-lg text-gray-700 mb-12">Real stories from our top-performing CAP Advisors across India!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-500">
              <p className="text-lg text-gray-800 italic mb-4">"This program gave me financial freedom and purpose."</p>
              <p className="font-semibold text-emerald-700">— Suhara T, Kerala</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-500">
              <p className="text-lg text-gray-800 italic mb-4">"Cap Academy helped me gain confidence and income at the same time."</p>
              <p className="font-semibold text-emerald-700">— Mary Jemshy, Kerala</p>
            </div>
          </div>

          <div className="mt-12 bg-emerald-100 text-emerald-900 py-6 px-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold">You can be the next success story.</h3>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-emerald-900">Get in Touch</h2>
          <p className="text-lg text-gray-700">
            Reach out to us for any queries or support. We're here to help!
          </p>

          <div className="space-y-4 text-lg text-gray-800">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-emerald-600" />
              <a href="tel:+919035093820" className="hover:underline">
                +91 90350 93820
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-emerald-600" />
              <a
                href="mailto:capadvisormanager@iquecap.com"
                className="hover:underline"
              >
                capadvisormanager@iquecap.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaGlobe className="text-emerald-600" />
              <a
                href="https://iquecap.com/capacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.iquecap.com/capacademy
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-emerald-800 text-center">
            Contact Us
          </h3>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Preferred Language */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Language
              </label>
              <select
                name="language"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                {indianLanguages.map((lang, index) => (
                  <option key={index} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={contactSubmitting}
              className="w-full bg-emerald-700 text-white py-3 rounded-md font-semibold hover:bg-emerald-800 transition duration-200"
            >
              {contactSubmitting
                ? "Opening WhatsApp..."
                : "Contact Us on WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default CapAdvisor;