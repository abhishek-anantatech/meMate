import React from "react";
import "./style.css";
const FeatureCard = (props) => {
  return (
    <>
      <div className="all-in-one">
        <div className="strean-line">
          <div className="main-operation">
            <div className="operation-left">
              <p className="all-text">{props.subHeading}</p>
              <h2>{props.topHeading}</h2>
              <h1>{props.mainHeading}</h1>

              <div className="operation-desp">
                <p>{props.description}</p>
              </div>
              <button className="get-started-btn">{props.cardButton}</button>
            </div>

            <div className="operation-right">
              <h1> {props.titleImage} </h1>
              <div className="boost-image">{props.maxImage}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
