import { Component } from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/TasksFilter';

import './Footer.css';

export default class Footer extends Component {
  static defaultProps = {
    leftCount: 0,
    filteredArr: () => {},
    deleteCompleted: () => {},
  };

  static propTypes = {
    leftCount: PropTypes.number,
    filteredArr: PropTypes.func,
    deleteCompleted: PropTypes.func,
  };

  render() {
    const { leftCount, filteredArr, deleteCompleted } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{leftCount} items lefЫt</span>
        <TasksFilter filteredArr={(status) => filteredArr(status)} />
        <button className="clear-completed" onClick={deleteCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
