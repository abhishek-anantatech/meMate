import React from "react";
import PostCard from "./post";
import Images from "../../assests/images";
import "./style.css";
const SimpleVersatilePowerful = () => {
  return (
    <div className="simple-box">
      <div className="section-heading">
        <h2>Simple. Versatile. Powerful.</h2>
      </div>
      <div className="powerful-client-wrapper">
        <div className="powerful-client">
          <PostCard
            userImage={<img src={Images.owners} />}
            storiesDisp="To be used by ordinary business owners."
          />

          <PostCard
            userImage={<img src={Images.industries} />}
            storiesDisp="To suit 90% of all industries."
          />

          <PostCard
            userImage={<img src={Images.business} />}
            storiesDisp="To change the perception of how business works."
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleVersatilePowerful;
