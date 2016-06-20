import React, { Component } from 'react'

export default class ToDoForm extends Component {

  renderTodo() {
    return this.props.todos.map( (todo, index) => {
      return (
        <li key={todo.id}>
          {todo.text}
          <button onClick={this.props.onDelete.bind(null, index)}> del </button>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h1> Todos </h1>
        <ul>
          { this.renderTodo() }
        </ul>
      </div>
    )
  }
}
