import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Automated Scheduling',
      description: 'AI-powered match scheduling and venue allocation',
      icon: '📅'
    },
    {
      title: 'Real-time Updates',
      description: 'Live scores, player stats, and match updates',
      icon: '⚡'
    },
    {
      title: 'Team Management',
      description: 'Complete team roster and player management',
      icon: '👥'
    },
    {
      title: 'Tournament Bracket',
      description: 'Automatic tournament bracket generation',
      icon: '🏆'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Performance analytics and insights',
      icon: '📊'
    },
    {
      title: 'Mobile App',
      description: 'Access management tools on the go',
      icon: '📱'
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl font-bold mb-6">Why Choose Our Management System?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Advanced features for efficient sports management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105 animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 animate-float">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
