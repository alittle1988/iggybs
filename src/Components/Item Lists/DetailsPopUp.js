import React from "react";
import { Card } from "react-bootstrap";

function DetailsPopUp(props) {
  const { details, onHandleShowDetails } = props;

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
          <Card.Text className="cardText">Prices:</Card.Text>

          {details.sizeAvail.map((detail, key) => {
            return (
              <>
                <Card.Text className="cardText1" key={key}>
                  <ul>
                    <li>
                      {detail.size}: ${detail.price}
                    </li>
                  </ul>
                </Card.Text>
              </>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
}

export default DetailsPopUp;

// fixing how Card is displayed as pop up!!!
