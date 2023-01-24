import React from "react";
import Product from "./product";

const Homeproducts = () => {
  return (
    <div className="container home-products-main">
      <div className="row">
        <div className="imageHeader">
          <img src="../img/crisps.webp" alt="crisps" />
        </div>
        <div className="products">
          <h2>Products</h2>
        </div>{" "}
        <Product />
      </div>
    </div>
  );
};

export default Homeproducts;
