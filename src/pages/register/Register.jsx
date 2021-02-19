import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import ContinueWith from "../../components/button/ContinueWith";

const Register = () => {
  return (
    <div className="container" style={{ maxWidth: "550px" }}>
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="justify-content-center d-flex mt-4">
          <img
            style={{ maxWidth: "300px" }}
            src={process.env.PUBLIC_URL + "Assets/Spotify_Logo_RGB_White.svg"}
            alt="Spotify Logo White"
          />
        </div>
        <hr />
      </div>
      <ContinueWith
        title="Sign up with your email address"
        className="btn btn-lg btn-block btn-email"
      />
      <form>
        <div className="form-group">
          <label htmlFor="EnterEmail">What's your email?</label>
          <input
            type="email"
            className="form-control"
            id="EnterEmail"
            placeholder="Enter your email."
            aria-describedby="emailHelp"
            name="Email1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ConfirmEmail">Confirm your email</label>
          <input
            type="email"
            className="form-control"
            id="ConfirmEmail"
            placeholder="Enter your email again."
            aria-describedby="emailHelp"
            name="Email2"
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
    </div>
  );
};

export default Register;
