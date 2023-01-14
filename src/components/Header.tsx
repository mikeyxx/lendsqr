import React, { useContext } from "react";
import logo from "../assets/Group.svg";
import searchIcon from "../assets/Vector.svg";
import bell from "../assets/np_notification.png";
import avatar from "../assets/avatar.png";
import dropdownArrow from "../assets/dropdown-icon.svg";

// Styles
import "../styles/header.scss";
import { DataContext } from "../App";

const Header = () => {
  const { menu, setMenu } = useContext(DataContext);
  const handletoggle = () => {
    setMenu((prev) => !prev);
  };
  return (
    <div className="headerContainer">
      <div className="headerWrapper">
        <div className="headerLogo">
          <img src={logo} alt="" />
          <span className="hamburger" onClick={handletoggle}></span>
        </div>
        <div className="search">
          <input type="text" placeholder="Search for anything" />
          <div className="search-btn">
            <img src={searchIcon} alt="" />
          </div>
        </div>

        <div className={`profile ${menu ? "toggle" : ""} `}>
          <div className="profileDocs">
            <a href="#">Doc</a>
            <img src={bell} alt="" className="bell" />
          </div>

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
  );
};

export default Header;
