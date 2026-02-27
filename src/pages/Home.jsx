import React from "react";
import Hero from "../components/Hero";
import About from "../pages/About";
import MissionVision from "../pages/Mission";
import Chatbot from "../pages/Chatbot";
import Why from "../pages/why";
// import Team from "../pages/Team";


import Awards from "../pages/Awards";
import Testimonials from "../pages/Testimonials";

// import BranchesSection from "./Branches";



const Home = () => {
  return (
    <div className=" min-h-screen ">
      <Hero />
      {/* <BranchesSection /> */}
      
      <Awards />
      <Why />
      <Testimonials />
      {/* <Team /> */}
      
      <Chatbot />
    </div>
  );
};

export default Home;
