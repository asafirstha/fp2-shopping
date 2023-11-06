import React from "react";
import "./style/header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function countProduct(product) {
  let count = 0;
  product.forEach((element) => {
    count += element.count;
  });
  return count;
}

function Header() {
  const store = useSelector((state) => state.productCart);

  return (
    <div className="header">
      <div className="header__subcontainer">
        <div className="header__icon">
          <Link to="/">Home</Link>
        </div>
        <Link to="/cart">
          <div className="header__cart">
            🛒<span className="product__count"> ({countProduct(store)})</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
