import React from "react";
import { motion } from "framer-motion";
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
} from "react-icons/fa";
import heroBg from "../assets/images/acad1.png";
import trainingImage from "../assets/images/img11.jpg";
import cardIqueCap from "../assets/images/CAP3.jpg";
import cardOnline from "../assets/images/online.jpg";
import programImg from "../assets/images/img14.jpg";

const CapAdvisor = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="pt-28 w-full bg-gradient-to-br from-emerald-700 to-emerald-800 text-white pb-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight drop-shadow-lg">
              CAP Academy
            </h1>
            <h2 className="text-2xl sm:text-3xl italic font-light text-emerald-300">
              Learn. Earn. Grow.
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed space-y-2">
              Empowering India’s Next Generation of Investment Advisors. <br />
              Become a certified Cap Advisor and connect investors to India’s
              top startups. <br />
              <br />
              Whether you're a student, working professional, or aspiring
              entrepreneur, CAP Academy equips you with the skills to thrive in
              the world of private markets. <br />
              Through structured training, real-world exposure, and mentorship,
              we help you become a trusted financial guide for others — while
              building your own path to financial growth.
            </p>

            <div className="pt-4">
              <a
                href="https://forms.gle/5ydJrcSRdT59B2Zm8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-emerald-800 font-semibold px-6 py-3 rounded-xl shadow hover:bg-emerald-100 transition">
                  Join as Advisor
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img src={heroBg} alt="CAP Academy" className="w-full max-w-md  " />
          </motion.div>
        </div>
      </section>
      {/* Breadcrumb Section */}
      <div className="bg-white py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto text-sm text-gray-600 font-medium">
          <span className="text-emerald-700 hover:underline cursor-pointer">
            Home
          </span>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Cap Academy</span>
        </div>
      </div>
      {/* About CAP Academy */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-emerald-900">
          About CAP Academy
        </h2>

        <div className="text-lg text-gray-800 max-w-3xl mx-auto space-y-6 text-justify">
          <p className="font-semibold text-2xl text-center text-black">
            CAP Academy is an initiative by IqueCap to create India’s largest
            network of trained and certified Cap Advisors.
          </p>

          <p>
            Our mission is to empower individuals—especially from Tier 2 and
            Tier 3 cities—with essential skills and knowledge in finance,
            startups, and investments. Through our structured training programs,
            we aim to bridge the knowledge gap and open doors to professional
            opportunities in the startup and investor ecosystem.
          </p>

          <h3 className="text-3xl font-bold text-center text-emerald-800">
            What This Means for You
          </h3>

          <p>
            India's startup economy is going mainstream. Just like stock brokers
            helped people invest in public markets, Cap Advisors will help
            thousands invest in private markets—unlocking new opportunities for
            wealth creation and professional growth.
          </p>

          <h3 className="text-3xl font-bold text-center text-emerald-800">
            India's Startup Growth in Numbers
          </h3>

          <ul className="list-disc pl-6 space-y-2">
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

          <h3 className="text-3xl font-bold text-center text-emerald-800">
            The Power of Investing in Startups
          </h3>

          <p>
            <strong>From Using Startups to Growing With Them:</strong> We use
            startups every day—to shop, travel, learn, and pay. But few people
            know that they can also participate in the early journey of these
            game-changing companies.
          </p>

          <h3 className="text-3xl font-bold text-center text-emerald-800">
            The IqueCap Advantage
          </h3>

          <h4 className="text-2xl font-bold text-center text-emerald-700">
            With IqueCap, You Get:
          </h4>

          <ul className="list-disc pl-6 space-y-2">
            <li>Access to vetted startup deals</li>
            <li>Structured investment process</li>
            <li>Support from trained Cap Advisors</li>
            <li>Transparent updates and reports</li>
          </ul>
        </div>

        {/* Visual Cards */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {/* Card 1 */}
            <div
              className="aspect-square bg-cover bg-center text-white rounded-xl shadow-lg p-6 text-center relative"
              style={{ backgroundImage: `url(${cardIqueCap})` }}
            >
              <div className="absolute inset-0 bg-black/40 bg-opacity-60 rounded-xl" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <p className="font-bold text-2xl sm:text-3xl">
                  Backed by IqueCap
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="aspect-square bg-cover bg-center text-white rounded-xl shadow-lg p-6 text-center relative"
              style={{ backgroundImage: `url(${cardOnline})` }}
            >
              <div className="absolute inset-0 bg-black/40 bg-opacity-60 rounded-xl" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <p className="font-bold text-2xl sm:text-3xl">
                  Fully Online, Easy-to-Learn Format
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Become a CAP Advisor */}
      <section className="py-16 px-6 bg-white  m  ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-emerald-900">
            Why Become a Cap Advisor?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-900 p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-transparent text-white rounded-md mb-4">
                <FaHome className="text-4xl" />
              </div>
              <p className="text-lg font-medium text-white">
                Work from home and be your own boss
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-900 p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-transparent text-white rounded-md mb-4">
                <FaCertificate className="text-4xl" />
              </div>
              <p className="text-lg font-medium text-white">
                Get certified by a professional platform
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-900 p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-transparent text-white rounded-md mb-4">
                <FaRocket className="text-4xl" />
              </div>
              <p className="text-lg font-medium text-white">
                Access exclusive investment opportunities
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-900 p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-transparent text-white rounded-md mb-4">
                <FaHandHoldingUsd className="text-4xl" />
              </div>
              <p className="text-lg font-medium text-white">
                Help others grow their wealth
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-900 p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-transparent text-white rounded-md mb-4">
                <FaInfinity className="text-4xl" />
              </div>
              <p className="text-lg font-medium text-white">
                Unlimited earning potential
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-900 p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-transparent text-white rounded-md mb-4">
                <FaFlag className="text-4xl" />
              </div>
              <p className="text-lg font-medium text-white">
                Be part of India’s startup growth story
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Program Highlights */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Centered Heading */}
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald-900">
            Program Highlights
          </h2>

          {/* Two-column grid: image + content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Left Side - Image */}
            <div className="w-full h-full">
              <img
                src={programImg}
                alt="Program Highlights"
                className="rounded-xl w-full max-h-[400px] object-cover "
              />
            </div>

            {/* Right Side - Text Content */}
            <div className="flex flex-col justify-center">
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
                <li>25-day intensive online training</li>
                <li>Live and recorded sessions for flexibility</li>
                <li>
                  Learn basics of investment, startups, and pitch evaluation
                </li>
                <li>Guidance on lead generation and investor handling</li>
                <li>Real-time support and feedback from mentors</li>
                <li>Interactive quizzes,case studies,and practice decks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Training and Certification Flow */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-emerald-900">
              Training & Certification Flow
            </h2>
            <ol className="space-y-4 list-decimal pl-6 text-lg text-gray-700">
              <li>Register and Pay Rs.10,000</li>
              <li>Attend 25 days of online training</li>
              <li>Complete assignments and final quiz</li>
              <li>Get Certified as a Cap Advisor</li>
              <li>Earn Commissions on every deal </li>
            </ol>
          </div>

          {/* Right - Image */}
          <div>
            <img
              src={trainingImage}
              alt="Training Process"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* Earnings and Incentives */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-emerald-900">
            Earnings & Incentives
          </h2>
          <p className="text-lg mb-10 text-emerald-900">
            Unlock exciting rewards as you grow with CAP Academy.
          </p>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-900 rounded-2xl p-8 md:p-10 shadow-xl text-white text-center">
            <h3 className="text-2xl font-semibold mb-6">How You Earn</h3>
            <ul className="space-y-4 text-lg flex flex-col items-center">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-300 text-xl" />
                <span>Incentive on every successful investment closure</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-300 text-xl" />
                <span>Daily payout bonuses</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-300 text-xl" />
                <span>Extra incentives for top performers</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-300 text-xl" />
                <span>Monthly recognition & rewards</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-300 text-xl" />
                <span>Long-term partnership opportunities with IqueCap</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Success Stories (placeholder until real stories added) */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-emerald-900">
            Success Stories
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Real stories from our top-performing CAP Advisors across India!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-500">
              <p className="text-lg text-gray-800 italic mb-4">
                "This program gave me financial freedom and purpose."
              </p>
              <p className="font-semibold text-emerald-700">
                — Suhara T, Kerala
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-500">
              <p className="text-lg text-gray-800 italic mb-4">
                "Cap Academy helped me gain confidence and income at the same
                time."
              </p>
              <p className="font-semibold text-emerald-700">
                — Mary Jemshy, Kerala
              </p>
            </div>
          </div>

          {/* Final Motivational Quote */}
          <div className="mt-12 bg-emerald-100 text-emerald-900 py-6 px-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold">
              You can be the next success story.
            </h3>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-emerald-900">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700">
              Reach out to us for any queries or support. We’re here to help!
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
                  href="https://www.capacademy.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.capacademy.in
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-800 text-center">
              Contact Us
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const email = e.target.email.value;
                const phone = e.target.phone.value;
                const message = `Hello, I'm ${name}. My email is ${email} and my phone number is ${phone}. I would like to know more about CAP Academy.`;
                const url = `https://wa.me/919035093820?text=${encodeURIComponent(
                  message
                )}`;
                window.open(url, "_blank");
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-700 text-white py-3 rounded-md font-semibold hover:bg-emerald-800 transition duration-200"
              >
                Contact Us on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapAdvisor;
