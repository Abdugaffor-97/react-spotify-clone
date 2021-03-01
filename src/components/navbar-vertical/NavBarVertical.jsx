import React from "react";
import { Button } from "react-bootstrap";
import Link from "../styled_components/Link"; //styled_components/Link
import { AiFillHome, AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { BsPlus } from "react-icons/bs";
import { GiPlainArrow } from "react-icons/gi";
import "./style.scss";
import SpotifyLogo from "../styled_components/SpotifyImg";

const NavbarVertival = () => {
  return (
    <div className="navbar-vertical">
      <section>
        <SpotifyLogo maxWidth="140px" />
      </section>

      <section>
        <Link
          to="/"
          className={window.location.pathname === "/" ? "current-page" : ""}
        >
          <h1 className="mx-2">
            <AiFillHome /> Home
          </h1>
        </Link>

        <Link
          to="/search"
          className={
            window.location.pathname === "/search" ? "current-page" : ""
          }
        >
          <h1 className="mx-2">
            <AiOutlineSearch /> Search
          </h1>
        </Link>

        <Link
          to="/library"
          className={
            window.location.pathname === "/library" ? "current-page" : ""
          }
        >
          <h1 className="mx-2">
            <VscLibrary /> Your library
          </h1>
        </Link>
      </section>

      <section>
        <h1>PLAYLISTS</h1>

        <Link to="/playlist">
          <h1>
            <BsPlus /> Create Playlist
          </h1>
        </Link>

        <Link to="/linked-songs">
          <h1>
            {" "}
            <AiFillHeart /> Linked Songs
          </h1>
        </Link>
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
};

export default NavbarVertival;
