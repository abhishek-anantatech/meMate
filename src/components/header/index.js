import React, { useState } from "react";
import Images from "../../assests/images";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import "./style.css";
const Header = () => {
  const [showDropDown, setShowDropDown] = useState(true);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <div className="header-flex-cont">
        <div className="header-logo-wrapper" onClick={handleLogoClick}>
          <img src={Images.logo} alt="logo" />
        </div>
        <div className="header-navbar-container">
          <div className="header-navbar-item-about">
            <p>About </p>
            <span onClick={() => setShowDropDown(!showDropDown)}>
              {showDropDown ? (
                <KeyboardArrowDownIcon htmlColor="#29292B" />
              ) : (
                <KeyboardControlKeyIcon htmlColor="#29292B" />
              )}
            </span>
          </div>
          <span className="header-navbar-item">
            <p>Pricing</p>
          </span>
          <span className="header-navbar-item">
            <p>News</p>
          </span>
          <span className="header-navbar-item">
            <p>Contact us</p>
          </span>
        </div>
        <button className="border-gradient">Log in</button>
      </div>
    </div>
  );
};

export default Header;
