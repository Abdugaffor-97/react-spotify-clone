const { Navbar, Nav, Dropdown, DropdownButton, Button } = require("react-bootstrap")


const NavBar = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="sm" style={{ left: '235px', backgroundColor: '#fffff' }}>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features"><i className="fas fa-less-than"></i></Nav.Link>
          <Nav.Link href="#pricing"><i className="fas fa-greater-than"></i></Nav.Link>
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