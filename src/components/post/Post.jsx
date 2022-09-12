import { Avatar, Divider } from "@mui/material";
import React from "react";
import FeedOptions from "../feeds/feedOptions";
import "./post.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useSelector } from "react-redux";
const Post = ({ name, description, avatar, message }) => {
  const status = useSelector((result) => result.auth.values);
  return (
    <div className="post">
      <div className="post__header">
        <h1>
          {avatar.length > 1 ? (
            <Avatar src={avatar} />
          ) : (
            <Avatar>{avatar}</Avatar>
          )}
        </h1>
        <div className="page__info">
          <h4 className="profile__name">{name}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__message">
        <p>{message}</p>
      </div>
      <Divider />
      <div className="post__button">
        <FeedOptions Icon={ThumbUpOutlinedIcon} name="Like" />
        <FeedOptions Icon={CommentOutlinedIcon} name="Comment" />
        <FeedOptions Icon={ShareOutlinedIcon} name="Share" />
        <FeedOptions Icon={SendOutlinedIcon} name="Send" />
      </div>
    </div>
  );
};

export default Post;
