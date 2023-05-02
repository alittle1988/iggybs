import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Welcome() {
  return (
    <div>
      <Container className="m-auto pt-5">
        <Row className="welcomeRow">
          <Col className="p-3">
            <h2>Welcome to Iggy B's Bakery & Eats</h2>
            <p>
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
          <Col className="p-3">
            <img className="famPic" src="https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/319621034_10228117091368497_2106118885199984573_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s552x414&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=FzhPuO11s6EAX9tWkd4&_nc_ht=scontent-lax3-1.xx&oh=00_AfDaTVCad9Ps9--Tq3R9KQm1A29_xu7kOAvKenBB-jJ4hg&oe=64548040" alt="Family"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Welcome;
