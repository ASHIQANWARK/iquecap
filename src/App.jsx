import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Replace BrowserRouter with HashRouter
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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/capacademy" element={< CapAdvisor />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;