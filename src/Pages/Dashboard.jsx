import React from "react";
import Sidebar from "../Components/Sidebar";
import back from '../Assets/Background.svg';
import Quote from "../Components/Quote";
import ToDoList from "../Components/ToDoList";
import AddTaskModal from "../Components/AddTaskModal";

export default function Dashboard(props) {

  const [taskList,setTaskList] = React.useState([]);
  const [isAdding,setIsAdding] = React.useState(false);
  console.log(taskList);

  const [taskName,setTaskName] = React.useState('');
  const [taskDescription,setTaskDescription] = React.useState('');
  const [taskDate,setTaskDate] = React.useState('');
  const [isEditing,setIsEditing] = React.useState(false);
  const [editIndex,setEditIndex] = React.useState(0);

  if(window.location.href === 'http://localhost:3000/home')
    document.body.style.overflow = "";
  else
    document.body.style.overflow = "hidden";

  return (
    <div className="dashboard-container">
      <img className="back" src={back}></img>
      <Sidebar setNeedsOverFlow={props.setNeedsOverFlow}/>
      <div className="features-dash">
        <Quote />
        <ToDoList
          taskList={taskList} 
          setIsAdding={setIsAdding} 
          setTaskList={setTaskList}
          setTaskName={setTaskName}
          setTaskDescription={setTaskDescription}
          setTaskDate={setTaskDate}
          setIsEditing={setIsEditing}
          setEditIndex={setEditIndex}
         />
      </div>
      <AddTaskModal
        taskList={taskList}
        setTaskList={setTaskList} 
        isAdding={isAdding} 
        setIsAdding={setIsAdding}
        setTaskName={setTaskName}
        setTaskDescription={setTaskDescription}
        setTaskDate={setTaskDate}
        taskName={taskName}
        taskDescription={taskDescription}
        taskDate={taskDate}
        isEditing={isEditing}
        editIndex={editIndex}
      />
    </div>
  );
}