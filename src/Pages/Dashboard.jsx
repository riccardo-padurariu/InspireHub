import React from "react";
import Sidebar from "../Components/Sidebar";
import back from '../Assets/Background.svg';


export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <img className="back" src={back}></img>
      <Sidebar />
    </div>
  );
}