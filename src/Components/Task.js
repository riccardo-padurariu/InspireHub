import React from "react";
import '../Styles/Task.css'

export default function Task(props) {

  function deleteTask() {
    const arr = props.taskList;
    const newArr = arr.filter((item,index) => index != props.index-1);
    props.setTaskList(newArr);
  }

  function editTask(){
    props.setIsAdding(true);
  }

  return (
    <div className="task-container">
      <div className="task-info">
        <p className="task-attribute">{props.index}</p>
        <p className="task-attribute task-name">{props.name}</p>
        <p className="task-attribute date">{props.dueDate}</p>
        <p className="task-attribute">In progress</p>
      </div>
      <div className="user-todolist-buttons">
        <button className="edit-button" onClick={editTask}>Edit</button>
        <button className="delete-button" onClick={deleteTask}>Delete</button>
      </div>
    </div>
  );
}