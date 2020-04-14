import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import ProfileBio from "./ProfileBio";
import "../../css/search-result/profile/profileCard.css";

const ProfileCard = ({ profile }) => {
  if (profile) {
    const {
      profileImgSrc,
      username,
      profileLink,
      name,
      location,
      email,
      publicRepos,
      followers,
      bio,
    } = profile;
    return (
      <div className="profile-card">
        <div className="profile-card-holder holder">
          <div className="profile-img">
            <img src={profileImgSrc} alt="" />
          </div>
          <div className="profile-info">
            <ProfileHeader username={username} profileLink={profileLink} />
            <ProfileStats
              name={name}
              location={location}
              email={email}
              publicRepos={publicRepos}
              followers={followers}
            />
            <ProfileBio bio={bio} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="profile-card">
        <div className="profile-card-holder holder">Loading...</div>
      </div>
    );
  }
};

export default ProfileCard;
