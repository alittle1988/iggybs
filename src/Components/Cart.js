import React, {useState} from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

function Cart(props) {
  const { cartList, cartTotal} = props;
  
    

  return (
    <Container className="cartContainer">
      <Row>
        <h1>Cart</h1>
      </Row>
      <Row>
        <h3>Items:</h3>
      </Row>
      <Row style={{flexWrap: 'nowrap', overflow: 'scroll'}}>
        
        {cartList < 1  ? <h2>There is no Items in your Cart!</h2> : cartList.map((product, key) => {
          return (
            <Col key={key}>
                
              <Card className="cartCard" >
                <Card.Img variant="top" src={product.img} alt={product.name} />
                <Card.Body>
                  <Card.Title style={{fontSize: '16px', fontWeight: 'bold', padding: '10px 0'}}>{product.name}</Card.Title>
                  <Card.Text>Price: {product.price}</Card.Text>
                  <Button variant="primary">Remove Item</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        }) }
      </Row>
      <Row>
        <h2 style={{marginTop: '10px'}}>Total: {cartTotal} </h2>
      </Row>
    </Container>
  );
}

export default Cart;