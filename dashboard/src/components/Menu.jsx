import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API_URL, { FRONTEND_URL } from "../config";

const Menu = ({ user }) => {
  let [selectedMenu, setSelectedMenu] = useState(0);
  let [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  function handleSelectedMenu(idx) {
    setSelectedMenu(idx);
  }

  function handleProfileClick() {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }

  const handleLogout = async (e) => {
    e.stopPropagation();
    try {
      await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
      window.location.href = FRONTEND_URL;
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const username = user?.username || "USERID";
  const avatarInitials = username.slice(0, 2).toUpperCase();

  return (
    <div className="menu-container">
      <img src="/src/assets/logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/" onClick={() => handleSelectedMenu(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/orders" onClick={() => handleSelectedMenu(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/holdings" onClick={() => handleSelectedMenu(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/positions" onClick={() => handleSelectedMenu(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/funds" onClick={() => handleSelectedMenu(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/apps" onClick={() => handleSelectedMenu(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{avatarInitials}</div>
          <p className="username">{username}</p>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
