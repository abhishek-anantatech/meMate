import { useState } from "react";
import Images from "../../assests/images";
import "./style.css";

const FindOneApplication = () => {
  const [selectedTab, setSelectedTab] = useState(4);
  return (
    <>
      <div className="one-application-sec">
        <div className="application-heading">
          <h3>One application</h3>
        </div>
        <div className="to-replace-bold-text">
          <h1 className="replace-text">
            to replace <br />
            them all
          </h1>
        </div>
      </div>
      <div className="tab-section">
        <ul className="tab-list">
          <li
            onClick={() => setSelectedTab(1)}
            className={selectedTab == 1 ? "active-tab" : ""}
          >
            <div className="tab-sale">
              <img src={Images.sales} />
              <p>Sales</p>
            </div>
          </li>

          <li
            onClick={() => setSelectedTab(2)}
            className={selectedTab == 2 ? "active-tab" : ""}
          >
            <div className="tab-sale">
              <img src={Images.quote} />
              <p>Quote</p>
            </div>
          </li>

          <li
            onClick={() => setSelectedTab(3)}
            className={selectedTab == 3 ? "active-tab" : ""}
          >
            <div className="tab-sale">
              <img src={Images.profitability} />
              <p>Profitability</p>
            </div>
          </li>

          <li
            onClick={() => setSelectedTab(4)}
            className={selectedTab == 4 ? "active-tab" : ""}
          >
            <div className="tab-sale">
              <img src={Images.management} />
              <p>Management</p>
            </div>
          </li>

          <li
            onClick={() => setSelectedTab(5)}
            className={selectedTab == 5 ? "active-tab" : ""}
          >
            <div className="tab-sale">
              <img src={Images.reporting} />
              <p>Reporting</p>
            </div>
          </li>

          <li
            onClick={() => setSelectedTab(6)}
            className={selectedTab == 6 ? "active-tab" : ""}
          >
            <div className="tab-sale">
              <img src={Images.communication} />
              <p>Communication</p>
            </div>
          </li>

          <li
            onClick={() => setSelectedTab(7)}
            className={selectedTab == 7 ? "active-tab" : ""}
          >
            <div className="tab-sale">
              <img src={Images.calculation} />
              <p>Calculation</p>
            </div>
          </li>

          <li
            onClick={() => setSelectedTab(8)}
            className={selectedTab == 8 ? "active-tab" : ""}
          >
            <div className="tab-sale">
              <img src={Images.scheduling} />
              <p>Scheduling</p>
            </div>
          </li>
          <li
            onClick={() => setSelectedTab(9)}
            className={selectedTab == 9 ? "active-tab" : ""}
          >
            <div className="tab-sale">
              <img src={Images.employees} />
              <p>Employees</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="tab-content-section-data">
        {selectedTab == 1 ? (
          <div>
            <div className="macBook-image-1">
              <div className="big-img-mac-1">
                <img src={Images.salesBg} />

                <div className="task-details modal-popup">
                  <img src={Images.modal} />
                </div>

                <div className="create-text-image progress-rep">
                  <img src={Images.menuItem} />
                </div>
              </div>
            </div>

            <div className="bottom-managements">
              <h2>Sales</h2>
              <p>
                Manage quotes, proposals, follow-ups, and approvals in a simple
                sales pipeline.
              </p>
              <button>Find more</button>
            </div>
          </div>
        ) : selectedTab == 2 ? (
          <div>
            <div className="macBook-image-1">
              <div className="big-img-mac">
                <img src={Images.defoultState} />

                <div className="create-text-image get-payment">
                  <img src={Images.getPayment} />
                </div>
              </div>
            </div>

            <div className="bottom-managements">
              <h2>Quote</h2>
              <p>Create invoices, receive payments, set reminders.</p>
              <button>Find more</button>
            </div>
          </div>
        ) : selectedTab == 3 ? (
          <div>
            <div className="macBook-image-1">
              <div className="big-img-mac">
                <img src={Images.quoteBg} />

                <div className="create-text-image payment-modal">
                  <img src={Images.paymentModal} />
                </div>
              </div>
            </div>

            <div className="bottom-managements">
              <h2>Profitability</h2>
              <p>
                Budgeting, real-time operational profit for each project, and
                expense management.
              </p>
              <button>Find more</button>
            </div>
          </div>
        ) : selectedTab == 5 ? (
          <div>
            <div className="macBook-image-1">
              <div className="big-img-mac">
                <img src={Images.reportingBg} />

                <div className="task-details">
                  <img src={Images.metricItemReporting} />
                </div>

                <div className="create-text-image">
                  <img src={Images.modalReporing} />
                </div>
              </div>
            </div>

            <div className="bottom-managements">
              <h2>Reporting</h2>
              <p>Real-time profitability, goals, and statistics.</p>
              <button>Find more</button>
            </div>
          </div>
        ) : selectedTab == 6 ? (
          <div>
            <div className="macBook-image-1-1">
              <div className="big-img-mac">
                <img src={Images.modalMessages} />

                <div className="task-details">
                  <img src={Images.sendMsgModal} />
                </div>

                <div className="create-text-image capture">
                  <img src={Images.capture} />
                </div>
              </div>
            </div>

            <div className="bottom-managements">
              <h2>Communication</h2>
              <p>
                SMS, emails, and notes related to one project all in one place.
              </p>
              <button>Find more</button>
            </div>
          </div>
        ) : selectedTab == 7 ? (
          <div>
            <div className="macBook-image-1">
              <div className="big-img-mac">
                <img src={Images.mergeItems} />

                <div className="task-details quotation-ans">
                  <img src={Images.quotationAns} />
                </div>

                <div className="create-text-image edit-modal">
                  <img src={Images.editModalItem} />
                </div>
              </div>
            </div>

            <div className="bottom-managements">
              <p>
                Calculate from preset products and services for budgeting and
                quick and easy quotes.
              </p>
              <button>Find more</button>
            </div>
          </div>
        ) : selectedTab == 8 ? (
          <div>
            <div className="macBook-image-1">
              <div className="big-img-mac">
                <img src={Images.dashboard} />

                <div className="task-details">
                  <img src={Images.datePicker} />
                </div>

                <div className="create-text-image capture">
                  <img src={Images.historyDate} />
                </div>
              </div>
            </div>

            <div className="bottom-managements">
              <h2>Employees and Contractors</h2>
              <p>Workforce managementssssss, time sheets, and approvals.</p>
    
                <button>Find more</button>
            </div>
          </div>
        ) : selectedTab == 9 ? (
          <div>
            <div className="macBook-image-1">
              <div className="big-img-mac">
                <img src={Images.defoultImage} />

                <div className="create-text-image capture">
                  <img src={Images.moneyVariation} />
                </div>
              </div>
            </div>

            <div className="bottom-managements">
              <h2>Employees and Contractors</h2>
              <p>
                Time tracking and contractor management made easier with a
                mobile application.
              </p>
              <button>Find more</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="macBook-image-1">
              <div className="big-img-mac">
                <img src={Images.timeLine} />

                <div className="task-details">
                  <img src={Images.taskDetails} />
                </div>

                <div className="create-text-image">
                  <img src={Images.textImage} />
                </div>
              </div>
            </div>

            <div className="bottom-managements">
              <h2>Management</h2>
              <p>
                See all ongoing projects on one screen with unparalleled
                visibility and<br></br> functionality.
              </p>
              <button>Find more</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FindOneApplication;
