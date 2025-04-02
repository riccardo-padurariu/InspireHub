import React from "react";
import Sidebar from "../Components/Sidebar";
import back from '../Assets/Background.svg';
import Quote from "../Components/Quote";
import ToDoList from "../Components/ToDoList";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <img className="back" src={back}></img>
      <Sidebar />
      <div className="features-dash">
        <Quote />
        <ToDoList />
      </div>
    </div>
  );
}