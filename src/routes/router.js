import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/Initial/LoginPage/LoginPage";
import SignUpPage from "../pages/Initial/SignUpPage/SignUpPage";
import SignUpAddressPage from "../pages/Initial/SignUpAddressPage/SignUpAddressPage";
import FeedPage from "../pages/Home/FeedPage/FeedPage";
import ProfilePage from "../pages/PersonalArea/ProfilePage/ProfilePage";
import EditProfilePage from "../pages/PersonalArea/EditPage/EditProfilePage/EditProfilePage";
import EditAddressPage from "../pages/PersonalArea/EditPage/EditAddressPage/EditAdressProfile";
import RestaurantPage from "../pages/Restaurant/RestaurantPage/RestaurantPage";
import CartPage from "../pages/Cart/CartPage/CartPage";
import ErrorPage from "../pages/Error/ErrorPage";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signUp" component={SignUpPage} />
        <Route exact path="/" component={FeedPage} />
        <Route
          exact
          path="/restaurants/:restaurantId"
          component={RestaurantPage}
        />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/profile/edit" component={EditProfilePage} />
        <Route exact path="/address" component={EditAddressPage} />
        <Route exact path="/address/edit" component={EditAddressPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};


export default Router;
