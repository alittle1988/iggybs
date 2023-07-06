import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

function Order() {

  const onSubmit = () => {

  }

  return (
    <div className="ordersDiv">
      <Container className="ordersContainer">
        <Row>
          <h1>Orders</h1>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Order Details</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button >Submit</Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default Order;

// figuring out how to send an email from order form