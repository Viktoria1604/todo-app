import React, { Component } from "react";
import "./Task.css";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

export default class Task extends Component {
  static defaultProps = {
    taskName: "",
    creationTime: Date.now(),
    done: false,
    onDeleted: () => {},
    onCompleted: () => {},
    editing: false,
    editTask: () => {},
    changeEditingStatus: () => {},
  };

  static propTypes = {
    taskName: PropTypes.string,
    creationTime: PropTypes.number,
    done: PropTypes.bool,
    onCompleted: PropTypes.func,
    onDeleted: PropTypes.func,
    editing: PropTypes.bool,
    editTask: PropTypes.func,
    changeEditingStatus: PropTypes.func,
  };

  state = {
    editingTaskText: this.props.taskName,
  };

  editTaskText = (e) => {
    this.setState({
      editingTaskText: e.target.value,
    });
  };

  render() {
    const {
      taskName,
      creationTime,
      done,
      editing,
      onDeleted,
      onCompleted,
      changeEditingStatus,
      editTask,
    } = this.props;
    const { editingTaskText } = this.state;
    const isEditingClass = editing ? "editing" : "";
    const isDoneClass = done ? "completed" : "";
    return (
      <li className={`${isEditingClass} ${isDoneClass}`}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={done}
            onChange={onCompleted}
          />
          <label>
            <span className="description">{taskName}</span>
            <span className="created">
              {formatDistanceToNow(new Date(creationTime), {
                includeSeconds: true,
              })}
            </span>
          </label>
          <button
            className="icon icon-edit"
            onClick={changeEditingStatus}
          ></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          changeEditingStatus();
          editTask(editingTaskText);
        }}>
          <input
            type="text"
            className="edit"
            value={editingTaskText}
            onChange={this.editTaskText}
          />
        </form>
      </li>
    );
  }
}
