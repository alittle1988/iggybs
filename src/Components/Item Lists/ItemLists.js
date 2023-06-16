import React from "react";
import Items from "./Items";
import { Container } from "react-bootstrap";

function ItemLists(props) {
  const { products, category } = props;

  return (
    <div>
      <Container fluid id={category}>
        <h1 style={{ margin: "45px 0px 45px 0px" }}>{category}</h1>
        <div className="itemdiv">
          {products.map((product, key) => {
            if (product.category.toLowerCase() === category.toLowerCase()) {
              return <Items key={key} item={product} />;
            }
          })}
        </div>
      </Container>
    </div>
  );
}

export default ItemLists;
