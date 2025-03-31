import React from "react";
import '../Styles/Navbar.css';
import logo from '../Assets/LOGO 2.png';

export default function Navbar() {
  return (
    <div className="nav-main">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="sections">
          <p className="section">Home</p>
          <p className="section">Our mission</p>
          <p className="section">Contact</p>
        </div>
        <div className="user-buttons">
          <p className="login-button">Login</p>
          <button className="register-button">Sign up</button>
        </div>
      </div>
    </div>
  );
}