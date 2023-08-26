import React from "react";
import { Container, Navbar, Nav, NavDropdown, NavLink } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "../Welcome";
import Family from "../Family"
import Order from "../Orders/Order";
import Gallery from '../Gallery'



const Header = (props) => {
  const {onToggleWelcomeOn, onToggleWelcomeOff} = props;
  function moveToTop() {
    window.scrollTo(0, 0);
    onToggleWelcomeOff()
  }

  function moveToTopHome() {
    window.scrollTo(0, 0);
    onToggleWelcomeOn()
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
              <Link onClick={moveToTopHome} className="navLink" to="/">Home</Link>
              <Link onClick={moveToTop} className="navLink" to="/Family">
                Family
              </Link>
              <Link onClick={moveToTop} className="navLink" to="/Orders">
                Contact
              </Link>
              
              
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
      
    </>
  );
};

export default Header;
