import React from "react";
import '../Styles/Task.css'
import arr from '../Assets/Arrow up-right.svg';

export default function Task(props) {

  const [isExtended,setIsExtended] = React.useState(false);

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
    width: '105px',
    padding: '7px 0px',
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
    width: '105px',
    padding: '7px 0px',
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

  const styleInfosNormal = {
    marginLeft: '-15px',
    marginRight: '35px',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }

  const styleInfoExtended = {
    marginLeft: '100px',
    marginRight: '35px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-around',
    gap: '5px'
  }

  const styleUserButtonsNormal = {};

  const styleUserButtonsExtended = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  }

  return (
    <div className="task-main-div">
      <div className="task-container">
        <div style={{display: 'flex',flexDirection: 'column',alignItems: 'start',height: isExtended ? '108px' : ''}}>
          <button onClick={() => setIsExtended(prev => !prev)} className="expand-task-button">
            <img className="arr-task" style={{rotate: isExtended ? '' : '180deg'}} src={arr}></img>
          </button>
        </div>
        <div className="task-info" style={isExtended ? styleInfoExtended : styleInfosNormal}>
          <p className="task-attribute">{isExtended ? `Nr task: ${props.index}` : `${props.index}`}</p>
          <p className="task-attribute task-name" style={{marginLeft: (isExtended ? 0 : 52) + 'px'}}>{isExtended ? `Task name: ${props.name}` : `${props.name}`}</p>
          <p className="task-attribute date" style={{marginLeft: (isExtended ? 0 : 10) + 'px'}}>{isExtended ? `Due hour: ${props.dueDate}` : `${props.dueDate}`}</p>
          {isExtended && <p className="task-attribute">{`Task description: ${props.description}`}</p>}
          <p className="task-attribute">{isExtended ? `Task status: ${props.isCompleted ? 'Completed' : 'In progress'}` : props.isCompleted ? 'Completed' : 'In progress'}</p>
        </div>
        <div className="user-todolist-buttons" style={isExtended ? styleUserButtonsExtended : styleUserButtonsNormal}>
          <button className="complete-task-button" style={props.isCompleted ? completedStyle : inProgressStyle} onClick={props.isCompleted ? undoTask : completeTask}>{props.isCompleted ? 'Undo' : 'Complete'}</button>
          <button className="edit-button" onClick={editTask}>Edit</button>
          <button className="delete-button" style={{marginRight: '3px'}} onClick={deleteTask}>Delete</button>
        </div>
      </div>
    </div>
  );
}