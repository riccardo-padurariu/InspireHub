import React from "react";
import '../Styles/AddTaskModal.css';
import cross from '../Assets/material-symbols_close-rounded.svg';
import backImg from '../Assets/Saly-26.svg';
import { useAuth } from "../Authentification/AuthContext";
import { Database, getDatabase } from "firebase/database";
import { ref,get } from "firebase/database";

export default function AddTaskModal(props) {

  const { currentUser } = useAuth();

  

  const styleOnAdding = {
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    position: 'fixed',
    //marginLeft: '-1510px',
    left: 0,
    opacity: 1,
    //width: '1520px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }

  const styleOnNormal = {
    backdropFilter: 'blur(10px)',
    zIndex: -1,
    position: 'relative',
    marginLeft: '-1510px',
    opacity: 0,
    width: '1520px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const sendData = async (e) => {
    const list = props.taskList;
    //e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'ContentType': 'application/json'
      },
      body: JSON.stringify({
        list
      })
    }
    const res = await fetch('https://inspirehub-3779f-default-rtdb.firebaseio.com/UserData.json',options);
    if(res)
      alert('message sent');
    else
      alert('error');
  }

  function addTask(){
    props.setTaskList(oldArr => [...oldArr,
      {
        name: props.taskName,
        description: props.taskDescription,
        dueDate: String(props.taskDate),
        isCompleted: false,
        id: currentUser.displayName
      }
    ]);

    console.log('list task: ');
    console.log(props.taskList);

    sendData();

    props.setIsAdding(false);
    props.setTaskName('');
    props.setTaskDate('');
    props.setTaskDescription('');
  }

  function editTaskModal() {
    const arr = props.taskList;
    arr[props.editIndex-1] = {
      name: props.taskName,
      description: props.description,
      dueDate: String(props.taskDate),
      isCompleted: false
    }
    props.setIsAdding(false);
  }

  return (
    <div className="add-task-div" style={props.isAdding ? styleOnAdding : styleOnNormal}>
      <div className="add-task-modal-container">
        <div className="title-exit-button">
          <p className="add-task-title">Set your daily goals</p>
          <button className="exit-button" onClick={() => {props.setIsAdding(false)}}>
            <img className="cross-img" src={cross}></img>
          </button>
        </div>
        <div className="info-img-div">
          <div className="infos">
            <div className="add-task-input-div">
              <p className="label-add-task">Goal Name</p>
              <input className="input-add-task name-modal" type="text" placeholder="Set your goal name" value={props.taskName} onChange={(e) => props.setTaskName(e.target.value)}></input>
            </div>
            <div className="add-task-input-div">
              <p className="label-add-task">Goal Description</p>
              <input className="input-add-task-description desc" type="text" placeholder="Set your goal description" value={props.taskDescription} onChange={(e) => props.setTaskDescription(e.target.value)}></input>
            </div>
            <div className="add-task-input-div">
              <p className="label-add-task">Due Date</p>
              <input className="input-add-task date" type="date" value={props.taskDate} onChange={(e) => props.setTaskDate(e.target.value)}></input>
            </div>
            <button className="add-task-modal-button" onClick={props.isEditing ? editTaskModal : addTask}>{props.isEditing ? "EDIT TASK" : "ADD TASK"}</button>
          </div>
          <img className="info-img" src={backImg}></img>
        </div>
      </div>
    </div>
  );
}