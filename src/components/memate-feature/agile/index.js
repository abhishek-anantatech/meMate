import React from "react";
import FeatureCard from "../card";
import Images from "../../../assests/images";
import './style.css';
const MeMateFeatureAgile = () => {
  return (
    <div className="agile-container-section">
      <div className="efficiency-section">
        <FeatureCard
          subHeading="Agile"
          topHeading="Total control"
          mainHeading="anywhere"
          description="Manage every aspect of your business with complete control, no matter where you are. Our platform offers real-time insights into your business’s performance, enabling you to make swift, informed decisions."
          cardButton="Get started"
          maxImage={<img src={Images.popup} />}
        />
      </div>
    </div>
  );
};

export default MeMateFeatureAgile;
