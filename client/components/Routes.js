import React from "react";
import HomePage from "./HomePage";
import  AllProducts  from "./AllProducts";
import { Link, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";

class Routess extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="products" element={<AllProducts />} />
        </Routes>
      </div>
    );
  }
}

export default Routess;
