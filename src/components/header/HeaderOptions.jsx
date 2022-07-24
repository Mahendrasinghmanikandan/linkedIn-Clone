import React from "react";
import Avatar from "@mui/material/Avatar";
import "./HeaderOptions.css";
const HeaderOptions = ({ avatar, Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar alt={title} className="headerOption__icon" src={avatar} />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
