
import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import  imag from '../images/login-picture.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className='login'>
<div className='login-img'>
    <img src= {imag} />
</div>


<div className="login-container">
        <b>Login here</b>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='login-email'>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
       <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
       </div>
        
   
        
     <button type="submit" className='login-button'>Login</button>
     
     
        
      </form>
      <p className='login-signup'>New to the site?<Link className='login-link' to='signup'> signup</Link></p>
    </div>
    </div>
   
  );
};

export default Login;
