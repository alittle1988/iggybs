import React, { useState } from "react";
import { Card, Container, ListGroup, Row } from "react-bootstrap";

function Items2(props) {
  const { item, onHandleShowDetails } = props;

  function handleClick(detail) {
    console.log(detail);
    onHandleShowDetails(detail);
  }

  return (
    <Container>
      <Row>
        <div className="imgDiv" onClick={() => handleClick(item)}>
          <img className="itemimg" src={item.img} alt={item.name} />
          <p className="itemP">{item.name}</p>
        </div>
      </Row>
    </Container>
  );
}

export default Items2;
