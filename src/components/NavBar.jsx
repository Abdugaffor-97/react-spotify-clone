import { Link } from "react-router-dom"

const { Navbar, Nav, Dropdown, DropdownButton, Button } = require("react-bootstrap")


const NavBar = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="sm" style={{ left: '235px', backgroundColor: 'black' }}>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to='/'><i className="fas fa-less-than text-white"></i></Nav.Link>
          <Nav.Link as={Link} to='/'><i className="fas fa-greater-than text-white"></i></Nav.Link>
        </Nav>
        <Nav>
          <Button variant="outline-secondary">UPGRADE</Button>
          <DropdownButton
            menuAlign="right"
            title="Abdug'affor"
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item eventKey="1">Account</Dropdown.Item>
            <Dropdown.Item eventKey="2">Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Log out</Dropdown.Item>
          </DropdownButton>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar