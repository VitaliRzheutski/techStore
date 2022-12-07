import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchProductsThunk } from "../redux/allProducts";

// export class AllProducts extends React.Component {
//   constructor() {
//     super();
//   }
//   componentDidMount() {
//     this.props.loadProducts();
//   }
//   // useEffect(() => {
//   //   // Update the document title using the browser API
//   //   this.props.loadProducts();
//   // });
//   render() {
//     const products = this.props.products;
//     console.log('products:',products)
//     return (
//       <div>

//        <div>All products</div>
//       </div>
//     );
//   }
// }
// const mapState = (state) => {
//   return {
//     products: state.products,
//   };
// };
// const mapDispatch = (dispatch) => {
//   return {
//     loadProducts: () => dispatch(fetchProductsThunk()),
//   };
// };
// export default connect(mapState, mapDispatch)(AllProducts);

const AllProducts = (props) => {
  console.log("props:", props);

  let allProducts = props.products;
  console.log("allProducts:", allProducts);

  useEffect(() => {
    props.loadProducts();
  }, []);

  return (
    <div className="allCards">
      {allProducts.map((product) => (
        <ul>
          <li>{product.productName}</li>
        </ul>
      ))}
    </div>
  );
};

const mapState = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProductsThunk()),
  };
};
export default connect(mapState, mapDispatch)(AllProducts);
