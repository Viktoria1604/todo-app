import React from "react";
import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({ todos, onDeleted }) => {
  return (
    <ul className="todo-list">
      {todos.map((item) => {
        const { id, ...todo } = item;
        return <Task key={id} {...todo} onDeleted={() => onDeleted(id)} />;
      })}
    </ul>
  );
};

export default TaskList;
