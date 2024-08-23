import React from "react";
import "./style.css";
const NextStep = (props) => {
  return (
    <div className="next-step">
      <h3>Take the</h3>
      <div className="next-title">
        <h1>next step</h1>
      </div>
      <div className="next-step-btn-container">
        <button>{props.text}</button>
      </div>
    </div>
  );
};

export default NextStep;
