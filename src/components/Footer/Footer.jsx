import TasksFilter from "../TasksFilter/TasksFilter";
import "./Footer.css";
const Footer = ({leftCount, filteredArr, deleteCompleted}) => {
  
  return (
    <footer className="footer">
      <span className="todo-count">{leftCount} items left</span>
      <TasksFilter filteredArr={(status)=>filteredArr(status)}/>
      <button className="clear-completed" onClick={deleteCompleted}>Clear completed</button>
    </footer>
  );
};

export default Footer;
