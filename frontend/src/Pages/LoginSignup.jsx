import React, { useState } from 'react';
import './LoginSignup.css';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("Signup Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const toggleForm = () => {
    setState(state === "Login" ? "Sign Up" : "Login");
  };

  return (
    <div className='loginsignup'>
      <div className="loginsingup-container">
        {state === "Login" ? (
          <>
            <h1>Login</h1>
            <form className="loginsignup-form">
              <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email Address' />
              <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Password' />
              <button type="button" onClick={login}>Login</button>
            </form>
            <p className='loginsignup-login'>Don't have an account? <span onClick={toggleForm}>Sign Up Here</span></p>
          </>
        ) : (
          <>
            <h1>Sign Up</h1>
            <form className="loginsignup-form">
              <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Your Name' />
              <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email Address' />
              <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Password' />
              <button type="button" onClick={signup}>Sign Up</button>
            </form>
            <p className='loginsignup-login'>Already have an account? <span onClick={toggleForm}>Login Here</span></p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
