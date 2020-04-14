import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import "../css/navbar/Navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.toggleNavLinks = this.toggleNavLinks.bind(this);
    this.state = {
      navLinksVisible: false,
    };
  }

  toggleNavLinks() {
    this.setState({
      navLinksVisible: this.state.navLinksVisible ? false : true,
    });
  }

  render() {
    const { navLinksVisible } = this.state;
    const { toggleNavLinks } = this;

    return (
      <div className="navbar">
        <div className="navbar-container container">
          <div className="navbar-head">
            <Link to="/" className="navbar-head-logo">
              Software Search
            </Link>
          </div>
          <Hamburger
            toggleNavLinks={toggleNavLinks}
            toggled={navLinksVisible}
          />
          <NavLinks toggled={navLinksVisible} />
        </div>
      </div>
    );
  }
}

export default Navbar;
