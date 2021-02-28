import React from "react";
import { Button } from "react-bootstrap";
import "./style.scss";
import SpotifyImg from "../../components/styled_components/SpotifyImg";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div id="logout">
      <div id="nav">
      <div>
        <SpotifyImg maxWidth="130px" />
      </div>


        <div className="d-flex">
          <Link to="/Premium">Premium</Link>
          <Link to="/Support">Support</Link>
          <Link to="/Download">Download</Link>
          <b></b>
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      </div>

      <div id="main">
        <b>Listening is</b>
        <b>everything</b>
        <h6>Millions of songs and podcasts. No credit card needed.</h6>
        <Button variant="success">GET SPOTIFY FREE</Button>
      </div>
    </div>
  );
};

export default Logout;
