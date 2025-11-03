import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import user_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  const sidebar = () => {
    setSidebar((prev) => (prev === false ? true : false));
  };

  return (
    <nav>
      <div className="nav-left flex-div">
        <img className="menu-icon" src={menu_icon} onClick={sidebar} />
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-mid flex-div">
        <input type="search" placeholder="Search..." />
        <img className="search-icon" src={search_icon} alt="" />
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img className="user" src={user_icon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
