import React from 'react';

const ScrollIndicator = () => {
  const scrollToProfile = () => {
    const profileSection = document.getElementById('profile');
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-indicator" onClick={scrollToProfile}>
      <div className="scroll-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
          <path d="M12 17L4 9h16z" fill="currentColor"/>
        </svg>
      </div>
      <span className="scroll-text">Scroll Down</span>
    </div>
  );
};

export default ScrollIndicator;
