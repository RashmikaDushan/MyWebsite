import React, { Component } from "react";
import "./Background.css";
import Stars from "./Stars.jsx";

class Background extends Component {
  render() {
    return (
      <div className="bg">
        <Stars />
      </div>
    );
  }
}

export default Background;
