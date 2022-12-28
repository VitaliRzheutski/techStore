import React from "react";
import { NavLink } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <nav className="NV">
        <div id="navbar">
          <div className="left-side">
            {/* The navbar will show these links after you log in */}
            <NavLink to="/">
              <p className="section-title">Home</p>
            </NavLink>
            <NavLink to="/products" activestyle={{ color: "white" }}>
              <p className="section-title">All products</p>
            </NavLink>

            <NavLink to="/users" activestyle={{ color: "white" }}>
              <p className="section-title">Users</p>
            </NavLink>
          </div>

          <div className="right-side">
            <NavLink to="/cart" activestyle={{ color: "white" }}>
              <p className="section-title">Cart</p>
            </NavLink>
          </div>
          <div className="right-side">
            <NavLink to="/signup" activestyle={{ color: "white" }}>
              <p className="section-title">SignUp</p>
            </NavLink>
          </div>
        </div>
      </nav>
    
    );
  }
}
export default Navbar;
