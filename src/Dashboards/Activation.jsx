
import React, { useState } from "react";
import "../styles/Activation.css";

const Activation = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = async () => {
    try {
      setPaymentStatus("success");
    } catch (error) {
      console.error("Error initiating payment:", error);
      setPaymentStatus("failed");
    }
  };

  return (
    <div className="overlay">
      <div className="activation-page">
        <h1>Account Activation</h1>

        <div className="instructions-section">
          <p>Follow the steps below to activate your account:</p>
          <ol>
            <li>Review your account information.</li>
            <li>
              Submit the activation fee through the provided payment methods.
            </li>
            <li>Wait for confirmation of your activation status.</li>
          </ol>
        </div>

        <div className="account-info-section">
          <p>Account Information: [User-specific details]</p>
          <p>Activation Fee: $2000</p>
        </div>

        <div className="payment-section">
          {/* Display payment methods and details here */}
          <button onClick={handlePayment}>Submit Payment</button>
        </div>

        {paymentStatus && (
          <div className={`confirmation-section ${paymentStatus}`}>
            {/* Display confirmation message and details based on payment status */}
            {paymentStatus === "success" ? (
              <p>Payment successful! Your account is now activated.</p>
            ) : (
              <p>Payment failed. Please try again or contact support.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Activation;
