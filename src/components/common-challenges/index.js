import Images from "../../assests/images";
import "./style.css";

const CommonChallenges = () => {
  return (
    <div className="common-box-wrapper">
      <div className="common-box">
        <div className="challenges-text">
          <h3>Solves common challenges</h3>
        </div>
        <div className="control-main-sec">
          <div className="me-meta-card">
            <div className="max-cont-width">
              <div className="met-points">
                <img className="main-bg-img" src={Images.cardBg} />
                <div className="me-meta-image">
                  <img src={Images.metalogo} />
                  <p className="card-text">
                    Establish comprehensive control within the company 24/7 from
                    any point in the world.
                  </p>
                </div>
              </div>
              <div className="internal-control">
                <div className="internal-control-content">
                  <div className="control-text">
                    <h2>Complete internal control</h2>
                    <p>over every aspect of your business.</p>
                  </div>

                  <div className="icons">
                    <div className="user-prof">
                      <img src={Images.profileUser} />
                    </div>

                    <div className="user-prof">
                      <img src={Images.exportTag} />
                    </div>

                    <div className="user-prof">
                      <img src={Images.note} />
                    </div>

                    <div className="user-prof">
                      <img src={Images.suppliers} />
                    </div>

                    <div className="user-prof">
                      <img src={Images.graph} />
                    </div>

                    <div className="user-prof">
                      <img src={Images.iconWork} />
                    </div>

                    <div className="user-prof">
                      <img src={Images.calender} />
                    </div>
                    <div className="user-prof">
                      <img src={Images.shopicon} />
                    </div>
                    <div className="user-prof">
                      <img src={Images.emptyWallet} />
                    </div>
                    <div className="user-prof">
                      <img src={Images.iconDashb} />
                    </div>

                    <div className="user-prof">
                      <img src={Images.iconPople} />
                    </div>
                    <div className="user-prof">
                      <img src={Images.iconApproval} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="predict-side">
              <div className="activities-text">
                <p>
                  Now you can <span> see and predict unprofitable </span>{" "}
                  business activities.
                </p>
              </div>

              <div className="business-profile">
                <img className="image-business" src={Images.busprofile} />
                <img className="mask-business" src={Images.mask} />
                <img className="graph-business" src={Images.graphBuss} />
              </div>
            </div>
          </div>
          <div className="project-profitability">
            <div className="inner-text">
              <div className="inner-text-container">
              <p>Gain comprehensive insight into business processes and</p>
              <h2>project profitability</h2>
              </div>
             
            </div>
          </div>

          <div className="real-time">
            <div className="gain-time">
              <p>
                Gain <span>real-time visibility</span> into all areas of your
                business.
              </p>
              <img className="graph-number" src={Images.graphAndNum} />
            </div>
            <div className="overcome-pro">
              <div className="overcome-pro-content">
              <p>
                {" "}
                <span>Overcome scaling challenges </span> caused by manual
                processes 
              </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonChallenges;
