import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "../Welcome";
import Family from "../Family"
import Order from "../Orders/Order";



const Header = () => {
  
  function moveToTop() {
    window.scrollTo(0, 0);
  }

  function hotsauce() {
    alert("Hot sauce so hot it will make your butthole swell!");
  }

  return (
    <>
      <Navbar className="header fixed-top" bg="light" expand="lg">
        <Container fluid>
          <Link className="ms-3 brand" style={{ color: "black" }} to="/">
            <h1>Iggy B's</h1>
            <p>Bakery & Eats</p>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="me-3" id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link onClick={moveToTop} className="navLink" to="/">
                Home
              </Link>
              <Link onClick={moveToTop} className="navLink" to="/Family">
                Family
              </Link>
              <Link onClick={moveToTop} className="navLink" to="/Orders">
                Orders
              </Link>
              <NavDropdown
                className="navLink"
                title="Products"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="navLinkDropItem" href="#Cakes">
                  Cakes
                </NavDropdown.Item>
                <NavDropdown.Item className="navLinkDropItem" href="#Cookies">
                  Cookies
                </NavDropdown.Item>
                <NavDropdown.Item className="navLinkDropItem" href="#Bread">
                  Bread
                </NavDropdown.Item>
                <NavDropdown.Item className="navLinkDropItem" href="#CakePops">
                  Cake Pops
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={hotsauce}
                  className="navLinkDropItem"
                  href="#HotSauce"
                >
                  Hot Sauce
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Family" element={<Family />} />
        <Route path="Orders" element={<Order />} />
        
        
      </Routes>
    </>
  );
};

export default Header;
