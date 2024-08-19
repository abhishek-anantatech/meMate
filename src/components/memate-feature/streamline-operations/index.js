import React from "react";
import "./style.css";
import  Images  from "../../../assests/images";
const MeMateFeatureStreamline = () => {
  return (
    <div className="feature-section-container">
      <div className="features-section">
      <div className="memate">
        <h2>Memate</h2>
        <h1>features</h1>
      </div>

      <div className="all-in-one">
        <div className="stream-line">
          <div className="main-operation">
            <div className="operation-left">
              <p className="all-text">All-in-one</p>
              <h2>Streamline</h2>
              <h1>operations</h1>

              <div className="operation-desp">
                <p>
                  Our software automates your workflows, making your business
                  operations easier. It’s based on proven strategies and is
                  designed for quick setup, boosting efficiency from day one.
                </p>
              </div>
              <button className="get-started-btn">Get started</button>
            </div>

            <div className="operation-right">
              <h1> memate </h1>
              <div className="max-image">
                <img src={Images.maxImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    
  );
};

export default MeMateFeatureStreamline;
