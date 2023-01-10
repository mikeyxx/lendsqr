import React from "react";
import logo from "../assets/Group.svg";
import searchIcon from "../assets/search-icon.svg";
import bell from "../assets/np_notification.png";
import avatar from "../assets/avatar.png";
import dropdownArrow from "../assets/dropdown-icon.svg";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerWrapper">
        <div className="headerLogo">
          <img src={logo} alt="" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search for anything" />
          <img
            src={searchIcon}
            alt=""
            style={{ backgroundColor: "lightblue" }}
          />
        </div>
        <div className="profile">
          <div className="profileDocs">
            <a href="#">Doc</a>
            <img src={bell} alt="" />
            <div className="profileDetails">
              <img src={avatar} alt="" />
              <div className="profileElements">
                <span>Adedeji</span>
                <img src={dropdownArrow} alt="" className="dropdown" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
