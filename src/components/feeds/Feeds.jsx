import React, { useState, useEffect } from "react";
import { Avatar, Divider } from "@mui/material";
import FeedOptions from "./feedOptions";
import "./feeds.css";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Post from "../post/Post";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
const Feeds = () => {
  const [post, setPost] = useState("");
  const [totalPosts, setTotaPost] = useState([]);
  var current = new Date();
  const handlePost = async (e) => {
    e.preventDefault();
    if (post !== "") {
      await addDoc(collection(db, "post"), {
        message: post,
        timestamp: current,
      });
      setPost("");
    } else {
      alert("hey enter something");
    }
  };
  useEffect(() => {
    const q = query(collection(db, "post"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTotaPost(todosArray);
    });
    return () => unsub();
  }, []);
  return (
    <>
      <div className="feeds">
        <div className="feeds__header">
          <div className="input__container">
            <Avatar src="./assets/images/myAvatar.jpg" />
            <form className="input__container">
              <input
                type="text"
                placeholder="Start the text"
                className="input__box"
                onChange={(e) => setPost(e.target.value)}
                value={post}
              />
              <input
                onClick={(e) => handlePost(e)}
                type="submit"
                className="input__button"
              />
            </form>
          </div>
          <div className="feed__options">
            <FeedOptions
              name="photo"
              color="skyblue"
              Icon={InsertPhotoOutlinedIcon}
            />
            <FeedOptions
              name="Video"
              color="green"
              Icon={OndemandVideoOutlinedIcon}
            />
            <FeedOptions
              name="Event"
              color=" brown"
              Icon={DateRangeOutlinedIcon}
            />
            <FeedOptions
              name="Write article"
              color="orange"
              Icon={ArticleOutlinedIcon}
            />
          </div>
        </div>
        <Divider className="feed__divider" textAlign="right">
          <p>
            sort by: Top <ArrowDropDownIcon className="divider__icon" />
          </p>
        </Divider>
        {totalPosts.map((value) => {
          return (
            <Post
              avatar="M"
              name="manikandan"
              description="infoTech"
              message={value.message}
              key={value.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Feeds;
