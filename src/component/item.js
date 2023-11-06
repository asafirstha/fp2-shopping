import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemDetails from "./itemDetail";
import "./style/item.css";
import { checkout, setProducts } from "../redux/action/action";

function findTotal(productCart, products) {
  let sum = 0;
  productCart.forEach((item) => (sum += item.count * (products[item.id - 1]?.price || 0)));
  sum = sum.toFixed(2);
  return sum;
}

function TotalProducts() {
  const { productCart, products } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch products from the fakestoreapi.com
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
          const productsData = await response.json();
          dispatch(setProducts(productsData));
        } else {
          console.error("Failed to fetch products from the API");
        }
      } catch (error) {
        console.error("An error occurred while fetching products:", error);
      }
    }
    fetchData();
  }, [dispatch]);

  const totalAmount = findTotal(productCart, products);

  return (
    <div className="user__cart">
      <div className="left__Cart">
        {productCart.length > 0 ? (
          productCart.map((item, index) => {
            return (
              <ItemDetails key={index} count={item.count} productId={item.id} />
            );
          })
        ) : (
          <h3 style={{ textAlign: "center" }}>No Items in Cart</h3>
        )}
      </div>
      <div className="right__Cart">
        <div>
          <div>Total</div>
          <div className="cart__price">₹ {totalAmount}</div>
        </div>
        <div>
          <div>Discount</div>
          <div>₹ 0</div>
        </div>
        <div>
          <div>Total</div>
          <div className="cart__price">₹ {totalAmount}</div>
        </div>
        <button onClick={() => dispatch(checkout())}>Checkout Product</button>
      </div>
    </div>
  );
}

export default TotalProducts;
