import NewTaskForm from "../NewTaskForm/NewTaskForm";
import "./App.css";
import Footer from "../Footer/Footer";
import TaskList from "../TaskList/TaskList";
import { Component } from "react";

export default class App extends Component {
  state = {
    tasks: [
      { id: 1, taskName: "Drink Coffee", creationTime: Date.now() },
      {
        id: 2,
        taskName: "Drink Energetic",
        creationTime: Date.now(),
      },
      { id: 3, taskName: "Drink Alhocol", creationTime: Date.now() },
    ],
  };

  deleteitem = (id) => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex((el) => el.id === id);
      const newArr = tasks.toSpliced(idx, 1);
      return {
        tasks: newArr,
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList
            todos={this.state.tasks}
            onDeleted={(id) => this.deleteitem(id)}
          />
          <Footer />
        </section>
      </section>
    );
  }
}
