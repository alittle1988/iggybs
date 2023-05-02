import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";


const Header = () => {
  return (
    
      <Navbar className="header" bg="light" expand="lg">
        <Container>
          <Navbar.Brand  href="#home"><h1>Iggy B's</h1><p>Bakery & Eats</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navLink" href="#home">Home</Nav.Link>
              <Nav.Link className="navLink" href="#link">Family</Nav.Link>
              <NavDropdown className="navLink" title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item className="navLink" href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item className="navLink" href="#action/3.2">
                  Cookies
                </NavDropdown.Item>
                <NavDropdown.Item className="navLink" href="#action/3.3">
                  Bread
                </NavDropdown.Item>
                <NavDropdown.Item className="navLink" href="#action/3.4">Cake Pops</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navLink" href="#action/3.4">
                  Hot Sauce
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
  );
};

export default Header;
