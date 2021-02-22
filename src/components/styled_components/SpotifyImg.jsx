import React from "react";
import { Link } from "react-router-dom";

export default function SpotifyImg({ maxWidth = "250px" }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link to="/">
        <img
          style={{ maxWidth: maxWidth }}
          src={process.env.PUBLIC_URL + "Assets/Spotify_Logo_RGB_White.svg"}
          alt="Spotify Logo White"
        />
      </Link>
    </div>
  );
}
