import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  decreaseProductThunk,
  deleteProductFromCartThunk,
  getCartThunk,
  incrementCountThunk,
  getRemovedOrderThunk,
} from "../redux/cart";
import { Link } from "react-router-dom";

const Cart = (props) => {
  useEffect(() => {
    props.loadCart();
  }, []);
  let allProducts = props.order[0] ? props.order[0].products : null;
  const order = props.order;

  if (props.order[0] === undefined) {
    return renderEmptyCart();
  } else {
    const products = props.order[0].products;
    const sum = products.reduce((accum, curElement) => {
      const quantity = curElement.orderDetail.quantity;
      return (accum = accum + quantity);
    }, 0);

    const priceSum = products.reduce((accum, curElement) => {
      const price = curElement.orderDetail.productPrice;
      const quantity = curElement.orderDetail.quantity;
      return accum + price * quantity;
    }, 0);
    return (
      <div className="total-quantity">
        {getProducts(products)}
        <p>Total order quantity: {sum}</p>
        <div className="pr">
          <p> Total order price: ${priceSum.toFixed(2)}</p>
          <Link to="/checkout" className="checkout">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    );
  }

  function renderEmptyCart() {
    return (
      <div className="noItems">
        <div className="noItems">
          <img src="https://www.waterpurifiercareindia.com/images/empty-cart.jpg"></img>
        </div>
        <Link className="checkout" to="/products">
          View Products
        </Link>
      </div>
    );
  }
  function getProducts(productArray) {
    return (
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row w-100">
            <div className="col-lg-12 col-md-12 col-12">
              <h3>Shopping Cart</h3>
              <table
                id="shoppingCart"
                className="table table-condensed table-responsive"
              >
                <tbody>
                  {productArray.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td data-th="Product">
                          <div className="row">
                            <div className="col-md-3 text-left">
                              <img
                                src={product.imageUrl}
                                alt=""
                                className="img-fluid d-none d-md-block rounded mb-2 shadow  "
                              />
                            </div>
                            <div className="col-md-8 text-left mt-sm-2">
                              <h4>{product.productName}</h4>
                              <p className="font-weight-light">
                                {product.description}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="col-md-1" data-th="Price">
                          Price: ${product.price}
                        </td>
                        <td className="col-md-1">
                          <button
                            className="decrease"
                            onClick={() => props.decreaseProduct(product.id)}
                          >
                            -
                          </button>
                          {product.orderDetail.quantity}
                          <button
                            className="increase"
                            onClick={() => props.incrementProduct(product.id)}
                          >
                            +
                          </button>
                        </td>
                        <td className="actions" data-th="">
                          <div className="text-right">
                            <button
                              className=" btn btn-danger "
                              onClick={() => {
                                props.deleteProductFromCart(product.id);
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-4 d-flex align-items-center"></div>
        </div>
      </section>
    );
  }
};

const mapSate = (state) => {
  return {
    order: state.cart,
  };
};
const mapDispatch = (dispatch) => {
  return {
    loadCart: () => dispatch(getCartThunk()),
    deleteProductFromCart: (productId) =>
      dispatch(deleteProductFromCartThunk(productId)),
    decreaseProduct: (productId) => dispatch(decreaseProductThunk(productId)),
    incrementProduct: (productId) => dispatch(incrementCountThunk(productId)),
    getRemovedOrder: () => dispatch(getRemovedOrderThunk()),
  };
};
export default connect(mapSate, mapDispatch)(Cart);
