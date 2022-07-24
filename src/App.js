import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebars/Sidebar";
import Feed from "./components/feeds/Feeds";
const App = () => {
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
        {/* widgets */}
      </div>
    </div>
  );
};

export default App;
