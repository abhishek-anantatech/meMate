import React from "react";
import "./style.css";
const NextStep = (props) => {
  return (
    <div className="next-step">
      <h3>Take the</h3>
      <div className="next-title">
        <h1>next step</h1>
      </div>
      <div className="next-step-page-description">
        <p className="next-step-data">
          We believe in supporting Australian businesses.
        </p>
        <span className="next-step-data-description">
          Right now, we’re offering zero onboarding and migration fees for every
          legitimate Australian company.
        </span>
      </div>
      <div className="next-step-btn-container">
        <button>{props.text}</button>
      </div>
    </div>
  );
};

export default NextStep;
