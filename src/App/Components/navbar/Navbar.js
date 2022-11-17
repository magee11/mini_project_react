import React from "react";
import Divumlogo from "../../Assests/icons/divumlogo.svg"
import Notificationlogo from "../../Assests/images/Notification.svg";
import Profilepic from "../../Assests/images/profilepic.png";
import searchicon from "../../Assests/icons/Vector.png";
import "./navbar.scss";

const Navbar = (props)=> {
 
  return (
    <div className="navbar-container">
      <div>
        <img
          className="navbar-container_Dashboardlogo"
          src={Divumlogo}
          alt="logo"
        />
      </div>
      <div className="navbar-container_inputbar">
        <img
          className="navbar-container_search-icon"
          src={searchicon}
          alt="seach-icon"
        />
        <input
          className="navbar-container_inputsearchbar"
          type="text"
          placeholder="Search or type"
          onChange={e=>props.setSearchItem(e.target.value)}
        />
      </div>
      <div className="navbar-container__rightelements">
        <span>
          <img
            className="navbar-container__bellicon"
            id="bellicon"
            src={Notificationlogo}
            alt="notification-icon"
          />
        </span>
        <span>
          <img
            className="navbar-container__profilepic"
            id="profile"
            src={Profilepic}
            alt="profile-icon"
          />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
