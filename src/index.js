import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App.js";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

document.addEventListener(
  "mousedown",
  function (event) {
    if (event.detail > 1) {
      if (event.target.classList.contains("form-check-input")) {
        event.preventDefault();
      }
    }
  },
  false
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
