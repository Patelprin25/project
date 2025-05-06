import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10', inverted = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Arya EarthTech Logo" 
        className="h-full"
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};

export default Logo;