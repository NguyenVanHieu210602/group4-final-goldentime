import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import PrivateRouter from "./PrivateRouter";
import { listOrders } from "./redux/Actions/OrderActions";
import { lisProducts } from "./redux/Actions/ProductActions";
import "./responsive.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen.js";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UsersScreen";
import AddProduct from "./screens/AddProduct";
import NotFound from "./screens/NotFound";
import ProductEditScreen from "./screens/ProductEditScreen";

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
          <PrivateRouter path="/products" component={ProductScreen} />
          <PrivateRouter path="/product/:id/edit" />
          <PrivateRouter path="/addproduct" component={AddProduct} />
          <PrivateRouter path="/users" component={UsersScreen} />
          <PrivateRouter
            path="/product/:id/edit"
            component={ProductEditScreen}
          />
          <Route path="/login" component={Login} />
          <PrivateRouter path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
