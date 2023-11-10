import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './style/NavbarAdmin.css';

const Home = () => {
  const [fakeStoreProducts, setFakeStoreProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setFakeStoreProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleUpdateStock = (id, newStock) => {
    
  };

  const handleCheckout = async () => {
    try {
      
      fakeStoreProducts.forEach(async product => {
        await axios.put(`https://fakestoreapi.com/products/${product.id}`, {
          ...product,
          stock: product.stock - 1 
        });
      });
      alert('Checkout berhasil');
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Checkout gagal');
    }
  };

  return (
    <div>
      <nav> 
        <ul>
          <li><Link to="/rekap-penjualan">Rekap Penjualan</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>

      <h2>Products</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fakeStoreProducts.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} width="80" height="80" />
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  value={product.stock}
                  onChange={(e) => handleUpdateStock(product.id, parseInt(e.target.value, 10))}
                />
              </td>
              <td>
                <button onClick={() => handleUpdateStock(product.id, product.stock - 1)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Home;
