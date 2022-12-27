import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProductsThunk,
  addProductThunk,
  deleteProductThunk,
} from "../redux/allProducts";
import AddProduct from "./AddProduct";

const AllProducts = (props) => {
  console.log("props from all products:", props);

  let allProducts = props.products;
  useEffect(() => {
    props.loadProducts();
  }, []);

  return (
    <div>
      <div className="allCards">
        {allProducts.map((product) => (
          <div className="singleCard" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.imageUrl} />
              <p id=""> {product.productName}</p>
              <p id="">Price: ${product.price}</p>
            </Link>
            <button
              type="button"
              className="buttonDelete btn-danger"
              onClick={() =>props.deleteProduct(product.id)}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
      <AddProduct addNewProduct={props.addNewProduct} />
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
    addNewProduct: (product) => dispatch(addProductThunk(product)),
    deleteProduct: (id) => dispatch(deleteProductThunk(id)),
  };
};
export default connect(mapState, mapDispatch)(AllProducts);
