import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./responsive.css";
import HomeScreen from "./screens/HomeScreen";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
      </Switch>
    </Router>
  );
};

export default App;
