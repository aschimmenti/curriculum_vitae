import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [position, setPosition] = useState('bottom');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Only add mousemove listener for non-mobile devices
    if (!isMobile) {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Define zones for different navbar positions
        const topZone = clientY < innerHeight * 0.2;
        // Remove bottom zone - navbar will not appear at bottom
        const leftZone = clientX < innerWidth * 0.2;
        const rightZone = clientX > innerWidth * 0.8;
        
        // Set position based on mouse location
        if (topZone) setPosition('top');
        else if (leftZone) setPosition('left');
        else if (rightZone) setPosition('right');
        // Default to top if no zone is detected
        else setPosition('top');
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', checkMobile);
      };
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <nav className={`navbar navbar-${position} ${isMobile ? 'navbar-mobile' : ''}`}>
      <div className={`navbar-icons ${position === 'left' || position === 'right' ? 'vertical' : 'horizontal'}`}>
        <a href="#home" className="nav-icon" title="Home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="currentColor"/>
          </svg>
        </a>
        <a href="#profile" className="nav-icon" title="Profile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
          </svg>
        </a>
        <a href="#publications" className="nav-icon" title="Publications">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;