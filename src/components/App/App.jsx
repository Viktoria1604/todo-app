import NewTaskForm from "../NewTaskForm/NewTaskForm";
import "./App.css";
import Footer from "../Footer/Footer";
import TaskList from "../TaskList/TaskList";

const App = () => {
  const tasks = [
    { id: 1, taskName: "Drink Coffee", creationTime: Date.now(), done: true },
    {
      id: 2,
      taskName: "Drink energetic",
      creationTime: Date.now(),
      done: true,
    },
    { id: 3, taskName: "Drink Alhocol", creationTime: Date.now(), done: false },
  ];

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList todos={tasks} />
        <Footer />
      </section>
    </section>
  );
};

export default App;
