import { BsCreditCard } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import {CiMoneyBill} from "react-icons/ci"
import "../youtStyles/paymentStyle.css"
import { useForm } from "react-hook-form";
import axios from "axios";

import creditCard from "../img/creditCard.jpg"
import visaCard from "../img/visaCard.jpeg";

// PaymentForm.js

import React, { useState } from 'react';
// import './PaymentForm.css';

const Payment = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = async (data) => {
    const accessToken = localStorage.getItem("token");
    console.log("payment form send",data);
    console.log("my token", accessToken);

    try {
      // Send a POST request to the server endpoint
      const response = await axios.post(
        "https://boostifytube-network-api.onrender.com/api/v1/payment/feeForAccount",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Handle the response
      if (response.status === 200) {
        alert("payment send succefully");
        // Optionally reset the form or perform other actions
      } else {
        const errorData = response.data; // Assuming your API returns error information
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while uploading the video");
    }
  };


  return (
    <>
      <div className="payment-section">
        <form
          className="payment-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
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
              <label htmlFor="cardNumber">Phone Number</label>
              <input
                type="text"
                id="cardNumber"
                name="Number"
                {...register("Number", {
                  required: {
                    value: true,
                    message: "Phone Number is very Required",
                  },
                })}
                placeholder="phone number"
              />

              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YYYY"
              />

              {/* <label htmlFor="cvc">CVC</label>
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
              /> */}
            </div>
            <div className="payment-info">
              <span>
                <img src={visaCard} alt="" style={{ width: 50, height: 40 }} />

                <h3>Amount Details</h3>
              </span>
              <label htmlFor="cvc">Amount</label>
              <input
                type="text"
                id="cvc"
                name="Amount"
                {...register("Amount", {
                  required: {
                    value: true,
                    message: "Amount Money is very Required",
                  },
                })}
                placeholder="Enter CVC ###"
              />

              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                placeholder="Enter Amount"
              />
              {/* <label htmlFor="cvc">CVC</label>
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
              /> */}
            </div>
          </div>
          <div className="form-button">
            <button type="submit">Submit Payment</button>
            <button type="reset">Clear</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;
