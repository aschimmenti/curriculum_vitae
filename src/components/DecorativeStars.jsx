import React from 'react';

const DecorativeStars = ({ position = 'top-right', color = '#000000', size = 'medium' }) => {
  // Define size values
  const sizeValues = {
    small: { width: '80px', height: '80px' },
    medium: { width: '120px', height: '120px' },
    large: { width: '160px', height: '160px' }
  };

  // Define position styles
  const positionStyles = {
    'top-right': { top: '20px', right: '20px' },
    'top-left': { top: '20px', left: '20px' },
    'bottom-right': { bottom: '20px', right: '20px' },
    'bottom-left': { bottom: '20px', left: '20px' },
    'middle-right': { top: '50%', right: '20px', transform: 'translateY(-50%)' },
    'middle-left': { top: '50%', left: '20px', transform: 'translateY(-50%)' }
  };

  // Get the current size and position
  const currentSize = sizeValues[size] || sizeValues.medium;
  const currentPosition = positionStyles[position] || positionStyles['top-right'];

  return (
    <div 
      className="decorative-stars"
      style={{ 
        position: 'absolute',
        zIndex: 1,
        ...currentPosition,
        ...currentSize,
        opacity: 0.7,
        pointerEvents: 'none'
      }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        {/* Star 1 - 8-point star (top left) */}
        <path 
          d="M60,40 L64,58 L80,50 L70,65 L85,75 L68,78 L70,95 L60,82 L50,95 L52,78 L35,75 L50,65 L40,50 L56,58 Z" 
          fill={color} 
        />
        
        {/* Star 2 - 5-point star (top right) */}
        <path 
          d="M140,45 L147,65 L168,65 L151,78 L158,98 L140,86 L122,98 L129,78 L112,65 L133,65 Z" 
          fill={color} 
        />
        
        {/* Star 3 - 4-point diamond star (bottom left) */}
        <path 
          d="M60,120 L70,140 L60,160 L50,140 Z" 
          fill={color} 
        />
        
        {/* Star 4 - 12-point star (bottom right) */}
        <path 
          d="M140,120 L143,130 L153,133 L145,140 L153,147 L143,150 L140,160 L137,150 L127,147 L135,140 L127,133 L137,130 Z" 
          fill={color} 
        />
      </svg>
    </div>
  );
};

export default DecorativeStars;
