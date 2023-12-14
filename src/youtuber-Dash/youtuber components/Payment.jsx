import { BsCreditCard } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import {CiMoneyBill} from "react-icons/ci"
import "../youtStyles/paymentStyle.css"

import creditCard from "../img/creditCard.jpg"
import visaCard from "../img/visaCard.jpeg";

// PaymentForm.js

import React, { useState } from 'react';
// import './PaymentForm.css';

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for payment processing here
    console.log('Form Submitted:', formData);
  };

  return (
    <>
      <div className="payment-section">
        <form
          className="payment-form"
          onSubmit={handleSubmit}
          style={{ width: "500px" }}
        >
          <div className="card-input">
            <div className="card-info">
              <span>
                <img
                  src={creditCard}
                  alt=""
                  style={{ width: 70, height: 50 }}
                />

                <h3>Card Details</h3>
              </span>
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="Enter card number"
              />

              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YYYY"
              />

              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="Enter CVC ###"
              />

              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="Enter Amount"
              />
            </div>
            <div className="payment-info">
              <span>
                <img src={visaCard} alt="" style={{ width: 50, height: 40 }} />

                <h3>Amount Details</h3>
              </span>
              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="Enter CVC ###"
              />

              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="Enter Amount"
              />
              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="Enter Amount"
              />
              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="Enter Amount"
              />
            </div>
          </div>
          <div className="form-button">

            <button type="submit">Submit Payment</button>
            <button type="submit">Clear</button>

          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;
