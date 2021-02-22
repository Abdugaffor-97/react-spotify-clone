import React from "react";
import { Component } from "react";
import { Button } from "react-bootstrap";
import Link from "../styled_components/Link"; //styled_components/Link
import { AiFillHome, AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { FaSpotify } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { GiPlainArrow } from "react-icons/gi";
import "./style.scss";
import SpotifyLogo from "../styled_components/SpotifyImg";

class NavbarVertival extends Component {
  render() {
    return (
      <div className="navbar-vertical">
        <section>
          <SpotifyLogo maxWidth="140px" />
        </section>

        <section>
          <div className="current-page">
            <Link to="/">
              <AiFillHome />
              <h1 className="mx-2">Home</h1>
            </Link>
          </div>

          <div>
            <Link to="/search">
              <AiOutlineSearch />
              <h1 className="mx-2">Search</h1>
            </Link>
          </div>

          <div>
            <Link to="/library">
              <VscLibrary />
              <h1 className="mx-2">Your library</h1>
            </Link>
          </div>
        </section>

        <section>
          <h1>PLAYLISTS</h1>

          <div>
            <Link to="/playlist">
              <BsPlus />
              <h1>Create Playlist</h1>
            </Link>
          </div>

          <div>
            <Link to="/linked-songs">
              <AiFillHeart />
              <h1>Linked Songs</h1>
            </Link>
          </div>
          <div className="border-bottom border-secondary"></div>
        </section>

        <section className="playlist">
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
        </section>
        <section>
          <Button
            style={{
              width: "200px",
            }}
          >
            {" "}
            <GiPlainArrow />
            Install
          </Button>
        </section>
      </div>
    );
  }
}

export default NavbarVertival;
