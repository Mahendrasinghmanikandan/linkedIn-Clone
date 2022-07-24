import React from "react";
import "./feedOptions.css";
const FeedOptions = ({ name, Icon, color }) => {
  return (
    <div className="feed__Options">
      {Icon && <Icon sx={{ color: color }} />}
      &nbsp;
      {name}
    </div>
  );
};

export default FeedOptions;
