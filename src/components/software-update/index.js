import React from "react";
import "./styles.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NextStep from "../next-step"
const SoftwareUpdate = () => {
  return (
    <div className="">
      <div className="parent">
        <div className="brandName">
          <div className="Memate">Memate</div>
        </div>
        <div className="latestUpdates">
          <h1 className="latest-update-text">Latest Updates</h1>
        </div>
        <div className="content1">
          <div className="date">September 25,2024</div>

          <div className="contextText">
            <div className="contentText1">
              New Updates to Our Software & Pricing!
            </div>
            <div className="contentText2">
              We're excited to unveil a revamped approach to our software
              presentation, set to launch in December 2023. Begin with our
              foundational service at just $29.80 + GST. Need more? Enhance your
              experience by adding specialized plugins for a small fee.
            </div>
            <div className="contentText3">Why this change?</div>
            <div className="contentText4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </div>
            <div className="contentText5">
              <div className="check-circle-icon"><CheckCircleIcon htmlColor="#29292B" sx={{width:"25.162px"}}/></div>
              <div style={{display:'flex',alignItems:"center",width:"100%"}}>
                <p className="software-word">Flexibility : &nbsp;</p>
                <span className="software-content"> Start the essential,adds
                you grow.</span>
              </div>
            </div>
            <div className="contentText5-update">
              <div className="check-circle-icon"><CheckCircleIcon htmlColor="#29292B" sx={{width:"25.162px"}}/></div>
              <div style={{display:'flex',width:"100%"}}>
                <p className="software-word">Affordability : &nbsp;</p>
                <span className="software-content"> A powerful base at a pocket-friendly price, expand as needed.</span>
              </div>
            </div>
            <div className="contentText5-update">
              <div className="check-circle-icon"><CheckCircleIcon htmlColor="#29292B" sx={{width:"25.162px"}}/></div>
              <div style={{display:'flex',width:"100%"}}>
                <p className="software-word">User-Centricity: &nbsp;</p>
                <span className="software-content">Tailored solutions, driven by your feedback. </span>
              </div>
            </div>
          </div>
        </div>
        <div className="content2">
          <div className="date">September 25,2024</div>

          <div className="contextText">
            <div className="contentText1">
              New Updates to Our Software & Pricing!
            </div>
            <div className="contentText2">
              We're excited to unveil a revamped approach to our software
              presentation, set to launch in December 2023. Begin with our
              foundational service at just $29.80 + GST. Need more? Enhance your
              experience by adding specialized plugins for a small fee.
            </div>
            <div className="contentText3">Why this change?</div>
            <div className="contentText4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </div>
            <div className="contentText5">
              <div className="check-circle-icon"><CheckCircleIcon htmlColor="#29292B" sx={{width:"25.162px"}}/></div>
              <div style={{display:'flex',alignItems:"center",width:"100%"}}>
                <p className="software-word">Flexibility : &nbsp;</p>
                <span className="software-content"> Start the essential,adds
                you grow.</span>
              </div>
            </div>
            <div className="contentText5-update">
              <div className="check-circle-icon"><CheckCircleIcon htmlColor="#29292B" sx={{width:"25.162px"}}/></div>
              <div style={{display:'flex',width:"100%"}}>
                <p className="software-word">Affordability : &nbsp;</p>
                <span className="software-content"> A powerful base at a pocket-friendly price, expand as needed.</span>
              </div>
            </div>
            <div className="contentText5-update">
              <div className="check-circle-icon"><CheckCircleIcon htmlColor="#29292B" sx={{width:"25.162px"}}/></div>
              <div style={{display:'flex',width:"100%"}}>
                <p className="software-word">User-Centricity: &nbsp;</p>
                <span className="software-content">Tailored solutions, driven by your feedback. </span>
              </div>
            </div>
          </div>
        </div>
        <div className="content3">
          <div className="date">September 25,2024</div>

          <div className="contextText">
            <div className="contentText1">
              New Updates to Our Software & Pricing!
            </div>
            <div className="contentText2">
              We're excited to unveil a revamped approach to our software
              presentation, set to launch in December 2023. Begin with our
              foundational service at just $29.80 + GST. Need more? Enhance your
              experience by adding specialized plugins for a small fee.
            </div>
            <div className="contentText3">Why this change?</div>
            <div className="contentText4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </div>
            <div className="contentText5">
              <div className="check-circle-icon"><CheckCircleIcon htmlColor="#29292B" sx={{width:"25.162px"}}/></div>
              <div style={{display:'flex',alignItems:"center",width:"100%"}}>
                <p className="software-word">Flexibility : &nbsp;</p>
                <span className="software-content"> Start the essential,adds
                you grow.</span>
              </div>
            </div>
            <div className="contentText5-update">
              <div className="check-circle-icon"><CheckCircleIcon htmlColor="#29292B" sx={{width:"25.162px"}}/></div>
              <div style={{display:'flex',width:"100%"}}>
                <p className="software-word">Affordability : &nbsp;</p>
                <span className="software-content"> A powerful base at a pocket-friendly price, expand as needed.</span>
              </div>
            </div>
            <div className="contentText5-update">
              <div className="check-circle-icon"><CheckCircleIcon htmlColor="#29292B" sx={{width:"25.162px"}}/></div>
              <div style={{display:'flex',width:"100%"}}>
                <p className="software-word">User-Centricity: &nbsp;</p>
                <span className="software-content">Tailored solutions, driven by your feedback. </span>
              </div>
            </div>
          </div>
        </div>
        <div className="updateButton">
          <button className="btn">See more Updates</button>
        </div>
        {/* <div className="takeThe">Take the</div>
        <div className="nextStep">next step</div>
        <div className="getStarted-btn-container-A">
          <button className="getStarted-btn-A">Get started</button>
        </div> */}
        
      </div>
      <NextStep text="Request a Demo"/>
    </div>
  );
};
export default SoftwareUpdate;
