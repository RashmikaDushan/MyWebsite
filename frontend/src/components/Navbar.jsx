import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <a>
          <span>Home</span>
        </a>
        <a>
          <span>Projects</span>
        </a>
        <a>
          <span>Contact</span>
        </a>
      </div>
    );
  }
}

export default Navbar;
