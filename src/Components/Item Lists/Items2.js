import React from "react";
import { Container, Row } from "react-bootstrap";

function Items2(props) {
  const { item, onHandleShowDetails } = props;

  function handleClick(detail) {
    
    onHandleShowDetails(detail);
  }

  return (
    <Container className="itemContainer">
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
