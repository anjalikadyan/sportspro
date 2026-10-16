import React from 'react';
import { images } from '../../utils/constants';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl font-bold mb-6">About Our Management System</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            A complete solution for managing all aspects of sports organization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={images.stadium}
                alt="Stadium Management"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white">Professional Management</h3>
                <p className="text-gray-300">State-of-the-art facilities and management</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">What We Manage</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Tournament scheduling and organization</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Team registration and management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Player statistics and performance tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Venue booking and facility management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Live match updates and score tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Key Features</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-900/50 rounded-xl">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="font-semibold">Analytics</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-xl">
                  <div className="text-3xl mb-2">📅</div>
                  <div className="font-semibold">Scheduling</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-xl">
                  <div className="text-3xl mb-2">👥</div>
                  <div className="font-semibold">Team Management</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-xl">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="font-semibold">Tournaments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
