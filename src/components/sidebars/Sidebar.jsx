import { Avatar } from "@mui/material";
import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://img.freepik.com/free-vector/pastel-ombre-background-pink-purple_53876-120750.jpg?w=2000"
          alt="mybacground"
        />
        <Avatar
          src="./assets/images/myavatar.jpg"
          className="sidebar__avatar"
        />
        <h1>Manikandan .M</h1>
        <p>Web developer</p>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>connections</p>
          <p className="connection__Number">2000</p>
        </div>
        <div className="sidebar__stat">
          {" "}
          <p>Who's Viewed Your Profile</p>
          <p className="connection__Number">2000</p>
        </div>
      </div>
      <div className="sidebar__button">
        <p>Discover more</p>
      </div>
    </div>
  );
};

export default Sidebar;
