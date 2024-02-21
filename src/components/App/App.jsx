import { Component } from 'react';

import NewTaskForm from '../NewTaskForm/NewTaskForm';
import './App.css';
import Footer from '../Footer/Footer';
import TaskList from '../TaskList/TaskList';

export default class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        taskName: 'Drink Coffee',
        creationTime: Date.now(),
        done: false,
        editing: false,
      },
      {
        id: 2,
        taskName: 'Drink Energetic',
        creationTime: Date.now(),
        done: false,
        editing: false,
      },
      {
        id: 3,
        taskName: 'Drink Alhocol',
        creationTime: Date.now(),
        done: false,
        editing: false,
      },
    ],
    status: 'all',
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

  deleteCompleted = () => {
    this.setState(({ tasks }) => {
      const newArr = tasks.filter((el) => !el.done);
      return {
        tasks: newArr,
      };
    });
  };

  editTask = (id, newText) => {
    this.setState(({ tasks }) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, taskName: newText };
        }
        return task;
      });

      return {
        tasks: updatedTasks,
      };
    });
  };

  createTask = (taskName) => {
    return {
      id: Math.random().toString(36).slice(2),
      taskName,
      creationTime: Date.now(),
      done: false,
    };
  };

  addTask = (text) => {
    const newTask = this.createTask(text);
    this.setState(({ tasks }) => {
      const arrayAdded = [...tasks, newTask];
      return {
        tasks: arrayAdded,
      };
    });
  };

  taskCompleted = (id) => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex((el) => el.id === id);
      const oldTask = tasks[idx];
      const newTask = { ...oldTask, done: !oldTask.done };
      const newArr = tasks.toSpliced(idx, 1, newTask);
      return { tasks: newArr };
    });
  };

  taskFilters = (status) => {
    if (status === 'all') {
      return this.state.tasks;
    }
    if (status === 'active') {
      return this.state.tasks.filter((el) => !el.done);
    }
    if (status === 'completed') {
      return this.state.tasks.filter((el) => el.done);
    }
  };
  filteredArr = (status) => {
    this.setState(() => {
      return { status };
    });
  };

  changeEditingStatus = (id) => {
    this.setState(({ tasks }) => {
      const copyStateArr = structuredClone(tasks);
      const index = copyStateArr.findIndex((el) => el.id === id);

      copyStateArr[index].editing = !copyStateArr[index].editing;

      return {
        tasks: copyStateArr,
      };
    });
  };

  render() {
    const leftCount = this.state.tasks.filter((el) => !el.done).length;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addTask={(text) => this.addTask(text)} />
        </header>
        <section className="main">
          <TaskList
            todos={this.taskFilters(this.state.status)}
            onDeleted={(id) => this.deleteitem(id)}
            onCompleted={(id) => this.taskCompleted(id)}
            editTask={(id, newText) => this.editTask(id, newText)}
            changeEditingStatus={(id) => this.changeEditingStatus(id)}
          />
          <Footer
            leftCount={leftCount}
            filteredArr={(status) => this.filteredArr(status)}
            deleteCompleted={this.deleteCompleted}
          />
        </section>
      </section>
    );
  }
}
