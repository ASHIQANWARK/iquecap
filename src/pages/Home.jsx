import React from "react";
import Hero from "../components/Hero";
import About from "../pages/About";
import MissionVision from "../pages/Mission";
import Chatbot from "../pages/Chatbot";
import Why from "../pages/why";
// import Team from "../pages/Team";
import Faq from "../pages/Faq";

import Awards from "../pages/Awards";
import Testimonials from "../pages/Testimonials";
import Founder from "./Founder";

const Home = () => {
  return (
    <div className=" min-h-screen">
      <Hero />
      <About />
      <MissionVision />
      <Why />
      <Awards />
      <Founder />
      <Testimonials />
      {/* <Team /> */}
      <Faq />
      <Chatbot />
    </div>
  );
};

export default Home;
