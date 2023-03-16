import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./responsive.css";
import PrivateRouter from "./PrivateRouter";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrderScreen from "./screens/OrderScreen";
import SingleProduct from "./screens/SingleProduct";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/products/:id" component={SingleProduct} />
        <PrivateRouter path="/profile" component={ProfileScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <PrivateRouter path="/order/:id" component={OrderScreen} />
      </Switch>
    </Router>
  );
};

export default App;
