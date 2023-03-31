import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import axios from "axios";
import store from "./redux/store";

const API_URL =
  process.env.API_URL || "https://group4-server-goldentime.onrender.com";
axios.defaults.baseURL = API_URL;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
