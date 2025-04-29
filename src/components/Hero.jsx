import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import OrbitalAnimation from './OrbitalAnimation';
import DecorativeStars from './DecorativeStars';

const Hero = ({ name, title, institution }) => {
  // Create a reference to the element where Typed.js will be initialized
  const typedElementRef = useRef(null);
  const typedInstanceRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js when the component mounts
    if (typedElementRef.current) {
      // Define the colors for each role
      const roleColors = [
        '#ffd4e5', // Pink
        '#eecbff', // Purple
        '#dbdcff', // Light blue
        '#feffa3'  // Yellow
      ];
      
      // Create the typed instance with color changes
      typedInstanceRef.current = new Typed(typedElementRef.current, {
        strings: [
          'PhD student',
          'digital humanist',
          'web developer',
          'historical linguist'
        ],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        preStringTyped: (arrayPos) => {
          // Change the color of the text based on the current string position
          if (typedElementRef.current) {
            typedElementRef.current.style.color = roleColors[arrayPos % roleColors.length];
            // Also update cursor color to match
            const cursor = document.querySelector('.typed-cursor');
            if (cursor) cursor.style.color = roleColors[arrayPos % roleColors.length];
          }
        }
      });
    }

    // Clean up the Typed.js instance when the component unmounts
    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="hero">
      {/* Top and Bottom Lines */}
      <div className="hero-line top-line"></div>
      
      {/* 3D Orbital Animation Background */}
      <OrbitalAnimation />
      
      {/* Decorative Stars */}
      <DecorativeStars position="top-right" size="small" />
      <DecorativeStars position="bottom-left" size="medium" />
      
      {/* Hero Content */}
      <div className="hero-content">
        <h1>Hi! I'm {name}</h1>
        <h2>A <span ref={typedElementRef} className="typing"></span></h2>
      </div>
      
      {/* Bottom Line */}
      <div className="hero-line bottom-line"></div>
    </div>
  );
};

export default Hero;