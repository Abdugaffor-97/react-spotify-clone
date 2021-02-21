import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import ContinueWith from "../../components/styled_components/ContinueWith";
import { Container } from "react-bootstrap";
import SpotifyImg from "../../components/styled_components/SpotifyImg";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = process.env.REACT_APP_API_URL + "/users/register";

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: password1, username }),
      });

      if (res.ok) {
        setLoading(false);
        history.push("/login");
      }

      console.log(res);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <div id="register" className="pt-5">
      <SpotifyImg />
      <hr />
      <Container style={{ maxWidth: "550px" }}>
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              <button
                className="btn btn-success btn-lg"
                style={{ width: "500px" }}
              >
                Sign up
              </button>
            )}
          </div>
        </form>
        <p className="mt-3">
          Have an account? <Link to="/login">Log in.</Link>
        </p>
      </Container>
    </div>
  );
};

export default Register;
