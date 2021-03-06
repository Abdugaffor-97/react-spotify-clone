import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Route, withRouter } from "react-router-dom";

import NavBar from "./components/navbar";
import NavbarVertical from "./components/navbar-vertical";
import Home from "./pages/home";
import Album from "./pages/album";
import Footer from "./components/footer";
import Register from "./pages/register";
import Login from "./pages/login";
import Search from "./pages/search";
import Logout from "./pages/logout";
import Profile from "./pages/profile";

function App({ location }) {
  return (
    <div className="App">
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />

      {location.pathname === "/login" ||
        location.pathname === "/register" ||
        location.pathname === "/logout" || (
          <>
            <NavbarVertical />
            <NavBar />
            <Footer />
          </>
        )}

      <div id="main-pages">
        <Route path="/" exact component={Home} />
        <Route path="/album/:id/" exact component={Album} />
        <Route path="/search" exact component={Search} />
        <Route path="/profile" exact component={Profile} />
      </div>
    </div>
  );
}

export default withRouter(App);
