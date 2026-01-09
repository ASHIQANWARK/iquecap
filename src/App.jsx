import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";// <-- Updated
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import Team from './pages/Team';
import Contacts from './pages/Contact';
import ServicesSection from './pages/Services';
import PrivacyPolicy from './pages/Privacypolicy';
import CapAdvisor from './pages/Capadvisor';
import Career from './pages/Career';
import FAQSection from "./pages/Faq";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly when route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/capacademy" element={<CapAdvisor />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/faqs" element={<FAQSection />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
