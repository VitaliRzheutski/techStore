import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOutThunk } from "../redux/user";
import { useNavigate } from "react-router";

const Navbar = (props) => {
  const navigate = useNavigate();

  function redirectAfter() {
    props.handleClick();
    navigate("/login");
  }

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

        <div className="loginSignUp">
          <NavLink to="/login" activestyle={{ color: "white" }}>
            <p className="section-title">Login</p>
          </NavLink>

          <NavLink to="/signup" activestyle={{ color: "white" }}>
            <p className="section-title">SignUp</p>
          </NavLink>

          <a href="/login" onClick={props.handleClick}>
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    // isLogggedIn: !!state.user.id,

    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick() {
      dispatch(logOutThunk());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
