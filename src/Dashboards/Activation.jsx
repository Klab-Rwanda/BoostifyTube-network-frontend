import React, { useState } from "react";
import "../styles/Activation.css";
import { MdOutlineCancel } from "react-icons/md";

const Activation = ({ onClose }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePayment = async () => {
    try {
      setPaymentStatus("success");
    } catch (error) {
      console.error("Error initiating payment:", error);
      setPaymentStatus("failed");
    }
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <div className="overlay">
      <button
        onClick={onClose}
        style={{ color: "red", backgroundColor: "white" }}
        className="close"
      >
        <MdOutlineCancel style={{ fontSize: "3rem" }} />
      </button>
      <div className="activation-page">
        <div className="instructions-section" style={{ marginTop: "2rem" }}>
          <h1 style={{ color: "#FEE60C" }}>Account Activation</h1>
          <p style={{ textAlign: "start" }}>
            To be able to start earning by watching videos through our app you
            need to pay activation fee(membership fee) of $2. Submit the
            activation fee through the provided payment methods and wait for
            confirmation of your activation status.
          </p>
        </div>

        <div className="payment-sectionn">
          <p>Select Payment Method:</p>
          <select
            id="select-payment-method"
            onChange={handlePaymentMethodChange}
            value={selectedPaymentMethod}
          >
            <option value="">Select</option>
            <option value="momo">MOMO</option>
            <option value="airtel">Airtel Money</option>
            <option value="paypal">PayPal</option>
            <option value="visa">Visa</option>
          </select>

          {selectedPaymentMethod && (
            <div className="payment-formm">
              {selectedPaymentMethod === "momo" && (
                <div>
                  <label style={{ color: "black" }}>Enter MOMO Number:</label>
                  <input type="text" />
                </div>
              )}

              {selectedPaymentMethod === "airtel" && (
                <div>
                  <label style={{ color: "black" }}>
                    Enter Airtel Money Number:
                  </label>
                  <input type="text" />
                </div>
              )}

              {selectedPaymentMethod === "paypal" && (
                <div>
                  <label style={{ color: "black" }}>Enter PayPal Email:</label>
                  <input type="email" />
                </div>
              )}

              {selectedPaymentMethod === "visa" && (
                <div style={{ textAlign: "start" }}>
                  <label style={{ color: "black" }}>Card Number:</label>
                  <input id="inputt1" type="text" /> <br />
                  <label style={{ color: "black" }}>
                    Expiration Date:
                  </label>{" "}
                  <br />
                  <input id="inputt1" type="text" placeholder="MM/YYYY" />{" "}
                  <br />
                  <label style={{ color: "black" }}>CVV:</label> <br />
                  <input id="inputt1" type="text" /> <br />
                </div>
              )}
            </div>
          )}

          <button className="button1" onClick={handlePayment}>
            Submit Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activation;
