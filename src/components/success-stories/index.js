import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Images from "../../assests/images";

const SuccessStories = () => {
  const menuRef = useRef(null);

  const [menuArray, setMenuArray] = useState([
    {
      img: Images.industries,
      description: "To be used by ordinary business owners.",
      bottom: "Apple, Palo Alto",
    },
    {
      img: Images.owners,
      description: "To be used by ordinary business owners.",
      bottom: "Apple, Palo Alto",
    },
    {
      img: Images.industries,
      description: "To be used by ordinary business owners.",
      bottom: "Apple, Palo Alto",
    },
    {
      img: Images.business,
      description: "To be used by ordinary business owners.",
      bottom: "Apple, Palo Alto",
    },
    {
      img: Images.industries,
      description: "To be used by ordinary business owners.",
      bottom: "Apple, Palo Alto",
    },
  ]);

  useEffect(() => {
    const menuElement = menuRef.current;

    const handleScroll = () => {
      const scrollWidth = menuElement.scrollWidth;
      const clientWidth = menuElement.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (menuElement.scrollLeft >= maxScrollLeft) {
        setMenuArray((prevItems) => [...prevItems, ...prevItems]);
      }
    };

    menuElement.addEventListener("scroll", handleScroll);

    return () => {
      menuElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="slider-section">
      <div className="success-stories">
        <div className="bottom-management">
          <h2>Success Stories</h2>
          <p>
            Here are a few stories from Australian companies using Memate
            <br />
            and how it has worked for them.
          </p>
          <button>Get started</button>
        </div>
        <div className="menu-container" ref={menuRef}>
          <div className="menu">
            {menuArray.map((item, index) => {
              const middleIndex = Math.floor(menuArray.length / 2);
              const scale = index === middleIndex ? 1.3 : 1;

              return (
                <div
                  className="card-content-data"
                  style={{
                    display: index === middleIndex && "flex",
                    alignItems: index === middleIndex && "center",
                    justifyContent: index === middleIndex && "center",
                    flexDirection: index === middleIndex && "column",
                    gap: index === middleIndex && "40.55px",
                  }}
                >
                  <div
                    key={index}
                    className="client-profs"
                    style={{
                      height: scale === 1.3 ? "399.45px" : "338.6px",
                      width: scale === 1.3 ? "429px" : "363.65px",
                      boxShadow:
                        scale === 1.3 ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "",
                      marginBottom: scale === 1.3 ? "" : "40.55px",
                    }}
                  >
                    <div className="image-container-profile">
                      <img src={item.img} />
                    </div>
                    <div className="description-box-data">
                      {scale === 1.3 && (
                        <p className="owners-disp">{item.description}</p>
                      )}
                    </div>
                  </div>
                  {index === middleIndex && (
                    <p className="card-bottom-data">{item.bottom}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
