import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Welcome() {
  return (
    <div className="welcome-container">
      <Container fluid className="pt-5 welcome">
        <Row>
          <h1 className="text-center mb-5 welcomeTitle">
            Welcome to Iggy B's Bakery & Eats
          </h1>
        </Row>
        <Row className="welcomeRow m-4">
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
            <img
              className="famPic"
              src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/348433940_6523598674317298_8900076896313790962_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3ZBEWlJMnd0AX-pmaHV&_nc_ht=scontent-lax3-2.xx&oh=00_AfADpu38WLYifOWokaQ1QxG79tOUfq9SMPcv_CdAimD3PQ&oe=649B10E2"
              alt="Family"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Welcome;
