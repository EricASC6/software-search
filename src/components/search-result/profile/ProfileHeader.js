import React from "react";
import "../../css/search-result/profile/profileHeader.css";

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <h2 className="user">EricASC6</h2>
      <a href="https://github.com/EricASC6" className="profile-link">
        <i className="fas fa-external-link-alt"></i>
      </a>
    </div>
  );
};

export default ProfileHeader;
