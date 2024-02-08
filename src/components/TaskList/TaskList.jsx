import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Task from '../Task/Task'

import './TaskList.css'

export default class TaskList extends Component {
  static defaultProps = {
    todos: [],
    onDeleted: () => {},
    onCompleted: () => {},
    editTask: () => {},
    changeEditingStatus: () => {},
  }

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    onCompleted: PropTypes.func,
    onDeleted: PropTypes.func,
    editTask: PropTypes.func,
    changeEditingStatus: PropTypes.func,
  }

  render() {
    const { todos, onDeleted, onCompleted, editTask, changeEditingStatus } = this.props
    return (
      <ul className="todo-list">
        {todos.map((item) => {
          const { id, ...todo } = item
          return (
            <Task
              key={id}
              {...todo}
              onDeleted={() => onDeleted(id)}
              onCompleted={() => onCompleted(id)}
              editTask={(newText) => editTask(id, newText)}
              changeEditingStatus={() => changeEditingStatus(id)}
            />
          )
        })}
      </ul>
    )
  }
}
