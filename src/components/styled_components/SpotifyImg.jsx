import React from "react";

export default function SpotifyImg() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        style={{ maxWidth: "250px" }}
        src={process.env.PUBLIC_URL + "Assets/Spotify_Logo_RGB_White.svg"}
        alt="Spotify Logo White"
      />
    </div>
  );
}
