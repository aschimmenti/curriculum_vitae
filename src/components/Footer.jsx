import React from 'react';
import profileData from '../data/profile';
import watermelonSvg from './watermelon.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="contact-section">
            <h3>Contact Information</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${profileData.email}`} className="contact-link">{profileData.email}</a>
              </div>
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <a href={`https://${profileData.github}`} target="_blank" rel="noopener noreferrer" className="contact-link">{profileData.github}</a>
              </div>
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <a href={`https://${profileData.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link">{profileData.linkedin}</a>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
              <img src={watermelonSvg} alt="Free Palestine" style={{ height: '30px' }} title="Free Palestine" />
            </div>
          </div>
          <p className="copyright">&copy; {currentYear} Andrea Schimmenti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;