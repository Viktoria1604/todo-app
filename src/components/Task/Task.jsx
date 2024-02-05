import React, { Component } from "react";
import "./Task.css";

export default class Task extends Component {
  state = {
    done: false,
  };

  clickOn = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  render() {
    const { taskName, creationTime, onDeleted } = this.props;
    const { done } = this.state;

    return (
      <li className={done ? "description complited" : "description"}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={done}
            onChange={this.clickOn}
          />

          <label onClick={this.clickOn}>
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
