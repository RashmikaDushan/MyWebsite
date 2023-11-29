import React, { Component } from "react";
import "./Header.css";
import profile from "../assets/Dushan_square.jpg";

class Header extends Component {
  render() {
    return (
      <div className="head">
        <div className="container">
          <div className="texts">
            <div className="caption">Hola...</div>
            <p>
              I'm Rashmika Dushan. Highly passionated Computer Science and
              Engineering undergraduate from University of Moratuwa.
            </p>
          </div>
          <img src={profile} className="profile" />
        </div>
      </div>
    );
  }
}

export default Header;
