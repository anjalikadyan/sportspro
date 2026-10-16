import React, { useState } from 'react';
import { sports } from '../../utils/constants';
import './SportsSection.css';

const SportsSection = () => {
  const [activeSport, setActiveSport] = useState('football');

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl font-bold mb-6">Sports We Manage</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional management for various sports disciplines with dedicated teams and facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sports.map((sport, index) => (
            <div
              key={sport.id}
              className={`sport-card bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-orange-500 cursor-pointer ${
                activeSport === sport.id ? 'ring-2 ring-orange-500' : ''
              } animate-slideUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveSport(sport.id)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-6xl mb-4 animate-float">{sport.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{sport.name}</h3>
                <p className="text-gray-300 mb-6">{sport.description}</p>
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">{sport.matches}</div>
                    <div className="text-sm text-gray-400">Matches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">{sport.teams}</div>
                    <div className="text-sm text-gray-400">Teams</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
