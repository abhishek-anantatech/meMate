import React from "react";
import "./style.css";
import Images from "../../assests/images";
const SeamlessInegration = () => {
  return (
    <div className="integration-section">
      <div className="integation-title">
        <h3>Memate</h3>
        <h1>seamless integration</h1>
      </div>
      <div className="integration-brand-container">
      <div className="integration-brand">
        <div className="brand-logo">
          <div className="left-side-braond">
            <div className="google-brand bottom-line ">
              <div className="google-mg">
                <img src={Images.googleBrand} />
              </div>
              <div className="paypol-mg">
                <img src={Images.paypolBrand} />
              </div>
            </div>
            <div className="google-brand">
              <img src={Images.googleAnalyticsBrand} />
              <img src={Images.stripeBrand} />
            </div>
          </div>
          <div className="meta-brand-logo">
            <img src={Images.metaBradnLogo} />
          </div>

          <div className="righted-side-braond">
            <div className="google-brand">
              <div className="google-mg">
                <img src={Images.asanaBrand} />
              </div>
              <div className="paypol-mg">
                <img src={Images.myobBrand} />
              </div>
            </div>
            <div className="google-brand">
              <img src={Images.xeroBrand} />
              <img src={Images.amazonBrand} />
            </div>
          </div>
        </div>
      </div>
      </div>
     
      <div className="integration-disp">
        <p>
          MeMate: Your Gateway to top third-party solutions in accounting,
          shipping, analytics, and CRM. Select from integrated apps, robust
          import/export tools, or our seamless API for real-time connectivity.
        </p>
      </div>
    </div>
  );
};

export default SeamlessInegration;
