import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function DetailsPopUp(props) {
  const { details, onHandleShowDetails } = props;
  return (
    <div className="popUp-box">
      
      <Card className="popUpCard"  onClick={onHandleShowDetails}>
        <Card.Img className="popUpImg" src={details.img} alt={details.name} />
        
        <Card.Body>
          <Card.Title>{details.name}</Card.Title>
          <Card.Text style={{fontSize: "1.55vw"}}>{details.description}</Card.Text>
        </Card.Body>
        <ListGroup >
          <Card.Text className="cardText">Prices:</Card.Text>
          
          {details.sizeAvail.map((detail, key) => {
            return (<>
              <Card.Text className="cardText1"  key={key}>
                {detail.size}: ${detail.price}
              </Card.Text>
              
            </>);
          })}
        </ListGroup>
      </Card>
      <p className="closeX" onClick={onHandleShowDetails}>X</p>
    </div>
  );
}

export default DetailsPopUp;

// fixing how Card is displayed as pop up!!!
