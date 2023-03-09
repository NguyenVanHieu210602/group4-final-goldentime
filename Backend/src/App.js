import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import PrivateRouter from "./PrivateRouter";
import { listOrders } from "./redux/Actions/OrderActions";
import { lisProducts } from "./redux/Actions/ProductActions";
import "./responsive.css";

import HomeScreen from "./screens/HomeScreen";

function App() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(lisProducts());
      dispatch(listOrders());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path="/" component={HomeScreen} exact />
          <PrivateRouter path="/product/:id/edit" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
