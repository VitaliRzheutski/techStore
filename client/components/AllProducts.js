import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchProductsThunk } from "../redux/allProducts";

const AllProducts = (props) => {

  let allProducts = props.products;

  useEffect(() => {
    props.loadProducts();
  }, []);

  return (
    <div className="allCards">
      {allProducts.map((product) => (
        <div className="singleCard" key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img src={product.imageUrl} />
            <p id=""> {product.productName}</p>
            <p id="">Price: ${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

const mapState = (state) => {
  return {
    products: state.allProducts,
  };
};
const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProductsThunk()),
  };
};
export default connect(mapState, mapDispatch)(AllProducts);
