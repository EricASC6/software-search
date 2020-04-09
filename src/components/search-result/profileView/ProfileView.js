import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import ProfileBio from "./ProfileBio";

const ProfileView = () => {
  return (
    <div className="profile-card">
      <div className="profile-img">
        <img
          src="https://avatars2.githubusercontent.com/u/52751341?s=460&v=4"
          alt=""
        />
      </div>
      <div className="profile-info">
        <ProfileHeader />
        <ProfileStats />
        <ProfileBio />
      </div>
    </div>
  );
};

export default ProfileView;
