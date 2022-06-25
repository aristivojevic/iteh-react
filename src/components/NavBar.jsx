import React from "react";
import { Link } from "react-router-dom";

function NavBar({ cartNum }) {
  return (
    <div className="navBar">
      <Link to="/">Početna</Link>
      <Link to="/korpa" className="cart-items">
        <p>Korpa</p>
      </Link>
      <p className="cart-num">{cartNum}</p>
    </div>
  );
}
export default NavBar;
