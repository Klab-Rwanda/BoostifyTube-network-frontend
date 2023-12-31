import React, { useState } from "react";
import "./Signupform.css";
import person from "../images/person.jpg";
import axios from "axios";

function Signupform() {

  const [formData, setFormData] = useState({
    Email: '',  
    FullName: '', 
    Password:'', 
    Country: '', 
    Gender: '',
    Age : '',
    TelNumber: '',
    ChannelName:'',
    linkofTheChannel:'',
    PaymentStatus:'',
    
  });

  const [activeForm, setActiveForm] = useState("Youtuber");
  const switchForm = (formType) => {
    setActiveForm(formType);
  };


const handleChange = (e) => {
  const { name, value } = e.target;
  let updatedFormData = { ...formData };
  updatedFormData[name] = value;
  updatedFormData.role = activeForm === "Youtuber" ? "Youtuber" : "Viewer";
  setFormData(updatedFormData);
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      await axios.post(
        "https://boostifytube-network-api.onrender.com/api/v1/user/signup",
        formData
      );
      alert("account created sucessfully");
      window.location.href = "login";
    } catch (error) {
      console.log(error.response);
      alert(error);
    }
    

  };

  console.log(formData);
  const renderForm = () => {
    if (activeForm === "Youtuber") {
      return (
        
        <form action="process_signup.php" method="post" className="signup-form"onSubmit={handleSubmit}>
          <label for="fullname">Full Name:</label>
          <input className="inputt" type="text" id="FullName" name="FullName" required  
            value={formData.FullName}
            onChange={handleChange}/>

          <label for="email">Email:</label>
          <input className="inputt" type="Email" id="Email" name="Email" required 
          value={formData.Email}
          onChange={handleChange}/>

          <div className="country-phone">
            <div>
              <label for="country">Country:</label>
              <input className="inputt" type="Country" id="Country" name="Country" required 
              value={formData. Country}
              onChange={handleChange}/>
            </div>

            <div>
              <label for="phone">Phone:</label>
              <input className="inputt" type="TelNumber" id="TelNumber" name="TelNumber" required 
              value={formData. TelNumber}
              onChange={handleChange}/>
            </div>
          </div>

          <div className="gender-age">
            <div>
              <label for="gender">Gender:</label>
              <select
                id="Gender"
                name="Gender"
                required
                className="inputt"
                value={formData. Gender}
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
              <label for="age">Age:</label>
              <input className="inputt" type="Age" name="Age" required 
              value={formData. Age}
              onChange={handleChange}/>
            </div>
          </div>

          <label for="payment">Mode of Payment:</label>
          <select id="PaymentStatus" name="PaymentStatus" className="inputt" required
           value={formData. PaymentStatus}
           onChange={handleChange}>
            <option value="credit_card" style={{ color: "#191943" }}>
              Credit Card
            </option>
            <option value="paypal" style={{ color: "#191943" }}>
              PayPal
            </option>
          </select>

          <label for="text">Channel Name:</label>
          <input className="inputt" type="ChannelName" id="ChannelName" name="ChannelName" required 
           value={formData. ChannelName}
           onChange={handleChange}/>

          <label for="text">Link to the channel:</label>
          <input className="inputt" type="linkofTheChannel" id="linkofTheChannel" name="linkofTheChannel" required 
           value={formData. linkofTheChannel}
           onChange={handleChange}/>

          <label for="password">Password:</label>
          <input className="inputt" type="Password" id="Password" name="Password" required 
          value={formData. Password}
          onChange={handleChange}/>

          <button type="submit" className="buttonn">
            Signup
          </button>
        </form>
      );
    } else if (activeForm === "Client") {
      return (
        <form method="post" className="signup-form" onSubmit={handleSubmit}>
          <label for="fullname">Full Name:</label>
          <input className="inputt" type="text" id="FullName" name="FullName" 
          value={formData.FullName}
          onChange={handleChange}
          required />
          <label for="email">Email:</label>
          <input className="inputt" type="Email" id="Email" name="Email"
           value={formData.Email}
           onChange={handleChange}
          required />
          <div className="country-phone">
            <div>
              <label for="country">Country:</label>
              <input className="inputt" type="Nationality" id="Country" name="Country"
              value={formData. Country}
              onChange={handleChange}
             />
            </div>

            <div>
              <label for="phone">Phone:</label>
              <input className="inputt" type="TelNumber" id="TelNumber" name="TelNumber" 
              value={formData. TelNumber}
              onChange={handleChange}
              required />
            </div>
          </div>
          <div className="gender-age">
            <div>
              <label for="gender">Gender:</label>
              <select
                id="Gender"
                name="Gender"
                required
                className="inputt"
                value={formData. Gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label for="age">Age:</label>
              <input className="inputt" type="Age" name="Age" id="Age"
              value={formData. Age}
              onChange={handleChange}
              required/>
            </div>
          </div>
          <label for="payment">Mode of Payment:</label>
          <select id="PaymentStatus" name="PaymentStatus" className="inputt"
          value={formData. PaymentStatus}
          onChange={handleChange}
          required>
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          <label for="password">Password:</label>
          <input className="inputt" type="Password" id="Password" name="Password" 
          value={formData. Password}
          onChange={handleChange}
          required />
          <button type="submit" className="buttonn">
            Signup
          </button>
        </form>
      );
    }
  };

  return (
    <div className="signup">
      <div className="signup-image">
        <img src={person} />
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
