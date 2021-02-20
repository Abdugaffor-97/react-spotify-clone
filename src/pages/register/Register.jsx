import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import ContinueWith from "../../components/button/ContinueWith";
import { Container } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");

  const submitUser = async (e) => {
    e.preventDefault();

    const url = process.env.REACT_APP_API_URL;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password1, name }),
    });

    localStorage.setItem("accessToken", res.data.accessToken);
    console.log(res);
  };

  return (
    <Container style={{ maxWidth: "550px" }}>
      {/* <div className="container" style={{ maxWidth: "100%" }}> */}
          <img
            style={{ maxWidth: "300px" }}
            src={process.env.PUBLIC_URL + "Assets/Spotify_Logo_RGB_White.svg"}
            alt="Spotify Logo White"
          />
        <hr />
      {/* </div> */}
      <ContinueWith
        title="Sign up with your email address"
        className="btn btn-lg btn-block btn-email"
      />
      <form onSubmit={submitUser}>
        <div className="form-group">
          <label htmlFor="EnterEmail">What's your email?</label>
          <input
            type="email"
            className="form-control"
            id="EnterEmail"
            placeholder="Enter your email."
            aria-describedby="emailHelp"
            name="Email1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="EnterPassword">Create a password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Create a password."
            id="EnterPassword"
            name="password1"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ConfirmPassword">Confirm your password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm your password."
            id="ConfirmPassword"
            name="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ProfileName">What should we call you?</label>
          <input
            type="text"
            className="form-control"
            id="ProfileName"
            placeholder="Enter a profile name."
            aria-describedby="emailHelp"
            name="userid"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{ fontSize: "small" }}>This appears on your profile.</p>
        </div>
        <label>What's your gender?</label>
        <div className="form-group">
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline1"
              name="customRadioInline1"
              className="custom-control-input"
            />
            <label
              className="custom-control-label"
              htmlFor="customRadioInline1"
            >
              Male
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline2"
              name="customRadioInline1"
              className="custom-control-input"
            />
            <label
              className="custom-control-label"
              htmlFor="customRadioInline2"
            >
              Female
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline3"
              name="customRadioInline1"
              className="custom-control-input"
            />
            <label
              className="custom-control-label"
              htmlFor="customRadioInline3"
            >
              Non-binary
            </label>
          </div>
        </div>
        <div className="custom-control custom-checkbox mb-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            I agree to the <a href="#aaaa">Spotify terms & conditions</a> and{" "}
            <a href="#aaaa">Privacy Policy</a>.
          </label>
        </div>
        <div>
          <Link
            className="btn btn-success btn-lg"
            style={{ width: "500px" }}
            to="/"
          >
            Sign up
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default Register;
