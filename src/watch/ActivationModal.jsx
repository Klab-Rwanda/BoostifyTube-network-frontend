import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ActivationModal = ({ onClose }) => {
  const [activeMethod, setActiveMethod] = useState("mobileMoney");

  const handleMethodChange = (method) => {
    setActiveMethod(method);
  };
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = async (data) => {
    const accessToken = localStorage.getItem("token");
    console.log("payment form send", data);
    console.log("my token", accessToken);

    try {
      const response = await axios.post(
        "https://boostifytube-network-api.onrender.com/api/v1/payment/feeForAccount",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("payment send succefully");
      } else {
        const errorData = response.data;
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while uploading the video");
    }
  };

  return (
    <div
      className="overlay"
      style={{
        width: "100%",
        marginLeft: "14%",
        height: "90%",
        marginTop: "6.5rem",
      }}
    >
      <PaymentContainer>
        {" "}
        <CloseButton onClick={onClose}>
          <IoMdCloseCircleOutline
            style={{ fontSize: "2rem", color: "#191943" }}
          />
        </CloseButton>
        <PaymentMethods>
          <MethodButton
            onClick={() => handleMethodChange("mobileMoney")}
            active={activeMethod === "mobileMoney"}
          >
            Mobile Money
          </MethodButton>
          <MethodButton
            onClick={() => handleMethodChange("paypal")}
            active={activeMethod === "paypal"}
          >
            PayPal
          </MethodButton>
          <MethodButton
            onClick={() => handleMethodChange("creditCard")}
            active={activeMethod === "creditCard"}
          >
            Credit Card
          </MethodButton>
        </PaymentMethods>
        <PaymentFormContainer>
          {activeMethod === "mobileMoney" && (
            <MobileMoneyForm onSubmit={handleSubmit(onSubmit)}>
              {/* Mobile Money Form Fields */}
              <div className="paymentForm">
                <div className="FormDiv">
                  <label style={{ color: "#191943" }}>
                    Mobile Money Number:
                  </label>
                  {/* <input
                  type="text"
                  placeholder="Enter your mobile money number"
                /> */}
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
                </div>
                <div className="FormDiv">
                  <label style={{ color: "#191943" }}>Payment Amount:</label>
                  {/* <input type="text" placeholder="EnterAmount" /> */}
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
                    placeholder="Enter Amount"
                  />
                </div>
              </div>
              <div className="form-button">
                <button type="submit">Pay with Mobile Money</button>
                <button>clear</button>
              </div>
            </MobileMoneyForm>
          )}

          {activeMethod === "paypal" && (
            <PaypalForm>
              {/* PayPal Form Fields */}
              <div className="paymentForm">
                <div className="FormDiv">
                  <label style={{ color: "#191943" }}>PayPal Email:</label>
                  <input type="text" placeholder="Enter your PayPal email" />
                  <label style={{ color: "#191943" }}>User Name:</label>
                  <input type="text" placeholder="Enter your PayPal email" />
                </div>
                <div className="FormDiv">
                  <label style={{ color: "#191943" }}>Amount:</label>
                  <input type="text" placeholder="Enter your PayPal email" />
                  <label style={{ color: "#191943" }}>Phone Number:</label>
                  <input type="text" placeholder="Enter your PayPal email" />
                </div>
              </div>
              <div className="form-button">
                <button>Pay with PayPal</button>
                <button>clear</button>
              </div>
            </PaypalForm>
          )}

          {activeMethod === "creditCard" && (
            <CreditCardForm>
              <div className="paymentForm">
                <div className="FormDiv">
                  <label style={{ color: "#191943" }}>
                    Credit Card Number:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your credit card number"
                  />
                  <label style={{ color: "#191943" }}>Expiry Date:</label>
                  <input type="text" placeholder="MM/YYYY" />
                </div>
                <div className="FormDiv">
                  <label style={{ color: "#191943" }}>Amount</label>
                  <input type="text" placeholder="Enter your Amount" />
                  <label style={{ color: "#191943" }}>CVC:</label>
                  <input type="text" placeholder="CVC" />
                </div>
              </div>
              <div className="form-button">
                <button>Pay with Credit Card</button>

                <button>clear</button>
              </div>
            </CreditCardForm>
          )}
        </PaymentFormContainer>
      </PaymentContainer>
    </div>
  );
};
const PaymentContainer = styled.div`
  max-width: 800px;
  max-height: 1000px;
  margin: 3rem 0rem 3rem 7rem;
  // border: 1px solid red;
  //   background-color: white
  box-shadow: 0px 2px 2px 2px #ccc;
  padding: 2rem;
  background-color: #ffffff;

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 0.1px solid #ccc;
  }
  label {
    color: "#191943";
  }
  .paymentForm {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
  .FormDiv {
    display: flex;
    flex-direction: column;
    gap: 0.51rem;
    margin-bottom: 1rem;
    flex: 1;
  }
  .form-button button {
    background-color: var(--skin-color);
    width: 50%;
    height: 40px;
    border-radius: 10px;
    border: none;
  }
  .form-button button:hover {
    background-color: #3498db;
    color: #fff;
    cursor: pointer;
    width: 50%;
    height: 40px;
    border-radius: 10px;
    border: none;
  }
`;
const CloseButton = styled.button`
  margin-left: 90%;
  padding: 0.5rem 1rem;
  top: 10px;
  right: 10px;
  //   background-color: #fee60c;
  border: none;
  cursor: pointer;
`;

const PaymentMethods = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const MethodButton = styled.button`
  padding: 10px;
  background-color: ${(props) => (props.active ? "#fee60c" : "#191943")};
  color: ${(props) => (props.active ? "#000" : "#fff")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const PaymentFormContainer = styled.div`
  overflow: hidden;
`;

const MobileMoneyForm = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  button {
    background-color: var(--skin-color);
    width: 50%;
    height: 40px;
    border-radius: 10px;
    border: none;
  }
  .form-button button:hover {
    background-color: #3498db;
    color: #fff;
    cursor: pointer;
    width: 50%;
    height: 40px;
    border-radius: 10px;
    border: none;
  }
`;

const PaypalForm = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CreditCardForm = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default ActivationModal;
