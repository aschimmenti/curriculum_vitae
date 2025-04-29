import React, { useState } from 'react';
import PublicationCard from '../components/PublicationCard';
import PageHeader from '../components/PageHeader';
import publicationsData from '../data/publications';
import profileData from '../data/profile';

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPublications = publicationsData.filter(publication => 
    publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    publication.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    publication.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
    publication.year.toString().includes(searchTerm)
  );
  
  return (
    <div className="publications">
      <PageHeader name={profileData.name} subtitle="Publications" />
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
    </div>
  );
};

export default Publications;