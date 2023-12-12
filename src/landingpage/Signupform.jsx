import React, { useState } from "react";
import "./Signupform.css";
import axios from "axios";
import img from "../images/welcome.png";

function Signupform() {
  const [formData, setFormData] = useState({
    Email: "",
    FullName: "",
    Password: "",
    Country: "",
    Gender: "",
    Age: "",
    TelNumber: "",
    ChannelName: "",
    linkofTheChannel: "",
    PaymentStatus: "",
  });

  const [activeForm, setActiveForm] = useState("Youtuber");
  const switchForm = (formType) => {
    setActiveForm(formType);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{ console.log(formData)
      await axios.post ('https://boostifytube-network-api.onrender.com/api/v1/user/signup',formData);
      alert('account created sucessfully')
      window.location.href='login'
    } 
  
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log(formData);
    await axios.post(
      "https://boostifytube-network-api.onrender.com/api/v1/user/signup",
      formData
    );
    alert("sign in sucessfully");
    window.location.href = "/login";
  } catch (error) {
    console.log(error.response);
    alert(error);
  }
};

  const renderForm = () => {
    if (activeForm === "Youtuber") {
      return (
        <form
          action=""
          method="post"
          className="signup-form"
          onSubmit={handleSubmit} // Make sure handleSubmit is defined
        >
          <label htmlFor="fullname">Full Name:</label>
          <input
            className="inputt"
            type="text"
            id="FullName"
            name="FullName"
            required
            value={formData.FullName}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            className="inputt"
            type="Email"
            id="Email"
            name="Email"
            required
            value={formData.Email}
            onChange={handleChange}
          />

          <div className="country-phone">
            <div>
              <label htmlFor="country">Country:</label>
              <input
                className="inputt"
                type="Country"
                id="Country"
                name="Country"
                required
                value={formData.Country}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                className="inputt"
                type="TelNumber"
                id="TelNumber"
                name="TelNumber"
                required
                value={formData.TelNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="gender-age">
            <div>
              <label htmlFor="gender">Gender:</label>
              <select
                id="Gender"
                name="Gender"
                required
                className="inputt"
                value={formData.Gender}
                onChange={handleChange}
              >
                <option value="male" style={{ color: "#191943" }}>
                  Male
                </option>
                <option value="female" style={{ color: "#191943" }}>
                  Female
                </option>
                <option value="other" style={{ color: "#191943" }}>
                  Other
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="age">Age:</label>
              <input
                className="inputt"
                type="Age"
                name="Age"
                required
                value={formData.Age}
                onChange={handleChange}
              />
            </div>
          </div>

          <label htmlFor="payment">Mode of Payment:</label>
          <select
            id="PaymentStatus"
            name="PaymentStatus"
            className="inputt"
            required
            value={formData.PaymentStatus}
            onChange={handleChange}
          >
            <option value="credit_card" style={{ color: "#191943" }}>
              Credit Card
            </option>
            <option value="paypal" style={{ color: "#191943" }}>
              PayPal
            </option>
          </select>

          <label htmlFor="text">Channel Name:</label>
          <input
            className="inputt"
            type="ChannelName"
            id="ChannelName"
            name="ChannelName"
            required
            value={formData.ChannelName}
            onChange={handleChange}
          />

          <label htmlFor="text">Link to the channel:</label>
          <input
            className="inputt"
            type="linkofTheChannel"
            id="linkofTheChannel"
            name="linkofTheChannel"
            required
            value={formData.linkofTheChannel}
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            className="inputt"
            type="Password"
            id="Password"
            name="Password"
            required
            value={formData.Password}
            onChange={handleChange}
          />

          <button type="submit" className="buttonn">
            Signup
          </button>
        </form>
      );
    } else if (activeForm === "Client") {
      return (
        <form action="" method="post" className="signup-form">
          <label htmlFor="fullname">Full Name:</label>
          <input
            className="inputt"
            type="text"
            id="FullName"
            name="FullName"
            value={formData.FullName}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            className="inputt"
            type="Email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
          <div className="country-phone">
            <div>
              <label htmlFor="country">Country:</label>
              <input
                className="inputt"
                type="Nationality"
                id="Country"
                name="Country"
                value={formData.Country}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                className="inputt"
                type="TelNumber"
                id="TelNumber"
                name="TelNumber"
                value={formData.TelNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="gender-age">
            <div>
              <label htmlFor="gender">Gender:</label>
              <select
                id="Gender"
                name="Gender"
                required
                className="inputt"
                value={formData.Gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="age">Age:</label>
              <input
                className="inputt"
                type="Age"
                name="Age"
                id="Age"
                value={formData.Age}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <label htmlFor="payment">Mode of Payment:</label>
          <select
            id="PaymentStatus"
            name="PaymentStatus"
            className="inputt"
            value={formData.PaymentStatus}
            onChange={handleChange}
            required
          >
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          <label htmlFor="password">Password:</label>
          <input
            className="inputt"
            type="Password"
            id="Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="buttonn">
            Signup
          </button>
        </form>
      );
    }
  };

  return (
    <div className="signup">

 
      <div className="signup-acount">
        <div>{/* <img src={img} className="signupimage" /> */}</div>
      </div>

      <div className="auth-acc">
        <h1 style={{ margin: "1rem" }}>Create account!</h1>
        <div className="form-switch-buttons">
          <button id="buttons" onClick={() => switchForm("Youtuber")}>
            Youtuber
          </button>
          <button id="buttons" onClick={() => switchForm("Client")}>
            Client
          </button>
        </div>
        {renderForm()}
      </div>
    </div>
  );
}

export default Signupform;
