import "./NewTaskForm.css";
import { Component } from "react";

export default class NewTaskForm extends Component {
  state = {
    taskName: "",
  };

  onTextChange = (e) => {
    this.setState({
      taskName: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.taskName);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="How to become a senior?"
          autoFocus
          onChange={this.onTextChange}
        />
      </form>
    );
  }
}
