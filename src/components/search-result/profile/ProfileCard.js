import React from "react";
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
            <div className="profile-header">
              <h2 className="user">{username}</h2>
              <a href={profileLink} className="profile-link" target="__blank">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>

            <div className="profile-stats">
              <div className="stats-col-1 stats-col">
                <div className="data-field" id="name">
                  <i className="fas fa-user"></i>
                  <p>{name}</p>
                </div>
                <div className="data-field" id="location">
                  <i className="fas fa-location-arrow"></i>
                  <p>{location}</p>
                </div>
                <div className="data-field" id="email">
                  <i className="fas fa-envelope"></i>
                  <p>{email}</p>
                </div>
              </div>
              <div className="stats-col-2 stats-col">
                <div className="data-field" id="followers">
                  <i className="fas fa-users"></i>
                  <p>{followers}</p>
                </div>
                <div className="data-field" id="repos">
                  <i className="fas fa-user"></i>
                  <p>{publicRepos}</p>
                </div>
              </div>
            </div>

            <div className="profile-bio">
              <div className="bio-header">
                <h2>Bio</h2>
              </div>
              <div className="bio-body">
                <p>{bio}</p>
              </div>
            </div>
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
