import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { DropdownToggle, NavBtn } from "../styled_components/Button";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

import "./style.scss";

const NavBar = () => {
  const { userInfos } = useSelector((state) => state.user);
  const history = useHistory();
  const [height, setHeight] = useState(window.scrollY);

  useEffect(() => {
    window.onscroll = () => setHeight(window.scrollY);

    return window.removeEventListener("scroll", setHeight);
  }, [height]);

  return (
    <Navbar
      className={height > 60 && "on-scroll"}
      fixed="top"
      collapseOnSelect
      expand="sm"
      style={{
        left: "234px",
      }}
      id="nav"
    >
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link as={Link} to="/"> */}
          <IoIosArrowBack
            color="white"
            size={29}
            onClick={() => history.goBack()}
            style={{
              backgroundColor: "black",
              borderRadius: "50%",
              padding: "1px",
              margin: "13px 2px 0px 2px",
              cursor: "pointer",
            }}
          />

          <IoIosArrowForward
            color="white"
            size={29}
            onClick={() => history.goForward()}
            style={{
              backgroundColor: "black",
              borderRadius: "50%",
              padding: "1px",
              margin: "13px 2px 0px 2px",
              cursor: "pointer",
            }}
          />
          {history.location.pathname === "/search" && (
            <div className="mt-2">
              <BsSearch
                size={20}
                style={{ position: "relative", left: "30px", color: "black" }}
              />
              <input
                type="text"
                name=""
                id="search"
                placeholder="Artists, songs or podcasts"
              />
            </div>
          )}
        </Nav>
        <Nav>
          <NavBtn variant="outline-secondary">UPGRADE</NavBtn>
          <Dropdown>
            <DropdownToggle
              style={{ padding: "2px 0px", marginTop: "2px" }}
              variant="outline-secondary"
              id="dropdown-basic"
            >
              <img
                alt="user-defauld-img"
                src={process.env.PUBLIC_URL + "Assets/user.jpg"}
                style={{ width: "25px", borderRadius: "50%" }}
              />{" "}
              {userInfos.username}
            </DropdownToggle>

            <Dropdown.Menu style={{ backgroundColor: "#1B1B1A" }}>
              <Dropdown.Item as={Link} to="/account" style={{ color: "white" }}>
                Account
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/profile" style={{ color: "white" }}>
                Profile
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/logout" style={{ color: "white" }}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
