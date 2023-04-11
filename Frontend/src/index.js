import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import store from "./redux/store";
import App from "./App";

const API_URL =
  process.env.API_URL || "https://group4-server-goldentime.onrender.com";
axios.defaults.baseURL = API_URL;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
