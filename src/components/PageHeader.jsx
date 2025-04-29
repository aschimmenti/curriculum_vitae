import React from 'react';
import DecorativeStars from './DecorativeStars';

const PageHeader = ({ name, subtitle }) => {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="page-header-name">{name}</h1>
        <h2 className="page-header-subtitle">{subtitle}</h2>
        <div className="page-header-line"></div>
      </div>
      <DecorativeStars position="top-right" size="small" />
      <DecorativeStars position="bottom-left" size="small" />
    </div>
  );
};

export default PageHeader;
