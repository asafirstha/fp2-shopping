import React from "react";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <div>
      <h2>Payment Confirmation</h2>
      <p>Pembayaran Anda Sukses!</p>
      <Link to="/Home">Kembali ke Beranda</Link>
    </div>
  );
}

export default Confirmation;
