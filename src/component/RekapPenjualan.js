import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


const RekapPenjualan = () => {
    
    const transactions = useSelector((state) => state.transactions);
    console.log('Transactions:', transactions);

 
  const totalRevenue = transactions
    ? transactions.reduce((total, transaction) => {
        return total + transaction.amount;
      }, 0)
    : 0;

  useEffect(() => {
   
  }, []); 
  
  return (
    <div>
      <h2>Rekap Penjualan</h2>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Produk</th>
            <th>Harga</th>
            <th>Terjual</th>
            <th>Pendapatan</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.product}</td>
                <td>${transaction.price}</td>
                <td>{transaction.quantity}</td>
                <td>${transaction.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <p>Total Pendapatan: ${totalRevenue}</p>
      </div>
    </div>
  );
};

export default RekapPenjualan;
