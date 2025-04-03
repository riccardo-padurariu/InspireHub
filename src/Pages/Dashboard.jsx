import React from "react";
import Sidebar from "../Components/Sidebar";
import back from '../Assets/Background.svg';
import Quote from "../Components/Quote";
import ToDoList from "../Components/ToDoList";
import AddTaskModal from "../Components/AddTaskModal";

export default function Dashboard() {

  const [taskList,setTaskList] = React.useState([]);
  const [isAdding,setIsAdding] = React.useState(false);
  console.log(taskList);

  return (
    <div className="dashboard-container">
      <img className="back" src={back}></img>
      <Sidebar />
      <div className="features-dash">
        <Quote />
        <ToDoList taskList={taskList} setIsAdding={setIsAdding} setTaskList={setTaskList}/>
      </div>
      <AddTaskModal setTaskList={setTaskList} isAdding={isAdding} setIsAdding={setIsAdding}/>
    </div>
  );
}