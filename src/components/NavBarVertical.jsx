import { Component } from "react";
import Link from "./CustomCumponents";
const { AiFillHome, AiOutlineSearch, AiFillHeart } = require("react-icons/ai");
const { VscLibrary } = require("react-icons/vsc");
const { FaSpotify } = require("react-icons/fa");
const { BsPlus } = require("react-icons/bs");

class NavbarVertival extends Component {
  render() {
    return (
      <div className="navbar-vertical">
        <section>
          <Link to="/">
            <div id="spotify-icon" className="d-flex ">
              <FaSpotify />
              <h3 className="mt-1 ml-1">
                <b>Spotify</b>
              </h3>
            </div>
          </Link>
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
      </div>
    );
  }
}

export default NavbarVertival;
