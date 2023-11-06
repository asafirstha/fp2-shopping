import React, { useEffect } from "react";
import Cart from "./cart"; // Assuming Cart component is in the same directory
import { getProducts } from "./fetch";
import "./style/body.css";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/action/action";

// Define the updateProductWithItsCount function
function updateProductWithItsCount(products, cart) {
  return products.map((item) => {
    const cartItem = cart.find((object) => parseInt(object.id) === parseInt(item.id));
    return {
      id: item.id,
      image: item.image,
      count: cartItem ? cartItem.count : 0,
      title: item.title,
    };
  });
}

export default function Body() {
  const dispatch = useDispatch();
  const { products, productCart } = useSelector((state) => state);

  useEffect(() => {
    async function fetchData() {
      const response = await getProducts();
      dispatch(setProducts(response.data));
    }
    fetchData();
  }, [dispatch]);

  const updatedProductWithCount = updateProductWithItsCount(products, productCart);

  return (
    <div className="product__container">
      <div className="product__subcontainer">
        {updatedProductWithCount.map((item, index) => (
          <Cart
            item={item}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
