import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Body from "./body";
import cart from "./cart";
import TotalProducts from "./item";
import Navbar from "./Navbar";
import Login from "./login";
import ProductDetail from "./productDetail"; 
import Checkout from "./checkout"
import PaymentMethod from "./paymnetMethod";

function Home() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/cart" element={<TotalProducts />} />
          <Route path="/productDetails/:productId" element={<ProductDetail />} /> {/* Perbaiki nama komponen */}
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/paymentMethod" element={<PaymentMethod />} />
          <Route path="*" element={<h1>404 Not Found!</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Home;
