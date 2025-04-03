import React from "react";
import '../Styles/ToDoList.css';
import Task from "./Task";

export default function ToDoList(props) {

  const arr = props.taskList;
  let i = 1;
  const displayArr = arr.map((item) => <Task
    name = {item.name}
    description = {item.description}
    dueDate = {item.dueDate}
    setIsAdding = {props.setIsAdding}
    index = {i++}
    taskList = {props.taskList}
    setTaskList = {props.setTaskList}
   />
  );

  return (
    <div className="todolist-container">
      <p className="todolist-title">Your daily goals</p>
      <button className="addtask-button" onClick={() => props.setIsAdding(true)}>+ New Task</button>
      <div className="task-list-container">
        <div className="header-list">
          <p className="section-todolist">Number</p>
          <p className="section-todolist">Goal Name</p>
          <p className="section-todolist">Due Date</p>
          <p className="section-todolist">Status</p>
        </div>
        {displayArr}
      </div>
    </div>
  );
}