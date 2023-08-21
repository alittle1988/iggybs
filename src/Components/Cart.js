import React, {useState} from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

function Cart(props) {
  const { cartList, cartTotal, onHandleRemoveFromCart} = props;
  const [message, setMessage] = useState([]);
  const [name, setName] = useState('');
  
    const removeItem = (key) => {
       onHandleRemoveFromCart(key)
       
    }

    function handleCheckOutClick() {
      let person = prompt("Please Enter Your Name", "Enter Name here");
      setName(person)
      let text = [];
      cartList.map((item, key) => {
       text.push(`
        Item: ${item.name}
        Price: ${item.price}
        `);
        setMessage(...message, text)
        
      })
      
      
    }
    console.log(message)
    

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
                <Card.Img className="cartImg" variant="top" src={product.img} alt={product.name} />
                <Card.Body>
                  <Card.Title style={{fontSize: '16px', fontWeight: 'bold', padding: '10px 0'}}>{product.name}</Card.Title>
                  <Card.Text>Price: {product.price}</Card.Text>
                  <Button onClick={() => removeItem(key)} variant="outline-danger">Remove Item</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        }) }
      </Row>
      <Row className="cartTotalRow">
        <Col sm={6}>
        <h2 style={{marginTop: '10px'}}>Total: {cartTotal} </h2>
        </Col>
        <Col sm={6} style={{textAlign: 'right'}}>
        {cartList.length > 0 ? <Button className="cartButton" onClick={handleCheckOutClick} variant='primary'>Check Out</Button>: <div></div>}
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
