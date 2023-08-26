import React from "react";
import { Card, Button } from "react-bootstrap";

function DetailsPopUp(props) {
  const { details, onHandleShowDetails, onHandleAddToCart } = props;

  function addToCart() {
    onHandleAddToCart(details)
  }

  return (
    <div onClick={onHandleShowDetails} className="popUp-box">
      <Card className="popUpCard" onClick={onHandleShowDetails}>
        <Card.Img className="popUpImg" src={details.img} alt={details.name} />
        
        <Card.Body>
          <Card.Title>{details.name}</Card.Title>
          <Card.Text style={{ fontSize: "1.5vh" }}>
            {details.description}
          </Card.Text>
          <hr></hr>
          <Card.Text className="cardText">Prices: ${details.price}</Card.Text>
          {/* code for diffrent sizes*/}
          {/*{details.sizeAvail.map((detail, key) => {
            return (
              
                <ul key={key}>
                  <li >
                    {detail.size}: ${detail.price}
                  </li>
                </ul>
              
            );
          })}*/}
        </Card.Body>
        <Button onClick={addToCart}  style={{margin: '5px'}}>Add to Cart</Button>
      </Card>
    </div>
  );
}

export default DetailsPopUp;

// fixing how Card is displayed as pop up!!!
