import React from 'react'
import './style.css';
import FeatureCard from '../card';
import Images from '../../../assests/images';
const MemateFeatureBoastEfficiency = () => {
  return (
    <div className="efficiency-section-container">
        <div className="efficiency-section">
            <FeatureCard
                subHeading="Dashboard"
                topHeading="Boost Profits"
                mainHeading="& efficiency"
                description="Cut costs and boost efficiency effortlessly. Our software has built-in analytics to easily understand your financial health, helping you make informed decisions to increase profitability."
                cardButton="Get started"
                maxImage={(<img src={Images.boostImage} />)}
            
            />
        </div>
    </div>
  )
}

export default MemateFeatureBoastEfficiency;
