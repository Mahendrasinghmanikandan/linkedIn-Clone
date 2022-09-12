import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/features/loginSlice";
import { Provider } from "react-redux";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

const store = configureStore({
  reducer: { auth: authSlice },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


