import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Route, withRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import NavbarVertical from "./components/NavBarVertical";
import Home from "./pages/home";
import Album from "./pages/album";
import Footer from "./components/Footer";
import Register from "./pages/register";
import Login from "./pages/login";
import Search from './pages/search'

function App({ location }) {

  return (
    <div className="App">
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />

      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <>
          <NavbarVertical />
          <NavBar />
          <Footer />
        </>
      )}

      <div style={{ margin: "60px 10px 10px 240px" }}>
        <Route path="/" exact component={Home} />
        <Route path="/album/:id/" exact component={Album} />
        <Route path='/search' exact component={Search} />
      </div>
    </div>
  );
}

export default withRouter(App);
