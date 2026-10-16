import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Trophy, Users, MapPin } from 'lucide-react';
import { upcomingMatches, images } from '../../utils/constants';
import './MatchesSlider.css';

const MatchesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide for upcoming matches
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % upcomingMatches.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % upcomingMatches.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + upcomingMatches.length) % upcomingMatches.length);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="text-4xl font-bold mb-4">Upcoming Matches</h2>
          <p className="text-gray-400">Don't miss these exciting matches</p>
        </div>

        <div className="relative animate-slideUp" style={{ animationDelay: '0.3s' }}>
          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Match Slider */}
          <div className="relative h-96 rounded-3xl overflow-hidden">
            {upcomingMatches.map((match, index) => (
              <div
                key={match.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                <img
                  src={images[match.sport.toLowerCase()]}
                  alt={match.sport}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-3xl mx-auto px-12">
                    <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <Trophy className="text-orange-400" size={24} />
                          <span className="text-orange-400 font-semibold">{match.league}</span>
                        </div>
                        <span className="px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                          {match.sport}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-8">
                        <div className="text-center">
                          <div className="text-5xl mb-2">{match.team1.logo}</div>
                          <h3 className="text-2xl font-bold">{match.team1.name}</h3>
                        </div>

                        <div className="text-center px-8">
                          <div className="text-3xl font-bold text-orange-400">VS</div>
                          <div className="mt-4">
                            <div className="flex items-center gap-2 text-gray-400">
                              <Calendar size={16} />
                              <span>{match.date}</span>
                            </div>
                            <div className="text-xl font-bold mt-2">{match.time}</div>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="text-5xl mb-2">{match.team2.logo}</div>
                          <h3 className="text-2xl font-bold">{match.team2.name}</h3>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-6 text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{match.venue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} />
                          <span>{match.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {upcomingMatches.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-orange-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchesSlider;
