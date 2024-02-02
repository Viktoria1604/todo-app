import React from "react";
import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((item) => {
        const { id, ...todo } = item;
        return <Task key={id} {...todo} />;
      })}
    </ul>
  );
};

export default TaskList;
