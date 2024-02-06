import React, { Component } from "react";
import "./Task.css";

export default class Task extends Component {
 

  render() {
    const { taskName, creationTime, done, onDeleted, onCompleted } = this.props;
    

    return (
      <li className={done ? "description complited" : "description"}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={done}
            onChange={onCompleted}
          
          />

          <label  onClick={onCompleted}>
            <span className="description">{taskName}</span>
            <span className="created">{creationTime}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <input type="text" className="edit" />
      </li>
    );
  }
}
