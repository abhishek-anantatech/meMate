import React from "react";
import "./style.css";
import FeatureCard from "../card";
import Images from "../../../assests/images";
const MeMateFinanceInsights = () => {
  return (
    <div className="efficiency-section-wrapper">
      <div className="efficiency-section">
        <FeatureCard
          subHeading="Finance"
          topHeading="Real-time financial"
          mainHeading="insights"
          description="Get instant clarity on your financial status. Our software simplifies accounting tasks and improves cash and liquidity management, giving you a real-time view of your finances."
          cardButton="Get started"
          maxImage={<img src={Images.financeImage} />}
        />
      </div>
    </div>
  );
};

export default MeMateFinanceInsights;
