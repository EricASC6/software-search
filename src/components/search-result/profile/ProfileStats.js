import React from "react";
import "../../css/search-result/profile/profileStats.css";

const ProfileStats = () => {
  return (
    <div className="profile-stats">
      <div className="stats-col-1 stats-col">
        <div className="data-field" id="name">
          <i className="fas fa-user"></i>
          <p>Eric Chen</p>
        </div>
        <div className="data-field" id="location">
          <i className="fas fa-location-arrow"></i>
          <p>New York</p>
        </div>
        <div className="data-field" id="email">
          <i className="fas fa-envelope"></i>
          <p>eric@gmail.com</p>
        </div>
      </div>
      <div className="stats-col-2 stats-col">
        <div className="data-field" id="followers">
          <i className="fas fa-users"></i>
          <p>27</p>
        </div>
        <div className="data-field" id="repos">
          <i className="fas fa-user"></i>
          <p>100</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
