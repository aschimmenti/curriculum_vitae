import React, { useState } from 'react';

const PublicationCard = ({ publication }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="publication-card">
      <h3>{publication.title}</h3>
      <p><strong>Authors:</strong> {publication.authors}</p>
      <p><strong>Journal/Conference:</strong> {publication.journal}</p>
      <p><strong>Year:</strong> {publication.year}</p>
      <p><strong>DOI:</strong> {publication.doi}</p>
      
      {expanded ? (
        <>
          <p><strong>Abstract:</strong> {publication.abstract}</p>
          <button 
            className="btn" 
            onClick={() => setExpanded(false)}
            style={{ marginTop: '10px', background: '#555' }}
          >
            Show Less
          </button>
        </>
      ) : (
        <button 
          className="btn" 
          onClick={() => setExpanded(true)}
          style={{ marginTop: '10px' }}
        >
          Show Abstract
        </button>
      )}
    </div>
  );
};

export default PublicationCard;