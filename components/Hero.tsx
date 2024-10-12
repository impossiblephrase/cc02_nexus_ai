import React from 'react';
import HeroContent from './HeroContent';

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/touch2.webp')" }}
    >
      {/* Optional: Overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Content */}
      <HeroContent />
    </div>
  );
};

export default Hero;
