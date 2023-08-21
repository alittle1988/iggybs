import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  const {cartList, onHandleWelcome, onHandleWelcomeHome} = props;
  function moveToTop() {
    window.scrollTo(0, 0);
    onHandleWelcomeHome()
  }

  function moveToTopHome() {
    window.scrollTo(0, 0);
    onHandleWelcome()
  }

  return (
    <>
      <Navbar className="header fixed-top" bg="light" expand="lg">
        <Container fluid>
          <Link onClick={moveToTop} className="ms-3 brand" style={{ color: "black" }} to="/">
            <h1>Iggy B's</h1>
            <p>Bakery & Eats</p>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="me-3" id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link onClick={moveToTop} className="navLink" to='/'>
                Home
              </Link>
              <Link onClick={moveToTopHome} className="navLink" to="/Family">
                Family
              </Link>
              <Link onClick={moveToTopHome} className="navLink" to="/Orders">
                Contact
              </Link>
              <Link onClick={moveToTopHome} className="navLink" to="/Cart">
                Cart ({cartList.length})
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
