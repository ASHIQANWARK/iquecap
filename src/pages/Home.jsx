import React from "react";
import Hero from "../components/Hero";
import About from "../pages/About";
import MissionVision from "../pages/Mission";
import Chatbot from "../pages/Chatbot";
import Why from "../pages/why";
import Team from "../pages/Team";
import Faq from "../pages/Faq";
import PrivateEquity from "../pages/privateequity";
import Awards from "../pages/Awards";
import Testimonials from "../pages/Testimonials";

const Home = () => {
  return (
    <div className="bg-gradient-to-t from-emerald-950 to-teal-950 min-h-screen">
      <Hero />
      <About />
      <MissionVision />
      <Why />
      <Awards />
      <PrivateEquity />
      <Testimonials />
      <Team />
      <Faq />
      <Chatbot />
    </div>
  );
};

export default Home;
