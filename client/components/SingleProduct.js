import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../redux/singleProduct";
import { useParams } from "react-router-dom";

const SingleProduct = (props) => {
  const params = useParams();
  const id = params.productId;
  useEffect(() => {
    props.loadSingleProduct(id);
  }, []);

  const singleProduct = props.singleProduct;
  return (
    <div className="">
      <div id="">
        <div className="">
          <h1>{singleProduct.productName}</h1>
          <p className="">{singleProduct.description}</p>
        </div>
        <div className="">
          <img src={singleProduct.imageUrl} alt="" />
        </div>
      </div>
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
