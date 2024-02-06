import React from "react";
import "./TasksFilter.css";
const TasksFilter = ({filteredArr}) => {
  return (
    <ul className="filters">
      <li>
        <button  onClick={() => filteredArr("all")}>All</button>
      </li>
      <li>
        <button onClick={()=>filteredArr("active")}>Active</button>
      </li>
      <li>
        <button 
        onClick={() =>filteredArr("completed")}>Completed</button>
      </li>
    </ul>
  );
};

export default TasksFilter;
