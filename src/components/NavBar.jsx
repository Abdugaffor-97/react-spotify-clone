import React from "react";
import { Link } from "react-router-dom";
import { DropdownToggle, NavBtn } from "./styled_components/Button";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NavBar = () => {
  const user = useSelector((state) => state.user);
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
          <Dropdown drop="left">
            <DropdownToggle variant="outline-secondary" id="dropdown-basic">
              {user.username}
            </DropdownToggle>

            <Dropdown.Menu>
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
