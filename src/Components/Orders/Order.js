import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

function Order() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState('');

  function handleSubmit( message) {
    
    window.location = `mailto:andylittle88@gmail.com?subject=Special%20Inquiry%20For%20${name}&body=${message}`;
  }
  
  return (
    <div className="ordersDiv">
      <Container className="ordersContainer">
        <Row>
          <h1 style={{fontFamily: 'cursive'}}>Contact</h1>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={e => setName(e.target.value)} type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Details:</Form.Label>
              <Form.Control
                as="textarea"
                rows={12}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
          <Button onClick={e => handleSubmit(message)} style={{ width: "100px" }}>
            Submit
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Order;

// figuring out how to send an email from order form
