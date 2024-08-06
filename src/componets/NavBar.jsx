import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotalPrice } from "../redux/CartSlice/Cart";
import { Link } from "react-router-dom";

function NavBar() {
  const cardIteam = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  return (
    <div className="nav_bar sticky-top  ">
      <Link
        to={"/"}
        className="left"
        style={{ textDecoration: "none", color: "white" }}
      >
        <h3>Redux-Toolkit</h3>
      </Link>
      <div className="middle">
        <button className="btn btn-warning">
          cart items Total Price = {totalPrice} ₹
        </button>
      </div>
      <Link to={"/cart"} className="right">
        <button type="button" className="btn btn-primary position-relative">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cardIteam.length}{" "}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </Link>
    </div>
  );
}

export default NavBar;
