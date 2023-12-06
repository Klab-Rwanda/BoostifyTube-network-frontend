import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import imag from "../images/login-picture.png";
import SuperAdmin from "../Dashboards/DashLayout";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    Email: '',  
    Password: '', 
    
  });

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your login logic here
  //   console.log("Email:", email, "Password:", password);
  // };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, });
  };
 const navigate =useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{ console.log(formData)
   const res =    await axios.post ('https://boostifytube-network-api.onrender.com/api/v1/auth/login',formData)
alert('login sucessfully')
localStorage.setItem("token",res.data.access_token)
localStorage.setItem("loggedUser",JSON.stringify(res.data.user) )
// if(res.data.user.PaymentStatus ==' Credit Card'){
//   navigate('/dashboard')
// }
// else{
//   navigate('/')
// }
window.location.href='dashboard'


 console.log(res.data);
    } 

 catch (error){
console.log(error.response)
alert(error.response.data.message)
 }
 
};

  return (
    <div className="login">
      <div className="login-img">
        <img src={imag} />
      </div>

      <div className="login-container">
        <b>Login here</b>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-email">
            <label>Email:</label>
             <input type="Email"  name="Email" required 
           value={formData.Email}
          onChange={handleChange}/>
            <label>Password:</label>
            <input type="Password"  name="Password" required 
           value={formData.Password}
           onChange={handleChange} />
          </div>

          <button
            type="submit"
            className="login-button"
            onClick={<SuperAdmin />}
          >
            Login
          </button>
        </form>
        <p className="login-signup">
          New to the site?
          <Link className="login-link" to="signup">
            {" "}
            signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
