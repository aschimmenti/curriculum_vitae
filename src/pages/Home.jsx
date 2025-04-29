import React from 'react';
import Hero from '../components/Hero';
import profileData from '../data/profile';
import watermelonSvg from '../components/watermelon.svg';

const Home = () => {
  return (
    <div>
      <Hero 
        name={profileData.name} 
        title={profileData.title} 
        institution={profileData.institution} 
      />
      
      <div className="container">
        <div className="contact-section">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>{profileData.email}</span>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <span>{profileData.github}</span>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <span>{profileData.linkedin}</span>
            </div>
          </div>
        </div>
        
        <div className="bio-section" style={{ marginTop: '40px', textAlign: 'center' }}>
          <h2>About Me</h2>
          <p style={{ maxWidth: '800px', margin: '20px auto', lineHeight: '1.8' }}>
            {profileData.bio}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
            <img src={watermelonSvg} alt="Free Palestine" style={{ height: '40px' }} title="Free Palestine" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;