import React, { useState } from 'react';
import Hero from '../components/Hero';
import PublicationCard from '../components/PublicationCard';
import DecorativeStars from '../components/DecorativeStars';
import profileData from '../data/profile';
import publicationsData from '../data/publications';
import watermelonSvg from '../components/watermelon.svg';

const SinglePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPublications = publicationsData.filter(publication => 
    publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    publication.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    publication.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
    publication.year.toString().includes(searchTerm)
  );

  return (
    <div className="single-page">
      {/* Home Section */}
      <section id="home" className="section">
        <Hero 
          name={profileData.name} 
          title={profileData.title} 
          institution={profileData.institution} 
        />
      </section>

      {/* Detailed Profile Section */}
      <section id="profile" className="section">
        <h1 className="section-title">Profile</h1>
        
        <div className="container">
          {/* Profile Overview Section */}
          <div className="profile-overview">
            <div className="profile-picture-container">
              <img src={profileData.profilePicture} alt={profileData.name} className="profile-picture" />
            </div>
            
            <div className="profile-details">
              <h2 style={{ display: 'flex', alignItems: 'center' }}>
                {profileData.name}
                <img src={watermelonSvg} alt="Watermelon" style={{ height: '30px', marginLeft: '10px' }} />
              </h2>
              <p className="profile-title">{profileData.title} at {profileData.institution}</p>
              <p className="profile-department">{profileData.department}</p>
              <p className="profile-center">{profileData.researchCenter}</p>
              <p className="profile-location"><i className="fas fa-map-marker-alt"></i> {profileData.location}</p>
              
              <div className="profile-contact">
                <a href={`mailto:${profileData.email}`} className="contact-link"><i className="fas fa-envelope"></i> Email</a>
                <a href={`https://${profileData.github}`} target="_blank" rel="noopener noreferrer" className="contact-link"><i className="fab fa-github"></i> GitHub</a>
                <a href={`https://${profileData.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link"><i className="fab fa-linkedin"></i> LinkedIn</a>
                <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="contact-link"><i className="fas fa-globe"></i> Website</a>
              </div>
            </div>
          </div>
          
          {/* Bio & Timeline Section */}
          <div className="profile-section bio-timeline-section">
            <h2>About Me</h2>
            <p className="bio-text">{profileData.bio}</p>

            <div className="timeline">
              {profileData.timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Research Areas Section */}
          <div className="profile-section">
            <h2>Research Areas</h2>
            <div style={{ position: 'relative' }}>
              <DecorativeStars position="top-right" size="small" color="#ffb6c1" />
            </div>
            <div className="research-areas">
              {profileData.researchAreas.map((area, index) => (
                <div key={index} className="research-area-item" id={area.url.substring(1)}>
                  <h3>
                    {area.area.split(',').map((part, i) => (
                      <span key={i}>
                        {i > 0 && <span className="comma">,</span>}
                        <span className={`highlight-${i % 3}`}>{part.trim()}</span>
                      </span>
                    ))}
                  </h3>
                  <p>{area.details}</p>
                  <div className="research-links">
                    {area.links.map((link, i) => (
                      <a key={i} href={area.url} className="more-link">{link}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Projects Section */}
          <div className="profile-section">
            <h2>Projects</h2>
            <div style={{ position: 'relative' }}>
              <DecorativeStars position="bottom-left" size="small" color="#feffa3" />
            </div>
            <div className="projects-grid">
              {profileData.projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <p className="project-year">{project.year}</p>
                  <p className="project-description">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Teaching Section */}
          {profileData.teaching && profileData.teaching.length > 0 && (
            <div className="profile-section">
              <h2>Teaching</h2>
              <div style={{ position: 'relative' }}>
                <DecorativeStars position="middle-right" size="small" color="#c6e5ff" />
              </div>
              <div className="teaching-list">
                {profileData.teaching.map((item, index) => (
                  <div key={index} className="teaching-item">
                    <h3>{item.title}</h3>
                    <p className="teaching-institution">{item.institution}</p>
                    <p className="teaching-period">{item.period}</p>
                    <p className="teaching-description">{item.description}</p>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="course-link">
                        View Course <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Education Section */}
          <div className="profile-section">
            <h2>Education</h2>
            <div style={{ position: 'relative' }}>
              <DecorativeStars position="top-right" size="small" color="#dbdcff" />
            </div>
            <div className="education-list">
              {profileData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-content">
                    <h3>{edu.degree}</h3>
                    <p className="education-institution">{edu.institution}, <span className="education-year">{edu.year}</span></p>
                    <p className="education-description">{edu.description}</p>
                    <a href={edu.courseLink} target="_blank" rel="noopener noreferrer" className="course-link">
                      View Course <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                  <div className="education-image-container">
                    {edu.image && (
                      <img 
                        src={edu.image} 
                        alt={`${edu.degree} at ${edu.institution}`} 
                        className="education-image" 
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = '/images/placeholder-education.jpg'; 
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills & Languages Section */}
          <div className="profile-columns">
            <div className="profile-section skills-section">
              <h2>Skills</h2>
              <ul className="skills-list">
                {profileData.skills.map((skill, index) => (
                  <li key={index} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="profile-section languages-section">
              <h2>Languages</h2>
              <ul className="languages-list">
                {profileData.languages.map((lang, index) => (
                  <li key={index} className="language-item">
                    <span className="language-name">{lang.language}</span>
                    <span className="language-level">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Interests Section */}
          <div className="profile-section">
            <h2>Research Interests</h2>
            <div className="interests-container">
              {profileData.interests.map((interest, index) => (
                <div key={index} className="interest-tag">{interest}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Publications Section */}
      <section id="publications" className="section">
        <h1 className="section-title">Publications</h1>
        <div className="container">
          <p>Browse my academic publications and research papers.</p>
          
          <div style={{ marginTop: '20px', marginBottom: '30px' }}>
            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '10px',
                width: '100%',
                maxWidth: '400px',
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}
            />
          </div>
          
          <div className="publications-grid">
            {filteredPublications.length > 0 ? (
              filteredPublications.map(publication => (
                <PublicationCard key={publication.id} publication={publication} />
              ))
            ) : (
              <p>No publications found matching your search criteria.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;
