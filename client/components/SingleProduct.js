import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../redux/singleProduct";
import { useParams } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";

const SingleProduct = (props) => {
  const params = useParams();
  const id = params.productId;
  useEffect(() => {
    props.loadSingleProduct(id);
  }, []);

  const singleProduct = props.singleProduct;
  return (
<div>
  <div id="container">
          <div className="product-details">
            <h1>{singleProduct.productName}</h1>
            <p className="information">{singleProduct.description}</p>
            <div className="control">
              <button
                className="btn"
                // onClick={() => this.props.addProduct(singleProduct)}
              >
                <span className="price">${singleProduct.price}</span>
                <span className="shopping-cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>
                <span className="buy">Add to cart</span>
              </button>
            </div>
          </div>
          <div className="product-image">
            <img src={singleProduct.imageUrl} alt="" />
          </div>

        </div>
        <UpdateProduct/>

</div>
    
  );
};

const mapState = (state) => {
  return {
    singleProduct: state.singleProduct,
  };
};
const mapDispatch = (dispatch) => {
  return {
    loadSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
  };
};
export default connect(mapState, mapDispatch)(SingleProduct);
