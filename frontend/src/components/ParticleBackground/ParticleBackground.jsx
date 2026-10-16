import React, { useState } from 'react';
import { generateParticles } from '../../utils/helpers';
import './ParticleBackground.css';

const ParticleBackground = () => {
  // Generate particle configurations once on mount using lazy initializer
  const [particles] = useState(() => generateParticles(20));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: particle.width,
            height: particle.height,
            left: particle.left,
            top: particle.top,
            animation: `float ${particle.animationDuration} infinite ease-in-out ${particle.animationDelay}`
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
