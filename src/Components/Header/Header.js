import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  const {cartList} = props;
  function moveToTop() {
    window.scrollTo(0, 0);
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
                Contact
              </Link>
              <Link onClick={moveToTop} className="navLink" to="/Cart">
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
