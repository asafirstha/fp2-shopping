import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { updateTransaction } from '../redux/action/action';

const LoginAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email === 'admin@bukapedia.com' && password === 'admin123') {
      // Set loggedIn menjadi true
      setLoggedIn(true);

      // Ambil informasi transaksi dari localStorage
      const storedTransactions = localStorage.getItem('transactions');
      if (storedTransactions) {
        const transactions = JSON.parse(storedTransactions);

        // Update transaksi ke dalam Redux state
        dispatch(updateTransaction(transactions));
      }
    }
  };

  return (
    <div>
      <h2>Login as Admin</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {loggedIn && <Navigate to="/homeAdmin" />} 
    </div>
  );
};

export default LoginAdmin;
