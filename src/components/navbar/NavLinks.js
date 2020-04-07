import React from "react";
import "../css/navbar/NavLinks.css";

const NavLinks = ({ toggled }) => {
  console.log(toggled);
  return (
    <div className={`navbar-links ${toggled ? "visible" : ""}`}>
      <ul className="navbar-links-list">
        <li className="navbar-link" key="repos-link">
          <button>Repos</button>
        </li>
        <li className="navbar-link" key="users-link">
          <button>Users</button>
        </li>
        <li className="navbar-link" key="corporations-link">
          <button>Corporations</button>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
