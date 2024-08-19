import React from "react";
import FeatureCard from "../card";
import Images from "../../../assests/images";
import './style.css';
const MeMateWorkForce = () => {
  return (
    <div className="workforce-container">
      <div className="efficiency-section">
        <FeatureCard
          subHeading="In-depth"
          topHeading="Understand"
          mainHeading="your workforce"
          description="Keep track of employee and subcontractor hours efficiently. Our system offers real-time updates on their progress, ensuring you're always informed about project developments and workforce productivity."
          cardButton="Get started"
          maxImage={<img src={Images.underStand} />}
        />
      </div>
    </div>
  );
};

export default MeMateWorkForce;
