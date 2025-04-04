import React from "react";
import '../Styles/Sidebar.css';
import { useAuth } from "../Authentification/AuthContext";
import logo from '../Assets/LOGO 2.svg';
import pfp from '../Assets/iconamoon_profile-fill.svg';
import home from '../Assets/gravity-ui_house.svg';
import ch from '../Assets/tabler_bulb.svg';
import comm from '../Assets/fluent_people-community-12-filled.svg';
import ai from '../Assets/mingcute_ai-fill.svg';
import sett from '../Assets/material-symbols_settings-rounded.svg';
import stats from '../Assets/uil_statistics.svg';
import { Link } from "react-router-dom";

export default function Sidebar(props) {

  const { currentUser } = useAuth();

  

  return (
    <div className="sidebar-container">
      <Link to={'/home'}><img className="logo-dash" src={logo}></img></Link>
      <div className="pfp">
        <img className="pfp-img" src={pfp}></img>
        <div className="infos">
          <p className="greet-dash">Welcome back, {currentUser.displayName}!</p>
          <p className="greet-email">{currentUser.email}</p>
          <div className="streak-div">
            <img className="streak-img" src={stats}></img>
            <p className="streak-num">123 days</p>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="sections-dash">
          <div className="section-dash">
            <img className="section-dash-img" src={home}></img>
            <p className="section-p">Home</p>
          </div>
          <div className="section-dash">
            <img className="section-dash-img" src={ch}></img>
            <p className="section-p">Challenges</p>
          </div>
          <div className="section-dash">
            <img className="section-dash-img" src={comm}></img>
            <p className="section-p">Community</p>
          </div>
        </div>
        <div className="AI-settings">
          <div className="section-dash-ai">
            <img className="section-dash-img" src={ai}></img>
            <p className="section-p">AI Chatbot</p>
          </div>
          <div className="section-dash">
            <img className="section-dash-img" src={sett}></img>
            <p className="section-p">Settings</p>
          </div>
          <div className="copyright-dash">
            <p className="p1">Copyright &#169; 2025 InspireHub</p>
            <p className="p1">Prototype version 0x001</p>
          </div>
        </div>
      </div>
    </div>
  );
}