import './NewTaskForm.css'
import { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  state = {
    taskName: '',
  }

  static defaultProps = {
    addTask: () => {},
  }

  static propTypes = {
    addTask: PropTypes.func,
  }

  onTextChange = (e) => {
    this.setState({
      taskName: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTask(this.state.taskName)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="How to become a senior?" autoFocus onChange={this.onTextChange} />
      </form>
    )
  }
}
