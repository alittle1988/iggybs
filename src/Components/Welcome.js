import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Welcome() {
  return (
    <div>
      <Container fluid className="pt-5 welcome">
        <Row>
          <h1 className="text-center mb-5 welcomeTitle">
            Welcome to Iggy B's Bakery & Eats
          </h1>
        </Row>
        <Row className="welcomeRow ms-4">
          <Col className="p-3 mt-4">
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col
            className="p-3 text-center d-none d-md-block d-lg-block d-xl-block "
            md={6}
          >
            <img className="famPic" src="" alt="Family" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Welcome;
