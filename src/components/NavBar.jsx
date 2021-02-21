import React from "react";
import { Link } from "react-router-dom";
import { DropdownToggle, NavBtn } from "./styled_components/Button";
import { Navbar, Nav, Dropdown } from "react-bootstrap";

const NavBar = () => {
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
            <i className="fas fa-less-than text-white"></i>
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            <i className="fas fa-greater-than text-white"></i>
          </Nav.Link>
        </Nav>
        <Nav>
          <NavBtn variant="outline-secondary">UPGRADE</NavBtn>
          <Dropdown drop="left">
            <DropdownToggle variant="outline-secondary" id="dropdown-basic">
              Abdug'affor
            </DropdownToggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/login">
                Sign In
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/register">
                Sign Up
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
