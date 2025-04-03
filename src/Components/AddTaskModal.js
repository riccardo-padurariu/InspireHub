import React from "react";
import '../Styles/AddTaskModal.css';
import cross from '../Assets/material-symbols_close-rounded.svg';
import backImg from '../Assets/Saly-26.svg';

export default function AddTaskModal(props) {
 
  const [taskName,setTaskName] = React.useState('');
  const [taskDescription,setTaskDescription] = React.useState('');
  const [taskDate,setTaskDate] = React.useState('');

  const styleOnAdding = {
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    position: 'relative',
    marginLeft: '-1510px',
    opacity: 1,
    width: '1520px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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

  console.log(taskDate);
  console.log(taskDescription);
  console.log(taskName);

  function addTask(){
    props.setTaskList(oldArr => [...oldArr,
      {
        name: taskName,
        description: taskDescription,
        dueDate: String(taskDate)
      }
    ]);
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
              <input className="input-add-task name-modal" type="text" placeholder="Set your goal name" value={taskName} onChange={(e) => setTaskName(e.target.value)}></input>
            </div>
            <div className="add-task-input-div">
              <p className="label-add-task">Goal Description</p>
              <input className="input-add-task-description desc" type="text" placeholder="Set your goal description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></input>
            </div>
            <div className="add-task-input-div">
              <p className="label-add-task">Due Date</p>
              <input className="input-add-task date" type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)}></input>
            </div>
            <button className="add-task-modal-button" onClick={addTask}>ADD GOAL</button>
          </div>
          <img className="info-img" src={backImg}></img>
        </div>
      </div>
    </div>
  );
}