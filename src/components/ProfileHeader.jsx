import React from 'react';

const ProfileHeader = ({ name, title, institution }) => {
  return (
    <div className="profile-header">
      <div className="profile-header-content">
        <h1>{name}</h1>
        <h2>{title} @{institution}</h2>
      </div>
    </div>
  );
};

export default ProfileHeader;
