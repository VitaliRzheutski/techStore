import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../redux/singleProduct";
import { useParams } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";
import {addProductThunk} from '../redux/cart'

const SingleProduct = (props) => {
  console.log('props in singleProd:',props)
  const params = useParams();
  const id = params.productId;
  useEffect(() => {
    props.loadSingleProduct(id);
  }, []);

  const singleProduct = props.singleProduct;
  console.log('singleProduct',singleProduct)
  return (
    <div>
      <div id="container">
      <h1>{singleProduct.productName}</h1>

        <div className="product-details">
          <p className="information">{singleProduct.description}</p>

          <div className="product-image">
            <img src={singleProduct.imageUrl} alt="" />
          </div>
          
            
          
        </div>
        <button onClick={() => props.addProduct(singleProduct)}>
              <span className="">Add to cart</span>
            </button>
      </div>
      <UpdateProduct />
    </div>
  );
};

const mapState = (state) => {
  return {
    singleProduct: state.singleProduct,
    // user: state.user,
  };
};
const mapDispatch = (dispatch) => {
  return {
    loadSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    addProduct: (productId, orderId, productPrice) =>
      dispatch(addProductThunk(productId, orderId, productPrice)),
  };
};
export default connect(mapState, mapDispatch)(SingleProduct);
