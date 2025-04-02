import React from "react";
import '../Styles/ToDoList.css';
import Task from "./Task";

export default function ToDoList() {
  return (
    <div className="todolist-container">
      <p className="todolist-title">Your daily goals</p>
      <button className="addtask-button">+ New Task</button>
      <div className="task-list-container">
        <div className="header-list">
          <p className="section-todolist">Number</p>
          <p className="section-todolist">Goal Name</p>
          <p className="section-todolist">Due Date</p>
          <p className="section-todolist">Status</p>
        </div>
        <Task />
      </div>
    </div>
  );
}