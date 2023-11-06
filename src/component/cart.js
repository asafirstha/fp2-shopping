import React from "react";
import "./style/cart.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/action/action";

export default function Cart({ item }) {
  const dispatch = useDispatch();

  if (!item) {
    return <p>Item not found.</p>;
  }

  const { image, title, id, count } = item;

  function increaseItemQuantity(id) {
    dispatch(increment(id));
  }

  function decreaseItemQuantity(id) {
    dispatch(decrement(id));
  }

  return (
    <div className="product__cart">
      <div className="cart">
        <Link
          to={{
            pathname: `/productDetails/${id}`,
          }}
        >
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="meal_title">
        <p>{title}</p>
      </div>
      <div className="cart_addItem">
        <div>
          <button
            onClick={() => decreaseItemQuantity(id)}
            disabled={count === 0 ? true : false}
          >
            -
          </button>{" "}
          {count} <button onClick={() => increaseItemQuantity(id)}>+</button>
        </div>
      </div>
      <div className="product_detail_button">
        <Link to={{ pathname: `/productDetails/${id}` }}>
          <button>Product Detail</button>
        </Link>
      </div>
    </div>
  );
}
