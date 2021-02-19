import React from "react";

const Login = () => {
  return (
    <div>
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
      <div className="container" style={{ maxWidth: "550px" }}>
        <div className="row d-flex" style={{ textAlign: "center" }}>
          <div className="col-12" style={{ color: "white" }}>
            <strong>To continue, log in to Spotify</strong>
          </div>
          <div className="col-12 my-1">
            <a
              type="button"
              className="btn btn-facebook btn-lg btn-block"
              href="https://www.facebook.com/v7.0/dialog/oauth?client_id=174829003346&state=AQAAbXBjN5CxEfrurE%2FRXCjdPCibN2RCnJ7tM%2BTQmSrXFZbSA0T4d0S6u19Q9btEvbqj9eLr7p67AMEKnW9BdYwB1ICGhij1dPnUu7xXqviGLBvk1wNHIKquFE8eIhTRH%2FrAz%2B7ps8Uef7DXXVFcj10rjOb60BByYUkkGProad8w8fV9CCr0asnJ1zLtr9KhdNm8PeU1M9fSTv800z3nnTKpbtJ7SgWr%2BUyah2%2BDGkZs0HYaAkAqhUnpGpWZtCHEYtg%3D&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Ffacebook%2Fredirect"
            >
              <i className="fab fa-facebook"></i>Continue with Facebook
            </a>
          </div>
          <div className="col-12 my-1">
            <a
              type="button"
              className="btn btn-apple btn-lg btn-block"
              href="https://appleid.apple.com/auth/authorize?client_id=com.spotify.accounts&response_type=code&response_mode=form_post&scope=name%20email&state=AQAAbXBjN5CxEfrurE%2FRXCjdPCibN2RCnJ7tM%2BTQmSrXFZbSA0T4d0S6u19Q9btEvbqj9eLr7p67AMEKnW9BdYwB1ICGhij1dPnUu7xXqviGLBvk1wNHIKquFE8eIhTRH%2FrAz%2B7ps8Uef7DXXVFcj10rjOb60BByYUkkGProad8w8fV9CCr0asnJ1zLtr9KhdNm8PeU1M9fSTv800z3nnTKpbtJ7SgWr%2BUyah2%2BDGkZs0HYaAkAqhUnpGpWZtCHEYtg%3D&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fapple%2Fredirect"
            >
              <i className="fab fa-apple"> </i>Continue with Apple
            </a>
          </div>
        </div>
        <div className="divide" style={{ marginBottom: "30px" }}>
          <strong className="divide-Text">Or</strong>
        </div>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email address or username"
              aria-describedby="emailHelp"
              name="userid"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="exampleInputPassword1"
              name="password"
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
            <label className="form-check-label" for="exampleCheck1">
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
              <a
                type="button"
                className="btn btn-outline-light btn-lg btn-block"
                href="#sss"
              >
                SIGN UP FOR SPOTIFY
              </a>
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
