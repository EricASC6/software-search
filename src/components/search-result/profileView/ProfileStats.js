import React from "react";

const ProfileStats = () => {
  return (
    <div className="profile-stats">
      <div className="data-field" id="name">
        <i className="fas fa-user"></i>
        <p>Eric Chen</p>
      </div>
      <div className="data-field" id="name">
        <i className="fas fa-location-arrow"></i>
        <p>New York</p>
      </div>
      <div className="data-field" id="name">
        <i className="fas fa-envelope"></i>
        <p>eric@gmail.com</p>
      </div>
      <div className="data-field" id="name">
        <i className="fas fa-users"></i>
        <p>27</p>
      </div>
      <div className="data-field" id="name">
        <i className="fas fa-user"></i>
        <p>100</p>
      </div>
    </div>
  );
};

export default ProfileStats;
