import React from "react";
import '../Styles/Register.css';
import back from '../Assets/Background.svg';
import logo from '../Assets/LOGO 2.png';
import google from '../Assets/flat-color-icons_google.svg';
import { Link, Navigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../Authentification/Auth";
import { useAuth } from "../Authentification/AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

  const navigation = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setconfirmPassword] = React.useState('');
  const [isRegistering, setIsRegistering] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const userLogged  = useAuth();

  const onSubmit = async (e) => {
      e.preventDefault()
      if(!isRegistering) {
          setIsRegistering(true);
          await doCreateUserWithEmailAndPassword(email, password);
      }
  }

  return (
    <div className="login-container">

      <img src={back} style={{width: 100 + '%', position: 'absolute'}}></img>
      <form className="login-div" onSubmit={onSubmit}>
        <img className="logo" src={logo}></img>
        <p className="title-login">Create your account</p>
        <div className="google-signin-div">
          <button className="signin-with-google">
            <img src={google} className="google-icon"></img>
            Sign in with Google
          </button>
        </div>
        <p className="p-continue">or continue with email</p>
        <div className="data-input-flexbox">
          <div className="data-input-div">
            <p className="label">EMAIL ADRESS</p>
            <input className="data-input" placeholder="your@email.com" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
          </div>
          <div className="data-input-div">
            <p className="label">PASSWORD</p>
            <input className="data-input" placeholder="Enter your password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
          </div>
        </div>
        <div className="terms">
          <input className="terms-of-policy" type="checkbox"></input>
          <p className="forgot-password">I agree to InspireHub's Terms of Service and Privacy Policy</p>
        </div>
        <button className="signin-button">GET STARTED</button>
        <p className="option-register">Already have an account? <Link to={'/login'}><span className="register-link">Sign In</span></Link></p>
      </form>
    </div>
  );
}