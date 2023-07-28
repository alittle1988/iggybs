import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

function Cart(props) {
  const { products } = props;
  return (
    <Container className="cartContainer">
      <Row>
        <h1>Cart</h1>
      </Row>
      <Row>
        <h3>Items:</h3>
      </Row>
      <Row style={{flexWrap: 'nowrap', overflow: 'scroll'}}>
        {products.map((product) => {
          return (
            <Col >
              <Card className="cartCard" >
                <Card.Img variant="top" src={product.img} alt={product.name} />
                <Card.Body>
                  <Card.Title style={{fontSize: '16px', fontWeight: 'bold', padding: '10px 0'}}>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Button variant="primary">Remove Item</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Cart;
