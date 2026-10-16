import React from 'react';
import ParticleBackground from '../components/ParticleBackground/ParticleBackground';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import AboutSection from '../components/AboutSection/AboutSection';
import MatchesSlider from '../components/MatchesSlider/MatchesSlider';
import SportsSection from '../components/SportsSection/SportsSection';
import TournamentsSection from '../components/TournamentsSection/TournamentsSection';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import Footer from '../components/Footer/Footer';
import '../styles/globals.css';

const SportsHomePage = ({ onSwitchToLogin, onSwitchToRegister }) => {
  return (
    <div className="relative">
      <ParticleBackground />
      <Header />
      <Hero />
      <AboutSection />
      <MatchesSlider />
      <SportsSection />
      <TournamentsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default SportsHomePage;
