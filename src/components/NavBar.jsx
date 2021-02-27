import React from "react";
import { Link } from "react-router-dom";
import { DropdownToggle, NavBtn } from "./styled_components/Button";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NavBar = () => {
  const { userInfos } = useSelector((state) => state.user);
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="sm"
      style={{
        left: "235px",
        backgroundColor: "black",
      }}
    >
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            <IoIosArrowBack color="white" size={30} />
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            <IoIosArrowForward color="white" size={30} />
          </Nav.Link>
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
              <Dropdown.Item as={Link} to="/account">
                Account
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/logout">
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
