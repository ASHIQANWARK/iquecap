import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Clock, ArrowRight, Sparkles, Users, Target, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BgImage from "../assets/images/CAP1.jpg";

const Career = () => {
  const [activeJob, setActiveJob] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate jobs every 5 seconds
    const interval = setInterval(() => {
      setActiveJob((prev) => (prev + 1) % jobs.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const jobs = [
    {
      title: "Regional Manager - Kerala",
      description: "Lead our regional operations in Kerala, drive business growth, and manage client relationships with strategic leadership.",
      location: "Kochi, Kerala",
      type: "Full-time",
      experience: "5+ years"
    },
    {
      title: "HR Manager / HRBP",
      description: "Shape our people strategy, oversee recruitment, and support employee engagement while acting as a trusted business partner.",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "4+ years"
    },
    {
      title: "Digital Transformation Lead",
      description: "Drive innovation by leading digital initiatives, optimizing business processes, and ensuring seamless technology adoption.",
      location: "Bangalore / Remote",
      type: "Full-time",
      experience: "6+ years"
    },
  ];

  const benefits = [
    { icon: <Sparkles className="w-6 h-6" />, title: "Innovative Culture", description: "Work with cutting-edge technologies and methodologies" },
    { icon: <Users className="w-6 h-6" />, title: "Great Team", description: "Collaborate with talented, passionate professionals" },
    { icon: <Target className="w-6 h-6" />, title: "Growth Opportunities", description: "Clear career progression and development paths" },
    { icon: <Zap className="w-6 h-6" />, title: "Fast-Paced Environment", description: "Dynamic workplace with exciting challenges" },
  ];

  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSetzGv8lnuDvLRSEBWyUEpb3jT-XRFFfTbIqzvd_F8IX3n10g/viewform?usp=dialog";

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-medium"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section 
          className="relative min-h-[60vh] flex items-center justify-center px-4 py-16"
          style={{
            backgroundImage: `linear-gradient(rgba(5, 46, 22, 0.85), rgba(15, 23, 42, 0.9)), url(${BgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-emerald-900/50"></div>
          
          <motion.div 
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerChildren}
            className="relative z-10 max-w-6xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="flex items-center justify-center text-emerald-200 text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
              <ChevronRight className="mx-2 w-4 h-4" />
              <span className="text-white font-medium">Careers</span>
            </motion.div>

            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Build Your Career at <span className="text-emerald-400">Ique Cap</span>
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              We're in an exciting phase of growth and looking for ambitious, innovative professionals who want to make an impact.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3  text-white font-medium rounded-full hover:bg-emerald-600 transition-colors duration-300 flex items-center"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#open-positions"
                className="px-8 py-3 bg-transparent border border-emerald-500 text-emerald-300 font-medium rounded-full hover:bg-emerald-500/10 transition-colors duration-300"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join Ique Cap?</h2>
              <p className="text-lg text-emerald-200 max-w-2xl mx-auto">
                We offer more than just a job - we provide a platform for growth, innovation, and impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-slate-800/50 backdrop-blur-md p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-colors duration-300"
                >
                  <div className="text-emerald-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{benefit.title}</h3>
                  <p className="text-slate-300 text-center">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 px-4 bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Openings</h2>
              <p className="text-lg text-emerald-200 max-w-2xl mx-auto">
                Explore our available positions and find where you fit in our growing team.
              </p>
            </motion.div>

            {/* Desktop Job Listings */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-xl p-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-emerald-400">{job.title}</h3>
                    
                    <div className="flex items-center text-slate-300 text-sm mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    
                    <div className="flex items-center text-slate-300 text-sm mb-4">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type} • {job.experience}
                    </div>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">{job.description}</p>
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-5 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-300"
                  >
                    Apply Now
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Mobile Job Carousel */}
            <div className="md:hidden relative overflow-hidden mb-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeJob}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-emerald-400">{jobs[activeJob].title}</h3>
                    
                    <div className="flex items-center text-slate-300 text-sm mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {jobs[activeJob].location}
                    </div>
                    
                    <div className="flex items-center text-slate-300 text-sm mb-4">
                      <Clock className="w-4 h-4 mr-1" />
                      {jobs[activeJob].type} • {jobs[activeJob].experience}
                    </div>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">{jobs[activeJob].description}</p>
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-5 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-300"
                  >
                    Apply Now
                  </motion.a>
                </motion.div>
              </AnimatePresence>
              
              {/* Carousel indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {jobs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveJob(index)}
                    className={`w-3 h-3 rounded-full ${activeJob === index ? 'bg-emerald-500' : 'bg-slate-600'}`}
                    aria-label={`Go to job ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* General Application CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center  p-8 rounded-2xl border border-emerald-500/30"
            >
              <h3 className="text-2xl font-bold mb-4">Don't see your perfect role?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                We're always interested in meeting talented professionals. Send us your resume and we'll contact you when a suitable position opens up.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white font-medium rounded-full hover:bg-emerald-600 transition-colors duration-300"
              >
                Submit Your Resume
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture</h2>
              <p className="text-lg text-emerald-200 max-w-2xl mx-auto">
                At Ique Cap, we believe in fostering an environment where innovation thrives and people grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Collaboration",
                  description: "We work together across teams to achieve common goals and celebrate shared successes.",
                  color: "bg-emerald-500/20"
                },
                {
                  title: "Innovation",
                  description: "We encourage creative thinking and are always exploring new ways to solve problems.",
                  color: "bg-teal-500/20"
                },
                {
                  title: "Growth",
                  description: "We invest in our people's development and provide opportunities for continuous learning.",
                  color: "bg-sky-500/20"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-2xl ${item.color} border border-white/10 backdrop-blur-sm`}
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 ">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              Take the first step toward an exciting career at Ique Cap. Apply today and help us shape the future.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors duration-300 text-lg"
            >
              View All Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Career;