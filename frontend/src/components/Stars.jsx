import React from "react";
import "./Stars.css";

const Stars = () => {
  const starCount = 20;
  const stars = [];

  for (let i = 0; i < starCount; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight * 1.3;

    stars.push(<div key={i} className="star" style={{ top: y, left: x }} />);
  }

  const star2Count = 100;
  const stars2 = [];

  for (let i = 0; i < star2Count; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight * 1.3;

    stars2.push(<div key={i} className="star2" style={{ top: y, left: x }} />);
  }

  const star3Count = 200;
  const stars3 = [];

  for (let i = 0; i < star3Count; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight * 1.3;

    stars3.push(<div key={i} className="star3" style={{ top: y, left: x }} />);
  }

  return (
    <div className="bg">
      <div>{stars}</div>
      <div>{stars2}</div>
      <div>{stars3}</div>
    </div>
  );
};

export default Stars;
