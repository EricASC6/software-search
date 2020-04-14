import React from "react";
import "../../css/search-result/profile/profileBio.css";

const ProfileBio = ({ bio }) => {
  return (
    <div className="profile-bio">
      <div className="bio-header">
        <h2>Bio</h2>
      </div>
      <div className="bio-body">
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default ProfileBio;
