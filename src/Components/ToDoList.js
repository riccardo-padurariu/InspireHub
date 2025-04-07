import React from "react";
import '../Styles/ToDoList.css';
import Task from "./Task";
import { Database, getDatabase } from "firebase/database";
import { ref,get } from "firebase/database";

export default function ToDoList(props) {

  const [completedList,setCompletedList] = React.useState([]);
  const [indexC,setIndexC] = React.useState(0);


  const fetchData = async () => {
    const db = getDatabase();
    const dbRef = ref(db,'UserData');
    const snapshot = await get(dbRef);
    if(snapshot.exists){
      const arr = Object.values(snapshot.val());
    }else{
      alert('error');
    }
  }

  fetchData();

  const arr = props.taskList;
  let i = 1;
  const displayArr = arr.map((item) => <Task
    name = {item.name}
    description = {item.description}
    dueDate = {item.dueDate}
    isCompleted = {item.isCompleted}
    setIsAdding = {props.setIsAdding}
    index = {i++}
    taskList = {props.taskList}
    setTaskList = {props.setTaskList}
    setTaskName={props.setTaskName}
    setTaskDescription={props.setTaskDescription}
    setTaskDate={props.setTaskDate}
    setIsEditing={props.setIsEditing}
    setEditIndex={props.setEditIndex}
    completedList={completedList}
    setCompletedList={setCompletedList}
   />
  );

  function setUpToAdd(){
    props.setTaskName('');
    props.setTaskDate('');
    props.setTaskDescription('');
    props.setIsAdding(true);
    props.setIsEditing(false);
  }



  let result = 0;

  if(props.taskList.length > 0) 
    result =  Math.round(completedList.length / props.taskList.length * 100) 
  else
    result = 0;


  return (
    <div className="todolist-container">
      <p className="todolist-title">Your daily goals</p>
      <div className="progress-bar-div">
        <div className="title-procent">
          <p className="pb-title">Overall progress</p>
          <p className="procent">{result}%</p>
        </div>
        <div className="progress-bar-visual">

        </div>
        <p className="pb-stats">{completedList.length} of {props.taskList.length} completed</p>
      </div>
      <button className="addtask-button" onClick={setUpToAdd}>+ New Task</button>
      <div className="task-list-container" style={{height: window.innerHeight-445 + "px"}}>
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