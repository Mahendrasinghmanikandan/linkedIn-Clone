import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebars/Sidebar";
import Feed from "./components/feeds/Feeds";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
const App = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    setOpen(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  });

  return (
    <div className="app">
      {/* <h1>lets build linked-In CLONE</h1> */}
      {/* header */}
      <Header />
      <div className="app_bar">
        {/* App Body */}
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        <Dialog
          open={isOpen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Hi their"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please Use Desktop Mode for Better Experience
            </DialogContentText>
          </DialogContent>
        </Dialog>
        {/* widgets */}
      </div>
    </div>
  );
};

export default App;
