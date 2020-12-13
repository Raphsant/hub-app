import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

function Nav(props) {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/account">
        {props.user ? "Account" : "Login"}
      </Link>{" "}
      {" "}
      <Link className="nav__link" to="/">
        Main page
      </Link>{" "}
      {" "}
    </nav>
  );
}

export default Nav;
