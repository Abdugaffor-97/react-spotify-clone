import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContinueWith from "../../components/button/ContinueWith";
import "./style.scss";
import SpotifyImg from "../../components/styled_components/SpotifyImg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitUser = async (e) => {
    e.preventDefault();

    const url = process.env.REACT_APP_API_URL;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    localStorage.setItem("accessToken", res.data.accessToken);
    console.log(res);
  };

  return (
    <div id="login" className="pt-5">
      <SpotifyImg />
      <hr />
      <div className="container" style={{ maxWidth: "550px" }}>
        <div className="row d-flex" style={{ textAlign: "center" }}>
          <div className="col-12" style={{ color: "white" }}>
            <strong>To continue, log in to Spotify</strong>
          </div>
          <ContinueWith
            title="Continue with Facebook"
            className="btn btn-facebook btn-lg btn-block"
          />
          <ContinueWith
            title="Continue with Apple"
            className="btn btn-apple btn-lg btn-block"
          />
          <ContinueWith
            title="Continue with Google"
            className="btn btn-google btn-lg btn-block"
            loginWith={process.env.REACT_APP_API_URL + "/users/googleLogin"}
          />
        </div>
        <div className="divide" style={{ marginBottom: "30px" }}>
          <strong className="divide-Text">Or</strong>
        </div>

        <form onSubmit={submitUser}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email address or username"
              name="userid"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="exampleInputPassword1"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            className="form-group form-check d-flex"
            style={{ justifyContent: "space-between" }}
          >
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
            <button
              type="button"
              className="btn btn-success btn-lg"
              style={{ width: "150px" }}
            >
              Log In
            </button>
          </div>
        </form>
        <div style={{ textAlign: "center" }}>
          <a href="#ssss">Forgot your Password ?</a>
        </div>
        <hr />
        <div>
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col-12 mb-3">
              <strong>Don't have an Account ?</strong>
            </div>
            <div className="col-12">
              <Link
                to="/register"
                className="btn btn-outline-light btn-lg btn-block"
              >
                SIGN UP FOR SPOTIFY
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <span
          style={{ textAlign: "center", color: "rgba(202, 204, 203, 0.253)" }}
        >
          If you click "Log in with Facebook" and are not a Spotify user, you
          will be registered and you agree to Spotify's{" "}
          <a href="#ddd">Terms & Condition</a> and{" "}
          <a href="#dddd">Privacy Policy</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
