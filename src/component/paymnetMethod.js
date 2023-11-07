import React, { useState } from "react";
import { Link } from "react-router-dom";

function PaymentMethod() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    if (selectedPaymentMethod) {
      // Proses pembayaran sesuai metode yang dipilih (misalnya, Anda dapat mengirim permintaan ke penyedia pembayaran)
      // Di sini kami hanya menampilkan konfirmasi pembayaran
      setPaymentSuccess(true);
    }
  };

  return (
    <div>
      <h2>Payment Method</h2>
      <p>Pilih metode pembayaran Anda:</p>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            checked={selectedPaymentMethod === "creditCard"}
            onChange={() => setSelectedPaymentMethod("creditCard")}
          />
          Kartu Kredit
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="bankTransfer"
            checked={selectedPaymentMethod === "bankTransfer"}
            onChange={() => setSelectedPaymentMethod("bankTransfer")}
          />
          Transfer Bank
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={selectedPaymentMethod === "paypal"}
            onChange={() => setSelectedPaymentMethod("paypal")}
          />
          PayPal
        </label>
      </div>
      {paymentSuccess ? (
        <div style={{ color: "green" }}>Pembayaran Sukses!</div>
      ) : (
        <button onClick={handlePayment}>OK</button>
      )}
    </div>
  );
}

export default PaymentMethod;
