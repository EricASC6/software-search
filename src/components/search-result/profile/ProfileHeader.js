import React from "react";
import "../../css/search-result/profile/profileHeader.css";

const ProfileHeader = ({ username, profileLink }) => {
  return (
    <div className="profile-header">
      <h2 className="user">{username}</h2>
      <a href={profileLink} className="profile-link">
        <i className="fas fa-external-link-alt"></i>
      </a>
    </div>
  );
};

export default ProfileHeader;
