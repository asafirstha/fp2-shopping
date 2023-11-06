import React, { useEffect, useState } from "react";
import "./style/item.css";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/action/action";
import { getProductsWithId } from "./fetch";

function ItemDetails({ productId, count }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct(productId) {
      try {
        const fetchedProduct = await getProductsWithId(productId);
        setProduct(fetchedProduct.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchProduct(productId);
  }, [productId]);

  function increaseProductQuantity(id) {
    dispatch(increment(id));
  }

  function decreaseProductQuantity(id) {
    dispatch(decrement(id));
  }

  return (
    <div className="item__details">
      <div className="item__left">
        <div className="item__left__img">
          <img src={product?.image} alt={product?.title} />
        </div>
        <div className="item__button">
          <button onClick={() => decreaseProductQuantity(productId)}>-</button>
          {count}
          <button onClick={() => increaseProductQuantity(productId)}>+</button>
        </div>
      </div>
      <div className="item__right">
        <p>{product?.title}</p>
        <p>₹{product?.price}</p>
      </div>
    </div>
  );
}

export default ItemDetails;
