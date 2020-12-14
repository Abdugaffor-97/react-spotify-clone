import { Component } from "react";
import { Link } from "react-router-dom";
const { AiFillHome, AiOutlineSearch, AiFillHeart } = require("react-icons/ai");
const { VscLibrary } = require("react-icons/vsc");
const { FaSpotify } = require("react-icons/fa");
const { BsPlus } = require("react-icons/bs");

const { Nav } = require("react-bootstrap");

class NavbarVertival extends Component {
  render() {
    return (
      <div className="navbar-vertical">
        <Nav.Link as={Link} to="/">
          <div id="spotify-icon" className="d-flex ">
            <FaSpotify />
            <h3 className="mt-1 ml-1">
              <b>Spotify</b>
            </h3>
          </div>
        </Nav.Link>
        <ul>
          <li className="current-page">
            <Nav.Link as={Link} to="/" eventKey="link-1">
              <AiFillHome />
              <h1 className="mx-2">Home</h1>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to="/search" eventKey="link-2">
              <AiOutlineSearch />
              <h1 className="mx-2">Search</h1>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link>
              <VscLibrary />
              <h1 className="mx-2">Your library</h1>
            </Nav.Link>
          </li>
        </ul>

        <ul>
          <li>
            <h1>PLAYLISTS</h1>
          </li>
          <li>
            <Nav.Link>
              <BsPlus />
              <h1>Create Playlist</h1>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link>
              <AiFillHeart />
              <h1>Linked Songs</h1>
            </Nav.Link>
            <div className="border-bottom border-secondary"></div>
          </li>
        </ul>

        <div className="border-bottom border-secondary"></div>
        <div className="playlist">
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
    );
  }
}

export default NavbarVertival;
