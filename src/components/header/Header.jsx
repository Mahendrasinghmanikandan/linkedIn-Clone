import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/loginSlice";
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "../firebase/firebase";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = () => {
  const status = useSelector((result) => result.auth.values);

  const dispatch = useDispatch();
  const googleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(login({ status: true, user: user }));
        toast.success("Successfully Logged In");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Went Wrong Please try Again");
      });
  };

  const googleLogout = () => {
    dispatch(login({ status: false, user: [] }));
    toast.success("Successfully Logged Out");
  };
  return (
    <div className="header">
      <ToastContainer />
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="in"
        />
        <div className="header__search">
          {/* Search Icon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="MyNetwork" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notification" Icon={NotificationsIcon} />
        <HeaderOption title="Me" avatar={status.user.photoURL || true} />
      </div>
      <div>
        {status.status ? (
          <Button variant="contained" onClick={googleLogout}>
            Logout
          </Button>
        ) : (
          <Button variant="contained" onClick={googleLogin}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
