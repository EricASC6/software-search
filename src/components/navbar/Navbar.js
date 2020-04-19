import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/navbar/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-container container">
          <div className="navbar-head">
            <Link to="/" className="navbar-head-logo">
              Software Search
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
