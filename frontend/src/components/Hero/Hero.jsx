import React, { useState, useEffect } from 'react';
import { images, targetCounters } from '../../utils/constants';
import './Hero.css';

const Hero = () => {
  const [counters, setCounters] = useState({
    players: 0,
    matches: 0,
    tournaments: 0,
    coaches: 0
  });

  // Counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        players: Math.min(prev.players + 25, targetCounters.players),
        matches: Math.min(prev.matches + 8, targetCounters.matches),
        tournaments: Math.min(prev.tournaments + 2, targetCounters.tournaments),
        coaches: Math.min(prev.coaches + 3, targetCounters.coaches)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90"
        style={{
          backgroundImage: `url(${images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-slideUp">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-white">SPORTS</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500 animate-gradient">
              MANAGEMENT
            </span>
            <br />
            <span className="text-white text-4xl md:text-6xl">SYSTEM</span>
          </h1>

          <p className="text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            Comprehensive platform for organizing, managing, and tracking sports events,
            tournaments, teams, and player performance across multiple sports disciplines.
          </p>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slideUp" style={{ animationDelay: '1s' }}>
          {Object.entries(counters).map(([key, value]) => (
            <div key={key} className="text-center bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="counter text-5xl md:text-6xl font-bold mb-3">
                {value}+
              </div>
              <div className="text-orange-400 uppercase text-sm tracking-wider font-semibold">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
