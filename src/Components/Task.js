import React from "react";
import '../Styles/Task.css'

export default function Task(props) {

  function deleteTask() {
    const arr = props.taskList;
    const arrC = props.completedList;
    const newArr = arr.filter((item,index) => index != props.index-1);
    const newArrC = arrC.filter((item,index) => item != props.index-1);
    props.setTaskList(newArr);
    props.setCompletedList(newArrC);
  }

  function editTask(){
    props.setIsAdding(true);
    props.setTaskName(props.name);
    props.setTaskDescription(props.description)
    props.setTaskDate(props.dueDate)
    props.setIsEditing(true);
    props.setEditIndex(props.index);
  }

  const completedStyle = {
    padding: '7px 25px',
    fontFamily: 'Outfit',
    fontSize: '13px',
    backgroundColor: '#0DCB46',
    fontWeight: 600,
    borderRadius: '6px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginRight: '5px'
  }
  
  const inProgressStyle = {
    padding: '7px 25px',
    fontFamily: 'Outfit',
    fontSize: '13px',
    backgroundColor: '#244CA1',
    fontWeight: 600,
    borderRadius: '6px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginRight: '5px'
  }

  function completeTask() {
    const arr = props.taskList;
    arr[props.index-1].isCompleted = true;
    props.setCompletedList(prevList => [...prevList,
      props.index-1, 
    ])
  }

  function undoTask() {
    const arr = props.taskList;
    arr[props.index-1].isCompleted = false;
    const arrC = props.completedList;
    const newArrC = arrC.filter((item,index) => item !== props.index-1)
    props.setCompletedList(newArrC);
  }

  return (
    <div className="task-container">
      <div className="task-info">
        <p className="task-attribute">{props.index}</p>
        <p className="task-attribute task-name">{props.name}</p>
        <p className="task-attribute date">{props.dueDate}</p>
        <p className="task-attribute">{props.isCompleted ? 'Completed' : 'In progress'}</p>
      </div>
      <div className="user-todolist-buttons">
        <button className="complete-task-button" style={props.isCompleted ? completedStyle : inProgressStyle} onClick={props.isCompleted ? undoTask : completeTask}>{props.isCompleted ? 'Undo' : 'Complete'}</button>
        <button className="edit-button" onClick={editTask}>Edit</button>
        <button className="delete-button" onClick={deleteTask}>Delete</button>
      </div>
    </div>
  );
}