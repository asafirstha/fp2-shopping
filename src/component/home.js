import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Body from "./body";
import Item from "./item";
import Navbar from "./Navbar";
import ProductDetail from "./productDetail";
import LoginAdmin from "./LoginAdmin";
import HomeAdmin from "./HomeAdmin";
import RekapPenjualan from "./RekapPenjualan";
import Checkout from "./checkout"
import PaymentMethod from "./paymentMethod"; 
import Confirmation from "./confimation";


function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    
    setIsLoggedIn(false);
  };

  
  const handleLogin = (email, password) => {
   
    if (email === 'admin@bukapedia.com' && password === 'admin123') {
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/cart" element={<Item />} />
          <Route path="/productDetails/:productId" element={<ProductDetail />} />
          {isLoggedIn ? (
            <Route path="/logout" element={<Navigate to="/login" />} />
          ) : (
            <Route path="/login" element={<LoginAdmin onLogin={handleLogin} />} />
          )}
          <Route path="/homeAdmin" element={<HomeAdmin />} />
          <Route path="/rekap-penjualan" element={<RekapPenjualan />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/paymentMethod" element={<PaymentMethod />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<h1>404 Not Found!</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Home;
