import React from "react";
import { Products } from "../Data";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectCartItems } from "../redux/CartSlice/Cart";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
  const dispatch = useDispatch();
  const cardIteam = useSelector(selectCartItems);
  console.log("cart Items : ", cardIteam);
  const handelAddCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Iteam Added to cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <div>
      <ToastContainer />
      <div className="container">
        <div className="row">
          {Products.map((item) => (
            <div key={item.id} className="container col-md-4 my-4">
              <div className="card bg-dark" style={{ width: "18rem" }}>
                <div className="p-3 d-flex justify-content-center align-items-cneter">
                  <img
                    src={item.imgSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                <div className="card-body text-light text-cneter">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary mx-3">
                    {item.price} ₹
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => handelAddCart(item)}
                  >
                    Add to Card
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
