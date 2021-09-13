import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import SwitchToggle from "./Otp";
// import ScrollToTop from "./scrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <SwitchToggle />
    {/* <BrowserRouter>
      
    </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);
