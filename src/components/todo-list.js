import React, { Component } from 'react'

export default class ToDoForm extends Component {

  renderTodo() {
    return this.props.todos.map( (todo, index) => {
      return (
        <li key={todo.id} className="list-group-item">
          {todo.text}
          <button
            className="btn btn-danger btn-xs pull-right"
            onClick={this.props.onDelete.bind(null, index)}
          > del </button>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading"><h1>To Dos</h1></div>
        <ul className="list-group">
          { this.renderTodo() }
        </ul>
      </div>
    )
  }
}
