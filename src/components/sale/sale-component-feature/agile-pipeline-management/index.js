import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
const AgilePipeLineManagement = () => {
  return (
    <div className="aglie-pipeline-management-wrapper">
      <img src={Images.pipeLineManagement} />
      <div className="content-wrapper">
        <p className="sale-title">Agile</p>
        <p className="sales-heading-sales">Pipeline</p>
        <p className="sales-type">management</p>
        <p className="sales-description-sales">
          Streamline your sales process with our intuitive <br></br>pipeline management
          tool. View all stages of your<br></br> sales funnel in one place, making it
          easy to track<br></br> progress, manage leads, and close deals faster.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
