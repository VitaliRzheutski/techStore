import React from "react";
import HomePage from "./HomePage";
import  AllProducts  from "./AllProducts";
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import SingleProduct from "./SingleProduct";
import AllUsers from "./AllUsers";
import Cart from "./Cart";
import SignUp from "./SignUp";
import Checkout from "./Checkout";
import Login from "./Login";

class Routess extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route exact path="/users" element={<AllUsers/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/signup" element={<SignUp/>} /> 
          <Route path="/login" element={<Login/>} /> 
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </div>
    );
  }
}

export default Routess;
