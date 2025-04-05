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

  function setPage(path){
    if(path === 'home'){
      props.setPageSelector({
        home: true,
        challenges: false,
        community: false,
        aiChatbot: false,
        setting: false
      }) 
    } else if(path === 'challenges'){
      props.setPageSelector({
        home: false,
        challenges: true,
        community: false,
        aiChatbot: false,
        setting: false
      })
    } else if(path === 'community'){
      props.setPageSelector({
        home: false,
        challenges: false,
        community: true,
        aiChatbot: false,
        setting: false
      })
    } else if(path === 'ai-chatbot'){
      props.setPageSelector({
        home: false,
        challenges: false,
        community: false,
        aiChatbot: true,
        setting: false
      })
    } else if(path === 'settings'){
      props.setPageSelector({
        home: false,
        challenges: false,
        community: false,
        aiChatbot: false,
        setting: true
      })
    }
  }

  const styleBoxNormal = {
    padding: '3px 13px',
    width: '211px',
    height: '40px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border:'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '5px'
  }

  const styleBoxSelected = {
    padding: '3px 13px',
    width: '211px',
    height: '40px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border:'1px solid',
    borderRadius: '6px',
    cursor: 'pointer',
    background: 'linear-gradient(90deg, rgba(190, 49, 68, 0) 0%, #872341 75%)',
    borderColor: '#872341',
    marginTop: '5px'
  }

  const stylePNormal = {
    color: '#737373',
    fontSize: '17px',
    margin: 0
  }

  const stylePSelected = {
    color: 'white',
    fontSize: '17px',
    margin: 0
  }

  function isSelected(path){
    if(path === 'home'){
      return props.pageSelector.home;
    } else if(path === 'challenges'){
      return props.pageSelector.challenges;
    } else if(path === 'community'){
      return props.pageSelector.community;
    } else if(path === 'ai-chatbox'){
      return props.pageSelector.aiChatbot;
    } else if(path === 'settings'){
      return props.pageSelector.setting;
    }
    return 0;
  }

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
          <div className="section-dash" style={isSelected('home') ? styleBoxSelected : styleBoxNormal} onClick={() => setPage('home')}>
            <img className="section-dash-img" src={home}></img>
            <p className="section-p" style={isSelected('home') ? stylePSelected : stylePNormal}>Home</p>
          </div>
          <div className="section-dash" style={isSelected('challenges') ? styleBoxSelected : styleBoxNormal} onClick={() => setPage('challenges')}>
            <img className="section-dash-img" src={ch}></img>
            <p className="section-p" style={isSelected('challenges') ? stylePSelected : stylePNormal}>Challenges</p>
          </div>
          <div className="section-dash" style={isSelected('community') ? styleBoxSelected : styleBoxNormal} onClick={() => setPage('community')}>
            <img className="section-dash-img" src={comm}></img>
            <p className="section-p" style={isSelected('community') ? stylePSelected : stylePNormal}>Community</p>
          </div>
        </div>
        <div className="AI-settings">
          <div className="section-dash-ai" style={isSelected('ai-chatbot') ? styleBoxSelected : styleBoxNormal} onClick={() => setPage('ai-chatbot')}>
            <img className="section-dash-img" src={ai}></img>
            <p className="section-p" style={isSelected('ai-chatbot') ? stylePSelected : stylePNormal}>AI Chatbot</p>
          </div>
          <div className="section-dash" style={isSelected('settings') ? styleBoxSelected : styleBoxNormal} onClick={() => setPage('settings')}>
            <img className="section-dash-img" src={sett}></img>
            <p className="section-p" style={isSelected('settings') ? stylePSelected : stylePNormal}>Settings</p>
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