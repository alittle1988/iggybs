import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Routes, Route, Link } from 'react-router-dom';
import Welcome from "../Welcome";
import Family from "../Family";


const Header = () => {

  function moveToTop() {
    window.scrollTo(0, 0)
  }

  function hotsauce() {
    alert("Hot sauce so hot it will make your butthole swell!")
  }

  return (<>
    
      <Navbar className="header fixed-top" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="ms-3"  href="#home"><h1>Iggy B's</h1><p>Bakery & Eats</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="me-3" id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link onClick={moveToTop} className="navLink" to='/welcome'>Home</Link>
              <Link onClick={moveToTop} className="navLink" to='/Family'>Family</Link>
              <NavDropdown className="navLink" title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item className="navLinkDropItem" href="#Cakes">Cakes</NavDropdown.Item>
                <NavDropdown.Item className="navLinkDropItem" href="#Cookies" >
                  Cookies
                </NavDropdown.Item>
                <NavDropdown.Item className="navLinkDropItem" href='#Bread'>
                  Bread
                </NavDropdown.Item>
                <NavDropdown.Item className="navLinkDropItem" href="#CakePops">Cake Pops</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={hotsauce} className="navLinkDropItem" href="#action/3.4">
                  Hot Sauce
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/Family" element={<Family />} />
        
         
      </Routes>
   
      </>);
};

export default Header;
