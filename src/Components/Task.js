import React from "react";
import '../Styles/Task.css'

export default function Task() {
  return (
    <div className="task-container">
      <div className="task-info">
        <p className="task-attribute">1</p>
        <p className="task-attribute task-name">Task</p>
        <p className="task-attribute date">2025/01/01</p>
        <p className="task-attribute">In progress</p>
      </div>
      <div className="user-todolist-buttons">
        <button className="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
}