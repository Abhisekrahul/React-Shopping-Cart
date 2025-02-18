import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, selectCartItems } from "../redux/CartSlice/Cart";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cardIteam = useSelector(selectCartItems);
  console.log("cart Items : ", cardIteam);
  return (
    <div>
      <div className="container text-center my-5" style={{ widows: "700px" }}>
        {cardIteam.length == 0 && (
          <>
            <h1>Your Cart is Empty</h1>
            <Link to={"/"} className="btn btn-warning">
              Continue Shopping
            </Link>
          </>
        )}

        {cardIteam.map((item) => (
          <div key={item.id} className="container my-5">
            <div
              className="card mb-3 bg-dark text-light text-center"
              style={{ width: "650px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="p-3">
                    <img
                      src={item.imgSrc}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.title}</p>
                    <button className="btn btn-primary mx-3 ">
                      {item.price} ₹
                    </button>
                    <button className="btn btn-warning">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cardIteam.length != 0 && (
        <button
          onClick={() => dispatch(clearCart())}
          className="btn btn-warning"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}

export default Cart;
