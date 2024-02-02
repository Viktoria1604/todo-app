import React from "react";
import "./Task.css";
const Task = ({ taskName, creationTime, done }) => {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" checked={done} />
        <label>
          <span className="description">{taskName}</span>
          <span className="created">{creationTime}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input type="text" className="edit" value="Editing task" />
    </li>
  );
};

export default Task;
