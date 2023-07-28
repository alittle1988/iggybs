import React from "react";
import DetailsPopUp from "./Item Lists/DetailsPopUp";
import ItemLists from "./Item Lists/ItemLists";

function Gallery(props) {
  const { products, showDetails, details, onHandleShowDetails, categories } =
    props;
  return (
    <div>
      <h1
        style={{
          paddingLeft: "25px",
          marginTop: "115px",
          fontFamily: "cursive",
        }}
      >
        Gallery
      </h1>
      {showDetails ? (
        <DetailsPopUp
          details={details}
          onHandleShowDetails={onHandleShowDetails}
        />
      ) : (
        ""
      )}
      <ItemLists
        showDetails={showDetails}
        onHandleShowDetails={onHandleShowDetails}
        category="AllProducts"
        products={products}
      />
      {categories.map((category, key) => {
        return (
          <ItemLists
            showDetails={showDetails}
            onHandleShowDetails={onHandleShowDetails}
            category={category}
            key={key}
            products={products}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
