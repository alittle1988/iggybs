import React from "react";
import Items2 from "./Items2.js";
import { Container } from "react-bootstrap";

function ItemLists(props) {
  const { products, category, showDetails, onHandleShowDetails } = props;

  return (
    <div>
      <Container fluid id={category}>
        <h1
          style={{
            margin: "100px 0px 100px 0px",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          {category}
        </h1>
        <div className="itemdiv">
          {products.map((product, key) => {
            if (category === 'AllProducts') {
             return <Items2
              showDetails={showDetails}
              onHandleShowDetails={(product) => 
                onHandleShowDetails(product)
              }
              key={key}
              item={product
              }/>
            } else {
            if (product.category.toLowerCase() === category.toLowerCase()) {
              return (
                <Items2
                  showDetails={showDetails}
                  onHandleShowDetails={(product) =>
                    onHandleShowDetails(product)
                  }
                  key={key}
                  item={product}
                />
              );
            }}
          })}
        </div>
      </Container>
    </div>
  );
}

export default ItemLists;
