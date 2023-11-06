import React, { useState } from 'react';
import logo from "../../assets/home-navbar-img.png";
import "./login.css";
import facebook from "../../assets/facebook.png";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import login_img from "../../assets/login-img.png"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleShow = () => {
    setShow(!show)
  }

  const handleLogin = () => {
    if (email === 'serdar' && password === 'sardor2210') {
      window.localStorage.setItem('access', true);
      window.location.pathname = '/'
    } else {
      toast.error('Something is wrong!', {});
    }
  };



  return (
    <div className='login'>
      <div className='login-logo'>
        <img src={logo} alt="logo-login" />
        <h1>Xisobot</h1>
      </div>
      <div className="text-container">
        <h1>Log in to</h1>
        <h3>Lorem Ipsum is simply </h3>
        <p>If you don’t have an account register <br /> You can <Link to="/">Register here !</Link></p>
        <img src={login_img} alt="" />
      </div>
      <div className="login-container">
        <h2>Log in</h2>
        <div className="inputBx">
          <input type="text" placeholder='Enter email or user name' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button className='show-hide' onClick={handleShow}><i className={show ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i></button>
          <input type={show ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <p>Forgot password ?</p>
        </div>
        <button className='login-submit' onClick={handleLogin}>Login</button>
        <p>or continue with</p>
        <div className="social-medias">
          <img src={facebook} alt="f" />
          <img src={apple} alt="a" />
          <img src={google} alt="g" />
        </div>
      </div>
    </div >
  )
}
