import React from "react";
import { Card, ListGroup } from "react-bootstrap";
function Items(props) {
  const { item } = props;
  return (
    <div>
      <Card
        style={{
          width: "300px",
          border: "solid 3px black",
          boxShadow: "15px 15px 10px gray",
          margin: "25px",
        }}
      >
        <Card.Img
          variant="top"
          style={{ borderBottom: "solid 3px black", maxHeight: "350px" }}
          src={item.img}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price: {item.price}</ListGroup.Item>
          <ListGroup.Item>
            Sizes Avail:
            <ul className="sizeAvail">
              {item.sizeAvail.map((details, key) => {
                return (
                  <div key={key} className="itemPriceList">
                    <li>{details.size}</li>
                    <li>{details.price}</li>
                  </div>
                );
              })}
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Items;
