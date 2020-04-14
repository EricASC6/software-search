import React from "react";
import "../css/navbar/Hamburger.css";

const Hamburger = ({ toggled, toggleNavLinks }) => {
  return (
    <div
      className={`hamburger ${toggled ? "toggled" : ""}`}
      onClick={toggleNavLinks}
    >
      <div className="line line1"></div>
      <div className="line line2"></div>
      <div className="line line3"></div>
    </div>
  );
};

export default Hamburger;
