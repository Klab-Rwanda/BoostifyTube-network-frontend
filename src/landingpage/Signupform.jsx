import React, { useState } from "react";
import "./Signupform.css";
import img from "../images/welcome.png";

function Signupform() {
  const [activeForm, setActiveForm] = useState("Youtuber");
  const switchForm = (formType) => {
    setActiveForm(formType);
  };
  const renderForm = () => {
    if (activeForm === "Youtuber") {
      return (
        <form action="process_signup.php" method="post" className="signup-form">
          <label for="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <div className="country-phone">
            <div>
              <label for="country">Country:</label>
              <input type="text" id="country" name="country" required />
            </div>

            <div>
              <label for="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </div>

          <div className="gender-age">
            <div>
              <label for="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                required
                className="select-gender"
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
              <input type="number" name="age" required />
            </div>
          </div>

          <label for="payment">Mode of Payment:</label>
          <select id="payment" name="payment" required>
            <option value="credit_card" style={{ color: "#191943" }}>
              Credit Card
            </option>
            <option value="paypal" style={{ color: "#191943" }}>
              PayPal
            </option>
          </select>

          <label for="text">Channel Name:</label>
          <input type="text" id="channel" name="channel" required />

          <label for="text">Link to the channel:</label>
          <input type="text" id="link" name="link" required />

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit" className="buttonn">
            Signup
          </button>
        </form>
      );
    } else if (activeForm === "Client") {
      return (
        <form action="process_signup.php" method="post" className="signup-form">
          <label for="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" required />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <div className="country-phone">
            <div>
              <label for="country">Country:</label>
              <input type="text" id="country" name="country" required />
            </div>

            <div>
              <label for="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </div>
          <div className="gender-age">
            <div>
              <label for="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                required
                className="select-gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label for="age">Age:</label>
              <input type="number" name="age" required />
            </div>
          </div>
          <label for="payment">Mode of Payment:</label>
          <select id="payment" name="payment" required>
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
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
        <div>
          <img src={img} className="signupimage" />
        </div>
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
