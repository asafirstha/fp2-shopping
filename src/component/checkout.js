import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../redux/action/action";
import { Link } from "react-router-dom";
import "./style/checkout.css";

function Checkout() {
  const { productCart, products } = useSelector((state) => state);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    if (!products || !Array.isArray(products)) {
      return 0;
    }

    return productCart.reduce((total, item) => {
      const product = products.find((p) => p.id === item.id);
      return total + (product ? item.count * product.price : 0);
    }, 0);
  };

  const handlePayment = () => {
    // Proses pembayaran (misalnya, Anda dapat mengirim permintaan ke penyedia pembayaran)
    // Di sini kita hanya menyelesaikan pembelian (checkout)
    dispatch(checkout());
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {productCart.map((item) => {
          const product = products.find((p) => p.id === item.id);
          return (
            <div key={item.id}>
              <p>{product ? `${product.title} - ${item.count} x $${product.price.toFixed(2)}` : "Product not found"}</p>
            </div>
          );
        })}
      </div>
      <p>Metode Pembayaran: {calculateTotal().toFixed(2)}</p>
      <Link to="/paymentMethod">
        <button onClick={handlePayment}>Pay Now</button>
      </Link>
    </div>
  );
}

export default Checkout;
