import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "./sidebar.css";
const Sidebar = () => {
  const status = useSelector((result) => result.auth.values);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://img.freepik.com/free-vector/pastel-ombre-background-pink-purple_53876-120750.jpg?w=2000"
          alt="mybacground"
        />
        {status.user.photoURL === "" ? (
          <Avatar>{status.user.displayName[0]}</Avatar>
        ) : (
          <Avatar src={status.user.photoURL} sx={{ width: 50, height: 50 }} />
        )}
        <h1>{status.user.displayName}</h1>
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
