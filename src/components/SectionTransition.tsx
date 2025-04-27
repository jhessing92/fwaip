import React from 'react';
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  fromColor: string;
  toColor: string;
  direction: 'top' | 'bottom';
  className?: string;
  pattern?: 'wave' | 'curve' | 'angle' | 'zigzag' | 'none';
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  fromColor,
  toColor,
  direction,
  className = '',
  pattern = 'curve'
}) => {
  // Different SVG paths for different transition patterns
  const patterns = {
    wave: 'M0,96L80,85.3C160,75,320,53,480,74.7C640,96,800,160,960,170.7C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z',
    curve: 'M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,133.3C1120,128,1280,160,1360,176L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z',
    angle: 'M0,160L1440,0L1440,0L0,0Z',
    zigzag: 'M0,160L60,144C120,128,240,96,360,80C480,64,600,64,720,80C840,96,960,128,1080,133.3C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z',
    none: ''
  };

  const getTransformStyle = () => {
    return direction === 'top' ? 'rotate(180deg)' : '';
  };

  // For the "none" pattern or between Hero and Features section, 
  // use a simple gradient transition without SVG animations
  if (pattern === 'none' || (fromColor === "#001219" && toColor === "#ffffff")) {
    return (
      <div 
        className={`h-24 ${className}`}
        style={{ 
          background: `linear-gradient(to ${direction === 'top' ? 'bottom' : 'top'}, ${fromColor}, ${toColor})`
        }}
      ></div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ height: pattern === 'angle' ? '7rem' : '6rem' }}>
      <div className="absolute inset-0" style={{ background: fromColor }}></div>
      <svg
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="0 0 1440 200"
        className="absolute bottom-0 w-full"
        style={{ transform: getTransformStyle(), filter: 'drop-shadow(0 -1px 2px rgba(0,0,0,0.03))' }}
      >
        <path
          fill={toColor}
          d={patterns[pattern]}
        ></path>
      </svg>
    </div>
  );
}; 